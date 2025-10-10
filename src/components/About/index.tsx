import { FaGithub } from "react-icons/fa";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/16/solid";
import AnimatedDiv from "../../lib/animateDiv";
import Title from "../Title";
import socialLinks from "../../assets/socialLinks";
import { useColorScheme } from "@/hooks/useContext";
import { handleTextColor } from "@/lib/handleColorSchemeStyle";

const About = () => {
  const { colorScheme } = useColorScheme();

  return (
    <div id="ABOUT" className="flex justify-center  gap-25 m-0 items-center">
      <AnimatedDiv>
        <div className="flex gap-6 max-w-3xl flex-col">
          <Title colorScheme={colorScheme} title="ABOUT" />
          <h2
            className="text-xl p-2  text-[#606c38] font-semibold
        w-fit  -[#606c38]"
          >
            Hi I'm Youssef Taoussi
          </h2>
          <p
            style={handleTextColor(colorScheme, "#403d39")}
            className="border-[#606c38] text-[#403d39] tracking-wide border-x-[6px] p-4"
          >
            I'm <strong>Youssef Taoussi</strong> , a software developer in
            training, focused on building efficient solutions and mastering
            modern technologies. Currently studying at 1337 School, I’m also
            developing a mobile application for habit tracking that will be
            launched soon. In parallel, I’m sharpening my problem-solving skills
            on LeetCode, constantly pushing myself to grow as a developer.{" "}
          </p>
          <div className="flex items-center gap-2">
            <a
              href="cv.pdf"
              target="_blank"
              className="flex justify-center gap-2 items-center 
          w-full bg-[#606c38] text-center hover:opacity-90
          cursor-pointer transition-all text-white font-semibold text-sm
          p-1 rounded-sm border-[2px] "
            >
              <p>Check My CV</p>
              <DocumentTextIcon className="size-5 text-white" />
              <ArrowRightIcon className="size-4 text-white" />
            </a>
            <a
              target="_blank"
              href={socialLinks.github}
              className="flex justify-center gap-2 items-center 
           w-full bg-[#3B82F6] text-center hover:opacity-90
          cursor-pointer transition-all text-white font-semibold text-sm
          p-1 rounded-sm border-[2px] "
            >
              <p>Visit my Github Account</p>
              <FaGithub className="size-5 text-white" />
              <ArrowRightIcon className="size-4 text-white" />
            </a>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default About;
