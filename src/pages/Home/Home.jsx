import Faq from "./FAQ";
import AboutUs from "./AboutUs";
import Feature from "./featureArea";
import FeatureLatestProducts from "./featureLatestProducts";
import FeatureProduct from "./featureProducts";
import Hero from "./Hero";
import TitleBox from "./TitleBox";
import Services from "./Services";
import Testimonial from "./Testimonial";

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
