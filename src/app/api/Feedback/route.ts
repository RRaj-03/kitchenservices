import axios from "axios";
import { NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";
import * as Yup from 'yup'
import { error } from "console";

const TaskValidationSchema = Yup.object({
    name: Yup.string().required(),
    city:Yup.string().required(),
    message:Yup.string().required()
});
export async function POST(request: Request): Promise<Response> {
    try {
        let body = await request.json()
        const task = await TaskValidationSchema.validate(body);
        const client = await clientPromise;
        const Services = client.db("KitchenServices").collection("Feedback")
        const FeedBackID = await Services.insertOne(task)
        console.log('FeedBackID', FeedBackID)
        if(FeedBackID.acknowledged){

            return NextResponse.json({value:{message:"Your Feedback is Recieved Successfully"}})
        }else{
            return NextResponse.json({message:"Something Went Wrong"},{ status : 400 })

        }
     
     
    
    
      } catch (err:any) {
        console.error("rer",err)
        return NextResponse.json({ message:err.message })
      }
}