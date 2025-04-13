import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/16/solid";
import AnimatedDiv from "../../lib/animateDiv";
import AnimatedHeader from "../../lib/animatedHeader";
import socialLinks from "../../assets/socialLinks";

const About = () => {
  return (
    <div
      className="flex gap-25 m-0 overflow-hidden flex-wrap
     w-screen bg-[#edede9] items-center"
    >
      <AnimatedDiv>
        <div className="flex gap-6 flex-col max-w-2xl">
          <AnimatedHeader
            className="font-extrabold text-3xl border-x-[#606c38]
          w-fit px-4 border-x-[6px] text-[#780000] tracking-widest"
          >
            ABOUT
          </AnimatedHeader>
          <h2
            className="text-xl p-2  text-[#606c38] font-semibold
        w-fit  -[#606c38]"
          >
            Hi I'm Youssef Taoussi
          </h2>
          <p className="border-[#606c38] text-[#403d39] tracking-wide border-x-[6px] p-4">
            Hi There, I'm <strong> Youssef Taoussi </strong>I'm a self-motivated
            and detail-oriented <strong>A full stack developer</strong> skilled
            in
            <strong> TypeScript, JavaScript and PHP,</strong> with experience in
            using frameworks and libraries like React for frontend development
            and Express for backend development, is well-versed in creating
            dynamic and responsive web applications. This developer can work
            with both SQL databases like MySQL and NoSQL databases like MongoDB,
            enabling them to build comprehensive and scalable solutions. Their
            expertise also extends to using tools and technologies such as Git
            for version control, Tailwind CSS for styling, and various other
            modern web development tools, allowing them to manage both
            client-side and server-side development efficiently.
          </p>
          <div className="flex  flex-wrap items-center gap-2">
            <a
              target="_blank"
              className="flex justify-center flex-1 gap-2 items-center 
          max-w-xl w-full bg-[#606c38] text-center hover:opacity-90
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
              className="flex justify-center flex-1 gap-2 items-center 
          max-w-xl w-full bg-[#3B82F6] text-center hover:opacity-90
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
