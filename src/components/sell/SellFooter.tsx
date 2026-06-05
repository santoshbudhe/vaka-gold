import {
  MessageCircle,
  ShieldCheck,
  Lock,
  Users,
  Phone,
  Circle,
} from "lucide-react";

export default function SellFooter() {
  return (
    <footer className="px-4 pt-4 pb-8">
      <div
        className="
          overflow-hidden
          rounded-[20px]
          bg-[#021B35]
          px-5
          py-5
          text-white
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
            <h2
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
            </h2>

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

        {/* FOLLOW US */}

        <div className="mt-4 text-center">
          <p className="text-[13px] font-medium">
            Follow Us
          </p>

          <div className="mt-3 flex justify-center gap-3">
            <a
              href="#"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#021B35]
              "
            >
              <Circle size={16} />
            </a>

            <a
              href="#"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#021B35]
              "
            >
              <Circle size={16} />
            </a>

            <a
              href="#"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#021B35]
              "
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="my-4 h-px bg-white/20" />

        {/* TRUST */}

        <h3
          className="
            text-center
            text-[15px]
            font-semibold
          "
        >
          We Value Your Trust
        </h3>

        <div className="mt-3 grid grid-cols-3 gap-3">
          <TrustItem
            icon={<ShieldCheck size={20} />}
            title="Secure"
            subtitle="Process"
          />

          <TrustItem
            icon={<Lock size={20} />}
            title="Confidential"
            subtitle="Service"
          />

          <TrustItem
            icon={<Users size={20} />}
            title="Trusted"
            subtitle="Professionals"
          />
        </div>

        {/* BUTTONS */}

        <div className="mt-4 grid grid-cols-2 gap-3">
          <a
            href="tel:7207395447"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-[#D8A11A]
              py-3
              text-[14px]
              font-semibold
              text-white
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
              text-[14px]
              font-semibold
              text-white
            "
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>

        {/* COPYRIGHT */}

        <p
          className="
            mt-4
            text-center
            text-[11px]
            text-white/70
          "
        >
          © 2024 VAKA GOLD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-[#D8A11A]">
        {icon}
      </div>

      <div
        className="
          mt-2
          text-[10px]
          font-medium
          text-white
        "
      >
        {title}
      </div>

      <div
        className="
          text-[10px]
          text-white/80
        "
      >
        {subtitle}
      </div>
    </div>
  );
}