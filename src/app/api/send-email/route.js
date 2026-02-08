export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, company, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: Number(process.env.MAILER_PORT),
      secure: false, // TLS en 587 o 2525
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
      }
    });

    const mailOptions = {
      from: `"Formulario Portfolio" <${process.env.MAILER_USER}>`,
      to: process.env.MAILER_TO,
      subject: `Nuevo mensaje de ${name}`,
      text: 
      `
        Nombre: ${name}
        Compañía: ${company}
        Teléfono: ${phone}
        Email: ${email}

        Mensaje: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email enviado correctamente" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error al enviar el email", error: error.message }), { status: 500 });
  }
}
