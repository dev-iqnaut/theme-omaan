import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import blog1 from "../assets/blog1.jpg";

function PricePlan() {
  return (
    <div className="bg-[#f5f2e9] min-h-screen">
      <TopBar />
      <header className="bg-white p-24   border-b-4 border-yellow-300">
        <h1 className="text-3xl mt-7 font-bold text-center">Price Plan</h1>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Professional Price Plan
        </h2>

        {/* Pricing Table */}
        <div className="space-y-6">
          {[
            {
              name: "BASIC COURSES PACKAGE",
              price: "$120.00",
              color: "bg-white",
            },
            {
              name: "ADVANCE COURSES PACKAGE",
              price: "$160.00",
              color: "bg-pink-200",
            },
            {
              name: "PRO COURSES PACKAGE",
              price: "$199.00",
              color: "bg-white",
            },
            {
              name: "MUSIC COURSES PACKAGE",
              price: "$189.00",
              color: "bg-white",
            },
            {
              name: "ART COURSES PACKAGE",
              price: "$219.00",
              color: "bg-white",
            },
          ].map((course, index) => (
            <div
              key={index}
              className={`${course.color} rounded-lg p-6 flex justify-between items-center`}
            >
              <div>
                <h3 className="font-bold">{course.name}</h3>
                <p className="text-gray-600">3 Months Class</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{course.price}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-2">
                  GET PLAN
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-red-300 rounded-lg p-8 flex">
          <div className="w-1/2">
            <h3 className="text-2xl font-bold mb-4">Request A Call back</h3>
            <p className="mb-4">
              Get latest updates, offers, and our product & services. We will
              not share your address.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 rounded"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            {/* Placeholder for image */}
            <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center">
              <img
                src={blog1}
                alt="Event 1"
                className="w-64 h-64 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}

export default PricePlan;
