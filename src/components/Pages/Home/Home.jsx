import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Achievements from "../Achievements";
import Banner from "../Banner";
import CategoryTabs from "../CategoryTabs";
import Gallery from "../Gallery";
import Reviews from "../Reviews";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  const pageTitle = "ToyCarPllaza | Home";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div data-aos="fade-up">
        <Banner></Banner>
        <Gallery></Gallery>
        <CategoryTabs></CategoryTabs>
        <Achievements></Achievements>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;
