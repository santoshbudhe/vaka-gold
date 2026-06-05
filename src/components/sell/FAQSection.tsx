import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How is the purity of gold checked?",
    answer:
      "We use professional gold testing methods and equipment to determine purity accurately and transparently.",
  },
  {
    question: "What types of gold do you buy?",
    answer:
      "We buy jewellery, chains, bangles, coins, rings, broken gold items and other gold articles.",
  },
  {
    question: "How much time does the process take?",
    answer:
      "Most evaluations and settlements are completed within a short visit to our store.",
  },
  {
    question: "Do you buy broken or old gold?",
    answer:
      "Yes. We buy gold in all conditions including old, damaged and broken items.",
  },
  {
    question: "Is there any charge for evaluation?",
    answer:
      "No. Gold evaluation is completely free with no hidden charges.",
  },
  {
    question: "How is the final value calculated?",
    answer:
      "The final value is based on purity, weight and current market gold rates.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-4">
      <div
        className="
          rounded-[20px]
          bg-[#FCF8F2]
          p-4
        "
      >
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
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-2 h-[2px] w-10 bg-[#D8A11A]" />

        {/* FAQ ITEMS */}

        <div className="mt-5 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-sm
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      open ? null : index
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-4
                    py-4
                    text-left
                  "
                >
                  <span
                    className="
                      pr-4
                      text-[13px]
                      font-semibold
                      text-[#111827]
                    "
                  >
                    {faq.question}
                  </span>

                  {open ? (
                    <Minus
                      size={18}
                      className="text-[#D8A11A]"
                    />
                  ) : (
                    <Plus
                      size={18}
                      className="text-[#D8A11A]"
                    />
                  )}
                </button>

                {open && (
                  <div
                    className="
                      border-t
                      border-[#E5E7EB]
                      px-4
                      py-3
                      text-[12px]
                      leading-6
                      text-[#64748B]
                    "
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}