import { ColorScheme } from "@/context/themeContext";

const handleTextColor = (
  colorScheme: ColorScheme,
  lightColor?: string,
  darkColor?: string,
) => {
  const light = lightColor ?? "black";
  const dark = darkColor ?? "white";
  const color = colorScheme == "dark" ? dark : light;

  return {
    color,
  };
};

export { handleTextColor };
