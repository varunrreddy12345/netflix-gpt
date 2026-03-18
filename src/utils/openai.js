import OpenAI from 'openai';
import {OPEANAI_KEY} from "./constants"; 

const openai = new OpenAI({
  apiKey: OPEANAI_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;