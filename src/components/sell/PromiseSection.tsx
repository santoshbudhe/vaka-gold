import { CheckCircle2 } from "lucide-react";

const promises = [
  "100% transparency in evaluation",
  "No hidden charges or deductions",
  "Fair market value for your gold",
  "Quick and hassle-free process",
  "Safe, secure and confidential service",
];

export default function PromiseSection() {
  return (
    <section className="px-4 py-4">
      {/* TITLE */}

      <h2
        className="
          text-[22px]
          font-bold
          text-[#111827]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        Our Promise to You
      </h2>

      <div className="mt-2 ml-14 h-[2px] w-10 bg-[#D8A11A]" />

      {/* CARD */}

      <div
        className="
          mt-4
          overflow-hidden
          rounded-xl
          border
          border-[#E5E7EB]
          bg-white
        "
      >
        {promises.map((item, index) => (
          <div
            key={item}
            className={`
              flex
              items-center
              gap-3
              px-4
              py-4
              ${
                index !== promises.length - 1
                  ? "border-b border-[#E5E7EB]"
                  : ""
              }
            `}
          >
            <CheckCircle2
              size={18}
              className="text-[#D8A11A] shrink-0"
            />

            <span
              className="
                text-[13px]
                font-medium
                text-[#111827]
              "
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}