import { NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";

export async function GET(request:Request) {
    try {
      const client = await clientPromise;
      const Services = client.db("KitchenServices").collection("Services")
      // const length = Services.insertOne({title:"Chimney",Services:[{title:"Installation",Price:"400"}]})
      const value = await Services.find().toArray()
      return NextResponse.json({"value":value})
    } catch (error) {
      console.error(error)
      return NextResponse.json({error})
    }
}