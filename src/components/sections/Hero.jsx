"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const featuredLogos = [
    { name: "Forbes", text: "Forbes" },
    { name: "Business Insider", text: "BUSINESS INSIDER" },
    { name: "New York Weekly", text: "NEW YORK WEEKLY" },
    { name: "Mashable", text: "Mashable" },
    { name: "Khaleej Times", text: "Khaleej Times" },
    { name: "Yahoo Finance", text: "yahoo! finance" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-black text-white">
      {/* ─── FULL BACKGROUND VIDEO ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85 scale-105"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Devsinc-Style Left-to-Right Dim Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* ─── HERO CONTENT CONTAINER ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Column: Heading, Subheading, CTAs & Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-9 xl:col-span-8 flex flex-col justify-center text-left space-y-7"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-white">
              Next-Gen Software & AI Engineering
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Building The Future With <span className="text-primary">Mobile, Web & AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-200/90 font-medium max-w-2xl leading-relaxed">
            We help startups, global enterprises and modern businesses accelerate their technology life cycle with high-performance software, AI agents & scalable cloud platforms.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
              <Button className="h-13 px-8 rounded-xl bg-primary text-white font-extrabold text-base shadow-xl hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer border border-primary/40">
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#products" onClick={(e) => handleScrollTo(e, "#products")}>
              <Button
                variant="outline"
                className="h-13 px-8 rounded-xl border border-white/30 bg-black/40 hover:bg-white/10 text-white font-bold text-base transition-all hover:scale-105 backdrop-blur-md cursor-pointer"
              >
                View Our Work
              </Button>
            </a>
          </div>

          {/* Featured In Section */}
          <div className="pt-8 border-t border-white/15 space-y-3.5">
            <p className="text-xs font-extrabold uppercase tracking-widest text-gray-300">
              Featured In & Industry Coverage:
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {featuredLogos.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm sm:text-base font-bold text-gray-400 hover:text-white transition-colors duration-200 select-none cursor-default tracking-wide font-serif"
                >
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-widest font-bold mb-1.5 text-gray-300">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
