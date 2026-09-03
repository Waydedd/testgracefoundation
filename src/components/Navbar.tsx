"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
];

type NavbarProps = {
  brandName: string;
  brandTagline: string;
  donateButtonLabel: string;
};

export function Navbar({ brandName, brandTagline, donateButtonLabel }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHome) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const renderNavLink = (id: string, label: string, className: string) =>
    isHome ? (
      <button key={id} onClick={() => scrollToSection(id)} className={className}>
        {label}
      </button>
    ) : (
      <Link key={id} href={`/#${id}`} className={className}>
        {label}
      </Link>
    );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Logo className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-blue-600">{brandName}</span>
              <span className="text-sm text-gray-600">{brandTagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, label }) =>
              renderNavLink(id, label, "text-gray-700 hover:text-blue-600 transition-colors"),
            )}
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            {isHome ? (
              <Button onClick={() => scrollToSection("donate")} className="bg-blue-600 hover:bg-blue-700">
                {donateButtonLabel}
              </Button>
            ) : (
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/#donate">{donateButtonLabel}</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map(({ id, label }) =>
                renderNavLink(
                  id,
                  label,
                  "text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2",
                ),
              )}
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2"
              >
                Blog
              </Link>
              {isHome ? (
                <Button onClick={() => scrollToSection("donate")} className="bg-blue-600 hover:bg-blue-700 mx-4">
                  {donateButtonLabel}
                </Button>
              ) : (
                <Button asChild className="bg-blue-600 hover:bg-blue-700 mx-4">
                  <Link href="/#donate">{donateButtonLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
