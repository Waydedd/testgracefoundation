"use client";

import { Button } from "./ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getImageUrl } from "@/lib/media";
import type { Hero as HeroGlobal } from "@/payload-types";

type HeroProps = HeroGlobal;

export function Hero({
  badgeText,
  heading,
  subtext,
  backgroundImage,
  primaryButtonLabel,
  secondaryButtonLabel,
  stats,
}: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const imageUrl = getImageUrl(backgroundImage);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {imageUrl && (
          <ImageWithFallback
            src={imageUrl}
            alt="Children being helped by charity"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {badgeText && (
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4 fill-red-400 text-red-400" />
              <span>{badgeText}</span>
            </div>
          )}

          <h1 className="text-white mb-6">{heading}</h1>

          <p className="text-white/90 text-xl mb-8 max-w-2xl">{subtext}</p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("donate")}
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              {primaryButtonLabel}
              <Heart className="ml-2 h-5 w-5 fill-current" />
            </Button>
            <Button
              onClick={() => scrollToSection("programs")}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-blue-600"
            >
              {secondaryButtonLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={stat.id ?? index} className={index === stats.length - 1 ? "col-span-2 md:col-span-1" : undefined}>
                  <div className="text-white mb-1">{stat.number}</div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
