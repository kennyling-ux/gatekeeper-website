import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  destination: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
