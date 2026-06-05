import {
  Users,
  Star,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function TrustedSectionV2() {
  return (
    <section className="px-4 pb-24">
      <div
        className="
          overflow-hidden
          rounded-[24px]
          bg-[#031B4E]
          px-5
          py-7
          text-white
        "
      >
        {/* TITLE */}

        <h2
          className="
            text-center
            text-[30px]
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

        <div className="mx-auto mt-2 mb-8 h-[3px] w-12 rounded bg-[#D8A11A]" />

        {/* STATS */}

        <div className="grid grid-cols-4">
          <Stat
            icon={<Users size={26} />}
            value="10K+"
            label="Happy Customers"
          />

          <Stat
            icon={<ShieldCheck size={26} />}
            value="99.5%"
            label="Customer Satisfaction"
          />

          <Stat
            icon={<Star size={26} />}
            value="4.8/5"
            label="Average Rating"
          />

          <Stat
            icon={<HeartHandshake size={26} />}
            value="15+"
            label="Years Of Trust"
          />
        </div>

        {/* CTA */}

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
          Contact Our Team

          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="mb-3 flex justify-center text-[#D8A11A]">
        {icon}
      </div>

      <div
        className="
          text-[22px]
          font-bold
          text-white
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          px-1
          text-[11px]
          leading-4
          text-white/80
        "
      >
        {label}
      </div>
    </div>
  );
}