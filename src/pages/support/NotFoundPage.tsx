import {
Home,
Search,
Phone,
MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function NotFoundPage() {
return ( <div className="min-h-screen bg-[#F8F6F3]"> <main className="mx-auto max-w-md px-4 py-8">
{/* Illustration */}

    <div className="text-center">
      <div className="mx-auto flex h-48 items-center justify-center">
        <div
          className="
            text-[120px]
            font-bold
            text-[#D8A11A]
          "
        >
          404
        </div>
      </div>

      <h1
        className="
          text-4xl
          font-bold
          text-[#021B35]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        Page Not Found
      </h1>

      <p className="mt-4 text-[#4B5563]">
        Oops! The page you are looking for
        doesn't exist or may have been moved.
      </p>
    </div>

    {/* Actions */}

    <div className="mt-8 space-y-3">
      <Link
        to="/"
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#D8A11A]
          py-4
          font-semibold
          text-[#021B35]
        "
      >
        <Home size={18} />
        Go Back Home
      </Link>

      <Link
        to="/about"
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border-2
          border-[#D8A11A]
          py-4
          font-semibold
          text-[#021B35]
        "
      >
        <Search size={18} />
        Contact Us
      </Link>
    </div>

    {/* Help Section */}

    <section
      className="
        mt-8
        rounded-2xl
        bg-[#021B35]
        p-5
        text-center
        text-white
      "
    >
      <h3 className="text-2xl font-bold">
        Need Help?
      </h3>

      <p className="mt-2 text-gray-300">
        We're here to assist you.
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

    <section className="mt-8">
      <div className="grid grid-cols-3 gap-3 text-center">
        <TrustItem title="100% Secure" />
        <TrustItem title="Confidential" />
        <TrustItem title="Trusted" />
      </div>
    </section>

    <div className="mt-8 text-center text-xs text-gray-500">
      © 2026 VAKA GOLD. All rights reserved.
    </div>
  </main>
</div>

);
}

function TrustItem({
title,
}: {
title: string;
}) {
return ( <div> <div className="font-semibold text-[#021B35]">
{title} </div> </div>
);
}
