import {
  MapPin,
  Navigation,
} from "lucide-react";

export default function StoreLocationV2() {
  return (
    <section className="px-4 pt-2 pb-4">
      <div
        className="
          rounded-[20px]
          border
          border-[#E5E7EB]
          bg-white
          p-4
        "
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
          Our Store Location
        </h2>

        <div
          className="
            mx-auto
            mt-2
            mb-5
            h-[3px]
            w-10
            rounded-full
            bg-[#D8A11A]
          "
        />

        {/* Address */}

        <div className="flex gap-3">
          <MapPin
            size={24}
            className="
              mt-1
              shrink-0
              text-[#021B35]
            "
          />

          <div>
            <h3
              className="
                text-[15px]
                font-bold
                text-[#111827]
              "
            >
              VAKA GOLD
            </h3>

            <p
              className="
                mt-1
                text-[13px]
                leading-7
                text-[#374151]
              "
            >
              Shop No. 12, Gold Market,
              <br />
              MG Road, Vijayawada,
              <br />
              Andhra Pradesh - 520010
            </p>
          </div>
        </div>

        {/* Map */}

      <img
  src="/location/map-preview.jpg"
  alt="Store Location"
  className="
    mt-5
    h-[180px]
    w-full
    rounded-xl
    object-cover
  "
/>

        {/* Directions */}

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border-2
            border-[#D8A11A]
            py-3
            text-[16px]
            font-semibold
            text-[#111827]
          "
          style={{
            fontFamily:
              'Georgia, "Times New Roman", serif',
          }}
        >
          <Navigation
            size={20}
            className="text-[#D8A11A]"
          />

          Get Directions
        </a>
      </div>
    </section>
  );
}