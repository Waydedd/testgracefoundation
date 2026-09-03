import type { Metadata } from "next";
import LandingPage from "@/LandingPage";

export const metadata: Metadata = {
  title: "Grace for Poor Foundation",
  description:
    "Grace for Poor Foundation is dedicated to empowering underprivileged communities through education, healthcare, and sustainable development initiatives.",
};
export default function Page() {
  return <LandingPage />;
}
