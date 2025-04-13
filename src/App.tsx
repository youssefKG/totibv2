import About from "./components/About";
import Navbar from "./components/navabar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Services from "./components/services";
import "./App.css";

function App() {
  return (
    <div className="bg-[#edede9] relative flex  xl:px-[400px] lg:px-[1O0px] p-7   flex-col gap-12 m-0 ">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
