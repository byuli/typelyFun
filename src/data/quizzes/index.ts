// 기존 quizzes.ts에서 가져온 퀴즈들
export { personalityTypeQuiz } from './personality-type';
export { loveStyleQuiz } from './love-style';
export { workplaceCharacterQuiz } from './workplace-character';
export { stressReliefQuiz } from './stress-relief';
export { shoppingStyleQuiz } from './shopping-style';
export { travelStyleQuiz } from './travel-style';
export { foodPersonalityQuiz } from './food-personality';
export { snsPatternQuiz } from './sns-pattern';
export { movieTasteQuiz } from './movie-taste';
export { timeManagementQuiz } from './time-management';

// new-quizzes.ts에서 가져온 퀴즈들
export { communicationStyleQuiz } from './communication-style';
export { learningStyleQuiz } from './learning-style';
export { decisionMakingQuiz } from './decision-making';
export { creativityStyleQuiz } from './creativity-style';
export { leadershipStyleQuiz } from './leadership-style';
export { problemSolvingQuiz } from './problem-solving';
export { stressManagementQuiz } from './stress-management';
export { socialStyleQuiz } from './social-style';
export { workStyleQuiz } from './work-style';

// 모든 퀴즈를 배열로 내보내기
import { personalityTypeQuiz } from './personality-type';
import { loveStyleQuiz } from './love-style';
import { workplaceCharacterQuiz } from './workplace-character';
import { stressReliefQuiz } from './stress-relief';
import { shoppingStyleQuiz } from './shopping-style';
import { travelStyleQuiz } from './travel-style';
import { foodPersonalityQuiz } from './food-personality';
import { snsPatternQuiz } from './sns-pattern';
import { movieTasteQuiz } from './movie-taste';
import { timeManagementQuiz } from './time-management';
import { communicationStyleQuiz } from './communication-style';
import { learningStyleQuiz } from './learning-style';
import { decisionMakingQuiz } from './decision-making';
import { creativityStyleQuiz } from './creativity-style';
import { leadershipStyleQuiz } from './leadership-style';
import { problemSolvingQuiz } from './problem-solving';
import { stressManagementQuiz } from './stress-management';
import { socialStyleQuiz } from './social-style';
import { workStyleQuiz } from './work-style';
import type { Quiz } from '../../types';

export const allQuizzes = [
  personalityTypeQuiz,
  loveStyleQuiz,
  workplaceCharacterQuiz,
  stressReliefQuiz,
  shoppingStyleQuiz,
  travelStyleQuiz,
  foodPersonalityQuiz,
  snsPatternQuiz,
  movieTasteQuiz,
  timeManagementQuiz,
  communicationStyleQuiz,
  learningStyleQuiz,
  decisionMakingQuiz,
  creativityStyleQuiz,
  leadershipStyleQuiz,
  problemSolvingQuiz,
  stressManagementQuiz,
  socialStyleQuiz,
  workStyleQuiz,
];

// 기존 호환성을 위한 quizzes 배열 (allQuizzes와 동일)
export const quizzes = allQuizzes;

// ID로 퀴즈를 찾는 함수
export const getQuizById = (id: string): Quiz | undefined => {
  return allQuizzes.find((quiz) => quiz.id === id);
};
