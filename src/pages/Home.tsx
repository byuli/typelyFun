import { Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { Clock, Users, TrendingUp, Heart, Zap, Target, ArrowRight, Play, CheckCircle } from 'lucide-react';

const Home = () => {
  // 인기 퀴즈 (상위 3개)
  const popularQuizzes = quizzes.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-12">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium border border-primary-200">
              <Zap className="h-4 w-4 mr-2" />
              재미있는 성향 테스트
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            당신의 <span className="text-primary-600">성향</span>을<br />
            <span className="text-primary-600">발견</span>하세요
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong>10가지 재미있는 테스트</strong>로 당신만의 독특한 성향을 알아보고,<br />
            <strong>호환성 체크</strong>를 통해 잘 맞는 사람들을 찾아보세요
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 md:space-x-12">
          <div className="flex items-center space-x-3 text-gray-600">
            <div className="p-2 bg-primary-100 rounded-lg border border-primary-200">
              <Users className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">{quizzes.length}가지</div>
              <div className="text-sm">재미있는 테스트</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <div className="p-2 bg-primary-100 rounded-lg border border-primary-200">
              <Clock className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">1-2분</div>
              <div className="text-sm">소요 시간</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <div className="p-2 bg-primary-100 rounded-lg border border-primary-200">
              <TrendingUp className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">즉시</div>
              <div className="text-sm">결과 확인</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            to={`/quiz/${popularQuizzes[0]?.id}`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Play className="h-4 w-4 mr-2" />
            첫 번째 테스트 시작하기
          </Link>
        </div>
      </div>

      {/* Popular Quizzes Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              인기 테스트
            </h2>
            <p className="text-gray-600 mt-1">
              가장 많은 사람들이 선택한 테스트들을 먼저 경험해보세요
            </p>
          </div>
          <Link
            to="/quizzes"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            모든 테스트 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularQuizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/quiz/${quiz.id}`}
              className="group block bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 border border-primary-200">
                    {quiz.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{quiz.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {quiz.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {quiz.questionCount}개 질문
                  </span>
                  <div className="flex items-center space-x-1 text-primary-600 group-hover:text-primary-700 transition-colors">
                    <span className="text-sm font-medium">시작하기</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            왜 TypelyFun인가요?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            재미있고 쉽게 당신의 성향을 알아보고 친구들과 공유해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 border border-primary-200">
              <Zap className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">재미있는 분석</h3>
            <p className="text-gray-600 text-sm">쉽고 재미있는 질문으로 당신의 성향을 정확하게 파악</p>
          </div>
          
          <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 border border-primary-200">
              <Heart className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">호환성 체크</h3>
            <p className="text-gray-600 text-sm">잘 맞는 사람과 맞지 않는 사람의 특징을 재미있게 확인</p>
          </div>
          
          <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 border border-primary-200">
              <Target className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">개인 맞춤</h3>
            <p className="text-gray-600 text-sm">당신만을 위한 재미있는 조언과 팁 제공</p>
          </div>

          <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 border border-primary-200">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">빠른 결과</h3>
            <p className="text-gray-600 text-sm">1-2분 만에 완료하고 즉시 재미있는 결과 확인</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
        <div className="space-y-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            지금 시작해보세요!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            당신의 성향을 재미있게 발견하고 친구들과 공유해보세요
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={`/quiz/${popularQuizzes[0]?.id}`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Play className="h-4 w-4 mr-2" />
            테스트 시작하기
          </Link>
          
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-primary-600" />
              <span className="text-sm">무료</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-primary-600" />
              <span className="text-sm">즉시 결과</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-primary-600" />
              <span className="text-sm">공유 가능</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 