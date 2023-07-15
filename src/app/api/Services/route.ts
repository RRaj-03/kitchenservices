import { NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";
export async function POST(request: Request): Promise<Response> {
  try {
    const client = await clientPromise;
    console.log("hea");
    const Services = client.db("KitchenServices").collection("Services");
    console.log("Services", Services);
    const value = await Services.find().toArray();
    return NextResponse.json({ value: value });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
