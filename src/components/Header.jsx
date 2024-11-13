import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className="logo">
        <img src={logo} alt="Dragon News Logo" />
      </div>
      <h2 className="text-gray-600 mt-2 2xl:mt-5 mb-2 2xl:text-lg">
        Journalism Without Fear or Favour
      </h2>
      <p className="font-medium 2xl:text-xl mb-4 2xl:mb-7 ">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
