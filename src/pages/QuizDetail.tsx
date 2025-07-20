import { useParams, Link, useNavigate } from 'react-router-dom';
import { getQuizById } from '../data/quizzes';
import { useQuizStore } from '../store/quizStore';
import { Clock, Users, ArrowRight, Play, ArrowLeft } from 'lucide-react';

const QuizDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { startQuiz } = useQuizStore();
  
  const quiz = getQuizById(id!);

  if (!quiz) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">퀴즈를 찾을 수 없습니다</h2>
        <Link to="/" className="btn-primary">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const handleStartQuiz = () => {
    startQuiz(quiz.id);
    navigate(`/quiz/${quiz.id}/play`);
  };

  // 퀴즈별 구체적인 정보 제공
  const getQuizSpecificInfo = (quizId: string) => {
    const quizInfo = {
      'personality-type': {
        title: 'MBTI 스타일 성격 분석',
        items: [
          '당신의 에너지 방향 (외향형/내향형)',
          '정보 수집 방식 (감각형/직관형)',
          '의사결정 스타일 (사고형/감정형)',
          '생활 양식 (판단형/인식형)',
          '16가지 성격 유형 중 당신의 유형',
          '직업 적성과 학습 스타일 제안'
        ]
      },
      'love-style': {
        title: '연애 스타일 심리 분석',
        items: [
          '당신의 연애 성향 (로맨틱/실용적)',
          '감정 표현 방식 (열정적/안정적)',
          '관계에서의 독립성 수준',
          '사회적 연애 스타일',
          '잘 맞는 연애 상대 유형',
          '관계 개선을 위한 구체적 조언'
        ]
      },
      'workplace-character': {
        title: '직장에서의 캐릭터 분석',
        items: [
          '팀에서의 리더십 성향',
          '업무 접근 방식 (혁신적/안정적)',
          '동료와의 협업 스타일',
          '직장에서의 강점과 약점',
          '적합한 직무 분야 제안',
          '직장 관계 개선 방법'
        ]
      },
      'shopping-tendency': {
        title: '소비 심리 패턴 분석',
        items: [
          '쇼핑 결정 방식 (충동적/계획적)',
          '가격 대비 가치 추구 성향',
          '브랜드 선호도와 트렌드 민감도',
          '소비 습관의 심리적 배경',
          '합리적인 소비를 위한 조언',
          '개인 맞춤형 쇼핑 전략'
        ]
      },
      'food-preference': {
        title: '음식 취향 심리 분석',
        items: [
          '맛 선호도와 성격의 연관성',
          '새로운 음식에 대한 개방성',
          '음식 선택의 심리적 요인',
          '식사 스타일과 사회성',
          '건강한 식습관 개선 방안',
          '개인 맞춤형 식단 제안'
        ]
      },
      'sns-pattern': {
        title: 'SNS 사용 패턴 심리 분석',
        items: [
          'SNS에서의 자아 표현 방식',
          '소통 스타일과 관계 형성',
          '콘텐츠 소비 vs 생산 성향',
          '디지털 웰빙과 스크린 타임',
          '건강한 SNS 사용법',
          '온라인 관계 개선 방안'
        ]
      },
      'travel-style': {
        title: '여행 스타일 성향 분석',
        items: [
          '여행 계획 방식 (계획형/즉흥형)',
          '여행 목적과 동기',
          '새로운 경험에 대한 개방성',
          '여행 중 활동 선호도',
          '개인 맞춤형 여행지 추천',
          '여행 경험 최적화 방법'
        ]
      },
      'movie-preference': {
        title: '영화 취향 심리 분석',
        items: [
          '영화 장르 선호도와 성격',
          '감정적 몰입도와 공감 능력',
          '스토리 vs 시각효과 선호도',
          '영화 감상 스타일',
          '영화를 통한 자기 이해',
          '다양한 장르 탐험 제안'
        ]
      },
      'time-management': {
        title: '시간 관리 스타일 분석',
        items: [
          '시간 인식과 계획 방식',
          '우선순위 설정 스타일',
          '마감시간 대응 방식',
          '생산성과 스트레스 관리',
          '개인 맞춤형 시간 관리법',
          '효율적인 일정 관리 전략'
        ]
      },
      'stress-relief': {
        title: '스트레스 해소 유형 분석',
        items: [
          '스트레스 대응 방식 (활동적/수동적)',
          '에너지 회복 방법 (사회적/개인적)',
          '힐링 공간 선호도 (실내/실외)',
          '스트레스 해소 효과성',
          '개인 맞춤형 힐링 방법',
          '건강한 스트레스 관리법'
        ]
      }
    };

    return quizInfo[quizId as keyof typeof quizInfo] || {
      title: '심리 분석 결과',
      items: [
        '당신의 성향 유형',
        '주요 특징과 강점',
        '개선 가능한 영역',
        '잘 맞는 사람들의 특징',
        '맞지 않는 사람들의 특징',
        '개인 성장을 위한 제안'
      ]
    };
  };

  const quizInfo = getQuizSpecificInfo(quiz.id);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          홈으로 돌아가기
        </Link>
      </div>

      {/* Quiz Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 border border-primary-200">
              {quiz.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{quiz.title}</h1>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="h-5 w-5" />
              <span className="text-sm">{quiz.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-5 w-5" />
              <span className="text-sm">{quiz.questionCount}개 질문</span>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {quiz.description}
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{quizInfo.title}</h3>
          <ul className="space-y-3 text-gray-700">
            {quizInfo.items.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleStartQuiz}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Play className="h-4 w-4 mr-2" />
            테스트 시작하기
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            다른 테스트 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail; 