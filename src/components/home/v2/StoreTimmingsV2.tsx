import {
CalendarDays,
Phone,
} from "lucide-react";

import {
useEffect,
useState,
} from "react";

import { getCompanySettings } from "../../../services/companyService";
import type { CompanySettings } from "../../../types/company";

export default function StoreTimingsV2() {
const [company, setCompany] =
useState<CompanySettings | null>(
null
);

useEffect(() => {
loadCompany();
}, []);

async function loadCompany() {
try {
const data =
await getCompanySettings();


  setCompany(data);
} catch (error) {
  console.error(error);
}


}

return ( <section className="px-4 pt-2 pb-6"> <div
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
      Store Timings
    </h2>

    <div
      className="
        mx-auto
        mt-2
        mb-4
        h-[3px]
        w-10
        rounded-full
        bg-[#D8A11A]
      "
    />

    {/* Store Hours */}

    <div className="flex items-start gap-3">
      <CalendarDays
        size={20}
        className="mt-1 text-[#C96F1A]"
      />

      <div>
        <div className="text-[13px] font-semibold text-[#111827]">
          Business Hours
        </div>

        <div className="text-[13px] text-[#4B5563]">
          {company
            ? `${company.openingTime} - ${company.closingTime}`
            : "Loading..."}
        </div>
      </div>
    </div>

    <div className="my-3 border-t border-[#E5E7EB]" />

    {/* Phone */}

    <div className="flex items-center gap-3">
      <Phone
        size={20}
        className="text-[#C96F1A]"
      />

      <span className="font-semibold text-[#111827]">
        {company?.phone ||
          "Loading..."}
      </span>
    </div>

    {/* Call Button */}

    <a
      href={`tel:${
        company?.phone || ""
      }`}
      className="
        mt-4
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        py-3
        text-[16px]
        font-semibold
        text-[#111827]
      "
      style={{
        background: "#E2A317",
        fontFamily:
          'Georgia, "Times New Roman", serif',
      }}
    >
      <Phone size={18} />

      <div className="text-center">
        <div>Call Us Now</div>

        <div className="text-[12px]">
          {company?.phone ||
            "Loading..."}
        </div>
      </div>
    </a>

    {/* WhatsApp */}

    <a
      href={`https://wa.me/${
        company?.whatsapp?.replace(
          /\D/g,
          ""
        ) || ""
      }`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-3
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        py-3
        text-white
      "
      style={{
        background: "#128C4A",
      }}
    >
      <span className="text-[22px]">
        WhatsApp
      </span>

      <div>
        <div className="font-semibold">
          Chat on WhatsApp
        </div>

        <div className="text-[12px] opacity-90">
          Get instant response
        </div>
      </div>
    </a>
  </div>
</section>

);
}
