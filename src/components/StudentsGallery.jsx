import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function StudentGallery() {
  const [message, setMessage] = useState([]); // State to store gallery images
  const [loading, setLoading] = useState(true);
  const docId = "www.aforapple.in"; // Document ID

  // Fetch data from Firestore
  const getData = async () => {
    try {
      const docRef = doc(db, "sites", docId); // Firestore document reference
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const siteData = snapshot.data().siteData;

        if (siteData.gallery && siteData.gallery.images) {
          let newImages = siteData.gallery.images;

          // Keep only the latest 8 images if there are more than 8
          if (newImages.length > 8) {
            newImages = newImages.slice(-8);
          }

          setMessage(newImages); // Update the state with the limited images
        } else {
          console.error("No gallery images found in siteData.");
        }
      } else {
        console.error("No document found with the specified ID.");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update the Firestore database with the latest 8 images
  const updateData = async (newImages) => {
    try {
      const docRef = doc(db, "sites", docId);
      await updateDoc(docRef, {
        "siteData.gallery.images": newImages, // Update the images array
      });
      setMessage(newImages); // Update the state with the new images
    } catch (error) {
      console.error("Error updating images in Firestore:", error);
    }
  };

  // Function to add a new image and manage gallery size
  const addImage = (newImageUrl) => {
    let updatedImages = [...message, { url: newImageUrl }]; // Add new image to the array

    // Keep only the last 8 images
    if (updatedImages.length > 8) {
      updatedImages = updatedImages.slice(-8); // Keep last 8 images only
    }

    // Update Firestore and state with the updated image array
    updateData(updatedImages);
  };

  // Function to remove the last image
  const removeLastImage = () => {
    if (message.length > 0) {
      const updatedImages = message.slice(0, -1); // Remove the last image
      updateData(updatedImages); // Update Firestore and state with the new image array
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Define grid spans similar to the original code
  const imagesWithSpans = [
    { src: message[0]?.url, span: "col-span-2 row-span-2" },
    { src: message[1]?.url, span: "col-span-1 row-span-1" },
    { src: message[2]?.url, span: "col-span-1 row-span-3" },
    { src: message[3]?.url, span: "col-span-1 row-span-2" },
    { src: message[4]?.url, span: "col-span-2 row-span-6" },
    { src: message[5]?.url, span: "col-span-2 row-span-2" },
    { src: message[6]?.url, span: "col-span-1 row-span-3" },
    { src: message[7]?.url, span: "col-span-1 row-span-3" },
  ];

  return (
    <div className="font-sans bg-[#f5f2e9]">
      <TopBar />
      <header className="bg-orange-400 p-24 text-white text-center relative overflow-hidden">
        <h1 className="text-3xl font-bold">Our Gallery</h1>
      </header>
      <main className="p-4 bg-[#f5f2e9]">
        <h2 className="text-2xl font-bold text-center mb-4">
          Make Your Student Gallery
        </h2>
        <p className="mt-1 text-lg text-center">
          Check out our student gallery.
        </p>
        <button onClick={() => addImage("newImageURL")} className="mt-4">
          Add New Image
        </button>
        <button onClick={removeLastImage} className="mt-4 ml-4">
          Remove Last Image
        </button>
        <div className="grid grid-cols-4 gap-4 auto-rows-[100px]">
          {imagesWithSpans.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105`}
              style={{ willChange: "transform" }}
            >
              <img
                src={image.src || ""} // Fallback to empty string if URL is missing
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
