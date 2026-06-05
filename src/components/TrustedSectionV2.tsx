import {
  Users,
  ShieldCheck,
  Star,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function TrustedSectionV2() {
  return (
    <section className="px-4 pb-24">
      <div className="overflow-hidden rounded-2xl bg-[#031B4E] px-5 py-6 text-white">

        <h2 className="mb-6 text-center font-serif text-[28px] font-bold">
          Trusted By Thousands
        </h2>

        <div className="grid grid-cols-4">
          <Stat
            icon={<Users size={28} />}
            value="10K+"
            label="Happy Customers"
          />

          <Stat
            icon={<ShieldCheck size={28} />}
            value="99.5%"
            label="Customer Satisfaction"
          />

          <Stat
            icon={<Star size={28} />}
            value="4.8/5"
            label="Average Rating"
          />

          <Stat
            icon={<Heart size={28} />}
            value="15+"
            label="Years Of Trust"
          />
        </div>

        <button
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-[#D8A11A]
            py-3
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
      <div className="mb-2 flex justify-center text-[#D8A11A]">
        {icon}
      </div>

      <div className="text-xl font-bold">
        {value}
      </div>

      <div className="mt-1 text-[11px] leading-4">
        {label}
      </div>
    </div>
  );
}