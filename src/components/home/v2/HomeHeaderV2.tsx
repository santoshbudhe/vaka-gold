import { Phone } from "lucide-react";

export default function HomeHeaderV2() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "#021b35",
      }}
    >
      <div
        className="
          flex
          items-center
          justify-between
          px-3
          py-1
        "
      >
        {/* LOGO */}

        <div className="flex items-center gap-1">
        <img
  src="/logo-icon.png"
  alt="VAKA GOLD"
  className="
    logo-intro
    h-[70px]
    w-auto
    shrink-0
    object-contain
  "
/>

          <div className="-mt-1">
         <h1
  className="
    gold-logo-text
    text-[20px]
    font-bold
    leading-none
    tracking-wide
  "
  style={{
    fontFamily:
      '"Times New Roman", Times, serif',
  }}
>
  VAKA GOLD
</h1>

            <p
              className="
                mt-[3px]
                text-[11px]
                leading-none
                text-[#F4C04A]
              "
              style={{
  fontFamily:
    '"Times New Roman", Times, serif',
}}
            >
              Trust. Value. Transparency.
            </p>
          </div>
        </div>

        {/* CALL BUTTON */}

        <a
          href="tel:+91917842572444"
          className="
            flex
            items-center
            gap-2
            rounded-lg
            bg-[#D8A11A]
            px-3
            py-2
            shadow-md
            transition-all
            duration-200
            hover:opacity-90
          "
        >
          <Phone
            size={18}
            className="text-[#021b35]"
          />

          <span
            className="
              text-[15px]
              font-bold
              tracking-tight
              text-[#021b35]
              whitespace-nowrap
            "
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            Call Us
          </span>
        </a>
      </div>
    </header>
  );
}