import { create } from 'zustand';
import type { QuizState, QuizStore, Result } from '../types';

const initialState: QuizState = {
  currentQuizId: null,
  currentQuestionIndex: 0,
  answers: [],
  result: null,
  isCompleted: false,
};

export const useQuizStore = create<QuizStore>((set, get) => ({
  quizState: initialState,

  startQuiz: (quizId: string) => {
    set({
      quizState: {
        ...initialState,
        currentQuizId: quizId,
      },
    });
  },

  answerQuestion: (answer: number | string) => {
    const { quizState } = get();
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = answer;

    set({
      quizState: {
        ...quizState,
        answers: newAnswers,
      },
    });
  },

  nextQuestion: () => {
    const { quizState } = get();
    set({
      quizState: {
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
      },
    });
  },

  previousQuestion: () => {
    const { quizState } = get();
    if (quizState.currentQuestionIndex > 0) {
      set({
        quizState: {
          ...quizState,
          currentQuestionIndex: quizState.currentQuestionIndex - 1,
        },
      });
    }
  },

  completeQuiz: (result: Result) => {
    const { quizState } = get();
    set({
      quizState: {
        ...quizState,
        result,
        isCompleted: true,
      },
    });
  },

  resetQuiz: () => {
    set({
      quizState: initialState,
    });
  },
})); 