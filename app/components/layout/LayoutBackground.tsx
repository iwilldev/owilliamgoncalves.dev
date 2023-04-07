export function LayoutBackground() {
  return (
    <div className="animate-from-barely-visible fixed z-50 flex h-screen w-screen items-center justify-center bg-base-100">
      <img
        src="/assets/images/background.svg"
        alt=""
        className="fixed mt-8 h-60 w-60 scale-90 transform animate-pulse object-contain"
      />
    </div>
  );
}
