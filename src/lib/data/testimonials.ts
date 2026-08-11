import { testimonialAvatars } from "@/lib/data/images";

export interface Testimonial {
  quote: string;
  name?: string;
  outcome: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "There were hiccups along the way, mostly my own errors, but the support stayed calm and clear throughout.",
    outcome: "Illustration, University of South Wales",
    avatar: testimonialAvatars[0],
  },
  {
    quote:
      "Every document stayed on track even with my chaotic schedule. Encouraging, and always ahead of time.",
    name: "Mabel Yiek",
    outcome: "£3,000 scholarship · University of East London",
    avatar: testimonialAvatars[1],
  },
  {
    quote:
      "Every question answered quickly, step-by-step guidance, and the service is free. Really easy application.",
    name: "Zahirah Shahrul Azman",
    outcome: "BSc Computer Science, Cardiff University",
    avatar: testimonialAvatars[2],
  },
  {
    quote:
      "Guided step-by-step through my transfer. My student visa was completely stress-free.",
    outcome: "Transfer to Victoria University, Melbourne",
    avatar: testimonialAvatars[3],
  },
  {
    quote:
      "Support continued well after my offer — accommodation, tuition, insurance, all of it.",
    outcome: "Technological University Dublin, Ireland",
    avatar: testimonialAvatars[4],
  },
];
