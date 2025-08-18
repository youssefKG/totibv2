import App from "./App";
import ColorSchemeProvider from "./context/themeContext";

const Totib = () => {
  return (
    <ColorSchemeProvider>
      <App />
    </ColorSchemeProvider>
  );
};

export default Totib;
