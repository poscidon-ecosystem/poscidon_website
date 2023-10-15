import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";



export async function POST(req) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

    const msg = {
      to: "marco@poscidon.com", // Your email where you'll receive emails
      from: "marco@poscidon.com", // your website email address here
      subject: `New lead ${req.body.fullname}`,
      text: `You got a lead from ${req.body.email}`
    };

  try {
    const body = await req.json();
    console.log("body", body);
    const { email, fullname, subject, message} = body;
    const send = await sgMail.send({
      from: "marco@poscidon.com",
      to: "marco@poscidon.com",
      subject: `${subject}`,
      text: `New lead with ${email}, from ${fullname}, with message: ${message}`
    });
    return NextResponse.json(send);
  } catch (error) {
    // console.log(error);
    return NextResponse.json({error})
  }

}