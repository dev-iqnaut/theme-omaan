import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Adjust the path to your firebase configuration file
import { doc, getDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import {
  FaBook,
  FaCalendarAlt,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa"; // Icons for decoration

const AcademicsPage = () => {
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-[#f5f2e9] min-h-screen relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="star-pattern opacity-20"></div>
      </div>

      <TopBar />
      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8 mt-20">
          <span className="flex items-center justify-center gap-2">
            Academics <FaBook className="text-yellow-500" />
          </span>
        </h1>

        {/* Academic Resources */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
            <FaFileAlt className="text-yellow-500" /> Academic Resources
          </h2>
          <ul className="space-y-2">
            {data?.academicResources &&
              Object.entries(data.academicResources).map(
                ([grade, resource]) => (
                  <li key={grade} className="flex justify-between">
                    <span className="font-medium">{grade}:</span>
                    {resource ? (
                      <a
                        href={resource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                      >
                        View Resource
                      </a>
                    ) : (
                      <span className="text-gray-500">
                        No resource available
                      </span>
                    )}
                  </li>
                )
              )}
          </ul>
        </div>

        {/* Academic Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
            <FaCalendarAlt className="text-yellow-500" /> Academic Calendar
          </h2>
          <a
            href={data?.academics?.academicsCalender}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
          >
            View Academic Calendar
          </a>
        </div>

        {/* Exam Schedule */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
            <FaCalendarAlt className="text-yellow-500" /> Exam Schedule
          </h2>
          <a
            href={data?.academics?.examSchedule}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
          >
            View Exam Schedule
          </a>
        </div>

        {/* Admissions Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500" /> Admissions
          </h2>

          {/* Document List */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Documents</h3>
            <ul className="space-y-2">
              {data?.admissions?.documentList?.map((document, index) => (
                <li key={index} className="text-gray-700">
                  {document}
                </li>
              ))}
            </ul>
          </div>

          {/* Fee Structure */}
          {data?.admissions?.feeStructure ? (
            <div>
              <h3 className="text-xl font-semibold">Fee Structure</h3>
              <a
                href={data.admissions.feeStructure}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
              >
                View Fee Structure
              </a>
            </div>
          ) : (
            <span className="text-gray-500">Fee structure not available</span>
          )}
        </div>

        {/* CBSE Compliance Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500" /> CBSE Compliance
          </h2>
          <ul className="space-y-2">
            {data?.cbseCompliance?.annualReport && (
              <li>
                <span className="font-medium">Annual Report: </span>
                <a
                  href={data.cbseCompliance.annualReport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                >
                  View Annual Report
                </a>
              </li>
            )}
            {data?.cbseCompliance?.cbseAffiliation && (
              <li>
                <span className="font-medium">CBSE Affiliation: </span>
                <a
                  href={data.cbseCompliance.cbseAffiliation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                >
                  View CBSE Affiliation
                </a>
              </li>
            )}
            {data?.cbseCompliance?.mandatoryPublicDisclosure && (
              <li>
                <span className="font-medium">
                  Mandatory Public Disclosure:{" "}
                </span>
                <a
                  href={data.cbseCompliance.mandatoryPublicDisclosure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                >
                  View Mandatory Public Disclosure
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Navbar />
      <Footer />

      {/* CSS for the decorative background */}
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

export default AcademicsPage;
