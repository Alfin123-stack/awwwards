import About from "../components/about/About";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Contact from "../components/footer/Contact";
import Story from "../components/story/Story";

export default function Landing() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </>
  );
}
