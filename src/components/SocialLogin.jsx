import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold 2xl:text-xl mb-3 2xl:mb-5">Login With</h2>

      <div className="*:w-full space-y-2">
        <button className="btn btn-outline">
          <FcGoogle /> Login with Google
        </button>
        <button className="btn btn-outline">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
