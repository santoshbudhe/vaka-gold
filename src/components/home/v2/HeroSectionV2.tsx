import { useState } from "react";
import { Calculator, ShieldCheck } from "lucide-react";

export default function HeroSectionV2({
  imageUrl,
  onGetValuation,
}: {
  imageUrl: string;
  onGetValuation: () => void;
}) {
  const [imageLoaded, setImageLoaded] =
    useState(false);

  return (
    <section>
      <div
        className="
          relative
          overflow-hidden
          h-[340px]
          bg-[#021B35]
        "
      >
        {/* HERO IMAGE */}

        <img
          src={imageUrl}
          alt="VAKA GOLD"
          width="390"
          height="585"
          loading="eager"
          onLoad={(e) => {
            console.log(
              "Hero image size:",
              e.currentTarget.naturalWidth,
              e.currentTarget.naturalHeight
            );

            setImageLoaded(true);
          }}
          className="
            absolute
            inset-0
            w-full
            object-cover
          "
        />

        {/* CONTENT */}

        <div
          className={`
            relative
            z-10
            px-4
            pt-5
            transition-opacity
            duration-300
            ${
              imageLoaded
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <p
            className="
              text-[14px]
              font-bold
              tracking-wide
              text-[#D8A11A]
            "
          >
            GET INSTANT VALUATION
          </p>

          <h1
            className="
              mt-3
              max-w-[300px]
              text-[29px]
              font-bold
              leading-[1.4]
              text-white
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            Get the Best Value
            <br />

            <span className="text-[#D8A11A]">
              for Your Gold
            </span>
          </h1>

          <p
            className="
              mt-4
              max-w-[300px]
              text-[14px]
              leading-6
              text-white
            "
          >
            Instant valuation,
            transparent
            <br />
            process,
            and secure payment.
          </p>

          <button
            onClick={onGetValuation}
            className="
              mt-4
              flex
              items-center
              gap-1
              rounded-xl
              bg-[#D8A11A]
              px-2
              py-3
              shadow-lg
              transition-all
              duration-200
              hover:opacity-90
            "
          >
            <Calculator
              size={22}
              className="text-[#021b35]"
            />

            <span
              className="
                text-[15px]
                font-bold
                text-[#021b35]
              "
              style={{
                fontFamily:
                  '"Times New Roman", Times, serif',
              }}
            >
              Get Free Valuation Now
            </span>
          </button>

          <div
            className="
              mt-3
              flex
              items-center
              gap-1
            "
          >
            <ShieldCheck
              size={24}
              className="text-[#D8A11A]"
            />

            <span
              className="
                text-[10px]
                font-bold
                text-[#D8A11A]
              "
            >
              100% Secure & Confidential
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}