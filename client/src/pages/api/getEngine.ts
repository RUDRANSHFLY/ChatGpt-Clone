import type { NextApiRequest , NextApiResponse } from "next";
import { mainGpt } from "library/chatgpt";
import { NextResponse } from "next/server";
import { getModels } from "makeRequest";


type Option = {
    value : string ;
    label : string ;
};



type Data = {
    modelOptions : Option[];
};


export default async function handler(
    req : NextApiRequest,
    res : NextApiResponse<Data>
){


    const models = await getModels() ;


    console.log(models);
    


    const modelOptions = models?.data?.map((model: { id: string; owned_by: string; }) => ({
        value : model.id,
        label : model.owned_by,
    }));

    res.status(200).json({
        modelOptions,
    });



}