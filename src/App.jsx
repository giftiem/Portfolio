
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Hackertons from "./components/Hackertons";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="Flixed top-0 -z-10 h-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Education/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Hackertons/>
        <Contacts/>
      </div>  
    </div>
  );
};

export default App;
