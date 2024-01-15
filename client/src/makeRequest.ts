import { log } from "console";
import { Session } from "next-auth";
import toast from "react-hot-toast";

type Props = {
    input : string ,
    chatId : string ,
    model : string ,
    session : Session | null,
    notification : string ,
}


const ModelRequestUrl : string = "https://api.openai.com/v1/models";

export const getAnswer = async ({ input , chatId , model ,  session , notification } : Props) => {
    try {
        await fetch('/api/askQuestion',{
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application-json'
            },
            body : JSON.stringify({
                prompt : input ,
                    chatId , 
                    model , 
                session : session 
            }),
        }).then(() => {
           toast.success("ChatGPT has responded!",{
                id : notification , 
           })     
        });
    } catch (error) {
        console.error(error);
    }
   
    
    
    return ;
}


export const getModels = async () => {
    try {
        const req = await fetch(ModelRequestUrl,{
            method : 'GET',
            headers : {
                Authorization : `Bearer ${process.env.OPENAI_SECRET}`
            },
        })


        console.log(req.body);
        const res = await req.json();
        console.log(res.data);
        return res ;
    
    } catch (error) {
        console.error(error);
    }
}





