
import youtubeClone from '../assets/portfolio/ytclone.webp'
import facebookClone from "../assets/portfolio/facebookclone.png";
import portfolioimage from "../assets/portfolio/Portfolios.webp";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import todolist from "../assets/portfolio/todos.jpeg";
import formvalid from "../assets/portfolio/form.png";


const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      src: youtubeClone,
      demo:"https://youtube2-0-3cyigxbpi-sameerkpathan.vercel.app/",
      code:"https://github.com/sameerkpathan/Youtube2.0"
    },
    {
      id: 2,
      src: facebookClone,
      demo:"https://sameerkpathan.github.io/Facebook-clone/",
      code:"https://github.com/sameerkpathan/Facebook-clone"
    },
    {
      id: 3,
      src: portfolioimage,
      demo:"",
      code:"https://github.com/sameerkpathan/React-Portfolio"
    },
    {
      id: 4,
      src: reactWeather,
      demo:"https://sameerkpathan.github.io/weatherappinreactjs/",
      code:"https://github.com/sameerkpathan/weatherappinreactjs"
    },
    {
      id: 5,
      src: todolist,
      demo:"https://to-do-list-p0c6h943n-sameerkpathan.vercel.app/",
      code:"https://github.com/sameerkpathan/To-DO-List"
    },
    {
      id: 6,
      src: formvalid,
      demo:"https://form-validation-fxg9trrmu-sameerkpathan.vercel.app/",
      code:"https://github.com/sameerkpathan/Form_Validation"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screens"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:mt-[100px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-[17px] ">Check Out some of my work Right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioData?.map((Element, index) => (
            <div
              key={Element.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={Element.src}
                alt="Images"
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex justify-center items-center">
                <a href={Element.demo}  target="_blank" rel="noreferrer">
                
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a  href={Element.code} target="_blank" rel="noreferrer">

                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
