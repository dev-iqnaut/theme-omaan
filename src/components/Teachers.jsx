import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Importing teacher images
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacher3 from '../assets/teacher3.jpg';
import teacher4 from '../assets/teacher4.jpg';
import teacher5 from '../assets/teacher5.jpg';
import teacher6 from '../assets/teacher6.jpg';
import teacher7 from '../assets/teacher7.jpg';
import teacher8 from '../assets/teacher8.jpg';
import teacher9 from '../assets/teacher9.jpg';

// Importing course images
import course1 from '../assets/course1.jpg';
import course2 from '../assets/course2.jpg';
import course3 from '../assets/course3.jpg';
import TopBar from './TopBar';

export default function TeachersPage() {
  const teacher = [
    { name: "Georage Timothy", subject: "Math", image: teacher1 },
    { name: "Brian Scott", subject: "Science", image: teacher2 },
    { name: "Angela Brenda", subject: "History", image: teacher3 },
    { name: "Amanda Mellisa", subject: "English", image: teacher4 },
    { name: "Jonathan Nicolas", subject: "Art", image: teacher5 },
    { name: "Rubbica Sheron", subject: "Music", image: teacher6 },
    { name: "Sam Sherif", subject: "Geography", image: teacher7 },
    { name: "Emma Brenda", subject: "Physics", image: teacher8 },
    { name: "Mike Merry", subject: "Chemistry", image: teacher9 },
  ];

  const courses = [
    { name: "Chess", image: course1 },
    { name: "Content Creation", image: course2 },
    { name: "E-Learning", image: course3 },
    { name: "Coding", image: course3 },
  ];

  return (
    <div className="font-sans bg-[#f5f2e9]">
     <TopBar />
      {/* Header */}
      <header className="relative bg-green-500 p-24 text-center text-white">
        <h1 className="text-4xl font-bold">Our Teachers</h1>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-400 rounded-full"></div>
      </header>

      {/* Teachers Section */}
      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teacher.map((teacher, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={teacher.image}
                alt={`Teacher ${teacher.name}`}
                className="w-full h-48 object-cover"
                loading="lazy"  // Ensuring lazy loading for smooth image rendering
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.subject}</p>
                <div className="mt-4 flex space-x-2 justify-center">
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600 w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="text-blue-400 w-6 h-6" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Courses Section */}
      <section className="bg-pink-200 p-8">
        <h2 className="text-3xl font-bold mb-6">Upcoming Course Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={course.image}
                alt={`Course ${course.name}`}
                className="w-full h-40 object-cover"
                loading="lazy"  // Lazy loading for courses images
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{course.name}</h3>
                <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Navbar />
      <Footer />
    </div>
  );
}
