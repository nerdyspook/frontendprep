import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authLoading, setAuthLoading, user, createUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location: any = useLocation();
  let from = location.state?.from?.pathname || "/";

  const signUpHandler = async (
    e: FormEvent,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
      navigate("/profile", { replace: true });
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (user) {
    setAuthLoading(true);
    setTimeout(() => {
      setAuthLoading(false);
      navigate("/");
    }, 1000);
  }

  return (
    <div className="max-w-[400px] mx-auto my-4 p-4">
      <h5 className="text-4xl mb-6 font-semibold text-gray-900 text-center dark:text-white">
        Sign Up
      </h5>
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          className="space-y-6"
          action="#"
          onSubmit={(e) =>
            signUpHandler(e, firstName, lastName, email, password)
          }
        >
          <div>
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type here..."
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type here..."
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type here..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type here..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
              >
                I accept all Terms &amp; Conditions
              </label>
            </div>
            <Link
              to="/signup"
              className="ml-auto text-xs text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </Link>
          </div>
          {error && <span className="text-red-600">{error}</span>}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign in
            </Link>
          </div>
        </form>
        <div className="flex items-center my-6 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-xs text-center text-gray-500 dark:text-gray-300 font-semibold mx-4 mb-0">
            Or continue with
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
