import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import blog8 from "../assets/blog8.jpg";
import blog9 from "../assets/blog9.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";

const blogPosts = [
  {
    id: 1,
    title: "Attractive Clothes For Your Princess And Outfits For Your Cool",
    category: "Fashion",
    image: blog1,
  },
  {
    id: 2,
    title: "Building Community By Honoring All Traditions",
    category: "Community",
    image: blog2,
  },
  {
    id: 3,
    title: "Children Blossoming In A Nurturing Environment",
    category: "Education",
    image: blog3,
  },
  {
    id: 4,
    title: "Excellence In Early Childhood Quality Education",
    category: "Education",
    image: blog4,
  },
  {
    id: 5,
    title: "Building Community By Honoring All Traditions",
    category: "Community",
    image: blog5,
  },
  {
    id: 6,
    title: "Enhancing The Development Of The Whole Child",
    category: "Development",
    image: blog6,
  },
  {
    id: 7,
    title: "Excellence In Early Childhood Growing Education",
    category: "Education",
    image: blog7,
  },
  {
    id: 8,
    title: "Guiding The Next Generation To Seek More Of Quality",
    category: "Guidance",
    image: blog8,
  },
  {
    id: 9,
    title: "Learning, Friendship And Fun For Many Everyone",
    category: "Social",
    image: blog9,
  },
];

export default function Blog() {
  return (
    <div className="font-sans bg-[#f5f2e9]">
      <TopBar />
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-wider mb-4">Blogs</h1>
          <p className="text-lg">
            Stay updated with the latest trends and stories
          </p>
        </div>

        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 right-10 w-24 h-24 bg-blue-300 opacity-70 rounded-full"></div>
      </header>

      {/* Main Section */}
      <main className="container max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl text-center font-semibold mb-8 leading-relaxed">
          Educating Students For Success
          <br />
          In A Changing World.
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden "
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              {/* Blog Content */}
              <div className="p-5">
                <span className="inline-block bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mt-4">{post.title}</h3>
                <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition hover:bg-indigo-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}
