import {
  ChatCircleText,
  Scales,
  Globe,
  FileText,
  Coins,
  NotePencil,
  Airplane,
  House,
  Compass,
  Users,
  Presentation,
  Buildings,
} from "@phosphor-icons/react/ssr";
import type { Icon, IconProps } from "@phosphor-icons/react/lib";
import type { IconName } from "@/lib/data/services";

const ICONS: Record<IconName, Icon> = {
  ChatCircleText,
  Scales,
  Globe,
  FileText,
  Coins,
  NotePencil,
  Airplane,
  House,
  Compass,
  Users,
  Presentation,
  Buildings,
};

export function ServiceIcon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  const IconComponent = ICONS[name];
  return <IconComponent {...props} />;
}
