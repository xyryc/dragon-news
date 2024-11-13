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

        <section className="container mx-auto px-4 py-3 2xl:py-5">
          <Navbar />
        </section>
      </header>

      <nav></nav>

      <main></main>
    </div>
  );
};

export default HomeLayout;
