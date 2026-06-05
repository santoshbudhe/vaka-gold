import {
  Users,
  Star,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function TrustedSectionV2() {
  return (
    <section className="px-4 pb-0">
      <div
        className="
          overflow-hidden
          rounded-[20px]
          bg-[#021B35]
          px-4
          py-4
          text-white
        "
      >
        {/* TITLE */}

        <h2
          className="
            text-center
            text-[18px]
            font-bold
            text-white
          "
          style={{
            fontFamily:
              'Georgia, "Times New Roman", serif',
          }}
        >
          Trusted By Thousands
        </h2>

        <div className="mx-auto mt-1 mb-4 h-[2px] w-8 bg-[#D8A11A]" />

        {/* STATS */}

        <div className="grid grid-cols-4">
          <Stat
            icon={<Users size={22} />}
            value="10K+"
            label="Happy Customers"
          />

          <Stat
            icon={<ShieldCheck size={22} />}
            value="99.5%"
            label="Customer Satisfaction"
            divider
          />

          <Stat
            icon={<Star size={22} />}
            value="4.8/5"
            label="Average Rating"
            divider
          />

          <Stat
            icon={<HeartHandshake size={22} />}
            value="15+"
            label="Years of Trust"
            divider
          />
        </div>

        {/* CTA */}

        <button
          className="
            mx-auto
            mt-4
            flex
            w-[72%]
            items-center
            justify-center
            gap-2
            rounded-lg
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
          Contact Our Team

          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
  divider = false,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  divider?: boolean;
}) {
  return (
    <div
      className={`
        text-center
        px-2
        ${divider ? "border-l border-[#D8A11A]/40" : ""}
      `}
    >
      <div className="mb-1 flex justify-center text-[#D8A11A]">
        {icon}
      </div>

      <div
        className="
          text-[16px]
          font-bold
          text-white
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[9px]
          leading-3
          text-white/85
        "
      >
        {label}
      </div>
    </div>
  );
}