import { NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";
export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const Services = client.db("KitchenServices").collection("Services");
    const value = await Services.find().toArray();
    return NextResponse.json(
      { value: value },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
