import { useEffect, useState } from "react";

import { getHeroBanner } from "../services/heroBannerService";

import HomeHeaderV2 from "../components/home/v2/HomeHeaderV2";
import HeroSectionV2 from "../components/home/v2/HeroSectionV2";
import ValuationCardV2 from "../components/home/v2/ValuationCardV2";
import WhyChooseSectionV2 from "../components/home/v2/WhyChooseSectionV2";
import HowItWorksSectionV2 from "../components/home/v2/HowItWorksSectionV2";
import TrustedSectionV2 from "../components/home/v2/TrustedSectionV2";
import StickyFooterV2 from "../components/home/v2/StickyFooterV2";

export default function HomePage() {
  const [banner, setBanner] = useState<any>(null);

  useEffect(() => {
    async function loadBanner() {
      try {
        const data = await getHeroBanner("homeHero");
        setBanner(data);
      } catch (error) {
        console.error(
          "Failed to load hero banner:",
          error
        );
      }
    }

    loadBanner();
  }, []);

  if (!banner) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFFDF9]">
        <div className="text-center">
          <div
            className="
              mx-auto
              h-10
              w-10
              animate-spin
              rounded-full
              border-4
              border-[#D8A11A]
              border-t-transparent
            "
          />

          <p className="mt-4 text-sm text-slate-600">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
<main className="min-h-screen bg-[#FFFDF9] pb-28">
        <HomeHeaderV2 />

      <HeroSectionV2 banner={banner} />

      <ValuationCardV2 />

      <WhyChooseSectionV2 />

      <HowItWorksSectionV2 />

      <TrustedSectionV2 />

      <StickyFooterV2 />
    </main>
  );
}