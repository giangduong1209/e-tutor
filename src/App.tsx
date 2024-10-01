import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NavBarBanner from "./components/NavBarBanner";
import NumberCount from "./components/NumberCount";
import SubjectCard from "./components/SubjectCard";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import { Banner1Data, Banner2Data } from "./mock/data";

function App() {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <NavBarBanner open={true} />
      <Hero />
      <NumberCount />
      <WhyChooseUs />
      <Banner {...Banner1Data[0]} />
      <Banner {...Banner2Data[0]} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default App;
