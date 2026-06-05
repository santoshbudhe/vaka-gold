import {
  Phone,
  Search,
  BadgeDollarSign,
  Wallet,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksSectionV2() {
  return (
    <section className="px-4 py-6">
      {/* TITLE */}

      <h2
        className="
          text-center
          text-[34px]
          font-bold
          text-[#031B4E]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        How It Works
      </h2>

      <div className="mx-auto mt-2 mb-10 h-[3px] w-12 rounded bg-[#D8A11A]" />

      {/* TIMELINE */}

      <div className="relative">
        <div
          className="
            absolute
            left-0
            right-0
            top-8
            border-t-2
            border-dashed
            border-[#D8A11A]
          "
        />

        <div className="relative grid grid-cols-4">
          <Step
            number="1"
            icon={<Phone size={26} />}
            title="Contact Us"
            description="Submit your details or call us."
          />

          <Step
            number="2"
            icon={<Search size={26} />}
            title="Evaluation"
            description="Transparent gold testing."
          />

          <Step
            number="3"
            icon={<BadgeDollarSign size={26} />}
            title="Best Offer"
            description="Receive our highest quote."
          />

          <Step
            number="4"
            icon={<Wallet size={26} />}
            title="Get Paid"
            description="Instant settlement."
          />
        </div>
      </div>

      {/* CTA */}

      <button
        className="
          mt-10
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
        View Full Selling Process

        <ArrowRight size={18} />
      </button>
    </section>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      {/* ICON */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-4
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border-4
          border-[#FAF7F2]
          bg-white
          text-[#D8A11A]
          shadow-sm
        "
      >
        {icon}
      </div>

      {/* NUMBER */}

      <div className="mb-2 text-sm font-bold text-[#D8A11A]">
        {number}
      </div>

      {/* TITLE */}

      <h3
        className="
          min-h-[44px]
          px-1
          text-[14px]
          font-semibold
          text-[#031B4E]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          mt-2
          px-1
          text-[11px]
          leading-5
          text-[#687280]
        "
      >
        {description}
      </p>
    </div>
  );
}