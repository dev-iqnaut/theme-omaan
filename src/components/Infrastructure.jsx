import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Adjust the path to your firebase configuration file
import { doc, getDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { FaStar } from "react-icons/fa"; // Star icon for decoration

const InfrastructurePage = () => {
  const [data, setData] = useState(null); // Holds full document data from Firestore
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from Firestore
  const getData = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const docRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(docRef); // Fetch the document

      if (snapshot.exists()) {
        const siteData = snapshot.data().siteData; // Extract siteData object
        console.log(siteData); // For debugging
        setData(siteData.infrastructure); // Set the infrastructure data in state
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-[#f5f2e9] min-h-screen bg-cover relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="star-pattern opacity-50"></div>
      </div>

      <TopBar />
      <div className="relative p-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8 mt-20 text-gray-800">
          <span className="flex items-center justify-center gap-2">
            Infrastructure <FaStar className="text-yellow-500" />
          </span>
        </h1>

        {/* Art Rooms */}
        {data?.artRooms && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500 relative">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Art Rooms
            </h2>
            <ul className="space-y-2">
              {Object.entries(data.artRooms).map(([roomName, url]) => (
                <li key={roomName}>
                  <span className="font-medium">{roomName}:</span>{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                  >
                    View {roomName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hostels */}
        {data?.hostels && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500 relative">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Hostels
            </h2>
            <ul className="space-y-2">
              {Object.entries(data.hostels).map(([hostelName, url]) => (
                <li key={hostelName}>
                  <span className="font-medium">{hostelName}:</span>{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                  >
                    View {hostelName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Laboratories */}
        {data?.laboratories && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500 relative">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Laboratories
            </h2>
            <ul className="space-y-2">
              {Object.entries(data.laboratories).map(([labName, url]) => (
                <li key={labName}>
                  <span className="font-medium">{labName}:</span>{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                  >
                    View {labName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Libraries */}
        {data?.libraries && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500 relative">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Libraries
            </h2>
            <ul className="space-y-2">
              {Object.entries(data.libraries).map(([libraryName, url]) => (
                <li key={libraryName}>
                  <span className="font-medium">{libraryName}:</span>{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                  >
                    View {libraryName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Presentation Halls */}
        {data?.presentationHalls && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500 relative">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Presentation Halls
            </h2>
            <ul className="space-y-2">
              {Object.entries(data.presentationHalls).map(([hallName, url]) => (
                <li key={hallName}>
                  <span className="font-medium">{hallName}:</span>{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                  >
                    View {hallName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sports Ground */}
        {data?.sportsGround && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500 relative">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Sports Ground
            </h2>
            <a
              href={data.sportsGround}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
            >
              View Sports Ground
            </a>
          </div>
        )}
      </div>
      <Navbar />
      <Footer />

      <style jsx>{`
        .star-pattern {
          background-image: radial-gradient(
            circle,
            #ffd700 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default InfrastructurePage;
