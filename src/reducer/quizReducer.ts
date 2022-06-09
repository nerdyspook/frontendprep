import { QuizReducerState, QuizAction } from "./../types/quizTypes";

export const quizReducer = (state: QuizReducerState, action: QuizAction) => {
  switch (action.type) {
    case "SET_CURRENT":
      return { ...state, currentQuestion: action.payload.currQue };

    case "SET_ANSWERS":
      return { ...state, selectedOptions: [...action.payload.selectedOption] };

    case "RESET":
      return { currQuiz: "", currentQuestion: 0, selectedOptions: [] };

    default:
      return state;
  }
};
