import { useLocation } from "@remix-run/react";
import { useEffect, useRef } from "react";

export function Main({
  menuOpened,
  children,
}: {
  menuOpened: boolean;
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mainRef.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);
  const openMenuClasses = menuOpened
    ? "fixed origin-center -translate-x-[50vw] lg:-translate-x-[20vw] scale-75 pointer-events-none saturate-0"
    : "";
  return (
    <main
      ref={mainRef}
      className={`absolute h-screen w-screen overflow-x-hidden bg-base-100 transition-all duration-700 scrollbar-thin scrollbar-track-base-300 scrollbar-thumb-primary ${
        openMenuClasses
      }`}
    >
      <div className={`flex flex-col items-center overflow-x-hidden`}>
        {children}
      </div>
    </main>
  );
}
