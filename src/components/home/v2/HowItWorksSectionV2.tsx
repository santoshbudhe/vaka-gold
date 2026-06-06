import {
  Phone,
  Search,
  FileText,
  Banknote
} from "lucide-react";

export default function HowItWorksSectionV2() {
  return (
    <section className="px-4 py-2">
      {/* TITLE */}

      <h2
        className="
          text-center
          text-[20px]
          font-bold
          text-[#111827]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        How It Works
      </h2>

      <div className="mx-auto mt-1 mb-4 h-[2px] w-10 bg-[#D8A11A]" />

      {/* TIMELINE */}

      <div className="relative">
        <div
          className="
            absolute
            left-0
            right-0
            top-[34px]
            border-t-2
            border-dashed
            border-[#D8A11A]/80
          "
        />

        <div className="relative grid grid-cols-4 gap-1">
          <Step
            number="1"
            icon={<Phone size={24} />}
            title="Contact Us"
            description="Submit your details or call us."
          />

          <Step
            number="2"
            icon={<Search size={24} />}
            title="Gold Evaluation"
            description="Visit our store for a transparent evaluation."
          />

          <Step
            number="3"
            icon={<FileText size={24} />}
            title="Get The Best Offer"
            description="We offer you the best market value for your gold."
          />

          <Step
            number="4"
            icon={<Banknote size={24} />}
            title="Get Paid Instantly"
            description="Accept the offer and receive your payment instantly."
          />
        </div>
      </div>

      {/* CTA */}

      
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
      {/* ICON */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-1
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#FCF8F2]
          text-[#8B5A16]
          shadow-sm
        "
      >
        {icon}

        {/* NUMBER BADGE */}

        <div
          className="
            absolute
            -bottom-1
            -left-1
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-[#021B35]
            text-[10px]
            font-bold
            text-white
          "
        >
          {number}
        </div>
      </div>

      {/* TITLE */}

      <h3
        className="
          min-h-[32px]
          px-1
          text-[12px]
          font-bold
          leading-4
          text-[#111827]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          mt-1
          px-1
          text-[10px]
          leading-4
          text-[#111827]
        "
      >
        {description}
      </p>
    </div>
  );
}