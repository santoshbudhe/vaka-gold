import {
  ShieldCheck,
  BadgeDollarSign,
  Banknote,
  Users,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function WhyChooseSectionV2() {
  const navigate = useNavigate();
  return (
    <section className="px-4">
      <div
        className="
          overflow-hidden
          rounded-[24px]
          bg-[#021B35]
          px-4
          py-4
          text-white
        "
      >
        {/* TITLE */}

        <div className="mb-5 flex items-center justify-center gap-4">
          <div className="h-[2px] w-[60px] bg-[#D8A11A]" />

          <h2
            className="
              whitespace-nowrap
              text-center
              text-[20px]
              font-bold
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            Why Choose VAKA GOLD?
          </h2>

          <div className="h-[2px] w-[60px] bg-[#D8A11A]" />
        </div>

        {/* FEATURES */}

        <div className="grid grid-cols-4">
          <Feature
            icon={<ShieldCheck size={28} />}
            title={
              <>
                Transparent
                <br />
                Evaluation
              </>
            }
            description={
              <>
                Advanced testing
                <br />
                for accurate
                <br />
                evaluation.
              </>
            }
          />

          <Feature
            icon={<BadgeDollarSign size={28} />}
            title={
              <>
                Best Market
                <br />
                Value
              </>
            }
            description={
              <>
                Highest rates
                <br />
                based on current
                <br />
                market price.
              </>
            }
            divider
          />

          <Feature
            icon={<Banknote size={28} />}
            title={
              <>
                Immediate
                <br />
                Payments
              </>
            }
            description={
              <>
                Get timely payments
                <br />
                with a smooth
                <br />
                settlement process.
              </>
            }
            divider
          />

          <Feature
            icon={<Users size={28} />}
            title={
              <>
                Experienced
                <br />
                Professionals
              </>
            }
            description={
              <>
                Trained experts
                <br />
                ensure a smooth
                <br />
                experience.
              </>
            }
            divider
          />
        </div>

        {/* BUTTON */}

      <button
  onClick={() => navigate("/about")}
  className="
    mx-auto
    mt-5
    flex
    w-[72%]
    items-center
    justify-center
    gap-3
    rounded-xl
    border
    border-[#D8A11A]
    py-2
    text-[14px]
    font-semibold
    text-[#D8A11A]
  "
  style={{
    fontFamily:
      'Georgia, "Times New Roman", serif',
  }}
>
  About VAKA GOLD

  <ArrowRight size={16} />
</button>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  description,
  divider = false,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  divider?: boolean;
}) {
  return (
    <div
      className={`
        px-2
        text-center
        ${divider ? "border-l border-[#D8A11A]/30" : ""}
      `}
    >
      <div className="mb-3 flex justify-center text-[#D8A11A]">
        {icon}
      </div>

      <h3
        className="
          mb-2
          text-[11px]
          font-semibold
          leading-4
          text-white
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        {title}
      </h3>

      <div
        className="
          text-[10px]
          leading-4
          text-white/85
        "
      >
        {description}
      </div>
    </div>
  );
}