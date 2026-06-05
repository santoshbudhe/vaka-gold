import {
  User,
  Phone,
  MapPin,
  Scale,
  Pencil,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function SellValuationForm() {
  return (
    <section className="px-4 py-4">
      <div
        className="
          overflow-hidden
          rounded-[20px]
          bg-[#021B35]
          p-4
        "
      >
        {/* TITLE */}

        <h2
          className="
            text-center
            text-[18px]
            font-bold
            text-white
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
            max-w-[250px]
            text-center
            text-[12px]
            leading-5
            text-white/90
          "
        >
          Fill in your details and our expert
          will contact you for a confidential
          valuation.
        </p>

        {/* FORM */}

        <div className="mt-3 space-y-2">
          {/* FULL NAME */}

          <div className="relative">
            <User
              size={16}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-[#6B7280]
              "
            />

            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                rounded-lg
                border
                border-[#E5E7EB]
                bg-white
                py-2.5
                pl-10
                pr-3
                text-[13px]
                outline-none
              "
            />
          </div>

          {/* MOBILE */}

          <div className="relative">
            <Phone
              size={16}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-[#6B7280]
              "
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="
                w-full
                rounded-lg
                border
                border-[#E5E7EB]
                bg-white
                py-2.5
                pl-10
                pr-3
                text-[13px]
                outline-none
              "
            />
          </div>

          {/* CITY */}

          <div className="relative">
            <MapPin
              size={16}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-[#6B7280]
              "
            />

            <input
              type="text"
              placeholder="City"
              className="
                w-full
                rounded-lg
                border
                border-[#E5E7EB]
                bg-white
                py-2.5
                pl-10
                pr-3
                text-[13px]
                outline-none
              "
            />
          </div>

          {/* WEIGHT */}

          <div className="relative">
            <Scale
              size={16}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-[#6B7280]
              "
            />

            <input
              type="text"
              placeholder="Approx. Weight of Gold"
              className="
                w-full
                rounded-lg
                border
                border-[#E5E7EB]
                bg-white
                py-2.5
                pl-10
                pr-3
                text-[13px]
                outline-none
              "
            />
          </div>

          {/* MESSAGE */}

          <div className="relative">
            <Pencil
              size={16}
              className="
                absolute
                left-3
                top-3
                text-[#6B7280]
              "
            />

            <textarea
              rows={3}
              maxLength={250}
              placeholder="Message (Optional)"
              className="
                w-full
                rounded-lg
                border
                border-[#E5E7EB]
                bg-white
                py-2.5
                pl-10
                pr-3
                text-[13px]
                outline-none
                resize-none
              "
            />
          </div>

          <div
            className="
              text-right
              text-[10px]
              text-white/70
            "
          >
            0 / 250
          </div>
        </div>

        {/* CTA */}

        <button
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-lg
            bg-[#D8A11A]
            py-3
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

        {/* ACTION BUTTONS */}

        <div className="mt-3 grid grid-cols-2 gap-3">
          <a
            href="tel:7207395447"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-white
              py-2.5
              text-[13px]
              font-semibold
              text-[#021B35]
            "
          >
            <Phone size={15} />
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
              py-2.5
              text-[13px]
              font-semibold
              text-white
            "
          >
            <MessageCircle size={15} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}