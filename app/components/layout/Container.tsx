import { useEffect } from "react";

export function Container({
  id,
  children,
  colReverse,
}: {
  id?: string;
  children: React.ReactNode;
  colReverse?: boolean;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("non-animate");
        }
      });
    });
    const animatedItems = document.querySelectorAll(".non-animate");
    animatedItems.forEach((item) => {
      observer.observe(item);
    });
  }, []);
  return (
    <article
      id={id}
      className={`container flex h-full min-h-[100vh] w-[100vw] gap-20 px-8 pb-40 pt-24 lg:flex-row lg:pb-24 lg:pt-40 ${
        colReverse ? "flex-col-reverse" : "flex-col"
      }`}
    >
      {children}
    </article>
  );
}
