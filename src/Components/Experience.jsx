import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Nextjs from "../assets/nextjs.png";
import Materialui from "../assets/materialui.png";
import bootstraps from "../assets/bootstrap.jpeg";

const Experience = () => {
  const ExperienceData = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: Materialui,
      title: "Material UI",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: Nextjs,
      title: "Nextjs",
      style: "shadow-white",
    },
    {
      id: 9,
      src: bootstraps,
      title: "Bootstrap",
      style: "shadow-white",
    }
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-[17px]">These are the technologies I've worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {ExperienceData?.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="Images" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
