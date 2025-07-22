import type { Quiz } from '../../types';

export const workStyleQuiz: Quiz = {
  id: 'work-style',
  title: '업무 스타일 테스트',
  description:
    '당신의 업무 수행 방식을 알아보고 더 효과적인 업무 환경을 만드는 방법을 찾아보세요',
  category: '직업',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 업무를 시작할 때 당신은?',
      options: [
        {
          text: '체계적으로 계획을 세우고 단계별로 진행한다',
          value: 'systematic',
        },
        {
          text: '전체적인 목표를 파악하고 유연하게 접근한다',
          value: 'flexible',
        },
        {
          text: '팀원들과 함께 계획을 수립하고 협력한다',
          value: 'collaborative',
        },
        { text: '즉시 실행하고 과정에서 조정한다', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 환경에서 당신은?',
      options: [
        { text: '조용하고 집중할 수 있는 환경을 선호한다', value: 'focused' },
        { text: '활발하고 역동적인 환경을 선호한다', value: 'dynamic' },
        {
          text: '협력적이고 소통이 활발한 환경을 선호한다',
          value: 'collaborative',
        },
        { text: '자유롭고 창의적인 환경을 선호한다', value: 'creative' },
      ],
    },
    {
      question: '업무 일정을 관리할 때 당신은?',
      options: [
        {
          text: '상세한 계획표를 만들고 체계적으로 관리한다',
          value: 'systematic',
        },
        { text: '전체적인 방향을 잡고 유연하게 조정한다', value: 'flexible' },
        { text: '팀원들과 함께 일정을 조율한다', value: 'collaborative' },
        { text: '우선순위에 따라 즉시 처리한다', value: 'action-oriented' },
      ],
    },
    {
      question: '문제가 발생했을 때 당신은?',
      options: [
        { text: '문제를 분석하고 체계적으로 해결한다', value: 'analytical' },
        { text: '창의적인 해결책을 찾아 시도한다', value: 'creative' },
        { text: '팀원들과 함께 해결책을 논의한다', value: 'collaborative' },
        { text: '즉시 여러 해결책을 시도해본다', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 성과를 측정할 때 당신은?',
      options: [
        { text: '구체적인 지표와 데이터로 평가한다', value: 'quantitative' },
        { text: '전체적인 성과와 만족도를 고려한다', value: 'holistic' },
        {
          text: '팀 전체의 성과와 협력 정도를 평가한다',
          value: 'collaborative',
        },
        { text: '실제 결과와 변화를 관찰한다', value: 'results-oriented' },
      ],
    },
    {
      question: '새로운 기술이나 도구를 배울 때 당신은?',
      options: [
        { text: '체계적으로 학습하고 단계별로 익힌다', value: 'systematic' },
        { text: '직관적으로 사용해보면서 배운다', value: 'intuitive' },
        { text: '다른 사람들과 함께 학습한다', value: 'collaborative' },
        { text: '바로 실무에 적용해보며 배운다', value: 'practical' },
      ],
    },
    {
      question: '업무 중 어려움을 겪을 때 당신은?',
      options: [
        { text: '문제를 분석하고 논리적으로 해결한다', value: 'analytical' },
        { text: '다른 관점에서 접근해본다', value: 'creative' },
        { text: '동료나 상사에게 조언을 구한다', value: 'collaborative' },
        { text: '다른 방법을 시도해보며 해결한다', value: 'experimental' },
      ],
    },
    {
      question: '업무 목표를 설정할 때 당신은?',
      options: [
        { text: '구체적이고 측정 가능한 목표를 설정한다', value: 'specific' },
        { text: '전체적인 비전과 방향성을 설정한다', value: 'visionary' },
        { text: '팀원들과 함께 공유 목표를 설정한다', value: 'collaborative' },
        {
          text: '도전적이고 실현 가능한 목표를 설정한다',
          value: 'challenging',
        },
      ],
    },
    {
      question: '업무 중 의사결정을 할 때 당신은?',
      options: [
        {
          text: '충분한 정보를 수집한 후 논리적으로 결정한다',
          value: 'analytical',
        },
        { text: '직감과 경험을 바탕으로 결정한다', value: 'intuitive' },
        {
          text: '팀원들과 함께 의견을 나누고 결정한다',
          value: 'collaborative',
        },
        { text: '빠르게 결정하고 실행한다', value: 'decisive' },
      ],
    },
    {
      question: '업무 중 피드백을 받을 때 당신은?',
      options: [
        { text: '구체적인 개선점을 분석한다', value: 'analytical' },
        { text: '전체적인 방향성을 파악한다', value: 'holistic' },
        { text: '팀원들과 함께 피드백을 공유한다', value: 'collaborative' },
        { text: '즉시 개선 사항을 적용한다', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 중 혁신이 필요할 때 당신은?',
      options: [
        { text: '기존 방법을 분석하여 개선점을 찾는다', value: 'analytical' },
        { text: '창의적이고 새로운 아이디어를 제안한다', value: 'creative' },
        { text: '팀원들과 함께 브레인스토밍한다', value: 'collaborative' },
        { text: '새로운 방법을 즉시 시도해본다', value: 'experimental' },
      ],
    },
    {
      question: '업무 중 스트레스를 받을 때 당신은?',
      options: [
        { text: '문제를 분석하고 체계적으로 해결한다', value: 'analytical' },
        { text: '잠시 휴식을 취하고 마음을 정리한다', value: 'mindful' },
        { text: '동료들과 상황을 공유하고 위로받는다', value: 'collaborative' },
        { text: '다른 업무로 주의를 돌린다', value: 'distracting' },
      ],
    },
    {
      question: '업무 중 학습할 때 당신은?',
      options: [
        { text: '체계적으로 지식을 정리하고 학습한다', value: 'systematic' },
        { text: '실무 경험을 통해 학습한다', value: 'experiential' },
        {
          text: '다른 사람들과 지식을 공유하며 학습한다',
          value: 'collaborative',
        },
        { text: '즉시 적용해보며 학습한다', value: 'practical' },
      ],
    },
    {
      question: '업무 중 갈등이 발생했을 때 당신은?',
      options: [
        {
          text: '갈등의 원인을 분석하고 논리적으로 해결한다',
          value: 'analytical',
        },
        { text: '창의적인 해결책을 찾아 제안한다', value: 'creative' },
        { text: '중재자 역할을 하며 양쪽을 조율한다', value: 'collaborative' },
        { text: '직접적으로 문제를 해결한다', value: 'direct' },
      ],
    },
    {
      question: '업무 중 변화가 필요할 때 당신은?',
      options: [
        {
          text: '변화의 필요성을 분석하고 체계적으로 계획한다',
          value: 'systematic',
        },
        { text: '혁신적이고 새로운 방향을 제시한다', value: 'innovative' },
        { text: '팀원들과 함께 변화 방향을 논의한다', value: 'collaborative' },
        {
          text: '즉시 변화를 시도하고 결과를 확인한다',
          value: 'action-oriented',
        },
      ],
    },
    {
      question: '업무 중 성장하고 싶을 때 당신은?',
      options: [
        { text: '체계적으로 학습 계획을 세우고 실행한다', value: 'systematic' },
        { text: '새로운 도전과 경험을 통해 성장한다', value: 'experiential' },
        { text: '멘토나 동료로부터 배우며 성장한다', value: 'collaborative' },
        { text: '실무에서 다양한 역할을 맡으며 성장한다', value: 'practical' },
      ],
    },
    {
      question: '업무 중 효율성을 높이고 싶을 때 당신은?',
      options: [
        { text: '업무 과정을 분석하고 개선점을 찾는다', value: 'analytical' },
        { text: '새로운 도구나 방법을 도입한다', value: 'innovative' },
        {
          text: '팀원들과 함께 효율성을 높이는 방법을 찾는다',
          value: 'collaborative',
        },
        { text: '실제로 개선 사항을 적용해본다', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 중 만족도를 높이고 싶을 때 당신은?',
      options: [
        { text: '업무 환경과 조건을 분석하고 개선한다', value: 'analytical' },
        { text: '창의적이고 의미 있는 업무를 찾는다', value: 'creative' },
        {
          text: '팀원들과 함께 만족스러운 환경을 만든다',
          value: 'collaborative',
        },
        {
          text: '즉시 개선할 수 있는 부분을 찾아 적용한다',
          value: 'action-oriented',
        },
      ],
    },
    {
      question: '업무 중 리더십을 발휘할 때 당신은?',
      options: [
        { text: '체계적인 계획과 지시로 팀을 이끈다', value: 'directive' },
        { text: '비전과 영감으로 팀을 이끈다', value: 'inspirational' },
        { text: '협력과 소통으로 팀을 이끈다', value: 'collaborative' },
        { text: '실행과 결과로 팀을 이끈다', value: 'results-driven' },
      ],
    },
    {
      question: '업무 스타일을 개선하고 싶을 때 당신은?',
      options: [
        {
          text: '현재 스타일을 분석하고 체계적으로 개선한다',
          value: 'systematic',
        },
        { text: '새로운 접근 방식을 시도해본다', value: 'innovative' },
        {
          text: '다른 사람들의 피드백을 받아 개선한다',
          value: 'collaborative',
        },
        {
          text: '실제로 개선 사항을 적용해보며 발전한다',
          value: 'action-oriented',
        },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 각 유형별 카운트
    const systematic = answers.filter((a) => a === 'systematic').length;
    const flexible = answers.filter((a) => a === 'flexible').length;
    const collaborative = answers.filter((a) => a === 'collaborative').length;
    const actionOriented = answers.filter(
      (a) => a === 'action-oriented'
    ).length;
    const focused = answers.filter((a) => a === 'focused').length;
    const dynamic = answers.filter((a) => a === 'dynamic').length;
    const creative = answers.filter((a) => a === 'creative').length;
    const analytical = answers.filter((a) => a === 'analytical').length;
    const practical = answers.filter((a) => a === 'practical').length;
    const intuitive = answers.filter((a) => a === 'intuitive').length;
    const quantitative = answers.filter((a) => a === 'quantitative').length;
    const holistic = answers.filter((a) => a === 'holistic').length;
    const resultsOriented = answers.filter(
      (a) => a === 'results-oriented'
    ).length;
    const specific = answers.filter((a) => a === 'specific').length;
    const visionary = answers.filter((a) => a === 'visionary').length;
    const experimental = answers.filter((a) => a === 'experimental').length;
    // 유형별 점수 합산
    const scores = [
      { type: 'systematic', score: systematic },
      { type: 'flexible', score: flexible },
      { type: 'collaborative', score: collaborative },
      { type: 'action-oriented', score: actionOriented },
      { type: 'focused', score: focused },
      { type: 'dynamic', score: dynamic },
      { type: 'creative', score: creative },
      { type: 'analytical', score: analytical },
      { type: 'practical', score: practical },
      { type: 'intuitive', score: intuitive },
      { type: 'quantitative', score: quantitative },
      { type: 'holistic', score: holistic },
      { type: 'results-oriented', score: resultsOriented },
      { type: 'specific', score: specific },
      { type: 'visionary', score: visionary },
      { type: 'experimental', score: experimental },
    ];
    const max = scores.reduce((a, b) => (b.score > a.score ? b : a));
    // 결과 매핑(예시)
    const resultMap = {
      systematic: {
        title: '체계적 계획가형',
        description:
          '계획과 조직을 중시하며, 일의 효율을 극대화하는 스타일입니다.',
        detailedDescription:
          '일을 시작하기 전 꼼꼼하게 계획을 세우고, 단계별로 체계적으로 진행합니다. 실수나 변수를 최소화하고, 효율적인 업무 환경을 선호합니다.',
        traits: ['계획적', '조직적', '신중함', '효율성'],
        strengths: ['일정 관리', '문제 예방', '효율적 업무'],
        weaknesses: ['융통성 부족', '즉흥성 부족'],
        goodMatches: ['collaborative', 'focused'],
        badMatches: ['action-oriented'],
        goodMatchReasons: [
          '협업형과 함께하면 체계적 플랜에 활력을 더할 수 있습니다.',
        ],
        badMatchReasons: ['즉흥적 스타일과는 갈등이 생길 수 있습니다.'],
        recommendations: ['가끔은 융통성을 발휘해보세요.'],
      },
      flexible: {
        title: '유연한 적응형',
        description: '상황에 따라 유연하게 대처하며, 변화에 강한 스타일입니다.',
        detailedDescription:
          '전체적인 목표를 파악하고, 필요에 따라 계획을 조정합니다. 변화와 새로운 시도를 두려워하지 않습니다.',
        traits: ['유연성', '적응력', '창의성'],
        strengths: ['변화 대응', '새로운 시도'],
        weaknesses: ['계획 부족', '일관성 부족'],
        goodMatches: ['creative', 'collaborative'],
        badMatches: ['systematic'],
        goodMatchReasons: [
          '창의적 스타일과 함께하면 새로운 아이디어가 잘 나옵니다.',
        ],
        badMatchReasons: [
          '체계적 스타일과는 일 처리 방식이 달라 충돌할 수 있습니다.',
        ],
        recommendations: ['기본 계획은 세워두는 습관을 들이세요.'],
      },
      collaborative: {
        title: '협업 중심형',
        description: '팀워크와 소통을 중시하며, 함께 일하는 것을 선호합니다.',
        detailedDescription:
          '팀원들과의 협력을 통해 시너지를 내고, 다양한 의견을 수렴하여 최선의 결과를 도출합니다.',
        traits: ['협력', '소통', '팀워크'],
        strengths: ['의사소통', '갈등 조정'],
        weaknesses: ['의존성', '결정 지연'],
        goodMatches: ['systematic', 'flexible'],
        badMatches: ['action-oriented'],
        goodMatchReasons: [
          '체계적/유연한 스타일과 함께하면 균형 잡힌 결과를 얻을 수 있습니다.',
        ],
        badMatchReasons: [
          '즉흥적 스타일과는 협업 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['독립적으로 결정하는 연습도 해보세요.'],
      },
      'action-oriented': {
        title: '즉시 실행형',
        description: '계획보다는 행동을 중시하며, 빠른 실행을 선호합니다.',
        detailedDescription:
          '즉각적으로 행동에 옮기고, 과정에서 문제를 해결합니다. 빠른 결과를 중시합니다.',
        traits: ['즉흥성', '실행력', '속도'],
        strengths: ['빠른 실행', '문제 해결'],
        weaknesses: ['계획 부족', '실수 가능성'],
        goodMatches: ['collaborative', 'dynamic'],
        badMatches: ['systematic'],
        goodMatchReasons: ['협업형과 함께하면 실행력에 시너지가 생깁니다.'],
        badMatchReasons: [
          '체계적 스타일과는 일 처리 방식이 달라 충돌할 수 있습니다.',
        ],
        recommendations: ['기본 계획을 세우는 습관을 들이세요.'],
      },
      // 기타 유형은 필요에 따라 추가
    };
    return resultMap[max.type] || resultMap['systematic'];
  },
};
