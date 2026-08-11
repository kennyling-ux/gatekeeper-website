export type WorkflowIconName =
  | "Compass"
  | "FileText"
  | "ClipboardText"
  | "SealCheck"
  | "Airplane"
  | "House";

export interface WorkflowStep {
  step: number;
  icon: WorkflowIconName;
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    icon: "Compass",
    title: "Consultation & Programme Selection",
    description:
      "Your background, goals, destination, and budget — matched to recommendations and clear comparisons.",
  },
  {
    step: 2,
    icon: "FileText",
    title: "Application Submission",
    description: "Documents prepared, reviewed, submitted.",
  },
  {
    step: 3,
    icon: "ClipboardText",
    title: "Offer Management",
    description: "Progress monitored, conditions explained.",
  },
  {
    step: 4,
    icon: "SealCheck",
    title: "Offer Acceptance",
    description: "Accepting your offer and the deposit process.",
  },
  {
    step: 5,
    icon: "Airplane",
    title: "Student Visa Application",
    description: "One-on-one guidance, every document checked.",
  },
  {
    step: 6,
    icon: "House",
    title: "Accommodation & Pre-Departure",
    description: "Settled in, and ready before you fly.",
  },
];
