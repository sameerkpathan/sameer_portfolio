import HeroImage from "../assets/heroimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Devloper
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-[20px]">
            I have 2 years of experience building and desgining software.
            Currently,I love to work on web application using technologys like
            ReactJS,Tailwind,JavaScript
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My Profile"
            className="items-center rounded-2xl mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
