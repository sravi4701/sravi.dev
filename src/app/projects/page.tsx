import { projects } from "@/utils/constants";
import React from "react";

function Projects() {
  return (
    <main>
      <h1 className="text-3xl md:text-4xl font-medium px-2 md:px-0">
        Projects
      </h1>
      {projects.map((project) => {
        return (
          <div
            key={project.name}
            className="projects-container mt-4 px-2 md:px-0"
          >
            <div className="border border-violet-300 bg-violet-50 rounded md:w-3/4 flex flex-col">
              <div className="flex justify-between p-2">
                <div className="font-medium">{project.name}</div>
                <div className="italic">{project.year}</div>
              </div>
              <div className="p-2">{project.shortDescription}</div>
              <div className="px-2 text-gray-700">{project.techStack}</div>
              <div className="p-2 flex gap-2 flex-wrap">
                {project.demo_link && (
                  <a href={project.demo_link} target="_blank">
                    <span className="bg-violet-500 text-white p-2 py-1 rounded-md">
                      Demo
                    </span>
                  </a>
                )}
                {project.sourceLink && (
                  <a href={project.sourceLink} target="_blank">
                    <span className="bg-violet-500 text-white p-2 py-1 rounded-md">
                      Source
                    </span>
                  </a>
                )}
                {project.sourceBackendLink && (
                  <a href={project.sourceBackendLink} target="_blank">
                    <span className="bg-violet-500 text-white p-2 py-1 rounded-md">
                      Source<span className="text-sm">(backend)</span>
                    </span>
                  </a>
                )}
                {project.sourceFrontendLink && (
                  <a href={project.sourceFrontendLink} target="_blank">
                    <span className="bg-violet-500 text-white p-2 py-1 rounded-md">
                      Source<span className="text-sm">(frontend)</span>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default Projects;
