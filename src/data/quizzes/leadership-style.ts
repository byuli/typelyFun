import type { Quiz } from '../../types';

export const leadershipStyleQuiz: Quiz = {
  id: 'leadership-style',
  title: '👑 당신은 어떤 리더인가요?',
  description:
    '리더십 스타일로 알아보는 당신의 숨겨진 지도자 기질! 어떤 리더와 가장 닮았을까요?',
  category: '직업',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '팀원들이 문제를 해결하지 못할 때 당신은?',
      options: [
        {
          text: '⚡ "내가 직접 해결해주겠어!" (즉시 개입)',
          value: 'directive',
        },
        {
          text: '🤝 "다 같이 머리를 맞대고 해결해보자!" (협력 추구)',
          value: 'participative',
        },
        {
          text: '💪 "너희도 할 수 있어! 힘내!" (격려와 지원)',
          value: 'supportive',
        },
        {
          text: '🔍 "전문가를 찾아서 도움을 받아보자!" (외부 자원 활용)',
          value: 'delegative',
        },
      ],
    },
    {
      question: '새로운 프로젝트를 시작할 때 당신은?',
      options: [
        {
          text: '📋 "명확한 목표와 계획을 세우고 실행하자!" (체계적 지시)',
          value: 'structured',
        },
        {
          text: '🎯 "팀원들과 함께 목표를 설정해보자!" (공동 설정)',
          value: 'collaborative',
        },
        {
          text: '🌟 "각자의 아이디어를 들어보고 발전시켜보자!" (개인 의견 수렴)',
          value: 'individual',
        },
        {
          text: '🦅 "자유롭게 해보고 필요할 때만 도와줄게!" (자율성 부여)',
          value: 'autonomous',
        },
      ],
    },
    {
      question: '팀원이 실수를 했을 때 당신은?',
      options: [
        {
          text: '⚡ "즉시 수정하고 올바른 방법을 가르쳐주자!" (즉시 교정)',
          value: 'immediate',
        },
        {
          text: '🔍 "실수 원인을 함께 분석하고 개선해보자!" (공동 분석)',
          value: 'analysis',
        },
        {
          text: '💪 "실수는 학습의 기회야! 다음엔 더 잘할 거야!" (긍정적 격려)',
          value: 'positive',
        },
        {
          text: '🦅 "스스로 깨달을 수 있도록 기다려보자!" (자기 성찰)',
          value: 'reflection',
        },
      ],
    },
    {
      question: '팀의 성과가 좋지 않을 때 당신은?',
      options: [
        {
          text: '⚡ "더 엄격한 관리와 감독을 강화하자!" (강화된 관리)',
          value: 'strict',
        },
        {
          text: '🤝 "팀 전체와 함께 문제점을 분석해보자!" (공동 해결)',
          value: 'team-solution',
        },
        {
          text: '💪 "사기를 높이고 동기부여에 집중하자!" (사기 향상)',
          value: 'morale',
        },
        {
          text: '🦅 "자율성을 높이고 책임감을 강화하자!" (자율성 증대)',
          value: 'autonomy',
        },
      ],
    },
    {
      question: '새로운 팀원이 합류했을 때 당신은?',
      options: [
        {
          text: '📋 "명확한 역할과 책임을 부여하고 규칙을 설명해주자!" (체계적 안내)',
          value: 'systematic',
        },
        {
          text: '🎉 "팀 전체와 함께 환영하고 팀 문화를 소개해보자!" (팀 환영)',
          value: 'team-welcome',
        },
        {
          text: '💬 "개인적으로 대화하며 편안하게 적응할 수 있도록 도와주자!" (개별 지원)',
          value: 'personal',
        },
        {
          text: '🦅 "자연스럽게 알아가도록 기다려보자!" (자연스러운 적응)',
          value: 'natural',
        },
      ],
    },
    {
      question: '중요한 의사결정을 해야 할 때 당신은?',
      options: [
        {
          text: '⚡ "내 판단으로 빠르게 결정하자!" (신속한 결정)',
          value: 'quick',
        },
        {
          text: '🤝 "팀원들의 의견을 수렴하여 합의점을 찾아보자!" (합의 도출)',
          value: 'consensus',
        },
        {
          text: '💭 "팀원들의 감정과 생각을 고려하여 결정하자!" (감정 고려)',
          value: 'emotional',
        },
        {
          text: '🔍 "전문가나 해당 분야 담당자에게 결정을 위임하자!" (전문가 위임)',
          value: 'expert',
        },
      ],
    },
    {
      question: '팀원이 개인적인 문제로 어려움을 겪고 있을 때 당신은?',
      options: [
        {
          text: '📋 "업무에 영향을 주지 않도록 명확한 기준을 제시하자!" (업무 우선)',
          value: 'work-focused',
        },
        {
          text: '🤝 "팀 전체가 함께 도울 수 있는 방법을 찾아보자!" (팀 지원)',
          value: 'team-support',
        },
        {
          text: '💬 "개인적으로 상담하고 정서적 지원을 제공하자!" (개별 상담)',
          value: 'counseling',
        },
        {
          text: '🦅 "스스로 해결할 수 있도록 시간을 주자!" (자기 해결)',
          value: 'self-solve',
        },
      ],
    },
    {
      question: '새로운 기술이나 방법을 도입할 때 당신은?',
      options: [
        {
          text: '⚡ "강제로 도입하고 적응을 요구하자!" (강제 도입)',
          value: 'forced',
        },
        {
          text: '🤝 "팀원들과 함께 학습하고 적용 방법을 논의하자!" (공동 학습)',
          value: 'learning',
        },
        {
          text: '💭 "팀원들의 걱정을 듣고 단계적으로 도입하자!" (단계적 도입)',
          value: 'gradual',
        },
        {
          text: '🦅 "관심 있는 팀원들이 먼저 시도하도록 하자!" (자발적 시도)',
          value: 'voluntary',
        },
      ],
    },
    {
      question: '팀원 간 갈등이 발생했을 때 당신은?',
      options: [
        {
          text: '⚡ "즉시 개입하여 명확한 해결책을 제시하자!" (즉시 중재)',
          value: 'mediate',
        },
        {
          text: '🤝 "모든 당사자들을 모아서 대화를 통해 해결하자!" (대화 중재)',
          value: 'dialogue',
        },
        {
          text: '💬 "각자의 입장을 개별적으로 듣고 중재하자!" (개별 중재)',
          value: 'individual-mediate',
        },
        {
          text: '🦅 "스스로 해결할 수 있도록 기다려보자!" (자기 해결)',
          value: 'self-resolve',
        },
      ],
    },
    {
      question: '팀의 목표를 설정할 때 당신은?',
      options: [
        {
          text: '🎯 "도전적이고 구체적인 목표를 제시하자!" (도전적 목표)',
          value: 'challenging',
        },
        {
          text: '🤝 "팀원들과 함께 현실적이고 의미 있는 목표를 설정하자!" (공동 설정)',
          value: 'realistic',
        },
        {
          text: '🌟 "개인적 목표와 조화를 이루도록 하자!" (개인 조화)',
          value: 'personal-harmony',
        },
        {
          text: '🦅 "스스로 목표를 설정하도록 하자!" (자율 설정)',
          value: 'self-set',
        },
      ],
    },
    {
      question: '팀원의 성과를 평가할 때 당신은?',
      options: [
        {
          text: '📊 "명확한 기준과 수치로 객관적으로 평가하자!" (객관적 평가)',
          value: 'objective',
        },
        {
          text: '🤝 "팀원과 함께 성과를 분석하고 개선점을 논의하자!" (공동 평가)',
          value: 'joint',
        },
        {
          text: '💪 "개인의 노력과 성장에 초점을 맞추자!" (성장 중심)',
          value: 'growth',
        },
        {
          text: '🦅 "스스로 평가하고 반성할 수 있도록 하자!" (자기 평가)',
          value: 'self-evaluate',
        },
      ],
    },
    {
      question: '업무 환경을 개선할 때 당신은?',
      options: [
        {
          text: '⚡ "효율성을 높이는 방향으로 즉시 개선하자!" (효율성 우선)',
          value: 'efficiency',
        },
        {
          text: '🤝 "팀원들의 의견을 수렴하여 함께 개선하자!" (공동 개선)',
          value: 'collaborative-improve',
        },
        {
          text: '😌 "편안하게 일할 수 있는 환경을 만들자!" (편안함 우선)',
          value: 'comfort',
        },
        {
          text: '🦅 "원하는 대로 환경을 조성하도록 하자!" (자율 조성)',
          value: 'self-design',
        },
      ],
    },
    {
      question: '팀원이 새로운 아이디어를 제안했을 때 당신은?',
      options: [
        {
          text: '⚡ "실행 가능성을 검토하고 즉시 판단하자!" (신속한 검토)',
          value: 'quick-review',
        },
        {
          text: '🤝 "팀 전체와 함께 아이디어를 발전시키자!" (공동 발전)',
          value: 'develop',
        },
        {
          text: '💡 "창의적인 아이디어를 격려하고 지원하자!" (창의성 지원)',
          value: 'creative',
        },
        {
          text: '🦅 "스스로 실험해볼 수 있도록 하자!" (자율 실험)',
          value: 'self-experiment',
        },
      ],
    },
    {
      question: '긴급한 상황이 발생했을 때 당신은?',
      options: [
        {
          text: '⚡ "즉시 지시하고 모든 팀원을 동원하자!" (즉시 대응)',
          value: 'immediate-response',
        },
        {
          text: '🤝 "팀원들과 함께 상황을 분석하고 대응하자!" (공동 대응)',
          value: 'joint-response',
        },
        {
          text: '🛡️ "팀원들의 안전과 안녕을 우선시하자!" (안전 우선)',
          value: 'safety',
        },
        {
          text: '🔍 "각자의 전문성을 활용하여 분산 대응하자!" (전문성 활용)',
          value: 'expertise',
        },
      ],
    },
    {
      question: '팀원의 개인적 성장을 돕고 싶을 때 당신은?',
      options: [
        {
          text: '📋 "명확한 교육 계획과 목표를 제시하자!" (체계적 교육)',
          value: 'systematic-education',
        },
        {
          text: '🤝 "팀원과 함께 성장 목표를 설정하고 계획하자!" (공동 계획)',
          value: 'joint-plan',
        },
        {
          text: '🌟 "개인적 관심사와 강점을 파악하여 지원하자!" (개별 지원)',
          value: 'individual-support',
        },
        {
          text: '🦅 "스스로 학습할 수 있는 기회를 제공하자!" (자율 학습)',
          value: 'self-learning',
        },
      ],
    },
  ],
  resultMapping: (answers) => {
    const directiveCount = answers.filter((a) =>
      [
        'directive',
        'structured',
        'immediate',
        'strict',
        'systematic',
        'quick',
        'work-focused',
        'forced',
        'mediate',
        'challenging',
        'objective',
        'efficiency',
        'quick-review',
        'immediate-response',
        'systematic-education',
      ].includes(a)
    ).length;

    const participativeCount = answers.filter((a) =>
      [
        'participative',
        'collaborative',
        'analysis',
        'team-solution',
        'team-welcome',
        'consensus',
        'team-support',
        'learning',
        'dialogue',
        'realistic',
        'joint',
        'collaborative-improve',
        'develop',
        'joint-response',
        'joint-plan',
      ].includes(a)
    ).length;

    const supportiveCount = answers.filter((a) =>
      [
        'supportive',
        'individual',
        'positive',
        'morale',
        'personal',
        'emotional',
        'counseling',
        'gradual',
        'individual-mediate',
        'personal-harmony',
        'growth',
        'comfort',
        'creative',
        'safety',
        'individual-support',
      ].includes(a)
    ).length;

    const delegativeCount = answers.filter((a) =>
      [
        'delegative',
        'autonomous',
        'reflection',
        'autonomy',
        'natural',
        'expert',
        'self-solve',
        'voluntary',
        'self-resolve',
        'self-set',
        'self-evaluate',
        'self-design',
        'self-experiment',
        'expertise',
        'self-learning',
      ].includes(a)
    ).length;

    const scores = [
      { type: 'directive', score: directiveCount },
      { type: 'participative', score: participativeCount },
      { type: 'supportive', score: supportiveCount },
      { type: 'delegative', score: delegativeCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      directive: {
        title: '⚡ 번개 같은 지시형 리더',
        description:
          '당신은 번개처럼 빠르고 명확한 지시를 내리는 리더십 스타일의 소유자입니다!',
        detailedDescription: `당신은 번개처럼 빠르고 명확한 지시를 내리는 리더십 스타일을 가지고 있어요. 직접 해결책을 제시하고 지시하는 방식으로 팀을 이끄는 지시형 리더입니다.

번개처럼 즉시 상황을 파악하고 빠른 의사결정을 선호하며, 명확한 목표와 계획을 세워서 팀을 이끌어요. 체계적이고 구조화된 접근 방식을 선호하고, 효율성과 결과를 중요하게 생각하는 성격이에요.

하지만 번개도 너무 강하면 피해를 줄 수 있듯이, 당신도 때로는 너무 권위적이거나 유연성이 부족할 수 있어요. 가끔은 번개도 부드러운 빗방울(팀원 의견)을 받아들이는 것도 좋을 것 같아요!`,
        traits: ['결단력', '명확함', '책임감', '효율성', '체계성'],
        strengths: [
          '빠른 결정',
          '명확한 목표',
          '효율적 관리',
          '결과 지향',
          '체계적 접근',
        ],
        weaknesses: [
          '권위적',
          '유연성 부족',
          '팀원 의견 무시',
          '딱딱함',
          '창의성 부족',
        ],
        goodMatches: [
          '💪 격려하는 코치 같은 지원형 리더',
          '🤝 협력하는 팀장 같은 참여형 리더',
        ],
        badMatches: ['🦅 자유로운 독수리 같은 위임형 리더'],
        goodMatchReasons: [
          '💪 격려하는 코치 같은 지원형 리더: 당신의 체계성이 상대방의 따뜻함과 조화를 이룰 수 있어요',
          '🤝 협력하는 팀장 같은 참여형 리더: 함께 효율적이고 협력적인 팀을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🦅 자유로운 독수리 같은 위임형 리더: 너무 자유롭고 자율적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 팀원 의견도 수용해보세요',
          '유연성을 기르세요',
          '따뜻함도 추가해보세요',
          '창의성도 개발해보세요',
        ],
      },
      participative: {
        title: '🤝 협력하는 팀장 같은 참여형 리더',
        description:
          '당신은 협력하는 팀장처럼 팀원들과 함께 의사결정을 하는 리더십 스타일의 소유자입니다!',
        detailedDescription: `당신은 협력하는 팀장처럼 팀원들과 함께 토론하여 해결책을 찾는 리더십 스타일을 가지고 있어요. 팀원들의 의견을 존중하고, 집단지성을 활용하는 참여형 리더입니다.

협력하는 팀장처럼 팀원들과 함께 목표를 설정하고, 공동으로 문제를 해결하는 것을 선호해요. 소통과 협력을 중요하게 생각하고, 민주적인 의사결정 과정을 통해 팀의 시너지를 극대화하는 능력이 뛰어나요.

하지만 협력하는 팀장도 너무 많은 의견을 수렴하면 결정이 지연될 수 있듯이, 당신도 때로는 우유부단하거나 결정 지연이 있을 수 있어요. 가끔은 협력하는 팀장도 빠른 결정(결단력)이 필요하다는 걸 잊지 마세요!`,
        traits: ['소통', '협력', '민주적', '포용적', '팀워크'],
        strengths: ['팀워크', '의사소통', '집단지성', '포용성', '시너지'],
        weaknesses: [
          '결정 지연',
          '우유부단함',
          '비효율성',
          '책임 분산',
          '시간 소모',
        ],
        goodMatches: [
          '⚡ 번개 같은 지시형 리더',
          '💪 격려하는 코치 같은 지원형 리더',
        ],
        badMatches: ['🦅 자유로운 독수리 같은 위임형 리더'],
        goodMatchReasons: [
          '⚡ 번개 같은 지시형 리더: 당신의 협력성이 상대방의 결단력과 조화를 이룰 수 있어요',
          '💪 격려하는 코치 같은 지원형 리더: 함께 따뜻하고 협력적인 팀을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🦅 자유로운 독수리 같은 위임형 리더: 너무 자유롭고 독립적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '결정력도 기르세요',
          '효율성을 높여보세요',
          '책임감을 강화하세요',
          '시간 관리를 개선하세요',
        ],
      },
      supportive: {
        title: '💪 격려하는 코치 같은 지원형 리더',
        description:
          '당신은 격려하는 코치처럼 팀원들의 성장을 지원하는 리더십 스타일의 소유자입니다!',
        detailedDescription: `당신은 격려하는 코치처럼 팀원들이 스스로 해결할 수 있도록 격려하고 지원하는 리더십 스타일을 가지고 있어요. 팀원들의 성장을 지원하고, 따뜻한 분위기를 만드는 지원형 리더입니다.

격려하는 코치처럼 개인적 관심사와 강점을 파악하여 개별적으로 지원하고, 실수를 학습 기회로 보고 긍정적으로 격려해요. 팀원들의 감정과 생각을 고려하여 결정하고, 편안하고 따뜻한 업무 환경을 만드는 능력이 뛰어나요.

하지만 격려하는 코치도 너무 부드럽기만 하면 권위가 부족할 수 있듯이, 당신도 때로는 결정력이나 권위가 부족할 수 있어요. 가끔은 격려하는 코치도 강한 지시(결단력)가 필요하다는 걸 잊지 마세요!`,
        traits: ['격려', '지원', '배려', '따뜻함', '성장 지향'],
        strengths: [
          '팀원 성장',
          '분위기 조성',
          '개별 지원',
          '긍정적 격려',
          '감정적 지지',
        ],
        weaknesses: [
          '권위 부족',
          '결정력 부족',
          '효율성 부족',
          '과도한 배려',
          '성과 부족',
        ],
        goodMatches: [
          '⚡ 번개 같은 지시형 리더',
          '🤝 협력하는 팀장 같은 참여형 리더',
        ],
        badMatches: ['🦅 자유로운 독수리 같은 위임형 리더'],
        goodMatchReasons: [
          '⚡ 번개 같은 지시형 리더: 당신의 따뜻함이 상대방의 체계성과 조화를 이룰 수 있어요',
          '🤝 협력하는 팀장 같은 참여형 리더: 함께 따뜻하고 협력적인 팀을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🦅 자유로운 독수리 같은 위임형 리더: 너무 자유롭고 독립적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '결단력도 기르세요',
          '권위도 세워보세요',
          '효율성을 높여보세요',
          '성과 지향도 개발하세요',
        ],
      },
      delegative: {
        title: '🦅 자유로운 독수리 같은 위임형 리더',
        description:
          '당신은 자유로운 독수리처럼 팀원들에게 자율성을 부여하는 리더십 스타일의 소유자입니다!',
        detailedDescription: `당신은 자유로운 독수리처럼 전문가의 조언을 구하거나 외부 자원을 활용하는 리더십 스타일을 가지고 있어요. 팀원들에게 자율성을 부여하고, 필요할 때만 개입하는 위임형 리더입니다.

자유로운 독수리처럼 팀원들이 스스로 목표를 설정하고, 독립적으로 문제를 해결할 수 있도록 신뢰하고 기다려요. 각자의 전문성을 활용하여 분산 대응하고, 자율적이고 독립적인 관계를 존중하는 능력이 뛰어나요.

하지만 자유로운 독수리도 너무 멀리 있으면 관심이 부족할 수 있듯이, 당신도 때로는 책임 회피나 관심 부족이 있을 수 있어요. 가끔은 자유로운 독수리도 직접적인 개입(책임감)이 필요하다는 걸 잊지 마세요!`,
        traits: ['자율성', '신뢰', '유연성', '독립성', '전문성'],
        strengths: [
          '자율성 부여',
          '유연한 리더십',
          '전문성 활용',
          '독립성 존중',
          '신뢰',
        ],
        weaknesses: [
          '관심 부족',
          '책임 회피',
          '통제 부족',
          '지도 부족',
          '소통 부족',
        ],
        goodMatches: [
          '🤝 협력하는 팀장 같은 참여형 리더',
          '💪 격려하는 코치 같은 지원형 리더',
        ],
        badMatches: ['⚡ 번개 같은 지시형 리더'],
        goodMatchReasons: [
          '🤝 협력하는 팀장 같은 참여형 리더: 당신의 자율성이 상대방의 협력과 조화를 이룰 수 있어요',
          '💪 격려하는 코치 같은 지원형 리더: 함께 자율적이고 따뜻한 팀을 만들 수 있어요',
        ],
        badMatchReasons: [
          '⚡ 번개 같은 지시형 리더: 너무 체계적이고 지시적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '필요할 때는 직접 개입도 해보세요',
          '책임감을 강화하세요',
          '관심을 더 기울여보세요',
          '소통을 개선하세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.directive;
  },
};
