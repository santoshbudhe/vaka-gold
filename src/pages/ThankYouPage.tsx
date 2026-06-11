import {
  CheckCircle2,
  FileSearch,
  Phone,
  MessageCircle,
  Home,
  ShieldCheck,
  Lock,
  IndianRupee,
  Users,
  UserCheck,
  CalendarDays,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getCompanySettings } from "../services/companyService";
import type { CompanySettings } from "../types/company";

export default function ThankYouPage() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const requestId =
    location.state?.leadId ||
    `VG-${new Date().getFullYear()}-${Math.floor(
      10000 + Math.random() * 90000
    )}`;


  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* HEADER */}

      <header className="bg-[#021B35]">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <img
            src="/logo.png"
            alt="VAKA GOLD"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-[26px] font-bold text-[#D8A11A]">
              VAKA GOLD
            </h1>

            <p className="text-[12px] text-[#D8A11A]">
              Trust. Value. Transparency.
            </p>
          </div>
        </div>
      </header>

      {/* CONTENT */}

      <main className="mx-auto max-w-md px-4 py-6">
        {/* SUCCESS */}

        <section className="text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-50 p-4">
              <CheckCircle2
                size={90}
                className="text-green-600"
              />
            </div>
          </div>

          <h2
            className="
              mt-5
              text-[54px]
              font-bold
              leading-none
              text-[#021B35]
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            Thank{" "}
            <span className="text-[#D8A11A]">
              You!
            </span>
          </h2>

          <p
            className="
              mt-4
              text-[20px]
              font-semibold
              leading-8
              text-[#021B35]
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            Your gold valuation request has
            been received{" "}
            <span className="text-green-700">
              successfully.
            </span>
          </p>

          <p className="mx-auto mt-4 max-w-sm text-[18px] leading-8 text-[#1F2937]">
            One of our valuation experts
            will contact you shortly.
          </p>
        </section>

        {/* REQUEST CARD */}

        <section
          className="
            mt-8
            rounded-3xl
            bg-white
            p-5
            shadow-md
          "
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#FAF6EF] p-3">
                <FileSearch
                  size={28}
                  className="text-[#D8A11A]"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Request ID
                </p>

                <p className="font-bold text-[#021B35]">
                  {requestId}
                </p>
              </div>
            </div>

            <div className="border-l border-[#E5E7EB] pl-4">
              <p className="text-sm text-gray-500">
                Expected Response Time
              </p>

             <p className="font-bold text-green-700">
  Within 30 minutes
</p>

<p className="text-sm text-[#374151]">
  {company
    ? `${company.openingTime} - ${company.closingTime}`
    : "During business hours"}
</p>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}

        <section
          className="
            mt-6
            rounded-3xl
            bg-white
            p-5
            shadow-md
          "
        >
          <h3
            className="
              text-center
              text-[34px]
              font-bold
              text-[#021B35]
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            What Happens Next?
          </h3>

          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#D8A11A]" />

          <div className="mt-6 space-y-6">
            <StepRow
              number="1"
              icon={
                <FileSearch size={24} />
              }
              title="Review Request"
              description="We review your submitted information."
            />

            <StepRow
              number="2"
              icon={
                <UserCheck size={24} />
              }
              title="Team Contact"
              description="Our expert will contact you via call or WhatsApp."
            />

            <StepRow
              number="3"
              icon={
                <CalendarDays size={24} />
              }
              title="Schedule Visit"
              description="We help you schedule a convenient store visit."
            />

            <StepRow
              number="4"
              icon={
                <IndianRupee size={24} />
              }
              title="Receive Valuation"
              description="Get the best market value for your gold."
            />
          </div>
        </section>

        {/* ASSISTANCE */}

        <section
          className="
            mt-6
            overflow-hidden
            rounded-3xl
            bg-[#021B35]
            p-5
            text-white
          "
        >
          <h3
            className="
              text-center
              text-[34px]
              font-bold
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
            }}
          >
            Need Immediate Assistance?
          </h3>

        <p className="mt-2 text-center text-lg text-gray-200">
  Our team is ready to help you
  right away.
</p>

<p className="mt-2 text-center text-sm text-gray-300">
  {company?.phone}
</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={`tel:${
  company?.phone || ""
}`}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#D8A11A]
                px-4
                py-4
                font-semibold
                text-[#021B35]
              "
            >
              <Phone size={20} />
              Call Us Now
            </a>

            <a
              href={`https://wa.me/${
  company?.whatsapp?.replace(
    /\D/g,
    ""
  ) || ""
}`}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-600
                px-4
                py-4
                font-semibold
                text-white
              "
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </section>

        {/* BACK HOME */}

        <button
          onClick={() => navigate("/")}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-[#D8A11A]
            bg-white
            py-4
            text-lg
            font-semibold
            text-[#D8A11A]
          "
        >
          <Home size={22} />
          Back To Homepage
        </button>

        {/* TRUST */}

        <section
          className="
            mt-5
            rounded-3xl
            bg-white
            p-5
            shadow-md
          "
        >
          <div className="grid grid-cols-2 gap-5">
            <TrustItem
              icon={
                <ShieldCheck size={28} />
              }
              title="100% Secure"
              description="Your information is safe with us."
            />

            <TrustItem
              icon={<Lock size={28} />}
              title="Confidential"
              description="We respect your privacy."
            />

            <TrustItem
              icon={
                <IndianRupee size={28} />
              }
              title="Best Value"
              description="Get the highest market value."
            />

            <TrustItem
              icon={<Users size={28} />}
              title="Trusted Experts"
              description="Experienced professionals."
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="bg-[#021B35] py-5 text-center text-white">
        <p>
          © 2026 VAKA GOLD. All rights
          reserved.
        </p>

        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#D8A11A]" />
      </footer>
    </div>
  );
}

function StepRow({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="relative">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#FAF6EF]
            text-[#D8A11A]
          "
        >
          {icon}
        </div>

        <div
          className="
            absolute
            -left-1
            -top-1
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-[#D8A11A]
            text-xs
            font-bold
            text-white
          "
        >
          {number}
        </div>
      </div>

      <div>
        <h4
          className="
            text-lg
            font-bold
            text-[#021B35]
          "
        >
          {title}
        </h4>

        <p className="text-[#4B5563]">
          {description}
        </p>
      </div>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-[#D8A11A]">
        {icon}
      </div>

      <h4 className="mt-2 font-semibold text-[#021B35]">
        {title}
      </h4>

      <p className="mt-1 text-sm text-[#4B5563]">
        {description}
      </p>
    </div>
  );
}