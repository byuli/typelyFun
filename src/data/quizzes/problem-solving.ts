import type { Quiz } from '../../types';

export const problemSolvingQuiz: Quiz = {
  id: 'problem-solving',
  title: '🧩 당신은 어떤 문제 해결 스타일인가요?',
  description:
    '복잡한 문제 앞에서 당신은 어떻게 접근하나요? 당신만의 독특한 문제 해결 방법을 찾아보세요!',
  category: '직업',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '복잡한 문제에 직면했을 때 당신은?',
      options: [
        { text: '🔍 "문제를 작은 부분으로 나누어 체계적으로 접근해!"', value: 'analytical' },
        { text: '💫 "직관적으로 전체적인 해결책을 떠올려!"', value: 'intuitive' },
        { text: '🤝 "다른 사람들의 의견을 듣고 다양한 관점을 고려해!"', value: 'collaborative' },
        { text: '🧪 "실제로 시도해보면서 해결책을 찾아!"', value: 'experimental' },
      ],
    },
    {
      question: '새로운 문제를 처음 접할 때 당신은?',
      options: [
        { text: '📊 "문제의 원인과 구조를 먼저 분석해!"', value: 'analytical' },
        { text: '💭 "비슷한 경험을 떠올려 해결책을 찾아!"', value: 'intuitive' },
        { text: '🌐 "다른 사람들이 어떻게 해결했는지 알아봐!"', value: 'collaborative' },
        { text: '⚡ "바로 여러 방법을 시도해봐!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 과정에서 어려움을 겪을 때 당신은?',
      options: [
        { text: '📚 "더 자세한 정보를 수집하고 분석해!"', value: 'analytical' },
        { text: '🔄 "다른 각도에서 문제를 바라봐!"', value: 'intuitive' },
        { text: '💬 "전문가나 동료에게 조언을 구해!"', value: 'collaborative' },
        { text: '🎯 "다른 접근 방법을 시도해봐!"', value: 'experimental' },
      ],
    },
    {
      question: '해결책을 선택할 때 당신은?',
      options: [
        { text: '⚖️ "장단점을 분석하여 가장 합리적인 방법을 선택해!"', value: 'analytical' },
        { text: '✨ "감이 좋다고 생각되는 방법을 선택해!"', value: 'intuitive' },
        { text: '👥 "팀원들과 함께 의견을 나누고 결정해!"', value: 'collaborative' },
        { text: '🚀 "빠르게 시도해보고 결과를 확인해!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결에 시간이 오래 걸릴 때 당신은?',
      options: [
        { text: '🎯 "더 체계적이고 논리적으로 접근해!"', value: 'analytical' },
        { text: '🌈 "창의적이고 혁신적인 아이디어를 시도해!"', value: 'intuitive' },
        { text: '🤝 "더 많은 사람들과 협력하여 해결해!"', value: 'collaborative' },
        { text: '⚡ "다른 방법들을 병렬로 시도해!"', value: 'experimental' },
      ],
    },
    {
      question: '실패한 해결책에 대해 당신은?',
      options: [
        { text: '🔍 "실패 원인을 분석하여 다음에 개선해!"', value: 'analytical' },
        { text: '💡 "실패를 새로운 아이디어의 기회로 봐!"', value: 'intuitive' },
        { text: '📢 "팀원들과 함께 실패에서 배운 점을 공유해!"', value: 'collaborative' },
        { text: '🏃 "빠르게 다른 방법을 시도해!"', value: 'experimental' },
      ],
    },
    {
      question: '새로운 기술이나 도구를 사용할 때 당신은?',
      options: [
        { text: '📖 "사용법을 자세히 학습하고 이해한 후 사용해!"', value: 'analytical' },
        { text: '🎮 "직관적으로 사용해보면서 익혀!"', value: 'intuitive' },
        { text: '👨‍🏫 "다른 사람들에게 배우거나 함께 사용해!"', value: 'collaborative' },
        { text: '🔬 "바로 실험해보고 결과를 확인해!"', value: 'experimental' },
      ],
    },
    {
      question: '복잡한 정보를 처리할 때 당신은?',
      options: [
        { text: '🗂️ "정보를 분류하고 체계적으로 정리해!"', value: 'analytical' },
        { text: '🌟 "핵심적인 패턴을 찾아 이해해!"', value: 'intuitive' },
        { text: '💭 "다른 사람들과 함께 정보를 분석해!"', value: 'collaborative' },
        { text: '⚡ "실제 상황에 적용해보면서 이해해!"', value: 'experimental' },
      ],
    },
    {
      question: '긴급한 문제가 발생했을 때 당신은?',
      options: [
        { text: '📋 "빠르게 상황을 분석하고 우선순위를 정해!"', value: 'analytical' },
        { text: '🎯 "직감적으로 가장 중요한 부분을 파악해!"', value: 'intuitive' },
        { text: '🚨 "팀원들과 함께 긴급 대응 계획을 세워!"', value: 'collaborative' },
        { text: '⚡ "즉시 여러 해결책을 동시에 시도해!"', value: 'experimental' },
      ],
    },
    {
      question: '창의적인 해결책이 필요할 때 당신은?',
      options: [
        { text: '🧩 "기존 방법들을 분석하여 새로운 조합을 만들어!"', value: 'analytical' },
        { text: '🌈 "자유로운 상상력으로 혁신적인 아이디어를 떠올려!"', value: 'intuitive' },
        { text: '💡 "다양한 배경의 사람들과 브레인스토밍해!"', value: 'collaborative' },
        { text: '🔬 "여러 아이디어를 실제로 실험해봐!"', value: 'experimental' },
      ],
    },
    {
      question: '문제의 원인을 찾을 때 당신은?',
      options: [
        { text: '🔍 "논리적으로 단계별로 추적해!"', value: 'analytical' },
        { text: '💫 "직감적으로 가장 가능성이 높은 원인을 찾아!"', value: 'intuitive' },
        { text: '👁️ "다른 사람들의 관점에서 원인을 분석해!"', value: 'collaborative' },
        { text: '🧪 "가능한 원인들을 실제로 테스트해봐!"', value: 'experimental' },
      ],
    },
    {
      question: '해결책을 실행할 때 당신은?',
      options: [
        { text: '📊 "단계별로 계획을 세우고 체계적으로 실행해!"', value: 'analytical' },
        { text: '🌊 "전체적인 방향을 잡고 유연하게 실행해!"', value: 'intuitive' },
        { text: '🤝 "팀원들과 함께 협력하여 실행해!"', value: 'collaborative' },
        { text: '⚡ "빠르게 실행하고 결과를 확인하며 조정해!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 과정을 기록할 때 당신은?',
      options: [
        { text: '📝 "상세하고 체계적으로 기록해!"', value: 'analytical' },
        { text: '⭐ "핵심적인 인사이트만 간단히 기록해!"', value: 'intuitive' },
        { text: '📢 "팀원들과 함께 공유할 수 있도록 기록해!"', value: 'collaborative' },
        { text: '🔬 "실험 결과와 경험을 중심으로 기록해!"', value: 'experimental' },
      ],
    },
    {
      question: '새로운 문제 해결 방법을 배울 때 당신은?',
      options: [
        { text: '🎓 "이론과 원리를 먼저 이해해!"', value: 'analytical' },
        { text: '🌟 "전체적인 개념을 파악해!"', value: 'intuitive' },
        { text: '👨‍🏫 "다른 사람들에게 배우거나 가르쳐!"', value: 'collaborative' },
        { text: '🏃 "실제로 연습하고 실습해!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결의 성공을 측정할 때 당신은?',
      options: [
        { text: '📊 "구체적인 지표와 데이터로 평가해!"', value: 'analytical' },
        { text: '💭 "전체적인 느낌과 직감으로 판단해!"', value: 'intuitive' },
        { text: '👥 "다른 사람들의 피드백을 종합해!"', value: 'collaborative' },
        { text: '🔍 "실제 결과와 변화를 관찰해!"', value: 'experimental' },
      ],
    },
    {
      question: '복잡한 시스템을 이해할 때 당신은?',
      options: [
        { text: '🔧 "각 구성 요소와 관계를 분석해!"', value: 'analytical' },
        { text: '🌊 "전체적인 패턴과 흐름을 파악해!"', value: 'intuitive' },
        { text: '👁️ "다양한 관점에서 시스템을 바라봐!"', value: 'collaborative' },
        { text: '⚙️ "실제로 시스템을 조작해보면서 이해해!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 과정에서 의견이 갈릴 때 당신은?',
      options: [
        { text: '⚖️ "각 의견의 장단점을 분석하여 비교해!"', value: 'analytical' },
        { text: '✨ "직감적으로 가장 좋은 방향을 선택해!"', value: 'intuitive' },
        { text: '🤝 "모든 의견을 조화롭게 통합해!"', value: 'collaborative' },
        { text: '🧪 "각 의견을 실제로 시도해보고 비교해!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결에 대한 피드백을 받을 때 당신은?',
      options: [
        { text: '📊 "구체적인 개선점을 분석해!"', value: 'analytical' },
        { text: '🌟 "전체적인 방향성을 파악해!"', value: 'intuitive' },
        { text: '💬 "다양한 관점의 피드백을 종합해!"', value: 'collaborative' },
        { text: '⚡ "피드백을 바탕으로 즉시 실험해봐!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 과정을 개선할 때 당신은?',
      options: [
        { text: '🔧 "기존 과정을 분석하여 체계적으로 개선해!"', value: 'analytical' },
        { text: '💡 "새로운 아이디어로 혁신적으로 개선해!"', value: 'intuitive' },
        { text: '🤝 "팀원들과 함께 개선 방안을 논의해!"', value: 'collaborative' },
        { text: '🔬 "다양한 방법을 실험하여 최적화해!"', value: 'experimental' },
      ],
    },
    {
      question: '문제 해결 능력을 향상시키고 싶을 때 당신은?',
      options: [
        { text: '📚 "이론과 방법론을 체계적으로 학습해!"', value: 'analytical' },
        { text: '🌈 "창의적 사고와 직감을 개발해!"', value: 'intuitive' },
        { text: '👥 "다양한 사람들과 협력 경험을 쌓아!"', value: 'collaborative' },
        { text: '🏃 "실제 문제를 많이 해결해보며 경험을 쌓아!"', value: 'experimental' },
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
        title: '🔍 현미경 같은 분석적 해결가',
        description: '당신은 현미경처럼 세밀하고 체계적으로 문제를 분석하여 해결하는 논리의 달인입니다!',
        detailedDescription: `당신은 현미경처럼 정밀하고 체계적인 성격을 가지고 있어요. 문제를 작은 부분으로 나누어 하나씩 차근차근 분석하며, 논리적이고 체계적인 접근을 통해 확실한 해결책을 찾아내는 분석의 달인입니다.

현미경처럼 세부사항까지 놓치지 않고 데이터와 정보를 꼼꼼히 수집하여 검증된 방법으로 문제를 해결하는 것을 좋아해요. 단계별 계획을 세우고 논리적 근거를 바탕으로 신중하게 접근하는 성격이에요.

하지만 현미경도 때로는 너무 자세히 보다가 전체적인 큰 그림을 놓칠 수 있듯이, 당신도 가끔은 너무 분석에만 매몰되어 직관적인 해결책을 놓치거나 실행이 늦어질 수 있어요. 가끔은 현미경도 망원경(직감)을 사용해보는 것이 좋을 것 같아요!`,
        traits: ['분석적', '논리적', '체계적', '신중함', '정확성'],
        strengths: [
          '정확한 문제 분석', '체계적 접근', '논리적 사고', '위험 최소화', '검증된 해결책',
        ],
        weaknesses: [
          '실행 지연', '직감 부족', '창의성 제한', '과도한 분석', '융통성 부족',
        ],
        goodMatches: ['💫 구름 같은 직감적 해결가', '🧪 실험실 같은 실험적 해결가'],
        badMatches: ['🤝 다리 같은 협업적 해결가'],
        goodMatchReasons: [
          '💫 구름 같은 직감적 해결가: 당신의 체계적 분석과 상대방의 창의적 직감이 완벽한 해결책을 만들어요',
          '🧪 실험실 같은 실험적 해결가: 함께 분석과 실험을 조화롭게 결합할 수 있어요',
        ],
        badMatchReasons: [
          '🤝 다리 같은 협업적 해결가: 너무 많은 의견 조율로 인해 분석이 복잡해질 수 있어요',
        ],
        recommendations: [
          '때로는 직감도 믿어보세요', '완벽한 분석보다 적당한 분석으로도 실행해보세요', '창의적인 접근도 시도해보세요', '시간 제한을 두고 분석해보세요',
        ],
      },
      intuitive: {
        title: '💫 구름 같은 직감적 해결가',
        description: '당신은 구름처럼 자유롭고 직감적으로 문제의 핵심을 파악하여 해결하는 통찰의 달인입니다!',
        detailedDescription: `당신은 구름처럼 자유롭고 유연한 성격을 가지고 있어요. 전체적인 그림을 빠르게 파악하고 직감과 통찰력을 통해 문제의 핵심을 꿰뚫어 보는 아이디어의 달인입니다.

구름처럼 고정된 틀에 얽매이지 않고 창의적이고 혁신적인 접근을 통해 남들이 생각하지 못한 해결책을 찾아내는 것을 좋아해요. 경험과 직감을 믿으며 빠른 판단력으로 문제를 해결하는 성격이에요.

하지만 구름도 때로는 너무 자유로워서 형태가 불분명할 수 있듯이, 당신도 가끔은 논리적 근거가 부족하거나 체계적인 검증 없이 성급하게 결론을 내릴 수 있어요. 가끔은 구름도 땅(논리)에 발을 디디는 것이 좋을 것 같아요!`,
        traits: ['직감적', '창의적', '빠른 판단', '통찰력', '유연성'],
        strengths: [
          '빠른 문제 파악', '창의적 해결책', '혁신적 접근', '전체적 시각', '적응력',
        ],
        weaknesses: [
          '논리적 근거 부족', '체계성 부족', '검증 부족', '일관성 부족', '실수 가능성',
        ],
        goodMatches: ['🔍 현미경 같은 분석적 해결가', '🤝 다리 같은 협업적 해결가'],
        badMatches: ['🧪 실험실 같은 실험적 해결가'],
        goodMatchReasons: [
          '🔍 현미경 같은 분석적 해결가: 당신의 창의적 직감과 상대방의 체계적 분석이 완벽한 조화를 이뤄요',
          '🤝 다리 같은 협업적 해결가: 함께 다양한 관점에서 창의적인 아이디어를 발전시킬 수 있어요',
        ],
        badMatchReasons: [
          '🧪 실험실 같은 실험적 해결가: 너무 즉흥적이고 실험적인 방식이 충돌할 수 있어요',
        ],
        recommendations: [
          '직감을 논리적으로 검증해보세요', '체계적인 접근도 시도해보세요', '다른 사람의 피드백을 들어보세요', '아이디어를 구체화하는 연습을 해보세요',
        ],
      },
      collaborative: {
        title: '🤝 다리 같은 협업적 해결가',
        description: '당신은 다리처럼 다양한 관점을 연결하고 협력을 통해 문제를 해결하는 소통의 달인입니다!',
        detailedDescription: `당신은 다리처럼 사람들을 연결하고 조화를 이루는 따뜻한 성격을 가지고 있어요. 다양한 사람들의 의견을 듣고 여러 관점을 종합하여 모두가 만족할 수 있는 해결책을 찾아내는 협력의 달인입니다.

다리처럼 서로 다른 아이디어들을 연결하고 팀워크를 통해 더 큰 시너지를 만들어내는 것을 좋아해요. 브레인스토밍과 집단 지성을 활용하며, 모든 사람이 참여할 수 있는 해결 과정을 선호하는 성격이에요.

하지만 다리도 때로는 너무 많은 무게를 견디다가 부담을 느낄 수 있듯이, 당신도 가끔은 너무 많은 의견을 조율하다 보니 결정이 늦어지거나 주도적인 해결책 제시가 어려울 수 있어요. 가끔은 다리도 자신만의 방향(주관)을 가지는 것이 좋을 것 같아요!`,
        traits: ['협력적', '소통력', '포용력', '중재력', '팀워크'],
        strengths: [
          '다양한 관점 수용', '효과적 의사소통', '갈등 조정', '팀워크 구축', '집단 지성 활용',
        ],
        weaknesses: [
          '결정 지연', '주도성 부족', '의견 조율 어려움', '개인 책임 분산', '효율성 저하',
        ],
        goodMatches: ['💫 구름 같은 직감적 해결가', '🧪 실험실 같은 실험적 해결가'],
        badMatches: ['🔍 현미경 같은 분석적 해결가'],
        goodMatchReasons: [
          '💫 구름 같은 직감적 해결가: 당신의 협력적 소통과 상대방의 창의적 아이디어가 멋진 시너지를 만들어요',
          '🧪 실험실 같은 실험적 해결가: 함께 다양한 실험을 협력적으로 진행할 수 있어요',
        ],
        badMatchReasons: [
          '🔍 현미경 같은 분석적 해결가: 너무 체계적이고 개별적인 분석 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '때로는 혼자서도 결정해보세요', '주도적인 해결책을 제시해보세요', '시간 제한을 두고 협의해보세요', '완벽한 합의보다 효율성도 고려해보세요',
        ],
      },
      experimental: {
        title: '🧪 실험실 같은 실험적 해결가',
        description: '당신은 실험실처럼 다양한 시도를 통해 문제를 해결하는 실행력의 달인입니다!',
        detailedDescription: `당신은 실험실처럼 활동적이고 역동적인 성격을 가지고 있어요. 실제로 행동하고 다양한 방법을 시도해보면서 경험을 통해 문제를 해결하는 실행력의 달인입니다.

실험실처럼 새로운 아이디어를 계속 테스트하고 실패를 두려워하지 않으며 시행착오를 통해 최적의 해결책을 찾아가는 것을 좋아해요. 빠른 실행력과 높은 적응력으로 변화하는 상황에 유연하게 대응하는 성격이에요.

하지만 실험실도 때로는 너무 많은 실험으로 혼란스러울 수 있듯이, 당신도 가끔은 체계적인 계획 없이 성급하게 시도하거나 중요한 이론적 배경을 놓칠 수 있어요. 가끔은 실험실도 도서관(이론)의 도움을 받는 것이 좋을 것 같아요!`,
        traits: ['실험적', '행동력', '적응력', '실용적', '도전적'],
        strengths: [
          '빠른 실행력', '높은 적응력', '실용적 해결책', '경험 학습', '변화 대응력',
        ],
        weaknesses: [
          '계획성 부족', '이론적 기반 부족', '체계성 부족', '성급한 판단', '일관성 부족',
        ],
        goodMatches: ['🔍 현미경 같은 분석적 해결가', '🤝 다리 같은 협업적 해결가'],
        badMatches: ['💫 구름 같은 직감적 해결가'],
        goodMatchReasons: [
          '🔍 현미경 같은 분석적 해결가: 당신의 실험적 접근과 상대방의 체계적 분석이 완벽한 균형을 만들어요',
          '🤝 다리 같은 협업적 해결가: 함께 다양한 아이디어를 실험적으로 검증할 수 있어요',
        ],
        badMatchReasons: [
          '💫 구름 같은 직감적 해결가: 너무 즉흥적이고 직관적인 방식이 충돌할 수 있어요',
        ],
        recommendations: [
          '기본적인 계획을 세우는 습관을 들이세요', '이론적 배경도 학습해보세요', '체계적인 실험 설계를 해보세요', '결과를 분석하고 정리하는 시간을 가져보세요',
        ],
      },
    };
    
    return resultMap[max.type as keyof typeof resultMap] || resultMap.analytical;
  },
};
