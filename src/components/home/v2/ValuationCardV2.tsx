import {
  ArrowRight,
  Calculator,
  Lock,
} from "lucide-react";

export default function ValuationCardV2() {
  return (
    <section className="px-4 pt-3 pb-4">
      <div
        className="
          rounded-[24px]
          border
          border-[#E5E7EB]
          bg-white
          px-6
          py-6
        "
        style={{
          boxShadow:
            "0 4px 20px rgba(15,23,42,0.08)",
        }}
      >
        <h2
          className="
            text-center
            text-[19px]
            font-bold
            leading-4
            text-[#111827]
          "
          style={{
            fontFamily:
              'Georgia, "Times New Roman", serif',
          }}
        >
          Get Your Gold Valuation
        </h2>

        <p
          className="
            mx-auto
            mt-1
            max-w-[320px]
            text-center
            text-[12px]
            leading-4
            text-[#111827]
          "
        >
          Fill in your details and our expert
          will contact you for a confidential
          valuation.
        </p>

        <button
          className="
            mt-2
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            py-2
            text-[15px]
            font-semibold
            text-white
          "
          style={{
  background: "#021B35",
}}
        >
          <Calculator
            size={18}
            className="text-[#D8A11A]"
          />

          Request Valuation

          <ArrowRight
            size={18}
            className="text-[#D8A11A]"
          />
        </button>

        <div
          className="
            mt-2
            flex
            items-center
            justify-center
            gap-2
            text-[10px]
            text-[#687280]
          "
        >
          <Lock size={11} />

          Your information is 100% secure and
          confidential.
        </div>
      </div>
    </section>
  );
}