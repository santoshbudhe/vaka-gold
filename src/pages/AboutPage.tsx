import { useEffect, useState } from "react";

import { getHeroBanner } from "../services/heroBannerService";

import HomeHeaderV2 from "../components/home/v2/HomeHeaderV2";
import StickyFooterV2 from "../components/home/v2/StickyFooterV2";
import SellFooter from "../components/sell/SellFooter";

import AboutHeroSection from "../components/about/AboutHeroSection";

export default function AboutPage() {
  const [banner, setBanner] = useState<any>(null);

  useEffect(() => {
    async function loadBanner() {
      try {
        const data = await getHeroBanner("aboutHero");
        setBanner(data);
      } catch (error) {
        console.error(
          "Failed to load about banner:",
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

      <AboutHeroSection banner={banner} />

      {/* OUR STORY SECTION */}
      {/* COMING NEXT */}

      {/* CORE VALUES SECTION */}
      {/* COMING NEXT */}

      {/* WHY CHOOSE VAKA SECTION */}
      {/* COMING NEXT */}

      {/* PROCESS SECTION */}
      {/* COMING NEXT */}

      {/* VISIT STORE SECTION */}
      {/* COMING NEXT */}

      {/* READY TO SELL SECTION */}
      {/* COMING NEXT */}

      <SellFooter />
      <StickyFooterV2 />
    </main>
  );
}