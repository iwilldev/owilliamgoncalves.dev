import type { ExperienceProps } from "~/utils/types";
import { Prose } from "../common/Prose";

export function Experience({ data }: { data: ExperienceProps[] }) {
  return (
    <>
      {data.map((experience, index) => (
        <div
          key={index}
          tabIndex={0}
          className="collapse-arrow rounded-box collapse mb-8 w-full bg-base-300"
        >
          <div className="collapse-title text-xl font-medium">
            <Prose>
              <h3 className="m-0">{experience.role}</h3>
              <p>
                {experience.company}
                {" | "}
                <small>
                  <i>
                    {experience.startDate} - {experience.endDate}
                  </i>
                </small>
              </p>
            </Prose>
          </div>
          <div className="collapse-content">
            <Prose>
              <p className="whitespace-pre-line p-4">
                {experience.description}
              </p>
            </Prose>
          </div>
        </div>
      ))}
    </>
  );
}
