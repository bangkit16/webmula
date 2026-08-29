import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import AudienceSection from "@/components/AudienceSection";
import ContactForm from "@/components/ContactForm";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <WhyUs />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <AudienceSection />
        <ContactForm />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
