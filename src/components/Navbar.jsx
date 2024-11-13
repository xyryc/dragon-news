import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div></div>

      <div className="nav space-x-5 text-gray-600 2xl:text-lg">
        <Link>Home</Link>
        <Link>Career</Link>
        <Link>About</Link>
      </div>

      <div className="login"></div>
    </div>
  );
};

export default Navbar;
