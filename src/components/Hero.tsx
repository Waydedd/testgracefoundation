"use client";

import { Button } from "./ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1489851221632-0976a724c9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwaGVscGluZyUyMHBvb3IlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjI1ODk5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Children being helped by charity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4 fill-red-400 text-red-400" />
            <span>Transforming Lives Since 2025</span>
          </div>
          
          <h1 className="text-white mb-6">
            Bringing Hope & Grace to Those in Need
          </h1>
          
          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            Join us in our mission to provide food, education, and healthcare to underprivileged communities. 
            Together, we can make a lasting difference in the lives of those who need it most.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection("donate")}
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Make a Donation
              <Heart className="ml-2 h-5 w-5 fill-current" />
            </Button>
            <Button 
              onClick={() => scrollToSection("programs")}
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-blue-600"
            >
              Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-white mb-1">50+</div>
              <p className="text-white/80 text-sm">Lives Impacted</p>
            </div>
            <div>
              <div className="text-white mb-1">5+</div>
              <p className="text-white/80 text-sm">Communities Served</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-white mb-1">2 Years</div>
              <p className="text-white/80 text-sm">Of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
