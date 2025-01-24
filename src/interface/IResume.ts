export type resumeProps = {
  name: string;
  objective: string;
  summary: string;
  language: languageProps[];
  academic: academicProps[];
  experience: experienceProps[];
  skills: skillsProps[];
  badges: badgesProps[];
};

type languageProps = {
  name: string;
  proficiency: "Native" | "Beginner" | "Intermediary" | "Advanced";
};

type academicProps = {
  degree: string;
  organization: string;
  conclusion: string;
  link?: string;
};

type experienceProps = {
  company: string;
  position: string;
  period: string;
  keyResponsability: string[];
};

type skillsProps = {
  category: string;
  skills: string[];
};

type badgesProps = {
    name: string;
    link?: string;
}
