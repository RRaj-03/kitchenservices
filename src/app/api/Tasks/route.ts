import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";
import * as Yup from 'yup'
import axios from 'axios'
const TaskValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  email: Yup.string().email('Invalid email address'),
  date: Yup.string().required('Required'),
  phone: Yup.number()
    .min(1000000000, "Inalid Phone Number")
    .max(9999999999, "Inalid Phone Number")
    .typeError("Inalid Phone Number")
    .integer("Inalid Phone Number")
    .required("Required"),
  service: Yup.object({
    _id: Yup.string().required("Required"),
    name: Yup.string().required("Required")
  }),
  // price: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  address: Yup.string().required("Required")

});

export async function POST(request: Request): Promise<Response> {
  try {
    let body = await request.json()
    const task = await TaskValidationSchema.validate(body);
    const client = await clientPromise;
    const Services = client.db("KitchenServices").collection("Tasks")
    const TaskID = await Services.insertOne(task)
    const data = {
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID1,
      user_id: process.env.EMAIL_PUBLIC_KEY,
      accessToken: process.env.EMAIL_PRIVATE_KEY,
      template_params: {
        ...body,
        name: (task.name),
        'to_email': process.env.EMAIL
      }
    };
    axios.post("https://api.emailjs.com/api/v1.0/email/send", data, { headers: { 'Content-Type': "application/json" } }).then().catch()
    if (task.email) {
      const data = {
        service_id: process.env.EMAIL_SERVICE_ID,
        template_id: process.env.EMAIL_TEMPLATE_ID2,
        user_id: process.env.EMAIL_PUBLIC_KEY,
        accessToken: process.env.EMAIL_PRIVATE_KEY,
        template_params: {
          name: (task.name),
          id: TaskID.insertedId.toString(),
          'to_email': task.email
        }
      };
      axios.post("https://api.emailjs.com/api/v1.0/email/send", data, { headers: { 'Content-Type': "application/json" } }).then().catch()
    }
    return NextResponse.json({value:{message:"Your Appointment is Succesfully Booked",AppointmentID:TaskID.insertedId.toString()}})
 
 


  } catch (error) {
    console.error(error)
    return NextResponse.json({ error })
  }
}