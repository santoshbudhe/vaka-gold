export default function TrustBarV2() {
  return (
    <section
      className="
        bg-[#021b35]
        border-t
        border-[#0E2742]
      "
    >
      <div className="grid grid-cols-3">
        {/* Trusted */}

        <div
          className="
            relative
            flex
            items-center
            gap-1.5
            px-3
            py-2
          "
        >
          <img
            src="/icons/trusted.svg"
            alt="Trusted"
            className="h-8 w-8 shrink-0"
          />

          <div
            className="
              text-white
              text-[12px]
              leading-[1.2]
              tracking-[0.2px]
            "
            style={{
              fontFamily:
                '"Times New Roman", Times, serif',
            }}
          >
            Trusted by
            <br />
            Thousands
          </div>

          <div
            className="
              absolute
              right-0
              top-3
              bottom-3
              w-px
              bg-white/5
            "
          />
        </div>

        {/* Transparent */}

        <div
          className="
            relative
            flex
            items-center
            gap-1.5
            px-3
            py-2
          "
        >
          <img
            src="/icons/transparent.svg"
            alt="Transparent"
            className="h-8 w-8 shrink-0"
          />

          <div
            className="
              text-white
              text-[12px]
              leading-[1.2]
              tracking-[0.2px]
            "
            style={{
              fontFamily:
                '"Times New Roman", Times, serif',
            }}
          >
            100%
            <br />
            Transparent
          </div>

          <div
            className="
              absolute
              right-0
              top-3
              bottom-3
              w-px
              bg-white/5
            "
          />
        </div>

        {/* Payment */}

        <div
          className="
            flex
            items-center
            gap-1.5
            px-3
            py-2
          "
        >
          <img
            src="/icons/payment.svg"
            alt="Payment"
            className="h-7 w-7 shrink-0"
          />

         <div
            className="
              text-white
              text-[12px]
              leading-[1.2]
              tracking-[0.2px]
            "
            style={{
              fontFamily:
                '"Times New Roman", Times, serif',
            }}
          >
            Same-Day
            <br />
            Payment
          </div>
        </div>
      </div>
    </section>
  );
}