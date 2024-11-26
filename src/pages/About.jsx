import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const About = () => {
  const teamMembers = [
    {
      name: "Javed Karim",
      role: "Editor-in-Chief",
      image: "https://i.ibb.co.com/jL5P1zz/jawed-karim-married-status-now.webp",
      bio: "With over a decade of experience in journalism, John ensures the highest standards of reporting.",
    },
    {
      name: "Mohammad Anik",
      role: "Founder & CEO",
      image: "https://i.ibb.co.com/7YSvbxv/anik.jpg",
      bio: "Jane is passionate about delivering impactful news and fostering a transparent information ecosystem.",
    },
    {
      name: "Emily Johnson",
      role: "Lead Developer",
      image: "https://i.ibb.co.com/yWLr9nh/pexels-photo-28570314.jpg",
      bio: "Emily leads the tech team, creating seamless user experiences for our platform.",
    },
  ];

  return (
    <div className="container mx-auto px-4 font-poppins text-center">
      <Header />
      <LatestNews />
      <Navbar />
      <div className="bg-base-200 py-10">
        {/* Hero Section */}
        <div className="text-center py-8 text-white bg-gray-600 rounded-3xl">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            At Dragon News, we aim to deliver insightful, credible, and
            inspiring news articles that make a difference in people{"'"}s
            lives.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg">
            Our mission is to empower people with knowledge and foster informed
            communities. We strive to bring you the most accurate and impactful
            stories from around the globe.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex justify-center items-center flex-col text-center"
              >
                <figure>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover h-56 rounded-full"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-base-100 py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Founded in 2020, Dragon News started as a small blog to share
              reliable news. Today, we are proud to be a trusted source for
              thousands of readers worldwide. From tech innovations to
              world-changing events, we are here to keep you informed.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-10 bg-gray-600 text-white text-center rounded-3xl">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Have questions or feedback? Reach out to us anytime at{" "}
            <span className="underline">contact@dragonnews.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
