import { useState } from "react";
import SplashScreen from "../components/SplashScreen";

import StatsSectionV2 from "../components/home/v2/StatsSectionV2";
import HomeHeaderV2 from "../components/home/v2/HomeHeaderV2";
import HeroSectionV2 from "../components/home/v2/HeroSectionV2";
import WhyChooseSectionV2 from "../components/home/v2/WhyChooseSectionV2";
import HowItWorksSectionV2 from "../components/home/v2/HowItWorksSectionV2";
import TrustedSectionV2 from "../components/home/v2/TrustedSectionV2";
import StickyFooterV2 from "../components/home/v2/StickyFooterV2";
import TrustBarV2 from "../components/home/v2/TrustBarV2";
import WhatWeAcceptV2 from "../components/home/v2/WhatWeAcceptV2";
import MainContentShell from "../components/home/v2/MainContentShell";
import FAQSection from "../components/sell/FAQSection";
import StoreLocationV2 from "../components/home/v2/StoreLocationV2";
import StoreTimingsV2 from "../components/home/v2/StoreTimmingsV2";
import SellFooter from "../components/sell/SellFooter";
import LeadCaptureModal from "../components/lead/LeadCaptureModal";

export default function HomePage() {
  const [showSplash, setShowSplash] =
    useState(true);

  const [
    showLeadModal,
    setShowLeadModal,
  ] = useState(false);

  if (showSplash) {
    return (
      <SplashScreen
        onFinish={() =>
          setShowSplash(false)
        }
      />
    );
  }

  return (
    <main className="min-h-screen bg-[#FFFDF9] pb-28">
      <HomeHeaderV2 />

      <TrustBarV2 />

      <HeroSectionV2
        imageUrl="/hero-banner.jpg"
        onGetValuation={() =>
          setShowLeadModal(true)
        }
      />

      <StatsSectionV2 />

      <MainContentShell>
        <WhatWeAcceptV2 />

        <WhyChooseSectionV2 />

        <HowItWorksSectionV2 />

        <FAQSection />

        <TrustedSectionV2 />

        <StoreLocationV2 />

        <StoreTimingsV2 />

        <SellFooter />

        <StickyFooterV2 />
      </MainContentShell>

      <LeadCaptureModal
        open={showLeadModal}
        onClose={() =>
          setShowLeadModal(false)
        }
        sourceComponent="hero"
      />
    </main>
  );
}