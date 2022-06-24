import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuizContext } from "../../context/QuizContext";
import { quizDB } from "../../quizDB";

const Results = () => {
  const {
    quizState: { currentQuestion, selectedOptions },
  } = useQuizContext();

  const currentQuiz = sessionStorage.getItem("currentQuiz");
  const selectedQuiz = quizDB.find((quiz) => quiz.id === currentQuiz);
  const questions = selectedQuiz?.questions;

  const optionState = (
    id: number,
    value: string,
    isCorrect: boolean
  ): string => {
    if (selectedOptions[id]) {
      if (isCorrect) {
        return "dark:bg-emerald-600 dark:text-slate-50";
      } else if (selectedOptions[id].value === value) {
        return "dark:bg-rose-600 dark:text-slate-50";
      } else return "dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600";
    }
    return "dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600";
  };

  const [score, setScore] = useState<number[]>(
    Array(questions?.length).fill(0)
  );
  const totalScore = score.reduce((acc, curr) => (acc += curr), 0);
  const calculateScore = () => {
    setScore(
      questions!.map((que, id) => (selectedOptions[id]?.isCorrect ? 10 : 0))
    );
  };

  useEffect(() => calculateScore(), []);

  return currentQuestion !== 0 ? (
    <div className="max-w-[620px] mx-auto  text-white">
      <div className="flex flex-col items-center">
        <span className="font-bold text-6xl mb-4">Results</span>
        <span className="text-2xl mb-4">Score: {totalScore} / 100</span>
        <span className="text-2xl mb-4">
          {totalScore >= 70
            ? "You killed it... 🐱‍🏍"
            : "You need to prepare more 💀"}
        </span>
      </div>

      <section className="mx-4">
        {questions?.map((questionObj, currentQuestionId) => (
          <>
            <div className="flex justify-between ">
              <span className="">
                Question: {currentQuestionId + 1}/{questions?.length}
              </span>
              <span className="time">
                Scored: {score[currentQuestionId]} points
              </span>
            </div>
            <div className="text-center text-2xl my-6">
              {questionObj.question}
            </div>
            <div className="flex flex-col items-center">
              {questionObj.options?.map((option, index) => (
                <button
                  className={`py-2.5 px-5 m-2 last-of-type:mb-20 text-sm w-full font-medium text-gray-900 bg-white rounded-lg border border-gray-200 pointer-events-none ${optionState(
                    currentQuestionId,
                    option.value,
                    option.isCorrect
                  )} `}
                  key={index}
                >
                  {option.value}
                </button>
              ))}
            </div>
          </>
        ))}
      </section>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Results;
