import { Logo } from "./Logo";
import { Heart } from "lucide-react";
import { getIcon } from "@/lib/icon-map";
import { getPayloadClient } from "@/lib/payload";

export async function Footer() {
  const payload = await getPayloadClient();
  const [data, navbar, contact] = await Promise.all([
    payload.findGlobal({ slug: "footer" }),
    payload.findGlobal({ slug: "navbar" }),
    payload.findGlobal({ slug: "contact" }),
  ]);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-white">{navbar.brandName}</span>
                <span className="text-sm text-gray-400">{navbar.brandTagline}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">{data.description}</p>
            <div className="flex gap-3">
              {data.socialLinks?.map((social, index) => {
                const Icon = getIcon(social.platform);
                return (
                  <a
                    key={social.id ?? index}
                    href={social.href}
                    aria-label={social.platform}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {data.quickLinks?.map((link, index) => (
                <li key={link.id ?? index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
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
              {data.programLinks?.map((link, index) => (
                <li key={link.id ?? index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contact.contactInfo?.map((info, index) => {
                const Icon = getIcon(info.icon);
                return (
                  <li key={info.id ?? index} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    {info.link ? (
                      <a href={info.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {info.details}
                      </a>
                    ) : (
                      <span className="text-gray-400">{info.details}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {data.copyrightText}
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
