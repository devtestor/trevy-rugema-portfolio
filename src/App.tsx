import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhoIHelp from "./components/WhoIHelp";
import Problems from "./components/Problems";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import SectionSeparator from "./components/SectionSeparator";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <SectionSeparator />
      <Services />
      <SectionSeparator />
      <WhoIHelp />
      <SectionSeparator />
      <Problems />
      <SectionSeparator />
      <Packages />
      <SectionSeparator />
      <Portfolio />
      <SectionSeparator />
      <Process />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <TechStack />
      <SectionSeparator />
      <Testimonials />
      <SectionSeparator />
      <ContactForm />
      <SectionSeparator />
      <FinalCTA />
      <Footer />
    </div>
  );
}
