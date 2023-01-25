export type PostResumedProps = {
  id: number;
  title: string;
  description: string;
  path: string;
  cover_image: string;
  social_image: string;
  user: {
    name: string;
    profile_image_90: string;
  };
  organization?: {
    name: string;
    profile_image_90: string;
  };
};

export type IndexPageProps = {
  indexText: string;
  indexImage: string;
};

export type PostProps = {
  title: string;
  url: string;
  cover_image: string;
  social_image: string;
  body_html: string;
}

export type BlogPageProps = {
  posts: PostResumedProps[];
};

export type SkillProps = {
  label: string;
  src: string;
};

export type SkillsPageProps = {
  proSkills: SkillProps[];
  beginnerSkills: SkillProps[];
  studySkills: SkillProps[];
};

export type FamilyImageProps = {
  alt: string;
  duration: string;
  mask: string;
  place: string;
  size: string;
  src: string;
  vars: string;
};

export type SobrePageProps = {
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  aboutDesign: string;
  aboutBanger: string;
  aboutFamilyImages: FamilyImageProps[];
};

export type BreadcrumbProps = {
  label: string;
  href: string;
};

export type ExperienceProps = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type EducationProps = {
  school: string;
  course: string;
  startDate: string;
  endDate: string;
};

export type CourseProps = {
  school: string;
  name: string;
  endDate: string;
  certificate: string;
};

export type CurriculoPageProps = {
  experiences: ExperienceProps[];
  educations: EducationProps[];
  courses: CourseProps[];
}