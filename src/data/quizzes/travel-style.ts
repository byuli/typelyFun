import type { Quiz } from '../../types';

export const travelStyleQuiz: Quiz = {
  id: 'travel-style',
  title: '✈️ 당신은 어떤 여행자인가요?',
  description:
    '여행 스타일로 알아보는 당신의 숨겨진 성격! 어떤 여행자와 가장 닮았을까요?',
  category: '라이프스타일',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '여행 계획을 세울 때 당신의 스타일은?',
      options: [
        { text: '🗺️ "3개월 전부터 상세한 일정표 작성!"', value: 'planner' },
        {
          text: '🎯 "내일 떠날까? 오늘 떠날까?" (즉흥적)',
          value: 'spontaneous',
        },
        { text: '👥 "친구들이랑 같이 계획하는 게 최고!"', value: 'group' },
        {
          text: '📚 "여행 가이드 10권 읽고 리뷰 100개 확인!"',
          value: 'researcher',
        },
      ],
    },
    {
      question: '여행에서 가장 중요한 것은?',
      options: [
        { text: '🚀 새로운 경험과 모험의 스릴!', value: 'adventure' },
        { text: '😌 편안함과 안정감의 평화', value: 'comfort' },
        { text: '🏛️ 문화와 역사의 깊이', value: 'culture' },
        { text: '🌿 자연과 풍경의 아름다움', value: 'nature' },
      ],
    },
    {
      question: '여행 중 가장 좋아하는 활동은?',
      options: [
        { text: '🗺️ 새로운 곳을 탐험하고 모험하는 것', value: 'explore' },
        { text: '😴 편안하게 휴식하고 여유를 즐기는 것', value: 'relax' },
        { text: '🏛️ 박물관이나 문화재를 관람하는 것', value: 'museum' },
        { text: '🏔️ 자연 속에서 산책이나 등산하는 것', value: 'hiking' },
      ],
    },
    {
      question: '여행에서 가장 만족스러운 순간은?',
      options: [
        { text: '💫 예상치 못한 새로운 발견을 했을 때', value: 'discovery' },
        { text: '😌 편안하고 평화로운 시간을 보냈을 때', value: 'peace' },
        { text: '🎭 현지 문화를 깊이 체험했을 때', value: 'cultural' },
        { text: '🌅 아름다운 자연을 감상했을 때', value: 'scenic' },
      ],
    },
    {
      question: '숙박지를 선택할 때 당신은?',
      options: [
        { text: '🏰 "독특하고 특별한 숙소가 최고야!"', value: 'unique' },
        { text: '🏨 "편안하고 안전한 호텔이 최고야!"', value: 'safe' },
        { text: '🏠 "현지 분위기를 느낄 수 있는 게 좋아!"', value: 'local' },
        { text: '🏕️ "자연 속에서 머물 수 있는 게 최고야!"', value: 'natural' },
      ],
    },
    {
      question: '여행에서 가장 어려워하는 것은?',
      options: [
        { text: '😰 예상치 못한 상황에 대처하는 것', value: 'unexpected' },
        { text: '😨 낯선 환경에 적응하는 것', value: 'adaptation' },
        { text: '🗣️ 언어 장벽을 극복하는 것', value: 'language' },
        { text: '⏰ 일정을 조율하고 시간을 맞추는 것', value: 'schedule' },
      ],
    },
    {
      question: '여행 중 음식을 선택할 때?',
      options: [
        { text: '🍜 "현지의 독특하고 새로운 음식 시도!"', value: 'local-food' },
        { text: '🍔 "익숙하고 안전한 음식이 최고야!"', value: 'familiar' },
        {
          text: '🍱 "현지 문화를 느낄 수 있는 전통 음식!"',
          value: 'traditional',
        },
        { text: '🥗 "신선하고 자연스러운 음식이 좋아!"', value: 'fresh' },
      ],
    },
    {
      question: '여행에서 가장 좋아하는 것은?',
      options: [
        { text: '👋 새로운 사람들과 만나고 대화하는 것', value: 'meeting' },
        { text: '🤫 조용하고 평화로운 시간을 보내는 것', value: 'quiet' },
        { text: '📖 현지 문화와 역사를 배우는 것', value: 'learning' },
        { text: '🌺 자연의 아름다움을 감상하는 것', value: 'beauty' },
      ],
    },
    {
      question: '여행 스타일을 한 마디로 표현하면?',
      options: [
        { text: '🌪️ 모험적이고 도전적인 여행자', value: 'adventurous' },
        { text: '😌 편안하고 여유로운 여행자', value: 'comfortable' },
        { text: '🎓 문화적이고 교육적인 여행자', value: 'educational' },
        { text: '🌿 자연적이고 치유적인 여행자', value: 'healing' },
      ],
    },
    {
      question: '여행에서 추구하는 가치는?',
      options: [
        { text: '🚀 새로운 경험과 성장', value: 'growth' },
        { text: '😌 편안함과 안정감', value: 'stability' },
        { text: '🤝 문화 이해와 교류', value: 'exchange' },
        { text: '🌍 자연과의 조화', value: 'harmony' },
      ],
    },
    {
      question: '여행 후 가장 만족스러운 것은?',
      options: [
        { text: '💭 새로운 경험과 추억을 얻은 것', value: 'memories' },
        { text: '😴 편안하고 휴식을 취한 것', value: 'rest' },
        { text: '📚 문화적 지식과 이해를 얻은 것', value: 'knowledge' },
        { text: '🌅 자연의 아름다움을 체험한 것', value: 'experience' },
      ],
    },
    {
      question: '여행에서 가장 어려운 결정은?',
      options: [
        { text: '⚖️ 안전과 모험 사이의 선택', value: 'safety-adventure' },
        {
          text: '😌 편안함과 새로운 경험 사이의 선택',
          value: 'comfort-experience',
        },
        { text: '🎭 문화 체험과 휴식 사이의 선택', value: 'culture-rest' },
        { text: '🏔️ 자연 탐험과 도시 관광 사이의 선택', value: 'nature-city' },
      ],
    },
    {
      question: '이상적인 여행 동반자는?',
      options: [
        {
          text: '🚀 모험을 즐기고 새로운 것을 시도하는 사람',
          value: 'adventurous',
        },
        { text: '😌 편안하고 안정적인 여행을 선호하는 사람', value: 'stable' },
        { text: '🎓 문화와 역사에 관심이 많은 사람', value: 'cultural' },
        { text: '🌿 자연과 평화를 사랑하는 사람', value: 'nature-lover' },
      ],
    },
    {
      question: '선호하는 교통수단은?',
      options: [
        { text: '🏍️ 자전거나 오토바이 같은 자유로운 이동', value: 'free' },
        { text: '🚌 편안하고 안전한 대중교통', value: 'public' },
        { text: '🚋 현지의 특색 있는 교통수단', value: 'local' },
        { text: '🚂 자연을 감상할 수 있는 교통수단', value: 'scenic' },
      ],
    },
    {
      question: '여행에서 가장 중요한 것은?',
      options: [
        { text: '💫 새로운 경험과 추억', value: 'experience' },
        { text: '😌 편안함과 휴식', value: 'relaxation' },
        { text: '🤝 문화적 이해와 교류', value: 'understanding' },
        { text: '🌍 자연과의 조화', value: 'nature-harmony' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const plannerCount = answers.filter((a) =>
      [
        'planner',
        'researcher',
        'safe',
        'cultural',
        'peace',
        'traditional',
        'learning',
        'educational',
        'stability',
        'exchange',
        'knowledge',
        'culture-rest',
        'cultural',
        'public',
        'understanding',
      ].includes(a)
    ).length;

    const spontaneousCount = answers.filter((a) =>
      [
        'spontaneous',
        'adventure',
        'explore',
        'discovery',
        'unique',
        'unexpected',
        'local-food',
        'meeting',
        'adventurous',
        'growth',
        'memories',
        'safety-adventure',
        'comfort-experience',
        'adventurous',
        'free',
        'experience',
      ].includes(a)
    ).length;

    const comfortCount = answers.filter((a) =>
      [
        'comfort',
        'relax',
        'peace',
        'safe',
        'familiar',
        'quiet',
        'comfortable',
        'stability',
        'rest',
        'comfort-experience',
        'stable',
        'public',
        'relaxation',
      ].includes(a)
    ).length;

    const natureCount = answers.filter((a) =>
      [
        'nature',
        'hiking',
        'scenic',
        'natural',
        'fresh',
        'beauty',
        'healing',
        'harmony',
        'experience',
        'nature-city',
        'nature-lover',
        'scenic',
        'nature-harmony',
      ].includes(a)
    ).length;

    const scores = [
      { type: 'planner', score: plannerCount },
      { type: 'spontaneous', score: spontaneousCount },
      { type: 'comfort', score: comfortCount },
      { type: 'nature', score: natureCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      planner: {
        title: '🗺️ 스위스 시계 같은 계획가',
        description:
          '당신은 스위스 시계처럼 정확하고 체계적인 여행 계획가입니다!',
        detailedDescription: `당신은 스위스 시계처럼 정확하고 체계적인 성격을 가지고 있어요. 모든 것이 미리 계획되고 준비된 완벽한 여행을 추구하는 계획가입니다. 

스위스 시계처럼 정확하고 신뢰할 수 있는 성격으로, 문화와 역사를 중요하게 생각해요. 모든 것이 체계적으로 정리되어 있어야 마음이 편안해지는 성격이에요.

하지만 스위스 시계도 너무 정형화되면 딱딱할 수 있듯이, 당신도 때로는 너무 완벽주의적이거나 유연성이 부족할 수 있어요. 가끔은 스위스 시계에 컬러풀한 스트랩(즉흥적 요소)을 추가해보는 것도 좋을 것 같아요!`,
        traits: ['계획적', '체계적', '문화적', '완벽주의적', '신뢰성'],
        strengths: [
          '완벽한 준비',
          '문화적 이해',
          '안전한 여행',
          '효율적 일정',
          '신뢰성',
        ],
        weaknesses: [
          '유연성 부족',
          '즉흥성 부족',
          '스트레스',
          '높은 비용',
          '보수적',
        ],
        goodMatches: ['🎯 백팩커 같은 모험가', '🌿 히말라야 같은 자연가'],
        badMatches: ['😌 리조트 같은 안정가'],
        goodMatchReasons: [
          '🎯 백팩커 같은 모험가: 당신의 계획성이 상대방의 즉흥성에 균형을 제공해요',
          '🌿 히말라야 같은 자연가: 함께 체계적이고 의미 있는 여행을 계획할 수 있어요',
        ],
        badMatchReasons: [
          '😌 리조트 같은 안정가: 너무 편안함만 추구하는 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '유연성을 기르세요',
          '즉흥적 요소도 추가해보세요',
          '완벽주의를 완화하세요',
          '예산 관리에 신경 쓰세요',
        ],
      },
      spontaneous: {
        title: '🎯 백팩커 같은 모험가',
        description: '당신은 백팩커처럼 자유롭고 즉흥적인 모험가입니다!',
        detailedDescription: `당신은 백팩커처럼 자유롭고 즉흥적인 성격을 가지고 있어요. 새로운 경험과 모험을 추구하며, 계획보다는 순간의 영감을 따라 여행하는 것을 선호해요. 

백팩커처럼 적응력이 뛰어나고 새로운 곳을 탐험하는 것을 즐기는 성격이에요. 예상치 못한 상황에서도 유연하게 대처할 수 있는 능력이 뛰어나고, 다양한 사람들과 만나는 것을 좋아해요.

하지만 백팩커도 너무 즉흥적이면 위험할 수 있듯이, 당신도 때로는 너무 많은 위험을 감수하거나 준비 부족으로 어려움을 겪을 수 있어요. 가끔은 백팩에 지도(기본 계획)를 넣어보는 것도 좋을 것 같아요!`,
        traits: ['즉흥적', '모험적', '자유로움', '적응력', '도전적'],
        strengths: ['적응력', '새로운 경험', '자유로움', '유연성', '도전 정신'],
        weaknesses: [
          '준비 부족',
          '위험 요소',
          '예산 초과',
          '일정 지연',
          '안정성 부족',
        ],
        goodMatches: ['🗺️ 스위스 시계 같은 계획가', '😌 리조트 같은 안정가'],
        badMatches: ['🌿 히말라야 같은 자연가'],
        goodMatchReasons: [
          '🗺️ 스위스 시계 같은 계획가: 상대방의 계획성이 당신의 즉흥성에 안정감을 제공해요',
          '😌 리조트 같은 안정가: 함께 편안하면서도 새로운 경험을 할 수 있어요',
        ],
        badMatchReasons: [
          '🌿 히말라야 같은 자연가: 너무 체계적이고 완벽주의적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '기본적인 계획은 세워보세요',
          '안전 요소를 고려하세요',
          '예산 관리를 신경 쓰세요',
          '일정 조정에 유연성을 가져보세요',
        ],
      },
      comfort: {
        title: '😌 리조트 같은 안정가',
        description:
          '당신은 리조트처럼 편안하고 안정적인 여행을 선호하는 안정가입니다!',
        detailedDescription: `당신은 리조트처럼 편안하고 안정적인 성격을 가지고 있어요. 리조트가 모든 것이 편리하고 안전하게 준비되어 있듯이, 당신도 편안하고 예측 가능한 여행을 선호해요. 

리조트처럼 모든 것이 완벽하게 갖춰진 환경에서 편안함을 추구하는 성격이에요. 스트레스 없이 휴식을 취하고 여유를 즐기는 것을 중요하게 생각해요.

하지만 리조트도 너무 편안하면 지루할 수 있듯이, 당신도 때로는 너무 보수적이거나 새로운 경험을 두려워할 수 있어요. 가끔은 리조트에서 나와서 모험(새로운 경험)을 해보는 것도 좋을 것 같아요!`,
        traits: ['편안함', '안정적', '보수적', '여유로움', '안전 지향적'],
        strengths: ['안정성', '편안함', '여유로움', '안전함', '스트레스 부족'],
        weaknesses: [
          '새로움 회피',
          '보수적',
          '도전 부족',
          '지루함',
          '경험 부족',
        ],
        goodMatches: ['🎯 백팩커 같은 모험가', '🌿 히말라야 같은 자연가'],
        badMatches: ['🗺️ 스위스 시계 같은 계획가'],
        goodMatchReasons: [
          '🎯 백팩커 같은 모험가: 함께 편안하면서도 새로운 경험을 할 수 있어요',
          '🌿 히말라야 같은 자연가: 함께 평화롭고 자연스러운 여행을 즐길 수 있어요',
        ],
        badMatchReasons: [
          '🗺️ 스위스 시계 같은 계획가: 너무 체계적이고 완벽주의적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 새로운 경험도 시도해보세요',
          '도전을 두려워하지 마세요',
          '새로움에 대한 개방성을 가져보세요',
          '모험 정신을 기르세요',
        ],
      },
      nature: {
        title: '🌿 히말라야 같은 자연가',
        description: '당신은 히말라야처럼 자연과 조화를 이루는 자연가입니다!',
        detailedDescription: `당신은 히말라야처럼 자연과 조화를 이루는 성격을 가지고 있어요. 히말라야가 자연의 아름다움과 평화를 상징하듯이, 당신도 자연 속에서 평화와 치유를 찾는 성격이에요. 

자연을 중요하게 생각하며, 아름다운 풍경을 감상하고 자연과의 조화를 추구해요. 히말라야처럼 깊이 있고 의미 있는 경험을 선호하는 성격이에요.

하지만 히말라야도 너무 높으면 산소가 부족할 수 있듯이, 당신도 때로는 너무 이상적이거나 현실과의 괴리를 느낄 수 있어요. 가끔은 히말라야에서 내려와서 현실(도시)도 경험해보는 것도 좋을 것 같아요!`,
        traits: ['자연적', '평화로움', '치유적', '이상적', '깊이있음'],
        strengths: [
          '자연 이해',
          '평화로움',
          '치유 능력',
          '깊이 있는 사고',
          '아름다움 추구',
        ],
        weaknesses: [
          '현실성 부족',
          '도시 적응 부족',
          '실용성 부족',
          '사회성 부족',
          '이상적',
        ],
        goodMatches: ['🗺️ 스위스 시계 같은 계획가', '😌 리조트 같은 안정가'],
        badMatches: ['🎯 백팩커 같은 모험가'],
        goodMatchReasons: [
          '🗺️ 스위스 시계 같은 계획가: 함께 체계적이고 의미 있는 여행을 계획할 수 있어요',
          '😌 리조트 같은 안정가: 함께 평화롭고 자연스러운 여행을 즐길 수 있어요',
        ],
        badMatchReasons: [
          '🎯 백팩커 같은 모험가: 너무 즉흥적이고 도전적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 도시 여행도 시도해보세요',
          '현실적 관점도 가져보세요',
          '사회적 경험도 쌓아보세요',
          '실용성도 기르세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.comfort;
  },
};
