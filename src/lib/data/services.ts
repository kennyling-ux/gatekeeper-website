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
    description: "One-on-one, before any recommendation is made.",
  },
  {
    icon: "Scales",
    title: "University & Programme Comparison",
    description: "Side-by-side, so you can decide with confidence.",
  },
  {
    icon: "Globe",
    title: "Study Destination Comparison",
    description: "14 countries compared against your goals and budget.",
  },
  {
    icon: "FileText",
    title: "Application Guidance",
    description: "Entry checks and hands-on help, done right the first time.",
  },
  {
    icon: "Coins",
    title: "Scholarship Assessment",
    description: "A clear read on what you qualify for.",
  },
  {
    icon: "NotePencil",
    title: "Personal Statement Review",
    description: "Feedback that sharpens your strongest points.",
  },
  {
    icon: "Airplane",
    title: "Student Visa Support",
    description: "Step-by-step, including health insurance.",
  },
  {
    icon: "House",
    title: "Accommodation Assistance",
    description: "One less thing to sort out on your own.",
  },
  {
    icon: "Compass",
    title: "Pre-Departure Briefing",
    description: "Land prepared, not scrambling.",
  },
];

export const schoolServices: ServiceItem[] = [
  {
    icon: "Presentation",
    title: "School Talks",
    description: "Pathways after SPM and IGCSE, explained clearly.",
  },
  {
    icon: "Users",
    title: "University Representative Visits",
    description: "Real reps, in front of your students.",
  },
  {
    icon: "Buildings",
    title: "University Fairs",
    description: "Local and international institutions, one room.",
  },
];
