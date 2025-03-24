import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  description: string;
  display: React.ReactNode; // Changed from string to React.ReactNode
  github?: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  display,
  github = "",
  link = "",
}: Props) => {
  return (
    <div className="bg-slate-900 p-4 mb-4 rounded-xl shadow-xl border-2 border-stone-200">
      <h3 className="text-2xl mb-2">
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
      <p className="text-left">{description}</p>
      {display}
    </div>
  );
};

export default ProjectCard;
