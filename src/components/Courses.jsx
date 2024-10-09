import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import blog1 from "../assets/blog1.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function CoursesPage() {
  const courses = [
    { title: "Coding for kids Adventure", price: "$99.00", image: course3 },
    { title: "Early Childhood Education", price: "$89.00", image: course2 },
    { title: "Kids learn chess Science", price: "$79.00", image: course1 },
    { title: "Coding for kids Adventure", price: "$99.00", image: course3 },
    { title: "Early Childhood Education", price: "$89.00", image: course2 },
    { title: "Kids learn chess Science", price: "$79.00", image: course1 },
    { title: "Coding for kids Adventure", price: "$99.00", image: course3 },
    { title: "Early Childhood Education", price: "$89.00", image: course2 },
    { title: "Kids learn chess Science", price: "$79.00", image: course1 },
    { title: "Coding for kids Adventure", price: "$99.00", image: course3 },
    { title: "Early Childhood Education", price: "$89.00", image: course2 },
    { title: "Kids learn chess Science", price: "$79.00", image: course1 },
  ];

  return (
    <div className="bg-[#f5f2e9] min-h-screen">
      <TopBar />
      {/* Header */}
      <header className="bg-orange-500 p-24 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">Courses</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center my-8">
          Educating Students For Success <br /> In A Changing World
        </h2>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden" // Added border
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{course.price}</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get in Touch Section */}
        <div className="mt-16 bg-orange-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img
                src={blog1}
                alt="Contact"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}
