import { useDispatch } from "react-redux";
import { googleLogin } from "../../redux/features/user/userSlice";

const SocialLogin = () => {
  const dispatch = useDispatch();

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
