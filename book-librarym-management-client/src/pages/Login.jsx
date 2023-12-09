import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const { user, signInUser, googleLogin } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  const location = useLocation();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    // sinIn a user
    signInUser(email, password)
      .then((result) => {
        toast.success("user create successfully");
        e.target.reset();
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("please try again");
        console.log(error);
      });
  };

  //   google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("user create successfully");
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("please try again");
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-gray-200 text-black p-6 my-6">
        <div className="hero-content flex-col bg-white text-black">
          <div className="card flex-shrink-0 w-full max-w-sm  bg-white text-black border">
            <form onSubmit={handleSignInUser}>
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
                    className="input input-bordered bg-white text-black"
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
                    required
                    className="input input-bordered bg-white text-black"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 p-0">
                  <button className=" btn btn-outline">Login</button>
                </div>
                <label className="label">
                  New here?{" "}
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Create an account
                  </Link>
                </label>
              </div>
            </form>
            <div className="text-center space-y-2 py-2">
              <div className="flex justify-around items-center border">
                {" "}
                <FaGoogle />
                <button
                  onClick={handleGoogleLogin}
                  className=" btn btn-sm bg-white text-black"
                >
                  Google
                </button>
              </div>
              <div className="flex justify-around items-center border">
                <FaGithub />
                <button className=" btn btn-sm bg-white text-black">
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
