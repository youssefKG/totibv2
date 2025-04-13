import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "../projectCard";
import projectsData from "../../assets/projectsData.ts";
import AnimatedHeader from "../../lib/animatedHeader.tsx";

const Projects = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <AnimatedHeader className="font-extrabold text-3xl border-x-[#606c38] w-fit px-4 border-x-[6px] text-[#780000] tracking-widest">
        <span>Recent </span>
        Projects
      </AnimatedHeader>
      <p className="text-[#283618] ">
        Here are the tools I use to bring ideas to life.
      </p>

      <div className="flex flex-col gap-2">
        {projectsData.map((project) => (
          <ProjectCard
            demo={project.demo}
            key={project.id}
            name={project.title}
            id={project.id}
            imgURL={project.image}
            description={project.description}
            techStack={project.tec}
          />
        ))}
      </div>
      <a
        href="https://github.com/youssefKG?tab=repositories"
        className="flex justify-center justify-self-center  self-center flex-1 gap-2 items-center max-w-xl w-full bg-[#283618] text-center hover:opacity-90
          cursor-pointer transition-all text-white font-semibold text-sm
          p-1 rounded-sm border-[2px] "
      >
        <p>For more projects visit my Github Account</p>
        <FaGithub className="size-5 text-white" />
        <ArrowRightIcon className="size-4 text-white" />
      </a>
    </div>
  );
};

export default Projects;
