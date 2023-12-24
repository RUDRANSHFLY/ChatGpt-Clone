import { log } from "console";
import OpenAI from "openai" ;


const openai = new OpenAI(
    {
        apiKey : process.env.OPENAI_SECRET
    }
);

export async function mainGpt(prompt: string  ,chatID : string  , model : string) : Promise<string> {
    
    try {
        let answer : string = '';


        const response = await openai.chat.completions.create({
            model : 'gpt-3.5-turbo-0301',
            messages : [{role : "user" ,content : prompt}],
            stream : true ,
        });

        
        for await (const chunk of response) {
            const firstAnswer = chunk.choices[0]?.delta?.content || "";
            if(firstAnswer){
                answer += firstAnswer ;
            }
        } 

          
        return answer ;

       
    
    } catch ( error : any ) {
        console.error("Error in API Response :- ", error.message);
        console.error("Error details:",error);
        throw error ;
    }
    
    


    

    
}


