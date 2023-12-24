import query from "library/queryApi";
import type 
{ 
    NextApiRequest , 
    NextApiResponse 
} from "next";


type Data = {
    answer : string ,
}



export default async function handler(
    req : NextApiRequest ,
    res : NextApiResponse<Data>,
) {
    
    
    
 
    
    const jsonObject = JSON.parse(req.body);

    const {prompt , chatId , model , session } = jsonObject ;
    
    
    if(!prompt){
        res.status(400).json({answer : "Please provide a prompt!"});
    };

    if(!chatId){
        res.status(400).json({answer : "Please provide a valid chat ID!"});
    };

 
    
    
    const response =  await query(prompt, chatId, model);
    console.log(`the response is :- ${response}`);
    

    const message : Message = {
        text : response || "ChatGPT was unable to find an answer for that!",
        createdAt : '',
        user : {
            _id : '' ,
            name : '' ,
            avatar : '',
        }
    }

    res.status(200).json({answer : "John Doe"});
}