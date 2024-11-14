import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <div className="flex justify-between items-center mb-3 2xl:mb-5">
        <h2 className="font-semibold 2xl:text-xl">Dragon News Home</h2>
        <h2 className="text-gray-600 xl:mr-10 font-medium">
          Total News: {news.length}
        </h2>
      </div>

      {/* news */}
      <div className="space-y-7">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
