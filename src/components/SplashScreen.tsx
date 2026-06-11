import { useEffect, useState } from "react";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({
  onFinish,
}: SplashScreenProps) {
  const [fadeOut, setFadeOut] =
    useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#021B35]
        transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="text-center">
        <img
          src="/logo-icon.png"
          alt="VAKA GOLD"
          className="
            mx-auto
            h-32
            w-auto
            animate-pulse
          "
        />

        <h1
          className="
            mt-4
            text-4xl
            font-bold
            text-[#D8A11A]
          "
          style={{
            fontFamily:
              '"Times New Roman", serif',
          }}
        >
          VAKA GOLD
        </h1>

       <p
  className="
    mt-2
    text-[#D8A11A]
    font-medium
    tracking-wide
  "
  style={{
    fontFamily:
      '"Times New Roman", serif',
  }}
>
  Trust. Value. Transparency.
</p>
      </div>
    </div>
  );
}