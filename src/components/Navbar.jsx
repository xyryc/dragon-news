import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{/* {user && user?.email} */}</div>

      <div className="nav space-x-5 text-gray-600 2xl:text-lg">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="login flex items-center gap-4">
        {user && user?.email ? (
          <div className="flex flex-col items-center">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={user?.photoURL}
            />
            <p className="text-xs">{user?.displayName}</p>
          </div>
        ) : (
          <img src={userIcon} alt="User icon" />
        )}
        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn btn-neutral 2xl:px-10 rounded-none"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral 2xl:px-10 rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
