import { useContext, useRef, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const SingIn = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>
  }
  const { signIn, signInWithGoogle, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSingin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Login Success");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
        setSuccess("Login Success");
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      alert("Please provide email address to reset password");
    }
    resetPassword(email)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Password Reset Success");
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        // setError(error.message);
        setSuccess("");
      });
  };

  const pageTitle = "ToyCarPllaza | Sing In";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <form
        onSubmit={handleSingin}
        className=" my-container hero min-h-screen bg-base-200 mt-10 mx-auto"
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  my-8 ">
          <h1 className="text-2xl font-bold text-center mt-4">Sing In</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                ref={emailRef}
                className="input input-bordered"
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
              />
              <label className="label mb-4">
                <a
                  onClick={handleReset}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <hr />
            <div className="mt-4 ml-16">
              <button
                onClick={handleGoogle}
                type="button"
                className="mx-auto text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
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
                Sign in with Google
              </button>
            </div>
            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{success}</p>
            <div className="form-control mt-6">
              <button className="btn text-white p-2 bg-amber-600 border-none">
                Sing In
              </button>
            </div>
            <p>
              Do not have an account?{" "}
              <Link to="/sing-up">
                <span className="text-amber-600">Create an account</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default SingIn;
