import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { Name, Email, Subject, Message } = body;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <dev@4ctechnologies.net>",
      to: "support@4ctechnologies.net",
      subject: "New Contact Form Submission",
      react: await EmailTemplate({
        Name,
        Email,
        Subject,
        Message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
