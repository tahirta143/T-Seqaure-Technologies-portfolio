"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

export const StaggerTestimonials = ({ testimonials }) => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 580 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-lg transition-all duration-200 rounded-xl",
            "bg-card border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-lg transition-all duration-200 rounded-xl",
            "bg-card border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

function TestimonialCard({ position, testimonial, handleMove, cardSize }) {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-7 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      {/* Corner clip accent line */}
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 38,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* Avatar */}
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="mb-4 h-12 w-10 object-cover object-top rounded-sm"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={cn(
              "text-xs",
              isCenter ? "text-primary-foreground/80" : "text-amber-400"
            )}
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        className={cn(
          "text-sm sm:text-base font-medium leading-relaxed line-clamp-4",
          isCenter ? "text-primary-foreground" : "text-foreground"
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>

      {/* Attribution */}
      <p
        className={cn(
          "absolute bottom-6 left-7 right-7 text-xs font-semibold italic",
          isCenter ? "text-primary-foreground/75" : "text-foreground/55"
        )}
      >
        — {testimonial.by}
      </p>
    </div>
  );
}

export default StaggerTestimonials;
