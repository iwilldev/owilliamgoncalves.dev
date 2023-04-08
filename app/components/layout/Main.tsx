export function Main({
  menuOpened,
  children,
}: {
  menuOpened: boolean;
  children: React.ReactNode;
}) {
  const openMenuClasses = menuOpened
    ? "fixed origin-center -translate-x-[50vw] lg:-translate-x-[20vw] scale-75 pointer-events-none saturate-0"
    : "";
  return (
    <main
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
