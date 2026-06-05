import { Phone, Menu } from "lucide-react";

const COLORS = {
  navy: "#031B4E",
  gold: "#D8A11A",
};

export default function HomeHeader() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: COLORS.navy }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src="/logo-icon.png"
            alt="VAKA GOLD"
            className="h-12 w-12 object-contain"
          />

          <div>
            <h1
              className="text-lg font-bold leading-none"
              style={{ color: COLORS.gold }}
            >
              VAKA GOLD
            </h1>

            <p className="text-[11px] text-white/80">
              Trust. Value. Transparency.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="rounded-xl border p-3"
            style={{ borderColor: COLORS.gold }}
          >
            <Phone
              size={18}
              style={{ color: COLORS.gold }}
            />
          </button>

          <button>
            <Menu
              size={30}
              className="text-white"
            />
          </button>
        </div>
      </div>
    </header>
  );
}