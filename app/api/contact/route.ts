import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL || "rarifkhalil123@gmail.com"],
    subject: `New portfolio message from ${name}`,
    replyTo: email,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true, data });
}