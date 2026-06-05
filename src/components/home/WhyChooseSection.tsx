import {
  ShieldCheck,
  IndianRupee,
  Wallet,
  Users,
} from "lucide-react";

import WhyCard from "./WhyCard";

export default function WhyChooseSection() {
  return (
    <section className="px-4 py-4">
      <div className="overflow-hidden rounded-[28px] bg-[#031B4E] px-6 py-8 text-white">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-[2px] flex-1 bg-[#D8A11A]" />

          <h3 className="text-center text-3xl font-bold">
            Why Choose VAKA GOLD?
          </h3>

          <div className="h-[2px] flex-1 bg-[#D8A11A]" />
        </div>

        <div className="grid grid-cols-2 gap-y-8">
          <WhyCard
            icon={<ShieldCheck size={40} color="#D8A11A" />}
            title="Transparent Evaluation"
            description="Advanced testing for accurate evaluation."
          />

          <WhyCard
            icon={<IndianRupee size={40} color="#D8A11A" />}
            title="Best Market Value"
            description="Highest rates based on market price."
          />

          <WhyCard
            icon={<Wallet size={40} color="#D8A11A" />}
            title="Immediate Payments"
            description="Get timely payments with smooth settlement."
          />

          <WhyCard
            icon={<Users size={40} color="#D8A11A" />}
            title="Experienced Professionals"
            description="Trained experts ensure a smooth experience."
          />
        </div>

        <button className="mt-8 w-full rounded-xl border border-[#D8A11A] py-4 text-xl font-semibold text-[#D8A11A]">
          About VAKA GOLD →
        </button>
      </div>
    </section>
  );
}