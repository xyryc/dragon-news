import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success(`Logged in as ${result.user.email}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success(
          `Logged in as ${result.user.email || result.user.displayName}`
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div>
      <h2 className="font-semibold 2xl:text-xl mb-3 2xl:mb-5">Login With</h2>

      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleSignIn} className="btn btn-outline">
          <FcGoogle /> Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn btn-outline">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
