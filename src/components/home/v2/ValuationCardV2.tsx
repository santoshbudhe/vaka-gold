import {
  ArrowRight,
  Calculator,
  Lock,
} from "lucide-react";

export default function ValuationCardV2() {
  return (
    <section className="px-4 py-4">
      <div
        className="
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-white
          px-5
          py-6
          shadow-sm
        "
      >
        <h2
          className="
            text-center
            text-[30px]
            font-bold
            leading-tight
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
            mt-3
            max-w-[320px]
            text-center
            text-[16px]
            leading-7
            text-[#687280]
          "
        >
          Fill in your details and our expert
          will contact you for a confidential
          valuation.
        </p>

        <button
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-lg
            py-4
            text-lg
            font-semibold
            text-white
          "
          style={{
            background:
              "linear-gradient(90deg,#031B4E 0%,#052868 100%)",
          }}
        >
          <Calculator size={20} />

          Request Valuation

          <ArrowRight size={18} />
        </button>

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            text-sm
            text-[#687280]
          "
        >
          <Lock size={14} />

          Your information is 100% secure and
          confidential.
        </div>
      </div>
    </section>
  );
}