import {
  ShoppingBag,
  Search,
  FileText,
  HandCoins,
} from "lucide-react";

export default function ProcessWorksSection() {
  return (
    <section className="px-4 py-6">
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
        How Our Process Works
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
        Simple, transparent and hassle-free.
      </p>

      <div className="relative mt-6">
        {/* TIMELINE */}

        <div
          className="
            absolute
            left-[15px]
            top-[30px]
            bottom-[30px]
            w-px
            bg-[#D1D5DB]
          "
        />

        <div className="space-y-5">
          <Step
            number="1"
            icon={<ShoppingBag size={24} />}
            title="Bring Your Gold"
            description="Visit our store with your gold items."
          />

          <Step
            number="2"
            icon={<Search size={24} />}
            title="Evaluation & Verification"
            description="We test purity and weight using advanced equipment."
          />

          <Step
            number="3"
            icon={<FileText size={24} />}
            title="Receive Our Offer"
            description="Get the best market value based on purity and weight."
          />

          <Step
            number="4"
            icon={<HandCoins size={24} />}
            title="Immediate Settlement"
            description="Accept the offer and receive your payment instantly."
          />
        </div>
      </div>
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
    <div className="flex gap-4">
      {/* LEFT COLUMN */}

      <div className="relative flex flex-col items-center">
        <div
          className="
            z-10
            flex
            h-[30px]
            w-[30px]
            items-center
            justify-center
            rounded-full
            bg-[#021B35]
            text-[12px]
            font-bold
            text-white
          "
        >
          {number}
        </div>
      </div>

      {/* ICON */}

      <div
        className="
          flex
          h-[56px]
          w-[56px]
          items-center
          justify-center
          rounded-full
          bg-[#FCF8F2]
          text-[#B67A16]
        "
      >
        {icon}
      </div>

      {/* CONTENT */}

      <div className="flex-1 pt-1">
        <h3
          className="
            text-[15px]
            font-semibold
            text-[#111827]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-[12px]
            leading-5
            text-[#64748B]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}