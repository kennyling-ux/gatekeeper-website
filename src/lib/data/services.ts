export type IconName =
  | "ChatCircleText"
  | "Scales"
  | "Globe"
  | "FileText"
  | "Coins"
  | "NotePencil"
  | "Airplane"
  | "House"
  | "Compass"
  | "Users"
  | "Presentation"
  | "Buildings";

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

export const studentServices: ServiceItem[] = [
  {
    icon: "ChatCircleText",
    title: "Personalised Consultation",
    description: "A one-on-one session to understand your results, interests, goals, and budget before any course or university is suggested.",
  },
  {
    icon: "Scales",
    title: "University & Programme Comparison",
    description: "Shortlisted universities and courses compared side by side on entry requirements, fees, rankings, and career outcomes.",
  },
  {
    icon: "Globe",
    title: "Study Destination Comparison",
    description: "Malaysia and 13 study abroad destinations weighed against your goals, budget, and post-study work options.",
  },
  {
    icon: "FileText",
    title: "Application Guidance",
    description: "Entry requirement checks, document preparation, and submission — reviewed so it is done right the first time.",
  },
  {
    icon: "Coins",
    title: "Scholarship Assessment",
    description: "A clear view of the scholarships and bursaries you qualify for, and how to strengthen your application for them.",
  },
  {
    icon: "NotePencil",
    title: "Personal Statement Review",
    description: "Detailed feedback on your personal statement so admissions teams see your strongest points.",
  },
  {
    icon: "Airplane",
    title: "Student Visa Support",
    description: "Step-by-step guidance through your student visa application, with every document checked, including health insurance.",
  },
  {
    icon: "House",
    title: "Accommodation Assistance",
    description: "Help finding and securing safe, suitable housing near your campus before you arrive.",
  },
  {
    icon: "Compass",
    title: "Pre-Departure Briefing",
    description: "What to pack, what to expect, and what to do in your first weeks, so you arrive prepared.",
  },
];

export const schoolServices: ServiceItem[] = [
  {
    icon: "Presentation",
    title: "School Talks",
    description: "Talks for students and parents on pathways after SPM, IGCSE, and STPM, from foundation to degree.",
  },
  {
    icon: "Users",
    title: "University Representative Visits",
    description: "University representatives visiting your school to meet students and answer their questions in person.",
  },
  {
    icon: "Buildings",
    title: "University Fairs",
    description: "Local and international universities together in one place, organised for your school.",
  },
];
