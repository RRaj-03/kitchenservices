import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../MongoConnect/route";
import * as Yup from 'yup'
import axios from 'axios'
const TaskValidationSchema = Yup.object({
    firstName: Yup.string()
      .min(3,'Must be 3 characters or more')
      .required('Required'),
    lastName: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Required'),
    email: Yup.string().email('Invalid email address'),
    date: Yup.string().required('Required'),
    phone: Yup.number()
    .min(1000000000,"Inalid Phone Number")
    .max(9999999999,"Inalid Phone Number")
    .typeError("Inalid Phone Number")
    .integer("Inalid Phone Number")
    .required("Required"),
    service: Yup.object({
      _id:Yup.string().required("Required"),
      name:Yup.string().required("Required")
    }),
    price: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    address: Yup.string().required("Required")

  });
  
export async function POST(request:Request) : Promise<Response>{
    try {
        let body = await request.json()
        const task = await TaskValidationSchema.validate(body);
        const client = await clientPromise;
        const Services = client.db("KitchenServices").collection("Tasks")
        const length = Services.insertOne(task)
        length.then((ele)=>{
          // axios.post(`https://sms.api.sinch.com/xms/v1/${process.env.SMS_SERVICE_ID}/batches`,{
          //   "from": "447520651607",
          //   "to": [ `91${task.phone}` ],
          //   "body": `Your Appointment is Succesfully Booked. Your Appointment ID is ${ele.insertedId.toString()}. We will contact you soon`
          // },{headers:{"Content-Type": "application/json",Authorization: `Bearer ${process.env.SMS_BEARER}`}})
          const data = {
            service_id: process.env.EMAIL_SERVICE_ID,
            template_id: process.env.EMAIL_TEMPLATE_ID1,
            user_id: process.env.EMAIL_PUBLIC_KEY,
            accessToken : process.env.EMAIL_PRIVATE_KEY,
            template_params: {
              ...body,
              name:(task.firstName+task.lastName),
              'to_email':process.env.EMAIL
            }
        };
        axios.post("https://api.emailjs.com/api/v1.0/email/send",data,{headers:{'Content-Type':"application/json"}}).then((res)=>{
          console.log(res)
        })
          if(task.email){
            const data = {
              service_id: process.env.EMAIL_SERVICE_ID,
              template_id: process.env.EMAIL_TEMPLATE_ID2,
              user_id: process.env.EMAIL_PUBLIC_KEY,
              accessToken : process.env.EMAIL_PRIVATE_KEY,
              template_params: {
                name:(task.firstName+task.lastName),
                id: ele,
                'to_email':task.email
              }
          };
          axios.post("https://api.emailjs.com/api/v1.0/email/send",data,{headers:{'Content-Type':"application/json"}}).then((res)=>{
            console.log(res)
          })
          }
        console.log('ele', ele.insertedId.toString())
        })
        return NextResponse.json({"value":"Your Appointment is Succesfully Booked"})
    } catch (error) {
      console.error(error)
      return NextResponse.json({error})
    }
}