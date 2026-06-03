"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@graceforpoorfoundation.org",
      link: "mailto:info@graceforpoorfoundation.org"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234-902-216-2927",
      link: "tel:+2349022162927"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "9 Wharf Road KarikoTowers Apapa, 2nd floor right wing",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            Get in Touch
          </div>
          <h2 className="mb-4">We&apos;d Love to Hear From You</h2>
          <p className="text-gray-600">
            Have questions about our programs or want to get involved? 
            Reach out to us and we&apos;ll be happy to help.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardContent className="p-6">
                  <h4 className="mb-2 text-white">Office Hours</h4>
                  <p className="text-white/90 text-sm mb-2">Monday - Friday</p>
                  <p className="text-white/80 text-sm">9:00 AM - 5:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
