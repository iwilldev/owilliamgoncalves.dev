export function ProfilePic({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="animate-from-barely-visible non-animate relative mx-auto h-[50vw] w-[50vw] animation-duration-1000 lg:h-[40vw] lg:w-[40vw] xl:h-[30vw] xl:w-[30vw]">
      <div className="absolute h-full w-full animate-pulse rounded-full border-[1rem] border-primary-focus"></div>
      <img
        className="h-full w-full rounded-full border-[1rem] border-base-100 object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
}
