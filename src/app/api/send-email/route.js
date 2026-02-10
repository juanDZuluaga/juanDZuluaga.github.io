export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, company, phone, email, message } = await req.json();

    // Transporter universal (dev + prod)
    const transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST || "smtp.mailersend.net",
      port: Number(process.env.MAILER_PORT) || 587,
      secure: false, // STARTTLS automático
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Portfolio" <${process.env.MAILER_USER}>`,
      to: process.env.MAILER_TO,
      replyTo: email,
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

    return Response.json(
      { message: "Email enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("ERROR SEND EMAIL:", error);

    return Response.json(
      { message: "Error al enviar el email", error: error.message },
      { status: 500 }
    );
  }
}
