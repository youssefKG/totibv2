import { ArrowRightIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";
import Copy from "../Copy";
import AnimatedDiv from "../../lib/animateDiv";
type TecStackType = {
  name: string;
  logo: string;
};

type DemoType = {
  email: string;
  password: string;
};

interface ProjectCardPropsI {
  id: number;
  name: string;
  description: string;
  techStack: TecStackType[];
  imgURL: string;
  demo: DemoType;
}
const ProjectCard = ({
  imgURL,
  description,
  name,
  techStack,
  demo,
}: ProjectCardPropsI) => {
  return (
    <AnimatedDiv>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#606c38] font-bold text-xl">{name}</h1>
        <p className="text-gray-600 text-xm">Febury-2025</p>
        <p>{description}</p>
        <img
          className="lg:w-3/4 self-center lg:h-[50vh] rounded-xl"
          src={imgURL}
        />
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <p className="text-[#606c38] font-medium">Tech Stack: </p>
          {techStack.map((skill, i) => (
            <div
              key={i}
              className="flex gap-2 text-[#606c38] hover:rotate-6 duration-500 cursor-pointer
          transition-all px-3 border rounded-xl hover:bg-[#606c38]
          hover:text-white border-[#bb9457] items-center p-1"
            >
              <img src={skill.logo} className="rounded-xl size-7 shadow-2xs" />
              <p className="font-semibold text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="self-start font-semibold text-[#606c38]">Demo: </h1>
          <Copy title="Email: " text={demo.email} titleColor="#606c38" />
          <Copy titleColor="#606c38" title="password: " text={demo.password} />
        </div>
        <div className="flex justify-center flex-wrap gap-2">
          <a
            href="https://github.com/youssefKG/ecomerce"
            className="flex items-center cursor-pointer hover:opacity-80
        transition-colors bg-[#3B82F6] p-1 px-2 rounded-md  gap-2"
          >
            <p className="text-white  font-medium">Source Code</p>
            <FaGithub className="text-white size-6" />
            <ArrowRightIcon className="size-4 text-white" />
          </a>
          <button
            className="flex hover:opacity-80 transition-colors items-center bg-[#606c38] p-1 px-2 rounded-md
        cursor-pointer gap-2"
          >
            <p className="text-white  font-medium">View Project Live</p>
            <GlobeAltIcon className="text-white size-6" />
            <ArrowRightIcon className="size-4 text-white" />
          </button>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default ProjectCard;
