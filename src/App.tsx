import About from "./components/About";
import Navbar from "./components/navabar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Services from "./components/services";
import Contact from "./components/contact";
import "./App.css";
import { useColorScheme } from "./hooks/useContext";

function App() {
  const { colorScheme } = useColorScheme();
  return (
    <div
      style={{
        backgroundColor: colorScheme == "light" ? "#edede9" : "#161617",
      }}
      className="overflow-x-hidden px-2"
    >
      <Navbar />
      <div className="flex xl:px-[400px] lg:px-[1O0px] p-2 flex-col gap-12 m-0 mt-28 ">
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
