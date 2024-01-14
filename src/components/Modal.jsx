// Modal.jsx

import React from "react";
import { projects } from "../data"; // Import the projects array
import closeIcon from "../assets/close.png";

const Modal = ({ project, onClose }) => {
  const selectedProject = projects.find((p) => p.name === project.name); // Find the selected project in the projects array

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-t from-[#85a3ae] via-[#3fbfdf] to-[#3a6dc4] bg-opacity-50 p-8 rounded-lg max-w-md">
        <div className="flex flex-row items-center mb-4">
          <h2 className=" text-black text-2xl font-semibold  items-center mr-3">
            {selectedProject.name}
          </h2>
          <img
            src={closeIcon}
            className="top-2 right-2 cursor-pointer h-6 items-center"
            onClick={onClose}
            alt="Close Button"
          />
        </div>
        <div className="mb-4">
          <a
            href={selectedProject.youtubeLink}
            className="text-black hover:underline cursor-pointer"
          >
            Video Explanation
          </a>
        </div>
        <div className="mb-4">
          <a
            href={selectedProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline cursor-pointer"
          >
            GitHub
          </a>
        </div>
        <div>
          <a
            href={selectedProject.sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline cursor-pointer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
