import { useEffect } from "react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login.svg";
import SocialLogin from "./shared/SocialLogin";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/features/user/userSlice";

const SignUp = () => {
  const { register, handleSubmit, control } = useForm();

  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [confirmPassword, password]);

  const handleSignUp = ({ name, email, password }) => {
    dispatch(createUser({ name, email, password }));
  };

  return (
    <div className="max-w-7xl mx-auto h-screen flex items-center">
      <div className="w-1/2">
        <img src={loginImg} alt="login image" className="h-full w-full" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm p-10 grid place-items-center rounded-lg">
          <h1 className="mb-10 text-2xl font-medium">Create Account</h1>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="space-y-5 w-full"
          >
            <div className="flex flex-col items-start">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md"
                {...register("name")}
              />
            </div>

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

            <div className="flex flex-col items-start">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full rounded-md"
                {...register("confirmPassword")}
              />
            </div>

            <div className="!mt-8 ">
              <button
                type="submit"
                className="btn btn-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={disabled}
              >
                Register
              </button>
            </div>

            <div>
              <p>
                Already have an account?{" "}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
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

export default SignUp;
