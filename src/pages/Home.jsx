import Faq from "../components/FAQ/FAQ";
import AboutUs from "../components/aboutUs/AboutUs";
import Feature from "../components/feature/featureArea";
import FeatureLatestProducts from "../components/feature/featureLatestProducts";
import FeatureProduct from "../components/feature/featureProducts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import StickyHeader from "../components/header/StickyHeader";
import Hero from "../components/hero/Hero";
import TitleBox from "../components/middle/TitleBox";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";
import Preloader from "./Preloader";

export default function Home() {
  return (
    <>
      {/* <Preloader />; */}
      <StickyHeader />
      <Header />

      <Hero />
      <Feature />

      <AboutUs />
      <TitleBox />
      <Services />
      <FeatureLatestProducts />

      <Testimonial />
      <FeatureProduct />

      <Faq />

      <Footer />
    </>
  );
}
