import { Link } from "@remix-run/react";
import type { CourseProps } from "~/utils/types";
import { Prose } from "../common/Prose";

export function Courses({ data }: { data: CourseProps[] }) {
  return (
    <>
      {data.map((course, index) => (
        <div
          key={index}
          tabIndex={0}
          className="rounded-box collapse mb-8 w-full"
        >
          <Prose>
            <h3 className="m-0">{course.name}</h3>
            <p className="m-0">
              {course.school}
              {" | "}
              <small>
                <i>{course.endDate}</i>
              </small>
            </p>
            <Link
              to={course.certificate}
              className="gh-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificado
            </Link>
          </Prose>
        </div>
      ))}
    </>
  );
}
