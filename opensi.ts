import { Configuration, OpenAI } from 'openai-api';

const config = new Configuration ( {
  organizationId : 'org-IkW29TiKde5ArVIN3astd5VD' ,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI (config);

export default openai;