import { createContext, PropsWithChildren, useState, FC } from "react";

type ColorScheme = "dark" | "light" | "system";

interface ColorSchemeContextI {
  colorScheme: ColorScheme;
  handleChangeColorScheme: (colorScheme: ColorScheme) => void;
}
const ColorSchemeContext = createContext<ColorSchemeContextI>(
  {} as ColorSchemeContextI,
);

const ColorSchemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const handleChangeColorScheme = (colorscheme: ColorScheme) => {
    setColorScheme(colorscheme);
  };
  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, handleChangeColorScheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
export { ColorSchemeContext };
export type { ColorScheme };
