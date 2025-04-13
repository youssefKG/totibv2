import skills from "../../assets/skills";
import AnimatedHeader from "../../lib/animatedHeader";
import AnimatedDiv from "../../lib/animateDiv";

const Skills = () => {
  return (
    <AnimatedDiv>
      <div className="flex gap-5 flex-col  bg-[#edede9] justify-center">
        <AnimatedHeader className="font-extrabold text-3xl border-x-[#606c38] w-fit px-4 border-x-[6px] text-[#780000] tracking-widest">
          Technologies that I use
        </AnimatedHeader>
        <p className="text-[#283618] ">
          Here are the tools I use to bring ideas to life.
        </p>

        <div className="flex gap-2 sm:mt-8  flex-wrap items-center">
          {skills.map((skill) => (
            <div
              className="flex gap-2 text-[#606c38] hover:rotate-6 duration-500 cursor-pointer
          transition-all px-3 border rounded-xl hover:bg-[#606c38]
          hover:text-white border-[#bb9457] items-center p-1"
            >
              <img src={skill.url} className="rounded-xl size-7 shadow-2xs" />
              <p className="font-semibold text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
        <p className="text-[#606c38] font-normal text-center tracking-wider">
          ...and many more!
        </p>
      </div>
    </AnimatedDiv>
  );
};
export default Skills;
