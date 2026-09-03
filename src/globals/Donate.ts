import type { GlobalConfig } from "payload";
import { iconField } from "@/fields/iconField";

export const Donate: GlobalConfig = {
  slug: "donate",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      defaultValue: "Support our mission",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Every Contribution Makes a Difference",
    },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Your generosity helps us continue our vital work in communities across the nation. Every dollar goes directly to those who need it most.",
    },
    {
      name: "contactEmail",
      type: "email",
      required: true,
      defaultValue: "info@graceforpoorfoundation.org",
    },
    {
      name: "waysToDonate",
      type: "array",
      minRows: 1,
      fields: [
        iconField(),
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};
