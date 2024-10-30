import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ContactPage() {
  const [data, setData] = useState(null); // Holds full document data from Firestore
  const [focus, setFocus] = useState(""); // Focus state for display
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

        setData(siteData); // Set the main siteData object in state
        setFocus(siteData.aboutUs?.focus || "No focus available"); // Set focus text
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto bg-[#f5f2e9]">
      <TopBar />
      {/* Header with decorative elements */}
      <header className="bg-gradient-to-r from-orange-400 to-pink-500 p-24 text-white text-center relative overflow-hidden">
        <div className="absolute left-4 top-4">
          <div className="w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
        </div>
        <h1 className="text-4xl font-extrabold tracking-wider">Contact Us</h1>
        <p className="mt-2 text-lg">
          We'd love to hear from you. Reach out anytime!
        </p>
        <div className="absolute right-4 top-4">
          <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 px-6">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 px-4 rounded-md hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-4 text-orange-400 transform rotate-45 text-6xl">
            ❋
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-yellow-400 transform -rotate-45 text-4xl">
            ✶
          </div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Contact Information
          </h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Our Address</h3>
                <p className="text-gray-600">{data.contactUs.location}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Hours of Operation</h3>
                <p className="text-gray-600">{data.contactUs.openingHours}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Contact</h3>
                <p className="text-gray-600">
                  Phone: {data.contactUs.phoneNumber}
                </p>
                <p className="text-gray-600">Email: {data.contactUs.email}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Follow Us</h3>
                <div className="flex space-x-6 mt-4">
                  <a
                    href={data.contactUs.facebookLink}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Facebook
                  </a>
                  <a
                    href={data.contactUs.twitterLink}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    Twitter
                  </a>
                  <a
                    href={data.contactUs.linkedinLink}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-14">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}
