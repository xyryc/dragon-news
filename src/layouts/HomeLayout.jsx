import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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

      <main className="container mx-auto px-4 lg:px-0 2xl:py-20 py-3 grid grid-cols-12 gap-3 2xl:gap-6">
        <aside className="left col-span-3 border-2">
          left navbar
        </aside>

        <section className="col-span-6 border-2">main content</section>

        <aside className="right col-span-3 border-2">right navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
