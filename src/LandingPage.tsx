import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Impact } from "@/components/Impact";
import { Donate } from "@/components/Donate";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getPayloadClient } from "@/lib/payload";

export default async function LandingPage() {
  const payload = await getPayloadClient();
  const [navbar, hero] = await Promise.all([
    payload.findGlobal({ slug: "navbar" }),
    payload.findGlobal({ slug: "hero" }),
  ]);

  return (
    <div className="min-h-screen">
      <Navbar
        brandName={navbar.brandName}
        brandTagline={navbar.brandTagline}
        donateButtonLabel={navbar.donateButtonLabel}
      />
      <Hero {...hero} />
      <About />
      <Programs />
      <Impact />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}
