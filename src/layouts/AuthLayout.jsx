import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <header className="container mx-auto p-4">
        <Navbar />
      </header>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
