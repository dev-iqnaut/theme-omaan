import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Firestore functions
import blog2 from "../assets/blog2.jpg";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.jpg";
import about6 from "../assets/about6.jpg";
import about7 from "../assets/about7.jpg";
import about8 from "../assets/about8.jpg";
import about9 from "../assets/about9.jpg";
import about10 from "../assets/about10.jpg";
import about11 from "../assets/about11.jpg";
import about12 from "../assets/about12.jpg";
import about13 from "../assets/about13.jpg";
import about14 from "../assets/about14.jpg";
import about15 from "../assets/about15.jpg";
import about16 from "../assets/about16.jpg";
import about17 from "../assets/about17.jpg";
import about18 from "../assets/about18.jpg";
import about19 from "../assets/about19.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutUs() {
  const [parentsData, setParentsContent] = useState(null); // Holds parent content data from Firestore
  const [loadingMessage, setLoadingMessage] = useState("Loading..."); // Loading message for display

  // Fetch parent data from Firestore
  const getParentsContent = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const docRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(docRef); // Fetch the document

      if (snapshot.exists()) {
        const data = snapshot.data(); // Extract document data
        console.log(data); // For debugging

        // Access `content` from `parentsCorner` based on the structure
        setParentsContent(
          data?.siteData?.parentsCorner?.content || "No content available"
        );
      } else {
        console.error("No document found with the specified ID.");
        setParentsContent("No content available");
      }
    } catch (error) {
      console.error("Error fetching parents data from Firebase:", error);
      setParentsContent("Failed to load content");
    } finally {
      setLoadingMessage(""); // Clear loading message
    }
  };

  // Fetch parent data when the component mounts
  useEffect(() => {
    getParentsContent();
  }, []);

  const [data, setData] = useState(null); // Holds full document data from Firestore
  const [focus, setFocus] = useState(""); // Focus state for display
  const [loadingy, setLoadingy] = useState(true); // Loading state

  // Fetch data from Firestore
  const getData = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const listRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(listRef); // Fetch the document

      if (snapshot.exists()) {
        const listData = snapshot.data();
        console.log(listData); // For debugging

        setData(listData);
        setFocus(listData?.siteData?.aboutUs?.focus || "No focus available");
      } else {
        console.error("No document found with the specified ID.");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
    } finally {
      setLoadingy(false); // Stop loading
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getData();
  }, []);

  const [mission, setMission] = useState(""); // Mission state for display
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch mission data from Firestore
  const getDataa = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const listRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(listRef); // Fetch the document

      if (snapshot.exists()) {
        const listData = snapshot.data();
        console.log(listData); // For debugging

        setMission(
          listData?.siteData?.aboutUs?.mission || "No mission available"
        );
      } else {
        console.error("No document found with the specified ID.");
        setMission("No mission available");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
      setMission("Failed to load mission");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getDataa();
  }, []);
  const [schoolHistory, setHistory] = useState(""); // State for school history display
  const [loadingHistory, setLoadingHistory] = useState(true); // State to manage loading

  // Fetch school history data from Firestore
  const getHistory = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const listRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(listRef); // Fetch the document

      if (snapshot.exists()) {
        const listData = snapshot.data();
        console.log(listData); // For debugging

        setHistory(
          listData?.siteData?.aboutUs?.schoolHistory || "No history available"
        );
      } else {
        console.error("No document found with the specified ID.");
        setHistory("No history available");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
      setHistory("Failed to load history");
    } finally {
      setLoadingHistory(false); // Stop loading
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getHistory();
  }, []);

  const [vision, setVision] = useState(""); // State for vision display
  const [loadingVision, setLoadingVision] = useState(true); // State to manage loading

  // Fetch vision data from Firestore
  const getVision = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const listRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(listRef); // Fetch the document

      if (snapshot.exists()) {
        const listData = snapshot.data();
        console.log(listData); // For debugging

        setVision(listData?.siteData?.aboutUs?.vision || "No vision available");
      } else {
        console.error("No document found with the specified ID.");
        setVision("No vision available");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
      setVision("Failed to load vision");
    } finally {
      setLoadingVision(false); // Stop loading
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getVision();
  }, []);

  const [principalMessage, setPrincipalMessage] = useState(""); // State for principal message display
  const [principalImage, setPrincipalImage] = useState(""); // State for principal image URL
  const [loadinge, setLoadinge] = useState(true); // State to manage loading

  // Fetch principal message and image data from Firestore
  const getMessageAndImage = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const listRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(listRef); // Fetch the document

      if (snapshot.exists()) {
        const listData = snapshot.data();
        console.log(listData); // For debugging

        // Access the principal message and image based on the structure in Firestore
        setPrincipalMessage(
          listData?.siteData?.aboutUs?.principalMessage?.principalMessage ||
            "No message available"
        );
        setPrincipalImage(
          listData?.siteData?.aboutUs?.principalMessage?.principalImage || ""
        );
      } else {
        console.error("No document found with the specified ID.");
        setPrincipalMessage("No message available");
        setPrincipalImage("");
      }
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
      setPrincipalMessage("Failed to load message");
      setPrincipalImage("");
    } finally {
      setLoadinge(false); // Stop loading
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getMessageAndImage();
  }, []);

  const stats = [
    { number: "75K", text: "Enrolled Students" },
    { number: "289+", text: "Academic Programs" },
    { number: "102+", text: "Winning Award" },
    { number: "85+", text: "Certified Syudents" },
  ];

  const testimonials = [
    {
      name: "Jessica Lisa",
      role: "Fashion Designer",
      image: parentsData ? parentsData[0]?.url : "", // Ensure parentsData is loaded before accessing it
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      bgColor: "bg-green-400",
      rating: 4,
    },
    {
      name: "Kimberly Moms",
      role: "Fashion Designer",
      image: about17, // Replace with your actual image
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      bgColor: "bg-orange-400",
      rating: 4,
    },
    {
      name: "Jessica Lisa",
      role: "Fashion Designer",
      image: about17, // Replace with your actual image
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      bgColor: "bg-blue-600",
      rating: 5,
    },
  ];

  const TestimonialCard = ({ name, role, image, text, bgColor, rating }) => (
    <div className={`relative p-6 text-white rounded-3xl ${bgColor}`}>
      {/* Star Ratings */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.036 2.634 2.829.073a1 1 0 01.559 1.736l-2.108 1.705.6 2.871a1 1 0 01-1.52 1.065L10 12.867l-2.347 1.144a1 1 0 01-1.52-1.065l.6-2.871-2.108-1.705a1 1 0 01.56-1.736l2.828-.073L9.049 2.927z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="mb-6">{text}</p>

      {/* Bubble Tail */}
      <div
        className={`absolute bottom-[-20px] left-10 w-8 h-8 ${bgColor} rotate-45 rounded-[10%]`}
      />

      {/* User Information */}
      <div className="flex items-center">
        <img
          src={image}
          alt="Parent"
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </div>
  );

  const Star = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const Pencil = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );

  const BookOpen = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );

  const Lightbulb = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
  return (
    <div className="bg-[#f5f2e9] min-h-screen">
      <TopBar />

      <main className="container mx-auto p-4">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-orange-500 font-semibold">ABOUT US</h2>
                <h1 className="text-5xl font-black leading-tight text-black mt-2">
                  Academy Attitude Positive Attitude.
                </h1>
                <p className="mt-4 text-black font-bold">
                  {loadingy ? "Loading..." : focus}
                </p>

                {/* Features */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4">
                    <div className=" text-white p-0 rounded-full">
                      <img src={about1} className="h-16 w-16" />
                    </div>
                    <h3 className="text-l font-semibold">
                      Tradition Of Excellence
                    </h3>
                  </div>

                  <div className="flex items-center space-x-0">
                    <div className=" text-white p-4 rounded-full">
                      <img src={about4} className="h-16 w-16" />
                    </div>
                    <h3 className="text-l font-semibold">
                      Achieving High Standards
                    </h3>
                  </div>

                  <div className="flex items-center space-x-0">
                    <div className=" text-white p-0 rounded-full">
                      <img src={about3} className="h-16 w-16" />
                    </div>
                    <h3 className="text-l font-semibold">
                      Partnership In Discovery
                    </h3>
                  </div>

                  <div className="flex items-center space-x-0">
                    <div className=" text-white p-4 rounded-full">
                      <img src={about2} className="h-16 w-16" />
                    </div>
                    <h3 className="text-l font-semibold">
                      Foundation for the future
                    </h3>
                  </div>
                </div>

                <p className="mt-8">
                  Nulla pretium tincidunt ex, vehicula phareba libero suscipit
                  quis. Vestebulum ante ipsum primis in faucibus orci iuctus et
                  ultricir=es posteruios cubila curae.{" "}
                </p>

                <button className="mt-10 bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600">
                  MORE ABOUT US ↗
                </button>
              </div>

              {/* Image Section */}
              <div className="grid grid-cols-2 grid-rows-2 gap-8 ">
                <img
                  className="rounded-xl border border-dashed border-orange-500 h-80 w-full"
                  src={about5}
                  alt="Image 1"
                />
                <img
                  className="rounded-xl border border-dashed border-yellow-500 h-80 w-full"
                  src={about6}
                  alt="Image 2"
                />
                <img
                  className="rounded-xl border border-dashed border-green-500 h-80 w-full"
                  src={about7}
                  alt="Image 3"
                />
                <img
                  className="rounded-xl border border-dashed border-orange-500 h-80 w-full"
                  src={about8}
                  alt="Image 4"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative  text-white py-16">
          {/* Stats content */}
          <div className="relative bg-primary text-primary-foreground overflow-hidden rounded-lg">
            {/* Top wave */}
            <svg
              className="absolute top-0 left-0 right-0 w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="orange"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>

            {/* Content */}
            <div className="container mx-auto px-4 py-24 relative z-10">
              <div className="flex flex-wrap justify-between items-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/4 text-center px-4 mb-8 md:mb-0 relative"
                  >
                    <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-sm">{stat.text}</p>
                    {index < stats.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 w-px h-12 bg-primary-foreground/20 transform -translate-y-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom wave */}
            <svg
              className="absolute bottom-0 left-0 right-0 w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="orange"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
        {/* We Are Best in Education Section */}
        <section className="bg-[#f5f2e9] py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Decorative elements */}
            <Star className="text-yellow-400 absolute top-4 left-4 w-8 h-8" />
            <Star className="text-yellow-400 absolute top-8 right-8 w-6 h-6" />
            <Star className="text-green-400 absolute bottom-8 left-1/4 w-5 h-5" />
            <Star className="text-orange-400 absolute top-1/3 right-4 w-7 h-7" />
            <Star className="text-blue-400 absolute bottom-16 left-8 w-6 h-6" />
            <Star className="text-purple-400 absolute top-1/2 left-1/3 w-4 h-4" />
            <Star className="text-pink-400 absolute bottom-1/4 right-1/4 w-5 h-5" />
            <Pencil className="text-gray-600 absolute bottom-16 right-8 w-8 h-8 transform rotate-45" />
            <BookOpen className="text-green-600 absolute top-24 left-1/4 w-10 h-10" />
            <Lightbulb className="text-yellow-600 absolute bottom-32 right-1/3 w-9 h-9" />

            {/* Curvy arrow */}
            <svg
              className="absolute top-20 left-8 w-16 h-16 text-orange-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
              <path d="M12 9v12" />
              <path d="M9 3l3 3 3-3" />
            </svg>

            {/* Mathematical symbols */}
            <span className="absolute top-36 right-12 text-3xl font-bold text-gray-400">
              +
            </span>
            <span className="absolute bottom-24 left-16 text-3xl font-bold text-gray-400">
              ÷
            </span>
            <span className="absolute top-1/2 left-8 text-3xl font-bold text-gray-400">
              ×
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-black text-center mb-10 relative z-10">
              We Are Best In Education
            </h1>

            {/* Mission, Who We Are, Our Approach */}
            <div className="space-y-10 relative z-10">
              {/* Mission */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-[#ffa726] p-8 rounded-xl border border-dashed border-black">
                <div className="flex-1">
                  <h2 className="text-white text-2xl font-bold">Our Mission</h2>
                  <p className="mt-4 text-black font-bold">
                    {loading ? "Loading..." : mission}
                  </p>
                </div>
                <img
                  src="https://i0.wp.com/oneuplibrary.com/wp-content/uploads/2024/01/textimage3.png?resize=200%2C300&ssl=1"
                  alt="Child"
                  className="w-20 h-auto"
                />
              </div>

              {/* Who We Are */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-[#66bb6a] p-8 rounded-xl border border-dashed border-black">
                <img
                  src="https://i0.wp.com/oneuplibrary.com/wp-content/uploads/2024/01/textimage1.png?resize=200%2C300&ssl=1"
                  alt="Child"
                  className="w-20 h-auto "
                />
                <div className="flex-1">
                  <h2 className="text-white text-2xl font-bold">Who We Are</h2>
                  {/* School History Section */}
                  <p className="mt-4 text-black font-bold">
                    {loadingHistory ? "Loading..." : schoolHistory}
                  </p>
                </div>
              </div>

              {/* Our Approach */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-[#42a5f5] p-8 rounded-xl border border-dashed border-black">
                <div className="flex-1">
                  <h2 className="text-white text-2xl font-bold">
                    Our Approach
                  </h2>
                  <p className="mt-4 text-black font-bold">
                    {loadingVision ? "Loading..." : vision}
                  </p>
                </div>
                <img
                  src="https://i0.wp.com/oneuplibrary.com/wp-content/uploads/2024/01/textimage2.png?resize=200%2C300&ssl=1"
                  alt="Child"
                  className="w-20 h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Committed to Excellence Section */}
        <div className="bg-blue-500  flex justify-between items-center p-10 rounded-lg mt-10">
          {/* Left Side Text Section */}
          <div className="text-white ">
            <h3 className="text-sm font-semibold">A QUALITY SCHOOL</h3>
            <p className="text-3xl font-bold mt-4">Principal Message</p>
            <h1 className="mt-6 text-3xl">
              {loadinge ? "Loading..." : principalMessage}
            </h1>
            <button className="mt-8 bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700">
              Get Started
            </button>
          </div>

          {/* Right Side Image Section */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative">
              {principalImage ? (
                <img
                  src={principalImage}
                  alt="Principal"
                  className="rounded-lg shadow-lg"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </div>
        </div>

        {/* Age Group Categories */}
        <div className="flex flex-col items-center min-h-screen bg-[#F6F2E9] p-10 mt-24">
          <h2 className="text-green-600 text-3xl uppercase mb-10">
            Our Programs
          </h2>
          <h1 className="text-3xl font-bold mb-16 text-center">
            Learning, friendship, and fun for <br /> Everyone Making Your Child
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
            {/* Toddler Card */}
            <div className="bg-[#FBE8E8] p-6 rounded-lg shadow-lg text-center">
              <img
                src={about9} // Replace with appropriate image
                alt="Toddler"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Toddler</h3>
              <p className="text-sm">
                An inspired approach to education and life-long learning. Be
                nice. Work hard. Be safe. Be kind. Be smart. Bringing Excellence
                To Students.
              </p>
            </div>

            {/* Preschool Card */}
            <div className="bg-[#E7F5DC] p-6 rounded-lg shadow-lg text-center">
              <img
                src={about10} // Replace with appropriate image
                alt="Preschool"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Preschool</h3>
              <p className="text-sm">
                Children blossoming in a nurturing environment. Committed To
                Excellence Education. Conversation, confidence, creativity.
              </p>
            </div>

            {/* School Aged Card */}
            <div className="bg-[#FBE8E8] p-6 rounded-lg shadow-lg text-center">
              <img
                src={about12} // Replace with appropriate image
                alt="School Aged"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">School Aged</h3>
              <p className="text-sm">
                Creating Our Children’s Future. Dedicated To Excellence.
                Dedicated to the growth of young children. Dedicated to
                individuality.
              </p>
            </div>

            {/* Teens Card */}
            <div className="bg-[#FDE8CD] p-6 rounded-lg shadow-lg text-center">
              <img
                src={about11} // Replace with appropriate image
                alt="Teens"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Teens</h3>
              <p className="text-sm">
                Excellence in early childhood education. Expect The Best For
                growing and learning. Gather to learn. Grow Explore Discover.
              </p>
            </div>
          </div>
        </div>
        {/* Staff Section */}
        <div className="relative flex flex-col items-center min-h-80 overflow-hidden">
          {/* SVG Background */}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Amazing Results Businesses <br /> Of Any Kind Our Kids
            </h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
              Curabitur Finibus Odio Ac Lectus Semper Vestibulum Sit Amet Vel
              Ligula. Pellentesque Posuere Diam Id Ultrices Cursus. Integer
              Ipsum Arcu, Rutrum Ac Quam Quis, Vulputate Efficitur Sem. Duis
              Eget Condimentum Odio. Nulla Vel Fermentum Tellus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl p-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-dashed border-2 border-gray-300">
                <img
                  src={about13} // Replace with appropriate image
                  alt="George Timothy"
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-pink-500">
                  GEORGE TIMOTHY
                </h3>
                <p className="text-sm text-gray-500 mb-2">Teacher</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-dashed border-2 border-gray-300">
                <img
                  src={about14} // Replace with appropriate image
                  alt="Kenneth Brian"
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">KENNETH BRIAN</h3>
                <p className="text-sm text-gray-500">Teacher</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-dashed border-2 border-gray-300">
                <img
                  src={about15} // Replace with appropriate image
                  alt="Angela Brenda"
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">ANGELA BRENDA</h3>
                <p className="text-sm text-gray-500">Teacher</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center border-dashed border-2 border-gray-300">
                <img
                  src={about16} // Replace with appropriate image
                  alt="Nicholas Jonathan"
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">NICHOLAS JONATHAN</h3>
                <p className="text-sm text-gray-500">Teacher</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto p-4">
          {/* Loading message */}
          {/* <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">
              Loading Message: {loadingMessage}
            </h2>
          </div> */}

          {/* Testimonials */}
          <section className="mt-32 mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Parents Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                  text={testimonial.text}
                  bgColor={testimonial.bgColor}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}
