export default function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div
        className="
          mx-auto
          mb-4
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#FAF7F2]
          text-lg
          font-bold
          text-[#031B4E]
        "
      >
        {number}
      </div>

      <h4 className="font-semibold text-[#031B4E]">
        {title}
      </h4>

      <p className="mt-2 text-sm text-slate-600">
        {description}
      </p>
    </div>
  );
}