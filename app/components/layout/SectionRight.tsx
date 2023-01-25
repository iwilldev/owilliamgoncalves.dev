export function SectionRight({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex w-full flex-col lg:w-1/2">{children}</section>
  );
}
