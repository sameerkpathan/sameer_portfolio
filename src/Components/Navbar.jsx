import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="px-4 flex justify-between items-center w-full h-20 text-white fixed bg-black">
      <div>
        <h1 className="text-5xl ml-2 font-signature">Sameer</h1>
      </div>

      <ul className="hidden md:flex">
        {links?.map((element, index) => (
          <li
            key={element.id}
            className="px-4 text-2xl  cursor-pointer capitalize font-medium text-gray-500
                hover:scale-105 duration-200"
          >
            <Link to={element.link} smooth duration={500}>
              {" "}
              {element.link}{" "}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links?.map((element, index) => (
            <li
              key={element.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                to={element.link}
                onClick={() => setNav(!nav)}
                smooth
                duration={500}
              >
                {" "}
                {element.link}{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
