import type { GlobalConfig } from "payload";
import { iconField } from "@/fields/iconField";

export const Impact: GlobalConfig = {
  slug: "impact",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      defaultValue: "Our Impact",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Creating Lasting Change",
    },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Through the generosity of our donors and the dedication of our volunteers, we've been able to transform countless lives and strengthen communities.",
    },
    {
      name: "stats",
      type: "array",
      minRows: 1,
      fields: [
        iconField(),
        {
          name: "number",
          type: "text",
          required: true,
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "testimonial",
      type: "textarea",
      defaultValue:
        "Our aim is to raise people to live a righteous life, to help the needy in area of health, food, shelter, education and clothing.",
    },
  ],
};
