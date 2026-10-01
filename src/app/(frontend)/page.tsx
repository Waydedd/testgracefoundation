import type { Metadata } from "next";
import LandingPage from "@/LandingPage";

export const metadata: Metadata = {
  title: "Grace for Poor Foundation",
  description:
    "Grace for Poor Foundation is dedicated to empowering underprivileged communities through education, healthcare, and sustainable development initiatives.",
};

// Content comes from Payload globals, so render per request instead of
// freezing it at build time.
export const dynamic = "force-dynamic";

export default function Page() {
  return <LandingPage />;
}
