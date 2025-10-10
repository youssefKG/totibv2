import PopupParams from "../popupParams";
import { useColorScheme } from "@/hooks/useContext";
import { handleTextColor } from "@/lib/handleColorSchemeStyle";

const navabarItems = ["ABOUT", "SKILLS", "PROJECTS", "SERVICES", "CONTACT"];

const Navbar = () => {
  const { colorScheme, handleChangeColorScheme } = useColorScheme();
  return (
    <nav
      className="bg-[#bc6c25]/20 rounded-md w-full left-1/2 max-w-[96%] lg:w-fit -translate-x-1/2 fixed z-40 flex
    flex-wrap shadow-xl items-center justify-around gap-6 backdrop-blur-sm
    top-2 p-2"
    >
      <div className="lg:flex gap-2 lg:gap-1 hidden items-center flex-wrap">
        <a href="#">
          <h1 className="text-[#bb3e03] font-extrabold tracking-wide">TOTIB</h1>
        </a>
      </div>
      <ul className="flex  flex-wrap gap-6 font-semibold text-sm text-[#242423]">
        {navabarItems.map((item: string) => (
          <li>
            <a
              className="text-[#bb3e03] transition  cursor-pointer"
              style={handleTextColor(colorScheme, "#606c38")}
              href={"#" + item}
            >
              <span className="text-[#bb3e03]">{"{   "}</span>
              <span className="text-[#606c38]">{item}</span>
              <span className="text-[#bb3e03]">{"   }"}</span>
            </a>
          </li>
        ))}
      </ul>
      <PopupParams
        colorScheme={colorScheme}
        handleChangeColorScheme={handleChangeColorScheme}
      />
    </nav>
  );
};

export default Navbar;
