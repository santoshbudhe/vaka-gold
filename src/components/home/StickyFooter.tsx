import { Phone } from "lucide-react";

const COLORS = {
  navy: "#031B4E",
  whatsapp: "#25D366",
};

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t bg-white p-3">
      <a
        href="tel:7207395447"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl py-4 text-white"
        style={{
          backgroundColor: COLORS.navy,
        }}
      >
        <Phone size={18} />
        Call Us
      </a>

      <a
        href="https://wa.me/91857386962"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl py-4 text-white"
        style={{
          backgroundColor: COLORS.whatsapp,
        }}
      >
        WhatsApp
      </a>
    </div>
  );
}