import { CiSettings } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav
      className="bg-[#bc6c25]/20 rounded-md w-full left-1/2 max-w-[96%] lg:w-fit -translate-x-1/2 fixed z-40 flex
    flex-wrap shadow-xl items-center justify-around gap-6 backdrop-blur-sm
    top-2 p-2"
    >
      <div className="lg:flex gap-2 lg:gap-1 hidden items-center flex-wrap">
        <a href="#"></a>
        <h1 className="text-[#bb3e03] font-extrabold tracking-wide">TOTIB</h1>
      </div>
      <ul className="flex  flex-wrap gap-6 font-semibold text-sm text-[#242423]">
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
      <button className="hidden lg:flex border-black bg-gray-50/70 p-1 rounded-2xl">
        <CiSettings className="size-5 text-[#606c38]" />
      </button>
    </nav>
  );
};

export default Navbar;
