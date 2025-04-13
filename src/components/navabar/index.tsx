import { CiSettings } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav
      className="bg-[#bc6c25]/20 rounded-4xl sticky w-full  z-40 flex flex-wrap
    shadow-xl items-center justify-around gap-6 backdrop-blur-sm  top-0 p-1"
    >
      <div className="flex gap-4 items-center flex-wrap">
        <a href="#"></a>
        <h1 className="text-[#bb3e03] font-extrabold tracking-wide">TOTIB</h1>
      </div>
      <ul className="flex flex-wrap gap-6 font-semibold text-sm text-[#242423]">
        <li>
          <a>
            <span className="text-[#606c38]">{"{ "}</span>
            ABOUT
            <span className="text-[#606c38]">{" }"}</span>
          </a>
        </li>
        <li>
          <a>
            <span className="text-[#606c38]">{"{ "}</span>
            SKILLS
            <span className="text-[#606c38]">{" }"}</span>
          </a>
        </li>
        <li>
          <a>
            <span className="text-[#606c38]">{"{ "}</span>
            PROJECTS
            <span className="text-[#606c38]">{" }"}</span>
          </a>
        </li>
        <li>
          <a>
            <span className="text-[#606c38]">{"{ "}</span>
            SERVICES
            <span className="text-[#606c38]">{" }"}</span>
          </a>
        </li>
        <li>
          <a>
            <span className="text-[#606c38]">{"{ "}</span>
            CONTACT
            <span className="text-[#606c38]">{" }"}</span>
          </a>
        </li>
      </ul>
      <button className=" border border-black bg-gray-50/70 p-1 rounded-2xl">
        <CiSettings className="size-5 text-[#606c38]" />
      </button>
    </nav>
  );
};

export default Navbar;
