import { Heart, Users, Target, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building stronger communities through collective action."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Creating measurable, sustainable change in people's lives."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Operating with transparency and accountability."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjI0Nzg3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Volunteers helping community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-sm">
                "Every contribution creates ripples of hope in communities across the nation."
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              About Us
            </div>
            <h2 className="mb-6">Dedicated to Serving Those in Need</h2>
            <p className="text-gray-600 mb-6">
              Grace for Poor Foundation was established in 2010 with a simple yet powerful mission: 
              to provide essential support to underprivileged communities. We believe that every 
              person deserves access to basic necessities like food, education, and healthcare.
            </p>
            <p className="text-gray-600 mb-8">
              Over the years, we've grown from a small local initiative to a nationwide organization 
              impacting thousands of lives. Our dedicated team of volunteers and donors work tirelessly 
              to ensure that no one is left behind.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
