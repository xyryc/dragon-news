import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Career = () => {
  const jobPositions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "Build responsive and interactive UIs using React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Part-Time",
      description: "Develop scalable REST APIs and manage databases.",
      link: "#",
    },
    {
      title: "UI/UX Designer",
      location: "New York, USA",
      type: "Contract",
      description:
        "Design user-centered interfaces and conduct usability testing.",
      link: "#",
    },
  ];

  return (
    <div className="mx-auto container px-4 font-poppins">
      <Header />
      <LatestNews />
      <Navbar />

      <div className="bg-base-200 py-10">
        {/* Header Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">Join Our Team</h1>
          <p className="text-lg mt-4">
            We{"'"}re on a mission to redefine the future of news and
            information. Be a part of our journey.
          </p>
        </div>

        {/* Job Openings Section */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPositions.map((job, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl font-bold">{job.title}</h3>
                  <p className="text-sm text-green-600">
                    {job.location} | {job.type}
                  </p>
                  <p className="mt-2">{job.description}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={job.link}
                      className="btn btn-info btn-outline btn-sm"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-10 bg-gray-800 text-white text-center mt-10 rounded-3xl">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            At Dragon News, we strive to deliver accurate and inspiring news
            that impacts lives. Join us to make a difference.
          </p>
        </div>

        {/* Application Form Section */}
        <div className="py-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-black">
              Apply to Join Us
            </h2>
            <p className="mt-2">
              Submit your resume and we{"'"}ll get in touch with you soon.
            </p>
          </div>
          <form className="max-w-lg mx-auto bg-base-100 p-6 shadow-lg rounded-lg">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Resume (PDF)</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <button className="btn btn-neutral w-full">
                Submit Application
              </button>
            </div>
          </form>
        </div>

        {/* Contact Section */}
        <div className="py-10 bg-gray-600 text-white text-center rounded-3xl">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            Have questions or feedback? Reach out to us anytime at{" "}
            <p className="underline">career@dragonnews.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
