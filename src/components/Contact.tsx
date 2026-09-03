import { Card, CardContent } from "./ui/card";
import { getIcon } from "@/lib/icon-map";
import { getPayloadClient } from "@/lib/payload";

export async function Contact() {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "contact" });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {data.badgeText && (
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              {data.badgeText}
            </div>
          )}
          <h2 className="mb-4">{data.heading}</h2>
          <p className="text-gray-600">{data.description}</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="space-y-6">
              {data.contactInfo?.map((info, index) => {
                const Icon = getIcon(info.icon);
                return (
                  <Card key={info.id ?? index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-blue-600" />
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
                );
              })}

              {(data.officeHoursLine1 || data.officeHoursLine2) && (
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-white">Office Hours</h4>
                    <p className="text-white/90 text-sm mb-2">{data.officeHoursLine1}</p>
                    <p className="text-white/80 text-sm">{data.officeHoursLine2}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
