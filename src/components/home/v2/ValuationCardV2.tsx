import {
ArrowRight,
Lock,
MapPin,
Phone,
Scale,
User,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createLead } from "../../../services/leadService";

export default function ValuationCardV2() {
const navigate = useNavigate();

const [name, setName] = useState("");
const [mobileNumber, setMobileNumber] =
useState("");
const [city, setCity] = useState("");
const [
approxGoldWeight,
setApproxGoldWeight,
] = useState("");
const [notes, setNotes] = useState("");

const [loading, setLoading] =
useState(false);

const handleSubmit = async () => {
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
  alert("Please enter your city");
  return;
}

if (!approxGoldWeight.trim()) {
  alert(
    "Please enter approximate gold weight"
  );
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

    sourceComponent:
      "valuationCard",

    status: "new",
  });

  navigate("/thank-you", {
    state: {
      leadId,
    },
  });
} catch (error) {
  console.error(error);

  alert(
    "Failed to submit request. Please try again."
  );
} finally {
  setLoading(false);
}
};

return ( <section className="px-4 pt-2 pb-3">
<div
className="
rounded-[20px]
border
border-[#D1D5DB]
bg-white
px-4
py-4
"
style={{
boxShadow:
"0 4px 20px rgba(15,23,42,0.08)",
}}
>
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
Get Your Gold Valuation </h2>

```
    <p
      className="
        mx-auto
        mt-1
        max-w-[290px]
        text-center
        text-[12px]
        leading-4
        text-[#374151]
      "
    >
      Fill in your details and our
      expert will contact you for a
      confidential valuation.
    </p>

    <div className="mt-3 grid grid-cols-2 gap-2">
      <InputBox
        icon={<User size={15} />}
        placeholder="Full Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <InputBox
        icon={<Phone size={15} />}
        placeholder="Mobile Number"
        type="tel"
        value={mobileNumber}
        onChange={(e) =>
          setMobileNumber(
            e.target.value
          )
        }
      />
    </div>

    <div className="mt-2">
      <InputBox
        icon={<MapPin size={15} />}
        placeholder="City"
        value={city}
        onChange={(e) =>
          setCity(
            e.target.value
          )
        }
      />
    </div>

    <div className="mt-2">
      <InputBox
        icon={<Scale size={15} />}
        placeholder="Approx. Gold Weight"
        value={approxGoldWeight}
        onChange={(e) =>
          setApproxGoldWeight(
            e.target.value
          )
        }
      />
    </div>

    <textarea
      value={notes}
      onChange={(e) =>
        setNotes(
          e.target.value
        )
      }
      placeholder="Any additional information (optional)"
      className="
        mt-2
        w-full
        rounded-lg
        border
        border-[#E5E7EB]
        px-3
        py-2.5
        text-[12px]
        font-medium
        text-[#4B5563]
        outline-none
        resize-none
      "
      rows={2}
    />

    <button
      onClick={handleSubmit}
      disabled={loading}
      className="
        mt-3
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        py-2.5
        text-[15px]
        font-semibold
        text-white
      "
      style={{
        background: "#021B35",
      }}
    >
      {loading
        ? "Submitting..."
        : "Request Valuation Now"}

      {!loading && (
        <ArrowRight
          size={18}
          className="text-[#D8A11A]"
        />
      )}
    </button>

    <div
      className="
        mt-2
        flex
        items-center
        justify-center
        gap-2
        text-center
        text-[10px]
        text-[#6B7280]
      "
    >
      <Lock size={11} />

      <span>
        Your information is 100%
        secure and confidential.
      </span>
    </div>
  </div>
</section>

);
}

function InputBox({
icon,
placeholder,
value,
onChange,
type = "text",
}: {
icon: React.ReactNode;
placeholder: string;
value: string;
onChange: (
e: React.ChangeEvent<HTMLInputElement>
) => void;
type?: string;
}) {
return ( <div
   className="
     flex
     items-center
     gap-2
     rounded-lg
     border
     border-[#E5E7EB]
     px-3
     py-2.5
   "
 > <div className="text-[#4B5563]">
{icon} </div>

  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="
      w-full
      bg-transparent
      text-[12px]
      font-medium
      text-[#4B5563]
      outline-none
    "
  />
</div>
);
}
