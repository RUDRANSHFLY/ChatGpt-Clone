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


export const getAnswer = async ({ input , chatId , model ,  session , notification } : Props) => {
    

    // console.log(`THE INPUT TEXT IS :- ${input}`);
    // console.log(`THE CHATID IS :- ${chatId}`);
    // console.log(`THE MODEL IS:- ${model}`);
    // console.log(`THE SESSION IS :- ${session}`);
 
    

    // debugger;
   
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






