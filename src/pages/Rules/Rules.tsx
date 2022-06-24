import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Rules = () => {
  const currentQuiz = sessionStorage.getItem("currentQuiz");
  return (
    <main className="max-w-[1240px] mx-auto">
      <div className="flex flex-col items-center text-white text-xl">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8 md:mb-12 xl:mt-10">
          Category
        </h1>
        <span className="w-60 md:w-1/3 flex items-center m-4 ">
          <BsQuestionCircle />
          <p className="pl-6">Each correct answer scores 10 points</p>
        </span>
        <span className="w-60 md:w-1/3 flex items-center m-4">
          <BsQuestionCircle />
          <p className="pl-6">Each question has only one right answer</p>
        </span>
        <span className="w-60 md:w-1/3 flex items-center m-4">
          <BsQuestionCircle />
          <p className="pl-6">Score more than 70% to win the quiz</p>
        </span>
        <span className="w-60 md:w-1/3 flex items-center m-4">
          <BsQuestionCircle />
          <p className="pl-6">
            Each question will get 60 seconds to be answered
          </p>
        </span>
        <Link
          to={`/questions/${currentQuiz}`}
          className="mt-6 md:mt-16 py-2 px-10 md:py-4 md:px-16 text-sm md:text-lg font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Start Quiz
        </Link>
      </div>
    </main>
  );
};

export default Rules;
