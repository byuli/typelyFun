import { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { getQuizById } from '../data/quizzes';
import { useQuizStore } from '../store/quizStore';
import { Share2, RefreshCw, Home, Heart, XCircle, ArrowLeft } from 'lucide-react';

const QuizResult = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { quizState, resetQuiz } = useQuizStore();
  const [copied, setCopied] = useState(false);

  const quiz = getQuizById(id!);
  const resultType = searchParams.get('type');
  
  // location.state에서 결과 데이터 가져오기
  const resultFromState = location.state?.result;

  useEffect(() => {
    if (!quiz) {
      navigate('/');
      return;
    }

    // URL에서 타입이 있으면 해당 결과를 사용, 없으면 스토어의 결과 사용
    if (resultType && !quizState.result) {
      // URL 파라미터로 결과를 복원하는 로직
      // 실제로는 더 복잡한 매핑이 필요할 수 있음
    }
  }, [id, quiz, resultType, quizState.result, navigate, resultFromState]);

  if (!quiz) {
    return null;
  }

  // location.state에서 온 결과를 우선 사용, 없으면 스토어의 결과 사용
  const result = resultFromState || quizState.result;

  if (!result) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">결과를 찾을 수 없습니다</h2>
        <button
          onClick={() => navigate(`/quiz/${id}`)}
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
        >
          테스트 다시 하기
        </button>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/quiz/${id}/result?type=${encodeURIComponent(result.title)}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${quiz.title} - ${result.title}`,
          text: `나의 결과: ${result.title} - ${result.description}`,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error('공유 실패:', error);
    }
  };

  const handleRetake = () => {
    resetQuiz();
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(`/quiz/${id}`)}
          className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          테스트로 돌아가기
        </button>
      </div>

      {/* Result Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{result.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {result.description}
          </p>
        </div>
      </div>

      {/* Detailed Description */}
      {result.detailedDescription && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">상세 분석</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {result.detailedDescription}
          </p>
        </div>
      )}

      {/* Traits */}
      {result.traits && result.traits.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주요 특징</h2>
          <div className="flex flex-wrap gap-3">
            {result.traits.map((trait: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Strengths and Weaknesses */}
      {((result.strengths && result.strengths.length > 0) || (result.weaknesses && result.weaknesses.length > 0)) && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strengths */}
            {result.strengths && result.strengths.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900">강점</h3>
                </div>
                <div className="space-y-2">
                  {result.strengths.map((strength: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weaknesses */}
            {result.weaknesses && result.weaknesses.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900">개선점</h3>
                </div>
                <div className="space-y-2">
                  {result.weaknesses.map((weakness: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{weakness}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Compatibility */}
      {((result.goodMatches && result.goodMatches.length > 0) || (result.badMatches && result.badMatches.length > 0)) && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">호환성 분석</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Good Matches */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">잘 맞는 사람</h3>
              </div>
              <div className="space-y-3">
                {result.goodMatches.map((match: string, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-800">{match}</span>
                    </div>
                    {result.goodMatchReasons && result.goodMatchReasons[index] && (
                      <div className="ml-5 text-sm text-gray-600 bg-gray-50 p-3 rounded border border-gray-200">
                        {result.goodMatchReasons[index]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bad Matches */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <XCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">맞지 않는 사람</h3>
              </div>
              <div className="space-y-3">
                {result.badMatches.map((match: string, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-medium text-gray-800">{match}</span>
                    </div>
                    {result.badMatchReasons && result.badMatchReasons[index] && (
                      <div className="ml-5 text-sm text-gray-600 bg-gray-50 p-3 rounded border border-gray-200">
                        {result.badMatchReasons[index]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">성장을 위한 제안</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.recommendations.map((recommendation: string, index: number) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-primary-50 rounded-lg border border-primary-200"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-800">{recommendation}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Share2 className="h-4 w-4 mr-2" />
            {copied ? '링크 복사됨!' : '결과 공유하기'}
          </button>

          <button
            onClick={handleRetake}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            다시 테스트하기
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <Home className="h-4 w-4 mr-2" />
            홈으로
          </button>
        </div>
      </div>

      {/* Share URL */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">결과 링크</h3>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-50 text-sm"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="inline-flex items-center px-4 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
          >
            {copied ? '복사됨!' : '복사'}
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center text-gray-600 text-sm">
        <p>💡 이 결과는 참고용이며, 개인의 성향은 시간에 따라 변할 수 있습니다.</p>
      </div>
    </div>
  );
};

export default QuizResult; 