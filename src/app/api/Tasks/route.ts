import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";
import * as Yup from 'yup'
const TaskValidationSchema = Yup.object({
  userid:Yup.string().required(),
  password:Yup.string().required(),
  page:Yup.number().required()
});

export async function POST(request: Request): Promise<Response> {
  try {
    let body = await request.json()
    const {userid,password,page} = await TaskValidationSchema.validate(body);
    if(userid===process.env.USER_ID && password===process.env.PASSWORD){
      const client = await clientPromise;
    const Services = client.db("KitchenServices").collection("Tasks")
    const Task = await Services.find({}).sort({_id:-1}).skip(20*(page-1)).limit(20*page).toArray()
    const totalData = await Services.countDocuments()
    return NextResponse.json({Task:Task,totalData:totalData})
    }else{
    return NextResponse.json({ error:"Invalid Login Details" })
    }
  } catch (error:any) {
    console.error(error)
    return NextResponse.json({ error:error.message })
  }
}