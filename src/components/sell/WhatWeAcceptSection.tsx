import {
  Circle,
  Gem,
  CircleDashed,
  Coins,
  CircleDot,
} from "lucide-react";

export default function WhatWeAcceptSection() {
  return (
    <section className="px-4 py-4">
      {/* TITLE */}

      <h2
        className="
          text-center
          text-[22px]
          font-bold
          text-[#111827]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        What We Accept
      </h2>

      <div className="mx-auto mt-2 h-[2px] w-10 bg-[#D8A11A]" />

      <p
        className="
          mt-2
          text-center
          text-[12px]
          text-[#64748B]
        "
      >
        We buy all types of gold in any condition.
      </p>

      {/* CARDS */}

      <div className="mt-4 grid grid-cols-5 gap-2">
        <AcceptCard
          icon={<Circle size={28} />}
          label={
            <>
              Gold
              <br />
              Jewellery
            </>
          }
        />

        <AcceptCard
          icon={<Gem size={28} />}
          label={
            <>
              Gold
              <br />
              Chains
            </>
          }
        />

        <AcceptCard
          icon={<CircleDashed size={28} />}
          label={
            <>
              Gold
              <br />
              Bangles
            </>
          }
        />

        <AcceptCard
          icon={<Coins size={28} />}
          label={
            <>
              Gold
              <br />
              Coins
            </>
          }
        />

      <AcceptCard
  icon={<CircleDot size={28} />}
  label={
    <>
      Gold
      <br />
      Rings
    </>
  }
/>
      </div>
    </section>
  );
}

function AcceptCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-[#E5E7EB]
        bg-white
        px-2
        py-3
        shadow-sm
      "
    >
      <div className="mb-2 text-[#D8A11A]">
        {icon}
      </div>

      <div
        className="
          text-center
          text-[10px]
          font-semibold
          leading-4
          text-[#111827]
        "
      >
        {label}
      </div>
    </div>
  );
}