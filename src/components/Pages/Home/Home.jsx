import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Achievements from "../Achievements";
import Banner from "../Banner";
import CategoryTabs from "../CategoryTabs";
import Gallery from "../Gallery";
import Reviews from "../Reviews";


const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
        });
      }, []);
      
    return (
        <div data-aos="fade-up">
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
            <Achievements></Achievements>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;