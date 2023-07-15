import { NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";

export async function GET(request: Request) {
  try {
    console.log(request.url);
    const client = await clientPromise;
    const Services = client.db("KitchenServices").collection("Services");
    const value = await Services.find().toArray();
    return NextResponse.json({ value: value });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
