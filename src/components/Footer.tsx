import { Logo } from "./Logo";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Our Impact", href: "#impact" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Food Distribution", href: "#programs" },
    { name: "Education Support", href: "#programs" },
    { name: "Healthcare Access", href: "#programs" },
    { name: "Shelter & Care", href: "#programs" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-white">Grace for Poor</span>
                <span className="text-sm text-gray-400">Foundation</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Dedicated to serving underprivileged communities through food, education, and healthcare programs.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white mb-4">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@graceforpoorfoundation.org"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  info@graceforpoorfoundation.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+2349022162927"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +234-902-216-2927
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  9 Wharf Road KarikoTowers Apapa,<br />
                  2nd floor right wing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  23, Prosperity Street,<br />
                  okeafor Isolo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Grace for Poor Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Made with</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span className="text-gray-400">for those in need</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
