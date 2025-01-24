import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

interface IBreadcrumbs {
  text: string;
}

export const BreadcrumbComponent = ({ text }: IBreadcrumbs) => {
  return (
    <Breadcrumb
      aria-label="Breadcrumb projects"
      className="flex justify-center sticky top-0 py-4 drop-shadow-lg bg-blend-difference backdrop-blur-md "
    >
      <BreadcrumbItem href="/home" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/portfolio/projects">Projects</BreadcrumbItem>
      <BreadcrumbItem>{text}</BreadcrumbItem>
    </Breadcrumb>
  );
};
