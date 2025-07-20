import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizById } from '../data/quizzes';
import { useQuizStore } from '../store/quizStore';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const QuizPlay = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { quizState, answerQuestion, nextQuestion, previousQuestion, completeQuiz } = useQuizStore();
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<number | string | null>(null);

  const quiz = getQuizById(id!);

  useEffect(() => {
    if (!quiz) {
      navigate('/');
      return;
    }

    if (quizState.currentQuizId !== id) {
      navigate(`/quiz/${id}`);
      return;
    }

    // 현재 질문에 대한 답변을 선택된 답변으로 설정
    const currentAnswer = quizState.answers[quizState.currentQuestionIndex];
    setSelectedAnswer(currentAnswer || null);
    
    // 완료 상태 초기화 (질문 인덱스가 변경되었을 때만)
    if (quizState.currentQuestionIndex < quiz.questions.length - 1) {
      setIsQuizCompleted(false);
    }
  }, [id, quiz, quizState, navigate]);

  if (!quiz) {
    return null;
  }

  const currentQuestion = quiz.questions[quizState.currentQuestionIndex];
  // 답변한 질문 수를 기준으로 프로그레스 계산
  const answeredQuestions = quizState.answers.length;
  const progress = (answeredQuestions / quiz.questions.length) * 100;
  const isLastQuestion = quizState.currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerSelect = (answer: number | string) => {
    setSelectedAnswer(answer);
    
    // 답을 선택하면 바로 다음 질문으로 이동 (마지막 질문 포함)
    handleNext(answer);
  };

  const handleNext = (answer: number | string = selectedAnswer!) => {
    if (answer === null) return;
    
    // 답변 저장
    answerQuestion(answer);

    if (isLastQuestion) {
      // 마지막 질문이면 완료 화면 표시 및 마지막 답변 저장
      setLastAnswer(answer);
      setIsQuizCompleted(true);
    } else {
      // 다음 질문으로
      nextQuestion();
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex === 0) {
      navigate(`/quiz/${id}`);
      return;
    }

    setIsQuizCompleted(false); // 완료 상태 해제
    previousQuestion();
    setSelectedAnswer(null);
  };

  const handleShowResult = () => {
    // 결과 계산 및 페이지 이동
    // store의 answers 배열이 모든 질문의 답변을 포함하고 있는지 확인
    const allAnswers = [...quizState.answers];
    
    // 만약 store의 답변 수가 부족하면 마지막 답변 추가
    if (allAnswers.length < quiz.questions.length && lastAnswer !== null) {
      allAnswers.push(lastAnswer);
    }
    
    if (allAnswers.length !== quiz.questions.length) {
      alert('답변이 모두 저장되지 않았습니다. 다시 시도해주세요.');
      return;
    }
    
    try {
      const result = quiz.resultMapping(allAnswers as number[] | string[]);
      completeQuiz(result);
      
      // 결과 데이터를 state로 전달하여 즉시 네비게이션
      navigate(`/quiz/${id}/result`, { 
        state: { result: result },
        replace: true 
      });
      
    } catch (error) {
      alert('결과 계산 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            답변 완료 {answeredQuestions} / {quiz.questions.length}
          </span>
          <span className="text-sm font-medium text-gray-900">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        {!isQuizCompleted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option.value)}
                  className={`w-full p-4 text-left border rounded-lg transition-all duration-200 ${
                    selectedAnswer === option.value 
                      ? 'border-primary-500 bg-primary-50 text-primary-700' 
                      : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{option.text}</span>
                    {selectedAnswer === option.value && (
                      <Check className="h-5 w-5 text-primary-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Button */}
            <div className="flex justify-start">
              <button
                onClick={handlePrevious}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {quizState.currentQuestionIndex === 0 ? '돌아가기' : '이전'}
              </button>
            </div>
          </>
        ) : (
          /* Quiz Completion Message */
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                퀴즈를 모두 완료했습니다!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                모든 질문에 답변해주셔서 감사합니다.<br/>
                이제 당신의 결과를 확인해보세요!
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={handlePrevious}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                이전 질문으로
              </button>
              
              <button
                onClick={handleShowResult}
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                결과 보기
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="text-center text-gray-600 text-sm mt-8">
        <p>💡 솔직하게 답변해주세요. 정답은 없습니다!</p>
      </div>
    </div>
  );
};

export default QuizPlay; 