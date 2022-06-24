import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quizReducer";
import { reactChildren } from "../types/commonTypes";
import { QuizContextType } from "../types/quizTypes";

const QuizContext = createContext({} as QuizContextType);
const initialState = { currentQuestion: 0, selectedOptions: [] };

const QuizContextProvider = ({ children }: reactChildren) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => useContext(QuizContext);

export { useQuizContext, QuizContextProvider };
