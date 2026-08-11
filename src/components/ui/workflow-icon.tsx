import {
  Compass,
  FileText,
  ClipboardText,
  SealCheck,
  Airplane,
  House,
} from "@phosphor-icons/react/ssr";
import type { Icon, IconProps } from "@phosphor-icons/react/lib";
import type { WorkflowIconName } from "@/lib/data/workflow";

const ICONS: Record<WorkflowIconName, Icon> = {
  Compass,
  FileText,
  ClipboardText,
  SealCheck,
  Airplane,
  House,
};

export function WorkflowIcon({
  name,
  ...props
}: { name: WorkflowIconName } & IconProps) {
  const IconComponent = ICONS[name];
  return <IconComponent {...props} />;
}
