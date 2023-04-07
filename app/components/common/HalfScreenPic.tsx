export function HalfScreenPic({
  src,
  alt,
  className,
  placeLeft,
}: {
  src: string;
  alt: string;
  className?: string;
  placeLeft?: boolean;
}) {
  return (
    <div
      className={`non-animate absolute right-0 top-0 z-0 mx-auto h-[100vh] w-[100vw] border-l-[1px] border-base-100 bg-base-300 opacity-10 animation-duration-1000 lg:bottom-0 lg:h-[100vh] lg:w-[50vw] lg:opacity-100 ${className}`}
    >
      <img
        className={`h-full w-full object-contain ${
          placeLeft ? "object-left-bottom" : "object-right-bottom"
        } ${placeLeft ? "pr-4" : "pl-4"} pt-20`}
        src={src}
        alt={alt}
      />
    </div>
  );
}
