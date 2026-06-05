import { useEffect, useState } from "react";
import { getHeroBanner } from "../services/heroBannerService";

interface Props {
  bannerId: string;
}

export default function HeroBanner({ bannerId }: Props) {
  const [banner, setBanner] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await getHeroBanner(bannerId);
      setBanner(data);
    }

    load();
  }, [bannerId]);

  if (!banner) {
    return (
      <div className="p-6">
        Loading hero...
      </div>
    );
  }

  return (
    <section className="bg-white">
      <img
        src={banner.imageUrl}
        alt={banner.title}
        className="w-full object-cover"
      />

      <div className="px-5 py-6">
        <h2 className="text-4xl font-bold leading-tight text-[#0A1533]">
          {banner.title}
        </h2>

        <p className="mt-4 text-gray-600">
          {banner.subtitle}
        </p>
      </div>
    </section>
  );
}