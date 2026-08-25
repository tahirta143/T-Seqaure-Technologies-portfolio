"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, CheckCircle2, Globe2, Clock } from "lucide-react";

function Counter({ targetValue, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Extract numerical value if any
    const num = parseInt(targetValue, 10);
    if (isNaN(num)) return;

    let start = 0;
    const duration = 1800; // ms
    const steps = 40;
    const increment = num / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsData = [
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      label: "Projects Delivered",
      value: "25",
      suffix: "+",
      description: "Custom SaaS & Enterprise Apps",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      label: "Client Satisfaction",
      value: "100",
      suffix: "%",
      description: "5-Star Ratings & Retention",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-primary" />,
      label: "Global Reach",
      value: "10",
      suffix: "+",
      description: "Countries & Clients Served",
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      label: "Support & Uptime",
      value: "24",
      suffix: "/7",
      description: "Dedicated SLA Maintenance",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-background text-foreground border-b border-border/70">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/80 backdrop-blur-sm relative group hover:border-primary/50 card-hover-effect flex flex-col justify-between"
            >
              {/* Top Row: Icon Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-background border border-border/60 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-primary/80 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  Metric #{idx + 1}
                </span>
              </div>

              {/* Counter Number */}
              <div className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-2 flex items-baseline">
                <span className="text-primary mr-0.5">
                  <Counter targetValue={stat.value} suffix={stat.suffix} />
                </span>
              </div>

              {/* Labels */}
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-foreground/60 leading-normal">
                  {stat.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                <div className="w-8 h-1 rounded-full bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                <span className="text-[10px] font-bold text-foreground/40 group-hover:text-primary transition-colors">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
