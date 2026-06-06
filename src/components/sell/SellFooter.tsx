import {
  MessageCircle,
} from "lucide-react";

export default function SellFooter() {
  return (
    <footer className="px-4 pt-2 pb-6">
      <div
        className="
          rounded-[20px]
          bg-[#021B35]
          px-5
          py-6
          text-white
          text-center
        "
      >
        {/* LOGO */}

        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="VAKA GOLD"
            className="h-[130px] w-auto"
          />
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-4
            max-w-[300px]
            text-[14px]
            leading-6
            text-white/90
          "
        >
          We offer the best value for your gold with
          transparency, honesty and immediate payments.
        </p>

        {/* FOLLOW */}

        <h3
          className="
            mt-5
            text-[18px]
            font-bold
            text-white
          "
          style={{
            fontFamily:
              'Georgia, "Times New Roman", serif',
          }}
        >
          Follow Us
        </h3>

        {/* SOCIALS */}

        <div className="mt-4 flex justify-center gap-6">
          <a
            href="#"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#021B35]
            "
          >
            <MessageCircle size={24} />
          </a>

          <a
            href="#"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#021B35]
            "
          >
            <MessageCircle size={24} />
          </a>

          <a
            href="https://wa.me/91857386962"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#021B35]
            "
          >
            <MessageCircle size={24} />
          </a>
        </div>

        {/* COPYRIGHT */}

        <p
          className="
            mt-5
            text-[13px]
            text-white/70
          "
        >
          © 2024 VAKA GOLD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}