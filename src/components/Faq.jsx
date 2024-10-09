import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import TopBar from './TopBar'

export default function FAQPage() {
  // State to manage which question is open
  const [openIndex, setOpenIndex] = useState(null)

  // Toggle the open index
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // FAQ data (you can add more questions as needed)
  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows returns within 30 days of purchase with a valid receipt. Products must be in original packaging and unused.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to selected countries. Please check our shipping policy for detailed information.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can track your order using the provided link.'
    },
    {
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be changed or canceled within 24 hours of placing them. Contact our support team for assistance.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay. For detailed information, please visit our payment methods page.'
    }
  ]

  return (
    <div className="container mx-auto bg-[#f5f2e9]">
      <TopBar />
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-400 to-blue-500 p-24 text-white text-center relative overflow-hidden">
        <h1 className="text-4xl font-extrabold tracking-wider">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg">Find answers to the most common questions below</p>
        
        {/* Decorative elements */}
        <div className="absolute top-8 left-8">
          <div className="w-16 h-16 bg-pink-500 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-46 right-8">
          <div className="w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
      </header>
      
      {/* FAQ Section */}
      <div className="my-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Common Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto relative">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-all duration-300"
            >
              {/* Question */}
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span className={`ml-2 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </span>
              </button>
              {/* Answer (Collapsible Section) */}
              <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-gray-600">
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
  )
}
