import kidz from '../assets/kidz.png';
import Footer from './Footer';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import TopBar from './TopBar';

export default function SchoolBanner() {
  return (
    <div className="bg-[#f5f2e9] min-h-screen flex flex-col justify-between relative overflow-hidden">
      <TopBar />

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8 lg:p-20 relative mb-4">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8"> 
          {/* Left side with images */}
          <div className="relative w-full md:w-3/4 lg:w-2/3 mb-12 md:mb-0"> 
            <img 
              src={kidz}
              alt="Smiling girl" 
              className="relative z-10 w-full mx-auto object-cover" 
            />
          </div>

          {/* Right side with text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-orange-500 font-semibold text-lg md:text-xl mb-2">A QUALITY SCHOOL</h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4"> 
              Committed To Excellence <br /> In Education.
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
              Sed commodo nulla augue, in interdum turpis aliquam hendrerit. Donec fringilla scelerisque mi, accumsan commodo ligula. Nullam egestas felis non nunc finibus ultrices.
            </p>
            <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
              GET STARTED →
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden"> 
        {/* Dots */}
        <div className="absolute top-5 left-5 w-4 h-4 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-3 h-3 bg-blue-500 rounded-full"></div>

        {/* Stars */}
        <div className="absolute top-20 right-32 text-yellow-400 text-4xl">★</div>
        <div className="absolute top-40 right-10 text-pink-500 text-2xl">★</div>
        <div className="absolute bottom-10 left-32 text-yellow-500 text-3xl">★</div>

        {/* Larger Dots and abstract shapes */}
        <div className="absolute bottom-24 right-1/4 w-12 h-12 bg-purple-300 rounded-full opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-orange-200 rounded-full opacity-75"></div>

        {/* Small Abstract Decorations */}
        <div className="absolute top-1/2 left-20 text-green-300 text-5xl">•</div>
        <div className="absolute bottom-1/4 right-1/4 text-yellow-300 text-4xl">•</div>
        <div className="absolute top-2/3 left-10 text-red-300 text-2xl">★</div>
        <div className="absolute top-1/4 left-1/3 text-blue-400 text-6xl">•</div>

        {/* Decorations */}
        <div className="absolute top-12 left-2/3 transform -translate-x-1/2 w-4 h-4 bg-orange-300 rounded-full animate-bounce"></div>
        <div className="absolute top-10 left-1/3 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full"></div>
        <div className="absolute top-2 right-1/4 transform translate-x-1/2 text-pink-500 text-4xl">★</div>
      </div>

      {/* Navbar at the top */}
      <Navbar />

      <AboutUs />
    </div>
  );
}
