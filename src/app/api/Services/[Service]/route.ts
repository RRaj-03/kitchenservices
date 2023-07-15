import { NextResponse } from "next/server";
import clientPromise from "../../MongoConnect/route";
export async function GET(
  request: Request,
  { params }: { params: { Service: string } }
) {
  try {
    const client = await clientPromise;
    const Services = client.db("KitchenServices").collection("Services");
    // const length = Services.insertOne({title:"Chimney",Services:[{title:"Installation",Price:"400"}]})
    const value = await Services.findOne({
      name: params.Service.split("-").join(" "),
    });
    return NextResponse.json({ value: value });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
