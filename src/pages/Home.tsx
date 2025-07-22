import { Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { Clock, Users, TrendingUp, Heart, Target, ArrowRight, Play, CheckCircle, Shuffle } from 'lucide-react';

const Home = () => {
  // 인기 퀴즈 (상위 3개)
  const popularQuizzes = quizzes.slice(0, 3);

  // 랜덤 퀴즈 선택 함수
  const getRandomQuiz = () => {
    const randomIndex = Math.floor(Math.random() * quizzes.length);
    return quizzes[randomIndex];
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 sm:space-y-8 py-8 sm:py-12">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs sm:text-sm font-medium border border-primary-200">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              재미있는 성향 테스트
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight px-2">
            당신의 <span className="text-primary-600">성향</span>을<br className="sm:hidden" />
            <span className="text-primary-600">발견</span>하세요
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            <strong>10가지 재미있는 테스트</strong>로 당신만의 독특한 성향을 알아보고,<br className="hidden sm:block" />
            <strong>호환성 체크</strong>를 통해 잘 맞는 사람들을 찾아보세요
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 px-4">
          <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-600">
            <div className="p-2 bg-primary-100 rounded-lg border border-primary-200">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{quizzes.length}가지</div>
              <div className="text-xs sm:text-sm">재미있는 테스트</div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-600">
            <div className="p-2 bg-primary-100 rounded-lg border border-primary-200">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">1-2분</div>
              <div className="text-xs sm:text-sm">소요 시간</div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-600">
            <div className="p-2 bg-primary-100 rounded-lg border border-primary-200">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">즉시</div>
              <div className="text-xs sm:text-sm">결과 확인</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2 sm:pt-4">
          <Link
            to={`/quiz/${getRandomQuiz().id}`}
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Shuffle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            랜덤 테스트 시작하기
          </Link>
        </div>
      </div>

      {/* Popular Quizzes Section */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              인기 테스트
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              가장 많은 사람들이 선택한 테스트들을 먼저 경험해보세요
            </p>
          </div>
          <Link
            to="/quizzes"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium self-start sm:self-auto"
          >
            모든 테스트 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {popularQuizzes.map((quiz) => (
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
      </div>

      {/* Features Section */}
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            왜 TypelyFun인가요?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            재미있고 쉽게 당신의 성향을 알아보고 친구들과 공유해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary-200">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">재미있는 분석</h3>
            <p className="text-gray-600 text-xs sm:text-sm">쉽고 재미있는 질문으로 당신의 성향을 정확하게 파악</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary-200">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">호환성 체크</h3>
            <p className="text-gray-600 text-xs sm:text-sm">잘 맞는 사람과 맞지 않는 사람의 특징을 재미있게 확인</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary-200">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">개인 맞춤</h3>
            <p className="text-gray-600 text-xs sm:text-sm">당신만을 위한 재미있는 조언과 팁 제공</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border border-primary-200">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">빠른 결과</h3>
            <p className="text-gray-600 text-xs sm:text-sm">1-2분 만에 완료하고 즉시 재미있는 결과 확인</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center py-8 sm:py-12 bg-white border border-gray-200 rounded-lg">
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            지금 시작해보세요!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            당신의 성향을 재미있게 발견하고 친구들과 공유해보세요
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link
            to={`/quiz/${getRandomQuiz().id}`}
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Shuffle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            랜덤 테스트 시작하기
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600" />
              <span className="text-xs sm:text-sm">무료</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600" />
              <span className="text-xs sm:text-sm">즉시 결과</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600" />
              <span className="text-xs sm:text-sm">공유 가능</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 