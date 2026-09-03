import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Dedicated to serving underprivileged communities through food, education, and healthcare programs.",
    },
    {
      name: "quickLinks",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
    {
      name: "programLinks",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: ["Facebook", "Twitter", "Instagram", "Linkedin"],
        },
        { name: "href", type: "text", required: true },
      ],
    },
    {
      name: "copyrightText",
      type: "text",
      defaultValue: "Grace for Poor Foundation. All rights reserved.",
    },
  ],
};
