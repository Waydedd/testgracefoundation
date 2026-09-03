import type { GlobalConfig } from "payload";
import { iconField } from "@/fields/iconField";

export const Contact: GlobalConfig = {
  slug: "contact",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      defaultValue: "Get in Touch",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "We'd Love to Hear From You",
    },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Have questions about our programs or want to get involved? Reach out to us and we'll be happy to help.",
    },
    {
      name: "contactInfo",
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
          name: "details",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
        },
      ],
    },
    {
      name: "officeHoursLine1",
      type: "text",
      defaultValue: "Monday - Friday",
    },
    {
      name: "officeHoursLine2",
      type: "text",
      defaultValue: "9:00 AM - 5:00 PM",
    },
  ],
};
