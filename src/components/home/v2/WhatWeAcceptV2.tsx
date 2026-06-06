export default function WhatWeAcceptV2() {
  const items = [
    {
      title: "Gold Jewellery",
      image: "/accept/gold-jewellery.jpg",
    },
    {
      title: "Diamond Jewellery",
      image: "/accept/diamond-jewellery.jpg",
    },
    {
      title: "Gold Coins",
      image: "/accept/gold-coins.jpg",
    },
  ];

  return (
    <section
  className="
    px-3
    pt-4
  "
>
      {/* WHITE PARENT CARD */}

      <div
        className="
          rounded-[15px]
          bg-white
          shadow-md
          px-3
          pt-2
          pb-2
        "
      >
        {/* HEADING */}

        <div className="text-center">
          <h2
            className="
              text-[16px]
              font-bold
              text-[#111827]
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            What We Accept
          </h2>

          <div
            className="
              mx-auto
              mt-2
              h-[3px]
              w-11
              rounded-full
              bg-[#D8A11A]
            "
          />
        </div>

        {/* CARDS */}

        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-[#E5E7EB]
                bg-white
                p-1
                text-center
                shadow-sm
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  mx-auto
                  h-[75px]
                  w-full
                  object-contain
                "
              />

              <h3
                className="
                  mt-0
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  text-[#111827]
                "
                style={{
                  fontFamily:
                    'Georgia, "Times New Roman", serif',
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}