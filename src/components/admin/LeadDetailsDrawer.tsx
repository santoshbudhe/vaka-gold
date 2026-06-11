import {
  Phone,
  MessageCircle,
  X,
} from "lucide-react";

export default function LeadDetailsDrawer({
  lead,
  onClose,
}: {
  lead: any;
  onClose: () => void;
}) {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-full
          max-w-md
          bg-white
          p-5
          shadow-xl
        "
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            Lead Details
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <Field
            label="Request ID"
            value={lead.leadId}
          />

          <Field
            label="Name"
            value={lead.name}
          />

          <Field
            label="Mobile"
            value={lead.mobileNumber}
          />

          <Field
            label="City"
            value={lead.city}
          />

          <Field
            label="Weight"
            value={
              lead.approxGoldWeight
            }
          />

          <Field
            label="Notes"
            value={
              lead.notes ||
              "No notes provided"
            }
          />

          <Field
            label="Source Page"
            value={
              lead.sourcePage
            }
          />

          <Field
            label="Source Component"
            value={
              lead.sourceComponent
            }
          />
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={`tel:${lead.mobileNumber}`}
            className="
              flex-1
              rounded-lg
              bg-[#021B35]
              py-3
              text-center
              text-white
            "
          >
            <Phone
              className="mx-auto"
              size={18}
            />
          </a>

          <a
            href={`https://wa.me/91${lead.mobileNumber}`}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              rounded-lg
              bg-green-600
              py-3
              text-center
              text-white
            "
          >
            <MessageCircle
              className="mx-auto"
              size={18}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-xs text-gray-500">
        {label}
      </div>

      <div className="font-medium">
        {value}
      </div>
    </div>
  );
}