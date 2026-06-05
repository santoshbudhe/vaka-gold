import {
  ShieldCheck,
  IndianRupee,
  Wallet,
  Users,
} from "lucide-react";

export default function HeroSection({
  banner,
}: {
  banner: any;
}) {
  return (
    <section className="px-5 pt-6 pb-4 bg-[#FAF7F2]">
      {/* HERO */}

      <div className="grid grid-cols-[1fr_1.15fr] gap-2 items-start">
        {/* LEFT */}

        <div>
          <h2 className="font-serif text-[34px] leading-[0.95] font-bold text-[#031B4E]">
            Sell Your Gold
            <br />
            With{" "}
            <span className="text-[#D8A11A]">
              Confidence.
            </span>
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#23314F]">
            Get the best value for your gold
            with transparent evaluation and
            <span className="font-semibold">
              {" "}
              immediate payments.
            </span>
          </p>
        </div>

        {/* RIGHT */}

        <div className="pt-6">
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* TRUST ITEMS */}

      <div className="mt-6 grid grid-cols-2">
        <TrustItem
          icon={
            <ShieldCheck
              size={34}
              strokeWidth={1.5}
            />
          }
          title="100% Transparent Evaluation"
        />

        <TrustItem
          icon={
            <IndianRupee
              size={34}
              strokeWidth={1.5}
            />
          }
          title="Best Market Rates"
        />

        <TrustItem
          icon={
            <Wallet
              size={34}
              strokeWidth={1.5}
            />
          }
          title="Immediate Payments"
        />

        <TrustItem
          icon={
            <Users
              size={34}
              strokeWidth={1.5}
            />
          }
          title="Experienced Professionals"
        />
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="mb-3 text-[#D8A11A]">
        {icon}
      </div>

      <p className="max-w-[120px] text-[15px] font-semibold leading-6 text-[#031B4E]">
        {title}
      </p>
    </div>
  );
}