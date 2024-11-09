import React, { useEffect, useRef, useState } from "react";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
import event5 from "../assets/event5.jpg";
import event6 from "../assets/event6.jpg";
import event7 from "../assets/event7.jpg";
import event8 from "../assets/event8.jpg";
import vdo from "../assets/vdo.mp4";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const testimonials = [
  {
    name: "Jessica Lisa",
    image: event6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Michael Scott",
    image: event5,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    name: "Amanda Smith",
    image: event7,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    name: "John Doe",
    image: event8,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
];

function LazyImage({ src, alt, className }) {
  const imgRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(imgRef.current);
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`bg-gray-200 transition-opacity duration-500 ease-in-out ${className}`}
    >
      {isLoaded ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 ${className}`}
        />
      ) : (
        <div className="animate-pulse bg-gray-300 w-full h-full"></div>
      )}
    </div>
  );
}

export default function SchoolEvents() {
  const videoRef = useRef(null);
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const events = [
    {
      title: message[0]?.title || "No title",
      date: message[0]?.date?.toDate().toDateString() || "No date",
      image: message[0]?.url || event2, // Fallback to a default image
    },
    {
      title: message[1]?.title || "No title",
      date: message[1]?.date?.toDate().toDateString() || "No date",
      image: message[1]?.url || event3,
    },
    {
      title: news[0]?.title || "No title",
      date: news[0]?.date?.toDate().toDateString() || "No date",
      image: news[0]?.url || event4,
    },
    {
      title: news[1]?.title || "No title",
      date: news[1]?.date?.toDate().toDateString() || "No date",
      image: news[1]?.url || event1,
    },
    { title: "Community Service Event", date: "SEP 23", image: event2 },
    { title: "Trunk-or-Treat Party", date: "OCT 28", image: event1 },
    { title: "Parent-Child Basketball", date: "NOV 15", image: event3 },
    { title: "Video Game Tournament", date: "DEC 05", image: event4 },
  ];

  const getMessage = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const listRef = doc(db, "sites", id); // Firestore document reference
      const snapshot = await getDoc(listRef);
      const siteData = snapshot.data();

      if (siteData && siteData.newsEvents) {
        // Check if newsEvents exists
        setMessage(siteData.newsEvents.announcement || []);
        setNews(siteData.newsEvents.news || []);
      } else {
        console.log("No newsEvents data available");
        setMessage([]);
        setNews([]);
      }
      console.log(siteData);
    } catch (error) {
      console.log("Error fetching data from Firebase:", error);
      setMessage("Failed to load message");
      setNews([]); // Clear news on error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getMessage(); // Call fetch function on component mount
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="bg-[#f5f2e9] min-h-screen">
      <TopBar />
      {/* Header */}
      <header className="bg-blue-200 p-6 md:p-12 lg:p-24 text-center">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            School Events
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8 lg:p-12">
        {/* Upcoming Events Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="md:w-1/3">
                  <LazyImage
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Event Details Section */}
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                    Book Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <div className="mb-12">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg object-cover"
            src={vdo}
            preload="auto"
            muted // Muted by default for autoplay behavior
          ></video>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center my-8">
          Our Testimonials
        </h2>
        <p className="text-center my-4">
          Phasellus Sem Lorem, Blandit Vitae Lacus Ac, Sodalerus Bobadenium
          Sepien. In Sodaelius <br /> Vestilbulrm Qyarm Eget Oellentedqye.
          Aliquam Luctus Lorem Sir Amet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                index % 2 === 0 ? "bg-orange-400" : "bg-yellow-400"
              }`}
            >
              <LazyImage
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="font-bold text-center mb-2">{testimonial.name}</h4>
              <p className="text-center text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <Navbar />
    </div>
  );
}
