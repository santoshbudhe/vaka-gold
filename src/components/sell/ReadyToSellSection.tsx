import {
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ReadyToSellSection() {
  return (
    <section className="px-4 py-4">
      <div
        className="
          rounded-[20px]
          bg-[#021B35]
          p-5
          text-center
        "
      >
        {/* TITLE */}

        <h2
          className="
            text-[22px]
            font-bold
            text-white
          "
          style={{
            fontFamily:
              'Georgia, "Times New Roman", serif',
          }}
        >
          Ready to Sell Your Gold?
        </h2>

        {/* UNDERLINE */}

        <div className="mx-auto mt-2 h-[2px] w-10 bg-[#D8A11A]" />

        {/* SUBTITLE */}

        <p
          className="
            mt-3
            text-[13px]
            text-white/85
          "
        >
          Get the best value for your gold today.
        </p>

        {/* PRIMARY CTA */}

        <button
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-lg
            bg-[#D8A11A]
            py-4
            text-[16px]
            font-semibold
            text-[#111827]
          "
          style={{
            fontFamily:
              'Georgia, "Times New Roman", serif',
          }}
        >
          Request Valuation

          <ArrowRight size={18} />
        </button>

        {/* SECONDARY ACTIONS */}

        <div className="mt-4 grid grid-cols-2 gap-3">
          <a
            href="tel:7207395447"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-white
              py-3
              text-[13px]
              font-semibold
              text-[#021B35]
            "
          >
            <Phone size={16} />
            Call Us Now
          </a>

          <a
            href="https://wa.me/91857386962"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[#16A34A]
              py-3
              text-[13px]
              font-semibold
              text-white
            "
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}