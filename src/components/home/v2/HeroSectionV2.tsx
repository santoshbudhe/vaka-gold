import {
  Banknote,
  ShieldCheck,
  IndianRupee,
  Users,
} from "lucide-react";

export default function HeroSectionV2({
  banner,
}: {
  banner: any;
}) {
  return (
    <section className="bg-[#FAF7F2]">
      <div
  className="
    relative
    overflow-hidden
  "
>
        {/* HERO IMAGE */}

       <img
  src={banner.imageUrl}
  alt={banner.title}
  className="
    absolute
    left-[0px]
    top-[-50px]
    h-[360px]
    object-cover
  "
style={{
  objectPosition: "-120px center",
}}
/>

        {/* CONTENT */}

<div className="relative z-10 pl-5 pt-5">
            {/* HEADING */}

          <h1
            className="
              max-w-[260px]
              text-[28px]
              font-bold
              leading-[1.25]
              text-[#111827]
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            Sell Your Gold
            <br />
            With&nbsp;
            <span className="text-[#D8A11A]">
             Confidence.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-1
              max-w-[165px]
              text-[11px]
              leading-5
              text-[#111827]
            "
          >
            Get the best value for your gold
            with transparent evaluation and{" "}
            <span className="font-bold">
              immediate payments.
            </span>
          </p>

          {/* TRUST SECTION */}

          <div className="mt-2 max-w-[120px]">
            <div className="grid grid-cols-2">
              <TrustItem
                icon={<ShieldCheck size={21} />}
                title={
                  <>
                    100%
                    <br />
                    Transparent
                    <br />
                    Evaluation
                  </>
                }
              />

              <TrustItem
                icon={
  <div className="relative w-[20px] h-[20px]">
    <div className="absolute inset-0 rounded-full border-2 border-[#D8A11A]" />
    <IndianRupee
      size={11}
      className="absolute top-[5px] left-[5px] text-[#D8A11A]"
    />
  </div>
}
                title={
                  <>
                    Best Market
                    <br />
                    Rates
                  </>
                }
                borderLeft
              />
            </div>

            <div className="mt-4 grid grid-cols-2">
              <TrustItem
                icon={<Banknote size={21} />}
                title={
                  <>
                    Immediate
                    <br />
                    Payments
                  </>
                }
              />

              <TrustItem
                icon={<Users size={21} />}
                title={
                  <>
                    Experienced
                    <br />
                    & Trusted
                    <br />
                    Professionals
                  </>
                }
                borderLeft
              />
            </div>
          </div>
        </div>

        {/* HEIGHT SPACER */}

      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
  borderLeft = false,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  borderLeft?: boolean;
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        px-4
        text-center
        ${borderLeft ? "border-l border-[#E5E7EB]" : ""}
      `}
    >
      <div className="mb-1 text-[#D8A11A]">
        {icon}
      </div>

      <div
        className="
          text-[8px]
          font-bold
          leading-3
          text-[#111827]
        "
      >
        {title}
      </div>
    </div>
  );
}