import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-homeBg h-screen bg-no-repeat bg-[length:100%_100%] font-mono flex flex-col justify-center px-6 md:px-20 lg:px-32 ">
      <div className="max-w-2xl space-y-4"> 

        <h1 className="text-white font-serif font-bold text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] drop-shadow-md ">
          Fresh Coffee.<br />
          Cozy Moments.
        </h1>
        
        <p className="text-amber-50/90 text-lg md:text-2xl font-light tracking-wide max-w-lg">
          Crafted with passion, served with warmth
        </p>
        
        <div className="flex flex-row flex-wrap gap-4 pt-4">

          <Link
            to="/menu"
            className="btn border-none bg-[#6F4E37] hover:bg-[#5D402E] text-white rounded-full px-8 md:px-10 h-14 md:h-16 text-lg capitalize font-medium transition-all hover:scale-105 shadow-lg"
          >
            View Menu
          </Link>

          <Link
            to="/contact"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-black rounded-full px-8 md:px-10 h-14 md:h-16 text-lg capitalize font-medium transition-all hover:scale-105"
          >
            Visit Us
          </Link>

        </div>

      </div>
    </main>
  );
};

export default Home;