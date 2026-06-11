import {
useEffect,
useState,
} from "react";
import LeadDetailsDrawer
from "../../components/admin/LeadDetailsDrawer";
import {
Phone,
MessageCircle,
} from "lucide-react";

import LeadStatusBadge from "../../components/admin/LeadStatusBadge";

import {
getLeads,
updateLeadStatus,
} from "../../services/leadService";

export default function LeadsPage() {
const [leads, setLeads] =
useState<any[]>([]);

const [loading, setLoading] =
useState(true);
const [selectedLead, setSelectedLead] =
  useState<any>(null);
useEffect(() => {
loadLeads();
}, []);

async function loadLeads() {
try {
const data =
await getLeads();

  setLeads(data);
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}

}

async function changeStatus(
id: string,
status:
| "contacted"
| "converted"
) {
await updateLeadStatus(
id,
status
);

loadLeads();

}

const total =
leads.length;

const newLeads =
leads.filter(
(l) =>
l.status === "new"
).length;

const contacted =
leads.filter(
(l) =>
l.status === "contacted"
).length;

const converted =
leads.filter(
(l) =>
l.status === "converted"
).length;

return ( <div className="min-h-screen bg-[#F8F6F3] p-4"> <div className="mx-auto max-w-7xl">

    <h1 className="mb-6 text-3xl font-bold">
      Leads Dashboard
    </h1>

    {/* Stats */}

    <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      <StatCard
        label="Total"
        value={total}
      />

      <StatCard
        label="New"
        value={newLeads}
      />

      <StatCard
        label="Contacted"
        value={contacted}
      />

      <StatCard
        label="Converted"
        value={converted}
      />
    </div>

    {/* Table */}

    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">
              Request
            </th>

            <th className="p-3 text-left">
              Name
            </th>

            <th className="p-3 text-left">
              Mobile
            </th>

            <th className="p-3 text-left">
              City
            </th>

            <th className="p-3 text-left">
              Weight
            </th>

            <th className="p-3 text-left">
              Status
            </th>

            <th className="p-3 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={7}
                className="p-4"
              >
                Loading...
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
             <tr
  key={lead.id}
  onClick={() =>
    setSelectedLead(lead)
  }
  className="
    border-b
    cursor-pointer
    hover:bg-gray-50
  "
>
                <td className="p-3">
                  {lead.leadId}
                </td>

                <td className="p-3">
                  {lead.name}
                </td>

                <td className="p-3">
                  {
                    lead.mobileNumber
                  }
                </td>

                <td className="p-3">
                  {lead.city}
                </td>

                <td className="p-3">
                  {
                    lead.approxGoldWeight
                  }
                </td>

                <td className="p-3">
                  <LeadStatusBadge
                    status={
                      lead.status
                    }
                  />
                </td>

                <td className="p-3">
                  <div className="flex gap-2">

                   <a
  href={`tel:${lead.mobileNumber}`}
  onClick={(e) =>
    e.stopPropagation()
  }
>
                      <Phone
                        size={18}
                      />
                    </a>

                   <a
  href={`https://wa.me/91${lead.mobileNumber}`}
  target="_blank"
  rel="noreferrer"
  onClick={(e) =>
    e.stopPropagation()
  }
>
                      <MessageCircle
                        size={18}
                      />
                    </a>

                <button
  onClick={(e) => {
    e.stopPropagation();

    changeStatus(
      lead.id,
      "contacted"
    );
  }}
  className="rounded bg-yellow-100 px-2 py-1 text-xs"
>
                      Contacted
                    </button>

                  <button
  onClick={(e) => {
    e.stopPropagation();

    changeStatus(
      lead.id,
      "converted"
    );
  }}
  className="rounded bg-green-100 px-2 py-1 text-xs"
>
                      Converted
                    </button>

                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    <LeadDetailsDrawer
  lead={selectedLead}
  onClose={() =>
    setSelectedLead(null)
  }
/>

  </div>
</div>

);
}

function StatCard({
label,
value,
}: {
label: string;
value: number;
}) {
return ( <div className="rounded-xl bg-white p-4 shadow"> <div className="text-sm text-gray-500">
{label} </div>

  <div className="text-2xl font-bold">
    {value}
  </div>
</div>

);
}
