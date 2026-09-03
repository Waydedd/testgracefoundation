import { getIcon } from "@/lib/icon-map";
import { getPayloadClient } from "@/lib/payload";

export async function Donate() {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "donate" });

  return (
    <section id="donate" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {data.badgeText && (
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
              {data.badgeText}
            </div>
          )}
          <h2 className="mb-4">{data.heading}</h2>
          <p className="text-gray-600">
            {data.description}
            {" "}To make donations please contact our office using: <span></span>
            <a
              href={`mailto:${data.contactEmail}`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              {data.contactEmail}
            </a>
          </p>
        </div>

        {/* Ways to Help */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-center mb-12">More Ways to Help</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.waysToDonate?.map((way, index) => {
              const Icon = getIcon(way.icon);
              return (
                <div key={way.id ?? index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2">{way.title}</h4>
                  <p className="text-gray-600 text-sm">{way.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
