import { Menu, Phone } from "lucide-react";

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
          px-1.5
          py-0.5
        "
      >
        {/* LOGO */}

        <div className="flex items-center gap-2">
          <img
            src="/logo-icon.png"
            alt="VAKA GOLD"
            className="
              h-[58px]
              w-auto
              shrink-0
              object-contain
            "
          />

          <div>
            <h1
              className="
                text-[18px]
                font-medium
                leading-none
                tracking-wide
                text-[#D8A11A]
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
              }}
            >
              VAKA GOLD
            </h1>

            <p
              className="
                mt-[4px]
                text-[9px]
                leading-none
                text-[#D8A11A]
              "
            >
              Trust. Value. Transparency.
            </p>
          </div>
        </div>

        {/* ACTIONS */}

        <div className="flex items-center gap-5">
          {/* PHONE */}

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-lg
              border
              border-[#D8A11A]
              bg-transparent
            "
          >
            <Phone
              size={17}
              className="text-[#D8A11A]"
            />
          </button>

          {/* MENU */}

          <button
            className="
              flex
              items-center
              justify-center
            "
          >
            <Menu
              size={28}
              className="text-white"
            />
          </button>
        </div>
      </div>
    </header>
  );
}