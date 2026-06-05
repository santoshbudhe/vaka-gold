export default function SellHeroSection({
  banner,
}: {
  banner: any;
}) {
  return (
    <section className="bg-[#FEFAF8]">
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
            right-0
            top-[65px]
            h-[260px]
            object-cover
          "
          style={{
            objectPosition: "center",
          }}
        />

        {/* CONTENT */}

        <div className="relative z-10 pl-5 pt-5">
          {/* LABEL */}

          <p
            className="
              text-[12px]
              font-bold
              uppercase
              tracking-wide
              text-[#D8A11A]
            "
          >
            SELL GOLD
          </p>

          {/* HEADING */}

          <h1
            className="
              mt-2
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
            Know What Your
            <br />
            <span className="text-[#D8A11A]">
              Gold Is Worth.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-2
              max-w-[200px]
              text-[11px]
              leading-5
              text-[#111827]
            "
          >
            Get a transparent evaluation
            and the best market value
            for your gold.
          </p>
        </div>

        {/* HEIGHT SPACER */}

        <div className="h-[135px]" />
      </div>
    </section>
  );
}