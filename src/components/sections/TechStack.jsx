"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Server,
  Database,
  Brain,
  Sparkles,
  Smartphone,
  Code2,
  Cloud,
  Layers,
  Terminal,
} from "lucide-react";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend & Mobile", icon: <Cpu className="w-4 h-4" /> },
    { id: "backend", label: "Backend & APIs", icon: <Server className="w-4 h-4" /> },
    { id: "ai", label: "AI, Agents & ML", icon: <Brain className="w-4 h-4" /> },
    { id: "cloud", label: "Cloud & Databases", icon: <Database className="w-4 h-4" /> },
  ];

  const stacks = {
    frontend: [
      {
        name: "Flutter",
        category: "Mobile SDK",
        detail: "Single codebase compiling into fluid 60/120fps native iOS & Android binaries.",
        icon: <Smartphone className="w-5 h-5 text-sky-400" />,
      },
      {
        name: "React Native",
        category: "Cross-Platform",
        detail: "High-performance native mobile apps leveraging modern React component architecture.",
        icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      },
      {
        name: "Next.js 15",
        category: "Web Framework",
        detail: "Server components, hybrid rendering, high SEO performance, and edge routing.",
        icon: <Sparkles className="w-5 h-5 text-primary" />,
      },
      {
        name: "TypeScript",
        category: "Core Language",
        detail: "Static type safety eliminating client runtime anomalies in production builds.",
        icon: <Terminal className="w-5 h-5 text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        category: "Design System",
        detail: "Utility-first design architecture enabling rapid, consistent design system iteration.",
        icon: <Sparkles className="w-5 h-5 text-teal-400" />,
      },
    ],
    backend: [
      {
        name: "Node.js & Express",
        category: "Runtime & Server",
        detail: "High-throughput asynchronous microservices processing thousands of requests per second.",
        icon: <Server className="w-5 h-5 text-emerald-500" />,
      },
      {
        name: "Python & FastAPI",
        category: "High-Speed API",
        detail: "Modern async Python framework for low-latency ML inference and core services.",
        icon: <Code2 className="w-5 h-5 text-yellow-400" />,
      },
      {
        name: "GraphQL & REST",
        category: "API Architecture",
        detail: "Type-safe APIs enabling clean decoupled queries and reduced payload overhead.",
        icon: <Layers className="w-5 h-5 text-pink-400" />,
      },
      {
        name: "WebSockets & SSE",
        category: "Real-Time Sync",
        detail: "Full-duplex real-time communication channels for live chats, GPS and dashboards.",
        icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      },
    ],
    ai: [
      {
        name: "Autonomous AI Agents",
        category: "Agentic Systems",
        detail: "Self-correcting AI loops executing multi-step tool calls, data processing, and user tasks.",
        icon: <Brain className="w-5 h-5 text-primary" />,
      },
      {
        name: "LangChain & LlamaIndex",
        category: "AI Orchestration",
        detail: "Enterprise pipelines chaining foundation LLMs with live knowledge bases and APIs.",
        icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      },
      {
        name: "RAG & Vector Embeddings",
        category: "Retrieval AI",
        detail: "Semantic embedding matching (Pinecone / Pgvector) providing contextual responses.",
        icon: <Database className="w-5 h-5 text-indigo-400" />,
      },
      {
        name: "OpenAI & Claude LLMs",
        category: "Foundation Models",
        detail: "Fine-tuned models for automated customer support, extraction, and code generation.",
        icon: <Sparkles className="w-5 h-5 text-teal-400" />,
      },
    ],
    cloud: [
      {
        name: "PostgreSQL & PgVector",
        category: "Relational + Vector",
        detail: "Enterprise relational data integrity paired with vector search capabilities.",
        icon: <Database className="w-5 h-5 text-indigo-400" />,
      },
      {
        name: "MongoDB & NoSQL",
        category: "Document Store",
        detail: "Flexible schema storage for rapid scaling and document-driven application models.",
        icon: <Database className="w-5 h-5 text-emerald-500" />,
      },
      {
        name: "Redis",
        category: "In-Memory Cache",
        detail: "Microsecond caching layer, rate-limiting, and distributed pub/sub broker.",
        icon: <Server className="w-5 h-5 text-red-500" />,
      },
      {
        name: "AWS & Docker",
        category: "DevOps & Cloud",
        detail: "Containerized CI/CD pipelines, ECS, auto-scaling groups, and global CDN delivery.",
        icon: <Cloud className="w-5 h-5 text-amber-500" />,
      },
    ],
  };

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-card/20 border-y border-border/70">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              Modern Technology Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Engineered With Proven, Battle-Tested Tech
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
            We don't chase every fleeting trend. We choose mature, high-performance, and scalable technologies that guarantee long-term enterprise stability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-card border border-border/80 text-foreground/80 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {stacks[activeTab].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border/80 card-hover-effect relative group hover:border-primary/50 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-background border border-border/60 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[10px] font-semibold text-foreground/40 group-hover:text-primary transition-colors">
                  <span>Production Ready</span>
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
