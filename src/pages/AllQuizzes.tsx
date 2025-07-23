import { Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { Clock, ArrowRight, Home } from 'lucide-react';

const AllQuizzes = () => {
  return (
    <div className="max-w-7xl mx-auto">


      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          모든 테스트
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          총 {quizzes.length}개의 재미있는 테스트를 찾아보세요
        </p>
      </div>

      {/* All Quizzes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            to={`/quiz/${quiz.id}`}
            className="group block bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200"
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 border border-primary-200">
                  {quiz.category}
                </span>
                <div className="flex items-center space-x-1 text-gray-500 text-xs sm:text-sm">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{quiz.duration}</span>
                </div>
              </div>
              
              <div className="mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-primary-600 transition-colors">
                  {quiz.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {quiz.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                <span className="text-xs sm:text-sm text-gray-500">
                  {quiz.questionCount}개 질문
                </span>
                <div className="flex items-center space-x-1 text-primary-600 group-hover:text-primary-700 transition-colors">
                  <span className="text-xs sm:text-sm font-medium">시작하기</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Back to Home */}
      <div className="text-center mt-8 sm:mt-12">
        <Link
          to="/"
          className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 text-sm sm:text-base font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default AllQuizzes; 