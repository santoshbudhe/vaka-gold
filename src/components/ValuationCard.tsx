export default function ValuationCard() {
  return (
    <section className="px-4 pb-8">
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-center text-2xl font-bold text-[#0A1533]">
          Get Your Gold Valuation
        </h3>

        <p className="mt-2 text-center text-gray-600">
          Fill in your details and our expert will
          contact you for a confidential valuation.
        </p>

        <button
          className="
            mt-6
            w-full
            rounded-xl
            bg-[#001B4D]
            px-6
            py-4
            text-lg
            font-semibold
            text-white
          "
        >
          Request Valuation →
        </button>

        <p className="mt-3 text-center text-sm text-gray-500">
          Your information is secure and confidential.
        </p>
      </div>
    </section>
  );
}