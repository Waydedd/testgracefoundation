export const iconNames = [
  "Heart",
  "Users",
  "Target",
  "Award",
  "Utensils",
  "GraduationCap",
  "Home",
  "Building2",
  "Gift",
  "Ribbon",
  "Mail",
  "Phone",
  "MapPin",
  "Facebook",
  "Twitter",
  "Instagram",
  "Linkedin",
] as const;

export type IconName = (typeof iconNames)[number];

export const iconOptions = iconNames.map((name) => ({ label: name, value: name }));
