import { Heart, Users, Gift, Ribbon } from "lucide-react";

export function Donate() {

  const waysToDonate = [
    {
      icon: Heart,
      title: "Giving",
      description: "Become a sustaining donor with contributions."
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Donate your time and skills to directly help communities."
    },
    {
      icon: Gift,
      title: "Corporate Sponsorship",
      description: "Partner with us for long-term community impact."
    },
    {
      icon: Ribbon,
      title: "In-Kind Donations",
      description: "Contribute goods and services to support our programs."
    }
  ];

  return (
    <section id="donate" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
          Support our mission
        </div>
        <h2 className="mb-4">Every Contribution Makes a Difference</h2>
        <p className="text-gray-600">
          Your generosity helps us continue our vital work in communities across the nation. 
            Every dollar goes directly to those who need it most.
          To make donations please contact our office using: <span></span>
              <a href="mailto:info@graceforpoorfoundation.org"
              className="text-gray-400 hover:text-blue-400 transition-colors">
             info@graceforpoorfoundation.org
            </a>
          </p>
        </div>

        {/* Ways to Help */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-center mb-12">More Ways to Help</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waysToDonate.map((way, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <way.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="mb-2">{way.title}</h4>
                <p className="text-gray-600 text-sm">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
