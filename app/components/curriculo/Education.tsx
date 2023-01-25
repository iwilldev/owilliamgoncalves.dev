import type { EducationProps } from "~/utils/types";
import { Prose } from "../common/Prose";

export function Education({ data }: { data: EducationProps[] }) {
  return (
    <>
      {data.map((education, index) => (
        <div
          key={index}
          tabIndex={0}
          className="rounded-box collapse mb-8 w-full"
        >
          <Prose>
            <h3 className="m-0">{education.course}</h3>
            <p>
              {education.school}
              {" | "}
              <small>
                <i>
                  {education.startDate} - {education.endDate}
                </i>
              </small>
            </p>
          </Prose>
        </div>
      ))}
    </>
  );
}
