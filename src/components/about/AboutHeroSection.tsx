import { Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutHeroSection({
  banner,
}: {
  banner: any;
}) {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FEFAF8]">
      <div
        className="
          relative
          overflow-hidden
          min-h-[430px]
        "
      >
        {/* HERO IMAGE */}

        <img
          src={banner.imageUrl}
          alt={banner.title}
          className="
            absolute
            right-0
            top-[20px]
            h-[320px]
            object-cover
          "
        />

        {/* CONTENT */}

        <div className="relative z-10 px-5 pt-6">
          {/* LABEL */}

          <p
            className="
              text-[12px]
              font-bold
              uppercase
              tracking-[2px]
              text-[#D8A11A]
            "
          >
            ABOUT US
          </p>

          {/* TITLE */}

          <h1
            className="
              mt-2
              max-w-[220px]
              text-[32px]
              font-bold
              leading-[1.15]
              text-[#021B35]
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            About
            <br />
            <span className="text-[#D8A11A]">
              VAKA GOLD
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              max-w-[220px]
              text-[12px]
              leading-5
              text-slate-700
            "
          >
            A professional gold valuation and
            purchasing company built on the
            principles of Trust, Value and
            Transparency. We help customers
            understand the true value of their
            gold through fair pricing and a
            seamless selling experience.
          </p>

          {/* BUTTONS */}

          <div className="mt-5 flex flex-col gap-3 max-w-[220px]">
            <button
              onClick={() => navigate("/sell")}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#021B35]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
              "
            >
              Request Valuation

              <ArrowRight size={16} />
            </button>

            <button
              onClick={() =>
                (window.location.href =
                  "tel:+917842572444")
              }
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#D8A11A]
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-[#021B35]
              "
            >
              <Phone size={16} />

              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}