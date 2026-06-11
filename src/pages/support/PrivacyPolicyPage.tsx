import {
Shield,
User,
Database,
Share2,
Lock,
CheckCircle,
Phone,
MessageCircle,
} from "lucide-react";

export default function PrivacyPolicyPage() {
return ( <div className="min-h-screen bg-[#F8F6F3]"> <main className="mx-auto max-w-md px-4 py-6">
{/* Hero */}

    <section className="text-center">
      <div className="flex justify-center">
        <div className="rounded-full bg-[#FAF6EF] p-4">
          <Lock
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
        Privacy Policy
      </h1>

      <p className="mt-3 text-sm text-[#4B5563]">
        Your privacy is important to us.
        This page explains how VAKA GOLD
        collects, uses and protects your
        information.
      </p>
    </section>

    {/* Sections */}

    <div className="mt-6 space-y-3">
      <PolicyCard
        icon={<User size={18} />}
        title="1. Introduction"
        text="We value your trust and are committed to protecting your personal information."
      />

      <PolicyCard
        icon={<Database size={18} />}
        title="2. Information We Collect"
        text="We may collect your name, mobile number, city and valuation request information."
      />

      <PolicyCard
        icon={<CheckCircle size={18} />}
        title="3. How We Use Information"
        text="Information is used only for valuation requests, customer support and service improvements."
      />

      <PolicyCard
        icon={<Share2 size={18} />}
        title="4. Information Sharing"
        text="We do not sell your personal information. Data may only be shared where required by law."
      />

      <PolicyCard
        icon={<Shield size={18} />}
        title="5. Data Security"
        text="Industry-standard measures are used to protect submitted information."
      />

      <PolicyCard
        icon={<Lock size={18} />}
        title="6. Your Rights"
        text="You may request correction or deletion of personal information by contacting us."
      />
    </div>

    {/* Help Section */}

    <section
      className="
        mt-6
        rounded-2xl
        bg-[#FAF6EF]
        p-4
        text-center
      "
    >
      <h3 className="font-bold text-[#021B35]">
        Need Help?
      </h3>

      <p className="mt-2 text-sm text-[#4B5563]">
        Have questions regarding your privacy?
        Contact us anytime.
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

    {/* Trust */}

    <section className="mt-6 rounded-2xl bg-[#021B35] p-4 text-white">
      <div className="grid grid-cols-3 gap-3 text-center">
        <TrustItem title="100% Secure" />
        <TrustItem title="Confidential" />
        <TrustItem title="Trusted" />
      </div>
    </section>

    <div className="py-5 text-center text-xs text-gray-500">
      © 2026 VAKA GOLD. All rights reserved.
    </div>
  </main>
</div>


);
}

function PolicyCard({
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

function TrustItem({
title,
}: {
title: string;
}) {
return ( <div> <div className="font-semibold">
{title} </div> </div>
);
}
