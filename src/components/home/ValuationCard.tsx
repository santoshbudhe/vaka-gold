import { ArrowRight } from "lucide-react";

const COLORS = {
  navy: "#031B4E",
};

export default function ValuationCard() {
  return (
    <section className="px-2 py-4">
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-center text-3xl font-bold text-slate-900">
          Get Your Gold Valuation
        </h3>

        <p className="mt-3 text-center text-slate-600">
          Fill in your details and our expert
          will contact you for a confidential
          valuation.
        </p>

        <button
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg py-4 text-xl text-white"
          style={{
            backgroundColor: COLORS.navy,
          }}
        >
          Request Valuation

          <ArrowRight size={20} />
        </button>

        <p className="mt-3 text-center text-sm text-slate-500">
          Your information is secure and
          confidential.
        </p>
      </div>
    </section>
  );
}