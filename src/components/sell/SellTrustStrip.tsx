import {
  ShieldCheck,
  IndianRupee,
  Clock3,
  Users,
} from "lucide-react";

export default function SellTrustStrip() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-4">
        <TrustItem
          icon={<ShieldCheck size={24} />}
          title={
            <>
              100%
              <br />
              Transparent
              <br />
              Evaluation
            </>
          }
        />

        <TrustItem
          icon={<IndianRupee size={24} />}
          title={
            <>
              Best Market
              <br />
              Rates
            </>
          }
          divider
        />

        <TrustItem
          icon={<Clock3 size={24} />}
          title={
            <>
              Immediate
              <br />
              Payments
            </>
          }
          divider
        />

        <TrustItem
          icon={<Users size={24} />}
          title={
            <>
              Experienced &
              <br />
              Trusted
              <br />
              Professionals
            </>
          }
          divider
        />
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
  divider = false,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  divider?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center px-2 py-5 text-center">
      {divider && (
        <div
          className="
            absolute
            left-0
            top-1/2
            h-[90px]
            w-px
            -translate-y-1/2
            bg-[#E5E7EB]
          "
        />
      )}

      <div className="mb-3 text-[#D8A11A]">
        {icon}
      </div>

      <div
        className="
          text-[10px]
          font-bold
          leading-5
          text-[#111827]
        "
      >
        {title}
      </div>
    </div>
  );
}