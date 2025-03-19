import React from "react";

interface Props {
  title: string;
  description: string;
  image: React.ReactNode; // Changed from string to React.ReactNode
}

const ProjectCard = ({ title, description, image }: Props) => {
  return (
    <div className="md:h-80 bg-slate-900 p-4 mb-4 rounded-xl shadow-xl border-2 border-stone-200">
      <h3 className="text-2xl mb-2">{title}</h3>
      <div style={{ float: "left" }} className="w-35">
        {image /* Render arbitrary HTML or React elements */}
      </div>
      <p className="text-left">{description}</p>
    </div>
  );
};

export default ProjectCard;
