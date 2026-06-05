export default function Header() {
  return (
    <header className="bg-[#001B4D] text-white">
      <div className="mx-auto flex items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-xl font-bold text-[#D4A437]">
            VAKA GOLD
          </h1>

          <p className="text-xs text-gray-300">
            Trust. Value. Transparency.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-[#D4A437] p-3">
            📞
          </button>

          <button className="text-3xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}