import type { FamilyImageProps } from "~/utils/types";

export function FamilyImages({ images }: { images: FamilyImageProps[] }) {
  return (
    <>
      {images.map((image, index) => {
        const { alt, duration, mask, place, size, src, vars } = image;
        return (
          <div
            key={index}
            className="ml-auto h-24 w-full max-w-[24rem] lg:h-32 lg:max-w-[32rem]"
          >
            <img
              className={`${vars}
                  animate-family-photos
                  non-animate
                  animation-duration-${duration}
                  mask ${mask}
                  ${size}
                  object-cover
                  ${place}
                  `}
              src={src}
              alt={alt}
            />
          </div>
        );
      })}
    </>
  );
}
