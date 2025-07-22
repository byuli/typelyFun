import type { Quiz } from '../../types';

export const travelStyleQuiz: Quiz = {
  id: 'travel-style',
  title: '여행 스타일 분석',
  description: '당신의 여행 스타일을 알아보고 이상적인 여행을 계획해보세요',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: '여행을 계획할 때 당신은?',
      options: [
        { text: '상세한 일정과 계획을 세운다', value: 'planner' },
        { text: '즉흥적으로 떠나며 현지에서 결정한다', value: 'spontaneous' },
        { text: '친구나 가족과 함께 계획한다', value: 'group' },
        { text: '여행 가이드나 정보를 꼼꼼히 조사한다', value: 'researcher' },
      ],
    },
    {
      question: '여행에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '새로운 경험과 모험', value: 'adventure' },
        { text: '편안함과 안정감', value: 'comfort' },
        { text: '문화와 역사 체험', value: 'culture' },
        { text: '자연과 풍경 감상', value: 'nature' },
      ],
    },
    {
      question: '여행 중 선호하는 활동은?',
      options: [
        { text: '새로운 곳을 탐험하고 모험', value: 'explore' },
        { text: '편안하게 휴식하고 여유를 즐긴다', value: 'relax' },
        { text: '박물관이나 문화재를 관람한다', value: 'museum' },
        { text: '자연 속에서 산책이나 등산을 한다', value: 'hiking' },
      ],
    },
    {
      question: '여행에서 가장 만족스러운 순간은?',
      options: [
        { text: '예상치 못한 새로운 발견을 했을 때', value: 'discovery' },
        { text: '편안하고 평화로운 시간을 보냈을 때', value: 'peace' },
        { text: '현지 문화를 깊이 체험했을 때', value: 'cultural' },
        { text: '아름다운 자연을 감상했을 때', value: 'scenic' },
      ],
    },
    {
      question: '여행 중 숙박을 선택할 때?',
      options: [
        { text: '독특하고 특별한 숙소를 선택한다', value: 'unique' },
        { text: '편안하고 안전한 숙소를 선택한다', value: 'safe' },
        { text: '현지 분위기를 느낄 수 있는 숙소', value: 'local' },
        { text: '자연 속에서 머물 수 있는 숙소', value: 'natural' },
      ],
    },
    {
      question: '여행에서 가장 어려워하는 것은?',
      options: [
        { text: '예상치 못한 상황에 대처하는 것', value: 'unexpected' },
        { text: '낯선 환경에 적응하는 것', value: 'adaptation' },
        { text: '언어 장벽을 극복하는 것', value: 'language' },
        { text: '일정을 조율하고 시간을 맞추는 것', value: 'schedule' },
      ],
    },
    {
      question: '여행 중 음식을 선택할 때?',
      options: [
        { text: '현지의 독특하고 새로운 음식을 시도한다', value: 'local-food' },
        { text: '익숙하고 안전한 음식을 선택한다', value: 'familiar' },
        { text: '현지 문화를 느낄 수 있는 전통 음식', value: 'traditional' },
        { text: '신선하고 자연스러운 음식을 선택한다', value: 'fresh' },
      ],
    },
    {
      question: '여행에서 가장 좋아하는 것은?',
      options: [
        { text: '새로운 사람들과 만나고 대화하는 것', value: 'meeting' },
        { text: '조용하고 평화로운 시간을 보내는 것', value: 'quiet' },
        { text: '현지 문화와 역사를 배우는 것', value: 'learning' },
        { text: '자연의 아름다움을 감상하는 것', value: 'beauty' },
      ],
    },
    {
      question: '여행 스타일을 한 마디로 표현하면?',
      options: [
        { text: '모험적이고 도전적인 여행', value: 'adventurous' },
        { text: '편안하고 여유로운 여행', value: 'comfortable' },
        { text: '문화적이고 교육적인 여행', value: 'educational' },
        { text: '자연적이고 치유적인 여행', value: 'healing' },
      ],
    },
    {
      question: '여행에서 가장 중요한 가치는?',
      options: [
        { text: '새로운 경험과 성장', value: 'growth' },
        { text: '편안함과 안정감', value: 'stability' },
        { text: '문화 이해와 교류', value: 'exchange' },
        { text: '자연과의 조화', value: 'harmony' },
      ],
    },
    {
      question: '여행 후 가장 만족스러운 것은?',
      options: [
        { text: '새로운 경험과 추억을 얻은 것', value: 'memories' },
        { text: '편안하고 휴식을 취한 것', value: 'rest' },
        { text: '문화적 지식과 이해를 얻은 것', value: 'knowledge' },
        { text: '자연의 아름다움을 체험한 것', value: 'experience' },
      ],
    },
    {
      question: '여행에서 가장 어려운 결정은?',
      options: [
        { text: '안전과 모험 사이의 선택', value: 'safety-adventure' },
        {
          text: '편안함과 새로운 경험 사이의 선택',
          value: 'comfort-experience',
        },
        { text: '문화 체험과 휴식 사이의 선택', value: 'culture-rest' },
        { text: '자연 탐험과 도시 관광 사이의 선택', value: 'nature-city' },
      ],
    },
    {
      question: '이상적인 여행 동반자는?',
      options: [
        {
          text: '모험을 즐기고 새로운 것을 시도하는 사람',
          value: 'adventurous',
        },
        { text: '편안하고 안정적인 여행을 선호하는 사람', value: 'stable' },
        { text: '문화와 역사에 관심이 많은 사람', value: 'cultural' },
        { text: '자연과 평화를 사랑하는 사람', value: 'nature-lover' },
      ],
    },
    {
      question: '여행에서 가장 좋아하는 교통수단은?',
      options: [
        { text: '자전거나 오토바이 같은 자유로운 이동', value: 'free' },
        { text: '편안하고 안전한 대중교통', value: 'public' },
        { text: '현지의 특색 있는 교통수단', value: 'local' },
        { text: '자연을 감상할 수 있는 교통수단', value: 'scenic' },
      ],
    },
    {
      question: '여행에서 가장 중요한 것은?',
      options: [
        { text: '새로운 경험과 추억', value: 'experience' },
        { text: '편안함과 휴식', value: 'relaxation' },
        { text: '문화적 이해와 교류', value: 'understanding' },
        { text: '자연과의 조화', value: 'nature-harmony' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const plannerCount = answers.filter((a) => a === 'planner').length;
    const spontaneousCount = answers.filter((a) => a === 'spontaneous').length;
    const luxuryCount = answers.filter((a) => a === 'luxury').length;
    const budgetCount = answers.filter((a) => a === 'budget').length;
    const cultureCount = answers.filter((a) => a === 'culture').length;
    const adventureCount = answers.filter((a) => a === 'adventure').length;
    const relaxationCount = answers.filter((a) => a === 'relaxation').length;
    const explorationCount = answers.filter((a) => a === 'exploration').length;

    // 스타일 점수 계산
    const organizedScore =
      plannerCount + luxuryCount + cultureCount + relaxationCount;
    const adventurousScore =
      spontaneousCount + budgetCount + adventureCount + explorationCount;

    if (organizedScore > adventurousScore) {
      return {
        title: '계획적 탐험가형',
        description:
          '당신은 여행에서 체계적이고 계획적인 접근을 선호합니다. 미리 조사하고 준비하여 완벽한 여행을 추구합니다.',
        detailedDescription:
          '문화와 역사를 중요하게 생각하며, 편안하고 안전한 여행을 선호합니다. 모든 것이 미리 준비된 완벽한 여행을 추구합니다.',
        traits: ['계획적', '체계적', '문화적', '안전 지향적'],
        strengths: ['완벽한 준비', '문화적 이해', '안전한 여행', '효율적 일정'],
        weaknesses: ['유연성 부족', '즉흥성 부족', '높은 비용', '스트레스'],
        goodMatches: ['즉흥적 모험가형'],
        badMatches: ['즉흥적 모험가형'],
        goodMatchReasons: [
          '즉흥적 모험가형: 당신의 계획성이 상대방의 즉흥성에 균형을 제공합니다',
        ],
        badMatchReasons: [
          '즉흥적 모험가형: 계획 없는 여행으로 인해 스트레스를 받을 수 있습니다',
        ],
        recommendations: [
          '유연성 기르기',
          '즉흥적 요소 추가하기',
          '완벽주의 완화하기',
          '예산 관리하기',
        ],
      };
    } else {
      return {
        title: '즉흥적 모험가형',
        description:
          '당신은 여행에서 자유롭고 즉흥적인 접근을 선호합니다. 새로운 경험과 모험을 추구합니다.',
        detailedDescription:
          '예산을 중요하게 생각하며, 새로운 곳을 탐험하고 모험을 즐깁니다. 계획보다는 순간의 영감을 따라 여행하는 것을 선호합니다.',
        traits: ['즉흥적', '모험적', '자유로움', '경제적'],
        strengths: ['적응력', '새로운 경험', '저렴한 여행', '자유로움'],
        weaknesses: ['준비 부족', '위험 요소', '예산 초과', '일정 지연'],
        goodMatches: ['계획적 탐험가형'],
        badMatches: ['계획적 탐험가형'],
        goodMatchReasons: [
          '계획적 탐험가형: 상대방의 계획성이 당신의 즉흥성에 안정감을 제공합니다',
        ],
        badMatchReasons: [
          '계획적 탐험가형: 계획 없는 여행으로 인해 갈등이 생길 수 있습니다',
        ],
        recommendations: [
          '기본 계획 세우기',
          '안전 요소 고려하기',
          '예산 관리하기',
          '일정 조정하기',
        ],
      };
    }
  },
};
