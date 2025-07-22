import type { Quiz } from '../../types';

export const decisionMakingQuiz: Quiz = {
  id: 'decision-making',
  title: '🎯 당신은 어떤 의사결정 스타일인가요?',
  description:
    '중요한 선택의 순간, 당신은 어떻게 결정하나요? 당신만의 독특한 의사결정 방법을 찾아보세요!',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '중요한 결정을 내릴 때 당신은?',
      options: [
        { text: '⚡ "빠르게 결정하고 즉시 실행해!"', value: 'quick' },
        { text: '🔍 "충분히 생각하고 신중하게 결정해!"', value: 'careful' },
        { text: '🤝 "다른 사람의 의견을 구해!"', value: 'consultative' },
        { text: '💫 "직감에 따라 결정해!"', value: 'intuitive' },
      ],
    },
    {
      question: '의사결정에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '🚀 "속도와 효율성이 최고야!"', value: 'speed' },
        { text: '🎯 "정확성과 완성도가 중요해!"', value: 'accuracy' },
        { text: '💝 "합의와 협력이 우선이야!"', value: 'consensus' },
        { text: '✨ "창의성과 혁신이 필요해!"', value: 'creativity' },
      ],
    },
    {
      question: '의사결정 과정에서 당신은?',
      options: [
        { text: '🎯 "목표를 명확히 하고 빠르게 진행해!"', value: 'goal-oriented' },
        { text: '📊 "모든 옵션을 분석하고 비교해!"', value: 'analytical' },
        { text: '👥 "팀원들과 상의하여 결정해!"', value: 'team-based' },
        { text: '🌈 "새로운 관점에서 접근해!"', value: 'innovative' },
      ],
    },
    {
      question: '의사결정에서 가장 만족스러운 순간은?',
      options: [
        { text: '⚡ "빠르게 결과를 얻었을 때!"', value: 'quick-result' },
        { text: '💎 "완벽한 결정을 내렸을 때!"', value: 'perfect-decision' },
        { text: '🎉 "모든 사람이 만족했을 때!"', value: 'everyone-satisfied' },
        { text: '💡 "창의적인 해결책을 찾았을 때!"', value: 'creative-solution' },
      ],
    },
    {
      question: '의사결정에서 가장 어려워하는 것은?',
      options: [
        { text: '⏰ "충분한 시간을 두고 생각하는 것"', value: 'taking-time' },
        { text: '💨 "빠르게 결정하는 것"', value: 'quick-decision' },
        { text: '🤹 "다른 사람의 의견을 조율하는 것"', value: 'coordinating-opinions' },
        { text: '🚧 "기존 방식을 벗어나는 것"', value: 'breaking-tradition' },
      ],
    },
    {
      question: '당신의 의사결정 스타일을 한 마디로 표현하면?',
      options: [
        { text: '🚀 "빠르고 효율적인 결정!"', value: 'fast-efficient' },
        { text: '🎓 "신중하고 분석적인 결정!"', value: 'careful-analytical' },
        { text: '🤝 "협력적이고 합의하는 결정!"', value: 'collaborative-consensus' },
        { text: '🎨 "창의적이고 혁신적인 결정!"', value: 'creative-innovative' },
      ],
    },
    {
      question: '의사결정에서 가장 중요한 가치는?',
      options: [
        { text: '💯 "효율성과 성과!"', value: 'efficiency-performance' },
        { text: '🔬 "정확성과 완성도!"', value: 'accuracy-completeness' },
        { text: '❤️ "협력과 소통!"', value: 'collaboration-communication' },
        { text: '🌟 "창의성과 혁신!"', value: 'creativity-innovation' },
      ],
    },
    {
      question: '의사결정 후 가장 뿌듯한 순간은?',
      options: [
        { text: '🏆 "빠르게 성과를 달성했을 때!"', value: 'quick-achievement' },
        { text: '💎 "완벽한 결과를 얻었을 때!"', value: 'perfect-result' },
        { text: '🎊 "팀이 함께 성공했을 때!"', value: 'team-success' },
        { text: '🔮 "새로운 가능성을 발견했을 때!"', value: 'new-possibility' },
      ],
    },
    {
      question: '의사결정에서 가장 어려운 딜레마는?',
      options: [
        { text: '⚖️ "속도와 정확성 사이의 선택"', value: 'speed-accuracy' },
        { text: '🤔 "개인 판단과 팀 의견 사이의 선택"', value: 'individual-team' },
        { text: '🛡️ "안전성과 혁신 사이의 선택"', value: 'safety-innovation' },
        { text: '⚡ "효율성과 창의성 사이의 선택"', value: 'efficiency-creativity' },
      ],
    },
    {
      question: '의사결정에서 당신이 가장 잘하는 것은?',
      options: [
        { text: '🎯 "빠르고 정확한 판단!"', value: 'quick-accurate-judgment' },
        { text: '🧠 "체계적이고 논리적인 분석!"', value: 'systematic-logical-analysis' },
        { text: '🤝 "팀원들과의 효과적인 협력!"', value: 'effective-team-collaboration' },
        { text: '🌈 "창의적이고 혁신적인 접근!"', value: 'creative-innovative-approach' },
      ],
    },
    {
      question: '의사결정에서 당신만의 강점은?',
      options: [
        { text: '🏃 "목표를 달성하고 성과를 얻는 것!"', value: 'goal-achievement' },
        { text: '📐 "완벽한 분석과 결정을 하는 것!"', value: 'perfect-analysis' },
        { text: '🎭 "팀과 함께 최선의 결과를 얻는 것!"', value: 'best-team-result' },
        { text: '💡 "새로운 해결책을 발견하는 것!"', value: 'new-solution' },
      ],
    },
    {
      question: '이상적인 의사결정에서 가장 중요한 것은?',
      options: [
        { text: '⚡ "빠른 실행과 결과!"', value: 'quick-execution-result' },
        { text: '🔍 "정확한 분석과 판단!"', value: 'accurate-analysis-judgment' },
        { text: '🤝 "팀 협력과 소통!"', value: 'team-collaboration-communication' },
        { text: '🎨 "창의적 사고와 혁신!"', value: 'creative-thinking-innovation' },
      ],
    },
    {
      question: '의사결정에서 가장 스트레스받는 상황은?',
      options: [
        { text: '❌ "충분한 정보 없이 결정하는 것"', value: 'insufficient-information' },
        { text: '⏰ "빠르게 결정해야 하는 것"', value: 'quick-decision-required' },
        { text: '😰 "다른 사람의 반대를 받는 것"', value: 'facing-opposition' },
        { text: '🚧 "기존 방식을 바꾸는 것"', value: 'changing-tradition' },
      ],
    },
    {
      question: '당신이 꿈꾸는 이상적인 의사결정 과정은?',
      options: [
        { text: '🚀 "빠르고 효율적인 결정과 실행!"', value: 'fast-efficient-decision-execution' },
        { text: '📚 "신중하고 체계적인 분석과 결정!"', value: 'careful-systematic-analysis' },
        { text: '🤝 "팀과의 협력적 합의와 실행!"', value: 'collaborative-consensus-execution' },
        { text: '🌟 "창의적이고 혁신적인 접근과 실행!"', value: 'creative-innovative-approach' },
      ],
    },
    {
      question: '의사결정에서 가장 즐거운 순간은?',
      options: [
        { text: '⚡ "빠르게 문제를 해결할 때!"', value: 'quick-problem-solving' },
        { text: '🎯 "완벽한 분석을 통해 결정할 때!"', value: 'perfect-analysis-decision' },
        { text: '🎉 "팀과 함께 최선의 방안을 찾을 때!"', value: 'team-best-solution' },
        { text: '💡 "새로운 아이디어로 문제를 해결할 때!"', value: 'new-idea-problem-solving' },
      ],
    },
    {
      question: '의사결정에서 가장 피하고 싶은 것은?',
      options: [
        { text: '🐌 "지나치게 오래 끄는 결정 과정"', value: 'overly-long-process' },
        { text: '🤷 "충분한 분석 없이 결정하는 것"', value: 'insufficient-analysis' },
        { text: '😡 "팀원들과의 갈등"', value: 'team-conflict' },
        { text: '🔒 "기존 방식을 고수하는 것"', value: 'sticking-to-tradition' },
      ],
    },
    {
      question: '의사결정에서 당신만의 비밀 전략은?',
      options: [
        { text: '⚡ "빠른 판단과 즉시 실행!"', value: 'quick-judgment-immediate-execution' },
        { text: '🔬 "체계적 분석과 신중한 결정!"', value: 'systematic-analysis-careful-decision' },
        { text: '🤝 "팀 협력과 합의 기반 결정!"', value: 'team-collaboration-consensus' },
        { text: '💫 "창의적 사고와 혁신적 접근!"', value: 'creative-thinking-innovative-approach' },
      ],
    },
    {
      question: '의사결정 능력을 더 키우고 싶은 방향은?',
      options: [
        { text: '🚀 "더욱 빠르고 정확한 의사결정!"', value: 'faster-accurate-decision' },
        { text: '📊 "더욱 체계적이고 완벽한 분석!"', value: 'more-systematic-perfect-analysis' },
        { text: '🤝 "더욱 효과적인 팀 협력!"', value: 'more-effective-team-collaboration' },
        { text: '🌈 "더욱 창의적이고 혁신적인 접근!"', value: 'more-creative-innovative-approach' },
      ],
    },
    {
      question: '의사결정에서 당신이 추구하는 궁극적 가치는?',
      options: [
        { text: '🏆 "효율성과 성과 달성!"', value: 'efficiency-performance-achievement' },
        { text: '💎 "정확성과 완성도!"', value: 'accuracy-completeness-final' },
        { text: '🎊 "팀 협력과 성공!"', value: 'team-collaboration-success' },
        { text: '✨ "창의성과 혁신!"', value: 'creativity-innovation-final' },
      ],
    },
    {
      question: '의사결정 후 가장 중요하게 생각하는 것은?',
      options: [
        { text: '📈 "빠른 실행과 결과 확인!"', value: 'quick-execution-verification' },
        { text: '🔍 "결정의 정확성 검증!"', value: 'decision-accuracy-verification' },
        { text: '🤝 "팀원들의 만족도!"', value: 'team-satisfaction' },
        { text: '🌟 "새로운 기회 발견!"', value: 'new-opportunity-discovery' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const quickCount = answers.filter((a) =>
      [
        'quick', 'speed', 'goal-oriented', 'quick-result', 'fast-efficient', 'efficiency-performance',
        'quick-achievement', 'speed-accuracy', 'quick-accurate-judgment', 'goal-achievement',
        'quick-execution-result', 'insufficient-information', 'fast-efficient-decision-execution',
        'quick-problem-solving', 'overly-long-process', 'quick-judgment-immediate-execution',
        'faster-accurate-decision', 'efficiency-performance-achievement', 'quick-execution-verification',
      ].includes(a as string)
    ).length;

    const carefulCount = answers.filter((a) =>
      [
        'careful', 'accuracy', 'analytical', 'perfect-decision', 'taking-time', 'careful-analytical',
        'accuracy-completeness', 'perfect-result', 'systematic-logical-analysis', 'perfect-analysis',
        'accurate-analysis-judgment', 'quick-decision-required', 'careful-systematic-analysis',
        'perfect-analysis-decision', 'insufficient-analysis', 'systematic-analysis-careful-decision',
        'more-systematic-perfect-analysis', 'accuracy-completeness-final', 'decision-accuracy-verification',
      ].includes(a as string)
    ).length;

    const collaborativeCount = answers.filter((a) =>
      [
        'consultative', 'consensus', 'team-based', 'everyone-satisfied', 'coordinating-opinions',
        'collaborative-consensus', 'collaboration-communication', 'team-success', 'individual-team',
        'effective-team-collaboration', 'best-team-result', 'team-collaboration-communication',
        'facing-opposition', 'collaborative-consensus-execution', 'team-best-solution',
        'team-conflict', 'team-collaboration-consensus', 'more-effective-team-collaboration',
        'team-collaboration-success', 'team-satisfaction',
      ].includes(a as string)
    ).length;

    const creativeCount = answers.filter((a) =>
      [
        'intuitive', 'creativity', 'innovative', 'creative-solution', 'breaking-tradition',
        'creative-innovative', 'creativity-innovation', 'new-possibility', 'safety-innovation',
        'efficiency-creativity', 'creative-innovative-approach', 'new-solution',
        'creative-thinking-innovation', 'changing-tradition', 'creative-innovative-approach',
        'new-idea-problem-solving', 'sticking-to-tradition', 'creative-thinking-innovative-approach',
        'more-creative-innovative-approach', 'creativity-innovation-final', 'new-opportunity-discovery',
      ].includes(a as string)
    ).length;

    // 가장 높은 점수의 유형 결정
    const scores = [
      { type: 'quick', score: quickCount },
      { type: 'careful', score: carefulCount },
      { type: 'collaborative', score: collaborativeCount },
      { type: 'creative', score: creativeCount },
    ];

    const maxScore = scores.reduce((a, b) => (b.score > a.score ? b : a));

    const results = {
      quick: {
        title: '⚡ 번개 같은 빠른 결정가',
        description: '당신은 번개처럼 빠르고 효율적인 의사결정을 하는 실행력의 달인입니다!',
        detailedDescription: `당신은 번개처럼 빠르고 강력한 성격을 가지고 있어요. 의사결정에서 속도와 효율성을 최우선으로 생각하며, 목표를 명확히 설정하고 즉시 실행에 옮기는 행동파입니다.

번개처럼 핵심을 정확히 파악하고 빠른 판단으로 기회를 놓치지 않는 것을 좋아해요. 시간을 소중히 여기며, "일단 해보자!"는 마음가짐으로 실행하면서 문제를 해결하는 것을 선호하는 성격이에요.

하지만 번개도 때로는 너무 빨라서 세부사항을 놓칠 수 있듯이, 당신도 가끔은 충분한 분석 없이 성급하게 결정하거나 다른 사람의 의견을 충분히 듣지 못할 수 있어요. 가끔은 번개도 구름(신중함) 속에서 잠시 쉬어가는 것이 좋을 것 같아요!`,
        traits: ['빠른 판단력', '실행력', '효율성', '목표지향', '결단력'],
        strengths: [
          '빠른 의사결정', '즉시 실행력', '기회 포착 능력', '시간 관리', '목표 달성력',
        ],
        weaknesses: [
          '성급한 판단', '세부사항 놓침', '충분한 분석 부족', '타인 의견 소홀', '실수 가능성',
        ],
        goodMatches: ['🔍 현미경 같은 신중 분석가', '🤝 다리 같은 협력 합의가'],
        badMatches: ['💫 구름 같은 창의 혁신가'],
        goodMatchReasons: [
          '🔍 현미경 같은 신중 분석가: 당신의 빠른 실행력과 상대방의 신중한 분석이 완벽한 균형을 이룰 수 있어요',
          '🤝 다리 같은 협력 합의가: 함께 빠르면서도 신중한 의사결정을 할 수 있어요',
        ],
        badMatchReasons: [
          '💫 구름 같은 창의 혁신가: 너무 자유롭고 창의적인 방식과 속도감이 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 충분히 생각하는 시간을 가져보세요', '다른 사람의 의견도 들어보세요', '세부사항도 체크해보세요', '실수를 줄이는 습관을 들여보세요',
        ],
      },
      careful: {
        title: '🔍 현미경 같은 신중 분석가',
        description: '당신은 현미경처럼 정확하고 체계적인 의사결정을 하는 완벽주의자입니다!',
        detailedDescription: `당신은 현미경처럼 정밀하고 세심한 성격을 가지고 있어요. 의사결정에서 정확성과 완성도를 가장 중요하게 생각하며, 모든 정보를 꼼꼼히 분석하고 검토한 후 최선의 결정을 내리는 완벽주의자입니다.

현미경처럼 세부사항까지 놓치지 않고 체계적으로 접근하는 것을 좋아해요. 충분한 시간을 두고 신중하게 판단하며, 실수나 후회 없는 완벽한 결정을 추구하는 성격이에요.

하지만 현미경도 때로는 너무 자세히 보다가 전체적인 큰 그림을 놓칠 수 있듯이, 당신도 가끔은 너무 완벽을 추구하다 보니 기회를 놓치거나 결정이 늦어질 수 있어요. 가끔은 현미경도 망원경(큰 그림)을 보는 것이 좋을 것 같아요!`,
        traits: ['분석력', '신중함', '완벽주의', '체계성', '정확성'],
        strengths: [
          '정확한 분석', '체계적 사고', '완벽한 결정', '실수 최소화', '세밀한 관찰력',
        ],
        weaknesses: [
          '결정 지연', '과도한 완벽주의', '기회 놓침', '스트레스 증가', '융통성 부족',
        ],
        goodMatches: ['⚡ 번개 같은 빠른 결정가', '💫 구름 같은 창의 혁신가'],
        badMatches: ['🤝 다리 같은 협력 합의가'],
        goodMatchReasons: [
          '⚡ 번개 같은 빠른 결정가: 당신의 신중한 분석과 상대방의 빠른 실행력이 완벽한 조화를 이룰 수 있어요',
          '💫 구름 같은 창의 혁신가: 함께 창의적이면서도 체계적인 해결책을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🤝 다리 같은 협력 합의가: 너무 많은 의견 조율로 인해 결정이 더욱 늦어질 수 있어요',
        ],
        recommendations: [
          '때로는 80% 완성도에서도 실행해보세요', '시간 제한을 두고 결정해보세요', '완벽함보다 적당함도 좋아요', '큰 그림도 놓치지 마세요',
        ],
      },
      collaborative: {
        title: '🤝 다리 같은 협력 합의가',
        description: '당신은 다리처럼 사람들을 연결하고 합의를 이끌어내는 소통의 달인입니다!',
        detailedDescription: `당신은 다리처럼 다양한 사람들을 이어주는 따뜻한 성격을 가지고 있어요. 의사결정에서 협력과 소통을 가장 중요하게 생각하며, 모든 사람의 의견을 듣고 조화로운 합의를 이끌어내는 인간관계의 달인입니다.

다리처럼 서로 다른 관점들을 연결하고 모두가 만족할 수 있는 해결책을 찾는 것을 좋아해요. 팀워크를 중시하며, 혼자 결정하기보다는 함께 논의하고 공동의 목표를 향해 나아가는 것을 선호하는 성격이에요.

하지만 다리도 때로는 너무 많은 무게를 견디다가 부담을 느낄 수 있듯이, 당신도 가끔은 모든 사람의 의견을 맞추려다 보니 결정이 늦어지거나 자신의 의견을 잃을 수 있어요. 가끔은 다리도 자신만의 방향(주관)을 가지는 것이 좋을 것 같아요!`,
        traits: ['협력성', '소통력', '포용력', '중재력', '공감능력'],
        strengths: [
          '뛰어난 소통능력', '갈등 조정', '팀워크 구축', '다양한 관점 수용', '합의 도출',
        ],
        weaknesses: [
          '결정 지연', '우유부단함', '주관 부족', '스트레스 증가', '책임 분산',
        ],
        goodMatches: ['⚡ 번개 같은 빠른 결정가', '💫 구름 같은 창의 혁신가'],
        badMatches: ['🔍 현미경 같은 신중 분석가'],
        goodMatchReasons: [
          '⚡ 번개 같은 빠른 결정가: 당신의 협력적 소통과 상대방의 빠른 실행력이 효과적인 팀워크를 만들어요',
          '💫 구름 같은 창의 혁신가: 함께 다양하고 창의적인 아이디어를 조화롭게 발전시킬 수 있어요',
        ],
        badMatchReasons: [
          '🔍 현미경 같은 신중 분석가: 너무 신중한 분석과 많은 협의로 인해 결정이 극도로 늦어질 수 있어요',
        ],
        recommendations: [
          '때로는 혼자서도 결정해보세요', '자신의 의견도 중요하게 생각하세요', '시간 제한을 두고 합의해보세요', '완벽한 합의보다 적절한 타협도 좋아요',
        ],
      },
      creative: {
        title: '💫 구름 같은 창의 혁신가',
        description: '당신은 구름처럼 자유롭고 창의적인 의사결정을 하는 혁신의 달인입니다!',
        detailedDescription: `당신은 구름처럼 자유롭고 변화무쌍한 성격을 가지고 있어요. 의사결정에서 창의성과 혁신을 가장 중요하게 생각하며, 새로운 관점에서 접근하여 누구도 생각하지 못한 해결책을 찾아내는 아이디어의 달인입니다.

구름처럼 고정된 틀에 얽매이지 않고 자유자재로 모양을 바꾸며 새로운 가능성을 탐험하는 것을 좋아해요. 직감과 영감을 믿으며, 기존 방식을 벗어나 혁신적인 방법으로 문제를 해결하는 것을 선호하는 성격이에요.

하지만 구름도 때로는 너무 자유로워서 일정한 형태를 유지하기 어려울 수 있듯이, 당신도 가끔은 너무 창의적이어서 현실적이지 못하거나 일관성이 부족할 수 있어요. 가끔은 구름도 땅(현실)에 발을 디디는 것이 좋을 것 같아요!`,
        traits: ['창의성', '혁신성', '직감력', '자유로움', '독창성'],
        strengths: [
          '창의적 사고', '혁신적 아이디어', '새로운 관점', '유연한 접근', '독창적 해결책',
        ],
        weaknesses: [
          '현실성 부족', '일관성 부족', '실행력 부족', '체계성 부족', '예측 어려움',
        ],
        goodMatches: ['🔍 현미경 같은 신중 분석가', '🤝 다리 같은 협력 합의가'],
        badMatches: ['⚡ 번개 같은 빠른 결정가'],
        goodMatchReasons: [
          '🔍 현미경 같은 신중 분석가: 당신의 창의적 아이디어와 상대방의 체계적 분석이 완벽한 혁신을 만들어요',
          '🤝 다리 같은 협력 합의가: 함께 다양한 창의적 아이디어를 현실적으로 발전시킬 수 있어요',
        ],
        badMatchReasons: [
          '⚡ 번개 같은 빠른 결정가: 너무 빠른 실행과 자유로운 창의성이 충돌할 수 있어요',
        ],
        recommendations: [
          '아이디어를 현실적으로 구체화해보세요', '체계적인 실행 계획도 세워보세요', '다른 사람의 피드백을 적극 수용해보세요', '창의성과 실용성의 균형을 맞춰보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.quick;
  },
};
