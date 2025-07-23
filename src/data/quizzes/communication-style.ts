import type { Quiz } from '../../types';

export const communicationStyleQuiz: Quiz = {
  id: 'communication-style',
  title: '당신은 어떤 소통 스타일인가요?',
  description: '커뮤니케이션에서 당신만의 독특한 스타일을 알아보고 더 효과적인 소통 방법을 찾아보세요!',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '대화를 시작할 때 당신은?',
      options: [
        { text: '"바로 본론으로! 시간은 소중해!"', value: 'direct' },
        { text: '"기분 어때? 먼저 안부부터!"', value: 'empathetic' },
        { text: '"체계적으로 차근차근 설명할게!"', value: 'logical' },
        { text: '"재미있는 이야기부터 시작하자!"', value: 'entertaining' },
      ],
    },
    {
      question: '의견이 다를 때 당신은?',
      options: [
        { text: '"내 의견은 이거야! 명확하게 전달!"', value: 'assertive' },
        { text: '"너의 생각도 이해해, 하지만 내 생각은..."', value: 'understanding' },
        {
          text: '"데이터와 근거를 바탕으로 설명할게!"',
          value: 'factual',
        },
        { text: '"서로 중간점을 찾아보자!"', value: 'compromising' },
      ],
    },
    {
      question: '상대방이 감정적으로 반응할 때?',
      options: [
        { text: '"문제부터 해결하자!"', value: 'problem-solver' },
        {
          text: '"마음이 힘들구나, 내가 이해해"',
          value: 'emotionally-supportive',
        },
        { text: '"차분하게 상황을 정리해보자"', value: 'analytical' },
        { text: '"분위기를 바꿔보자!"', value: 'mood-changer' },
      ],
    },
    {
      question: '정보를 전달할 때 선호하는 방식은?',
      options: [
        { text: '"핵심만 간단명료하게!"', value: 'concise' },
        {
          text: '"이해할 수 있도록 자세히 설명!"',
          value: 'detailed',
        },
        { text: '"순서대로 체계적으로!"', value: 'structured' },
        { text: '"재미있고 기억에 남게!"', value: 'creative' },
      ],
    },
    {
      question: '피드백을 줄 때 당신의 스타일은?',
      options: [
        { text: '"개선점을 직접적으로 얘기해!"', value: 'direct-feedback' },
        { text: '"좋은 점 먼저, 그 다음 개선점!"', value: 'supportive-feedback' },
        { text: '"구체적인 예시와 데이터로!"', value: 'analytical-feedback' },
        { text: '"스토리텔링으로 부드럽게!"', value: 'narrative-feedback' },
      ],
    },
    {
      question: '회의에서 당신의 역할은?',
      options: [
        { text: '"빠르게 결정하고 진행시키기!"', value: 'driver' },
        { text: '"모든 의견을 듣고 조화 이루기!"', value: 'facilitator' },
        { text: '"분석하고 검토하기!"', value: 'analyzer' },
        { text: '"창의적 아이디어 제시하기!"', value: 'innovator' },
      ],
    },
    {
      question: '어려운 소식을 전해야 할 때?',
      options: [
        { text: '"바로 직설적으로 전달!"', value: 'straightforward' },
        { text: '"부드럽게 감정을 배려하며!"', value: 'gentle' },
        { text: '"사실과 근거를 바탕으로!"', value: 'factual-delivery' },
        { text: '"긍정적인 면도 함께 언급!"', value: 'balanced' },
      ],
    },
    {
      question: '상대방이 이해하지 못할 때?',
      options: [
        { text: '"다른 방식으로 다시 설명!"', value: 'adaptive' },
        { text: '"천천히 공감하며 설명!"', value: 'patient' },
        { text: '"예시와 자료로 보완 설명!"', value: 'educational' },
        { text: '"핵심만 간단하게 요약!"', value: 'simplified' },
      ],
    },
    {
      question: '팀 프로젝트에서 소통할 때?',
      options: [
        { text: '"명확한 역할과 책임 분담!"', value: 'organized' },
        { text: '"팀원들의 의견과 감정 고려!"', value: 'collaborative' },
        { text: '"데이터와 진행상황 공유!"', value: 'data-driven' },
        { text: '"즐겁고 창의적인 분위기!"', value: 'energetic' },
      ],
    },
    {
      question: '갈등 상황에서 당신은?',
      options: [
        { text: '"정면 승부! 확실하게 해결!"', value: 'confrontational' },
        { text: '"평화롭게 서로 이해하며!"', value: 'peaceful' },
        { text: '"공정하고 객관적으로!"', value: 'objective' },
        { text: '"유머로 분위기 전환!"', value: 'humorous' },
      ],
    },
    {
      question: '새로운 사람과 처음 만날 때?',
      options: [
        { text: '"적극적으로 자기소개!"', value: 'proactive' },
        { text: '"따뜻하게 관심 표현!"', value: 'warm' },
        { text: '"신중하게 상황 파악!"', value: 'cautious' },
        { text: '"재미있는 화제로 시작!"', value: 'icebreaker' },
      ],
    },
    {
      question: '비판을 받을 때 당신의 반응은?',
      options: [
        { text: '"반박하고 내 입장 설명!"', value: 'defensive' },
        { text: '"겸손하게 받아들이고 개선!"', value: 'receptive' },
        { text: '"구체적인 근거 요청!"', value: 'questioning' },
        { text: '"긍정적으로 해석하고 수용!"', value: 'positive' },
      ],
    },
    {
      question: '중요한 발표를 할 때?',
      options: [
        { text: '"핵심 메시지를 강력하게!"', value: 'impactful' },
        { text: '"청중과 감정적 연결!"', value: 'emotional' },
        { text: '"논리적 구조와 데이터!"', value: 'systematic' },
        { text: '"흥미롭고 기억에 남게!"', value: 'memorable' },
      ],
    },
    {
      question: '온라인 소통(메신저, 이메일)에서?',
      options: [
        { text: '"간단하고 빠르게!"', value: 'efficient' },
        { text: '"이모지와 따뜻한 표현!"', value: 'expressive' },
        { text: '"정확하고 상세하게!"', value: 'precise' },
        { text: '"창의적이고 재미있게!"', value: 'creative-digital' },
      ],
    },
    {
      question: '상대방의 말을 들을 때?',
      options: [
        { text: '"핵심을 빠르게 파악!"', value: 'focused-listener' },
        { text: '"감정에 공감하며 경청!"', value: 'empathetic-listener' },
        { text: '"논리와 사실을 분석!"', value: 'analytical-listener' },
        { text: '"전체적인 맥락과 의미!"', value: 'intuitive-listener' },
      ],
    },
    {
      question: '소통에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '"효율성과 결과!"', value: 'results' },
        { text: '"관계와 감정!"', value: 'relationships' },
        { text: '"정확성과 명확성!"', value: 'clarity' },
        { text: '"창의성과 즐거움!"', value: 'creativity' },
      ],
    },
    {
      question: '소통이 잘 안 될 때?',
      options: [
        { text: '"더 강하게 주장!"', value: 'persistent' },
        { text: '"상대방 입장 더 이해!"', value: 'understanding-more' },
        { text: '"다른 방법으로 접근!"', value: 'alternative' },
        { text: '"시간을 두고 천천히!"', value: 'patient-approach' },
      ],
    },
    {
      question: '칭찬을 표현할 때?',
      options: [
        { text: '"구체적인 성과 언급!"', value: 'specific' },
        { text: '"진심어린 감정 표현!"', value: 'heartfelt' },
        { text: '"객관적 평가 기준!"', value: 'objective-praise' },
        { text: '"재미있고 독창적으로!"', value: 'unique' },
      ],
    },
    {
      question: '소통 스타일을 한 마디로 표현하면?',
      options: [
        { text: '"번개 같은 직진형!"', value: 'lightning' },
        { text: '"봄바람 같은 따뜻형!"', value: 'spring-breeze' },
        { text: '"산 같은 신중형!"', value: 'mountain' },
        { text: '"무지개 같은 창의형!"', value: 'rainbow' },
      ],
    },
    {
      question: '이상적인 소통 환경은?',
      options: [
        { text: '"효율적이고 목표 지향적!"', value: 'goal-oriented' },
        { text: '"편안하고 따뜻한 분위기!"', value: 'comfortable' },
        { text: '"체계적이고 논리적!"', value: 'structured-env' },
        { text: '"자유롭고 창의적!"', value: 'creative-env' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const directCount = answers.filter((a) =>
      [
        'direct',
        'assertive',
        'problem-solver',
        'concise',
        'direct-feedback',
        'driver',
        'straightforward',
        'adaptive',
        'organized',
        'confrontational',
        'proactive',
        'defensive',
        'impactful',
        'efficient',
        'focused-listener',
        'results',
        'persistent',
        'specific',
        'lightning',
        'goal-oriented',
      ].includes(a as string)
    ).length;

    const empatheticCount = answers.filter((a) =>
      [
        'empathetic',
        'understanding',
        'emotionally-supportive',
        'detailed',
        'supportive-feedback',
        'facilitator',
        'gentle',
        'patient',
        'collaborative',
        'peaceful',
        'warm',
        'receptive',
        'emotional',
        'expressive',
        'empathetic-listener',
        'relationships',
        'understanding-more',
        'heartfelt',
        'spring-breeze',
        'comfortable',
      ].includes(a as string)
    ).length;

    const logicalCount = answers.filter((a) =>
      [
        'logical',
        'factual',
        'analytical',
        'structured',
        'analytical-feedback',
        'analyzer',
        'factual-delivery',
        'educational',
        'data-driven',
        'objective',
        'cautious',
        'questioning',
        'systematic',
        'precise',
        'analytical-listener',
        'clarity',
        'alternative',
        'objective-praise',
        'mountain',
        'structured-env',
      ].includes(a as string)
    ).length;

    const creativeCount = answers.filter((a) =>
      [
        'entertaining',
        'compromising',
        'mood-changer',
        'creative',
        'narrative-feedback',
        'innovator',
        'balanced',
        'simplified',
        'energetic',
        'humorous',
        'icebreaker',
        'positive',
        'memorable',
        'creative-digital',
        'intuitive-listener',
        'creativity',
        'patient-approach',
        'unique',
        'rainbow',
        'creative-env',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'direct', score: directCount },
      { type: 'empathetic', score: empatheticCount },
      { type: 'logical', score: logicalCount },
      { type: 'creative', score: creativeCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      direct: {
        title: '번개 같은 직진 소통가',
        description: '당신은 번개처럼 빠르고 직접적인 소통을 하는 효율성의 달인입니다!',
        detailedDescription: `당신은 번개처럼 빠르고 강력한 성격을 가지고 있어요. 소통에서 효율성과 명확성을 최우선으로 생각하며, 직접적이고 솔직한 방식으로 메시지를 전달하는 직진형 소통가입니다.

번개처럼 핵심을 정확히 짚어내고 빠른 속도로 문제를 해결하는 것을 좋아해요. 시간을 소중히 여기며, 본론부터 시작해서 명확한 결론에 도달하는 것을 선호하는 성격이에요.

하지만 번개도 때로는 너무 강렬해서 상대방을 놀라게 할 수 있듯이, 당신도 가끔은 다른 사람의 감정을 놓치거나 너무 직접적이어서 상처를 줄 수 있어요. 가끔은 번개도 구름(부드러움) 속에서 은은하게 빛나는 것도 좋을 것 같아요!`,
        traits: ['직접적', '효율적', '명확함', '결단력', '목표지향'],
        strengths: [
          '빠른 의사결정',
          '명확한 소통',
          '문제 해결력',
          '시간 관리',
          '리더십',
        ],
        weaknesses: [
          '감정 고려 부족',
          '공감 부족',
          '성급함',
          '관계 소홀',
          '융통성 부족',
        ],
        goodMatches: ['봄바람 같은 공감 소통가', '산 같은 논리 소통가'],
        badMatches: ['무지개 같은 창의 소통가'],
        goodMatchReasons: [
          '봄바람 같은 공감 소통가: 당신의 효율성과 상대방의 따뜻함이 균형을 이룰 수 있어요',
          '산 같은 논리 소통가: 함께 체계적이고 명확한 소통을 할 수 있어요',
        ],
        badMatchReasons: [
          '무지개 같은 창의 소통가: 너무 자유분방하고 창의적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '상대방의 감정도 고려해보세요',
          '때로는 천천히 설명해보세요',
          '공감하는 표현을 늘려보세요',
          '관계 형성에도 시간을 투자해보세요',
        ],
      },
      empathetic: {
        title: '봄바람 같은 공감 소통가',
        description: '당신은 봄바람처럼 따뜻하고 배려심 깊은 소통을 하는 관계의 달인입니다!',
        detailedDescription: `당신은 봄바람처럼 따뜻하고 부드러운 성격을 가지고 있어요. 소통에서 상대방의 감정과 관계를 가장 중요하게 생각하며, 공감과 배려를 통해 마음을 움직이는 따뜻한 소통가입니다.

봄바람처럼 상대방의 마음을 어루만지고 편안함을 주며, 모든 사람이 이해받고 존중받는다고 느낄 수 있도록 세심하게 배려해요. 갈등보다는 조화를 추구하며, 따뜻한 관계를 만들어가는 것을 즐기는 성격이에요.

하지만 봄바람도 때로는 너무 부드러워서 방향이 일정하지 않을 수 있듯이, 당신도 가끔은 너무 배려하느라 명확한 메시지 전달이 어렵거나 결정을 미룰 수 있어요. 가끔은 봄바람도 일정한 방향(명확함)으로 불어보는 것도 좋을 것 같아요!`,
        traits: ['공감적', '배려심', '관계중심', '따뜻함', '조화추구'],
        strengths: [
          '뛰어난 공감능력',
          '관계 형성',
          '갈등 조정',
          '팀워크',
          '감정 이해',
        ],
        weaknesses: [
          '명확성 부족',
          '결정 어려움',
          '시간 소요',
          '자기주장 부족',
          '효율성 부족',
        ],
        goodMatches: ['번개 같은 직진 소통가', '무지개 같은 창의 소통가'],
        badMatches: ['산 같은 논리 소통가'],
        goodMatchReasons: [
          '번개 같은 직진 소통가: 당신의 따뜻함과 상대방의 효율성이 균형을 이룰 수 있어요',
          '무지개 같은 창의 소통가: 함께 따뜻하고 창의적인 분위기를 만들 수 있어요',
        ],
        badMatchReasons: [
          '산 같은 논리 소통가: 너무 논리 중심적이고 차가운 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '때로는 명확하게 표현해보세요',
          '자신의 의견도 당당히 말해보세요',
          '효율성도 고려해보세요',
          '결정을 미루지 말고 선택해보세요',
        ],
      },
      logical: {
        title: '산 같은 논리 소통가',
        description: '당신은 산처럼 안정적이고 체계적인 소통을 하는 논리의 달인입니다!',
        detailedDescription: `당신은 산처럼 안정적이고 깊이 있는 성격을 가지고 있어요. 소통에서 논리와 사실을 바탕으로 체계적이고 정확한 메시지를 전달하는 것을 좋아하는 신뢰할 수 있는 소통가입니다.

산처럼 견고한 기반 위에서 차근차근 논리를 쌓아가며, 객관적인 데이터와 근거를 통해 설득력 있는 소통을 해요. 정확성을 중시하며, 체계적인 접근을 통해 깊이 있는 대화를 만들어가는 성격이에요.

하지만 산도 때로는 너무 높아서 접근하기 어려울 수 있듯이, 당신도 가끔은 너무 논리적이어서 감정을 소홀히 하거나 딱딱한 느낌을 줄 수 있어요. 가끔은 산에도 아름다운 꽃(감정)이 피어나는 것도 좋을 것 같아요!`,
        traits: ['논리적', '체계적', '분석적', '정확성', '객관적'],
        strengths: [
          '논리적 사고',
          '체계적 설명',
          '데이터 분석',
          '신뢰성',
          '문제 분석',
        ],
        weaknesses: [
          '감정 소홀',
          '딱딱함',
          '융통성 부족',
          '복잡함',
          '시간 소요',
        ],
        goodMatches: ['번개 같은 직진 소통가', '무지개 같은 창의 소통가'],
        badMatches: ['봄바람 같은 공감 소통가'],
        goodMatchReasons: [
          '번개 같은 직진 소통가: 함께 체계적이고 명확한 소통을 할 수 있어요',
          '무지개 같은 창의 소통가: 당신의 논리성과 상대방의 창의성이 조화를 이룰 수 있어요',
        ],
        badMatchReasons: [
          '봄바람 같은 공감 소통가: 너무 감정 중심적이고 부드러운 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '감정적 소통도 시도해보세요',
          '상대방의 기분을 고려해보세요',
          '간단한 설명도 연습해보세요',
          '유연한 접근도 시도해보세요',
        ],
      },
      creative: {
        title: '무지개 같은 창의 소통가',
        description: '당신은 무지개처럼 다채롭고 창의적인 소통을 하는 영감의 달인입니다!',
        detailedDescription: `당신은 무지개처럼 다채롭고 창의적인 성격을 가지고 있어요. 소통에서 재미와 창의성을 추구하며, 독특하고 기억에 남는 방식으로 메시지를 전달하는 영감을 주는 소통가입니다.

무지개처럼 다양한 색깔의 표현 방식을 가지고 있으며, 유머와 스토리텔링을 통해 사람들의 마음을 사로잡는 것을 잘해요. 분위기를 밝게 만들고 창의적인 해결책을 찾아내는 것을 즐기는 성격이에요.

하지만 무지개도 때로는 너무 화려해서 집중하기 어려울 수 있듯이, 당신도 가끔은 너무 창의적이어서 핵심을 놓치거나 체계성이 부족할 수 있어요. 가끔은 무지개도 하나의 색(일관성)에 집중해보는 것도 좋을 것 같아요!`,
        traits: ['창의적', '유머러스', '자유로움', '영감적', '유연함'],
        strengths: [
          '창의적 표현',
          '분위기 메이킹',
          '기억에 남는 소통',
          '유머 감각',
          '유연한 사고',
        ],
        weaknesses: [
          '체계성 부족',
          '산만함',
          '핵심 놓침',
          '일관성 부족',
          '진지함 부족',
        ],
        goodMatches: ['봄바람 같은 공감 소통가', '산 같은 논리 소통가'],
        badMatches: ['번개 같은 직진 소통가'],
        goodMatchReasons: [
          '봄바람 같은 공감 소통가: 함께 따뜻하고 창의적인 분위기를 만들 수 있어요',
          '산 같은 논리 소통가: 당신의 창의성과 상대방의 논리성이 조화를 이룰 수 있어요',
        ],
        badMatchReasons: [
          '번개 같은 직진 소통가: 너무 직접적이고 효율성 중심인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '때로는 체계적으로 정리해보세요',
          '핵심 메시지를 명확히 해보세요',
          '일관성 있는 소통을 시도해보세요',
          '진지한 상황에서는 톤을 조절해보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.direct;
  },
};
