import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar';

export default function SignInPage() {
    const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#f5f2e9] relative overflow-hidden">
      <TopBar />
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#374151] to-[#4B5563] py-16 px-6 text-white">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-8 text-5xl opacity-30">✨</div>
        <div className="absolute bottom-4 right-12 text-5xl opacity-30">🎨</div>

        {/* Additional Decorative Elements */}
        <div className="absolute bottom-28 right-1/3 text-7xl opacity-10">⚡</div>
        <div className="absolute top-1/4 left-1/4 h-20 w-20 rounded-full bg-[#FF6347] opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-[#00CED1] opacity-25"></div>
        {/* Header Content */}
        <h1 className="text-5xl font-bold text-center">Welcome Back!</h1>
        <p className="text-center mt-4 text-lg opacity-80">
          Sign in to continue your journey
        </p>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-36 relative">
        {/* Additional Decorative Elements in Main Content */}
        <div className="absolute top-4 left-6 text-5xl opacity-25">🌸</div>
        <div className="absolute bottom-4 right-8 text-5xl opacity-30">🍀</div>
        <div className="absolute top-16 right-24 text-6xl opacity-35">🌿</div>
        <div className="absolute bottom-12 left-1/3 text-7xl opacity-30">☁️</div>

        {/* New Decorative Shapes */}
        <div className="absolute top-56 right-32 h-24 w-24 rounded-full bg-[#FF4500] opacity-20"></div>
        <div className="absolute bottom-20 left-1/5 h-20 w-20 rounded-full bg-[#32CD32] opacity-25"></div>
        <div className="absolute top-96 left-1/4 h-20 w-20 rounded-full bg-[#FF6347] opacity-25"></div>
        <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-[#00CED1] opacity-40"></div>

        {/* Abstract lines or patterns */}
        <div className="absolute top-72 right-1/5 w-10 h-10 bg-gradient-to-tl from-[#FFD700] to-[#FF6347] opacity-30 rounded-full"></div>

        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200 rounded-lg">
      <div className="relative bg-white rounded-3xl shadow-lg w-[768px] max-w-full min-h-[480px] overflow-hidden">
        {/* Sign Up Form */}
        <div
          className={`absolute inset-0 h-full w-1/2 transition-all duration-500 ease-in-out ${
            isSignUp ? 'transform translate-x-full opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full p-10 bg-white">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <div className="flex justify-center mt-5 space-x-2">
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-sm mt-3">or use your email for registration</span>
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
          className={`absolute inset-0 h-full w-1/2 transition-all duration-500 ease-in-out ${
            !isSignUp ? 'z-10 opacity-100' : 'transform translate-x-full opacity-0 z-0'
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full p-10 bg-white">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <div className="flex justify-center mt-5 space-x-2">
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="p-2 border border-gray-300 rounded-full">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-sm mt-3">or use your email for sign-in</span>
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
          className={`absolute inset-0 h-full w-1/2 bg-orange-400 text-white transition-all duration-500 ease-in-out ${
            isSignUp ? 'transform -translate-x-full' : 'translate-x-full'
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center h-full px-12 bg-orange-400 text-white text-center ${
              isSignUp ? 'transform translate-x-full' : ''
            }`}
          >
            <h1 className="text-3xl font-bold ">
              {isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}
            </h1>
            <p className="mt-4 text-sm">
              {isSignUp
                ? 'To keep connected with us please sign in with your personal details'
                : 'Enter your details to create an account and start your journey with us!'}
            </p>
            <button
              className="mt-6 px-8 py-2 border border-white rounded-full"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
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
