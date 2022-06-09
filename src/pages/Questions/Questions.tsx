import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuizContext } from "../../context/QuizContext";
import { quizDB } from "../../quizDB";
import { QuizOption } from "../../types/quizTypes";

const Questions = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const selectedQuiz = quizDB.find((quiz) => quiz.id === quizId);
  const questions = selectedQuiz?.questions;

  const [selectedOption, setSelectedOption] = useState<QuizOption[] | []>([]);
  const {
    quizState: { currentQuestion },
    quizDispatch,
  } = useQuizContext();

  let question;
  let options;

  if (questions) {
    question = questions[currentQuestion]?.question;
    options = questions[currentQuestion]?.options;
  }

  const nextHandler = () => {
    quizDispatch({
      type: "SET_CURRENT",
      payload: { currQue: currentQuestion + 1 },
    });
  };

  const prevHandler = () => {
    quizDispatch({
      type: "SET_CURRENT",
      payload: { currQue: currentQuestion - 1 },
    });
  };

  const submitHandler = () => {
    navigate("/results");
    quizDispatch({
      type: "SET_ANSWERS",
      payload: { selectedOption },
    });
  };

  return (
    <main className="max-w-[620px] mx-auto  text-white">
      <div className="mx-4">
        <h1 className=" text-center text-4xl font-medium my-8 uppercase">
          {selectedQuiz?.title}
        </h1>
        <div className="flex justify-between">
          <span className="">
            Question: {currentQuestion + 1}/{questions?.length}
          </span>
          <span className="time">2 : 00</span>
        </div>
        <div className="text-center text-2xl my-6">{question}</div>
        <div className="flex flex-col items-center">
          {options?.map((option: QuizOption, index) => (
            <button
              className={`py-2.5 px-5 m-2 text-sm w-full font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ${
                selectedOption[currentQuestion]?.value === option.value
                  ? "dark:focus:ring-sky-900 dark:focus:text-white dark:focus:bg-sky-700 dark:bg-sky-700 dark:text-white dark:ring-sky-900"
                  : "dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-sky-500"
              } `}
              key={index}
              onClick={() => {
                selectedOption[currentQuestion] = option;
                setSelectedOption([...selectedOption]);
              }}
            >
              {option.value}
            </button>
          ))}
        </div>
        <div className="flex justify-between my-8">
          <span
            className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase  cursor-pointer ${
              currentQuestion === 0
                ? "pointer-events-none"
                : "pointer-events-auto"
            }`}
            onClick={() => {
              prevHandler();
            }}
          >
            prev
          </span>
          <span
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase  cursor-pointer"
            onClick={() => {
              currentQuestion + 1 === questions?.length
                ? submitHandler()
                : nextHandler();

              console.log(questions);
            }}
          >
            {currentQuestion + 1 === questions?.length ? "submit" : "next"}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Questions;
