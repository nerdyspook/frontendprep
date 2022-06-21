import { useRef } from "react";
import Hero from "../../components/Hero/Hero";
import QuizCard from "../../components/QuizCard/QuizCard";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  const htmlIcon = require("../../assets/html.png");
  const cssIcon = require("../../assets/css.png");
  const jsIcon = require("../../assets/javascript.png");
  const reactIcon = require("../../assets/react.png");
  const reduxIcon = require("../../assets/redux.png");
  const nodeIcon = require("../../assets/node.png");
  const topics: { icon: string; title: string }[] = [
    { icon: htmlIcon, title: "HTML" },
    { icon: cssIcon, title: "CSS" },
    { icon: jsIcon, title: "JavaScript" },
    { icon: reactIcon, title: "React.js" },
    { icon: reduxIcon, title: "Redux" },
    { icon: nodeIcon, title: "Node.js" },
  ];

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <main>
      <Hero executeScroll={executeScroll} />
      <div className=" w-full py-16 px-4" id="quizzes" ref={myRef}>
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
          {topics.map((topic, index) => (
            <QuizCard
              image={topic.icon}
              key={index}
              quizId={index}
              title={topic.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
