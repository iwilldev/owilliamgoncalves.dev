import type { SkillProps } from "~/utils/types";

export function Skills({
  skills,
  className,
}: {
  skills: SkillProps[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-8 ${className}`}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="tooltip tooltip-primary"
          data-tip={skill.label}
        >
          <img
            src={skill.src}
            alt={skill.label}
            className="h-16 w-16 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
