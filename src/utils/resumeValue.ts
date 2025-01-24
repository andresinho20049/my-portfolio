import { resumeProps } from "@/interface/IResume";

const summary: string = `Hello! As a seasoned developer with over 6 years of experience, I'm excited about the opportunity to collaborate with leading companies on innovative projects.

Graduated from FMU with a Bachelor's degree in Computer Science, I've developed expertise in Java, TypeScript, JavaScript, Python, SQL, Docker, as well as advanced project architectures like REST, SOAP, gRPC, GraphQL, and message queues with AMQP and MQTT. I'm eager to demonstrate my knowledge and skills in these areas, and contribute to the development of cutting-edge solutions.

If you're interested in discussing potential collaborations or projects, please don't hesitate to reach out.`;

export const myResume: resumeProps = {
  name: "André Carlos M. de Oliveira",
  objective: "Software Engineer",
  summary: summary,
  language: [
    {
      name: "Portuguese",
      proficiency: "Native",
    },
    {
      name: "English",
      proficiency: "Intermediary",
    },
  ],
  academic: [
    {
      degree: "High-school",
      organization: "E.E. Jacques klein",
      conclusion: "2015",
    },
    {
      degree: "Bachelor's degree",
      organization: "FMU",
      conclusion: "2022",
      link: "https://drive.google.com/file/d/1LD96Irt6iZDLb8bjYXC2cUopEZM3Teya/view?usp=sharing",
    },
  ],
  experience: [
    {
      company: "Make Technology",
      position: "Software Developer",
      period: "May 2024 – December 2024",
      keyResponsability: [
        "Maintain and develop new features in the SOC system (Monolith / Java 8 / Struts / SOAP)",
        "Develop cloud native solutions (AWS Lambda)",
        "Develop microservices with Java 17 + Quarkus",
        "Maintain and develop gateway solution with Java 17 + Camel",
        "I work in the Agile model with 15-day sprints, including code review and QA",
        "Build applications Cloud Native with Docker",
      ],
    },
    {
      company: "A5 Solutions",
      position: "Full-stack Developer",
      period: "October 2020 – December 2023",
      keyResponsability: [
        "Develop WebServices with Java Spring-boot",
        "Develop vanila projects - HTML / CSS / JS",
        "Develop front with NodeJs using Typescript",
        "Use Frameworks Web applications (Angular / React)",
        "Develop Middleware with NodeJs using Express",
        "Build applications Cloud Native with Docker",
        "Develop Procedure / Advanced Query's with Postgres",
      ],
    },
    {
      company: "Indra Company",
      position: "Junior Developer",
      period: "April 2018 – January 2020",
      keyResponsability: [
        "Develop API's for consume in the URA",
        "WebServices - REST / SOAP",
        "PL-SQL (OracleDB / SQL Server)",
        "Develop IVR with Genesys Compose",
        "Web Logic (EAR / WAR / JAR)",
        "Release on Linux environments",
      ],
    },
    {
      company: "Pinturas FLorença",
      position: "Office Assistant",
      period: "May 2014 – June 2017",
      keyResponsability: [
        "MsOffice",
        "GFIP / Payroll",
        "Manage Excel spreadsheets using VBA",
      ],
    },
  ],
  skills: [
    {
      category: "Programming language & Other",
      skills: [
        "Java",
        "Python",
        "VBA",
        "C / C++",
        "Javascript",
        "Typescript",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frameworks",
      skills: ["Spring Boot", "Quarkus", "Django", "React", "Angular", "NextJs"],
    },
    {
      category: "Package Manager",
      skills: ["Maven (mvn)", "Node Package Manager (npm)", "Python Package Index (pip)"],
    },
    {
      category: "Web-Container / Web-Servers",
      skills: ["Tomcat", "Glassfish", "Web Logic", "Nginx", "Apache", "IIS"],
    },
    {
      category: "Database",
      skills: ["Postgres", "MySQL", "SQL Server", "Oracle DB", "Firebase", "Redis", "MongoDB"],
    },
    {
      category: "Queue",
      skills: ["RabbitMQ"],
    },
    {
      category: "Code versioning",
      skills: ["GIT", "SVN"],
    },
    {
      category: "Test",
      skills: ["JUnit", "Mockito", "testcontainers", "Jest"],
    },
    {
      category: "DevOps Tools",
      skills: ["Docker", "Jenkins", "Terraform", "Ansible"],
    },
    {
      category: "Learning",
      skills: ["Kubernetes", "OpenShift", "LangChain", "Scikit Learn", "Tensorflow"],
    },
  ],
  badges: [
    {
      name: "AWS",
      link: "https://www.credly.com/users/andre-marques.abbbe29b/badges",
    },
    {
      name: "GCP",
      link: "https://www.cloudskillsboost.google/public_profiles/d24adbba-0315-45a7-bea1-9a72a94d8760",
    },
  ],
};
