import { Phone, MessageCircle } from "lucide-react";

export default function StickyFooterV2() {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-[100]
        border-t
        border-[#E5E7EB]
        bg-white
        px-4
        py-3
      "
    >
      <div className="flex gap-3">
        <a
          href="tel:7207395447"
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#031B4E]
            py-4
            text-base
            font-semibold
            text-white
            shadow-sm
          "
        >
          <Phone size={18} />
          Call Us
        </a>

        <a
          href="https://wa.me/91857386962"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#25D366]
            py-4
            text-base
            font-semibold
            text-white
            shadow-sm
          "
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}