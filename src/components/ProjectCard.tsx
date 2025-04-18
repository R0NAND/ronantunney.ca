import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  display: React.ReactNode; // Changed from string to React.ReactNode
  github?: string;
  link?: string;
  children: React.ReactNode; // Added children prop
}

const ProjectCard = ({
  title,
  display,
  github = "",
  link = "",
  children,
}: Props) => {
  return (
    <div className="bg-gray-900 text-gray-200 p-4 mb-4 rounded-xl shadow-xl border-2 border-gray-400">
      <h3 className="text-2xl font-bold mb-2">
        {title}{" "}
        {link != "" && (
          <a href={link}>
            <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
          </a>
        )}{" "}
        {github !== "" && (
          <a href={github}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        )}
      </h3>
      {children}
      {display}
    </div>
  );
};

export default ProjectCard;
