import { Calculator, ShieldCheck } from "lucide-react";

export default function HeroSectionV2({
  banner,
}: {
  banner: any;
}) {
  return (
    <section>
      <div
        className="
          relative
          overflow-hidden
          min-h-[520px]
        "
      >
        {/* HERO IMAGE */}

        <img
          src={banner.imageUrl}
          alt={banner.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-[#021b35]/30
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            px-4
            pt-12
          "
        >
          {/* TOP LABEL */}

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

          {/* HEADING */}

          <h1
            className="
              mt-3
              max-w-[380px]
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
            Get the <br /> Best Value
            <br />
            <span className="text-[#D8A11A]">
              for Your Gold
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              max-w-[300px]
              text-[14px]
              leading-6
              text-white
            "
          >
            Instant valuation, <br />
            transparent process, <br />
            and secure payment.
          </p>

          {/* CTA BUTTON */}

          <button
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
            "
          >
            <Calculator
              size={22}
              className="text-[#021b35]"
            />

            <span
              className="
                text-[13px]
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

          {/* TRUST MESSAGE */}

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
                text-[13px]
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