import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-[#f5f2e9] relative overflow-hidden">
      <TopBar />

      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#374151] to-[#4B5563] py-16 px-6 text-white text-center">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-8 text-4xl opacity-30">✨</div>
        <div className="absolute bottom-4 right-12 text-4xl opacity-30">🎨</div>
        <div className="absolute bottom-28 right-1/3 text-6xl opacity-10">
          ⚡
        </div>
        <div className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-[#FF6347] opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 h-14 w-14 rounded-full bg-[#00CED1] opacity-25"></div>
        {/* Header Content */}
        <h1 className="text-4xl md:text-5xl font-bold">Welcome Back!</h1>
        <p className="text-lg md:text-xl mt-4 opacity-80">
          Sign in to continue your journey
        </p>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16 md:py-36 relative">
        {/* Additional Decorative Elements */}
        <div className="absolute top-4 left-6 text-3xl opacity-25">🌸</div>
        <div className="absolute bottom-4 right-8 text-4xl opacity-30">🍀</div>
        <div className="absolute top-16 right-24 text-5xl opacity-35">🌿</div>
        <div className="absolute bottom-12 left-1/3 text-6xl opacity-30">
          ☁️
        </div>
        <div className="absolute top-56 right-32 h-16 w-16 rounded-full bg-[#FF4500] opacity-20"></div>
        <div className="absolute bottom-20 left-1/5 h-16 w-16 rounded-full bg-[#32CD32] opacity-25"></div>
        <div className="absolute top-96 left-1/4 h-16 w-16 rounded-full bg-[#FF6347] opacity-25"></div>
        <div className="absolute top-1/2 right-1/4 h-14 w-14 rounded-full bg-[#00CED1] opacity-40"></div>

        {/* Flex Container for Sign In and Sign Up Forms */}
        <div className="flex items-center justify-center min-h-[480px]">
          <div className="relative bg-white rounded-3xl shadow-lg w-full max-w-[768px] min-h-[480px] overflow-hidden">
            {/* Sign Up Form */}
            <div
              className={`absolute inset-0 h-full w-full md:w-1/2 transition-all duration-500 ease-in-out ${
                isSignUp
                  ? "transform translate-x-full opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            >
              <form className="flex flex-col items-center justify-center h-full p-6 md:p-10 bg-white">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Create Account
                </h1>
                <div className="flex justify-center mt-5 space-x-2">
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span className="text-sm mt-3">
                  or use your email for registration
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-4 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-2 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mt-2 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                />
                <button className="w-full mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Sign Up
                </button>
              </form>
            </div>

            {/* Sign In Form */}
            <div
              className={`absolute inset-0 h-full w-full md:w-1/2 transition-all duration-500 ease-in-out ${
                !isSignUp
                  ? "z-10 opacity-100"
                  : "transform translate-x-full opacity-0 z-0"
              }`}
            >
              <form className="flex flex-col items-center justify-center h-full p-6 md:p-10 bg-white">
                <h1 className="text-2xl md:text-3xl font-bold">Sign In</h1>
                <div className="flex justify-center mt-5 space-x-2">
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-gray-300 rounded-full"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span className="text-sm mt-3">
                  or use your email for sign-in
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-4 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mt-2 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                />
                <a href="#" className="text-sm text-blue-500 mt-3">
                  Forgot your password?
                </a>
                <button className="w-full mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Sign In
                </button>
              </form>
            </div>

            {/* Toggle Container */}
            <div
              className={`absolute inset-0 h-full w-full md:w-1/2 bg-orange-400 text-white transition-all duration-500 ease-in-out ${
                isSignUp ? "transform -translate-x-full" : "translate-x-full"
              }`}
            >
              <div
                className={`flex flex-col items-center justify-center h-full px-6 md:px-12 bg-orange-400 text-white text-center ${
                  isSignUp ? "transform translate-x-full" : ""
                }`}
              >
                <h1 className="text-2xl md:text-3xl font-bold">
                  {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
                </h1>
                <p className="mt-4 text-sm">
                  {isSignUp
                    ? "To keep connected with us please sign in with your personal details"
                    : "Enter your details to create an account and start your journey with us!"}
                </p>
                <button
                  className="mt-6 px-6 py-2 border border-white rounded-full"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Navbar />
      <Footer />
    </div>
  );
}
