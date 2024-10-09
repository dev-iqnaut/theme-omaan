import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#0b1340] text-white pt-20 mt-auto relative">
      {/* Enhanced top wavy divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white opacity-25"
          ></path>
          
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

       {/* Subscription Banner */}
       <section className="text-white border-dashed border-2 rounded-lg w-3/4 lg:w-2/3 py-6 px-4 text-center relative z-10 mb-14 mt-8 mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold mb-2">
    Subscribe Today and Get 10% Off Your Order
  </h2>
  <p className="text-gray-300 mb-6 max-w-lg mx-auto">
    If you are going to use a passage of Lorem Ipsum, you need to be sure
    there isn’t anything embarrassing hidden in the middle of text.
  </p>
  <div className="flex justify-center max-w-lg mx-auto">
    <input
      type="email"
      placeholder="Enter email address"
      className="p-3 rounded-l-full w-full text-gray-800"
    />
    <button className="bg-orange-500 text-white px-6 py-3 rounded-r-full font-bold hover:bg-orange-600">
      Subscribe
    </button>
  </div>
</section>


      {/* Footer content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
       
       
        {/* Logo and Social Media */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-60 h-20" />
          </div>
          <p className="text-gray-400 mb-4">
            Donec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac tortor gravida ligula eleifend finibus sed vel tellus.
          </p>
          <div>
            <div className="flex space-x-4 text-1xl">
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col space-y-4 ml-12">
          <h3 className="font-bold text-white">Get In Touch</h3>
          <p className="text-gray-400">
            1245, North Western Street <br />
            Europia, Lumbio <br />
            Call Us +31 (0) 123 456 789 <br />
            chocolatier@admin.com
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col space-y-4 ml-8">
          <h3 className="font-bold text-white">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gray-200">Contact us</a></li>
            <li><a href="#" className="hover:text-gray-200">About Us</a></li>
            <li><a href="#" className="hover:text-gray-200">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-200">Refund Policy</a></li>
            <li><a href="#" className="hover:text-gray-200">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 ml-8">
          <h3 className="font-bold text-white">Customers Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gray-200">Orders</a></li>
            <li><a href="#" className="hover:text-gray-200">Address</a></li>
            <li><a href="#" className="hover:text-gray-200">Account Details</a></li>
            <li><a href="#" className="hover:text-gray-200">24 * 7</a></li>
            <li><a href="blog" className="hover:text-gray-200">Blogs</a></li>
          </ul>
        </div>
        
      </div>
        
        <div className="bg-yellow-300 text-center py-4 relative z-10 mt-5">
          <p className="text-gray-800 font-bold">@2023 Omaan. All Rights Reserved.</p>
        </div>
      
    </footer>
  );
}