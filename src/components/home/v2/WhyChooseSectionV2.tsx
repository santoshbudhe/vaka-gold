import {
  ShieldCheck,
  BadgeDollarSign,
  Wallet,
  Users,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseSectionV2() {
  return (
    <section className="px-4 py-4">
      <div
        className="
          overflow-hidden
          rounded-[24px]
          bg-[#031B4E]
          px-5
          py-6
          text-white
        "
      >
        {/* TITLE */}

        <div className="mb-8 flex items-center gap-4">
          <div className="h-[2px] flex-1 bg-[#D8A11A]" />

          <h2
            className="
              whitespace-nowrap
              text-center
              text-[26px]
              font-bold
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            Why Choose VAKA GOLD?
          </h2>

          <div className="h-[2px] flex-1 bg-[#D8A11A]" />
        </div>

        {/* FEATURES */}

        <div className="grid grid-cols-4">
          <Feature
            icon={<ShieldCheck size={34} />}
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
            icon={<BadgeDollarSign size={34} />}
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
            icon={<Wallet size={34} />}
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
            icon={<Users size={34} />}
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
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-[#D8A11A]
            py-4
            text-lg
            font-semibold
            text-[#D8A11A]
          "
        >
          About VAKA GOLD

          <ArrowRight size={18} />
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
      <div className="mb-4 flex justify-center text-[#D8A11A]">
        {icon}
      </div>

      <h3
        className="
          min-h-[62px]
          text-[13px]
          font-semibold
          leading-5
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
          text-[11px]
          leading-5
          text-white/85
        "
      >
        {description}
      </div>
    </div>
  );
}