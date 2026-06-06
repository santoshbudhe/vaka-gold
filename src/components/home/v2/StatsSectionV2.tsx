import {
  Users,
  BadgeCheck,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function StatsSectionV2() {
  const stats = [
    {
      icon: <Users size={32} strokeWidth={2.2} />,
      value: "10K+",
      line1: "Happy",
      line2: "Customers",
    },
    {
      icon: <BadgeCheck size={32} strokeWidth={2.2} />,
      value: "100%",
      line1: "Transparent",
      line2: "Process",
    },
    {
      icon: <Clock3 size={32} strokeWidth={2.2} />,
      value: "30 Min",
      line1: "Quick",
      line2: "Valuation",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={2.2} />,
      value: "100%",
      line1: "Secure",
      line2: "Payment",
    },
  ];

  return (
    <section className="bg-[#021b35] px-2 py-2">
      <div className="grid grid-cols-4 gap-[2px]">
        {stats.map((stat) => (
          <div
            key={stat.value + stat.line1}
            className="
              rounded-[14px]
              bg-[#021b35]
              border
              border-[#15304f]
              py-2
              px-1
              text-center
              shadow-sm
            "
          >
            {/* ICON */}

            <div className="flex justify-center text-[#D8A11A]">
              {stat.icon}
            </div>

            {/* NUMBER */}

            <div
              className="
                mt-1
                text-[14px]
                font-bold
                leading-none
                text-white
              "
              style={{
                fontFamily:
                  '"Times New Roman", Times, serif',
              }}
            >
              {stat.value}
            </div>

            {/* LABEL */}

            <div
              className="
                mt-1
                text-[10px]
                leading-[1.15]
                text-white
              "
              style={{
                fontFamily:
                  '"Times New Roman", Times, serif',
              }}
            >
              {stat.line1}
              <br />
              {stat.line2}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}