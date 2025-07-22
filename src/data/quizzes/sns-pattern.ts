import type { Quiz } from '../../types';

export const snsPatternQuiz: Quiz = {
  id: 'sns-pattern',
  title: '📱 당신은 어떤 SNS 유저인가요?',
  description: 'SNS에서의 당신의 패턴을 통해 숨겨진 성격을 알아보세요! 어떤 SNS 유저와 가장 닮았을까요?',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: 'SNS를 사용하는 주요 목적은?',
      options: [
        {
          text: '💬 "다른 사람들과 소통하고 관계를 유지해!"',
          value: 'communication',
        },
        { text: '📸 "자신의 일상을 공유하고 기록해!"', value: 'sharing' },
        { text: '📚 "정보를 얻고 새로운 것을 배워!"', value: 'learning' },
        { text: '🎭 "오락과 즐거움을 위해 사용해!"', value: 'entertainment' },
      ],
    },
    {
      question: 'SNS에 게시물을 올릴 때 당신은?',
      options: [
        { text: '🔥 "자주 올리고 활발하게 활동해!"', value: 'active' },
        { text: '🤔 "신중하게 고려한 후 올려!"', value: 'cautious' },
        { text: '✨ "특별한 순간만 선별해서 올려!"', value: 'selective' },
        { text: '👁️ "거의 올리지 않고 주로 구경해!"', value: 'passive' },
      ],
    },
    {
      question: 'SNS에서 가장 즐기는 활동은?',
      options: [
        { text: '❤️ "댓글과 좋아요로 다른 사람과 소통!"', value: 'interaction' },
        { text: '📷 "자신의 일상을 사진과 글로 공유!"', value: 'self-expression' },
        { text: '🔍 "다양한 정보와 콘텐츠를 탐색!"', value: 'exploration' },
        { text: '😂 "재미있는 영상과 콘텐츠를 감상!"', value: 'consumption' },
      ],
    },
    {
      question: 'SNS에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '🤝 "다른 사람들과의 연결과 소통"', value: 'connection' },
        { text: '🎨 "자신의 개성과 스타일 표현"', value: 'expression' },
        { text: '🧠 "유용한 정보와 지식 습득"', value: 'information' },
        { text: '😄 "즐거움과 오락"', value: 'fun' },
      ],
    },
    {
      question: 'SNS에서 팔로워 수에 대한 당신의 생각은?',
      options: [
        { text: '👥 "많은 사람들과 연결되는 게 좋아!"', value: 'quantity' },
        { text: '💎 "소수라도 진정한 관계가 중요해!"', value: 'quality' },
        { text: '📈 "영향력 확장을 위해 늘려야 해!"', value: 'influence' },
        { text: '🤷 "숫자는 별로 중요하지 않아!"', value: 'indifferent' },
      ],
    },
    {
      question: 'SNS에서 부정적인 댓글을 받으면?',
      options: [
        { text: '💬 "대화로 해결하려고 노력해!"', value: 'discuss' },
        { text: '😢 "상처받지만 개선하려고 해!"', value: 'improve' },
        { text: '🔍 "왜 그런 반응인지 분석해봐!"', value: 'analyze' },
        { text: '🙈 "무시하고 넘어가!"', value: 'ignore' },
      ],
    },
    {
      question: 'SNS에서 가장 좋아하는 콘텐츠 유형은?',
      options: [
        { text: '👫 "사람들과의 소통과 일상 공유"', value: 'social-content' },
        { text: '🎨 "개성 있는 창작물과 표현"', value: 'creative-content' },
        { text: '📊 "유용한 정보와 교육 콘텐츠"', value: 'educational-content' },
        { text: '🎪 "재미있는 엔터테인먼트 콘텐츠"', value: 'entertainment-content' },
      ],
    },
    {
      question: 'SNS 사용 시간대는 주로 언제인가요?',
      options: [
        { text: '🌅 "아침에 하루를 시작하며!"', value: 'morning' },
        { text: '☀️ "틈틈이 수시로!"', value: 'frequent' },
        { text: '🌙 "저녁에 하루를 정리하며!"', value: 'evening' },
        { text: '⏰ "정해진 시간에 집중적으로!"', value: 'scheduled' },
      ],
    },
    {
      question: 'SNS에서 프라이버시 설정은?',
      options: [
        { text: '🌍 "모두 공개! 오픈 마인드!"', value: 'open' },
        { text: '👥 "친구들만! 소중한 사람들과!"', value: 'friends' },
        { text: '🔒 "최소한만 공개! 신중하게!"', value: 'private' },
        { text: '⚖️ "상황에 따라 다르게!"', value: 'flexible' },
      ],
    },
    {
      question: 'SNS에서 트렌드에 대한 당신의 태도는?',
      options: [
        { text: '🔥 "빨리 참여하고 공유해!"', value: 'trendy' },
        { text: '🤔 "내 스타일에 맞으면 참여해!"', value: 'selective-trend' },
        { text: '📖 "트렌드보다는 유용한 정보 위주!"', value: 'informative' },
        { text: '😂 "재미있으면 즐겨!"', value: 'fun-trend' },
      ],
    },
    {
      question: 'SNS에서 가장 뿌듯한 순간은?',
      options: [
        { text: '💕 "댓글로 깊은 소통이 이뤄질 때!"', value: 'deep-connection' },
        { text: '👏 "내 게시물이 많은 호응을 받을 때!"', value: 'recognition' },
        { text: '🎯 "유용한 정보를 발견했을 때!"', value: 'discovery' },
        { text: '😊 "재미있는 콘텐츠로 기분이 좋아질 때!"', value: 'enjoyment' },
      ],
    },
    {
      question: 'SNS에서 스트레스를 받는 상황은?',
      options: [
        { text: '💔 "인간관계에서 오해가 생길 때"', value: 'relationship-stress' },
        { text: '😰 "게시물 반응이 안 좋을 때"', value: 'performance-stress' },
        { text: '📉 "잘못된 정보가 퍼질 때"', value: 'misinformation-stress' },
        { text: '😵 "너무 자극적인 콘텐츠를 볼 때"', value: 'content-stress' },
      ],
    },
    {
      question: 'SNS를 통해 얻고 싶은 것은?',
      options: [
        { text: '🤗 "따뜻한 관계와 소속감"', value: 'belonging' },
        { text: '🌟 "인정과 성취감"', value: 'achievement' },
        { text: '🧭 "새로운 지식과 통찰"', value: 'knowledge' },
        { text: '🎊 "즐거움과 힐링"', value: 'healing' },
      ],
    },
    {
      question: 'SNS 없는 하루를 상상하면?',
      options: [
        { text: '😱 "뭔가 놓치는 느낌이 들어!"', value: 'fomo' },
        { text: '🤔 "사람들이 보고 싶긴 하지만 괜찮아!"', value: 'manageable' },
        { text: '📚 "다른 유익한 일에 집중할 수 있어!"', value: 'productive' },
        { text: '😌 "오히려 편안하고 자유로워!"', value: 'liberating' },
      ],
    },
    {
      question: 'SNS 사용 스타일을 한 마디로 표현하면?',
      options: [
        { text: '🌊 "소통하며 흐르는 물 같은 스타일"', value: 'communicative-style' },
        { text: '🎨 "표현하며 빛나는 별 같은 스타일"', value: 'expressive-style' },
        { text: '🔍 "탐구하며 성장하는 나무 같은 스타일"', value: 'learning-style' },
        { text: '🎈 "즐기며 춤추는 바람 같은 스타일"', value: 'entertainment-style' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const communicationCount = answers.filter((a) =>
      [
        'communication',
        'active',
        'interaction',
        'connection',
        'quantity',
        'discuss',
        'social-content',
        'frequent',
        'open',
        'trendy',
        'deep-connection',
        'relationship-stress',
        'belonging',
        'fomo',
        'communicative-style',
      ].includes(a as string)
    ).length;

    const expressionCount = answers.filter((a) =>
      [
        'sharing',
        'cautious',
        'self-expression',
        'expression',
        'quality',
        'improve',
        'creative-content',
        'morning',
        'friends',
        'selective-trend',
        'recognition',
        'performance-stress',
        'achievement',
        'manageable',
        'expressive-style',
      ].includes(a as string)
    ).length;

    const learningCount = answers.filter((a) =>
      [
        'learning',
        'selective',
        'exploration',
        'information',
        'influence',
        'analyze',
        'educational-content',
        'scheduled',
        'private',
        'informative',
        'discovery',
        'misinformation-stress',
        'knowledge',
        'productive',
        'learning-style',
      ].includes(a as string)
    ).length;

    const entertainmentCount = answers.filter((a) =>
      [
        'entertainment',
        'passive',
        'consumption',
        'fun',
        'indifferent',
        'ignore',
        'entertainment-content',
        'evening',
        'flexible',
        'fun-trend',
        'enjoyment',
        'content-stress',
        'healing',
        'liberating',
        'entertainment-style',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'communication', score: communicationCount },
      { type: 'expression', score: expressionCount },
      { type: 'learning', score: learningCount },
      { type: 'entertainment', score: entertainmentCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      communication: {
        title: '🌊 바다 같은 소통왕',
        description: '당신은 바다처럼 넓고 깊은 소통을 통해 SNS를 즐기는 소통왕입니다!',
        detailedDescription: `당신은 바다처럼 넓고 깊은 성격을 가지고 있어요. SNS에서 다른 사람들과의 소통과 연결을 가장 중요하게 생각하며, 활발한 상호작용을 통해 관계를 쌓아가는 소통의 달인입니다.

바다처럼 많은 사람들을 포용하고 다양한 이야기들을 받아들이며, 댓글과 메시지를 통해 진정한 관계를 만들어가는 것을 좋아해요. 사람들과의 연결을 통해 에너지를 얻고, SNS를 통해 더 넓은 세상과 소통하려고 노력하는 성격이에요.

하지만 바다도 때로는 너무 깊어서 자신을 잃을 수 있듯이, 당신도 가끔은 다른 사람들의 반응에 너무 의존하거나 온라인 관계에만 집중할 수 있어요. 가끔은 바다에서 나와서 육지(오프라인)에서도 균형을 찾아보는 것이 좋을 것 같아요!`,
        traits: ['사교적', '소통적', '관계 중심', '활발함', '포용적'],
        strengths: [
          '뛰어난 소통능력',
          '넓은 인간관계',
          '공감능력',
          '네트워킹',
          '사회적 영향력',
        ],
        weaknesses: [
          '타인 의존성',
          '프라이버시 부족',
          '온라인 중독',
          '감정 기복',
          '오프라인 소홀',
        ],
        goodMatches: ['🌟 별 같은 표현가', '🎈 바람 같은 엔터테이너'],
        badMatches: ['🌳 나무 같은 학습자'],
        goodMatchReasons: [
          '🌟 별 같은 표현가: 당신의 소통력과 상대방의 창의성이 멋진 시너지를 만들어요',
          '🎈 바람 같은 엔터테이너: 함께 즐겁고 활발한 SNS 활동을 할 수 있어요',
        ],
        badMatchReasons: [
          '🌳 나무 같은 학습자: 너무 학습 중심적이고 신중한 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '오프라인 관계도 소중히 해보세요',
          '프라이버시 설정을 점검해보세요',
          'SNS 사용 시간을 조절해보세요',
          '자신만의 콘텐츠도 만들어보세요',
        ],
      },
      expression: {
        title: '🌟 별 같은 표현가',
        description: '당신은 별처럼 반짝이며 자신만의 개성을 표현하는 SNS 표현가입니다!',
        detailedDescription: `당신은 별처럼 반짝이고 독특한 성격을 가지고 있어요. SNS에서 자신만의 개성과 스타일을 표현하는 것을 좋아하며, 신중하게 선별된 콘텐츠로 자신만의 세계를 보여주는 표현가입니다.

별처럼 자신만의 빛을 발하며, 완성도 높은 게시물과 아름다운 비주얼로 다른 사람들에게 영감을 주는 것을 좋아해요. 질보다는 양을 추구하며, 자신의 일상과 취향을 예술적으로 표현하는 것을 즐기는 성격이에요.

하지만 별도 때로는 너무 밝아서 혼자 빛나려 할 수 있듯이, 당신도 가끔은 다른 사람들의 반응에 너무 민감하거나 완벽주의적일 수 있어요. 가끔은 별도 다른 별들과 함께 별자리(소통)를 이루어보는 것도 좋을 것 같아요!`,
        traits: ['창의적', '개성적', '미적 감각', '완벽주의', '표현력'],
        strengths: [
          '뛰어난 표현력',
          '창의적 사고',
          '미적 감각',
          '개성 있는 콘텐츠',
          '영감 제공',
        ],
        weaknesses: [
          '완벽주의',
          '타인 시선 의식',
          '소통 부족',
          '압박감',
          '비교 의식',
        ],
        goodMatches: ['🌊 바다 같은 소통왕', '🌳 나무 같은 학습자'],
        badMatches: ['🎈 바람 같은 엔터테이너'],
        goodMatchReasons: [
          '🌊 바다 같은 소통왕: 당신의 창의성과 상대방의 소통력이 멋진 시너지를 만들어요',
          '🌳 나무 같은 학습자: 함께 의미 있고 수준 높은 콘텐츠를 만들 수 있어요',
        ],
        badMatchReasons: [
          '🎈 바람 같은 엔터테이너: 너무 가벼운 엔터테인먼트 중심과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '완벽주의를 조금 줄여보세요',
          '다른 사람들과의 소통도 늘려보세요',
          '과정도 공유해보세요',
          '자신만의 스타일에 자신감을 가지세요',
        ],
      },
      learning: {
        title: '🌳 나무 같은 학습자',
        description: '당신은 나무처럼 꾸준히 성장하며 지식을 쌓아가는 SNS 학습자입니다!',
        detailedDescription: `당신은 나무처럼 꾸준하고 신중한 성격을 가지고 있어요. SNS에서 유용한 정보를 얻고 새로운 지식을 습득하는 것을 좋아하며, 신중하게 선별된 양질의 콘텐츠를 통해 성장하는 학습자입니다.

나무처럼 깊은 뿌리를 내리며 차근차근 지식을 쌓아가고, 다른 사람들에게도 유익한 정보를 공유하는 것을 좋아해요. 트렌드보다는 의미 있는 콘텐츠를 추구하며, SNS를 통해 개인적인 성장을 이루려고 노력하는 성격이에요.

하지만 나무도 때로는 너무 깊게 뿌리만 내리다가 햇빛(즐거움)을 놓칠 수 있듯이, 당신도 가끔은 너무 진지하거나 재미있는 순간들을 놓칠 수 있어요. 가끔은 나무도 바람에 흔들리며 즐거움(가벼운 소통)을 느끼는 것도 좋을 것 같아요!`,
        traits: ['지적 호기심', '신중함', '성장 지향', '분석적', '목적 의식'],
        strengths: [
          '비판적 사고',
          '정보 분석',
          '꾸준한 학습',
          '양질의 콘텐츠',
          '자기 계발',
        ],
        weaknesses: [
          '재미 부족',
          '경직성',
          '소통 어려움',
          '트렌드 둔감',
          '과도한 진지함',
        ],
        goodMatches: ['🌟 별 같은 표현가', '🎈 바람 같은 엔터테이너'],
        badMatches: ['🌊 바다 같은 소통왕'],
        goodMatchReasons: [
          '🌟 별 같은 표현가: 함께 의미 있고 수준 높은 콘텐츠를 만들 수 있어요',
          '🎈 바람 같은 엔터테이너: 당신의 신중함과 상대방의 즐거움이 균형을 이룰 수 있어요',
        ],
        badMatchReasons: [
          '🌊 바다 같은 소통왕: 너무 활발하고 감정적인 소통 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 재미있는 콘텐츠도 즐겨보세요',
          '다른 사람들과의 가벼운 소통도 시도해보세요',
          '완벽하지 않아도 공유해보세요',
          '트렌드에도 관심을 가져보세요',
        ],
      },
      entertainment: {
        title: '🎈 바람 같은 엔터테이너',
        description: '당신은 바람처럼 자유롭고 즐거운 SNS 엔터테이너입니다!',
        detailedDescription: `당신은 바람처럼 자유롭고 가벼운 성격을 가지고 있어요. SNS에서 재미있는 콘텐츠를 즐기고 다른 사람들에게도 즐거움을 주는 것을 좋아하는 자유로운 엔터테이너입니다.

바람처럼 자유롭게 여기저기를 돌아다니며 재미있는 콘텐츠를 찾아 즐기고, 무거운 것보다는 가볍고 유쾌한 것을 선호해요. SNS를 통해 스트레스를 해소하고 힐링을 얻으며, 다른 사람들에게도 웃음과 즐거움을 선사하는 성격이에요.

하지만 바람도 때로는 너무 가벼워서 방향을 잃을 수 있듯이, 당신도 가끔은 의미 있는 것들을 놓치거나 깊이 있는 관계를 형성하는데 어려움을 겪을 수 있어요. 가끔은 바람도 한 곳에 머물러서 깊은 뿌리(진지한 소통)를 내려보는 것도 좋을 것 같아요!`,
        traits: ['자유로움', '유머 감각', '긍정적', '유연함', '힐링 추구'],
        strengths: [
          '스트레스 해소',
          '긍정적 에너지',
          '유머 감각',
          '적응력',
          '힐링 제공',
        ],
        weaknesses: [
          '깊이 부족',
          '집중력 부족',
          '관계 형성 어려움',
          '의미 있는 활동 소홀',
          '시간 낭비',
        ],
        goodMatches: ['🌊 바다 같은 소통왕', '🌳 나무 같은 학습자'],
        badMatches: ['🌟 별 같은 표현가'],
        goodMatchReasons: [
          '🌊 바다 같은 소통왕: 함께 즐겁고 활발한 SNS 활동을 할 수 있어요',
          '🌳 나무 같은 학습자: 당신의 즐거움과 상대방의 신중함이 균형을 이룰 수 있어요',
        ],
        badMatchReasons: [
          '🌟 별 같은 표현가: 너무 완벽주의적이고 신중한 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 의미 있는 콘텐츠도 관심을 가져보세요',
          '깊이 있는 관계도 만들어보세요',
          'SNS 사용 시간을 적절히 조절해보세요',
          '자신만의 콘텐츠도 만들어보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.communication;
  },
};
