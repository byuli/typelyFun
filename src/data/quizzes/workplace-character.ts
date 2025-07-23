import type { Quiz } from '../../types';

export const workplaceCharacterQuiz: Quiz = {
  id: 'workplace-character',
  title: '당신은 어떤 직장인인가요?',
  description: '직장에서의 당신의 성향과 스타일을 알아보세요! 어떤 직장인과 가장 닮았을까요?',
  category: '직장',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 업무를 시작할 때 당신은?',
      options: [
        {
          text: '"전체적인 계획을 세우고 체계적으로 진행해!"',
          value: 'planner',
        },
        { text: '"즉시 실행에 옮기며 진행하면서 수정해!"', value: 'doer' },
        { text: '"팀원들과 상의하여 함께 결정해!"', value: 'collaborator' },
        { text: '"가장 중요한 것부터 우선순위를 정해!"', value: 'prioritizer' },
      ],
    },
    {
      question: '회의에서 당신의 역할은?',
      options: [
        {
          text: '"아이디어를 제시하고 창의적인 해결책을 제안해!"',
          value: 'innovator',
        },
        {
          text: '"논리적으로 분석하고 실현 가능성을 검토해"',
          value: 'analyst',
        },
        {
          text: '"팀원들의 의견을 조율하고 합의를 이끌어내"',
          value: 'mediator',
        },
        {
          text: '"구체적인 실행 계획을 세우고 역할을 분담해"',
          value: 'organizer',
        },
      ],
    },
    {
      question: '업무에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '창의적이고 혁신적인 아이디어', value: 'creativity' },
        { text: '정확하고 완벽한 결과물', value: 'perfection' },
        { text: '팀워크와 협력', value: 'teamwork' },
        { text: '효율성과 생산성', value: 'efficiency' },
      ],
    },
    {
      question: '스트레스 상황에서 당신은?',
      options: [
        {
          text: '"문제를 분석하고 체계적으로 해결해!"',
          value: 'problem-solver',
        },
        { text: '"팀원들과 상의하여 함께 해결해!"', value: 'team-player' },
        {
          text: '"새로운 관점에서 접근하여 창의적으로 해결해!"',
          value: 'creative',
        },
        { text: '"우선순위를 정하고 단계별로 처리해!"', value: 'systematic' },
      ],
    },
    {
      question: '동료와의 갈등이 생겼을 때?',
      options: [
        { text: '"직접 대화를 통해 문제를 해결해!"', value: 'direct' },
        { text: '"상급자나 중재자를 통해 해결해!"', value: 'mediated' },
        {
          text: '"시간을 두고 자연스럽게 해결되기를 기다려"',
          value: 'patient',
        },
        {
          text: '"객관적 사실을 바탕으로 논리적으로 해결해!"',
          value: 'logical',
        },
      ],
    },
    {
      question: '새로운 프로젝트를 맡았을 때?',
      options: [
        {
          text: '"기존 방식을 개선할 수 있는 새로운 아이디어를 찾아!"',
          value: 'improver',
        },
        { text: '"성공 사례를 참고하여 안전하게 진행해"', value: 'safe' },
        { text: '"팀원들의 의견을 수렴하여 함께 진행해!"', value: 'inclusive' },
        {
          text: '"명확한 목표와 일정을 세우고 체계적으로 진행해!"',
          value: 'structured',
        },
      ],
    },
    {
      question: '업무 환경에서 선호하는 것은?',
      options: [
        { text: '자유롭고 창의적인 분위기', value: 'creative' },
        { text: '조용하고 집중할 수 있는 환경', value: 'focused' },
        { text: '활발하고 소통이 많은 환경', value: 'social' },
        { text: '체계적이고 정돈된 환경', value: 'organized' },
      ],
    },
    {
      question: '업무에서 가장 만족스러운 순간은?',
      options: [
        { text: '창의적인 아이디어가 성공했을 때', value: 'creative-success' },
        { text: '완벽한 결과물을 만들어냈을 때', value: 'perfect-result' },
        { text: '팀과 함께 성과를 달성했을 때', value: 'team-success' },
        {
          text: '효율적으로 업무를 완료했을 때',
          value: 'efficient-completion',
        },
      ],
    },
    {
      question: '업무에서 가장 어려워하는 것은?',
      options: [
        { text: '반복적이고 단조로운 업무', value: 'monotonous' },
        { text: '불확실하고 모호한 상황', value: 'uncertain' },
        { text: '혼자서 결정해야 하는 상황', value: 'solo-decision' },
        { text: '시간에 쫓기는 급한 업무', value: 'rushed' },
      ],
    },
    {
      question: '동료에게 도움을 요청할 때?',
      options: [
        { text: '"즉시 도움을 요청하고 함께 해결해!"', value: 'immediate' },
        { text: '"충분히 시도한 후에 도움을 요청해"', value: 'after-try' },
        { text: '"공식적인 절차를 통해 도움을 요청해"', value: 'formal' },
        { text: '"비공식적으로 친근하게 도움을 요청해!"', value: 'informal' },
      ],
    },
    {
      question: '업무 성과를 평가받을 때?',
      options: [
        {
          text: '"창의성과 혁신성을 중점적으로 평가받고 싶어!"',
          value: 'creativity',
        },
        {
          text: '"정확성과 완성도를 중점적으로 평가받고 싶어!"',
          value: 'accuracy',
        },
        {
          text: '"협력과 팀워크를 중점적으로 평가받고 싶어!"',
          value: 'collaboration',
        },
        {
          text: '"효율성과 생산성을 중점적으로 평가받고 싶어!"',
          value: 'productivity',
        },
      ],
    },
    {
      question: '업무에서 리더십을 발휘할 때?',
      options: [
        { text: '"창의적인 비전을 제시하고 팀을 이끌어!"', value: 'visionary' },
        { text: '"체계적인 계획을 세우고 실행을 관리해"', value: 'manager' },
        {
          text: '"팀원들의 의견을 수렴하고 합의를 이끌어내"',
          value: 'consensus',
        },
        { text: '"전문성을 바탕으로 기술적 지도를 해!"', value: 'expert' },
      ],
    },
    {
      question: '업무에서 학습할 때?',
      options: [
        {
          text: '"새로운 기술과 트렌드를 적극적으로 학습해!"',
          value: 'trend-learner',
        },
        {
          text: '"기존 지식을 깊이 있게 연구하고 정리해"',
          value: 'deep-learner',
        },
        {
          text: '"동료들과 함께 학습하고 경험을 공유해!"',
          value: 'collaborative-learner',
        },
        {
          text: '"실무에 바로 적용할 수 있는 실용적 지식을 학습해!"',
          value: 'practical-learner',
        },
      ],
    },
    {
      question: '업무에서 실수를 했을 때?',
      options: [
        { text: '"즉시 인정하고 해결책을 찾아!"', value: 'immediate-fix' },
        { text: '"원인을 분석하고 재발 방지책을 세워"', value: 'preventive' },
        { text: '"팀원들과 상의하여 함께 해결해!"', value: 'team-solve' },
        { text: '"객관적으로 분석하고 개선점을 찾아"', value: 'improvement' },
      ],
    },
    {
      question: '업무에서 가장 잘하는 것은?',
      options: [
        { text: '창의적인 아이디어 제시', value: 'idea-generation' },
        { text: '정확하고 완벽한 업무 수행', value: 'perfect-execution' },
        { text: '팀원들과의 협력과 소통', value: 'team-collaboration' },
        { text: '효율적인 업무 관리와 조직', value: 'efficient-management' },
      ],
    },
    {
      question: '업무 스타일을 한 마디로 표현하면?',
      options: [
        { text: '"창의적이고 혁신적인 스타일!"', value: 'innovative' },
        { text: '"정확하고 완벽한 스타일!"', value: 'precise' },
        { text: '"협력적이고 소통하는 스타일!"', value: 'collaborative' },
        { text: '"체계적이고 효율적인 스타일!"', value: 'systematic' },
      ],
    },
    {
      question: '이상적인 직장 환경은?',
      options: [
        { text: '창의성을 존중하고 혁신을 장려하는 환경', value: 'creative' },
        { text: '안정적이고 체계적인 업무 환경', value: 'stable' },
        { text: '팀워크와 소통이 활발한 환경', value: 'team-oriented' },
        {
          text: '성과와 효율성을 중시하는 환경',
          value: 'performance-oriented',
        },
      ],
    },
    {
      question: '업무에서 가장 중요한 가치는?',
      options: [
        { text: '창의성과 혁신', value: 'innovation' },
        { text: '정확성과 완성도', value: 'quality' },
        { text: '협력과 팀워크', value: 'collaboration' },
        { text: '효율성과 생산성', value: 'efficiency' },
      ],
    },
    {
      question: '업무에서 성장하고 싶은 방향은?',
      options: [
        {
          text: '"창의적 리더십과 비전 제시 능력!"',
          value: 'creative-leadership',
        },
        { text: '"전문성과 기술적 역량!"', value: 'expertise' },
        { text: '"팀 관리와 협력 능력!"', value: 'team-management' },
        { text: '"전략적 사고와 경영 능력!"', value: 'strategic-thinking' },
      ],
    },
    {
      question: '직장에서 추구하는 가치는?',
      options: [
        { text: '창의성과 자유로운 발상', value: 'creative-freedom' },
        { text: '완벽성과 전문성', value: 'perfection-expertise' },
        { text: '협력과 인간관계', value: 'cooperation-relationship' },
        { text: '효율성과 성과', value: 'efficiency-result' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const creativeCount = answers.filter((a) =>
      [
        'innovator',
        'creativity',
        'creative',
        'improver',
        'creative',
        'creative-success',
        'creativity',
        'visionary',
        'trend-learner',
        'idea-generation',
        'innovative',
        'creative',
        'innovation',
        'creative-leadership',
        'creative-freedom',
      ].includes(a as string)
    ).length;

    const precisePerfectCount = answers.filter((a) =>
      [
        'analyst',
        'perfection',
        'problem-solver',
        'safe',
        'focused',
        'perfect-result',
        'uncertain',
        'after-try',
        'accuracy',
        'manager',
        'deep-learner',
        'preventive',
        'perfect-execution',
        'precise',
        'stable',
        'quality',
        'expertise',
        'perfection-expertise',
      ].includes(a as string)
    ).length;

    const collaborativeCount = answers.filter((a) =>
      [
        'collaborator',
        'mediator',
        'teamwork',
        'team-player',
        'inclusive',
        'social',
        'team-success',
        'solo-decision',
        'immediate',
        'collaboration',
        'consensus',
        'collaborative-learner',
        'team-solve',
        'team-collaboration',
        'collaborative',
        'team-oriented',
        'collaboration',
        'team-management',
        'cooperation-relationship',
      ].includes(a as string)
    ).length;

    const efficientSystematicCount = answers.filter((a) =>
      [
        'planner',
        'prioritizer',
        'organizer',
        'efficiency',
        'systematic',
        'structured',
        'organized',
        'efficient-completion',
        'formal',
        'productivity',
        'expert',
        'practical-learner',
        'improvement',
        'efficient-management',
        'systematic',
        'performance-oriented',
        'efficiency',
        'strategic-thinking',
        'efficiency-result',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'creative', score: creativeCount },
      { type: 'precise', score: precisePerfectCount },
      { type: 'collaborative', score: collaborativeCount },
      { type: 'efficient', score: efficientSystematicCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      creative: {
        title: '창의적인 예술가 같은 혁신가',
        description:
          '당신은 직장에서 예술가처럼 창의적이고 혁신적인 아이디어를 추구하는 혁신가입니다!',
        detailedDescription: `당신은 예술가처럼 창의적이고 혁신적인 성격을 가지고 있어요. 직장에서도 새로운 아이디어를 제시하고 기존 방식을 개선하는 것을 즐기는 혁신가입니다.

예술가처럼 자유로운 환경에서 창의력을 발휘하며, 혁신적인 해결책을 찾아내는 능력이 뛰어나요. 새로운 기술과 트렌드에 관심이 많고, 창의적인 비전을 제시하며 팀을 이끄는 것을 좋아해요.

하지만 예술가도 너무 자유분방하면 체계성을 잃을 수 있듯이, 당신도 때로는 너무 이상적이거나 현실성이 부족할 수 있어요. 가끔은 예술가도 규칙(체계성)을 지켜보는 것도 좋을 것 같아요!`,
        traits: ['창의적', '혁신적', '자유로움', '아이디어 풍부', '트렌드 민감'],
        strengths: [
          '창의적 사고',
          '혁신 능력',
          '아이디어 제시',
          '새로운 시도',
          '비전 제시',
        ],
        weaknesses: [
          '현실성 부족',
          '체계성 부족',
          '세부사항 놓침',
          '일관성 부족',
          '완성도 아쉬움',
        ],
        goodMatches: ['안정적인 건물 같은 체계가', '따뜻한 카페 같은 협력가'],
        badMatches: ['빠른 기계 같은 효율가'],
        goodMatchReasons: [
          '안정적인 건물 같은 체계가: 당신의 창의력이 상대방의 체계성과 조화를 이룰 수 있어요',
          '따뜻한 카페 같은 협력가: 함께 창의적이고 협력적인 환경을 만들 수 있어요',
        ],
        badMatchReasons: [
          '빠른 기계 같은 효율가: 너무 빠르고 효율적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 체계적인 계획도 세워보세요',
          '현실성도 고려해보세요',
          '세부사항에도 주의를 기울여보세요',
          '일관성을 유지해보세요',
        ],
      },
      precise: {
        title: '안정적인 건물 같은 체계가',
        description:
          '당신은 직장에서 안정적인 건물처럼 정확하고 완벽한 업무를 추구하는 체계가입니다!',
        detailedDescription: `당신은 안정적인 건물처럼 정확하고 체계적인 성격을 가지고 있어요. 직장에서도 정확성과 완성도를 중요하게 생각하며, 체계적이고 논리적인 접근을 선호하는 체계가입니다.

안정적인 건물처럼 조용하고 집중할 수 있는 환경을 선호하고, 원인을 분석하고 재발 방지책을 세우는 것을 잘해요. 전문성과 기술적 역량을 개발하며, 완벽한 결과물을 만들어내는 것을 목표로 해요.

하지만 안정적인 건물도 너무 경직되면 융통성을 잃을 수 있듯이, 당신도 때로는 너무 완벽주의적이거나 변화에 적응하기 어려울 수 있어요. 가끔은 안정적인 건물에서 나와서 변화(창의성)를 받아들여보는 것도 좋을 것 같아요!`,
        traits: ['정확성', '체계적', '완벽주의', '신중함', '전문성'],
        strengths: [
          '정확한 업무',
          '체계적 접근',
          '완성도 높음',
          '신뢰성',
          '전문성',
        ],
        weaknesses: [
          '융통성 부족',
          '변화 적응 어려움',
          '완벽주의 스트레스',
          '창의성 부족',
          '속도 느림',
        ],
        goodMatches: ['창의적인 예술가 같은 혁신가', '빠른 기계 같은 효율가'],
        badMatches: ['따뜻한 카페 같은 협력가'],
        goodMatchReasons: [
          '창의적인 예술가 같은 혁신가: 당신의 체계성이 상대방의 창의력과 조화를 이룰 수 있어요',
          '빠른 기계 같은 효율가: 함께 체계적이고 효율적인 결과를 만들 수 있어요',
        ],
        badMatchReasons: [
          '따뜻한 카페 같은 협력가: 너무 협력적이고 유연한 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 융통성을 발휘해보세요',
          '변화를 두려워하지 마세요',
          '완벽함보다 진행을 중시해보세요',
          '창의적 시도도 해보세요',
        ],
      },
      collaborative: {
        title: '따뜻한 카페 같은 협력가',
        description:
          '당신은 직장에서 따뜻한 카페처럼 협력과 팀워크를 중시하는 협력가입니다!',
        detailedDescription: `당신은 따뜻한 카페처럼 협력적이고 소통을 중시하는 성격을 가지고 있어요. 직장에서도 팀워크와 협력을 중요하게 생각하며, 동료들과의 소통을 즐기는 협력가입니다.

따뜻한 카페처럼 활발하고 소통이 많은 환경을 선호하고, 팀원들의 의견을 수렴하고 합의를 이끌어내는 것을 잘해요. 팀 관리와 협력 능력을 기르며, 함께 성과를 달성하는 것을 추구하는 성격이에요.

하지만 따뜻한 카페도 너무 시끄러우면 집중이 어려울 수 있듯이, 당신도 때로는 너무 의존적이거나 혼자서 결정하기 어려울 수 있어요. 가끔은 따뜻한 카페에서 나와서 독립적인 결정(자립성)을 해보는 것도 좋을 것 같아요!`,
        traits: ['협력적', '소통 지향', '팀워크', '조율 능력', '친화력'],
        strengths: [
          '팀워크',
          '의사소통',
          '갈등 조정',
          '협력 능력',
          '분위기 메이킹',
        ],
        weaknesses: [
          '의존성',
          '결정 지연',
          '독립성 부족',
          '개인 성과 아쉬움',
          '갈등 회피',
        ],
        goodMatches: ['창의적인 예술가 같은 혁신가', '빠른 기계 같은 효율가'],
        badMatches: ['안정적인 건물 같은 체계가'],
        goodMatchReasons: [
          '창의적인 예술가 같은 혁신가: 함께 창의적이고 협력적인 환경을 만들 수 있어요',
          '빠른 기계 같은 효율가: 당신의 협력성이 상대방의 효율성에 균형을 제공해요',
        ],
        badMatchReasons: [
          '안정적인 건물 같은 체계가: 너무 체계적이고 경직된 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 독립적으로 결정해보세요',
          '개인 성과도 추구해보세요',
          '갈등을 직면해보세요',
          '자립성을 기르세요',
        ],
      },
      efficient: {
        title: '빠른 기계 같은 효율가',
        description:
          '당신은 직장에서 빠른 기계처럼 효율성과 생산성을 추구하는 효율가입니다!',
        detailedDescription: `당신은 빠른 기계처럼 효율적이고 체계적인 성격을 가지고 있어요. 직장에서도 효율성과 생산성을 중요하게 생각하며, 목표 지향적이고 실용적인 접근을 선호하는 효율가입니다.

빠른 기계처럼 체계적이고 정돈된 환경을 선호하고, 우선순위를 정하고 단계별로 처리하는 것을 잘해요. 전략적 사고와 경영 능력을 기르며, 효율적으로 업무를 완료하는 것을 목표로 해요.

하지만 빠른 기계도 너무 빨리 돌아가면 과열될 수 있듯이, 당신도 때로는 너무 성과 중심적이거나 인간관계를 소홀히 할 수 있어요. 가끔은 빠른 기계도 쉬면서 인간미(협력성)를 보여주는 것도 좋을 것 같아요!`,
        traits: ['효율적', '목표 지향', '체계적', '실용적', '성과 중심'],
        strengths: [
          '높은 생산성',
          '목표 달성 능력',
          '시간 관리',
          '체계적 접근',
          '실행력',
        ],
        weaknesses: [
          '인간관계 소홀',
          '창의성 부족',
          '스트레스 과다',
          '융통성 부족',
          '번아웃 위험',
        ],
        goodMatches: ['안정적인 건물 같은 체계가', '따뜻한 카페 같은 협력가'],
        badMatches: ['창의적인 예술가 같은 혁신가'],
        goodMatchReasons: [
          '안정적인 건물 같은 체계가: 함께 체계적이고 효율적인 결과를 만들 수 있어요',
          '따뜻한 카페 같은 협력가: 상대방의 협력성이 당신의 효율성에 균형을 제공해요',
        ],
        badMatchReasons: [
          '창의적인 예술가 같은 혁신가: 너무 창의적이고 자유로운 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 인간관계에도 시간을 투자해보세요',
          '창의적 시도도 해보세요',
          '충분한 휴식을 취하세요',
          '융통성을 발휘해보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.collaborative;
  },
};
