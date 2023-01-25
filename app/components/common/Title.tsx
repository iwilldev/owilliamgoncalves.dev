export function Title({
  variant,
  text,
  className,
}: {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  className?: string;
}) {
  const Component = variant;
  const splitWords = text.split(" ").map((word) =>
    word.split("").map((char, index) => (
      <span key={index} className="gh-char">
        {char}
      </span>
    ))
  );
  return (
    <Component className={className}>
      {splitWords.map((word, index) => (
        <span key={index}>
          {index > 0 && " "}
          <span className="inline-block">{word}</span>
        </span>
      ))}
    </Component>
  );
}
