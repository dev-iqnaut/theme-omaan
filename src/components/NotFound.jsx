import notfound from '../assets/notfound.png';
import Footer from './Footer';
import Navbar from './Navbar';
import TopBar from './TopBar';
export default function NotFound() {
    return (
      <div className="min-h-screen bg-pink-400 flex flex-col items-center justify-center text-white mt">
       <TopBar />
        <div className="relative mt-28">
          <div className="text-[200px] font-bold text-yellow-300 relative z-10">404</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img
              src={notfound}
              alt="Frustrated woman with laptop"
              className="w-[150px] h-[100px] mt-7"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-4">Opps ! The Page Not Found.</h1>
        <p className="text-center max-w-md mb-8">
          Proin non eros elementum, sagittis diam at, feugiat nunc. Ut velit arcu, posuere at neque quis, vestibulum vehicula dui.
          Praesent at felis ante. Cras sed ultricies risus. Nullam porta fermentum egestas. Praesent quis mauris ultrices.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 mb-64 rounded-full transition duration-300">
          <a href="/">BACK TO HOME</a>
        </button>
        <Navbar />
       <Footer />
      </div>
    )
  }