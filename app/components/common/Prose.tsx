export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`animate-from-barely-visible non-animate prose-lg prose mt-auto max-w-full lg:mt-0 ${className} text-stone-300`}
    >
      {children}
    </div>
  );
}
