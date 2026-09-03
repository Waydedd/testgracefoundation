import type { GlobalConfig } from "payload";
import { iconField } from "@/fields/iconField";

export const About: GlobalConfig = {
  slug: "about",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      defaultValue: "About Us",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Dedicated to Serving Those in Need",
    },
    {
      name: "paragraph1",
      type: "textarea",
      required: true,
      defaultValue:
        "Grace for Poor Foundation was established in 2025 with a simple yet powerful mission: to provide essential support to underprivileged communities. We believe that every person deserves access to basic necessities like food, education, and healthcare.",
    },
    {
      name: "paragraph2",
      type: "textarea",
      required: true,
      defaultValue:
        "Over the years, we aim to grow from a small local initiative to a nationwide organization impacting thousands of lives. Our dedicated team of volunteers and donors work tirelessly to ensure that no one is left behind.",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "quote",
      type: "textarea",
      defaultValue:
        "Every contribution creates ripples of hope in communities across the nation.",
    },
    {
      name: "values",
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
