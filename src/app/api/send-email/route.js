export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, company, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.mailersend.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    // const transporter = nodemailer.createTransport({
    //   host: process.env.MAILER_HOST,
    //   port: Number(process.env.MAILER_PORT),
    //   secure: false, // 587 + STARTTLS automático
    //   auth: {
    //     user: process.env.MAILER_USER,
    //     pass: process.env.MAILER_PASS,
    //   },
    // });

    await transporter.sendMail({
      from: `"Formulario Portfolio" <${process.env.MAILER_USER}>`,
      to: process.env.MAILER_TO,
      replyTo: email, // 👈 buena práctica
      subject: `Nuevo mensaje de ${name}`,
      text: `
Nombre: ${name}
Compañía: ${company}
Teléfono: ${phone}
Email: ${email}

Mensaje:
${message}
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email enviado correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("ERROR SEND EMAIL:", error);
    return new Response(
      JSON.stringify({ message: "Error al enviar el email" }),
      { status: 500 }
    );
  }
}

