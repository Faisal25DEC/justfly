import Brands from "@/components/Brands";
import Cargo from "@/components/Cargo/Cargo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HajjUmrah from "@/components/HajjUmrah/HajjUmrah";
import Hero from "@/components/Hero";
import InjuryAndClaims from "@/components/InjuryClaims/InjuryClaims";
import { Metadata } from "next";
import TopDestinations from "@/components/TopDestinations/TopDestinations";
import Testimonials from "@/components/Testimonials/Testimonials";
import Packages from "@/components/Packages/Packages";
import NadraCard from "@/components/NadraCard/NadraCard";
import MoneyTransfer from "@/components/MoneyTransfer/MoneyTransfer";

export const metadata: Metadata = {
  title: "Justfly Traverls",
  description: "Your next best umrah/hajj is few clicks away",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <TopDestinations />

      <Brands />
      <Features />
      <section id="hajj-umrah" className="section-bg">
        <HajjUmrah />
      </section>
      <Packages />
      <section id="cargo" className="section-bg-fade">
        <Cargo />
      </section>
      <section id="injury-claims" className="section-bg relative">
        <InjuryAndClaims />
      </section>
      <section id="nadra-services" className="section-bg-fade relative py-12">
        <NadraCard />
      </section>
      <section id="money-transfer" className="section-bg relative">
        <MoneyTransfer />
      </section>
      <section className="section-bg-fade">
        <Testimonials />
      </section>
    </>
  );
}
