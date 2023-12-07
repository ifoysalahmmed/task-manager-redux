import { useContext } from "react";
import { useForm } from "react-hook-form";
import loginImg from "../assets/login.svg";
import { AuthContext } from "../context/AuthProvider";
import SocialLogin from "./shared/SocialLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const handleLogin = (data) => {
    const { email, password } = data || {};

    signIn(email, password).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div className="max-w-7xl mx-auto h-screen flex items-center">
      <div className="w-1/2">
        <img src={loginImg} alt="login image" className="h-full w-full" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm p-10 grid place-items-center rounded-lg">
          <h1 className="mb-10 text-2xl font-medium">Login</h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-5 w-full"
          >
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md"
                {...register("email")}
              />
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md"
                {...register("password")}
              />
            </div>

            <div className="!mt-8 ">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>

            <div>
              <p>
                Don&apos;t have an account?{" "}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate("/sign-up")}
                >
                  Create Account
                </span>
              </p>
            </div>

            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
