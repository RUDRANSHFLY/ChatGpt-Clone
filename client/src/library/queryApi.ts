import OpenAI from "openai";
import { mainGpt } from "./chatgpt";
import { getModels } from "makeRequest";


const query = async (prompt: string  ,chatID : string  , model : string) => {
   console.log("CHECKING MODEL REQUEST");
   await getModels();
   return await mainGpt( prompt , chatID , model );
}

export default query;