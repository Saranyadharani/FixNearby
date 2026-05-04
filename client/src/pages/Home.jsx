import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hire Trusted Local Workers
            <span className="block text-blue-600 mt-2">
              Fast, Easy & Reliable
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg md:text-xl">
            From electricians to cleaners, FixNearby helps you find skilled professionals near you in minutes.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-2xl mx-auto">
            <div className="flex items-center bg-white border rounded-lg px-4 py-2 shadow-sm w-full">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center bg-white border rounded-lg px-4 py-2 shadow-sm w-full sm:w-auto">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your location"
                className="w-full outline-none text-sm"
              />
            </div>

            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-md transition flex items-center justify-center"
            >
              Search
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="px-8 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-md transition"
            >
              Browse Services
            </Link>

            <Link
              to="/register"
              className="px-8 py-3 rounded-lg text-blue-600 bg-white border hover:bg-gray-50 shadow-sm transition"
            >
              Become a Worker
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500 flex-wrap">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              4.8 Avg Rating
            </div>
            <div>10,000+ Users</div>
            <div>Verified Professionals</div>
          </div>

        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 mb-16">
            Get your job done in 3 simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                step: "1",
                title: "Search",
                desc: "Find nearby professionals based on skills, ratings, and location.",
                color: "blue"
              },
              {
                step: "2",
                title: "Book",
                desc: "Choose a time slot and confirm your booking instantly.",
                color: "green"
              },
              {
                step: "3",
                title: "Relax",
                desc: "Sit back while the expert completes your task efficiently.",
                color: "yellow"
              }
            ].map((item, i) => (

              <div key={i} className="p-8 rounded-2xl border hover:shadow-xl transition group">

                <div className={`w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-white text-lg font-bold bg-${item.color}-500 group-hover:scale-110 transition`}>
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>

              </div>

            ))}

          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Popular Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Electrician",
              "Plumber",
              "Carpenter",
              "Cleaning",
              "Painting",
              "AC Repair",
              "Pest Control",
              "Moving"
            ].map((category, idx) => (

              <Link
                key={idx}
                to="/services"
                className="bg-white p-6 rounded-xl border hover:border-blue-500 hover:text-blue-600 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <span className="font-medium">{category}</span>
              </Link>

            ))}
          </div>

        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Help Today?
        </h2>
        <p className="mb-6 text-blue-100">
          Book trusted professionals instantly and get your job done without hassle.
        </p>

        <Link
          to="/services"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>

    </div>
  );
};

export default Home;