import { useContext } from "react";
import { ColorSchemeContext } from "@/context/themeContext";

const useColorScheme = () => useContext(ColorSchemeContext);

export { useColorScheme };
