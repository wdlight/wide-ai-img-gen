const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration ( {
  organization: process.env.OPEN_AI_ORGANIZATION,
  apiKey: process.env.OPEN_AI_KEY,
});


let openai;
try {
  console.log ( " creating openAIApi === ",process.env.OPEN_AI_ORGANIZATION, process.env.OPEN_AI_KEY )
  openai = new OpenAIApi (config);
  console.log ( " creating openAIApi")
} 
catch( e ){
  console.log ( "Error in openai.js: " + e );
  console.log ( " context error in openai.js: " + e)
}

module.exports = openai;