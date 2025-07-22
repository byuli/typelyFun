import type { Quiz } from '../../types';

export const problemSolvingQuiz: Quiz = {
  id: 'problem-solving',
  title: '문제 해결 스타일 테스트',
  description:
    '당신의 문제 해결 방식을 알아보고 더 효과적인 해결책을 찾는 방법을 배워보세요',
  category: '직업',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '복잡한 문제에 직면했을 때 당신은?',
      options: [
        {
          text: '문제를 작은 부분으로 나누어 체계적으로 접근한다',
          value: 'analytical',
        },
        { text: '직관적으로 전체적인 해결책을 떠올린다', value: 'intuitive' },
        {
          text: '다른 사람들의 의견을 듣고 다양한 관점을 고려한다',
          value: 'collaborative',
        },
        { text: '실제로 시도해보면서 해결책을 찾는다', value: 'experimental' },
      ],
    },
    {
      question: '새로운 문제를 처음 접할 때 당신은?',
      options: [
        { text: '문제의 원인과 구조를 먼저 분석한다', value: 'analytical' },
        { text: '비슷한 경험을 떠올려 해결책을 찾는다', value: 'intuitive' },
        {
          text: '다른 사람들이 어떻게 해결했는지 알아본다',
          value: 'collaborative',
        },
        { text: '바로 여러 방법을 시도해본다', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 과정에서 어려움을 겪을 때 당신은?',
      options: [
        { text: '더 자세한 정보를 수집하고 분석한다', value: 'analytical' },
        { text: '다른 각도에서 문제를 바라본다', value: 'intuitive' },
        { text: '전문가나 동료에게 조언을 구한다', value: 'collaborative' },
        { text: '다른 접근 방법을 시도해본다', value: 'experimental' },
      ],
    },
    {
      question: '해결책을 선택할 때 당신은?',
      options: [
        {
          text: '장단점을 분석하여 가장 합리적인 방법을 선택한다',
          value: 'analytical',
        },
        { text: '감이 좋다고 생각되는 방법을 선택한다', value: 'intuitive' },
        {
          text: '팀원들과 함께 의견을 나누고 결정한다',
          value: 'collaborative',
        },
        { text: '빠르게 시도해보고 결과를 확인한다', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결에 시간이 오래 걸릴 때 당신은?',
      options: [
        { text: '더 체계적이고 논리적으로 접근한다', value: 'analytical' },
        { text: '창의적이고 혁신적인 아이디어를 시도한다', value: 'intuitive' },
        { text: '더 많은 사람들과 협력하여 해결한다', value: 'collaborative' },
        { text: '다른 방법들을 병렬로 시도한다', value: 'experimental' },
      ],
    },
    {
      question: '실패한 해결책에 대해 당신은?',
      options: [
        { text: '실패 원인을 분석하여 다음에 개선한다', value: 'analytical' },
        { text: '실패를 새로운 아이디어의 기회로 본다', value: 'intuitive' },
        {
          text: '팀원들과 함께 실패에서 배운 점을 공유한다',
          value: 'collaborative',
        },
        { text: '빠르게 다른 방법을 시도한다', value: 'experimental' },
      ],
    },
    {
      question: '새로운 기술이나 도구를 사용할 때 당신은?',
      options: [
        {
          text: '사용법을 자세히 학습하고 이해한 후 사용한다',
          value: 'analytical',
        },
        { text: '직관적으로 사용해보면서 익힌다', value: 'intuitive' },
        {
          text: '다른 사람들에게 배우거나 함께 사용한다',
          value: 'collaborative',
        },
        { text: '바로 실험해보고 결과를 확인한다', value: 'experimental' },
      ],
    },
    {
      question: '복잡한 정보를 처리할 때 당신은?',
      options: [
        { text: '정보를 분류하고 체계적으로 정리한다', value: 'analytical' },
        { text: '핵심적인 패턴을 찾아 이해한다', value: 'intuitive' },
        { text: '다른 사람들과 함께 정보를 분석한다', value: 'collaborative' },
        { text: '실제 상황에 적용해보면서 이해한다', value: 'experimental' },
      ],
    },
    {
      question: '긴급한 문제가 발생했을 때 당신은?',
      options: [
        {
          text: '빠르게 상황을 분석하고 우선순위를 정한다',
          value: 'analytical',
        },
        { text: '직감적으로 가장 중요한 부분을 파악한다', value: 'intuitive' },
        {
          text: '팀원들과 함께 긴급 대응 계획을 세운다',
          value: 'collaborative',
        },
        { text: '즉시 여러 해결책을 동시에 시도한다', value: 'experimental' },
      ],
    },
    {
      question: '창의적인 해결책이 필요할 때 당신은?',
      options: [
        {
          text: '기존 방법들을 분석하여 새로운 조합을 만든다',
          value: 'analytical',
        },
        {
          text: '자유로운 상상력으로 혁신적인 아이디어를 떠올린다',
          value: 'intuitive',
        },
        {
          text: '다양한 배경의 사람들과 브레인스토밍한다',
          value: 'collaborative',
        },
        { text: '여러 아이디어를 실제로 실험해본다', value: 'experimental' },
      ],
    },
    {
      question: '문제의 원인을 찾을 때 당신은?',
      options: [
        { text: '논리적으로 단계별로 추적한다', value: 'analytical' },
        {
          text: '직감적으로 가장 가능성이 높은 원인을 찾는다',
          value: 'intuitive',
        },
        {
          text: '다른 사람들의 관점에서 원인을 분석한다',
          value: 'collaborative',
        },
        { text: '가능한 원인들을 실제로 테스트해본다', value: 'experimental' },
      ],
    },
    {
      question: '해결책을 실행할 때 당신은?',
      options: [
        {
          text: '단계별로 계획을 세우고 체계적으로 실행한다',
          value: 'analytical',
        },
        { text: '전체적인 방향을 잡고 유연하게 실행한다', value: 'intuitive' },
        { text: '팀원들과 함께 협력하여 실행한다', value: 'collaborative' },
        {
          text: '빠르게 실행하고 결과를 확인하며 조정한다',
          value: 'experimental',
        },
      ],
    },
    {
      question: '문제 해결 과정을 기록할 때 당신은?',
      options: [
        { text: '상세하고 체계적으로 기록한다', value: 'analytical' },
        { text: '핵심적인 인사이트만 간단히 기록한다', value: 'intuitive' },
        {
          text: '팀원들과 함께 공유할 수 있도록 기록한다',
          value: 'collaborative',
        },
        { text: '실험 결과와 경험을 중심으로 기록한다', value: 'experimental' },
      ],
    },
    {
      question: '새로운 문제 해결 방법을 배울 때 당신은?',
      options: [
        { text: '이론과 원리를 먼저 이해한다', value: 'analytical' },
        { text: '전체적인 개념을 파악한다', value: 'intuitive' },
        { text: '다른 사람들에게 배우거나 가르친다', value: 'collaborative' },
        { text: '실제로 연습하고 실습한다', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결의 성공을 측정할 때 당신은?',
      options: [
        { text: '구체적인 지표와 데이터로 평가한다', value: 'analytical' },
        { text: '전체적인 느낌과 직감으로 판단한다', value: 'intuitive' },
        { text: '다른 사람들의 피드백을 종합한다', value: 'collaborative' },
        { text: '실제 결과와 변화를 관찰한다', value: 'experimental' },
      ],
    },
    {
      question: '복잡한 시스템을 이해할 때 당신은?',
      options: [
        { text: '각 구성 요소와 관계를 분석한다', value: 'analytical' },
        { text: '전체적인 패턴과 흐름을 파악한다', value: 'intuitive' },
        { text: '다양한 관점에서 시스템을 바라본다', value: 'collaborative' },
        {
          text: '실제로 시스템을 조작해보면서 이해한다',
          value: 'experimental',
        },
      ],
    },
    {
      question: '문제 해결 과정에서 의견이 갈릴 때 당신은?',
      options: [
        { text: '각 의견의 장단점을 분석하여 비교한다', value: 'analytical' },
        { text: '직감적으로 가장 좋은 방향을 선택한다', value: 'intuitive' },
        { text: '모든 의견을 조화롭게 통합한다', value: 'collaborative' },
        { text: '각 의견을 실제로 시도해보고 비교한다', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결에 대한 피드백을 받을 때 당신은?',
      options: [
        { text: '구체적인 개선점을 분석한다', value: 'analytical' },
        { text: '전체적인 방향성을 파악한다', value: 'intuitive' },
        { text: '다양한 관점의 피드백을 종합한다', value: 'collaborative' },
        { text: '피드백을 바탕으로 즉시 실험해본다', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 과정을 개선할 때 당신은?',
      options: [
        {
          text: '기존 과정을 분석하여 체계적으로 개선한다',
          value: 'analytical',
        },
        { text: '새로운 아이디어로 혁신적으로 개선한다', value: 'intuitive' },
        { text: '팀원들과 함께 개선 방안을 논의한다', value: 'collaborative' },
        { text: '다양한 방법을 실험하여 최적화한다', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 능력을 향상시키고 싶을 때 당신은?',
      options: [
        { text: '이론과 방법론을 체계적으로 학습한다', value: 'analytical' },
        { text: '창의적 사고와 직감을 개발한다', value: 'intuitive' },
        { text: '다양한 사람들과 협력 경험을 쌓는다', value: 'collaborative' },
        {
          text: '실제 문제를 많이 해결해보며 경험을 쌓는다',
          value: 'experimental',
        },
      ],
    },
  ],
  resultMapping: (answers) => {
    const analytical = answers.filter((a) => a === 'analytical').length;
    const intuitive = answers.filter((a) => a === 'intuitive').length;
    const collaborative = answers.filter((a) => a === 'collaborative').length;
    const experimental = answers.filter((a) => a === 'experimental').length;
    const scores = [
      { type: 'analytical', score: analytical },
      { type: 'intuitive', score: intuitive },
      { type: 'collaborative', score: collaborative },
      { type: 'experimental', score: experimental },
    ];
    const max = scores.reduce((a, b) => (b.score > a.score ? b : a));
    const resultMap = {
      analytical: {
        title: '분석적 해결형',
        description:
          '문제를 체계적으로 분석하고 논리적으로 해결하는 스타일입니다.',
        detailedDescription:
          '문제를 작은 부분으로 나누어 체계적으로 접근합니다. 데이터와 논리를 중시합니다.',
        traits: ['분석적', '논리적', '체계적'],
        strengths: ['문제 분석', '계획 수립'],
        weaknesses: ['융통성 부족', '즉흥성 부족'],
        goodMatches: ['collaborative', 'experimental'],
        badMatches: ['intuitive'],
        goodMatchReasons: [
          '협업형, 실험형과 함께하면 다양한 해결책을 찾을 수 있습니다.',
        ],
        badMatchReasons: [
          '직관형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['가끔은 직관도 믿어보세요.'],
      },
      intuitive: {
        title: '직관적 해결형',
        description: '직관과 통찰로 문제를 해결하는 스타일입니다.',
        detailedDescription:
          '전체적인 그림을 보고, 빠르게 해결책을 떠올립니다. 경험과 감각을 중시합니다.',
        traits: ['직관적', '통찰력', '빠른 판단'],
        strengths: ['빠른 해결', '창의적 접근'],
        weaknesses: ['근거 부족', '실수 가능성'],
        goodMatches: ['experimental', 'collaborative'],
        badMatches: ['analytical'],
        goodMatchReasons: [
          '실험형, 협업형과 함께하면 새로운 해결책을 찾을 수 있습니다.',
        ],
        badMatchReasons: [
          '분석형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['근거를 보완하는 습관을 들이세요.'],
      },
      collaborative: {
        title: '협업적 해결형',
        description: '다른 사람들과 협력하여 문제를 해결하는 스타일입니다.',
        detailedDescription:
          '다양한 관점을 수용하고, 팀워크를 통해 최선의 해결책을 찾습니다.',
        traits: ['협력', '소통', '팀워크'],
        strengths: ['의사소통', '갈등 조정'],
        weaknesses: ['의존성', '결정 지연'],
        goodMatches: ['analytical', 'intuitive'],
        badMatches: ['experimental'],
        goodMatchReasons: [
          '분석형, 직관형과 함께하면 균형 잡힌 해결책을 찾을 수 있습니다.',
        ],
        badMatchReasons: [
          '실험형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['독립적으로 결정하는 연습도 해보세요.'],
      },
      experimental: {
        title: '실험적 해결형',
        description: '직접 시도해보며 해결책을 찾는 스타일입니다.',
        detailedDescription:
          '실제로 행동하며, 다양한 방법을 시도해보는 것을 선호합니다.',
        traits: ['실험적', '행동력', '적응력'],
        strengths: ['적응력', '실행력'],
        weaknesses: ['계획 부족', '실수 가능성'],
        goodMatches: ['intuitive', 'analytical'],
        badMatches: ['collaborative'],
        goodMatchReasons: [
          '직관형, 분석형과 함께하면 새로운 해결책을 찾을 수 있습니다.',
        ],
        badMatchReasons: [
          '협업형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['기본 계획을 세우는 습관을 들이세요.'],
      },
    };
    return resultMap[max.type] || resultMap['analytical'];
  },
};
