const { app } = require('@azure/functions');
const {
  BlobServiceClient,
  StorageSharedKeyCredential  
} = require( "@azure/storage-blob" );

const generateSASToken = require ( "../../lib/generateSASToken" );

const accountName = process.env.accountName;
const accountKey = process.env.accountKey;

const containerName = "images";

const sharedKeyCredential = new StorageSharedKeyCredential(
  accountName,
  accountKey
);

const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);


app.http("getImages", {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

      const containerClient = blobServiceClient.getContainerClient(containerName);
      
      const imageUrls = [];
      const sasToken = await generateSASToken();

      for await ( const blob of containerClient.listBlobsFlat()){
        const imageUrl = `${blob.name}?${sasToken}`;
        const url = `https://${accountName}.blob.core.windows.net/${containerName}/${blob.name}?${sasToken}`;

        imageUrls.push ( {url, name: blob.name});
      }

      const sortedImageUrls = imageUrls.sort( (a,b) => {
        // draw-a-diansour_16261200000.png

        // q:from a string, take first part of the split("_") and make it string
        // a: a.name.split("_").pop().toString()


        const aName = a.name.split("_").pop().toString().split(",").shift().split('.').shift();
        const bName = b.name.split("_").pop().toString().split(",").shift().split('.').shift();
        console.log ( "aName :  >>>>>>>>>>>", aName )
        console.log ( "bName :  >>>>>>>>>>>", bName )
        return bName - aName;
      });

      console.log ( "sorted ImageURLS :  >>>>>>>>>>>", sortedImageUrls.map( url => url.name.split('_').pop()) )

      return { 
        jsonBody: {
          imageUrls:sortedImageUrls 
        },
      };
    },
});
