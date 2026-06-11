import {
FileText,
CheckCircle,
Scale,
CreditCard,
AlertTriangle,
RefreshCw,
Gavel,
Phone,
MessageCircle,
} from "lucide-react";

export default function TermsPage() {
return ( <div className="min-h-screen bg-[#F8F6F3]"> <main className="mx-auto max-w-md px-4 py-6">
{/* Hero */}


    <section className="text-center">
      <div className="flex justify-center">
        <div className="rounded-full bg-[#FAF6EF] p-4">
          <FileText
            size={48}
            className="text-[#D8A11A]"
          />
        </div>
      </div>

      <h1
        className="mt-4 text-4xl font-bold text-[#021B35]"
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        Terms & Conditions
      </h1>

      <p className="mt-3 text-sm text-[#4B5563]">
        Please read these terms carefully
        before using our website and services.
      </p>
    </section>

    {/* Terms Cards */}

    <div className="mt-6 space-y-3">
      <TermCard
        icon={<CheckCircle size={18} />}
        title="1. Acceptance of Terms"
        text="By using this website, you agree to these Terms & Conditions."
      />

      <TermCard
        icon={<Scale size={18} />}
        title="2. Services"
        text="We provide gold valuation and related services with complete transparency."
      />

      <TermCard
        icon={<FileText size={18} />}
        title="3. User Responsibilities"
        text="You agree to provide accurate information when using our services."
      />

      <TermCard
        icon={<CreditCard size={18} />}
        title="4. Valuation & Payments"
        text="Valuations are based on market conditions and physical inspection. Prices may vary."
      />

      <TermCard
        icon={<AlertTriangle size={18} />}
        title="5. Limitations"
        text="We are not liable for indirect losses, delays or interruptions beyond our control."
      />

      <TermCard
        icon={<RefreshCw size={18} />}
        title="6. Changes to Terms"
        text="These terms may be updated periodically. Continued use indicates acceptance."
      />

      <TermCard
        icon={<Gavel size={18} />}
        title="7. Governing Law"
        text="These Terms & Conditions are governed by the laws of India."
      />
    </div>

    {/* Contact */}

    <section
      className="
        mt-6
        rounded-2xl
        bg-[#021B35]
        p-5
        text-center
        text-white
      "
    >
      <h3 className="text-xl font-bold">
        Questions?
      </h3>

      <p className="mt-2 text-sm text-gray-300">
        Contact us for any clarification.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <a
          href="tel:+919999999999"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#D8A11A]
            py-3
            font-semibold
            text-[#021B35]
          "
        >
          <Phone size={16} />
          Call Us
        </a>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-600
            py-3
            font-semibold
            text-white
          "
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </section>

    {/* Footer */}

    <div className="mt-6 text-center text-xs text-gray-500">
      © 2026 VAKA GOLD. All rights reserved.
    </div>
  </main>
</div>


);
}

function TermCard({
icon,
title,
text,
}: {
icon: React.ReactNode;
title: string;
text: string;
}) {
return ( <div className="rounded-xl bg-white p-4 shadow-sm"> <div className="flex gap-3"> <div className="mt-1 text-[#D8A11A]">
{icon} </div>


    <div>
      <h3 className="font-semibold text-[#021B35]">
        {title}
      </h3>

      <p className="mt-1 text-sm text-[#4B5563]">
        {text}
      </p>
    </div>
  </div>
</div>

);
}
