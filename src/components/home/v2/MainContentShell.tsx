import React from "react";

export default function MainContentShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="
        relative
        z-10
        -mt-2
      "
    >
      <div
        className="
          rounded-t-[18px]
          bg-white
          shadow-md
          overflow-hidden
        "
      >
        {children}
      </div>
    </section>
  );
}