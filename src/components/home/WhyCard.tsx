export default function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="px-2 text-center">
      <div className="mb-4 flex justify-center">
        {icon}
      </div>

      <h4 className="min-h-[72px] text-base font-semibold text-[#D8A11A]">
        {title}
      </h4>

      <p className="mt-2 text-[13px] leading-6 text-white/85">
        {description}
      </p>
    </div>
  );
}