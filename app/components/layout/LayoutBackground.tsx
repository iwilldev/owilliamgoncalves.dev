import background from "~/assets/images/background.svg";

export function LayoutBackground() {
  return (
    <img
      src={background}
      alt=""
      className="fixed -z-10 mt-8 h-screen w-screen scale-90 transform object-contain opacity-30"
    />
  );
}
