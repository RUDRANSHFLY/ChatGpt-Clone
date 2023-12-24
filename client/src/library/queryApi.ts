import OpenAI from "openai";
import { mainGpt } from "./chatgpt";


const query = async (prompt: string  ,chatID : string  , model : string) => {
   return await mainGpt( prompt , chatID , model );
}

export default query;