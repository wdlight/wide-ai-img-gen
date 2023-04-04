const { app } = require('@azure/functions');
const openai = require ( "../../lib/openai" );
const axios = require( "axios");
const generateSASToken = require ( "../../lib/generateSASToken" );

const { BlobServiceClient } = require("@azure/storage-blob");
const accountName = process.env.accountName;
const containerName = "images";

app.http('generateImage', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    const { prompt } = await request.json();
    console.log ( `prompt: ${prompt}`);

    const response = await openai.createImage( {          
        prompt: prompt,
        n: 1,
        size: `1024x1024`,
    });

    image_url = response.data.data[0].url;
    const res = await axios.get( image_url, { responseType: "arraybuffer" });
    const arrayBuffer = res.data;
    

    sasToken = await generateSASToken();
    console.log ( ">>>>>>> sasToken ", sasToken);
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net?${sasToken}`
    );
    const containerClient = blobServiceClient.getContainerClient(containerName);

    //generate current timestamp
    const timestamp = new Date().getTime();
    const filename = `${prompt.slice(0,10)}_${timestamp}.png`;

    const blockBlobClient = containerClient.getBlockBlobClient(filename );
    console.log ( ">>>>>>> blockBlobClient passing filename as :", filename)
    try {
      await blockBlobClient.uploadData(arrayBuffer);
      console.log ( "File uploaded successfully");
    } catch ( error ){
      console.log ( "Error uploading Error ", error.message );
    }

  
    return { body: "Successfully UPloaded Image" };
  }
});

