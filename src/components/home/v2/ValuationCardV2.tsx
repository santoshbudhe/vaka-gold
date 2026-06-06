import {
  ArrowRight,
  Lock,
  MapPin,
  Phone,
  Scale,
  User,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function ValuationCardV2() {
  const navigate = useNavigate();

  return (
    <section className="px-4 pt-2 pb-3">
      <div
        className="
          rounded-[20px]
          border
          border-[#D1D5DB]
          bg-white
          px-4
          py-4
        "
        style={{
          boxShadow:
            "0 4px 20px rgba(15,23,42,0.08)",
        }}
      >
        {/* Heading */}

        <h2
          className="
            text-center
            text-[18px]
            font-bold
            text-[#111827]
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
            max-w-[290px]
            text-center
            text-[12px]
            leading-4
            text-[#374151]
          "
        >
          Fill in your details and our expert
          will contact you for a confidential
          valuation.
        </p>

        {/* Row 1 */}

        <div className="mt-3 grid grid-cols-2 gap-2">
          <InputBox
            icon={<User size={15} />}
            placeholder="Full Name"
          />

          <InputBox
            icon={<Phone size={15} />}
            placeholder="Mobile Number"
          />
        </div>

        {/* City */}

        <div className="mt-2">
          <InputBox
            icon={<MapPin size={15} />}
            placeholder="City"
          />
        </div>

        {/* Weight */}

        <div className="mt-2">
          <InputBox
            icon={<Scale size={15} />}
            placeholder="Approx. Gold Weight"
          />
        </div>

        {/* Notes */}

        <textarea
          placeholder="Any additional information (optional)"
          className="
            mt-2
            w-full
            rounded-lg
            border
            border-[#E5E7EB]
            px-3
            py-2.5
            text-[12px]
            font-medium
            text-[#4B5563]
            outline-none
            resize-none
          "
          rows={1}
        />

        {/* CTA */}

        <button
          onClick={() => navigate("/sell")}
          className="
            mt-3
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            py-2.5
            text-[15px]
            font-semibold
            text-white
          "
          style={{
            background: "#021B35",
          }}
        >
          Request Valuation Now

          <ArrowRight
            size={18}
            className="text-[#D8A11A]"
          />
        </button>

        {/* Trust */}

        <div
          className="
            mt-2
            flex
            items-center
            justify-center
            gap-2
            text-center
            text-[10px]
            text-[#6B7280]
          "
        >
          <Lock size={11} />

          <span>
            Your information is 100% secure
            and confidential.
          </span>
        </div>
      </div>
    </section>
  );
}

function InputBox({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-lg
        border
        border-[#E5E7EB]
        px-3
        py-2.5
      "
    >
      <div className="text-[#4B5563]">
        {icon}
      </div>

      <span
        className="
          text-[12px]
          font-medium
          text-[#4B5563]
        "
      >
        {placeholder}
      </span>
    </div>
  );
}