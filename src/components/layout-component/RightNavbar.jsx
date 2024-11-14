import FindUs from "../FindUs";
import Qzone from "../Qzone";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUs/>
      <Qzone/>
    </div>
  );
};

export default RightNavbar;
