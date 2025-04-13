import About from "./components/About";
import Navbar from "./components/navabar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Services from "./components/services";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div className="bg-[#edede9] overflow-x-hidden px-2 flex  ">
      <Navbar />
      <div
        className="bg-[#edede9] flex xl:px-[400px] lg:px-[1O0px] p-7
    flex-col gap-12 m-0 mt-28 "
      >
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
