import StepCard from "./StepCard";

export default function HowItWorksSection() {
  return (
    <section className="px-4 py-6">
      <h3 className="mb-8 text-center text-4xl font-bold text-[#031B4E]">
        How It Works
      </h3>

      <div className="grid grid-cols-2 gap-6">
        <StepCard
          number="1"
          title="Contact Us"
          description="Submit your details or call us."
        />

        <StepCard
          number="2"
          title="Gold Evaluation"
          description="Visit our store for transparent evaluation."
        />

        <StepCard
          number="3"
          title="Get Best Offer"
          description="We offer the best market value."
        />

        <StepCard
          number="4"
          title="Get Paid"
          description="Receive payment instantly."
        />
      </div>

      <button className="mt-8 w-full rounded-xl border border-[#D8A11A] py-4 text-xl font-semibold text-[#D8A11A]">
        View Full Selling Process →
      </button>
    </section>
  );
}