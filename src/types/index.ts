export type Quiz = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  questionCount: number;
  questions: {
    question: string;
    options: {
      text: string;
      value: number | string;
    }[];
  }[];
  resultMapping: (answers: number[] | string[]) => Result;
}

export type Result = {
  title: string;
  description: string;
  detailedDescription?: string;
  traits?: string[];
  strengths?: string[];
  weaknesses?: string[];
  goodMatches: string[];
  badMatches: string[];
  goodMatchReasons?: string[];
  badMatchReasons?: string[];
  recommendations?: string[];
  image?: string;
}

export type QuizState = {
  currentQuizId: string | null;
  currentQuestionIndex: number;
  answers: (number | string)[];
  result: Result | null;
  isCompleted: boolean;
}

export type QuizStore = {
  // State
  quizState: QuizState;
  
  // Actions
  startQuiz: (quizId: string) => void;
  answerQuestion: (answer: number | string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  completeQuiz: (result: Result) => void;
  resetQuiz: () => void;
} 