import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { email } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      toast.success("Logged in successfully");
      navigate("/");
    }
  }, [email, navigate]);

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary w-full"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </button>
    </>
  );
};

export default SocialLogin;
