import { Users, Heart, Building2, Award } from "lucide-react";

export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Lives to be impacted by our programs",
      description: "Individuals and families"
    },
    {
      icon: Building2,
      number: "150+",
      label: "Communities to reach",
      description: "Across the nation"
    },
    {
      icon: Heart,
      number: "500+",
      label: "Volunteers to recruit",
      description: "Dedicated supporters"
    },
    {
      icon: Award,
      number: "2",
      label: "Years",
      description: "Of dedicated service"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
            Our Impact
          </div>
          <h2 className="mb-4 text-white">Creating Lasting Change</h2>
          <p className="text-white/90">
            Through the generosity of our donors and the dedication of our volunteers, 
            we&apos;ve been able to transform countless lives and strengthen communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-white mb-2">{stat.number}</div>
              <h3 className="text-white mb-2">{stat.label}</h3>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="h-10 w-10 text-white fill-current" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-white/95 text-lg mb-4 italic">
                  Our aim is to raise people to live a righteous life, to help the needy in area of health, food, shelter, education and clothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
