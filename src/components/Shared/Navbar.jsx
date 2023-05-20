import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/logo.jpeg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className=" text-white mr-6 lg:mr-72 space-y-0">
        <div className=" w-[56px] mx-auto">
          <img src={logo} alt="" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold text-black">
          ToyCarPlaza
        </h2>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <div
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
          >
            <FaBars></FaBars>
          </div>
          <div
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
          >
            <FaTimes></FaTimes>
          </div>
        </button>
      </div>
      <div
        className={`w-full block  lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-lg text-bold">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Home
          </Link>
          <Link
            to="/all-toys"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            All toys
          </Link>
          <Link
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Blog
          </Link>
        </div>
        <div className="md:flex items-center">
          {user && (
            <>
              <Link
                to="/my-toys"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                My toys
              </Link>
              <Link
                to="/add-toys"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Add A Toys
              </Link>
              <FaUserCircle
                style={{ fontSize: "2rem", marginRight: "10px" }}
              ></FaUserCircle>
            </>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              type="button"
              className="inline-flex items-center text-bold bg-amber-600 border-0 py-2 px-4 text-white"
            >
              Logout
            </button>
          ) : (
            <div>
              <Link to="/sing-in">
                <button className="inline-flex items-center text-bold bg-amber-600 border-0 py-2 px-4 text-white">
                  Sign In
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
