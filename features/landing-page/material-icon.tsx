import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  CompassIcon,
  EcoLab02Icon,
  EyeIcon,
  HandHeartIcon,
  HandshakeIcon,
  HealthIcon,
  HeartIcon,
  HeartHandshakeIcon,
  SchoolIcon,
  Scissor01Icon,
  ShieldCheckIcon,
  SparklesIcon,
  ToolboxIcon,
  TrendingUpIcon,
  UserGroupIcon,
  UserMultipleIcon,
  ViewIcon,
} from "@hugeicons/core-free-icons";

const icons = {
  arrow_forward: ArrowRight01Icon,
  auto_awesome: SparklesIcon,
  check_circle: CheckmarkCircle01Icon,
  check: CheckmarkCircle01Icon,
  compass: CompassIcon,
  eco: EcoLab02Icon,
  explore: CompassIcon,
  favorite: HeartIcon,
  groups: UserGroupIcon,
  groups_2: UserMultipleIcon,
  handyman: ToolboxIcon,
  handshake: HandshakeIcon,
  contact_support: HandshakeIcon,
  health_and_safety: HealthIcon,
  heart: HeartIcon,
  location: ViewIcon,
  pin_drop: ViewIcon,
  hub: UserMultipleIcon,
  location_city: UserMultipleIcon,
  connecting_airports: ArrowRight01Icon,
  inventory_2: ToolboxIcon,
  agriculture: EcoLab02Icon,
  water: EcoLab02Icon,
  water_drop: EcoLab02Icon,
  school: SchoolIcon,
  shield_heart: ShieldCheckIcon,
  trending_up: TrendingUpIcon,
  verified: CheckmarkCircle01Icon,
  verified_user: ShieldCheckIcon,
  visibility: EyeIcon,
  volunteer_activism: HeartHandshakeIcon,
  carpenter: ToolboxIcon,
  hardware: ToolboxIcon,
  styler: Scissor01Icon,
  east: ArrowRight01Icon,
  shield: ShieldCheckIcon,
  person: HandHeartIcon,
  forward_to_inbox: ArrowRight01Icon,
  alternate_email: HandHeartIcon,
  mail: HandHeartIcon,
} satisfies Record<string, IconSvgElement>;

type MaterialIconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export function MaterialIcon({ name, className = "", filled = false }: MaterialIconProps) {
  const icon = icons[name as keyof typeof icons] ?? HeartIcon;

  return <HugeiconsIcon aria-hidden="true" className={className} icon={icon} strokeWidth={filled ? 2.25 : 1.8} />;
}
