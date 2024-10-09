import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to check if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-2 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-orange-50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-black px-4 md:px-8">
        {/* Left Section: Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-xs sm:text-sm">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span className="hidden sm:inline">256D Quadra Street Victoria Road, New York, USA</span>
            <span className="sm:hidden">New York, USA</span> {/* Shorten text for small screens */}
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Support@kidsschool.com
          </span>
        </div>

        {/* Right Section: Phone and Social Media */}
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4 text-xs sm:text-sm mt-2 md:mt-0">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            +1-256 854 6524
          </span>
          {/* Social Icons */}
          <div className="flex space-x-3 md:space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
