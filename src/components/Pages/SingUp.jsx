import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const SingUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    setError("");
    setSuccess("");

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please atleast one uppercase letter");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please give special symbole");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please atleast one number.");
      return;
    } else if (password.length < 6) {
      setError("Please atleast six character.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        setSuccess("User has been successfully created!!");
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User has been successfully created!!");
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };

  const pageTitle = "ToyCarPllaza | Sing Up";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <form
        onSubmit={handleSingUp}
        className=" my-container hero min-h-screen bg-base-200 mt-10"
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-8">
          <h1 className="text-xl font-bold text-center mt-4">Sing Up</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered"
                type="email"
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <hr />
            <div className="mt-4 ml-16">
              <button
                onClick={handleGoogle}
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign up with Google
              </button>
            </div>

            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{success}</p>
            <div className="form-control mt-6">
              <button className="btn text-white p-2 bg-amber-600 border-none">
                Sing Up
              </button>
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/sing-in">
                <span className="text-amber-600">Sing In</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default SingUp;
