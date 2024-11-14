import { FaShareAlt, FaStar, FaEye, FaBookmark } from "react-icons/fa";

const NewsCard = (props) => {
  const { news } = props || {};

  return (
    <div className="card border">
      {/* Header */}
      <div className="flex items-center bg-base-200 px-5 py-4 rounded-t-lg">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h2 className="font-semibold">{news.author.name}</h2>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex items-center space-x-2 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <div className="p-5">
        {/* Title */}
        <h3 className="font-bold text-xl mb-5">{news.title}</h3>

        {/* Image */}
        <img
          src={news.image_url}
          alt="thumbnail"
          className="w-full h-[262px] object-cover rounded-lg mb-4"
        />

        {/* Details */}
        <p className="text-gray-700">
          {news.details.length > 100
            ? `${news.details.slice(0, 300)}...`
            : news.details}
          <span className="font-semibold text-[#FF8C47]">Read More</span>
        </p>

        <div className="divider my-5"></div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Render filled stars based on rating value */}
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < Math.round(news.rating.number)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-700">
              {news.rating.number}
            </span>
          </div>

          <div className="flex items-center space-x-1 text-gray-500">
            <FaEye />
            <span className="text-sm font-semibold">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
