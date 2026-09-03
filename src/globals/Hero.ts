import type { GlobalConfig } from "payload";

export const Hero: GlobalConfig = {
  slug: "hero",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      defaultValue: "Transforming Lives Since 2025",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Bringing Hope & Grace to Those in Need",
    },
    {
      name: "subtext",
      type: "textarea",
      required: true,
      defaultValue:
        "Join us in our mission to provide food, education, and healthcare to underprivileged communities. Together, we can make a lasting difference in the lives of those who need it most.",
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "primaryButtonLabel",
      type: "text",
      defaultValue: "Make a Donation",
    },
    {
      name: "secondaryButtonLabel",
      type: "text",
      defaultValue: "Our Programs",
    },
    {
      name: "stats",
      type: "array",
      minRows: 1,
      fields: [
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
      ],
    },
  ],
};
