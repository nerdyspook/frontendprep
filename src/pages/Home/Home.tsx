import Hero from "../../components/Hero/Hero";
import QuizCard from "../../components/QuizCard/QuizCard";

const Home = () => {
  const htmlIcon = require("../../assets/html.png");
  const cssIcon = require("../../assets/css.png");
  const jsIcon = require("../../assets/javascript.png");
  const reactIcon = require("../../assets/react.png");
  const reduxIcon = require("../../assets/redux.png");
  const mongodbIcon = require("../../assets/mongo.png");
  const topics: { icon: string; title: string }[] = [
    { icon: htmlIcon, title: "HTML" },
    { icon: cssIcon, title: "CSS" },
    { icon: jsIcon, title: "JavaScript" },
    { icon: reactIcon, title: "React.js" },
    { icon: reduxIcon, title: "Redux" },
    { icon: mongodbIcon, title: "MongoDB" },
  ];

  return (
    <div className="">
      <Hero />
      <div className=" w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
          {topics.map((topic, index) => (
            <QuizCard image={topic.icon} key={index} title={topic.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
