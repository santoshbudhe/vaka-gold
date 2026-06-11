import {
AlertCircle,
RefreshCw,
Search,
Phone,
MessageCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function SubmissionErrorPage() {
const navigate = useNavigate();

return ( <div className="min-h-screen bg-[#F8F6F3]"> <main className="mx-auto max-w-md px-4 py-8">
{/* Hero */}


    <section className="text-center">
      <div className="flex justify-center">
        <div className="rounded-full border-4 border-red-200 p-4">
          <AlertCircle
            size={64}
            className="text-red-500"
          />
        </div>
      </div>

      <h1
        className="
          mt-6
          text-4xl
          font-bold
          text-[#021B35]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", serif',
        }}
      >
        Submission Failed
      </h1>

      <p className="mt-4 text-[#4B5563]">
        We couldn't submit your request.
        Please check your information
        and try again.
      </p>
    </section>

    {/* Common Reasons */}

    <div className="mt-8 rounded-xl bg-white p-5 shadow-sm">
      <h3 className="text-center font-bold text-[#021B35]">
        Common Reasons
      </h3>

      <ul className="mt-4 space-y-3 text-sm text-[#374151]">
        <li>
          • Please fill all required
          fields.
        </li>

        <li>
          • Check your internet
          connection.
        </li>

        <li>
          • Try again after a few
          moments.
        </li>
      </ul>
    </div>

    {/* Actions */}

    <div className="mt-6 space-y-3">
      <button
        onClick={() =>
          navigate(-1)
        }
        className="
          flex
          w-full
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
        <RefreshCw size={18} />
        Try Again
      </button>

      <button
        onClick={() =>
          navigate("/")
        }
        className="
          flex
          w-full
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
        Go Back
      </button>
    </div>

    {/* Help */}

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
        Still Need Help?
      </h3>

      <p className="mt-2 text-gray-300">
        Our team is ready to assist you.
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

    <div className="mt-8 text-center text-xs text-gray-500">
      © 2026 VAKA GOLD. All rights reserved.
    </div>
  </main>
</div>

);
}
