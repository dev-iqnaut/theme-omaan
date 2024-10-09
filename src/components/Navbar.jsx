import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'AboutUs', href: '/aboutus' },
    {
      name: 'Pages',
      href: '#',
      dropdown: [
        { name: 'TeachersPage', href: '/teachers' },
        { name: 'PricePlan', href: '/priceplan' },
        { name: 'FAQPage', href: '/faq' },
        { name: 'NotFound', href: '/notfound' },
        { name: 'StudentsGallery', href: '/studentsgallery' }
      ]
    },
    {
      name: 'Events',
      href: '#',
      dropdown: [
        { name: 'Events', href: '/events' },
        { name: 'EventDetails', href: '/eventsdetails' }
      ]
    },
    {
      name: 'Our Courses',
      href: '#',
      dropdown: [
        { name: 'CoursesPage', href: '/courses' },
        { name: 'CourseDetail', href: '/coursesdetails' }
      ]
    },
    {
      name: 'Blog',
      href: '#',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'BlogDetails', href: '/blogdetails' }
      ]
    },
    { name: 'ContactPage', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-8 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-orange-50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={logo} alt="Your Company" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-center flex-1">
            <div className="flex space-x-4">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-0.5 rounded-md text-sm font-medium transition-colors flex items-center"
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </a>
                  )}

                  {/* Dropdown menu */}
                  {item.dropdown && openDropdown === index && (
                    <div className="absolute mt-4 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hide Sign In Button on Large Screens */}
          <div className="hidden sm:flex items-center">
            <a
              href="/signin"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden ml-2">
            <button
              className="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded-md focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="text-gray-600 hover:text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium flex items-center w-full"
                  >
                    {item.name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === index ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Mobile Dropdown */}
                  {openDropdown === index && (
                    <div className="ml-4">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md text-base"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Sign In Button for Mobile Menu */}
        <div className="px-2 pb-3">
          <a
            href="/signin"
            className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
