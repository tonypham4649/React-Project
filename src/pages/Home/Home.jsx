import Hero from "./components/Hero";
import Feature from "./components/featureArea";
import AboutUs from "./components/AboutUs";
import TitleBox from "./components/TitleBox";
import Services from "./components/Services";
import FeatureLatestProducts from "./components/featureLatestProducts";
import Testimonial from "./components/Testimonial";
import FeatureProduct from "./components/featureProducts";
import Faq from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />

      <AboutUs />
      <TitleBox />
      <Services />
      <FeatureLatestProducts />

      <Testimonial />
      <FeatureProduct />

      <Faq />
    </>
  );
}
