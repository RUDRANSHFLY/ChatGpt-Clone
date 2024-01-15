import query from "library/queryApi";
import type 
{ 
    NextApiRequest , 
    NextApiResponse 
} from "next";
import admin from 'firebase-admin';
import { adminDB } from "../../../FireBase/FireBaseAdmin";


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
        createdAt : admin.firestore.Timestamp.now(),
        user : {
            _id : 'ChatGPT' ,
            name : 'ChatGPT' ,
            avatar : 'https://links.papareact.com/89k',
        }
    };

    await adminDB
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);






    res.status(200).json({answer : message.text});
}