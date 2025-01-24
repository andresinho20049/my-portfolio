import { FooterIcon } from "flowbite-react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export const SocialMediaComponent = () => {
  return (
    <div className="flex space-x-6 sm:mt-0 sm:justify-left">
      <FooterIcon
        href="https://www.instagram.com/andresinho20049/"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsInstagram}
        ariaLabel="Instagram"
      />
      <FooterIcon
        href="https://github.com/andresinho20049"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsGithub}
        ariaLabel="Github"
      />
      <FooterIcon
        href="https://www.linkedin.com/in/andresinho20049/"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsLinkedin}
        ariaLabel="Linkedin"
      />
    </div>
  );
};
