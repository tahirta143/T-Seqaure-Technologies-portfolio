"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-agent", label: "AI & Agents" },
    { id: "healthcare", label: "Healthcare (HIMS)" },
    { id: "pos", label: "POS & Retail" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "erp", label: "ERP & Systems" },
  ];

  const productsData = [
    {
      title: "Cognitive AI Agent & Automation",
      category: "ai-agent",
      badge: "AI First",
      image: "https://images.pexels.com/photos/8294657/pexels-photo-8294657.jpeg",
      description:
        "Autonomous AI agent for workflow automation, customer operations, and intelligent data analysis using RAG, LangChain, and vector embeddings.",
      techStack: ["Next.js", "LangChain", "OpenAI API", "Python", "Vector DB"],
      highlights: ["Autonomous Decision-Making", "99% Accuracy RAG Engine", "Instant Response Time"],
      liveLink: "https://demo.example.com",
    },
    {
      title: "Healthcare Management Suite (HIMS)",
      category: "healthcare",
      badge: "Flagship",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      description:
        "A comprehensive health management portal and mobile suite that streamlines hospital workflows, patient records, electronic prescriptions, and multi-currency billing.",
      techStack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Expo"],
      highlights: ["HIPAA-Compliant Architecture", "Real-Time Doctor Scheduling", "Patient Mobile App"],
      liveLink: "https://waseeladiabesity.com/",
    },
    {
      title: "Gym & Fitness Operations Ecosystem",
      category: "erp",
      badge: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      description:
        "A robust gym operations system featuring member subscriptions, automated recurring billing, scan-to-enter check-ins, and a custom mobile app for workout tracking.",
      techStack: ["React", "React Native", "Express.js", "MongoDB", "Stripe API"],
      highlights: ["QR Code Gate Sync", "Automated Billing", "Member iOS & Android App"],
      liveLink: "https://demo.example.com",
    },
    {
      title: "Retail POS & Multi-Store App Network",
      category: "pos",
      badge: "Enterprise POS",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      description:
        "Offline-first point-of-sale terminal synced with real-time cloud analytics, multi-branch inventory management, barcode scanning, and manager companion apps.",
      techStack: ["Flutter", "Dart", "Node.js", "MongoDB", "Firebase"],
      highlights: ["Offline-Ready Terminal", "Multi-Branch Sync", "Hardware Printer Link"],
      liveLink: "https://demo.example.com",
    },
    {
      title: "Enterprise E-Commerce Engine",
      category: "ecommerce",
      badge: "High-Scale Store",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80",
      description:
        "High-performance online storefront with sub-second page loads, intelligent product search, dynamic admin catalog management, and payment gateway integration.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe API"],
      highlights: ["Sub-Second Rendering", "Custom Inventory Analytics", "Automated Checkout"],
      liveLink: "https://demo.example.com",
    },
    {
      title: "School ERP & Academic Portal",
      category: "erp",
      badge: "EdTech SaaS",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
      description:
        "Complete academic SaaS portal supporting grades, classroom management, automated fee vouchers, parental controls, and multi-user notification systems.",
      techStack: ["React", "Express.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
      highlights: ["Parent-Teacher Real-Time Hub", "Automated Invoicing", "Exam Score Reporting"],
      liveLink: "https://demo.example.com",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? productsData
      : productsData.filter((p) => p.category === activeFilter);

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
    <section id="products" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              Featured Case Studies & Software
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Custom Systems & Products We've Built
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
            Explore our battle-tested portfolio of enterprise platforms, AI automations, and custom mobile applications engineered for leading companies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${activeFilter === cat.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-card border border-border/80 text-foreground/80 hover:border-primary/40 hover:text-primary"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProducts.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-border/80 bg-card overflow-hidden card-hover-effect flex flex-col justify-between group shadow-sm hover:border-primary/50"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-60 w-full overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-extrabold text-[10px] tracking-wide uppercase shadow-md">
                        {project.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/85 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-muted/80 text-foreground/80 border border-border/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="px-6 pb-6 pt-3 border-t border-border/40 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={handleScrollToContact}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:underline cursor-pointer"
                  >
                    <span>Request Live Demo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    Enterprise Ready
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}