import type { Quiz } from '../../types';

export const leadershipStyleQuiz: Quiz = {
  id: 'leadership-style',
  title: '리더십 스타일 테스트',
  description:
    '당신의 리더십 스타일을 알아보고 효과적인 리더가 되는 방법을 찾아보세요',
  category: '직업',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '팀원들이 문제를 해결하지 못할 때 당신은?',
      options: [
        { text: '직접 해결책을 제시하고 지시한다', value: 'directive' },
        {
          text: '팀원들과 함께 토론하여 해결책을 찾는다',
          value: 'participative',
        },
        {
          text: '팀원들이 스스로 해결할 수 있도록 격려한다',
          value: 'supportive',
        },
        {
          text: '전문가의 조언을 구하거나 외부 자원을 활용한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '새로운 프로젝트를 시작할 때 당신은?',
      options: [
        {
          text: '명확한 목표와 계획을 세우고 팀원들에게 전달한다',
          value: 'directive',
        },
        {
          text: '팀원들과 함께 목표를 설정하고 계획을 수립한다',
          value: 'participative',
        },
        {
          text: '팀원들의 아이디어를 듣고 그들의 의견을 반영한다',
          value: 'supportive',
        },
        {
          text: '팀원들에게 자율권을 주고 필요할 때만 개입한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀원이 실수를 했을 때 당신은?',
      options: [
        { text: '즉시 지적하고 올바른 방법을 가르친다', value: 'directive' },
        {
          text: '실수의 원인을 함께 분석하고 개선 방안을 논의한다',
          value: 'participative',
        },
        { text: '실수를 학습 기회로 보고 격려한다', value: 'supportive' },
        {
          text: '팀원이 스스로 깨달을 수 있도록 기다린다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀의 성과가 좋지 않을 때 당신은?',
      options: [
        { text: '더 엄격한 관리와 감독을 강화한다', value: 'directive' },
        {
          text: '팀 전체와 함께 문제점을 분석하고 해결책을 찾는다',
          value: 'participative',
        },
        {
          text: '팀원들의 사기를 높이고 동기부여에 집중한다',
          value: 'supportive',
        },
        {
          text: '팀원들의 자율성을 높이고 책임감을 강화한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '새로운 팀원이 합류했을 때 당신은?',
      options: [
        {
          text: '명확한 역할과 책임을 부여하고 규칙을 설명한다',
          value: 'directive',
        },
        {
          text: '팀 전체와 함께 환영하고 팀 문화를 소개한다',
          value: 'participative',
        },
        {
          text: '개인적으로 대화하며 편안하게 적응할 수 있도록 돕는다',
          value: 'supportive',
        },
        {
          text: '팀원들이 자연스럽게 알아가도록 기다린다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '중요한 의사결정을 해야 할 때 당신은?',
      options: [
        { text: '자신의 판단으로 빠르게 결정한다', value: 'directive' },
        {
          text: '팀원들의 의견을 수렴하여 합의점을 찾는다',
          value: 'participative',
        },
        {
          text: '팀원들의 감정과 생각을 고려하여 결정한다',
          value: 'supportive',
        },
        {
          text: '전문가나 해당 분야 담당자에게 결정을 위임한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀원이 개인적인 문제로 어려움을 겪고 있을 때 당신은?',
      options: [
        {
          text: '업무에 영향을 주지 않도록 명확한 기준을 제시한다',
          value: 'directive',
        },
        {
          text: '팀 전체가 함께 도울 수 있는 방법을 찾는다',
          value: 'participative',
        },
        {
          text: '개인적으로 상담하고 정서적 지원을 제공한다',
          value: 'supportive',
        },
        {
          text: '팀원이 스스로 해결할 수 있도록 시간을 준다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '새로운 기술이나 방법을 도입할 때 당신은?',
      options: [
        {
          text: '강제로 도입하고 팀원들에게 적응을 요구한다',
          value: 'directive',
        },
        {
          text: '팀원들과 함께 학습하고 적용 방법을 논의한다',
          value: 'participative',
        },
        {
          text: '팀원들의 걱정을 듣고 단계적으로 도입한다',
          value: 'supportive',
        },
        {
          text: '관심 있는 팀원들이 먼저 시도하도록 한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀원 간 갈등이 발생했을 때 당신은?',
      options: [
        { text: '즉시 개입하여 명확한 해결책을 제시한다', value: 'directive' },
        {
          text: '모든 당사자들을 모아서 대화를 통해 해결한다',
          value: 'participative',
        },
        { text: '각자의 입장을 개별적으로 듣고 중재한다', value: 'supportive' },
        {
          text: '팀원들이 스스로 해결할 수 있도록 기다린다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀의 목표를 설정할 때 당신은?',
      options: [
        { text: '도전적이고 구체적인 목표를 제시한다', value: 'directive' },
        {
          text: '팀원들과 함께 현실적이고 의미 있는 목표를 설정한다',
          value: 'participative',
        },
        {
          text: '팀원들의 개인적 목표와 조화를 이루도록 한다',
          value: 'supportive',
        },
        { text: '팀원들이 스스로 목표를 설정하도록 한다', value: 'delegative' },
      ],
    },
    {
      question: '팀원의 성과를 평가할 때 당신은?',
      options: [
        {
          text: '명확한 기준과 수치로 객관적으로 평가한다',
          value: 'directive',
        },
        {
          text: '팀원과 함께 성과를 분석하고 개선점을 논의한다',
          value: 'participative',
        },
        { text: '개인의 노력과 성장에 초점을 맞춘다', value: 'supportive' },
        {
          text: '팀원이 스스로 평가하고 반성할 수 있도록 한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '업무 환경을 개선할 때 당신은?',
      options: [
        { text: '효율성을 높이는 방향으로 즉시 개선한다', value: 'directive' },
        {
          text: '팀원들의 의견을 수렴하여 함께 개선한다',
          value: 'participative',
        },
        {
          text: '팀원들이 편안하게 일할 수 있는 환경을 만든다',
          value: 'supportive',
        },
        {
          text: '팀원들이 원하는 대로 환경을 조성하도록 한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀원이 새로운 아이디어를 제안했을 때 당신은?',
      options: [
        { text: '실행 가능성을 검토하고 즉시 판단한다', value: 'directive' },
        {
          text: '팀 전체와 함께 아이디어를 발전시킨다',
          value: 'participative',
        },
        { text: '창의적인 아이디어를 격려하고 지원한다', value: 'supportive' },
        { text: '팀원이 스스로 실험해볼 수 있도록 한다', value: 'delegative' },
      ],
    },
    {
      question: '긴급한 상황이 발생했을 때 당신은?',
      options: [
        { text: '즉시 지시하고 모든 팀원을 동원한다', value: 'directive' },
        {
          text: '팀원들과 함께 상황을 분석하고 대응한다',
          value: 'participative',
        },
        { text: '팀원들의 안전과 안녕을 우선시한다', value: 'supportive' },
        { text: '각자의 전문성을 활용하여 분산 대응한다', value: 'delegative' },
      ],
    },
    {
      question: '팀원의 개인적 성장을 돕고 싶을 때 당신은?',
      options: [
        { text: '명확한 교육 계획과 목표를 제시한다', value: 'directive' },
        {
          text: '팀원과 함께 성장 목표를 설정하고 계획한다',
          value: 'participative',
        },
        {
          text: '개인적 관심사와 강점을 파악하여 지원한다',
          value: 'supportive',
        },
        {
          text: '팀원이 스스로 학습할 수 있는 기회를 제공한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀의 성과를 축하할 때 당신은?',
      options: [
        { text: '목표 달성에 대한 보상을 명확히 한다', value: 'directive' },
        { text: '팀 전체가 함께 성취감을 나눈다', value: 'participative' },
        { text: '개인적 노력과 기여를 인정한다', value: 'supportive' },
        { text: '팀원들이 스스로 축하할 수 있도록 한다', value: 'delegative' },
      ],
    },
    {
      question: '새로운 도전 과제를 제시할 때 당신은?',
      options: [
        {
          text: '도전적이지만 달성 가능한 목표를 명확히 한다',
          value: 'directive',
        },
        {
          text: '팀원들과 함께 도전의 의미와 방법을 논의한다',
          value: 'participative',
        },
        { text: '팀원들의 자신감을 높이고 동기부여한다', value: 'supportive' },
        { text: '팀원들이 스스로 도전할 수 있도록 한다', value: 'delegative' },
      ],
    },
    {
      question: '팀원이 실패했을 때 당신은?',
      options: [
        {
          text: '실패의 원인을 분석하고 개선 방안을 제시한다',
          value: 'directive',
        },
        {
          text: '팀 전체와 함께 실패에서 배울 점을 찾는다',
          value: 'participative',
        },
        { text: '실패를 두려워하지 않도록 격려한다', value: 'supportive' },
        {
          text: '팀원이 스스로 반성하고 성장할 수 있도록 한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀의 미래 비전을 제시할 때 당신은?',
      options: [
        { text: '명확하고 구체적인 비전을 제시한다', value: 'directive' },
        {
          text: '팀원들과 함께 공유 비전을 만들어간다',
          value: 'participative',
        },
        { text: '팀원들의 꿈과 희망을 반영한다', value: 'supportive' },
        {
          text: '팀원들이 스스로 비전을 만들어가도록 한다',
          value: 'delegative',
        },
      ],
    },
    {
      question: '팀원과의 관계에서 당신은?',
      options: [
        { text: '명확한 역할과 책임을 강조한다', value: 'directive' },
        {
          text: '동료로서 함께 성장하는 관계를 만든다',
          value: 'participative',
        },
        { text: '신뢰하고 이해하는 관계를 중시한다', value: 'supportive' },
        { text: '자율적이고 독립적인 관계를 존중한다', value: 'delegative' },
      ],
    },
  ],
  resultMapping: (answers) => {
    const directive = answers.filter((a) => a === 'directive').length;
    const participative = answers.filter((a) => a === 'participative').length;
    const supportive = answers.filter((a) => a === 'supportive').length;
    const delegative = answers.filter((a) => a === 'delegative').length;
    const scores = [
      { type: 'directive', score: directive },
      { type: 'participative', score: participative },
      { type: 'supportive', score: supportive },
      { type: 'delegative', score: delegative },
    ];
    const max = scores.reduce((a, b) => (b.score > a.score ? b : a));
    const resultMap = {
      directive: {
        title: '지시형 리더',
        description: '직접 해결책을 제시하고 지시하는 리더십 스타일입니다.',
        detailedDescription:
          '명확한 목표와 지시를 통해 팀을 이끌고, 빠른 의사결정을 선호합니다.',
        traits: ['결단력', '명확함', '책임감'],
        strengths: ['빠른 결정', '명확한 목표'],
        weaknesses: ['권위적', '유연성 부족'],
        goodMatches: ['supportive', 'participative'],
        badMatches: ['delegative'],
        goodMatchReasons: [
          '지원형, 참여형과 함께하면 균형 잡힌 리더십을 발휘할 수 있습니다.',
        ],
        badMatchReasons: [
          '위임형과는 리더십 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['가끔은 팀원 의견도 수용해보세요.'],
      },
      participative: {
        title: '참여형 리더',
        description:
          '팀원들과 함께 토론하여 해결책을 찾는 리더십 스타일입니다.',
        detailedDescription: '팀원들의 의견을 존중하고, 집단지성을 활용합니다.',
        traits: ['소통', '협력', '민주적'],
        strengths: ['팀워크', '의사소통'],
        weaknesses: ['결정 지연', '우유부단함'],
        goodMatches: ['directive', 'supportive'],
        badMatches: ['delegative'],
        goodMatchReasons: [
          '지시형, 지원형과 함께하면 다양한 의견을 수렴할 수 있습니다.',
        ],
        badMatchReasons: [
          '위임형과는 리더십 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['결정력도 기르세요.'],
      },
      supportive: {
        title: '지원형 리더',
        description:
          '팀원들이 스스로 해결할 수 있도록 격려하는 리더십 스타일입니다.',
        detailedDescription:
          '팀원들의 성장을 지원하고, 따뜻한 분위기를 만듭니다.',
        traits: ['격려', '지원', '배려'],
        strengths: ['팀원 성장', '분위기 조성'],
        weaknesses: ['권위 부족', '결정력 부족'],
        goodMatches: ['directive', 'participative'],
        badMatches: ['delegative'],
        goodMatchReasons: [
          '지시형, 참여형과 함께하면 균형 잡힌 리더십을 발휘할 수 있습니다.',
        ],
        badMatchReasons: [
          '위임형과는 리더십 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['결단력도 기르세요.'],
      },
      delegative: {
        title: '위임형 리더',
        description:
          '전문가의 조언을 구하거나 외부 자원을 활용하는 리더십 스타일입니다.',
        detailedDescription:
          '팀원들에게 자율성을 부여하고, 필요할 때만 개입합니다.',
        traits: ['자율성', '신뢰', '유연성'],
        strengths: ['자율성 부여', '유연한 리더십'],
        weaknesses: ['관심 부족', '책임 회피'],
        goodMatches: ['participative', 'supportive'],
        badMatches: ['directive'],
        goodMatchReasons: [
          '참여형, 지원형과 함께하면 자율성과 협력을 동시에 얻을 수 있습니다.',
        ],
        badMatchReasons: [
          '지시형과는 리더십 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['필요할 때는 직접 개입도 해보세요.'],
      },
    };
    return resultMap[max.type] || resultMap['directive'];
  },
};
