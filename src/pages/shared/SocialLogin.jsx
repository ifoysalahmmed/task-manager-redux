import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleSignIn().then(() => {
      //
    });
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
