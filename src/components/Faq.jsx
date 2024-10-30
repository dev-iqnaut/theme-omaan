import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [FAQ, setFaq] = useState(""); // State for FAQ
  const [privacy, setPolicy] = useState([]); // State for privacy policies (array)
  const [terms, setTerms] = useState([]);
  const [content, setContent] = useState([]); // State for content
  const [loadingFaq, setLoadingFaq] = useState(true);

  // Fetch FAQ, Privacy Policy, and Terms and Conditions data from Firestore
  const getFaq = async () => {
    try {
      const id = "www.aforapple.in"; // Document ID
      const docRef = doc(db, "sites", id); // Reference to the Firestore document
      const snapshot = await getDoc(docRef); // Fetch the document
      const listData = snapshot.data();

      // Check if 'policies' exists and fetch FAQ, Privacy Policy, and Terms and Conditions
      if (listData && listData.siteData && listData.siteData.policies) {
        setFaq(listData.siteData.policies.faq || "No FAQ available");

        const privacyPolicies = listData.siteData.policies.privacyPolicy || [];
        setPolicy(
          Array.isArray(privacyPolicies) ? privacyPolicies : [privacyPolicies]
        );

        const termsCondition =
          listData.siteData.policies.termsandConditions || [];
        setTerms(
          Array.isArray(termsCondition) ? termsCondition : [termsCondition]
        );

        const content = listData.siteData.parentsCorner.content || [];
        setContent(Array.isArray(content) ? content : [content]);
      } else {
        setFaq("No FAQ available");
        setPolicy(["No privacy policy available"]);
        setTerms(["No terms and conditions available"]);
        setContent(["No content available"]);
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      setFaq("Failed to load FAQ");
      setPolicy(["Failed to load privacy policy"]);
      setTerms(["Failed to load terms and conditions"]);
      setContent(["Failed to load content"]);
    } finally {
      setLoadingFaq(false);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);

  // Function to toggle the visibility of FAQ answers
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dynamic FAQ array with privacy, terms, and FAQ data
  const faqs = [
    {
      question: privacy[0],
      answer:
        "Our return policy allows returns within 30 days of purchase with a valid receipt. Products must be in original packaging and unused.",
    },
    {
      question: "Terms & Condition",
      answer: terms[0],
    },
    {
      question: "School Policies",
      answer: content[0],
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Orders can be changed or canceled within 24 hours of placing them. Contact our support team for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. For detailed information, please visit our payment methods page.",
    },
  ];

  return (
    <div className="container mx-auto bg-[#f5f2e9]">
      <TopBar />
      <header className="bg-gradient-to-r from-teal-400 to-blue-500 p-6 sm:p-8 md:p-16 lg:p-24 text-white text-center relative overflow-hidden flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {loadingFaq ? "Loading..." : FAQ || "No FAQ available"}
        </p>

        <div className="absolute top-8 left-8">
          <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-pink-500 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-46 right-8">
          <div className="w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
      </header>

      <div className="my-6 md:my-12 px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-gray-800 text-center">
          Common Questions
        </h2>
        <div className="space-y-4 md:space-y-6 max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto relative">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left text-sm sm:text-base md:text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span
                  className={`ml-2 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 sm:h-6 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`mt-3 sm:mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar />
      <Footer />
    </div>
  );
}
