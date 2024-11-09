import details1 from "../assets/details1.png";
import details2 from "../assets/details2.png";
import details3 from "../assets/details3.png";
import details4 from "../assets/details4.png";
import details5 from "../assets/details5.png";
import details6 from "../assets/details6.jpg";

import course1 from "../assets/course1.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function EventDetails() {
  const eventPoints = [
    "Give your princess a princess look",
    "Lovely outfits for a fun-filled day",
    "Planting the kids in the planting plot",
    "Creative games for children",
    "Healthy snacks for all kids",
    "Professional childcare staff",
    "Interactive learning activities",
    "Outdoor fun and games",
    "Take-home souvenirs for kids",
    "Storytelling sessions with experts",
    "Music and dance workshops",
    "Environmental awareness activities",
  ];

  return (
    <div className="bg-cream-100 min-h-screen bg-[#f5f2e9]">
      <TopBar />
      <header className="bg-pink-400 p-24">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">Event Details</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto p-6 md:px-8 md:py-10">
        {/* Event Image */}
        <img
          src={details6}
          alt="Children at event"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* Event Details */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold">Event Category</h3>
              <p>Child Education</p>
            </div>
            <div>
              <h3 className="font-semibold">Date/Time</h3>
              <p>Jan 15, 2024</p>
            </div>
            <div>
              <h3 className="font-semibold">No. of Days</h3>
              <p>01</p>
            </div>
            <div>
              <h3 className="font-semibold">Website</h3>
              <p>example.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Venue</h3>
              <p>Main Hall, City Center</p>
            </div>
            <div>
              <h3 className="font-semibold">Ticket Price</h3>
              <p>$15.00</p>
            </div>
            <div>
              <h3 className="font-semibold">Booked Seat</h3>
              <p>45</p>
            </div>
            <div>
              <h3 className="font-semibold">Timing</h3>
              <p>9:00am to 5:00pm</p>
            </div>
          </div>
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Book A Seat
          </button>
        </div>

        {/* Community Service Event */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community Service Event</h2>
          <p className="text-gray-600 mb-6">
            Suspendisse dignissim, velit sed mattis ultricies, orci quam auctor
            odio, convallis facilisis diam elit pellentesque massa. Curabitur
            porta dui sit amet ligula elementum finibus augue.
          </p>

          {/* List of Event Points */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {eventPoints.map((point, index) => (
              <div key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {point}
              </div>
            ))}
          </div>
        </section>

        {/* Event Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <img
            src={course1}
            alt="Event 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="bg-purple-600 rounded-lg p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-white">
              Join In Our Community Event
            </h3>
            <p className="text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full self-start hover:bg-yellow-500 transition duration-300">
              Register Now
            </button>
          </div>
        </div>

        {/* Guiding The Young Generation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Guiding The Young Generation
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </section>

        {/* Logos Section */}
        <div className="flex flex-wrap  justify-between items-center mb-12">
          <div className="w-1/5 p-2">
            <div className="h-24 flex items-center justify-center">
              <img
                src={details1}
                alt="Recycling Logo"
                className="h-20 object-contain"
              />
            </div>
          </div>
          <div className="w-1/5 p-2">
            <div className="h-16 flex items-center justify-center">
              <img
                src={details5}
                alt="Heroes Logo"
                className="h-24 w-32 object-contain"
              />
            </div>
          </div>
          <div className="w-1/5 p-2">
            <div className="h-16 flex items-center justify-center">
              <img
                src={details4}
                alt="Creativity Logo"
                className="h-24 w-32 object-contain"
              />
            </div>
          </div>
          <div className="w-1/5 p-2">
            <div className="h-16 flex items-center justify-center">
              <img
                src={details2}
                alt="Eye Pop Logo"
                className="h-24 w-32 object-contain"
              />
            </div>
          </div>
          <div className="w-1/5 p-2">
            <div className="h-16 flex items-center justify-center">
              <img
                src={details3}
                alt="Kids Health Logo"
                className="h-32 w-60 object-contain"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Navbar />
    </div>
  );
}
