export function BounceButton({
  className,
  href,
  placeLeft,
  toUp,
}: {
  className?: string;
  href: string;
  placeLeft?: boolean;
  toUp?: boolean;
}) {
  const scroll = () => {
    const element = document.querySelector(href);
    element!.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      className={`btn-primary-content btn-outline btn-circle btn mt-auto ${
        placeLeft ? "mr-auto" : "ml-auto"
      } animate-bounce ${className}`}
      onClick={scroll}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={`h-5 w-5 ${toUp ? "rotate-180" : ""}`}
        viewBox="0 0 16 16"
      >
        {" "}
        <path
          fillRule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />{" "}
      </svg>
    </button>
  );
}
