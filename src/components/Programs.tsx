import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getIcon } from "@/lib/icon-map";
import { getImageUrl } from "@/lib/media";
import { getPayloadClient } from "@/lib/payload";

export async function Programs() {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "programs" });

  return (
    <section id="programs" className="py-20 bg-white">
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

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.programs?.map((program, index) => {
            const Icon = getIcon(program.icon);
            const imageUrl = getImageUrl(program.image);
            return (
              <Card key={program.id ?? index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  {imageUrl && (
                    <ImageWithFallback
                      src={imageUrl}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon className="h-7 w-7 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-3">{program.description}</p>
                      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        <span>{program.stats}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
