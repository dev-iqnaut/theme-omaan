import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import TopBar from "./TopBar";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function SchoolBanner() {
  const [heroImage, setHeroImage] = useState(null); // State to store hero image URL
  const [schoolLogo, setSchoolLogo] = useState(null); // State to store school logo URL
  const [schoolName, setSchoolName] = useState(""); // State to store school name

  // Fetch data from Firestore
  const getData = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const docRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(docRef); // Fetch the document

      if (snapshot.exists()) {
        const siteData = snapshot.data().siteData; // Extract siteData object
        console.log(siteData); // For debugging

        // Set the hero image URL
        const heroImageUrl = siteData.hero?.heroImage || null;
        setHeroImage(heroImageUrl); // Set hero image URL in state

        // Set the school logo URL
        const schoolLogoUrl = siteData.hero?.schoolDetails?.schoolLogo || null;
        setSchoolLogo(schoolLogoUrl); // Set school logo URL in state

        // Set the school name
        const schoolNameValue = siteData.hero?.schoolDetails?.schoolName || "";
        setSchoolName(schoolNameValue); // Set school name in state
      } else {
        console.error("No document found with the specified ID.");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#f5f2e9] min-h-screen flex flex-col justify-between relative overflow-hidden">
      <TopBar />

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8 lg:p-20 relative mb-4">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Left side with school logo */}
          <div className="relative w-full md:w-3/4 lg:w-2/3 mb-12 md:mb-0">
            {heroImage ? (
              <img
                src={heroImage}
                alt="School Hero"
                className="relative z-10 w-full mx-auto object-cover"
              />
            ) : (
              <p>Loading hero image...</p> // Placeholder while loading
            )}
          </div>

          {/* Right side with text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-orange-500 font-semibold text-lg md:text-xl mb-2">
              A QUALITY SCHOOL
            </h2>

            {/* School name */}
            <h2 className="text-gray-700 font-bold text-2xl mb-2 ">
              {schoolName}
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
              Committed To Excellence <br /> In Education.
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
              Sed commodo nulla augue, in interdum turpis aliquam hendrerit.
              Donec fringilla scelerisque mi, accumsan commodo ligula. Nullam
              egestas felis non nunc finibus ultrices.
            </p>
            <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
              GET STARTED →
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dots and abstract shapes */}
        {/* ... (Keep your existing decorations as they are) */}
      </div>

      {/* Navbar at the top */}
      <Navbar />

      <AboutUs />
    </div>
  );
}
