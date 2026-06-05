export default function TrustBox({
  icon,
  title,
  borderTop = false,
  borderLeft = false,
}: {
  icon: React.ReactNode;
  title: string;
  borderTop?: boolean;
  borderLeft?: boolean;
}) {
  return (
    <div
      className={`
        flex flex-col items-center
        justify-center
        p-5
        text-center
        ${borderTop ? "border-t border-[#E5E7EB]" : ""}
        ${borderLeft ? "border-l border-[#E5E7EB]" : ""}
      `}
    >
      <div className="mb-3">
        {icon}
      </div>

      <p className="text-sm font-semibold text-[#031B4E]">
        {title}
      </p>
    </div>
  );
}