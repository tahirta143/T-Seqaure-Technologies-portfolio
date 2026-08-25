"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  HeartHandshake,
  BrainCircuit,
  HardDriveDownload,
  Hammer,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: "Agile & Rapid Sprints",
      description: "We optimize sprint workflows and iterate quickly, shipping production-ready software updates without unnecessary delays.",
    },
    {
      icon: <Hammer className="w-5 h-5 text-primary" />,
      title: "Modern Tech Architectures",
      description: "We code using state-of-the-art Next.js 15, Flutter, and scalable backend server topologies that stand out.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: "Clean Code & Security",
      description: "We implement testable, clean designs (SOLID, Clean Architecture) so modifications are simple and security audited.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-primary" />,
      title: "Deep AI & Agentic Expertise",
      description: "We build autonomous agents, LangChain pipelines, and custom model integrations directly in production.",
    },
    {
      icon: <HardDriveDownload className="w-5 h-5 text-primary" />,
      title: "Scalable Cloud Engineering",
      description: "We configure containerized environments, replication strategies, server caches, and scalable cloud structures.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-primary" />,
      title: "Long-Term SLA & Support",
      description: "We provide regular updates, performance optimization reviews, and active 24/7 dedicated engineering monitoring.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 relative overflow-hidden bg-card/10 border-y border-border/70"
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            An Engineering Culture Driven by High Standards
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
            We operate like an elite tech partner. We build bulletproof code, robust architectures, and systems prepared for enterprise scrutiny.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Banner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative h-[500px] rounded-2xl overflow-hidden border border-border/80 shadow-xl group flex-shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
              alt="Engineering Excellence"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-card/90 backdrop-blur-md border border-border/70 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                  Our Engineering Benchmark
                </p>
              </div>
              <p className="text-sm font-extrabold text-foreground leading-snug">
                Elite craftsmanship, 99.9% uptime architectures, and continuous customer-focused delivery.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm card-hover-effect flex gap-4 items-start group shadow-sm hover:border-primary/50"
                >
                  <div className="p-2.5 rounded-xl bg-background border border-border/70 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
