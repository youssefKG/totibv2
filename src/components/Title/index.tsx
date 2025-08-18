import { ColorScheme } from "@/context/themeContext";
import AnimatedHeader from "@/lib/animatedHeader";
import { handleTextColor } from "@/lib/handleColorSchemeStyle";
import { FC } from "react";

interface TitleProps {
  title: string;
  colorScheme: ColorScheme;
}
const Title: FC<TitleProps> = ({ title, colorScheme }) => {
  return (
    <AnimatedHeader
      style={handleTextColor(colorScheme, "#780000", "white")}
      className="font-extrabold text-3xl border-x-[#606c38]
          w-fit px-4 border-x-[6px] tracking-widest"
    >
      {title}
    </AnimatedHeader>
  );
};

export default Title;
