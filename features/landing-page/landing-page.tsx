import { SiteHeader } from "./header";
import { HeroSection } from "./hero-section";
import { TrustRibbon } from "./trust-ribbon";
import { VisionMissionSection } from "./vision-mission-section";
import { ProgramsSection } from "./programs-section";
import { VocationalSection } from "./vocational-section";
import { BeneficiarySection } from "./beneficiary-section";
import { ImpactSection } from "./impact-section";
import { FieldReachSection } from "./field-reach-section";
import { InvolvementSection } from "./involvement-section";
import { PartnershipSection } from "./partnership-section";
import { SiteFooter } from "./footer";

export function LandingPage() {
  return (
    <div className="landing-page min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main className="pt-20">
        <HeroSection />
        <TrustRibbon />
        <VisionMissionSection />
        <ProgramsSection />
        <VocationalSection />
        <BeneficiarySection />
        <ImpactSection />
        <FieldReachSection />
        <InvolvementSection />
        <PartnershipSection />
      </main>
      <SiteFooter />
    </div>
  );
}
