import Achievements from "../Achievements";
import Banner from "../Banner";
import CategoryTabs from "../CategoryTabs";
import Gallery from "../Gallery";
import Reviews from "../Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
            <Achievements></Achievements>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;