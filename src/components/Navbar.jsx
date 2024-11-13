import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>

      <div className="nav space-x-5 text-gray-600 2xl:text-lg">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="login flex items-center gap-2">
        <img src={userIcon} alt="User icon" />
        <button className="btn btn-neutral 2xl:px-10 rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
