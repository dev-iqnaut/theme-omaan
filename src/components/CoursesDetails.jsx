import course1 from '../assets/course1.jpg';
import course2 from '../assets/course2.jpg';
import course3 from '../assets/course3.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

export default function CourseDetail() {
    return (
      <div className="bg-[#f5f2e9] min-h-screen">
       <TopBar />
        {/* Header */}
        <header className="bg-orange-500 py-28 relative">
          <div className="container mx-auto ">
            <h1 className="text-5xl font-bold text-center text-white">Courses Detail</h1>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="container max-w-7xl mx-auto p-6 flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-2/3 pr-0 lg:pr-10 mt-14">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <img src={course1} alt="Children learning" className="w-full h-56 object-cover rounded-lg" />
              <img src={course2} alt="Children learning" className="w-full h-56 object-cover rounded-lg" />
              <img src={course3} alt="Children learning" className="w-full h-56 object-cover rounded-lg" />
              <img src={course1} alt="Children learning" className="w-full h-56 object-cover rounded-lg" />
            </div>
  
            {/* Course Description */}
            <h2 className="text-4xl font-bold mb-6">Creating Our Children's Future</h2>
            <p className="text-lg mb-6">
              Suspendisse dignissim, velit sed mattis ultricies, orci quam auctor odio, convallis facilisis diam elit pellentesque massa. Curabitur porta dui sit amet ligula elementum finibus augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
  
            {/* Program Aspects */}
            <div className="flex flex-wrap justify-between mb-10">
              {['Tradition of Excellence', 'Partnering in Discovery', 'Achieving High Standards', 'Foundation for the Future'].map((aspect, index) => (
                <div key={index} className="w-1/2 md:w-1/4 flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">{aspect}</span>
                </div>
              ))}
            </div>
  
            <h3 className="text-3xl font-bold mb-6">Bringing Excellence To Students.</h3>
            <p className="text-lg mb-10">
              Suspendisse dignissim, velit sed mattis ultricies, orci quam auctor odio, convallis facilisis diam elit pellentesque massa. Curabitur porta dui sit amet ligula elementum finibus augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
  
            {/* Registration Form */}
            <h3 className="text-3xl font-bold mb-6">Register For Your Child</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-3 text-lg border border-gray-300 rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-3 text-lg border border-gray-300 rounded" />
              <input type="tel" placeholder="Your Phone" className="w-full p-3 text-lg border border-gray-300 rounded" />
              <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg hover:bg-purple-700 transition duration-300">
                Submit Now
              </button>
            </form>
          </div>
  
          {/* Right Column */}
          <div className="w-full lg:w-1/3 mt-14 lg:mt-14">
            {/* Information Box */}
            <div className="bg-green-500 text-white p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-bold mb-6">Information</h3>
              <ul className="space-y-3 text-lg">
                <li><strong>Start Date:</strong> August 15, 2023</li>
                <li><strong>Duration:</strong> 4 Weeks</li>
                <li><strong>Time:</strong> 9:00 AM - 12:00 PM</li>
                <li><strong>Age:</strong> 5-12 Years</li>
                <li><strong>Class Size:</strong> 20 Students</li>
                <li><strong>Fee:</strong> $199</li>
                <li><strong>Language:</strong> English</li>
              </ul>
            </div>
  
            {/* Get In Touch Form */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-3 text-lg border border-gray-300 rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-3 text-lg border border-gray-300 rounded" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 text-lg border border-gray-300 rounded"></textarea>
                <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
                  Send
                </button>
              </form>
            </div>
  
           {/* Contact Info */}
<div className="bg-gradient-to-br from-white to-blue-50 p-20 rounded-lg shadow-md mb-10 text-center border border-blue-200 relative">
  {/* Decorative Circles */}
  <div className="absolute top-5 right-5 w-10 h-10 bg-orange-300 rounded-full opacity-20"></div>
  <div className="absolute bottom-5 left-5 w-16 h-16 bg-orange-300 rounded-full opacity-20"></div>

  <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
  
  {/* Decorative Line */}
  <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
  
  <ul className="space-y-6 text-lg">
    {/* Phone Number */}
    <li className="flex items-center justify-center">
      <svg className="w-6 h-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      +1 (123) 456-7890
    </li>
    
    {/* Divider */}
    <div className="border-b border-gray-200 w-1/2 mx-auto"></div>
    
    {/* Email Address */}
    <li className="flex items-center justify-center">
      <svg className="w-6 h-6 mr-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      info@example.com
    </li>
  </ul>
  
  {/* Decorative Line */}
  <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
</div>

          </div>
        </main>
        <Navbar />
        <Footer />
      </div>
    );
  }
