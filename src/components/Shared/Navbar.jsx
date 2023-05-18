import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
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
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        {/* <img src={locofy} className="w-100 h-10 mr-2" alt="Logo" /> */}
        <h2 className="text-3xl font-bold text-black">ToyCarPlaza</h2>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
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
            <Link
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <>
                <Link>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="inline-flex items-center text-bold bg-amber-600 border-0 py-2 px-4 text-white"
                  >
                    Logout
                  </button>
                </Link>
              </>
            </Link>
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
