export type QuizOption = {
  value: string;
  isCorrect: boolean;
};

export type QuizReducerState = {
  currentQuestion: number;
  selectedOptions: QuizOption[];
};

export type QuizAction = {
  type: string;
  payload: any;
};

type QuizDispatch = (action: QuizAction) => void;

export type QuizContextType = {
  quizState: QuizReducerState;
  quizDispatch: QuizDispatch;
};
