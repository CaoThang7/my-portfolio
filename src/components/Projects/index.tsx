import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { projectData } from "@/constants/ProjectCard";

const Projects = () => {
  const t = useTranslations("");

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto scroll-mt-22">
      <h1
        className="text-2xl font-bold text-[var(--text-primary)] font-sans mb-8"
        data-aos="fade-up"
      >
        {t("navigation.projects")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-[var(--bg-card)] ring-1 ring-[var(--border-card)] rounded-[2px] overflow-hidden shadow-md flex flex-col h-full"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="transition-transform duration-300 hover:scale-110"
                priority={project.id <= 3}
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2 line-clamp-2 font-sans">
                {project.title}
              </h3>
              <p className="text-base mb-4 font-sans">
                {t(`projects.descriptions.${project.description}`)}
              </p>

              <div className="space-y-2 mb-4">
                <div>
                  <span className="font-semibold font-sans">Frontend: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.frontend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm font-sans 
                        bg-[var(--bg-tech)] text-[var(--text-tech)]
                        rounded-[2px] shadow-sm font-semibold 
                        transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-semibold font-sans">Backend: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.backend.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm font-sans 
                        bg-[var(--bg-tech)] text-[var(--text-tech)]
                        rounded-[2px] shadow-sm font-semibold 
                        transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {(project.website || project.github) && (
                <div className="flex gap-2 justify-end mt-auto">
                  {project.website && (
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-30 bg-blue-500 text-white text-center py-1.5 rounded-[2px] text-sm hover:bg-blue-600 transition-colors font-sans font-semibold"
                    >
                      {t("projects.viewWebsite")}
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-30 bg-black text-white text-center py-1.5 rounded-[2px] text-sm hover:bg-gray-600 transition-colors font-sans font-semibold"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex justify-center items-center py-12"
        data-aos="zoom-in"
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/CaoThang7"
          className="uppercase font-medium font-sans tracking-[5px] text-sm text-[--whiteColor] border-b border-[#689af8] px-0 py-2 pr-2 transition-all duration-500 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:px-2 hover:bg-[#689af81a] cursor-pointer"
        >
          {t("projects.github")} <i className="fa-brands fa-github ml-1"></i>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
