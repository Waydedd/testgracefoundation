"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Logo className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-blue-600">Grace for Poor</span>
              <span className="text-sm text-gray-600">Foundation</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("donate")} className="bg-blue-600 hover:bg-blue-700">
              Donate Now
            </Button>
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
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("donate")} className="bg-blue-600 hover:bg-blue-700 mx-4">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
