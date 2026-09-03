import type { GlobalConfig } from "payload";
import { iconField } from "@/fields/iconField";

export const Programs: GlobalConfig = {
  slug: "programs",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      defaultValue: "Our Programs",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "Making a Difference Through Action",
    },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Our comprehensive programs address the core needs of underprivileged communities, providing essential support across multiple areas of life.",
    },
    {
      name: "programs",
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
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "stats",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
