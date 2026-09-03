import { getIcon } from "@/lib/icon-map";
import { getImageUrl } from "@/lib/media";
import { getPayloadClient } from "@/lib/payload";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export async function About() {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "about" });
  const imageUrl = getImageUrl(data.image);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              {imageUrl && (
                <ImageWithFallback
                  src={imageUrl}
                  alt="Volunteers helping community"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {data.quote && (
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-sm">&ldquo;{data.quote}&rdquo;</p>
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            {data.badgeText && (
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
                {data.badgeText}
              </div>
            )}
            <h2 className="mb-6">{data.heading}</h2>
            <p className="text-gray-600 mb-6">{data.paragraph1}</p>
            <p className="text-gray-600 mb-8">{data.paragraph2}</p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {data.values?.map((value, index) => {
                const Icon = getIcon(value.icon);
                return (
                  <div key={value.id ?? index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-1">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
