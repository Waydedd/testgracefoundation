import {
  Heart,
  Users,
  Target,
  Award,
  Utensils,
  GraduationCap,
  Home,
  Building2,
  Gift,
  Ribbon,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "./icon-names";

const iconMap: Record<IconName, LucideIcon> = {
  Heart,
  Users,
  Target,
  Award,
  Utensils,
  GraduationCap,
  Home,
  Building2,
  Gift,
  Ribbon,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
};

export function getIcon(name: string | null | undefined): LucideIcon {
  return iconMap[name as IconName] ?? Heart;
}
