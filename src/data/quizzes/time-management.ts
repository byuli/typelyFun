import type { Quiz } from '../../types';

export const timeManagementQuiz: Quiz = {
  id: 'time-management',
  title: '당신은 어떤 시계인가요?',
  description:
    '시간 관리 스타일로 알아보는 당신의 숨겨진 시계 기질! 어떤 시계와 가장 닮았을까요?',
  category: '라이프스타일',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '일정을 계획할 때 당신은?',
      options: [
        {
          text: '"상세한 계획표를 만들고 체계적으로 관리하자!" (완벽한 계획)',
          value: 'detailed',
        },
        {
          text: '"대략적인 계획만 세우고 유연하게 조정하자!" (유연한 계획)',
          value: 'flexible',
        },
        {
          text: '"우선순위를 정하고 중요한 것부터 처리하자!" (우선순위)',
          value: 'priority',
        },
        {
          text: '"즉흥적으로 상황에 따라 결정하자!" (즉흥적)',
          value: 'spontaneous',
        },
      ],
    },
    {
      question: '시간을 관리할 때 가장 중요하게 생각하는 것은?',
      options: [
        { text: '"계획의 완벽한 실행!" (완벽함)', value: 'execution' },
        { text: '"유연성과 적응성!" (적응력)', value: 'adaptability' },
        { text: '"효율성과 생산성!" (효율성)', value: 'efficiency' },
        { text: '"즐거움과 만족감!" (즐거움)', value: 'enjoyment' },
      ],
    },
    {
      question: '마감 시간이 다가올 때 당신은?',
      options: [
        {
          text: '"미리 계획하여 여유롭게 완료하자!" (여유로운 완료)',
          value: 'early',
        },
        {
          text: '"적당한 시점에 집중하여 완료하자!" (적절한 완료)',
          value: 'moderate',
        },
        {
          text: '"마감 직전에 급하게 완료하자!" (마감 직전)',
          value: 'last-minute',
        },
        { text: '"마감을 넘겨서 완료하자!" (마감 초과)', value: 'overdue' },
      ],
    },
    {
      question: '여러 일을 동시에 처리할 때?',
      options: [
        {
          text: '"한 번에 하나씩 차례대로 처리하자!" (순차적)',
          value: 'sequential',
        },
        {
          text: '"여러 일을 번갈아가며 처리하자!" (번갈아)',
          value: 'alternating',
        },
        {
          text: '"중요한 것부터 우선적으로 처리하자!" (우선순위)',
          value: 'important-first',
        },
        {
          text: '"즉흥적으로 상황에 따라 처리하자!" (즉흥적)',
          value: 'situational',
        },
      ],
    },
    {
      question: '시간이 부족할 때 당신은?',
      options: [
        {
          text: '"계획을 재조정하여 시간을 확보하자!" (계획 재조정)',
          value: 'reorganize',
        },
        {
          text: '"유연하게 일정을 조정하자!" (유연한 조정)',
          value: 'adjust',
        },
        {
          text: '"효율성을 높여 시간을 절약하자!" (효율성 향상)',
          value: 'optimize',
        },
        { text: '"시간을 늘려서 해결하자!" (시간 연장)', value: 'extend' },
      ],
    },
    {
      question: '일정이 변경될 때 당신의 반응은?',
      options: [
        {
          text: '"새로운 계획을 세우고 체계적으로 대응하자!" (새 계획)',
          value: 'replan',
        },
        {
          text: '"유연하게 적응하여 새로운 상황에 맞추자!" (유연한 적응)',
          value: 'adapt',
        },
        {
          text: '"우선순위를 재조정하여 대응하자!" (우선순위 재조정)',
          value: 'reprioritize',
        },
        {
          text: '"즉흥적으로 새로운 상황에 대응하자!" (즉흥적 대응)',
          value: 'improvise',
        },
      ],
    },
    {
      question: '시간 관리에서 가장 만족스러운 것은?',
      options: [
        {
          text: '"계획대로 완벽하게 실행했을 때!" (완벽한 실행)',
          value: 'perfect-execution',
        },
        {
          text: '"유연하게 상황에 적응했을 때!" (유연한 적응)',
          value: 'flexible-adaptation',
        },
        {
          text: '"효율적으로 많은 일을 해냈을 때!" (효율적 완료)',
          value: 'efficient-completion',
        },
        {
          text: '"즐거운 시간을 보냈을 때!" (즐거운 시간)',
          value: 'enjoyable-time',
        },
      ],
    },
    {
      question: '시간 관리에서 가장 어려워하는 것은?',
      options: [
        {
          text: '"예상치 못한 상황에 대응하는 것!" (예상치 못한 상황)',
          value: 'unexpected',
        },
        {
          text: '"계획을 엄격하게 지키는 것!" (엄격한 계획)',
          value: 'strict-adherence',
        },
        {
          text: '"시간을 효율적으로 분배하는 것!" (효율적 분배)',
          value: 'efficient-allocation',
        },
        {
          text: '"일정을 정확하게 예측하는 것!" (정확한 예측)',
          value: 'accurate-prediction',
        },
      ],
    },
    {
      question: '휴식 시간을 어떻게 활용하나요?',
      options: [
        {
          text: '"계획된 휴식 시간을 정확히 지키자!" (계획된 휴식)',
          value: 'scheduled',
        },
        {
          text: '"필요에 따라 유연하게 휴식을 취하자!" (필요시 휴식)',
          value: 'as-needed',
        },
        {
          text: '"효율적으로 짧은 휴식을 여러 번 취하자!" (효율적 휴식)',
          value: 'efficient',
        },
        {
          text: '"즐거운 활동으로 휴식을 취하자!" (즐거운 휴식)',
          value: 'enjoyable',
        },
      ],
    },
    {
      question: '시간 관리 스타일을 한 마디로 표현하면?',
      options: [
        {
          text: '"체계적이고 계획적인 스타일!" (체계적)',
          value: 'systematic',
        },
        { text: '"유연하고 적응적인 스타일!" (적응적)', value: 'adaptive' },
        {
          text: '"효율적이고 생산적인 스타일!" (생산적)',
          value: 'productive',
        },
        { text: '"즉흥적이고 자유로운 스타일!" (자유로운)', value: 'free' },
      ],
    },
    {
      question: '시간 관리에서 가장 중요한 가치는?',
      options: [
        { text: '"계획과 실행의 일치!" (일치)', value: 'consistency' },
        { text: '"유연성과 적응성!" (적응성)', value: 'adaptability' },
        { text: '"효율성과 생산성!" (생산성)', value: 'productivity' },
        { text: '"즐거움과 만족감!" (만족감)', value: 'satisfaction' },
      ],
    },
    {
      question: '시간을 낭비하는 것에 대해 어떻게 생각하나요?',
      options: [
        {
          text: '"계획에 없는 시간 낭비를 싫어한다!" (낭비 싫어함)',
          value: 'dislike-waste',
        },
        {
          text: '"때로는 유연한 시간 활용이 필요하다고 생각한다!" (유연성 필요)',
          value: 'flexible-needed',
        },
        {
          text: '"효율적인 시간 활용을 중요하게 생각한다!" (효율성 중요)',
          value: 'efficiency-important',
        },
        {
          text: '"즐거운 시간은 낭비가 아니라고 생각한다!" (즐거움은 낭비 아님)',
          value: 'enjoyable-not-waste',
        },
      ],
    },
    {
      question: '시간 관리에서 가장 잘하는 것은?',
      options: [
        {
          text: '"상세한 계획 수립과 실행!" (계획과 실행)',
          value: 'planning-execution',
        },
        {
          text: '"상황에 따른 유연한 대응!" (유연한 대응)',
          value: 'flexible-response',
        },
        {
          text: '"효율적인 시간 활용!" (효율적 활용)',
          value: 'efficient-usage',
        },
        {
          text: '"즉흥적인 상황 대응!" (즉흥적 대응)',
          value: 'spontaneous-response',
        },
      ],
    },
    {
      question: '이상적인 시간 관리는?',
      options: [
        {
          text: '"계획대로 완벽하게 실행되는 시간!" (완벽한 실행)',
          value: 'perfect-execution',
        },
        {
          text: '"유연하고 적응적인 시간 활용!" (유연한 활용)',
          value: 'flexible-adaptation',
        },
        {
          text: '"효율적이고 생산적인 시간 활용!" (효율적 활용)',
          value: 'efficient-productivity',
        },
        {
          text: '"즐겁고 만족스러운 시간 활용!" (즐거운 활용)',
          value: 'enjoyable-satisfaction',
        },
      ],
    },
    {
      question: '시간 관리 후 가장 만족스러운 것은?',
      options: [
        {
          text: '"계획을 완벽하게 실행했을 때!" (완벽한 실행)',
          value: 'perfect-plan-execution',
        },
        {
          text: '"상황에 유연하게 적응했을 때!" (유연한 적응)',
          value: 'flexible-adaptation-success',
        },
        {
          text: '"효율적으로 많은 일을 해냈을 때!" (효율적 완료)',
          value: 'efficient-many-tasks',
        },
        {
          text: '"즐거운 시간을 보냈을 때!" (즐거운 시간)',
          value: 'enjoyable-time-spent',
        },
      ],
    },
  ],
  resultMapping: (answers) => {
    const systematicCount = answers.filter((a) =>
      [
        'detailed',
        'execution',
        'early',
        'sequential',
        'reorganize',
        'replan',
        'perfect-execution',
        'strict-adherence',
        'scheduled',
        'systematic',
        'consistency',
        'dislike-waste',
        'planning-execution',
        'perfect-execution',
        'perfect-plan-execution',
      ].includes(a as string)
    ).length;

    const flexibleCount = answers.filter((a) =>
      [
        'flexible',
        'adaptability',
        'moderate',
        'alternating',
        'adjust',
        'adapt',
        'flexible-adaptation',
        'unexpected',
        'as-needed',
        'adaptive',
        'adaptability',
        'flexible-needed',
        'flexible-response',
        'flexible-adaptation',
        'flexible-adaptation-success',
      ].includes(a as string)
    ).length;

    const efficientCount = answers.filter((a) =>
      [
        'priority',
        'efficiency',
        'important-first',
        'optimize',
        'reprioritize',
        'efficient-completion',
        'efficient-allocation',
        'efficient',
        'productive',
        'productivity',
        'efficiency-important',
        'efficient-usage',
        'efficient-productivity',
        'efficient-many-tasks',
      ].includes(a as string)
    ).length;

    const spontaneousCount = answers.filter((a) =>
      [
        'spontaneous',
        'enjoyment',
        'last-minute',
        'situational',
        'extend',
        'improvise',
        'enjoyable-time',
        'accurate-prediction',
        'enjoyable',
        'free',
        'satisfaction',
        'enjoyable-not-waste',
        'spontaneous-response',
        'enjoyable-satisfaction',
        'enjoyable-time-spent',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'systematic', score: systematicCount },
      { type: 'flexible', score: flexibleCount },
      { type: 'efficient', score: efficientCount },
      { type: 'spontaneous', score: spontaneousCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      systematic: {
        title: '스위스 시계 같은 체계가',
        description:
          '당신은 스위스 시계처럼 정확하고 체계적인 시간 관리 스타일의 소유자입니다!',
        detailedDescription: `당신은 스위스 시계처럼 정확하고 체계적인 시간 관리 스타일을 가지고 있어요. 상세한 계획표를 만들고 체계적으로 관리하며, 계획의 완벽한 실행을 추구하는 체계가입니다.

스위스 시계처럼 정확하고 신뢰할 수 있는 시간 관리를 선호하고, 예측 가능하고 안정적인 일정을 추구해요. 계획을 세우면 반드시 실행하고, 시간을 낭비하는 것을 싫어하는 성격이에요.

하지만 스위스 시계도 너무 정형화되면 딱딱할 수 있듯이, 당신도 때로는 너무 엄격하거나 유연성이 부족할 수 있어요. 가끔은 스위스 시계에도 컬러풀한 스트랩(유연성)을 추가해보는 것도 좋을 것 같아요!`,
        traits: ['체계적', '계획적', '정확함', '신뢰성', '완벽주의'],
        strengths: ['완벽한 계획', '정확한 실행', '신뢰성', '안정성', '체계성'],
        weaknesses: [
          '유연성 부족',
          '엄격함',
          '스트레스',
          '즉흥성 부족',
          '딱딱함',
        ],
        goodMatches: [
          '스마트폰 같은 효율가',
          '변신하는 카멜레온 같은 유연가',
        ],
        badMatches: ['자유로운 예술가 같은 즉흥가'],
        goodMatchReasons: [
          '스마트폰 같은 효율가: 당신의 체계성이 상대방의 효율성과 조화를 이룰 수 있어요',
          '변신하는 카멜레온 같은 유연가: 함께 체계적이고 유연한 시간 관리를 할 수 있어요',
        ],
        badMatchReasons: [
          '자유로운 예술가 같은 즉흥가: 너무 즉흥적이고 자유로운 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '유연성을 기르세요',
          '즉흥성도 개발하세요',
          '완벽주의를 완화하세요',
          '스트레스를 줄여보세요',
        ],
      },
      flexible: {
        title: '변신하는 카멜레온 같은 유연가',
        description:
          '당신은 변신하는 카멜레온처럼 유연하고 적응적인 시간 관리 스타일의 소유자입니다!',
        detailedDescription: `당신은 변신하는 카멜레온처럼 유연하고 적응적인 시간 관리 스타일을 가지고 있어요. 상황에 따라 유연하게 일정을 조정하며, 예상치 못한 변화에 잘 대응하는 유연가입니다.

변신하는 카멜레온처럼 새로운 상황에 빠르게 적응하고, 융통성 있고 유연한 시간 관리를 선호해요. 계획이 변경되어도 쉽게 대응하고, 다양한 상황에 맞춰 시간을 활용하는 능력이 뛰어나요.

하지만 변신하는 카멜레온도 너무 자주 변하면 정체성이 모호해질 수 있듯이, 당신도 때로는 일관성이나 체계성이 부족할 수 있어요. 가끔은 변신하는 카멜레온도 기본 색깔(체계성)을 유지하는 것도 중요하다는 걸 잊지 마세요!`,
        traits: ['유연성', '적응성', '융통성', '변화 대응', '자유로움'],
        strengths: [
          '빠른 적응',
          '유연한 대응',
          '변화 수용',
          '자유로운 활용',
          '융통성',
        ],
        weaknesses: [
          '일관성 부족',
          '체계성 부족',
          '계획 부족',
          '안정성 부족',
          '예측 불가',
        ],
        goodMatches: ['스위스 시계 같은 체계가', '스마트폰 같은 효율가'],
        badMatches: ['자유로운 예술가 같은 즉흥가'],
        goodMatchReasons: [
          '스위스 시계 같은 체계가: 당신의 유연성이 상대방의 체계성과 조화를 이룰 수 있어요',
          '스마트폰 같은 효율가: 함께 유연하고 효율적인 시간 관리를 할 수 있어요',
        ],
        badMatchReasons: [
          '자유로운 예술가 같은 즉흥가: 너무 즉흥적이고 자유로운 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '일관성을 기르세요',
          '체계성을 개발하세요',
          '계획을 세워보세요',
          '안정성을 높여보세요',
        ],
      },
      efficient: {
        title: '스마트폰 같은 효율가',
        description:
          '당신은 스마트폰처럼 효율적이고 생산적인 시간 관리 스타일의 소유자입니다!',
        detailedDescription: `당신은 스마트폰처럼 효율적이고 생산적인 시간 관리 스타일을 가지고 있어요. 우선순위를 정하고 중요한 것부터 처리하며, 시간을 효율적으로 활용하는 효율가입니다.

스마트폰처럼 다양한 기능을 효율적으로 활용하고, 생산적이고 목표 지향적인 시간 관리를 선호해요. 시간을 낭비하는 것을 싫어하고, 최대한 많은 일을 효율적으로 해내는 능력이 뛰어나요.

하지만 스마트폰도 너무 많은 앱을 동시에 실행하면 느려질 수 있듯이, 당신도 때로는 너무 많은 일을 동시에 하려다가 스트레스를 받을 수 있어요. 가끔은 스마트폰도 충전(휴식)이 필요하다는 걸 잊지 마세요!`,
        traits: ['효율성', '생산성', '목표 지향', '우선순위', '빠름'],
        strengths: [
          '효율적 활용',
          '생산성',
          '목표 달성',
          '우선순위 설정',
          '빠른 처리',
        ],
        weaknesses: ['스트레스', '과부하', '휴식 부족', '즐거움 부족', '피로'],
        goodMatches: [
          '스위스 시계 같은 체계가',
          '변신하는 카멜레온 같은 유연가',
        ],
        badMatches: ['자유로운 예술가 같은 즉흥가'],
        goodMatchReasons: [
          '스위스 시계 같은 체계가: 당신의 효율성이 상대방의 체계성과 조화를 이룰 수 있어요',
          '변신하는 카멜레온 같은 유연가: 함께 효율적이고 유연한 시간 관리를 할 수 있어요',
        ],
        badMatchReasons: [
          '자유로운 예술가 같은 즉흥가: 너무 즉흥적이고 자유로운 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '휴식을 충분히 취하세요',
          '즐거움도 추구해보세요',
          '스트레스를 줄여보세요',
          '과부하를 피하세요',
        ],
      },
      spontaneous: {
        title: '자유로운 예술가 같은 즉흥가',
        description:
          '당신은 자유로운 예술가처럼 즉흥적이고 자유로운 시간 관리 스타일의 소유자입니다!',
        detailedDescription: `당신은 자유로운 예술가처럼 즉흥적이고 자유로운 시간 관리 스타일을 가지고 있어요. 상황에 따라 즉흥적으로 결정하며, 즐거움과 만족감을 중요하게 생각하는 즉흥가입니다.

자유로운 예술가처럼 창의적이고 자유로운 시간 활용을 선호하고, 틀에 얽매이지 않는 자유로운 시간 관리를 추구해요. 즐거운 시간을 보내는 것을 중요하게 생각하고, 즉흥적인 결정을 즐기는 성격이에요.

하지만 자유로운 예술가도 너무 즉흥적이면 마감을 놓칠 수 있듯이, 당신도 때로는 계획성이나 체계성이 부족할 수 있어요. 가끔은 자유로운 예술가도 기본 스케치(계획)가 필요하다는 걸 잊지 마세요!`,
        traits: ['즉흥적', '자유로움', '창의적', '즐거움', '유연함'],
        strengths: [
          '자유로운 활용',
          '즐거운 시간',
          '창의성',
          '즉흥성',
          '유연성',
        ],
        weaknesses: [
          '계획성 부족',
          '체계성 부족',
          '마감 지연',
          '일관성 부족',
          '예측 불가',
        ],
        goodMatches: [
          '변신하는 카멜레온 같은 유연가',
          '스마트폰 같은 효율가',
        ],
        badMatches: ['스위스 시계 같은 체계가'],
        goodMatchReasons: [
          '변신하는 카멜레온 같은 유연가: 함께 자유롭고 유연한 시간 관리를 할 수 있어요',
          '스마트폰 같은 효율가: 당신의 자유로움이 상대방의 효율성과 조화를 이룰 수 있어요',
        ],
        badMatchReasons: [
          '스위스 시계 같은 체계가: 너무 체계적이고 엄격한 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '기본 계획도 세워보세요',
          '체계성을 기르세요',
          '마감 시간을 지켜보세요',
          '일관성을 개발하세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.systematic;
  },
};
