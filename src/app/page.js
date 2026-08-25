"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ContactPopup from "@/components/layout/ContactPopup";
import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import TechStack from "@/components/sections/TechStack";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ContactPopup />
      <WhatsAppButton />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandMarquee />
        <Stats />
        <Services />
        <Products />
        <TechStack />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
