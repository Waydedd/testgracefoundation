import { Utensils, GraduationCap, Heart, Home } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Programs() {
  const programs = [
    {
      icon: Utensils,
      title: "Food Distribution",
      description: "Providing nutritious meals and food packages to families facing food insecurity.",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjaGFyaXR5fGVufDF8fHx8MTc2MjQ5MTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "5,000+ meals/month"
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Scholarships, school supplies, and tutoring programs for underprivileged children.",
      image: "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjI1ODk5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "2,000+ students support/year"
    },
    {
      icon: Heart,
      title: "Clothing",
      description: "Free medical camps, medicines, and health awareness programs for communities.",
      image: "https://images.unsplash.com/photo-1662470186780-b5e97bb715e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGNsaW5pY3xlbnwxfHx8fDE3NjI1MjAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "50+ medical camps/year"
    },
    {
      icon: Home,
      title: "Shelter & Care",
      description: "Emergency shelter, clothing, and essential supplies for homeless individuals.",
      image: "https://images.unsplash.com/photo-1489851221632-0976a724c9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwaGVscGluZyUyMHBvb3IlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjI1ODk5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "1,500+ people/year"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            Our Programs
          </div>
          <h2 className="mb-4">Making a Difference Through Action</h2>
          <p className="text-gray-600">
            Our comprehensive programs address the core needs of underprivileged communities, 
            providing essential support across multiple areas of life.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <program.icon className="h-7 w-7 text-blue-600" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
