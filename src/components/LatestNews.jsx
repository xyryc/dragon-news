import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/08")
      .then((res) => res.json())
      .then((data) => setNews(data.data));
  }, []);

  return (
    <div className="flex gap-5 items-center bg-base-200 p-2 2xl:p-4">
      <p className="bg-[#D72050] text-base-100 px-6 py-2">Latest</p>

      <Marquee
        pauseOnHover={true}
        className=" 2xl:font-semibold font-medium 2xl:text-lg"
      >
        {news.map((item) => (
          <Link to={`/news/${item._id}`} key={item._id} className="mr-10">
            {item.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
