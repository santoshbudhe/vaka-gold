export default function LeadStatusBadge({
status,
}: {
status: string;
}) {
const styles = {
new: "bg-blue-100 text-blue-700",
contacted:
"bg-yellow-100 text-yellow-700",
converted:
"bg-green-100 text-green-700",
};

return (
<span
className={`         px-2
        py-1
        rounded-full
        text-xs
        font-semibold
        ${
          styles[
            status as keyof typeof styles
          ] || ""
        }
      `}
>
{status} </span>
);
}
