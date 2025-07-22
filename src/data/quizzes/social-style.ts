import type { Quiz } from '../../types';

export const socialStyleQuiz: Quiz = {
  id: 'social-style',
  title: '🌈 당신은 어떤 사회적 스타일인가요?',
  description:
    '사람들과의 만남에서 당신은 어떤 모습인가요? 당신만의 독특한 사회적 매력과 소통 방식을 찾아보세요!',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 사람들과 만날 때 당신은?',
      options: [
        { text: '👋 "적극적으로 대화를 시작하고 먼저 다가가!"', value: 'extroverted' },
        { text: '😊 "상대방이 먼저 말을 걸어주기를 기다려!"', value: 'introverted' },
        { text: '🤝 "공통 관심사를 찾아 자연스럽게 대화해!"', value: 'balanced' },
        { text: '🎭 "상황에 따라 적응적으로 행동해!"', value: 'adaptive' },
      ],
    },
    {
      question: '파티나 모임에서 당신은?',
      options: [
        { text: '🎉 "여러 사람과 어울리며 활발하게 참여해!"', value: 'extroverted' },
        { text: '💬 "소수의 친한 사람들과 깊이 있는 대화를 해!"', value: 'introverted' },
        { text: '⚖️ "모든 사람과 균형 있게 소통해!"', value: 'balanced' },
        { text: '🌊 "분위기에 따라 참여 정도를 조절해!"', value: 'adaptive' },
      ],
    },
    {
      question: '의견이 다른 사람과 대화할 때 당신은?',
      options: [
        { text: '💪 "적극적으로 자신의 의견을 주장해!"', value: 'assertive' },
        { text: '👂 "상대방의 의견을 경청하고 이해하려 해!"', value: 'empathetic' },
        { text: '🧠 "객관적으로 양쪽 의견을 분석해!"', value: 'analytical' },
        { text: '🎯 "상황에 따라 적절한 방식을 선택해!"', value: 'adaptive' },
      ],
    },
    {
      question: '친구가 문제를 가지고 있을 때 당신은?',
      options: [
        { text: '🚀 "즉시 해결책을 제시하고 도움을 줘!"', value: 'helpful' },
        { text: '❤️ "공감하며 감정적 지원을 제공해!"', value: 'empathetic' },
        { text: '🔍 "문제를 분석하고 논리적으로 접근해!"', value: 'analytical' },
        { text: '🤗 "친구가 원하는 방식에 맞춰 도움을 줘!"', value: 'adaptive' },
      ],
    },
    {
      question: '팀 프로젝트에서 당신은?',
      options: [
        { text: '👑 "리더 역할을 맡아 팀을 이끌어!"', value: 'leadership' },
        { text: '🤝 "팀원들과 협력하여 함께 작업해!"', value: 'collaborative' },
        { text: '⭐ "자신의 전문 분야에서 기여해!"', value: 'specialized' },
        { text: '🎭 "상황에 따라 다양한 역할을 수행해!"', value: 'adaptive' },
      ],
    },
    {
      question: '갈등 상황에서 당신은?',
      options: [
        { text: '⚔️ "직접적으로 문제를 해결하려 해!"', value: 'confrontational' },
        { text: '🕊️ "중재자 역할을 하며 양쪽을 조율해!"', value: 'mediator' },
        { text: '📊 "객관적으로 상황을 분석해!"', value: 'analytical' },
        { text: '🌪️ "상황에 따라 적절한 방식을 선택해!"', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 환경에 적응할 때 당신은?',
      options: [
        { text: '🚀 "적극적으로 새로운 사람들과 친해져!"', value: 'extroverted' },
        { text: '🐢 "천천히 주변을 관찰하며 적응해!"', value: 'introverted' },
        { text: '📋 "기존 경험을 바탕으로 체계적으로 적응해!"', value: 'systematic' },
        { text: '🌈 "상황에 따라 유연하게 적응해!"', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람의 성공을 축하할 때 당신은?',
      options: [
        { text: '🎊 "적극적으로 축하하고 격려해!"', value: 'enthusiastic' },
        { text: '💝 "진심 어린 축하와 공감을 표현해!"', value: 'empathetic' },
        { text: '👏 "객관적으로 성공의 의미를 인정해!"', value: 'analytical' },
        { text: '🎁 "상대방이 원하는 방식으로 축하해!"', value: 'adaptive' },
      ],
    },
    {
      question: '의사결정을 할 때 당신은?',
      options: [
        { text: '⚡ "빠르게 결정하고 실행해!"', value: 'decisive' },
        { text: '👥 "다른 사람들의 의견을 고려해!"', value: 'collaborative' },
        { text: '📚 "충분한 정보를 수집한 후 결정해!"', value: 'analytical' },
        { text: '🎯 "상황에 따라 결정 방식을 조절해!"', value: 'adaptive' },
      ],
    },
    {
      question: '스트레스를 받았을 때 당신은?',
      options: [
        { text: '👫 "다른 사람들과 함께 시간을 보내며 해소해!"', value: 'social' },
        { text: '🏠 "혼자만의 시간을 가지며 정리해!"', value: 'solitary' },
        { text: '🔬 "문제를 분석하고 해결책을 찾아!"', value: 'analytical' },
        { text: '🌀 "상황에 따라 다양한 방법을 시도해!"', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 아이디어를 제안할 때 당신은?',
      options: [
        { text: '📢 "적극적으로 아이디어를 발표하고 설득해!"', value: 'assertive' },
        { text: '🤔 "다른 사람들의 반응을 고려하여 제안해!"', value: 'considerate' },
        { text: '📊 "논리적으로 아이디어의 장점을 설명해!"', value: 'analytical' },
        { text: '🎪 "상황에 맞는 적절한 방식으로 제안해!"', value: 'adaptive' },
      ],
    },
    {
      question: '피드백을 받을 때 당신은?',
      options: [
        { text: '🙋‍♀️ "적극적으로 피드백을 요청하고 받아들여!"', value: 'open' },
        { text: '🤐 "신중하게 피드백을 고려해!"', value: 'cautious' },
        { text: '🔍 "객관적으로 피드백을 분석해!"', value: 'analytical' },
        { text: '🌊 "피드백의 성격에 따라 대응해!"', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람을 도울 때 당신은?',
      options: [
        { text: '🏃‍♀️ "적극적으로 도움을 제안하고 실행해!"', value: 'proactive' },
        { text: '🤝 "상대방이 요청할 때 도움을 줘!"', value: 'responsive' },
        { text: '📋 "체계적으로 도움의 방법을 계획해!"', value: 'systematic' },
        { text: '🎭 "상황에 따라 적절한 도움을 제공해!"', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 문화나 관습을 접할 때 당신은?',
      options: [
        { text: '🌟 "적극적으로 참여하고 배워!"', value: 'immersive' },
        { text: '👀 "관찰하며 천천히 이해해!"', value: 'observant' },
        { text: '📖 "체계적으로 정보를 수집하고 분석해!"', value: 'analytical' },
        { text: '🎈 "상황에 따라 적응해!"', value: 'adaptive' },
      ],
    },
    {
      question: '실수를 했을 때 당신은?',
      options: [
        { text: '🙏 "즉시 인정하고 사과해!"', value: 'honest' },
        { text: '💕 "상대방의 감정을 고려하여 대응해!"', value: 'empathetic' },
        { text: '🔧 "실수의 원인을 분석하고 개선해!"', value: 'analytical' },
        { text: '🎯 "상황에 따라 적절한 대응을 해!"', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 기술이나 지식을 배울 때 당신은?',
      options: [
        { text: '🙋 "적극적으로 질문하고 실습해!"', value: 'active' },
        { text: '🤫 "조용히 관찰하며 배워!"', value: 'passive' },
        { text: '📚 "체계적으로 학습 계획을 세워!"', value: 'systematic' },
        { text: '🌀 "상황에 따라 다양한 방법을 시도해!"', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람의 실수를 지적할 때 당신은?',
      options: [
        { text: '🎯 "직접적으로 문제점을 지적해!"', value: 'direct' },
        { text: '🌸 "부드럽게 개선점을 제안해!"', value: 'gentle' },
        { text: '📊 "객관적으로 문제를 분석해!"', value: 'analytical' },
        { text: '🎭 "상대방의 성격에 맞춰 지적해!"', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 도전에 직면할 때 당신은?',
      options: [
        { text: '🚀 "적극적으로 도전을 받아들여!"', value: 'bold' },
        { text: '🛡️ "신중하게 준비한 후 도전해!"', value: 'cautious' },
        { text: '📋 "체계적으로 계획을 세우고 도전해!"', value: 'systematic' },
        { text: '🌊 "상황을 분석한 후 적절히 대응해!"', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람과의 관계에서 당신은?',
      options: [
        { text: '🔥 "적극적으로 관계를 발전시켜!"', value: 'proactive' },
        { text: '🌱 "자연스럽게 관계가 발전하기를 기다려!"', value: 'natural' },
        { text: '📊 "관계의 질을 체계적으로 관리해!"', value: 'systematic' },
        { text: '🎭 "상대방과의 관계에 따라 적응해!"', value: 'adaptive' },
      ],
    },
    {
      question: '사회적 상황에서 당신의 목표는?',
      options: [
        { text: '👑 "적극적으로 영향력을 발휘해!"', value: 'influential' },
        { text: '🕊️ "조화로운 관계를 만들어!"', value: 'harmonious' },
        { text: '⚡ "효율적인 소통을 추구해!"', value: 'efficient' },
        { text: '🎯 "상황에 맞는 적절한 목표를 설정해!"', value: 'adaptive' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 각 유형별 카운트
    const extrovertedCount = answers.filter((a) => 
      ['extroverted', 'assertive', 'leadership', 'confrontational', 'enthusiastic', 'decisive', 'social', 'proactive', 'immersive', 'honest', 'active', 'direct', 'bold', 'influential'].includes(a as string)
    ).length;
    
    const introvertedCount = answers.filter((a) => 
      ['introverted', 'empathetic', 'collaborative', 'mediator', 'systematic', 'analytical', 'solitary', 'considerate', 'cautious', 'observant', 'passive', 'gentle', 'natural', 'harmonious'].includes(a as string)
    ).length;
    
    const balancedCount = answers.filter((a) => 
      ['balanced', 'helpful', 'specialized', 'open', 'responsive', 'efficient'].includes(a as string)
    ).length;
    
    const adaptiveCount = answers.filter((a) => a === 'adaptive').length;
    
    // 유형별 점수 합산
    const scores = [
      { type: 'extroverted', score: extrovertedCount },
      { type: 'introverted', score: introvertedCount },
      { type: 'balanced', score: balancedCount },
      { type: 'adaptive', score: adaptiveCount },
    ];
    
    const max = scores.reduce((a, b) => (b.score > a.score ? b : a));
    
    // 결과 매핑
    const resultMap = {
      extroverted: {
        title: '🌟 태양 같은 외향적 리더',
        description: '당신은 태양처럼 밝고 에너지 넘치는 성격으로 사람들을 이끌고 활력을 주는 사회적 리더입니다!',
        detailedDescription: `당신은 태양처럼 밝고 강력한 에너지를 가지고 있어요. 사회적 상황에서 적극적이고 활발하며, 다른 사람들에게 활력과 영감을 주는 천연 리더의 모습을 보여주는 외향적 소통가입니다.

태양처럼 주변 사람들을 환하게 비추며 따뜻한 에너지를 전달하는 것을 좋아해요. 새로운 사람들과 만나는 것을 즐기고, 파티나 모임에서 중심 역할을 하며 분위기를 이끌어가는 성격이에요.

하지만 태양도 때로는 너무 뜨거워서 다른 별들을 가릴 수 있듯이, 당신도 가끔은 너무 적극적이어서 조용한 사람들을 압도하거나 혼자만의 시간이 부족할 수 있어요. 가끔은 태양도 달(내향성)의 고요함을 배워보는 것이 좋을 것 같아요!`,
        traits: ['외향적', '적극적', '리더십', '활발함', '사교성'],
        strengths: [
          '뛰어난 리더십', '강한 사교성', '긍정적 에너지', '빠른 네트워킹', '분위기 메이킹',
        ],
        weaknesses: [
          '혼자 시간 부족', '타인 압도 가능성', '깊이 부족', '피로감 증가', '내성적 사람과의 갈등',
        ],
        goodMatches: ['🌙 달 같은 내향적 관찰가', '🌈 무지개 같은 적응적 유연가'],
        badMatches: ['⚖️ 저울 같은 균형잡힌 조화가'],
        goodMatchReasons: [
          '🌙 달 같은 내향적 관찰가: 당신의 활발함과 상대방의 깊이가 완벽한 균형을 만들어요',
          '🌈 무지개 같은 적응적 유연가: 함께 다양한 상황에서 역동적인 시너지를 만들 수 있어요',
        ],
        badMatchReasons: [
          '⚖️ 저울 같은 균형잡힌 조화가: 너무 신중하고 균형 잡힌 방식과 적극적인 스타일이 충돌할 수 있어요',
        ],
        recommendations: [
          '혼자만의 시간도 중요하게 생각하세요', '다른 사람의 의견도 충분히 들어보세요', '조용한 사람들을 배려해보세요', '때로는 천천히 접근해보세요',
        ],
      },
      introverted: {
        title: '🌙 달 같은 내향적 관찰가',
        description: '당신은 달처럼 차분하고 깊이 있는 성격으로 사람들을 따뜻하게 관찰하고 지혜를 주는 사회적 현자입니다!',
        detailedDescription: `당신은 달처럼 부드럽고 깊이 있는 성격을 가지고 있어요. 사회적 상황에서 신중하고 관찰력이 뛰어나며, 깊이 있는 관계와 진정한 소통을 추구하는 내향적 지혜자입니다.

달처럼 은은하지만 꾸준한 빛으로 사람들의 마음을 따뜻하게 비추며, 소수의 가까운 사람들과 깊고 의미있는 관계를 만들어가는 것을 좋아해요. 상대방의 말을 잘 들어주고 공감하며, 신중한 조언을 제공하는 성격이에요.

하지만 달도 때로는 너무 조용해서 그림자에 가려질 수 있듯이, 당신도 가끔은 자신의 의견을 표현하지 못하거나 새로운 기회를 놓칠 수 있어요. 가끔은 달도 태양(외향성)의 밝은 에너지를 배워보는 것이 좋을 것 같아요!`,
        traits: ['내향적', '관찰력', '깊이', '신중함', '공감능력'],
        strengths: [
          '깊이 있는 관계', '뛰어난 경청능력', '신중한 판단', '높은 공감능력', '진정성',
        ],
        weaknesses: [
          '소극적', '기회 놓침', '사회적 피로', '표현력 부족', '네트워킹 어려움',
        ],
        goodMatches: ['🌟 태양 같은 외향적 리더', '⚖️ 저울 같은 균형잡힌 조화가'],
        badMatches: ['🌈 무지개 같은 적응적 유연가'],
        goodMatchReasons: [
          '🌟 태양 같은 외향적 리더: 당신의 깊이와 상대방의 활발함이 아름다운 조화를 만들어요',
          '⚖️ 저울 같은 균형잡힌 조화가: 함께 신중하고 균형있는 관계를 만들 수 있어요',
        ],
        badMatchReasons: [
          '🌈 무지개 같은 적응적 유연가: 너무 변화무쌍하고 적응적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '때로는 적극적으로 의견을 표현해보세요', '새로운 사람들과의 만남도 시도해보세요', '자신의 강점을 더 어필해보세요', '편안한 환경에서 점진적으로 확장해보세요',
        ],
      },
      balanced: {
        title: '⚖️ 저울 같은 균형잡힌 조화가',
        description: '당신은 저울처럼 모든 것을 균형있게 조화시키며 상황에 맞는 적절한 소통을 하는 사회적 균형자입니다!',
        detailedDescription: `당신은 저울처럼 정확하고 균형잡힌 성격을 가지고 있어요. 사회적 상황에서 외향성과 내향성을 적절히 조화시키며, 모든 사람과 상황에 맞는 균형있는 소통을 하는 조화의 달인입니다.

저울처럼 공정하고 객관적인 시각으로 상황을 판단하며, 극단에 치우치지 않고 중간 지점에서 최적의 해답을 찾는 것을 좋아해요. 다양한 사람들과 어울릴 수 있으며, 상황에 따라 유연하게 자신의 모습을 조절하는 성격이에요.

하지만 저울도 때로는 너무 균형을 맞추려다가 결정을 내리지 못할 수 있듯이, 당신도 가끔은 우유부단하거나 자신만의 특별한 색깔이 흐려질 수 있어요. 가끔은 저울도 한쪽(개성)에 무게를 실어보는 것이 좋을 것 같아요!`,
        traits: ['균형감', '조화', '객관성', '중재능력', '융통성'],
        strengths: [
          '뛰어난 균형감', '갈등 조정능력', '폭넓은 적응력', '객관적 판단', '안정적 관계',
        ],
        weaknesses: [
          '우유부단함', '개성 부족', '중간자적 위치', '깊이 부족', '결정 지연',
        ],
        goodMatches: ['🌙 달 같은 내향적 관찰가', '🌈 무지개 같은 적응적 유연가'],
        badMatches: ['🌟 태양 같은 외향적 리더'],
        goodMatchReasons: [
          '🌙 달 같은 내향적 관찰가: 당신의 균형감과 상대방의 깊이가 안정적인 조화를 만들어요',
          '🌈 무지개 같은 적응적 유연가: 함께 다양한 상황에서 유연하게 대응할 수 있어요',
        ],
        badMatchReasons: [
          '🌟 태양 같은 외향적 리더: 너무 강한 리더십과 균형잡힌 스타일이 충돌할 수 있어요',
        ],
        recommendations: [
          '때로는 확고한 자신의 의견을 표현해보세요', '개성적인 면도 드러내보세요', '빠른 결정도 연습해보세요', '자신만의 특별함을 찾아보세요',
        ],
      },
      adaptive: {
        title: '🌈 무지개 같은 적응적 유연가',
        description: '당신은 무지개처럼 다채롭고 상황에 따라 변화하며 모든 환경에 잘 적응하는 사회적 카멜레온입니다!',
        detailedDescription: `당신은 무지개처럼 다채롭고 변화무쌍한 성격을 가지고 있어요. 사회적 상황에서 뛰어난 적응력을 발휘하며, 상대방과 환경에 따라 자신의 모습을 유연하게 변화시키는 소통의 카멜레온입니다.

무지개처럼 다양한 색깔을 가지고 있어서 어떤 상황에서도 적절한 모습을 보여줄 수 있으며, 새로운 환경이나 사람들에게 빠르게 적응하는 것을 좋아해요. 변화를 두려워하지 않고 오히려 즐기며, 상황에 맞는 최적의 소통 방식을 찾는 성격이에요.

하지만 무지개도 때로는 너무 빨리 변해서 본래 색깔을 잃을 수 있듯이, 당신도 가끔은 진정한 자아를 잃거나 일관성이 부족해 보일 수 있어요. 가끔은 무지개도 하나의 색깔(일관성)을 유지해보는 것이 좋을 것 같아요!`,
        traits: ['적응력', '유연성', '다재다능', '변화수용', '상황파악'],
        strengths: [
          '뛰어난 적응력', '유연한 소통', '변화 대응력', '다양한 관계', '상황 판단력',
        ],
        weaknesses: [
          '일관성 부족', '정체성 혼란', '피상적 관계', '우유부단함', '과도한 변화',
        ],
        goodMatches: ['🌟 태양 같은 외향적 리더', '⚖️ 저울 같은 균형잡힌 조화가'],
        badMatches: ['🌙 달 같은 내향적 관찰가'],
        goodMatchReasons: [
          '🌟 태양 같은 외향적 리더: 당신의 유연함과 상대방의 리더십이 역동적인 시너지를 만들어요',
          '⚖️ 저울 같은 균형잡힌 조화가: 함께 다양한 상황에서 조화롭게 적응할 수 있어요',
        ],
        badMatchReasons: [
          '🌙 달 같은 내향적 관찰가: 너무 조용하고 일관된 방식과 변화무쌍한 스타일이 맞지 않을 수 있어요',
        ],
        recommendations: [
          '자신만의 핵심 가치를 정해보세요', '일관성 있는 모습도 보여주세요', '깊이 있는 관계도 만들어보세요', '진정한 자아를 탐색해보세요',
        ],
      },
    };
    
    return resultMap[max.type as keyof typeof resultMap] || resultMap.balanced;
  },
};
