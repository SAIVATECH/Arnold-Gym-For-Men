import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Transformation from "@/components/Transformation";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Timings from "@/components/Timings";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Transformation />
      <Reviews />
      <Gallery />
      <Timings />
      <CTASection />
      <Contact />
    </>
  );
}
