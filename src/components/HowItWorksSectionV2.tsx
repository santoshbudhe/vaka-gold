import {
  Phone,
  Search,
  FileText,
  Banknote,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksSectionV2() {
  return (
    <section className="px-4 py-8">
      <h2 className="text-center font-serif text-[34px] font-bold text-[#031B4E]">
        How It Works
      </h2>

      <div className="mx-auto mt-2 mb-8 h-[3px] w-12 rounded bg-[#D8A11A]" />

      <div className="grid grid-cols-4 gap-1">
        <Step
          number="1"
          icon={<Phone size={28} />}
          title="Contact Us"
          description="Submit your details."
        />

        <Step
          number="2"
          icon={<Search size={28} />}
          title="Gold Evaluation"
          description="Transparent testing."
        />

        <Step
          number="3"
          icon={<FileText size={28} />}
          title="Best Offer"
          description="Highest market value."
        />

        <Step
          number="4"
          icon={<Banknote size={28} />}
          title="Get Paid"
          description="Instant settlement."
        />
      </div>

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
        View Full Selling Process

        <ArrowRight size={18} />
      </button>
    </section>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F4EE] text-[#8C5A00]">
        {icon}
      </div>

      <div className="mb-1 text-xs font-bold text-[#031B4E]">
        {number}
      </div>

      <h4 className="text-sm font-semibold text-[#031B4E]">
        {title}
      </h4>

      <p className="mt-1 text-[11px] text-slate-600">
        {description}
      </p>
    </div>
  );
}