import React, { useEffect, useRef, useState } from 'react';
import event1 from '../assets/event1.jpg'; 
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';
import event6 from '../assets/event6.jpg';
import event7 from '../assets/event7.jpg';
import event8 from '../assets/event8.jpg';
import vdo from '../assets/vdo.mp4'; // Video file
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';

const events = [
  { title: 'Community Service Event', date: 'SEP 23', image: event2 },
  { title: 'Trunk-or-Treat Party', date: 'OCT 28', image: event1 },
  { title: 'Parent-Child Basketball', date: 'NOV 15', image: event3 },
  { title: 'Video Game Tournament', date: 'DEC 05', image: event4 },
  { title: 'Community Service Event', date: 'SEP 23', image: event2 },
  { title: 'Trunk-or-Treat Party', date: 'OCT 28', image: event1 },
  { title: 'Parent-Child Basketball', date: 'NOV 15', image: event3 },
  { title: 'Video Game Tournament', date: 'DEC 05', image: event4 },
];

const testimonials = [
  { name: 'Jessica Lisa', image: event6, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Michael Scott', image: event5, text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { name: 'Amanda Smith', image: event7, text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  { name: 'John Doe', image: event8, text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
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
      { rootMargin: '100px' }
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
    <div ref={imgRef} className={`bg-gray-200 transition-opacity duration-500 ease-in-out ${className}`}>
      {isLoaded ? (
        <img src={src} alt={alt} className={`w-full h-full object-cover transition-opacity duration-700 ${className}`} />
      ) : (
        <div className="animate-pulse bg-gray-300 w-full h-full"></div>
      )}
    </div>
  );
}

export default function SchoolEvents() {
  const videoRef = useRef(null);

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
      { threshold: 0.5 } // Video starts playing when 50% of it is in the viewport
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
      <header className="bg-blue-200 p-24">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center font-bold">School Events</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto  p-4">
        {/* Upcoming Events Section */}
        <section className="p-20 " >
          <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div key={index} className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="w-1/3">
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

                {/* Date Section */}
                <div className="w-1/6 flex items-center justify-center">
                  <div className="text-center bg-gray-200 p-4 rounded-full">
                    <span className="block text-2xl font-bold text-gray-900">{event.date.split(' ')[0]}</span>
                    <span className="block text-lg text-gray-600">{event.date.split(' ')[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <div className='mb-14'>
          <video
            ref={videoRef}
            className="w-full h-96 rounded-lg object-cover"
            src={vdo}
            preload="auto"
            muted // Muted by default for autoplay behavior
          ></video>
        </div>

        {/* Testimonials Section */}
        <h2 className="text-3xl font-bold text-center my-8">Our Testimonials</h2>
        <p className=" text-center my-8">Phasellus Sem Lorem, Blandit Vitae Lacus Ac, Sodalerus Bobadenium Sepien. In Sodaelius <br /> Vestilbulrm Qyarm Eget Oellentedqye. Aliquam Luctus Lorem Sir Amet.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-orange-400' : 'bg-yellow-400'}`}>
              <LazyImage src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h4 className="font-bold text-center mb-2">{testimonial.name}</h4>
              <p className="text-center text-sm">{testimonial.text}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <Navbar />
    </div>
  );
}
