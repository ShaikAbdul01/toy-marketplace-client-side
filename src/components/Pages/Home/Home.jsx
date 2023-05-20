import Achievements from "../Achievements";
import Banner from "../Banner";
import CategoryTabs from "../CategoryTabs";
import Gallery from "../Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
            <Achievements></Achievements>
        </div>
    );
};

export default Home;