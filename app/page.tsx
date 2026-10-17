import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/home/pricing-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us";
import { DecisionGuideSection } from "@/components/home/decision-guide";
import { SecuritySection } from "@/components/home/security-section";
import { GlobalInfrastructureSection } from "@/components/home/global-infrastructure";
import { InfrastructurePerformanceSection } from "@/components/home/infrastructure-performance";
import { DeveloperSection } from "@/components/home/developer-section";
import { BusinessAgencySection } from "@/components/home/business-agency-section";
import { MigrationSection } from "@/components/home/migration-section";
import { ComparisonSection } from "@/components/home/comparison-section";
import { AiHostingSection } from "@/components/home/ai-hosting-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ResourcesSection } from "@/components/home/resources-section";
import { FaqSection } from "@/components/home/faq-section";

export const metadata: Metadata = {
  title: "NEXORA Cloud | High-Performance Web Hosting & Cloud Infrastructure",
  description:
    "Next-generation web hosting, Cloud VPS, bare-metal dedicated servers, and managed infrastructure engineered for developers, agencies, and high-growth businesses.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* 1. Header: Sticky Responsive Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section with Live Cloud Infrastructure Dashboard & Tech Strip */}
        <HeroSection />

        {/* 3. Why Choose Us (6 Technical Pillars) */}
        <WhyChooseUsSection />

        {/* 4. Hardware Architecture & Live Telemetry Performance Benchmarks */}
        <InfrastructurePerformanceSection />

        {/* 5. Global Infrastructure with Interactive World Map & Region Inspector */}
        <GlobalInfrastructureSection />

        {/* 6. Dark Security Section with Edge Threat Mitigation Flow */}
        <SecuritySection />

        {/* 7. Developer-First Section & Interactive CLI Snippet */}
        <DeveloperSection />

        {/* 8. Business & Digital Agency Management Section */}
        <BusinessAgencySection />

        {/* 9. Modern AI Website Builder & Canvas Studio */}
        <AiHostingSection />

        {/* 10. Zero-Downtime Assisted Migration Pipeline */}
        <MigrationSection />

        {/* 11. Objective Platform Comparison Matrix */}
        <ComparisonSection />

        {/* 12. Verified Customer Testimonials & 4.8/5 Trust Rating */}
        <TestimonialsSection />

        {/* 13. Hosting Decision Guide (START → SCALE → CONTROL) */}
        <DecisionGuideSection />

        {/* 14. Pricing Section with Billing Toggle & Specifications Matrix */}
        <PricingSection />

        {/* 15. Comprehensive Accordion FAQ (12 Questions) */}
        <FaqSection />

        {/* 16. Engineering Resources, Guides & Tutorials */}
        <ResourcesSection />
      </main>

      {/* 21. Global Dark Background Footer */}
      <Footer />
    </div>
  );
}
