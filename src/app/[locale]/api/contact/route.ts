import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { firstname, lastname, email, phone, service, message } =
    await request.json();

  // Validation des champs
  if (!firstname || !lastname || !email || !phone || !service || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // Vérification email simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    );
  }

  // Config EmailJS (stockées dans .env.local)
  const serviceId = process.env.EMAILJS_SERVICE_ID!;
  const templateId = process.env.EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY!; // ou SECRET_KEY si tu veux + sécurité

  const templateParams = {
    firstname,
    lastname,
    email,
    phone,
    service,
    message,
  };

  try {
    // Envoi de l’email via EmailJS API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      throw new Error(`EmailJS error: ${response.statusText}`);
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { message: "Error sending email", error: (error as Error).message },
      { status: 500 }
    );
  }
}
