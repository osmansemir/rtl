import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero-section";
import PopularDestinations from "@/components/popular-destinations";
import StartPlanning from "@/components/start-planning";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div className="">
      <div className="travel min-h-screen bg-white">
        <Header />
        <Hero />
        <PopularDestinations />
        <WhyChooseUs />
        <Testimonials />
        <StartPlanning />
        <Footer />
      </div>
    </div>
  );
}
