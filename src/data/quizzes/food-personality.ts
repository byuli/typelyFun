import type { Quiz } from '../../types';

export const foodPersonalityQuiz: Quiz = {
  id: 'food-personality',
  title: '당신은 어떤 음식인가요?',
  description:
    '음식 취향으로 알아보는 당신의 숨겨진 성격! 어떤 음식과 가장 닮았을까요?',
  category: '라이프스타일',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '새로운 음식을 발견했을 때 당신의 반응은?',
      options: [
        {
          text: '"와! 이거 완전 새로운 맛이야!" (즉시 도전)',
          value: 'adventurous',
        },
        {
          text: '"음... 영양성분은 어떨까?" (신중하게 분석)',
          value: 'analytical',
        },
        {
          text: '"친구가 추천해줬는데 맛있을까?" (추천 의존)',
          value: 'social',
        },
        {
          text: '"역시 내가 좋아하는 메뉴가 최고야" (안전 선호)',
          value: 'comfort',
        },
      ],
    },
    {
      question: '음식점에서 메뉴를 고를 때 당신은?',
      options: [
        { text: '"오늘은 완전 새로운 걸 시도해보자!"', value: 'explorer' },
        {
          text: '"칼로리, 단백질, 비타민... 체크 완료!"',
          value: 'health-conscious',
        },
        { text: '"다른 사람들은 뭐 먹고 있지?"', value: 'trend-follower' },
        { text: '"역시 집에서 먹는 게 최고야"', value: 'homebody' },
      ],
    },
    {
      question: '음식을 먹을 때 가장 중요한 것은?',
      options: [
        { text: '강렬하고 독특한 맛의 폭발!', value: 'intense' },
        { text: '신선하고 건강한 자연의 맛', value: 'natural' },
        { text: '사람들과 함께하는 즐거운 분위기', value: 'social' },
        { text: '편안하고 익숙한 맛의 안정감', value: 'comfort' },
      ],
    },
    {
      question: '요리할 때 당신의 스타일은?',
      options: [
        {
          text: '"레시피? 그런 건 없어! 내 감각이 최고야!"',
          value: 'creative',
        },
        { text: '"정확히 3.5g의 소금, 2분 30초 조리"', value: 'precise' },
        {
          text: '"다 같이 요리하는 게 제일 재밌어!"',
          value: 'collaborative',
        },
        { text: '"5분 만에 끝내는 간단 요리!"', value: 'efficient' },
      ],
    },
    {
      question: '음식에서 가장 싫어하는 것은?',
      options: [
        { text: '지루하고 단조로운 맛', value: 'boring' },
        { text: '건강에 해로운 인공 첨가물', value: 'artificial' },
        { text: '혼자서 먹는 외로운 식사', value: 'lonely' },
        { text: '복잡하고 번거로운 요리 과정', value: 'complicated' },
      ],
    },
    {
      question: '이상적인 식사 시간은?',
      options: [
        { text: '세계 각국의 음식을 탐험하는 시간', value: 'global' },
        { text: '건강과 영양을 생각하는 명상 시간', value: 'mindful' },
        { text: '가족, 친구들과 떠드는 파티 시간', value: 'party' },
        { text: '집에서 편안하게 쉬는 시간', value: 'relaxing' },
      ],
    },
    {
      question: '음식 선택에서 당신의 우선순위는?',
      options: [
        { text: '새로운 경험과 도전', value: 'experience' },
        { text: '건강과 영양', value: 'nutrition' },
        { text: '사람들과의 연결', value: 'connection' },
        { text: '편안함과 안정감', value: 'stability' },
      ],
    },
    {
      question: '음식을 먹을 때 당신의 감정은?',
      options: [
        { text: '"와! 이건 완전 새로운 세계야!"', value: 'excited' },
        { text: '"건강한 식사로 내 몸을 챙기고 있어"', value: 'satisfied' },
        { text: '"사람들과 함께라서 더 맛있어!"', value: 'happy' },
        { text: '"편안하고 안정적인 맛이야"', value: 'calm' },
      ],
    },
    {
      question: '음식에서 가장 만족스러운 순간은?',
      options: [
        { text: '예상치 못한 맛의 조합을 발견했을 때', value: 'discovery' },
        { text: '건강한 식사를 완료했을 때', value: 'achievement' },
        { text: '사람들과 즐거운 식사를 마쳤을 때', value: 'celebration' },
        { text: '편안하고 만족스러운 식사를 했을 때', value: 'contentment' },
      ],
    },
    {
      question: '음식 취향을 한 마디로 표현하면?',
      options: [
        { text: '모험적이고 도전적인 맛의 탐험가', value: 'adventurer' },
        { text: '건강하고 균형 잡힌 영양 전문가', value: 'nutritionist' },
        { text: '사회적이고 즐거운 파티 애호가', value: 'socialite' },
        { text: '편안하고 안정적인 홈쿡러', value: 'homecook' },
      ],
    },
    {
      question: '음식에서 가장 어려운 결정은?',
      options: [
        { text: '새로운 것과 익숙한 것 사이의 선택', value: 'choice' },
        { text: '맛과 건강 사이의 균형', value: 'balance' },
        { text: '개인 취향과 다른 사람 의견 사이', value: 'compromise' },
        { text: '시간과 품질 사이의 선택', value: 'priority' },
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
        { text: '사람들과 함께 요리하고 먹는 것', value: 'sharing' },
        { text: '집에서 편안하게 식사하는 것', value: 'comfort' },
      ],
    },
    {
      question: '음식에서 당신이 추구하는 가치는?',
      options: [
        { text: '새로운 경험과 자극', value: 'stimulation' },
        { text: '건강과 웰빙', value: 'wellness' },
        { text: '사람들과의 관계', value: 'relationship' },
        { text: '평화와 안정', value: 'peace' },
      ],
    },
    {
      question: '음식을 선택할 때 당신의 직감은?',
      options: [
        { text: '"이거 완전 내 스타일일 것 같아!"', value: 'intuitive' },
        { text: '"영양성분표를 먼저 확인해야겠어"', value: 'analytical' },
        {
          text: '"다른 사람들이 뭐라고 하는지 들어보자"',
          value: 'influenced',
        },
        { text: '"역시 검증된 메뉴가 안전해"', value: 'safe' },
      ],
    },
    {
      question: '이상적인 식사는?',
      options: [
        { text: '놀라운 맛의 서커스 같은 식사', value: 'spectacle' },
        { text: '건강검진처럼 완벽한 영양 균형', value: 'perfect' },
        { text: '생일파티처럼 즐거운 분위기', value: 'festive' },
        { text: '집에서의 편안한 휴식 같은 식사', value: 'cozy' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const adventurousCount = answers.filter((a) =>
      [
        'adventurous',
        'explorer',
        'intense',
        'creative',
        'global',
        'experience',
        'excited',
        'discovery',
        'adventurer',
        'choice',
        'exploration',
        'stimulation',
        'intuitive',
        'spectacle',
      ].includes(a as string)
    ).length;

    const healthCount = answers.filter((a) =>
      [
        'analytical',
        'health-conscious',
        'natural',
        'precise',
        'mindful',
        'nutrition',
        'satisfied',
        'achievement',
        'nutritionist',
        'balance',
        'preparation',
        'wellness',
        'analytical',
        'perfect',
      ].includes(a as string)
    ).length;

    const socialCount = answers.filter((a) =>
      [
        'social',
        'trend-follower',
        'collaborative',
        'party',
        'connection',
        'happy',
        'celebration',
        'socialite',
        'compromise',
        'sharing',
        'relationship',
        'influenced',
        'festive',
      ].includes(a as string)
    ).length;

    const comfortCount = answers.filter((a) =>
      [
        'comfort',
        'homebody',
        'efficient',
        'relaxing',
        'stability',
        'calm',
        'contentment',
        'homecook',
        'priority',
        'comfort',
        'peace',
        'safe',
        'cozy',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'adventurous', score: adventurousCount },
      { type: 'health-conscious', score: healthCount },
      { type: 'social', score: socialCount },
      { type: 'comfort', score: comfortCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      adventurous: {
        title: '마라탕 같은 모험가',
        description: '당신은 마라탕처럼 강렬하고 도전적인 성격의 소유자입니다!',
        detailedDescription: `당신은 마라탕처럼 강렬하고 도전적인 성격을 가지고 있어요. 새로운 경험을 추구하고, 예상치 못한 맛(인생)을 즐기는 모험가입니다. 

마라탕처럼 처음에는 매워서 겁날 수도 있지만, 한 번 맛을 들이면 중독될 정도로 매력적이에요. 다양한 재료(경험)를 조합해서 새로운 맛(기회)을 만들어내는 창의성도 뛰어나고, 강렬한 맛(감정)을 추구하는 열정적인 성격이에요.

하지만 마라탕이 너무 매우면 위장에 부담이 되듯이, 당신도 때로는 너무 많은 도전을 동시에 하려다가 스트레스를 받을 수 있어요. 가끔은 순한 국수(평온한 시간)도 필요하다는 걸 잊지 마세요!`,
        traits: ['도전적', '창의적', '열정적', '모험적', '강렬함'],
        strengths: [
          '새로운 경험 추구',
          '창의적 사고',
          '적응력',
          '열정',
          '도전 정신',
        ],
        weaknesses: [
          '안정성 부족',
          '성급함',
          '위험 감수',
          '스트레스',
          '일관성 부족',
        ],
        goodMatches: ['라멘 같은 건강가', '피자 같은 사교가'],
        badMatches: ['식빵 같은 안정가'],
        goodMatchReasons: [
          '라멘 같은 건강가: 함께 건강하면서도 맛있는 새로운 요리를 탐험할 수 있어요',
          '피자 같은 사교가: 함께 즐거운 음식(인생) 경험을 나눌 수 있어요',
        ],
        badMatchReasons: [
          '식빵 같은 안정가: 너무 안전하고 보수적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 순한 음식(평온한 시간)도 즐겨보세요',
          '안정성도 중요하다는 걸 기억하세요',
          '성급한 결정보다는 신중한 판단을 해보세요',
          '스트레스 관리에 신경 쓰세요',
        ],
      },
      'health-conscious': {
        title: '라멘 같은 건강가',
        description:
          '당신은 라멘처럼 균형 잡히고 영양가 있는 성격의 소유자입니다!',
        detailedDescription: `당신은 라멘처럼 균형 잡히고 영양가 있는 성격을 가지고 있어요. 면(기본), 국물(감정), 고명(경험)이 모두 조화롭게 어우러진 완벽한 조합이에요.

라멘처럼 체계적이고 계획적인 성격으로, 건강과 영양을 중요하게 생각해요. 면(기본)이 탄탄해야 국물(감정)이 맛있듯이, 당신도 기본기가 탄탄하고 안정적인 성격이에요.

하지만 라멘도 너무 정형화되면 지루할 수 있듯이, 당신도 때로는 너무 완벽주의적이거나 보수적일 수 있어요. 가끔은 라멘에 특별한 토핑(새로운 경험)을 추가해보는 것도 좋을 것 같아요!`,
        traits: ['균형잡힘', '체계적', '건강지향적', '완벽주의적', '안정적'],
        strengths: ['계획성', '건강한 습관', '일관성', '신뢰성', '책임감'],
        weaknesses: [
          '유연성 부족',
          '보수적',
          '즐거움 부족',
          '완벽주의',
          '새로움 회피',
        ],
        goodMatches: ['마라탕 같은 모험가', '식빵 같은 안정가'],
        badMatches: ['피자 같은 사교가'],
        goodMatchReasons: [
          '마라탕 같은 모험가: 함께 건강하면서도 맛있는 새로운 요리를 탐험할 수 있어요',
          '식빵 같은 안정가: 비슷한 가치관으로 안정적인 관계를 만들 수 있어요',
        ],
        badMatchReasons: [
          '피자 같은 사교가: 너무 즉흥적이고 사회적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 새로운 경험도 시도해보세요',
          '완벽하지 않아도 괜찮아요',
          '즐거움도 추구해보세요',
          '유연성을 기르세요',
        ],
      },
      social: {
        title: '피자 같은 사교가',
        description:
          '당신은 피자처럼 사람들과 함께 나누는 것을 좋아하는 사교적인 성격입니다!',
        detailedDescription: `당신은 피자처럼 사람들과 함께 나누는 것을 좋아하는 사교적인 성격이에요. 피자가 혼자 먹기에는 너무 크고, 여러 사람이 함께 나누어 먹어야 맛있듯이, 당신도 사람들과 함께 있을 때 가장 빛나는 성격이에요.

다양한 토핑(사람들)이 어우러져서 완성되는 피자처럼, 당신도 다양한 사람들과의 관계를 중요하게 생각해요. 피자가 파티 음식의 대표주자이듯이, 당신도 분위기 메이커 역할을 잘 해요.

하지만 피자도 너무 많은 토핑이 있으면 맛이 복잡해질 수 있듯이, 당신도 때로는 너무 많은 관계에 에너지를 쏟다가 지칠 수 있어요. 가끔은 심플한 마르게리타(혼자만의 시간)도 필요하다는 걸 잊지 마세요!`,
        traits: [
          '사교적',
          '친화적',
          '즐거움 추구',
          '관계중시',
          '분위기 메이커',
        ],
        strengths: [
          '대인관계 능력',
          '소통 능력',
          '긍정적 에너지',
          '적응력',
          '공감 능력',
        ],
        weaknesses: [
          '독립성 부족',
          '집중력 부족',
          '깊이 부족',
          '에너지 소모',
          '의존성',
        ],
        goodMatches: ['마라탕 같은 모험가', '식빵 같은 안정가'],
        badMatches: ['라멘 같은 건강가'],
        goodMatchReasons: [
          '마라탕 같은 모험가: 함께 즐거운 음식(인생) 경험을 나눌 수 있어요',
          '식빵 같은 안정가: 안정적인 관계를 바탕으로 즐거운 시간을 보낼 수 있어요',
        ],
        badMatchReasons: [
          '라멘 같은 건강가: 너무 체계적이고 완벽주의적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 혼자만의 시간도 가져보세요',
          '깊이 있는 관계도 만들어보세요',
          '에너지 관리를 신경 쓰세요',
          '독립성도 기르세요',
        ],
      },
      comfort: {
        title: '식빵 같은 안정가',
        description: '당신은 식빵처럼 편안하고 안정적인 성격의 소유자입니다!',
        detailedDescription: `당신은 식빵처럼 편안하고 안정적인 성격을 가지고 있어요. 식빵이 어떤 음식과도 잘 어울리고, 언제 먹어도 맛있듯이, 당신도 어떤 상황에서도 안정감을 주는 믿음직한 성격이에요.

식빵이 토스트, 샌드위치, 프렌치토스트 등 다양한 모습으로 변신할 수 있듯이, 당신도 상황에 따라 적응력이 뛰어나요. 하지만 기본적으로는 편안하고 익숙한 것을 선호하는 성격이에요.

하지만 식빵도 너무 단조로울 수 있듯이, 당신도 때로는 너무 보수적이거나 변화를 두려워할 수 있어요. 가끔은 식빵에 잼(새로운 경험)을 바르거나, 토스트(새로운 도전)로 만들어보는 것도 좋을 것 같아요!`,
        traits: ['안정적', '편안함', '적응력', '신뢰성', '보수적'],
        strengths: ['안정성', '신뢰성', '일관성', '적응력', '편안함'],
        weaknesses: [
          '새로움 회피',
          '보수적',
          '도전 부족',
          '지루함',
          '변화 두려움',
        ],
        goodMatches: ['라멘 같은 건강가', '피자 같은 사교가'],
        badMatches: ['마라탕 같은 모험가'],
        goodMatchReasons: [
          '라멘 같은 건강가: 비슷한 가치관으로 안정적인 관계를 만들 수 있어요',
          '피자 같은 사교가: 안정적인 관계를 바탕으로 즐거운 시간을 보낼 수 있어요',
        ],
        badMatchReasons: [
          '마라탕 같은 모험가: 너무 도전적이고 변화를 추구하는 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 새로운 경험도 시도해보세요',
          '변화를 두려워하지 마세요',
          '도전 정신을 기르세요',
          '새로움에 대한 개방성을 가져보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.comfort;
  },
};
