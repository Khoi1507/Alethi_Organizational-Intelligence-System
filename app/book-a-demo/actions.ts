"use server";

export async function submitDemoRequest(data: FormData) {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const company = data.get("company") as string;
  const role = data.get("role") as string;
  const workflow = data.get("workflow") as string;
  const tools = data.get("tools") as string;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.FORM_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error(
      "Missing RESEND_API_KEY or FORM_TO_EMAIL environment variables"
    );
    throw new Error("Form configuration error — check server environment variables.");
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const result = await resend.emails.send({
    from: "Alethi Demo Request <onboarding@resend.dev>",
    to: [toEmail],
    subject: `Demo request from ${name} at ${company}`,
    text: `
Name: ${name}
Email: ${email}
Company: ${company}
Role: ${role}

Hard workflow or decision:
${workflow}

Current tools:
${tools}
    `.trim(),
  });

  if (result.error) {
    console.error("Resend error:", JSON.stringify(result.error));
    throw new Error(`Resend: ${result.error.message ?? JSON.stringify(result.error)}`);
  }
}
