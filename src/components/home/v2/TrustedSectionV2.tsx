import {
  Users,
  Star,
  ShieldCheck,
  HeartHandshake
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

       <a
  href="https://www.google.com/search?q=VAKA+GOLD+Vijayawada"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-4
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-xl
    border
    border-[#D1D5DB]
    bg-white
    py-3
    text-[15px]
    font-semibold
    text-[#111827]
    shadow-sm
  "
  style={{
    fontFamily:
      'Georgia, "Times New Roman", serif',
  }}
>
  <img
  src="https://www.google.com/favicon.ico"
  alt="Google"
  className="h-6 w-6"
  loading="lazy"
/>

  Read Reviews on Google
</a>
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