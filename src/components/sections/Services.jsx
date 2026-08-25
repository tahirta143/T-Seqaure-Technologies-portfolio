"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const servicesData = [
    {
      title: "Custom Business Software & ERP",
      description:
        "Tailored enterprise platforms engineered to streamline workflows, manage complex operations, and automate business processes with custom databases and portals.",
      badge: "Enterprise",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Full-Stack Web Applications",
      description:
        "High-performance, secure, responsive, and SEO-optimized web applications built with modern frontend and backend architectures for flawless user experiences.",
      badge: "Core",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Native & Hybrid Mobile Apps",
      description:
        "Elegantly designed native and cross-platform mobile apps for iOS and Android, taking your product from concept to App Store and Google Play publication.",
      badge: "Flagship",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Autonomous AI Agents & RAG",
      description:
        "Develop and deploy autonomous AI agents, smart chatbots, RAG pipelines, and automated intelligence integrations using state-of-the-art LLMs.",
      badge: "AI First",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Industry-Ready Turnkey Systems",
      description:
        "Ready-to-deploy, fully customizable software ecosystems—including healthcare systems, retail POS networks, and gym platforms—configured for your brand.",
      badge: "Turnkey",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Odoo ERP & Cloud Integration",
      description:
        "Custom Odoo modules, ERP configuration, and business workflow automation. We tailor Odoo to fit your exact operations without operational friction.",
      badge: "Specialist",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.querySelector("#contact");
    if (contactElem) {
      window.scrollTo({
        top: contactElem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              Our Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Everything You Need to Build, Modernize & Scale
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
            From cross-platform mobile apps to AI automation agents and enterprise ERP systems — we deliver world-class engineering so your business outpaces the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-border/80 bg-card overflow-hidden card-hover-effect flex flex-col justify-between group shadow-sm hover:border-primary/50"
            >
              <div>
                {/* Image Container with zoom */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 backdrop-blur-md text-foreground border-border/80 font-bold text-[10px] tracking-wide">
                      {service.badge}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:underline cursor-pointer"
                >
                  <span>Request Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}