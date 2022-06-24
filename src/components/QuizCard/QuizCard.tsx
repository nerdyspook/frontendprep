import { Link } from "react-router-dom";

interface QuizCardProps {
  image: string;
  title: string;
  quizId: number;
}

const QuizCard = ({ image, title, quizId }: QuizCardProps) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link
        to="/rules"
        onClick={() => sessionStorage.setItem("currentQuiz", `${quizId + 1}`)}
      >
        <img
          className="h-40 w-[100%] object-contain pt-8"
          src={image}
          alt={title}
        />
      </Link>
      <div className="p-5">
        <Link
          to="/rules"
          onClick={() => sessionStorage.setItem("currentQuiz", `${quizId + 1}`)}
        >
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Test your knowledge about the above topic by taking a small quiz.
        </p>
        <Link
          to="/rules"
          onClick={() => sessionStorage.setItem("currentQuiz", `${quizId + 1}`)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Attempt Quiz
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
