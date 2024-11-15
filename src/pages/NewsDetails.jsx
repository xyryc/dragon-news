import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  //   console.log(news);

  return (
    <div className="font-poppins">
      <header className="px-4">
        <Header />
      </header>

      <main className="container mx-auto px-4 grid md:grid-cols-12 gap-3">
        <section className="md:col-span-9">
          <h2 className="font-semibold xl:text-xl mb-5">Dragon News</h2>

          <div className="p-[30px] border rounded-md">
            <img
              className="rounded-md"
              src={news?.image_url}
              alt={news?.title}
            />
            <h1 className="mt-5 mb-2 font-bold text-[26px]">{news?.title}</h1>

            <p className="text-gray-600 leading-[26px] mb-8">{news?.details}</p>
            <Link
              to={`/category/${news?.category_id}`}
              className="btn btn-wide bg-[#D72050] text-white rounded-none"
            >
              <FaArrowLeft />
              All news in this category
            </Link>
          </div>
        </section>

        <section className="md:col-span-3">
          <RightNavbar />
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
