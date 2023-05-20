import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FaEnvelope, FaHome, FaMobileAlt, FaPrint } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-12">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            <SocialIcon
              className="mr-6 text-neutral-600 dark:text-neutral-200"
              url="https://linkedin.com/in/shaik"
            ></SocialIcon>
            <SocialIcon
              className="mr-6 text-neutral-600 dark:text-neutral-200"
              url="https://facebook.com/in/shaik"
            ></SocialIcon>
            <SocialIcon
              className="mr-6 text-neutral-600 dark:text-neutral-200"
              url="https://instagram.com/in/shaik"
            ></SocialIcon>
            <SocialIcon
              className="mr-6 text-neutral-600 dark:text-neutral-200"
              url="https://github.com/in/shaik"
            ></SocialIcon>
            <SocialIcon
              className="mr-6 text-neutral-600 dark:text-neutral-200"
              url="https://whatsup.com/in/shaik"
            ></SocialIcon>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-4 w-4"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
                ToyCarPlaza
              </h6>
              <p>
                Discover the finest toy cars for kids and collectors. Join our
                community, shop with confidence, and let your imagination race
                at ToyCarPlaza!
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Sports Car
                </Link>
              </p>
              <p className="mb-4">
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Regular Car
                </Link>
              </p>
              <p className="mb-4">
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Sports Car
                </Link>
              </p>
              <p>
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Mini Police Car
                </Link>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Pricing
                </Link>
              </p>
              <p className="mb-4">
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Settings
                </Link>
              </p>
              <p className="mb-4">
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="/" className="text-neutral-600 dark:text-neutral-200">
                  Help
                </Link>
              </p>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <div className="w-6">
                  <FaHome></FaHome>
                </div>
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <div className="w-6">
                  <FaEnvelope></FaEnvelope>
                </div>
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <div className="w-6">
                  <FaMobileAlt></FaMobileAlt>
                </div>
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <div className="w-6">
                  <FaPrint></FaPrint>
                </div>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright:</span>
          <Link
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            to="/"
          >
            ToyCarPlaza
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
