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
      className={`container flex h-full min-h-[100vh] w-[100vw] gap-20 py-32 px-16 first-of-type:pt-40 lg:flex-row ${
        colReverse ? "flex-col-reverse" : "flex-col"
      }`}
    >
      {children}
    </article>
  );
}
