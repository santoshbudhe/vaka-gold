import { useState } from "react";
import {
  X,
  User,
  Phone,
  MapPin,
  Scale,
  FileText,
  CheckCircle,
} from "lucide-react";

import { createLead } from "../../services/leadService";

interface Props {
  open: boolean;
  onClose: () => void;
  sourceComponent: string;
}

export default function LeadCaptureModal({
  open,
  onClose,
  sourceComponent,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] =
    useState("");
  const [city, setCity] = useState("");
  const [
    approxGoldWeight,
    setApproxGoldWeight,
  ] = useState("");
  const [notes, setNotes] =
    useState("");

  if (!open) return null;

  async function handleSubmit() {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (
      !/^[6-9]\d{9}$/.test(
        mobileNumber
      )
    ) {
      alert(
        "Please enter a valid mobile number"
      );
      return;
    }

    if (!city.trim()) {
      alert("Please enter city");
      return;
    }

    try {
      setLoading(true);

      const leadId =
        "VG-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(
          10000 +
            Math.random() * 90000
        );

      await createLead({
        leadId,
        name,
        mobileNumber,
        city,
        approxGoldWeight,
        notes,

        sourcePage: "homepage",

        sourceComponent,

        status: "new",
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to submit request."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setSubmitted(false);

    setName("");
    setMobileNumber("");
    setCity("");
    setApproxGoldWeight("");
    setNotes("");

    onClose();
  }

  return (
    <>
      {/* Overlay */}

      <div
        onClick={handleClose}
        className="
          fixed
          inset-0
          z-[90]
          bg-black/60
          backdrop-blur-sm
        "
      />

      {/* Bottom Sheet */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[100]
          animate-[slideUp_.35s_ease-out]
          overflow-hidden
          rounded-t-[28px]
          bg-white
          shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
            relative
            bg-[#021B35]
            px-5
            pb-4
            pt-5
            text-center
          "
        >
          <div
            className="
              mx-auto
              mb-3
              h-1.5
              w-16
              rounded-full
              bg-white/40
            "
          />

          <button
            onClick={handleClose}
            className="
              absolute
              right-4
              top-4
              text-white
            "
          >
            <X size={26} />
          </button>

          <h2
            className="
              text-[36px]
              font-bold
              text-[#D8A11A]
            "
            style={{
              fontFamily:
                '"Times New Roman", serif',
            }}
          >
            VAKA GOLD
          </h2>

          <p
            className="
              text-[#D8A11A]
              text-sm
            "
          >
            Trust. Value. Transparency.
          </p>
        </div>

        {!submitted ? (
          <div
            className="
              max-h-[75vh]
              overflow-y-auto
              p-5
            "
          >
            <h3
              className="
                text-center
                text-[28px]
                font-bold
                text-[#021B35]
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              Get Free Gold Valuation
            </h3>

            <p
              className="
                mt-2
                text-center
                text-sm
                text-gray-600
              "
            >
              Fill in your details and our
              expert will contact you for a
              confidential valuation.
            </p>

            <InputField
              icon={<User size={18} />}
              placeholder="Full Name"
              value={name}
              onChange={setName}
            />

            <InputField
              icon={<Phone size={18} />}
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={setMobileNumber}
            />

            <InputField
              icon={<MapPin size={18} />}
              placeholder="City"
              value={city}
              onChange={setCity}
            />

            <InputField
              icon={<Scale size={18} />}
              placeholder="Approx. Gold Weight"
              value={approxGoldWeight}
              onChange={
                setApproxGoldWeight
              }
            />

            <div
              className="
                mt-3
                flex
                gap-3
                rounded-xl
                border
                border-[#E5E7EB]
                px-4
                py-3
              "
            >
              <FileText
                size={18}
                className="text-[#D8A11A]"
              />

              <textarea
                rows={3}
                value={notes}
                onChange={(e) =>
                  setNotes(
                    e.target.value
                  )
                }
                placeholder="Any additional information (optional)"
                className="
                  w-full
                  resize-none
                  outline-none
                "
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="
                mt-5
                w-full
                rounded-xl
                bg-[#D8A11A]
                py-4
                text-lg
                font-semibold
                text-[#021B35]
                shadow-lg
              "
            >
              {loading
                ? "Submitting..."
                : "Request Valuation Now"}
            </button>

            <p
              className="
                mt-3
                text-center
                text-xs
                text-gray-500
              "
            >
              🔒 100% Secure &
              Confidential
            </p>
          </div>
        ) : (
          <div className="p-6">
            <CheckCircle
              size={90}
              className="
                mx-auto
                text-green-500
              "
            />

            <h2
              className="
                mt-4
                text-center
                text-[40px]
                font-bold
                text-[#021B35]
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              Thank You!
            </h2>

            <p
              className="
                mt-2
                text-center
                text-lg
                text-green-700
                font-medium
              "
            >
              Your valuation request
              has been received
              successfully.
            </p>

            <p
              className="
                mt-4
                text-center
                text-gray-600
              "
            >
              Our expert will contact
              you within 30 minutes.
            </p>

            <a
              href="tel:+919178425724"
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#021B35]
                py-4
                text-lg
                font-semibold
                text-white
              "
            >
              Call Us Now
            </a>

            <a
              href="https://wa.me/919178425724"
              target="_blank"
              rel="noreferrer"
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#25D366]
                py-4
                text-lg
                font-semibold
                text-white
              "
            >
              Chat on WhatsApp
            </a>

            <button
              onClick={handleClose}
              className="
                mt-4
                w-full
                rounded-xl
                border
                py-4
                text-lg
              "
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function InputField({
  icon,
  placeholder,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (
    value: string
  ) => void;
}) {
  return (
    <div
      className="
        mt-3
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-[#E5E7EB]
        px-4
        py-3
      "
    >
      <div className="text-[#D8A11A]">
        {icon}
      </div>

      <input
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder={placeholder}
        className="
          w-full
          outline-none
        "
      />
    </div>
  );
}