import { useEffect, useState } from "react";

import { getHeroBanner } from "../services/heroBannerService";
import SellValuationForm from "../components/sell/SellValuationForm";
import HomeHeaderV2 from "../components/home/v2/HomeHeaderV2";
import StickyFooterV2 from "../components/home/v2/StickyFooterV2";
import WhatWeAcceptSection from "../components/sell/WhatWeAcceptSection";
import ProcessWorksSection from "../components/sell/ProcessWorksSection";
import WhyChooseSellSection from "../components/sell/WhyChooseSellSection";
import PromiseSection from "../components/sell/PromiseSection";
import FAQSection from "../components/sell/FAQSection";
import ReadyToSellSection from "../components/sell/ReadyToSellSection";
import VisitStoreSection from "../components/sell/VisitStoreSection";
import SellHeroSection from "../components/sell/SellHeroSection";
import SellTrustStrip from "../components/sell/SellTrustStrip";
import SellFooter from "../components/sell/SellFooter";
export default function SellPage() {
  const [banner, setBanner] = useState<any>(null);

  useEffect(() => {
    async function loadBanner() {
      try {
        const data = await getHeroBanner("sellGoldHero");
        setBanner(data);
      } catch (error) {
        console.error(
          "Failed to load sell banner:",
          error
        );
      }
    }

    loadBanner();
  }, []);

  if (!banner) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FEFAF8]">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FEFAF8] pb-28">
      <HomeHeaderV2 />

      <SellHeroSection banner={banner} />
	  <SellTrustStrip/>
      <SellValuationForm/>
      <WhatWeAcceptSection />
	  <ProcessWorksSection />
	  <WhyChooseSellSection />
	  <PromiseSection />
	  <FAQSection />
	  <ReadyToSellSection />
	  <VisitStoreSection />
	  <SellFooter />
      <StickyFooterV2 />
    </main>
  );
}