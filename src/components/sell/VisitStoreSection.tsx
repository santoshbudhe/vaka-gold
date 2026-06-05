import {
  Store,
  MapPin,
} from "lucide-react";

export default function VisitStoreSection() {
  return (
    <section className="px-4 py-4">
      <div
        className="
          rounded-[20px]
          border
          border-[#E5E7EB]
          bg-white
          p-5
          shadow-sm
        "
      >
        <div className="flex items-center gap-4">
          {/* ICON */}

          <div
            className="
              flex
              h-[72px]
              w-[72px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#FCF8F2]
              text-[#D8A11A]
            "
          >
            <Store size={36} />
          </div>

          {/* CONTENT */}

          <div className="flex-1">
            <h2
              className="
                text-[24px]
                font-bold
                text-[#111827]
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
              }}
            >
              Visit Our Store
            </h2>

            <p
              className="
                mt-2
                text-[13px]
                leading-6
                text-[#374151]
              "
            >
              Walk in to our store for a professional
              evaluation and the best offers.
            </p>

            <button
              className="
                mt-4
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#D8A11A]
                px-5
                py-3
                text-[14px]
                font-semibold
                text-[#B67A16]
              "
            >
              <MapPin size={16} />

              Find Our Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}