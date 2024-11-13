import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold 2xl:text-xl mb-3 2xl:mb-5">Find Us On</h2>

      <div className="join join-vertical flex *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook  className="text-blue-800"/>
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="text-blue-500" />
          Twitter
        </button>
        <button className="btn join-item justify-start">
            <FaInstagram className="text-red-500"/>Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
