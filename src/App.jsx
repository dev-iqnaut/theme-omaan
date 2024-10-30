import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import SignInPage from "./components/Signin";
import StudentGallery from "./components/StudentsGallery";
import ContactPage from "./components/ContactUs";
import FAQPage from "./components/Faq";
import Blog from "./components/blog";
import BlogDetail from "./components/BlogDetails";
import TeachersPage from "./components/Teachers";
import SchoolEvents from "./components/Events";
import EventDetails from "./components/EventDetails";
import CoursesPage from "./components/Courses";
import CourseDetail from "./components/CoursesDetails";
import AboutUs from "./components/AboutUs";
import PricePlan from "./components/PricePlan";
import TopBar from "./components/TopBar";
import AcademicPage from "./components/Academics";
import InfrastructurePage from "./components/Infrastructure";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/studentsgallery" element={<StudentGallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetail />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/events" element={<SchoolEvents />} />
        <Route path="/eventsdetails" element={<EventDetails />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursesdetails" element={<CourseDetail />} />
        <Route path="/priceplan" element={<PricePlan />} />
        <Route path="/academics" element={<AcademicPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />

        <Route path="/topbar" element={<TopBar />} />
      </Routes>
    </Router>
  );
}

export default App;
