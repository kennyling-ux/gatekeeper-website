"use server";

import { contactSchema } from "@/lib/validation/contact-schema";
import { CONTACT_EMAIL_SUBJECT } from "@/lib/constants";

type ContactFieldErrors = Partial<
  Record<"name" | "email" | "destination" | "message", string>
>;

export interface ContactFormState {
  status: "idle" | "success" | "error";
  fieldErrors?: ContactFieldErrors;
  formError?: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    destination: formData.get("destination"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFieldErrors;
      if (key) fieldErrors[key] = issue.message;
    }
    return { status: "error", fieldErrors };
  }

  const { name, email, destination, message } = parsed.data;
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

  if (resendApiKey && notifyEmail) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Gatekeeper Website <onboarding@resend.dev>",
        to: notifyEmail,
        reply_to: email,
        subject: CONTACT_EMAIL_SUBJECT,
        text: `Name: ${name}\nEmail: ${email}\nDestination: ${destination || "Not specified"}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      return {
        status: "error",
        formError: "Something went wrong sending your message. Please try WhatsApp instead.",
      };
    }
  } else {
    console.log("[contact form submission]", { name, email, destination, message });
  }

  return { status: "success" };
}
