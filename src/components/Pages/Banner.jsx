import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import car from "../../assets/car-revolving-animation.json";
import { Link } from "react-router-dom";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-48 ">
        <div className=" flex flex-col items-center justify-between h-full  px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              The Best Place to Buy Toy Cars
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              ToyCarPlaza has a wide variety of toy cars to choose from,
              including classic cars, sports cars, and race cars. We also sell
              toy car accessories, such as batteries, tracks, and ramps.
              ToyCarPlaza is the best place to find the perfect toy car for your
              child.
            </p>
            <Link
              to="/sing-up"
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-amber-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            >
              Signup
            </Link>
            
          </div>
          <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
              <Lottie animationData={car} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
