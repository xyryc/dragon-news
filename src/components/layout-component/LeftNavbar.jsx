import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SportAds from "../SportAds";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-semibold 2xl:text-xl mb-3 2xl:mb-5">
          All Categories ({categories.length})
        </h2>

        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.category_id}`}
              key={category.category_id}
              className="btn bg-base-100 border-none rounded-md shadow-none"
            >
              {category.category_name}
            </NavLink>
          ))}
        </div>
      </div>

      <SportAds />
    </div>
  );
};

export default LeftNavbar;
