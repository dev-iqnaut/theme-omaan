import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ContactPage() {
  const [email, setEmail] = useState(""); // State for email
  const [number, setNumber] = useState([]); // State for phone numbers (array)
  const [facebook, setFacebook] = useState(""); // State for Facebook link
  const [linkedin, setLinkedin] = useState(""); // State for LinkedIn link
  const [loadingFaq, setLoadingFaq] = useState(true); // State to manage loading

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

  const getContact = async () => {
    setLoadingFaq(true); // Set loading state to true before fetching data

    try {
      const id = "www.aforapple.in"; // Document ID
      const docRef = doc(db, "sites", id); // Reference to the Firestore document
      const snapshot = await getDoc(docRef); // Fetch the document

      if (snapshot.exists()) {
        const listData = snapshot.data();

        if (listData && listData.Contact) {
          // Set the values from Firestore or default fallback values
          setEmail(listData.Contact.email || "No email available");
          setNumber(listData.Contact.number || ["No number available"]);
          setFacebook(
            listData.Contact.facebook_link || "No Facebook link available"
          );
          setLinkedin(
            listData.Contact.linkedin_link || "No LinkedIn link available"
          );
        } else {
          // Fallback if Contact data doesn't exist in the document
          setEmail("No email available");
          setNumber(["No number available"]);
          setFacebook("No Facebook link available");
          setLinkedin("No LinkedIn link available");
        }
      } else {
        console.log("No such document!");
        // Set fallback values if document is missing
        setEmail("No email available");
        setNumber(["No number available"]);
        setFacebook("No Facebook link available");
        setLinkedin("No LinkedIn link available");
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      // Set fallback values in case of an error
      setEmail("Failed to load email");
      setNumber(["Failed to load number"]);
      setFacebook("Failed to load Facebook link");
      setLinkedin("Failed to load LinkedIn link");
    } finally {
      setLoadingFaq(false); // Stop the loading indicator
    }
  };

  useEffect(() => {
    getContact(); // Fetch Contact data on component mount
  }, []);

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
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">Our Address</h3>
              <p className="text-gray-600">
                123 Main Street, Anytown, ST 12345
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Hours of Operation</h3>
              <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
              <p className="text-gray-600">Saturday: 10am - 2pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Contact</h3>
              <p className="text-gray-600">
                {loadingFaq
                  ? "Loading..."
                  : number.length > 0
                  ? number.join(", ")
                  : "No number available"}
              </p>
              <p className="text-gray-600">
                {loadingFaq ? "Loading..." : email}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Follow Us</h3>
              <div className="flex space-x-6 mt-4">
                {/* Facebook Icon */}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                {/* Twitter Icon */}
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                {/* Instagram Icon */}
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.974.974 1.243 2.242 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.974.974-2.242 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.974-.974-1.243-2.242-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.974-.974 2.242-1.243 3.608-1.305 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.38.062-2.588.326-3.636 1.374-1.048 1.048-1.312 2.256-1.374 3.636-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.38.326 2.588 1.374 3.636 1.048 1.048 2.256 1.312 3.636 1.374 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.38-.062 2.588-.326 3.636-1.374 1.048-1.048 1.312-2.256 1.374-3.636.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.38-.326-2.588-1.374-3.636-1.048-1.048-2.256-1.312-3.636-1.374-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.203 0-5.797 2.594-5.797 5.797s2.594 5.797 5.797 5.797 5.797-2.594 5.797-5.797-2.594-5.797-5.797-5.797zm0 9.655c-2.129 0-3.858-1.729-3.858-3.858s1.729-3.858 3.858-3.858 3.858 1.729 3.858 3.858-1.729 3.858-3.858 3.858zm6.406-9.67c-.796 0-1.442-.646-1.442-1.442 0-.796.646-1.442 1.442-1.442.796 0 1.442.646 1.442 1.442 0 .796-.646 1.442-1.442 1.442z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
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
