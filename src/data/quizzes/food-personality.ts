import type { Quiz } from '../../types';

export const foodPersonalityQuiz: Quiz = {
  id: 'food-personality',
  title: '음식 취향으로 보는 성격',
  description: '당신의 음식 취향을 통해 성격을 분석해보세요',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: '음식을 선택할 때 가장 중요하게 생각하는 것은?',
      options: [
        { text: '맛과 풍미', value: 'taste' },
        { text: '건강과 영양', value: 'health' },
        { text: '새로운 경험', value: 'experience' },
        { text: '편의성과 속도', value: 'convenience' },
      ],
    },
    {
      question: '새로운 음식을 시도할 때 당신은?',
      options: [
        { text: '즉시 시도하고 새로운 맛을 즐긴다', value: 'adventurous' },
        { text: '신중하게 고려한 후 시도한다', value: 'cautious' },
        { text: '다른 사람의 추천을 받고 시도한다', value: 'recommended' },
        { text: '익숙한 음식만 선호한다', value: 'familiar' },
      ],
    },
    {
      question: '음식을 먹을 때 선호하는 분위기는?',
      options: [
        { text: '활발하고 즐거운 분위기', value: 'lively' },
        { text: '조용하고 평화로운 분위기', value: 'quiet' },
        { text: '사람들과 함께하는 분위기', value: 'social' },
        { text: '집중할 수 있는 분위기', value: 'focused' },
      ],
    },
    {
      question: '음식에서 가장 만족스러운 것은?',
      options: [
        { text: '강렬하고 풍부한 맛', value: 'rich' },
        { text: '신선하고 건강한 맛', value: 'fresh' },
        { text: '독특하고 특별한 맛', value: 'unique' },
        { text: '편안하고 익숙한 맛', value: 'comfort' },
      ],
    },
    {
      question: '음식을 준비할 때 당신은?',
      options: [
        { text: '창의적으로 새로운 레시피를 시도한다', value: 'creative' },
        { text: '정확한 레시피를 따라 만든다', value: 'precise' },
        { text: '다른 사람과 함께 요리한다', value: 'collaborative' },
        { text: '간단하고 빠르게 만든다', value: 'quick' },
      ],
    },
    {
      question: '음식 취향을 한 마디로 표현하면?',
      options: [
        { text: '모험적이고 도전적인 취향', value: 'adventurous' },
        { text: '건강하고 균형 잡힌 취향', value: 'balanced' },
        { text: '사회적이고 즐거운 취향', value: 'social' },
        { text: '실용적이고 효율적인 취향', value: 'practical' },
      ],
    },
    {
      question: '음식에서 가장 어려워하는 것은?',
      options: [
        { text: '새로운 맛에 적응하는 것', value: 'adaptation' },
        { text: '건강과 맛의 균형을 맞추는 것', value: 'balance' },
        { text: '다른 사람의 취향을 맞추는 것', value: 'preference' },
        { text: '시간과 노력을 투자하는 것', value: 'effort' },
      ],
    },
    {
      question: '음식을 먹을 때 가장 좋아하는 것은?',
      options: [
        { text: '새로운 맛과 향을 발견하는 것', value: 'discovery' },
        { text: '건강하고 영양가 있는 식사', value: 'nutrition' },
        { text: '사람들과 함께 즐기는 식사', value: 'together' },
        { text: '편안하고 만족스러운 식사', value: 'satisfaction' },
      ],
    },
    {
      question: '음식에서 가장 중요한 가치는?',
      options: [
        { text: '맛과 즐거움', value: 'pleasure' },
        { text: '건강과 웰빙', value: 'wellness' },
        { text: '경험과 추억', value: 'memory' },
        { text: '효율성과 실용성', value: 'efficiency' },
      ],
    },
    {
      question: '음식을 선택할 때 당신의 스타일은?',
      options: [
        { text: '즉흥적이고 감각적인 선택', value: 'intuitive' },
        { text: '신중하고 분석적인 선택', value: 'analytical' },
        { text: '다른 사람의 의견을 참고한 선택', value: 'consultative' },
        { text: '익숙하고 안전한 선택', value: 'safe' },
      ],
    },
    {
      question: '음식에서 가장 만족스러운 순간은?',
      options: [
        { text: '예상치 못한 맛을 발견했을 때', value: 'surprise' },
        { text: '건강한 식사를 완료했을 때', value: 'completion' },
        { text: '사람들과 즐거운 식사를 했을 때', value: 'enjoyment' },
        { text: '편안하고 만족스러운 식사를 했을 때', value: 'comfort' },
      ],
    },
    {
      question: '음식에서 가장 어려운 결정은?',
      options: [
        { text: '새로운 것과 익숙한 것 사이의 선택', value: 'new-familiar' },
        { text: '맛과 건강 사이의 선택', value: 'taste-health' },
        {
          text: '개인 취향과 사회적 선호 사이의 선택',
          value: 'personal-social',
        },
        { text: '시간과 품질 사이의 선택', value: 'time-quality' },
      ],
    },
    {
      question: '음식에서 가장 좋아하는 경험은?',
      options: [
        {
          text: '새로운 레스토랑이나 음식을 발견하는 것',
          value: 'exploration',
        },
        { text: '건강하고 맛있는 식사를 준비하는 것', value: 'preparation' },
        { text: '사람들과 함께 식사를 준비하고 즐기는 것', value: 'sharing' },
        { text: '편안하고 효율적인 식사를 하는 것', value: 'efficiency' },
      ],
    },
    {
      question: '음식에서 가장 싫어하는 것은?',
      options: [
        { text: '단조롭고 지루한 음식', value: 'boring' },
        { text: '건강에 해로운 음식', value: 'unhealthy' },
        { text: '혼자서 먹는 음식', value: 'alone' },
        { text: '복잡하고 번거로운 음식', value: 'complicated' },
      ],
    },
    {
      question: '이상적인 식사는?',
      options: [
        { text: '새롭고 흥미로운 맛의 조합', value: 'interesting' },
        { text: '건강하고 영양가 있는 균형 잡힌 식사', value: 'nutritious' },
        { text: '사람들과 함께 즐기는 따뜻한 식사', value: 'warm' },
        { text: '편안하고 만족스러운 식사', value: 'satisfying' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const traditionalCount = answers.filter((a) => a === 'traditional').length;
    const adventurousCount = answers.filter((a) => a === 'adventurous').length;
    const healthCount = answers.filter((a) => a === 'health').length;
    const comfortCount = answers.filter((a) => a === 'comfort').length;
    const socialCount = answers.filter((a) => a === 'social').length;
    const independentCount = answers.filter((a) => a === 'independent').length;
    const planningCount = answers.filter((a) => a === 'planning').length;
    const spontaneousCount = answers.filter((a) => a === 'spontaneous').length;

    // 스타일 점수 계산
    const conservativeScore = traditionalCount + healthCount + planningCount;
    const adventurousScore = adventurousCount + socialCount + spontaneousCount;
    const comfortScore = comfortCount + independentCount;

    const scores = [
      { type: 'conservative', score: conservativeScore },
      { type: 'adventurous', score: adventurousScore },
      { type: 'comfort', score: comfortScore },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      conservative: {
        title: '전통적 건강가형',
        description:
          '당신은 전통적이고 건강한 음식을 선호합니다. 체계적이고 계획적인 식습관을 가지고 있습니다.',
        detailedDescription:
          '건강을 중요하게 생각하며, 전통적인 요리법과 영양을 고려한 식사를 선호합니다. 안정적이고 신뢰할 수 있는 음식 선택을 합니다.',
        traits: ['전통적', '건강 지향적', '계획적', '신중함'],
        strengths: ['건강한 식습관', '영양 지식', '일관성', '안정성'],
        weaknesses: ['새로움 회피', '유연성 부족', '즐거움 부족', '보수적'],
        goodMatches: ['모험적 탐험가형', '편안한 홈쿡형'],
        badMatches: ['즉흥적 즐거움형'],
        goodMatchReasons: [
          '모험적 탐험가형: 함께 새로운 건강한 요리를 탐험할 수 있습니다',
          '편안한 홈쿡형: 비슷한 가치관으로 건강한 식사를 함께 즐길 수 있습니다',
        ],
        badMatchReasons: [
          '즉흥적 즐거움형: 건강하지 않은 음식 선택으로 갈등이 생길 수 있습니다',
        ],
        recommendations: [
          '새로운 요리 시도하기',
          '즐거움도 추구하기',
          '유연성 기르기',
          '보수적 성향 완화하기',
        ],
      },
      adventurous: {
        title: '모험적 탐험가형',
        description:
          '당신은 새로운 음식과 경험을 추구합니다. 다양한 문화의 음식을 즐기며 모험을 선호합니다.',
        detailedDescription:
          '사람들과 함께 식사를 즐기며, 새로운 맛과 경험을 추구합니다. 즉흥적이고 자유로운 식습관을 가지고 있습니다.',
        traits: ['모험적', '개방적', '사교적', '즉흥적'],
        strengths: ['다양한 경험', '문화적 이해', '적응력', '즐거움'],
        weaknesses: ['일관성 부족', '건강 무시', '예산 초과', '안정성 부족'],
        goodMatches: ['전통적 건강가형', '즉흥적 즐거움형'],
        badMatches: ['편안한 홈쿡형'],
        goodMatchReasons: [
          '전통적 건강가형: 함께 새로운 건강한 요리를 탐험할 수 있습니다',
          '즉흥적 즐거움형: 함께 즐거운 음식 경험을 나눌 수 있습니다',
        ],
        badMatchReasons: [
          '편안한 홈쿡형: 집에서 편안하게 먹는 것을 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '건강 요소 고려하기',
          '일관성 기르기',
          '예산 관리하기',
          '안정적 요소 추가하기',
        ],
      },
      comfort: {
        title: '편안한 홈쿡형',
        description:
          '당신은 편안하고 익숙한 음식을 선호합니다. 집에서 조용히 식사를 즐기며 안정감을 추구합니다.',
        detailedDescription:
          '독립적인 식습관을 가지고 있으며, 편안하고 익숙한 환경에서 식사를 즐깁니다. 복잡한 요리보다는 간단하고 편안한 음식을 선호합니다.',
        traits: ['편안함', '독립적', '안정적', '간단함'],
        strengths: ['안정성', '독립성', '편안함', '일관성'],
        weaknesses: ['새로움 회피', '사회성 부족', '경험 부족', '보수적'],
        goodMatches: ['전통적 건강가형'],
        badMatches: ['모험적 탐험가형', '즉흥적 즐거움형'],
        goodMatchReasons: [
          '전통적 건강가형: 비슷한 가치관으로 건강한 식사를 함께 즐길 수 있습니다',
        ],
        badMatchReasons: [
          '모험적 탐험가형: 새로운 음식 경험을 선호하는 성향과 맞지 않을 수 있습니다',
          '즉흥적 즐거움형: 즉흥적인 식사 스타일과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '새로운 음식 시도하기',
          '사회적 식사 경험하기',
          '다양한 경험 쌓기',
          '개방성 기르기',
        ],
      },
    };

    return (
      results[maxScore.type as keyof typeof results] || results.conservative
    );
  },
};
