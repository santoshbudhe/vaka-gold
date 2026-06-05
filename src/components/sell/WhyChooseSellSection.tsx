import {
  ShieldCheck,
  BadgeDollarSign,
  Clock3,
  Users,
} from "lucide-react";

export default function WhyChooseSellSection() {
  return (
    <section className="px-4 py-4">
      <div
        className="
          rounded-[20px]
          bg-[#021B35]
          p-5
          text-white
        "
      >
        <h2
          className="
            text-center
            text-[20px]
            font-bold
            text-white
          "
          style={{
            fontFamily:
              'Georgia, "Times New Roman", serif',
          }}
        >
          Why Choose VAKA GOLD?
        </h2>

        <div className="mt-5 space-y-4">
          <Benefit
            icon={<ShieldCheck size={22} />}
            title="Transparent Process"
            description="Complete clarity at every step."
          />

          <Benefit
            icon={<BadgeDollarSign size={22} />}
            title="Fair & Competitive Offers"
            description="Best market value for your gold."
          />

          <Benefit
            icon={<Clock3 size={22} />}
            title="Immediate Payments"
            description="Receive your payment without delay."
          />

          <Benefit
            icon={<Users size={22} />}
            title="Experienced Professionals"
            description="Trained experts ensure accuracy and a smooth experience."
          />
        </div>
      </div>
    </section>
  );
}

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-[#D8A11A]">
        {icon}
      </div>

      <div>
        <h3
          className="
            text-[14px]
            font-semibold
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-[11px]
            leading-4
            text-white/80
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}