"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const testimonials = [
  {
    tempId: 0,
    testimonial: "T Square Technologies delivered our marketplace platform ahead of schedule. The code quality, load speeds, and post-launch support have been outstanding. Best tech partner we've worked with.",
    by: "Marcus Vance, CEO at ApexRetail",
    imgSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    tempId: 1,
    testimonial: "The AI agent pipeline they built for our customer support cut ticket volume by 40% within two weeks. Absolutely transformative for our operations team.",
    by: "Sophia Chen, VP of Product at CarePulse",
    imgSrc: "https://i.pravatar.cc/150?img=5",
  },
  {
    tempId: 2,
    testimonial: "Exceptional architecture! Our gym management app runs offline-first without a single delay. The Flutter team at T Square really knows their craft.",
    by: "David K., Founder at FitSync",
    imgSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    tempId: 3,
    testimonial: "Their Next.js team pushed our Lighthouse SEO score to 98/100. Organic traffic doubled in 3 months. The performance gains were real and measurable.",
    by: "Elena Rostova, CTO at EduLearn",
    imgSrc: "https://i.pravatar.cc/150?img=16",
  },
  {
    tempId: 4,
    testimonial: "The POS system they built in Flutter handles 85,000+ daily transactions across 25 stores without a single crash. Incredible reliability and offline-first design.",
    by: "James L., Operations Director at FastPOS",
    imgSrc: "https://i.pravatar.cc/150?img=3",
  },
  {
    tempId: 5,
    testimonial: "From day one they understood our healthcare workflows. HIPAA compliance, multi-branch records, real-time scheduling — all delivered exactly as promised.",
    by: "Dr. Anwar M., Director at Waseela Health",
    imgSrc: "https://i.pravatar.cc/150?img=14",
  },
  {
    tempId: 6,
    testimonial: "We needed a custom ERP for our school network fast. T Square delivered a full multi-tenant system with automated banking vouchers in just 8 weeks. Remarkable execution.",
    by: "Sarah K., Principal at Horizon Academy",
    imgSrc: "https://i.pravatar.cc/150?img=9",
  },
  {
    tempId: 7,
    testimonial: "Our e-commerce conversion rate jumped 35% after their Next.js headless rebuild. Sub-second load times worldwide. They clearly understand modern web performance.",
    by: "Zara P., CMO at StyleHaven",
    imgSrc: "https://i.pravatar.cc/150?img=20",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden bg-background text-foreground border-t border-border/60"
    >
      {/* Background Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              Client Endorsements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
            Trusted by founders, CTOs, and operations leaders across healthcare, retail, fintech, and edtech globally.
          </p>
        </div>

        {/* Stagger Testimonials Carousel */}
        <StaggerTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
