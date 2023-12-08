import Brands from "@/components/Brands";
import Cargo from "@/components/Cargo/Cargo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HajjUmrah from "@/components/HajjUmrah/HajjUmrah";
import Hero from "@/components/Hero";
import InjuryAndClaims from "@/components/InjuryClaims/InjuryClaims";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel agency site",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Features />
      <section id="hajj-umrah">
        <HajjUmrah />
      </section>
      <section id="card">
        <Cargo />
      </section>
      <section id="injury-claims">
        <InjuryAndClaims />
      </section>
      <Contact />
    </>
  );
}
