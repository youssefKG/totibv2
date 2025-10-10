import AnimatedDiv from "../../lib/animateDiv";
import { databases, tools, languages, technologies } from "../../assets/skills";
import Title from "../Title";
import { useColorScheme } from "@/hooks/useContext";

const Skills = () => {
  const { colorScheme } = useColorScheme();
  return (
    <AnimatedDiv>
      <div id="SKILLS" className="flex gap-5 flex-col justify-center">
        <Title colorScheme={colorScheme} title="Technologies that I use" />
        <p className="text-[#283618] ">
          Here are the tools I use to bring ideas to life.
        </p>

        <div className="flex gap-1 flex-col">
          <h1 className="text text-[#780000] font-bold ">Languages: </h1>
          <div className="flex mt-2 gap-2 flex-wrap">
            {languages.map((skill) => (
              <div
                className={`flex gap-2 ${
                  colorScheme == "light" ? "text-[#606c38]" : "text-[#fff8e8]"
                } hover:rotate-6
                duration-500 cursor-pointer transition-all px-3 border
                rounded-xl hover:bg-[#606c38] hover:text-white border-[#bb9457]
                items-center p-1`}
              >
                <img src={skill.url} className="rounded-xl size-7 shadow-2xs" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text text-[#780000] font-bold ">Technologies</h1>
          <div className="flex mt-4 gap-2 flex-wrap">
            {technologies.map((skill) => (
              <div
                className={`flex gap-2 ${
                  colorScheme == "light" ? "text-[#606c38]" : "text-[#fff8e8]"
                } hover:rotate-6
                duration-500 cursor-pointer transition-all px-3 border
                rounded-xl hover:bg-[#606c38] hover:text-white border-[#bb9457]
                items-center p-1`}
              >
                <img src={skill.url} className="rounded-xl size-7 shadow-2xs" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text text-[#780000] font-bold ">Databases :</h1>
          <div className="flex mt-4 gap-2 flex-wrap">
            {databases.map((skill) => (
              <div
                className={`flex gap-2 ${
                  colorScheme == "light" ? "text-[#606c38]" : "text-[#fff8e8]"
                } hover:rotate-6
                duration-500 cursor-pointer transition-all px-3 border
                rounded-xl hover:bg-[#606c38] hover:text-white border-[#bb9457]
                items-center p-1`}
              >
                <img src={skill.url} className="rounded-xl size-7 shadow-2xs" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="text text-[#780000] font-bold ">
            Tools & Platforms :
          </h1>
          <div className="flex mt-2 gap-2 flex-wrap">
            {tools.map((skill) => (
              <div
                className={`flex gap-2 ${
                  colorScheme == "light" ? "text-[#606c38]" : "text-[#fff8e8]"
                } hover:rotate-6
                duration-500 cursor-pointer transition-all px-3 border
                rounded-xl hover:bg-[#606c38] hover:text-white border-[#bb9457]
                items-center p-1`}
              >
                <img src={skill.url} className="rounded-xl size-7 shadow-2xs" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[#606c38] font-normal text-center tracking-wider">
          ...and many more!
        </p>
      </div>
    </AnimatedDiv>
  );
};
export default Skills;
