import React from 'react';
import blog1 from '../assets/blog1.jpg';
import details7 from '../assets/details7.jpg';
import details8 from '../assets/details8.jpg';
import details9 from '../assets/details9.jpg';

import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar';

export default function BlogDetail() {
  const posts = [
    {
      date: '09 Dec, 2023',
      title: 'Phasellus Et Tempor Libero. Aliqu Ameuelit Enim Cursus.',
      img: details7, // Using imported image details7.jpg
    },
    {
      date: '09 Dec, 2023',
      title: 'Interdum Et Malesuada Famesac Ante Ipsum Primis Cibus.',
      img: details8, // Using imported image details8.jpg
    },
    {
      date: '09 Dec, 2023',
      title: 'Donec Ipsum Turpis, Accum Sann On Placeratet Convallis.',
      img: details9, // Using imported image details9.jpg
    },
  ];

  return (
    <div className="font-sans bg-[#f5f2e9]">
      <TopBar />
      {/* Header */}
      <header className="bg-yellow-300 relative py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Blogs Details</h1>
          <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-400 rounded-full"></div>
        </div>
      </header>

      {/* Main Section */}
      <main className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-14 px-6">
        {/* Left Column - Blog Content */}
        <div className="lg:col-span-2">
          <img src={blog1} alt="Blog" className="w-full h-auto rounded-lg mb-8" />
          <div className="flex justify-between items-center mb-8">
            <span className="bg-purple-600 text-white text-lg px-5 py-2 rounded-full">People Story</span>
            <div className="text-gray-500 text-lg">
              <span>Date: Dec 25, 2023 | 50 Comments</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Attractive Clothes For Your Princess Cool Clothes For Your Cool
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            The goal of this blog post is to inspire and suggest attractive clothing for young girls, ensuring comfort and style. You’ll find a variety of outfits that will help bring out the princess within.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Making Your Child’s World Better</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg">Based Marketing</span>
              <p className="text-gray-700 mt-3 text-lg">
                Marketing techniques designed to capture the youth’s imagination and make them feel special.
              </p>
            </div>
            <div>
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-lg">Community Management</span>
              <p className="text-gray-700 mt-3 text-lg">
                Building a strong community around the children, fostering friendship and creativity.
              </p>
            </div>
          </div>

          {/* What You Will Do Section */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">What You Will Do</h3>
          <div className="mb-8">
            <ul className="list-disc pl-6 text-gray-700 text-lg">
              <li>Choose comfortable, trendy outfits.</li>
              <li>Encourage your child to express themselves through fashion.</li>
              <li>Build a nurturing environment for growth.</li>
            </ul>
          </div>

          {/* Blog Quote */}
          <div className="bg-gray-100 p-8 rounded-lg mb-8">
            <blockquote className="text-gray-800 italic font-semibold text-xl">
              "Fashion for children is not just about clothes. It's about identity and self-expression."
              <cite className="block text-right font-normal text-lg">- Jane Doe, CEO</cite>
            </blockquote>
          </div>

          {/* Blog Navigation */}
          <div className="flex justify-between mt-12">
            <a href="#" className="text-gray-500 hover:text-gray-800 text-lg">&larr; Previous Blog</a>
            <a href="#" className="text-gray-500 hover:text-gray-800 text-lg">Next Blog &rarr;</a>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <aside className="lg:col-span-1">
          {/* Recent Blogs */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 min-h-[500px] flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Blogs</h3>

            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="absolute top-1/2 right-3 w-7 h-7 text-gray-500 transform -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <ul className="text-lg text-gray-700 space-y-5">
              <li><a href="#" className="hover:text-indigo-600">Search Optimization</a></li>
              <li><a href="#" className="hover:text-indigo-600">Content Marketing</a></li>
              <li><a href="#" className="hover:text-indigo-600">Page Rank (PR)</a></li>
              <li><a href="#" className="hover:text-indigo-600">Market Research</a></li>
              <li><a href="#" className="hover:text-indigo-600">Email Marketing</a></li>
              <li><a href="#" className="hover:text-indigo-600">Video Production</a></li>
              <li><a href="#" className="hover:text-indigo-600">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-indigo-600">Advertisement</a></li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="bg-green-500 p-4 rounded-md shadow-md">
            <h2 className="text-white text-lg mb-4">Recent Posts :</h2>
            {posts.map((post, index) => (
              <div key={index} className="flex items-start mb-4">
                <img src={post.img} alt={`Post ${index + 1}`} className="w-16 h-16 rounded-md mr-4" />
                <div>
                  <p className="text-sm text-white">{post.date}</p>
                  <p className="text-white font-semibold">
                    {post.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Advertisement */}
          <div className="bg-yellow-200 p-8 rounded-lg shadow-lg text-center min-h-[500px] flex flex-col justify-between mt-10">
            <h4 className="text-xl font-bold mb-6">Kendra's First Day of School</h4>
            <img src={blog1} alt="School Ad" className="mx-auto mb-6 rounded-lg" />
            <a href="#" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
              Learn More
            </a>
          </div>
        </aside>
      </main>

      {/* Comment Section */}
      <section className="container mx-auto py-12 px-6">
        <h3 className="text-3xl font-bold mb-8">Leave A Reply</h3>
        <form className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="border rounded-lg p-4 text-lg" />
            <input type="text" placeholder="Last Name" className="border rounded-lg p-4 text-lg" />
          </div>
          <input type="email" placeholder="Your Email" className="border rounded-lg p-4 text-lg" />
          <textarea placeholder="Your Message" className="border rounded-lg p-4 text-lg h-48"></textarea>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition text-lg">
            Submit Now
          </button>
        </form>
      </section>

      <Navbar />
      <Footer />
    </div>
  );
}
