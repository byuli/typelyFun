import type { Quiz } from '../../types';

export const shoppingStyleQuiz: Quiz = {
  id: 'shopping-style',
  title: '쇼핑 성향 분석',
  description: '당신의 쇼핑 스타일을 알아보고 최적의 쇼핑 전략을 찾아보세요',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: '쇼핑을 시작할 때 당신은?',
      options: [
        { text: '미리 목록을 만들고 계획적으로 쇼핑한다', value: 'planner' },
        { text: '즉흥적으로 가고 싶은 곳에 간다', value: 'impulsive' },
        { text: '친구나 가족과 함께 쇼핑한다', value: 'social' },
        { text: '온라인으로 미리 조사하고 비교한다', value: 'researcher' },
      ],
    },
    {
      question: '쇼핑에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '가격과 가성비', value: 'price' },
        { text: '품질과 브랜드', value: 'quality' },
        { text: '디자인과 스타일', value: 'design' },
        { text: '편의성과 실용성', value: 'convenience' },
      ],
    },
    {
      question: '쇼핑할 때 당신의 행동은?',
      options: [
        { text: '여러 매장을 돌아다니며 비교한다', value: 'comparison' },
        { text: '첫인상에 좋은 것을 바로 구매한다', value: 'first-impression' },
        { text: '다른 사람의 의견을 구한다', value: 'opinion' },
        { text: '리뷰와 평가를 꼼꼼히 확인한다', value: 'review' },
      ],
    },
    {
      question: '쇼핑에서 가장 만족스러운 순간은?',
      options: [
        { text: '할인이나 특가를 발견했을 때', value: 'discount' },
        { text: '원하는 브랜드의 제품을 구매했을 때', value: 'brand' },
        { text: '예쁜 디자인의 제품을 찾았을 때', value: 'beautiful' },
        { text: '실용적이고 유용한 제품을 구매했을 때', value: 'useful' },
      ],
    },
    {
      question: '쇼핑에서 가장 어려워하는 것은?',
      options: [
        { text: '가격 비교와 선택', value: 'choice' },
        { text: '품질과 가격의 균형', value: 'balance' },
        { text: '다른 사람의 의견과 자신의 취향', value: 'preference' },
        { text: '실용성과 디자인의 선택', value: 'practical' },
      ],
    },
    {
      question: '쇼핑할 때 선호하는 환경은?',
      options: [
        { text: '조용하고 여유로운 분위기', value: 'quiet' },
        { text: '활발하고 다양한 상품이 있는 곳', value: 'variety' },
        { text: '친구들과 함께 즐거운 분위기', value: 'fun' },
        { text: '체계적이고 정돈된 공간', value: 'organized' },
      ],
    },
    {
      question: '쇼핑에서 가장 잘하는 것은?',
      options: [
        { text: '가격 비교와 합리적 선택', value: 'rational' },
        { text: '품질과 브랜드 판단', value: 'judgment' },
        { text: '스타일과 디자인 선택', value: 'style' },
        { text: '실용성과 기능성 평가', value: 'function' },
      ],
    },
    {
      question: '쇼핑 스타일을 한 마디로 표현하면?',
      options: [
        { text: '계획적이고 합리적인 쇼핑', value: 'planned' },
        { text: '즉흥적이고 감성적인 쇼핑', value: 'emotional' },
        { text: '사회적이고 즐거운 쇼핑', value: 'social' },
        { text: '신중하고 분석적인 쇼핑', value: 'analytical' },
      ],
    },
    {
      question: '쇼핑에서 가장 중요한 가치는?',
      options: [
        { text: '경제성과 합리성', value: 'economy' },
        { text: '품질과 만족도', value: 'satisfaction' },
        { text: '개성과 스타일', value: 'personality' },
        { text: '실용성과 효율성', value: 'efficiency' },
      ],
    },
    {
      question: '쇼핑 후 가장 만족스러운 것은?',
      options: [
        { text: '예산 내에서 좋은 물건을 구매한 것', value: 'budget' },
        { text: '원하는 브랜드의 제품을 구매한 것', value: 'desired' },
        { text: '예쁘고 만족스러운 제품을 구매한 것', value: 'satisfying' },
        { text: '실용적이고 유용한 제품을 구매한 것', value: 'practical' },
      ],
    },
    {
      question: '쇼핑에서 가장 어려운 결정은?',
      options: [
        { text: '가격과 품질 사이의 선택', value: 'price-quality' },
        { text: '브랜드와 디자인 사이의 선택', value: 'brand-design' },
        { text: '개인 취향과 트렌드 사이의 선택', value: 'trend-preference' },
        { text: '실용성과 스타일 사이의 선택', value: 'style-function' },
      ],
    },
    {
      question: '쇼핑에서 가장 좋아하는 것은?',
      options: [
        { text: '할인과 특가를 발견하는 것', value: 'deal' },
        { text: '원하는 브랜드의 제품을 찾는 것', value: 'find' },
        { text: '예쁜 디자인의 제품을 발견하는 것', value: 'discover' },
        { text: '실용적인 제품을 찾는 것', value: 'practical-find' },
      ],
    },
    {
      question: '쇼핑에서 가장 싫어하는 것은?',
      options: [
        { text: '가격이 비싸거나 불합리한 것', value: 'expensive' },
        { text: '품질이 좋지 않거나 신뢰할 수 없는 것', value: 'unreliable' },
        { text: '디자인이 마음에 들지 않는 것', value: 'ugly' },
        { text: '실용적이지 않거나 불편한 것', value: 'inconvenient' },
      ],
    },
    {
      question: '쇼핑에서 가장 잘하는 전략은?',
      options: [
        { text: '미리 조사하고 비교하여 구매', value: 'research' },
        { text: '첫인상과 감각으로 선택', value: 'intuition' },
        { text: '다른 사람의 추천을 받아 구매', value: 'recommendation' },
        { text: '리뷰와 평가를 참고하여 구매', value: 'review-based' },
      ],
    },
    {
      question: '이상적인 쇼핑 경험은?',
      options: [
        { text: '합리적인 가격에 좋은 품질의 제품 구매', value: 'value' },
        {
          text: '원하는 브랜드의 만족스러운 제품 구매',
          value: 'brand-satisfaction',
        },
        { text: '예쁘고 개성 있는 제품 구매', value: 'unique' },
        { text: '실용적이고 효율적인 제품 구매', value: 'efficient' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const plannerCount = answers.filter((a) => a === 'planner').length;
    const spontaneousCount = answers.filter((a) => a === 'spontaneous').length;
    const carefulCount = answers.filter((a) => a === 'careful').length;
    const impulsiveCount = answers.filter((a) => a === 'impulsive').length;
    const strategicCount = answers.filter((a) => a === 'strategic').length;
    const enthusiasticCount = answers.filter(
      (a) => a === 'enthusiastic'
    ).length;
    const cautiousCount = answers.filter((a) => a === 'cautious').length;
    const decisiveCount = answers.filter((a) => a === 'decisive').length;
    const independentCount = answers.filter((a) => a === 'independent').length;
    const socialCount = answers.filter((a) => a === 'social').length;
    const conservativeCount = answers.filter(
      (a) => a === 'conservative'
    ).length;
    const adventurousCount = answers.filter((a) => a === 'adventurous').length;
    const rationalCount = answers.filter((a) => a === 'rational').length;
    const emotionalCount = answers.filter((a) => a === 'emotional').length;
    const thoroughCount = answers.filter((a) => a === 'thorough').length;
    const efficientCount = answers.filter((a) => a === 'efficient').length;
    const organizedCount = answers.filter((a) => a === 'organized').length;
    const quantityCount = answers.filter((a) => a === 'quantity').length;
    const acceptingCount = answers.filter((a) => a === 'accepting').length;
    const perfectionistCount = answers.filter(
      (a) => a === 'perfectionist'
    ).length;

    // 스타일 점수 계산
    const rationalScore =
      plannerCount +
      carefulCount +
      strategicCount +
      cautiousCount +
      conservativeCount +
      rationalCount +
      thoroughCount +
      organizedCount +
      acceptingCount;
    const emotionalScore =
      spontaneousCount +
      impulsiveCount +
      enthusiasticCount +
      decisiveCount +
      adventurousCount +
      emotionalCount +
      efficientCount +
      quantityCount +
      perfectionistCount;
    const socialScore = socialCount;

    // 가장 높은 점수의 스타일 결정
    if (socialScore >= 1) {
      return {
        title: '사회적 즐거움형',
        description:
          '당신은 쇼핑에서 사회적 요소를 중요하게 생각합니다. 친구나 가족과 함께 쇼핑하는 것을 즐기며, 다른 사람의 의견을 참고합니다.',
        detailedDescription:
          '쇼핑을 통해 관계를 즐기고, 함께하는 경험을 추구합니다. 혼자보다는 다른 사람과 함께 쇼핑할 때 더 큰 만족감을 느끼며, 쇼핑을 사회적 활동으로 여깁니다.',
        traits: ['사교적', '협력적', '경험 중시', '관계 지향적'],
        strengths: [
          '사회적 네트워킹',
          '다양한 의견 수렴',
          '즐거운 경험',
          '관계 형성',
        ],
        weaknesses: [
          '타인 의존적',
          '주체성 부족',
          '과도한 영향',
          '결정 어려움',
        ],
        goodMatches: ['합리적 계획가형', '감성적 즉흥형'],
        badMatches: ['분석적 연구가형'],
        goodMatchReasons: [
          '합리적 계획가형: 함께 정보를 나누며 더 똑똑한 쇼핑을 할 수 있습니다',
          '감성적 즉흥형: 함께 즐거운 쇼핑 경험을 나눌 수 있습니다',
        ],
        badMatchReasons: [
          '분석적 연구가형: 혼자 집중해서 쇼핑하는 것을 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '개인적인 취향 명확히 하기',
          '주체적 결정 연습하기',
          '혼자 쇼핑도 시도하기',
          '진정한 필요 vs 사회적 영향 구분하기',
        ],
      };
    } else if (emotionalScore > rationalScore) {
      return {
        title: '감성적 즉흥형',
        description:
          '당신은 쇼핑에서 감성적이고 즉흥적인 접근을 선호합니다. 첫인상과 감각에 따라 선택하며, 브랜드와 디자인을 중요하게 생각합니다.',
        detailedDescription:
          '쇼핑 자체를 즐기며, 개성과 스타일을 추구합니다. 예쁘거나 마음에 드는 것을 보면 참기 어려워하며, 그 순간의 감정을 중시합니다.',
        traits: ['감성적', '즉흥적', '트렌드 민감', '직관적'],
        strengths: ['트렌드 선도', '즉석 만족감', '다양한 경험', '새로움 추구'],
        weaknesses: ['과소비', '후회 구매', '예산 초과', '충동성'],
        goodMatches: ['사회적 즐거움형', '분석적 연구가형'],
        badMatches: ['합리적 계획가형'],
        goodMatchReasons: [
          '사회적 즐거움형: 함께 쇼핑하며 즐거움을 나누고 서로의 선택을 응원할 수 있습니다',
          '분석적 연구가형: 당신의 감성적 선택에 실용적 조언을 제공해줍니다',
        ],
        badMatchReasons: [
          '합리적 계획가형: 소비 가치관 차이로 갈등이 생길 수 있습니다',
        ],
        recommendations: [
          '예산 한도 설정하기',
          '구매 전 하루 더 생각하기',
          '필요성 체크리스트 만들기',
          '감정적 쇼핑 이유 파악하기',
        ],
      };
    } else if (rationalScore > emotionalScore) {
      return {
        title: '합리적 계획가형',
        description:
          '당신은 쇼핑에서 계획적이고 합리적인 접근을 선호합니다. 가격과 품질을 꼼꼼히 비교하고, 미리 조사하여 최적의 선택을 합니다.',
        detailedDescription:
          '경제성과 실용성을 중요하게 생각하며, 예산 내에서 최고의 가치를 추구합니다. 체계적이고 신중한 소비를 통해 후회 없는 구매를 실천합니다.',
        traits: ['계획적', '신중함', '합리적', '꼼꼼함'],
        strengths: ['가성비 추구', '예산 관리', '충분한 검토', '현명한 선택'],
        weaknesses: [
          '결정 시간 오래 걸림',
          '기회 놓침',
          '과도한 분석',
          '즉흥성 부족',
        ],
        goodMatches: ['분석적 연구가형', '사회적 즐거움형'],
        badMatches: ['감성적 즉흥형'],
        goodMatchReasons: [
          '분석적 연구가형: 서로 좋은 정보를 나누며 더 똑똑한 소비를 할 수 있습니다',
          '사회적 즐거움형: 함께 정보를 공유하며 즐거운 쇼핑을 할 수 있습니다',
        ],
        badMatchReasons: [
          '감성적 즉흥형: 계획 없는 소비로 인해 스트레스를 받을 수 있습니다',
        ],
        recommendations: [
          '즉흥적 구매도 가끔 시도하기',
          '결정 시간 줄이기',
          '경험 소비도 고려하기',
          '완벽주의 줄이기',
        ],
      };
    } else {
      return {
        title: '분석적 연구가형',
        description:
          '당신은 쇼핑에서 분석적이고 신중한 접근을 선호합니다. 리뷰와 평가를 꼼꼼히 확인하고, 실용성과 기능성을 중요하게 생각합니다.',
        detailedDescription:
          '체계적으로 정보를 수집하여 최적의 선택을 합니다. 감정보다는 사실과 데이터를 바탕으로 결정하며, 장기적인 관점에서 구매를 고려합니다.',
        traits: ['분석적', '신중함', '실용적', '체계적'],
        strengths: [
          '정보 수집 능력',
          '객관적 판단',
          '실용적 선택',
          '장기적 관점',
        ],
        weaknesses: [
          '결정 시간 오래 걸림',
          '즐거움 부족',
          '과도한 분석',
          '감정적 만족 부족',
        ],
        goodMatches: ['합리적 계획가형', '감성적 즉흥형'],
        badMatches: ['사회적 즐거움형'],
        goodMatchReasons: [
          '합리적 계획가형: 비슷한 가치관으로 건전한 소비 문화를 함께 만들어갈 수 있습니다',
          '감성적 즉흥형: 당신의 분석적 조언이 감정적 선택에 균형을 제공합니다',
        ],
        badMatchReasons: [
          '사회적 즐거움형: 혼자 집중해서 쇼핑하는 것을 선호하는 성향이 이해되지 않을 수 있습니다',
        ],
        recommendations: [
          '가끔은 감성적 구매도 시도하기',
          '즐거움도 추구하기',
          '결정 시간 줄이기',
          '완벽주의 완화하기',
        ],
      };
    }
  },
};
