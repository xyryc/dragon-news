import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/leftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header className="px-4">
        <Header />
        <section className="container mx-auto px-4">
          <LatestNews />
        </section>
      </header>

      <nav className="container mx-auto px-4 py-3 2xl:py-5">
        <Navbar />
      </nav>

      <main className="container mx-auto px-4 lg:px-0 2xl:py-20 py-3 grid md:grid-cols-12 gap-6">
        <aside className="left md:col-span-3">
          <LeftNavbar />
        </aside>

        <section className="md:col-span-6">
          <Outlet />
        </section>

        <aside className="right md:col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
