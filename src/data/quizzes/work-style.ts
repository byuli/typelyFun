import type { Quiz } from '../../types';

export const workStyleQuiz: Quiz = {
  id: 'work-style',
  title: '당신의 업무 스타일은?',
  description:
    '당신의 업무 수행 방식을 알아보고 더 효과적인 업무 환경을 찾아보세요! 어떤 업무 스타일과 가장 닮았을까요?',
  category: '직업',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 업무를 시작할 때 당신은?',
      options: [
        {
          text: '"체계적으로 계획을 세우고 단계별로 진행해!"',
          value: 'systematic',
        },
        {
          text: '"전체적인 목표를 파악하고 유연하게 접근해"',
          value: 'flexible',
        },
        {
          text: '"팀원들과 함께 계획을 수립하고 협력해!"',
          value: 'collaborative',
        },
        { text: '"즉시 실행하고 과정에서 조정해!"', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 환경에서 당신은?',
      options: [
        { text: '조용하고 집중할 수 있는 환경을 선호해', value: 'focused' },
        { text: '활발하고 역동적인 환경을 선호해!', value: 'dynamic' },
        {
          text: '협력적이고 소통이 활발한 환경을 선호해!',
          value: 'collaborative',
        },
        { text: '자유롭고 창의적인 환경을 선호해!', value: 'creative' },
      ],
    },
    {
      question: '업무 일정을 관리할 때 당신은?',
      options: [
        {
          text: '"상세한 계획표를 만들고 체계적으로 관리해!"',
          value: 'systematic',
        },
        { text: '"전체적인 방향을 잡고 유연하게 조정해"', value: 'flexible' },
        { text: '"팀원들과 함께 일정을 조율해!"', value: 'collaborative' },
        { text: '"우선순위에 따라 즉시 처리해!"', value: 'action-oriented' },
      ],
    },
    {
      question: '문제가 발생했을 때 당신은?',
      options: [
        { text: '"문제를 분석하고 체계적으로 해결해!"', value: 'analytical' },
        { text: '"창의적인 해결책을 찾아 시도해!"', value: 'creative' },
        { text: '"팀원들과 함께 해결책을 논의해!"', value: 'collaborative' },
        { text: '"즉시 여러 해결책을 시도해봐!"', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 성과를 측정할 때 당신은?',
      options: [
        { text: '"구체적인 지표와 데이터로 평가해!"', value: 'quantitative' },
        { text: '"전체적인 성과와 만족도를 고려해"', value: 'holistic' },
        {
          text: '"팀 전체의 성과와 협력 정도를 평가해!"',
          value: 'collaborative',
        },
        { text: '"실제 결과와 변화를 관찰해!"', value: 'results-oriented' },
      ],
    },
    {
      question: '새로운 기술이나 도구를 배울 때 당신은?',
      options: [
        { text: '"체계적으로 학습하고 단계별로 익혀!"', value: 'systematic' },
        { text: '"직관적으로 사용해보면서 배워!"', value: 'intuitive' },
        { text: '"다른 사람들과 함께 학습해!"', value: 'collaborative' },
        { text: '"바로 실무에 적용해보며 배워!"', value: 'practical' },
      ],
    },
    {
      question: '업무 중 어려움을 겪을 때 당신은?',
      options: [
        { text: '"문제를 분석하고 논리적으로 해결해!"', value: 'analytical' },
        { text: '"다른 관점에서 접근해봐!"', value: 'creative' },
        { text: '"동료나 상사에게 조언을 구해!"', value: 'collaborative' },
        { text: '"다른 방법을 시도해보며 해결해!"', value: 'experimental' },
      ],
    },
    {
      question: '업무 목표를 설정할 때 당신은?',
      options: [
        { text: '"구체적이고 측정 가능한 목표를 설정해!"', value: 'specific' },
        { text: '"전체적인 비전과 방향성을 설정해!"', value: 'visionary' },
        { text: '"팀원들과 함께 공유 목표를 설정해!"', value: 'collaborative' },
        {
          text: '"도전적이고 실현 가능한 목표를 설정해!"',
          value: 'challenging',
        },
      ],
    },
    {
      question: '업무 중 의사결정을 할 때 당신은?',
      options: [
        {
          text: '"충분한 정보를 수집한 후 논리적으로 결정해!"',
          value: 'analytical',
        },
        { text: '"직감과 경험을 바탕으로 결정해!"', value: 'intuitive' },
        {
          text: '"팀원들과 함께 의견을 나누고 결정해!"',
          value: 'collaborative',
        },
        { text: '"빠르게 결정하고 실행해!"', value: 'decisive' },
      ],
    },
    {
      question: '업무 중 피드백을 받을 때 당신은?',
      options: [
        { text: '"구체적인 개선점을 분석해!"', value: 'analytical' },
        { text: '"전체적인 방향성을 파악해!"', value: 'holistic' },
        { text: '"팀원들과 함께 피드백을 공유해!"', value: 'collaborative' },
        { text: '"즉시 개선 사항을 적용해!"', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 중 혁신이 필요할 때 당신은?',
      options: [
        { text: '"기존 방법을 분석하여 개선점을 찾아!"', value: 'analytical' },
        { text: '"창의적이고 새로운 아이디어를 제안해!"', value: 'creative' },
        { text: '"팀원들과 함께 브레인스토밍해!"', value: 'collaborative' },
        { text: '"새로운 방법을 즉시 시도해봐!"', value: 'experimental' },
      ],
    },
    {
      question: '업무 중 스트레스를 받을 때 당신은?',
      options: [
        { text: '"문제를 분석하고 체계적으로 해결해!"', value: 'analytical' },
        { text: '"잠시 휴식을 취하고 마음을 정리해"', value: 'mindful' },
        { text: '"동료들과 상황을 공유하고 위로받아!"', value: 'collaborative' },
        { text: '"다른 업무로 주의를 돌려!"', value: 'distracting' },
      ],
    },
    {
      question: '업무 중 학습할 때 당신은?',
      options: [
        { text: '"체계적으로 지식을 정리하고 학습해!"', value: 'systematic' },
        { text: '"실무 경험을 통해 학습해!"', value: 'experiential' },
        {
          text: '"다른 사람들과 지식을 공유하며 학습해!"',
          value: 'collaborative',
        },
        { text: '"즉시 적용해보며 학습해!"', value: 'practical' },
      ],
    },
    {
      question: '업무 중 갈등이 발생했을 때 당신은?',
      options: [
        {
          text: '"갈등의 원인을 분석하고 논리적으로 해결해!"',
          value: 'analytical',
        },
        { text: '"창의적인 해결책을 찾아 제안해!"', value: 'creative' },
        { text: '"중재자 역할을 하며 양쪽을 조율해!"', value: 'collaborative' },
        { text: '"직접적으로 문제를 해결해!"', value: 'direct' },
      ],
    },
    {
      question: '업무 중 변화가 필요할 때 당신은?',
      options: [
        {
          text: '"변화의 필요성을 분석하고 체계적으로 계획해!"',
          value: 'systematic',
        },
        { text: '"혁신적이고 새로운 방향을 제시해!"', value: 'innovative' },
        { text: '"팀원들과 함께 변화 방향을 논의해!"', value: 'collaborative' },
        {
          text: '"즉시 변화를 시도하고 결과를 확인해!"',
          value: 'action-oriented',
        },
      ],
    },
    {
      question: '업무 중 성장하고 싶을 때 당신은?',
      options: [
        { text: '"체계적으로 학습 계획을 세우고 실행해!"', value: 'systematic' },
        { text: '"새로운 도전과 경험을 통해 성장해!"', value: 'experiential' },
        { text: '"멘토나 동료로부터 배우며 성장해!"', value: 'collaborative' },
        { text: '"실무에서 다양한 역할을 맡으며 성장해!"', value: 'practical' },
      ],
    },
    {
      question: '업무 중 효율성을 높이고 싶을 때 당신은?',
      options: [
        { text: '"업무 과정을 분석하고 개선점을 찾아!"', value: 'analytical' },
        { text: '"새로운 도구나 방법을 도입해!"', value: 'innovative' },
        {
          text: '"팀원들과 함께 효율성을 높이는 방법을 찾아!"',
          value: 'collaborative',
        },
        { text: '"실제로 개선 사항을 적용해봐!"', value: 'action-oriented' },
      ],
    },
    {
      question: '업무 중 만족도를 높이고 싶을 때 당신은?',
      options: [
        { text: '"업무 환경과 조건을 분석하고 개선해!"', value: 'analytical' },
        { text: '"창의적이고 의미 있는 업무를 찾아!"', value: 'creative' },
        {
          text: '"팀원들과 함께 만족스러운 환경을 만들어!"',
          value: 'collaborative',
        },
        {
          text: '"즉시 개선할 수 있는 부분을 찾아 적용해!"',
          value: 'action-oriented',
        },
      ],
    },
    {
      question: '업무 중 리더십을 발휘할 때 당신은?',
      options: [
        { text: '"체계적인 계획과 지시로 팀을 이끌어!"', value: 'directive' },
        { text: '"비전과 영감으로 팀을 이끌어!"', value: 'inspirational' },
        { text: '"협력과 소통으로 팀을 이끌어!"', value: 'collaborative' },
        { text: '"실행과 결과로 팀을 이끌어!"', value: 'results-driven' },
      ],
    },
    {
      question: '업무 스타일을 개선하고 싶을 때 당신은?',
      options: [
        {
          text: '"현재 스타일을 분석하고 체계적으로 개선해!"',
          value: 'systematic',
        },
        { text: '"새로운 접근 방식을 시도해봐!"', value: 'innovative' },
        {
          text: '"다른 사람들의 피드백을 받아 개선해!"',
          value: 'collaborative',
        },
        {
          text: '"실제로 개선 사항을 적용해보며 발전해!"',
          value: 'action-oriented',
        },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 각 유형별 카운트
    const systematicCount = answers.filter((a) => 
      ['systematic', 'focused', 'analytical', 'quantitative', 'specific', 'directive'].includes(a as string)
    ).length;

    const flexibleCount = answers.filter((a) => 
      ['flexible', 'creative', 'holistic', 'visionary', 'intuitive', 'innovative', 'experiential'].includes(a as string)
    ).length;

    const collaborativeCount = answers.filter((a) => 
      ['collaborative', 'results-oriented', 'challenging', 'decisive', 'mindful'].includes(a as string)
    ).length;

    const actionOrientedCount = answers.filter((a) => 
      ['action-oriented', 'dynamic', 'practical', 'experimental', 'direct', 'results-driven'].includes(a as string)
    ).length;

    // 유형별 점수 합산
    const scores = [
      { type: 'systematic', score: systematicCount },
      { type: 'flexible', score: flexibleCount },
      { type: 'collaborative', score: collaborativeCount },
      { type: 'action-oriented', score: actionOrientedCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    // 결과 매핑
    const results = {
      systematic: {
        title: '도서관 같은 체계적 계획가',
        description:
          '당신은 도서관처럼 체계적이고 조직적인 업무 스타일을 가진 계획가입니다!',
        detailedDescription: `당신은 도서관처럼 체계적이고 조직적인 성격을 가지고 있어요. 업무에서도 계획과 조직을 중시하며, 일의 효율을 극대화하는 스타일을 추구하는 계획가입니다.

도서관처럼 조용하고 집중할 수 있는 환경을 선호하고, 상세한 계획표를 만들고 체계적으로 관리하는 것을 잘해요. 구체적인 지표와 데이터로 평가하며, 체계적인 계획과 지시로 팀을 이끄는 것을 선호해요.

하지만 도서관도 너무 조용하면 답답할 수 있듯이, 당신도 때로는 너무 체계적이거나 융통성이 부족할 수 있어요. 가끔은 도서관에서 나와서 자유로운 창의성(유연함)을 발휘해보는 것도 좋을 것 같아요!`,
        traits: ['체계적', '계획적', '조직적', '신중함', '효율성'],
        strengths: [
          '일정 관리 능력',
          '문제 예방',
          '효율적 업무',
          '체계적 접근',
          '완성도 높음',
        ],
        weaknesses: [
          '융통성 부족',
          '즉흥성 부족',
          '창의성 부족',
          '변화 적응 어려움',
          '과도한 계획',
        ],
        goodMatches: ['바다 같은 유연한 적응가', '광장 같은 협력적 소통가'],
        badMatches: ['로켓 같은 즉시 실행가'],
        goodMatchReasons: [
          '바다 같은 유연한 적응가: 당신의 체계성이 상대방의 유연성과 조화를 이룰 수 있어요',
          '광장 같은 협력적 소통가: 함께 체계적이고 협력적인 환경을 만들 수 있어요',
        ],
        badMatchReasons: [
          '로켓 같은 즉시 실행가: 너무 빠르고 즉흥적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 융통성을 발휘해보세요',
          '즉흥적인 시도도 해보세요',
          '창의적 접근도 시도해보세요',
          '변화를 두려워하지 마세요',
        ],
      },
      flexible: {
        title: '바다 같은 유연한 적응가',
        description: '당신은 바다처럼 유연하고 적응력이 뛰어난 업무 스타일을 가진 적응가입니다!',
        detailedDescription: `당신은 바다처럼 유연하고 적응력이 뛰어난 성격을 가지고 있어요. 업무에서도 상황에 따라 유연하게 대처하며, 변화에 강한 스타일을 추구하는 적응가입니다.

바다처럼 자유롭고 창의적인 환경을 선호하고, 전체적인 목표를 파악하고 유연하게 접근하는 것을 잘해요. 창의적인 해결책을 찾아 시도하며, 비전과 영감으로 팀을 이끄는 것을 선호해요.

하지만 바다도 너무 자유로우면 방향을 잃을 수 있듯이, 당신도 때로는 너무 유연하거나 계획 부족으로 어려움을 겪을 수 있어요. 가끔은 바다에도 등대(체계성)가 필요한 것처럼 기본 계획을 세워보는 것도 좋을 것 같아요!`,
        traits: ['유연성', '적응력', '창의성', '혁신적', '개방성'],
        strengths: [
          '변화 대응',
          '창의적 사고',
          '새로운 시도',
          '혁신 능력',
          '문제 해결',
        ],
        weaknesses: [
          '계획 부족',
          '일관성 부족',
          '체계성 부족',
          '완성도 아쉬움',
          '우선순위 혼란',
        ],
        goodMatches: ['도서관 같은 체계적 계획가', '로켓 같은 즉시 실행가'],
        badMatches: ['광장 같은 협력적 소통가'],
        goodMatchReasons: [
          '도서관 같은 체계적 계획가: 당신의 유연성이 상대방의 체계성과 조화를 이룰 수 있어요',
          '로켓 같은 즉시 실행가: 함께 창의적이고 실행력 있는 결과를 만들 수 있어요',
        ],
        badMatchReasons: [
          '광장 같은 협력적 소통가: 너무 협력적이고 합의적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '기본 계획은 세워두는 습관을 들이세요',
          '일관성을 유지해보세요',
          '체계적 접근도 시도해보세요',
          '우선순위를 명확히 해보세요',
        ],
      },
      collaborative: {
        title: '광장 같은 협력적 소통가',
        description: '당신은 광장처럼 소통과 협력을 중시하는 업무 스타일을 가진 소통가입니다!',
        detailedDescription: `당신은 광장처럼 협력적이고 소통을 중요하게 생각하며, 함께 일하는 것을 선호하는 소통가입니다.

광장처럼 협력적이고 소통이 활발한 환경을 선호하고, 팀원들과 함께 계획을 수립하고 협력하는 것을 잘해요. 팀원들과 함께 해결책을 논의하며, 협력과 소통으로 팀을 이끄는 것을 선호해요.

하지만 광장도 너무 시끄러우면 결정이 어려울 수 있듯이, 당신도 때로는 너무 의존적이거나 결정 지연이 생길 수 있어요. 가끔은 광장에서 나와서 독립적인 결정(자립성)을 해보는 것도 좋을 것 같아요!`,
        traits: ['협력적', '소통 지향', '팀워크', '합의적', '포용적'],
        strengths: [
          '의사소통',
          '갈등 조정',
          '팀워크',
          '합의 도출',
          '분위기 조성',
        ],
        weaknesses: [
          '의존성',
          '결정 지연',
          '독립성 부족',
          '갈등 회피',
          '개인 성과 아쉬움',
        ],
        goodMatches: ['도서관 같은 체계적 계획가', '로켓 같은 즉시 실행가'],
        badMatches: ['바다 같은 유연한 적응가'],
        goodMatchReasons: [
          '도서관 같은 체계적 계획가: 함께 체계적이고 협력적인 환경을 만들 수 있어요',
          '로켓 같은 즉시 실행가: 당신의 협력성이 상대방의 실행력에 균형을 제공해요',
        ],
        badMatchReasons: [
          '바다 같은 유연한 적응가: 너무 유연하고 변화하는 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '독립적으로 결정하는 연습도 해보세요',
          '개인 성과도 추구해보세요',
          '갈등을 직면해보세요',
          '자립성을 기르세요',
        ],
      },
      'action-oriented': {
        title: '로켓 같은 즉시 실행가',
        description: '당신은 로켓처럼 빠르고 즉시 실행하는 업무 스타일을 가진 실행가입니다!',
        detailedDescription: `당신은 로켓처럼 빠르고 즉시 실행하는 성격을 가지고 있어요. 업무에서도 계획보다는 행동을 중시하며, 빠른 실행을 선호하는 실행가입니다.

로켓처럼 활발하고 역동적인 환경을 선호하고, 즉시 실행하고 과정에서 조정하는 것을 잘해요. 즉시 여러 해결책을 시도해보며, 실행과 결과로 팀을 이끄는 것을 선호해요.

하지만 로켓도 너무 빠르면 목표를 놓칠 수 있듯이, 당신도 때로는 너무 성급하거나 계획 부족으로 실수할 수 있어요. 가끔은 로켓도 발사 전 점검(계획)이 필요한 것처럼 기본 계획을 세워보는 것도 좋을 것 같아요!`,
        traits: ['즉흥성', '실행력', '속도', '역동성', '도전적'],
        strengths: [
          '빠른 실행',
          '문제 해결',
          '적응력',
          '결단력',
          '에너지',
        ],
        weaknesses: [
          '계획 부족',
          '실수 가능성',
          '성급함',
          '체계성 부족',
          '완성도 아쉬움',
        ],
        goodMatches: ['바다 같은 유연한 적응가', '광장 같은 협력적 소통가'],
        badMatches: ['도서관 같은 체계적 계획가'],
        goodMatchReasons: [
          '바다 같은 유연한 적응가: 함께 창의적이고 실행력 있는 결과를 만들 수 있어요',
          '광장 같은 협력적 소통가: 상대방의 협력성이 당신의 실행력에 균형을 제공해요',
        ],
        badMatchReasons: [
          '도서관 같은 체계적 계획가: 너무 체계적이고 신중한 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '기본 계획을 세우는 습관을 들이세요',
          '신중한 판단도 해보세요',
          '체계적 접근도 시도해보세요',
          '완성도에도 신경써보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.systematic;
  },
};
