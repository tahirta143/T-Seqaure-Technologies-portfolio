"use client";

import React, { useState } from "react";

export default function BrandMarquee() {
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);

  // Row 1: Leading Brands & Enterprises (Devsinc Style Clean Logos)
  const row1Logos = [
    {
      name: "inDrive",
      element: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#82E600] flex items-center justify-center font-black text-black text-sm">
            iD
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">inDrive</span>
        </div>
      ),
    },
    {
      name: "Nishat",
      element: (
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5">
            <span className="w-1.5 h-7 bg-[#2E3192] rounded-sm transform -skew-x-12"></span>
            <span className="w-1.5 h-7 bg-[#2E3192] rounded-sm transform -skew-x-12"></span>
            <span className="w-1.5 h-7 bg-[#2E3192] rounded-sm transform -skew-x-12"></span>
          </div>
          <span className="text-xl font-black tracking-widest text-[#2E3192] dark:text-blue-400 uppercase">NISHAT</span>
        </div>
      ),
    },
    {
      name: "Kallidus",
      element: (
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500"></span>
          <span className="text-lg font-bold text-foreground">Kallidus</span>
        </div>
      ),
    },
    {
      name: "Weatherbys",
      element: (
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">WEATHERBYS</span>
          <span className="text-[8px] text-foreground/50 tracking-wider">EST. 1770</span>
        </div>
      ),
    },
    {
      name: "HoneyBricks",
      element: (
        <div className="flex items-center gap-1.5">
          <span className="text-amber-500 text-lg font-black">⬡</span>
          <span className="text-lg font-semibold text-foreground">HoneyBricks</span>
        </div>
      ),
    },
    {
      name: "Waseela Health",
      element: (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#6E1A37] flex items-center justify-center text-white font-bold text-xs">
            W
          </div>
          <span className="text-lg font-extrabold text-foreground tracking-tight">Waseela Health</span>
        </div>
      ),
    },
    {
      name: "Al Ghurair",
      element: (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rotate-45 border-2 border-purple-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-purple-600"></div>
          </div>
          <span className="text-lg font-serif font-bold text-foreground">Al Ghurair</span>
        </div>
      ),
    },
    {
      name: "Intellirent",
      element: (
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-xs"></span>
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-xs"></span>
            <span className="w-1.5 h-1.5 bg-cyan-600 rounded-xs"></span>
            <span className="w-1.5 h-1.5 bg-cyan-300 rounded-xs"></span>
          </div>
          <span className="text-lg font-medium text-foreground tracking-tight">intellirent™</span>
        </div>
      ),
    },
    {
      name: "x-quic",
      element: (
        <div className="flex items-center">
          <span className="text-xl font-extrabold text-[#FF5A60] tracking-wider">x·quic</span>
        </div>
      ),
    },
  ];

  // Row 2: Consumer, Retail, Apparel & Supermarkets (Devsinc Style Clean Logos)
  const row2Logos = [
    {
      name: "Sapphire",
      element: (
        <div className="flex flex-col items-center">
          <div className="w-4 h-6 border-b border-foreground/40 flex items-center justify-center mb-0.5">
            <span className="text-[10px] text-foreground">🏛️</span>
          </div>
          <span className="text-sm font-serif font-bold tracking-[0.25em] text-foreground uppercase">SAPPHIRE</span>
        </div>
      ),
    },
    {
      name: "GrocerApp",
      element: (
        <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-[#F37A20] text-white">
          <span className="text-sm">🥕</span>
          <span className="text-base font-black tracking-tight">Grocer<span className="font-light">App</span></span>
        </div>
      ),
    },
    {
      name: "Zellbury",
      element: (
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-wider text-foreground">Zellbury</span>
        </div>
      ),
    },
    {
      name: "Aesop",
      element: (
        <div className="flex items-center">
          <span className="text-2xl font-serif tracking-normal text-foreground">Aēsop.</span>
        </div>
      ),
    },
    {
      name: "BARQ Delivery",
      element: (
        <div className="flex flex-col items-center leading-none">
          <span className="text-2xl font-black tracking-wider text-[#FDB913]">BARQ</span>
          <span className="text-[7px] font-bold tracking-widest text-foreground/60 uppercase">BULLET DELIVERY</span>
        </div>
      ),
    },
    {
      name: "Xiaomi",
      element: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#FF6900] flex items-center justify-center text-white font-bold text-xs">
            mi
          </div>
          <span className="text-lg font-medium text-foreground tracking-tight">xiaomi</span>
        </div>
      ),
    },
    {
      name: "Green Ninja",
      element: (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#3FB950] flex items-center justify-center text-white text-xs">
            🥷
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-xs font-black text-[#3FB950]">Green</span>
            <span className="text-xs font-black text-foreground">Ninja</span>
          </div>
        </div>
      ),
    },
    {
      name: "Metaplex",
      element: (
        <div className="flex items-center gap-2">
          <span className="font-black text-base text-foreground">M</span>
          <span className="text-sm font-bold tracking-widest uppercase text-foreground/80">METAPLEX</span>
        </div>
      ),
    },
    {
      name: "Green Hill",
      element: (
        <div className="flex items-center gap-1.5 border border-foreground/30 px-2 py-0.5 rounded">
          <span className="text-xs font-black bg-emerald-600 text-white px-1 rounded-xs">GH</span>
          <span className="text-xs font-black tracking-tight uppercase text-foreground">GREEN HILL</span>
        </div>
      ),
    },
    {
      name: "Eduleaf",
      element: (
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-500 text-sm">🍃</span>
          <span className="text-xl font-bold text-foreground/90 tracking-tight">eduleaf</span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 bg-background border-y border-border/60 overflow-hidden relative">
      {/* Edge Gradient Masks for Seamless Blending */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Row 1 */}
      <div
        className="overflow-hidden py-4 select-none cursor-pointer"
        onMouseEnter={() => setRow1Paused(true)}
        onMouseLeave={() => setRow1Paused(false)}
      >
        <div
          className="animate-marquee gap-14 sm:gap-20 items-center flex"
          style={{ animationPlayState: row1Paused ? "paused" : "running" }}
        >
          {[...row1Logos, ...row1Logos, ...row1Logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center flex-shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              {logo.element}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 (Reverse) */}
      <div
        className="overflow-hidden py-4 select-none cursor-pointer"
        onMouseEnter={() => setRow2Paused(true)}
        onMouseLeave={() => setRow2Paused(false)}
      >
        <div
          className="animate-marquee-reverse gap-14 sm:gap-20 items-center flex"
          style={{ animationPlayState: row2Paused ? "paused" : "running" }}
        >
          {[...row2Logos, ...row2Logos, ...row2Logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center flex-shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              {logo.element}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
