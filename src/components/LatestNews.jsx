import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-5 items-center bg-base-200 p-2 2xl:p-4">
      <p className="bg-[#D72050] text-base-100 px-6 py-2">Latest</p>

      <Marquee
        pauseOnHover={true}
        className="space-x-10 2xl:font-semibold font-medium 2xl:text-lg"
      >
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          dolores.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          dolores.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          dolores.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
