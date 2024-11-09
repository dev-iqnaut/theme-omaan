import React, { useEffect, useState } from "react";
import student1 from "../assets/studen1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import student4 from "../assets/student4.jpg";
import student5 from "../assets/student5.jpg";
import student6 from "../assets/student6.jpg";
import student7 from "../assets/student7.jpg";
import student8 from "../assets/student8.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function StudentGallery() {
  const [message, setMessage] = useState([]); // Moved inside the component
  const [loading, setLoading] = useState(true); // Moved inside the component

  const images = [
    { src: student6, span: "col-span-2 row-span-2" },
    { src: student7, span: "col-span-1 row-span-1" },
    { src: student5, span: "col-span-1 row-span-3" },
    { src: message[0]?.url, span: "col-span-1 row-span-2" }, // Fallback to student1 if no message
    { src: message[1]?.url, span: "col-span-2 row-span-6" },
    { src: message[2]?.url, span: "col-span-2 row-span-2" },
    { src: student2, span: "col-span-1 row-span-3" },
    { src: student3, span: "col-span-1 row-span-3" },
  ];

  const [facultyImage, setFacultyImage] = useState(null); // State to store faculty image URL

  // Fetch data from Firestore
  const getData = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const docRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(docRef); // Fetch the document

      if (snapshot.exists()) {
        const siteData = snapshot.data().siteData; // Extract siteData object
        console.log(siteData); // For debugging

        // Set the images data from gallery
        if (siteData.gallery && siteData.gallery.images) {
          setMessage(siteData.gallery.images); // Set images array from gallery
        } else {
          console.error("No gallery images found in siteData.");
        }

        // Set the faculty image URL
        const facultyImageUrl = siteData.facultyStaff?.facultyPicture || null;
        setFacultyImage(facultyImageUrl); // Set faculty image URL in state
      } else {
        console.error("No document found with the specified ID.");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="font-sans bg-[#f5f2e9]">
      <TopBar />
      <header className="bg-orange-400 p-24 text-white text-center relative overflow-hidden">
        <div className="absolute left-4 top-4">
          <div className="w-12 h-12 bg-yellow-300 rounded-full animate-bounce"></div>
        </div>
        <h1 className="text-3xl font-bold">Our Gallery</h1>
        <div className="absolute right-4 top-4">
          <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-500"></div>
      </header>
      <main className="p-4 bg-[#f5f2e9]">
        <h2 className="text-2xl font-bold text-center mb-4">
          Make Your Student Gallery
        </h2>
        <p className="mt-1 text-lg text-center">
          Check out our student gallery.
        </p>
        <div className="relative">
          <div className="absolute -top-8 left-4 text-6xl text-orange-300 transform -rotate-45">
            ✿
          </div>
          <div className="absolute top-4 right-8 text-4xl text-yellow-400">
            ★
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 auto-rows-[100px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105`}
              style={{ willChange: "transform" }} // Improves performance of hover effect
            >
              <img
                src={image.src}
                alt={`Student ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}
