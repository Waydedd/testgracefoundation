import type { GlobalConfig } from "payload";

export const Navbar: GlobalConfig = {
  slug: "navbar",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "brandName",
      type: "text",
      required: true,
      defaultValue: "Grace for Poor",
    },
    {
      name: "brandTagline",
      type: "text",
      required: true,
      defaultValue: "Foundation",
    },
    {
      name: "donateButtonLabel",
      type: "text",
      required: true,
      defaultValue: "Donate Now",
    },
  ],
};
