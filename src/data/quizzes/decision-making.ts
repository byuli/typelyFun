import type { Quiz } from '../../types';

export const decisionMakingQuiz: Quiz = {
  id: 'decision-making',
  title: '의사결정 스타일 테스트',
  description:
    '당신의 의사결정 스타일을 알아보고 효과적인 의사결정 방법을 찾아보세요',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '중요한 결정을 내릴 때 당신은?',
      options: [
        { text: '빠르게 결정하고 즉시 실행한다', value: 'quick' },
        { text: '충분히 생각하고 신중하게 결정한다', value: 'careful' },
        { text: '다른 사람의 의견을 구한다', value: 'consultative' },
        { text: '직감에 따라 결정한다', value: 'intuitive' },
      ],
    },
    {
      question: '의사결정에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '속도와 효율성', value: 'speed' },
        { text: '정확성과 완성도', value: 'accuracy' },
        { text: '합의와 협력', value: 'consensus' },
        { text: '창의성과 혁신', value: 'creativity' },
      ],
    },
    {
      question: '의사결정 과정에서 당신은?',
      options: [
        { text: '목표를 명확히 하고 빠르게 진행한다', value: 'goal-oriented' },
        { text: '모든 옵션을 분석하고 비교한다', value: 'analytical' },
        { text: '팀원들과 상의하여 결정한다', value: 'team-based' },
        { text: '새로운 관점에서 접근한다', value: 'innovative' },
      ],
    },
    {
      question: '의사결정에서 가장 만족스러운 것은?',
      options: [
        { text: '빠르게 결과를 얻었을 때', value: 'quick-result' },
        { text: '완벽한 결정을 내렸을 때', value: 'perfect-decision' },
        { text: '모든 사람이 만족했을 때', value: 'everyone-satisfied' },
        { text: '창의적인 해결책을 찾았을 때', value: 'creative-solution' },
      ],
    },
    {
      question: '의사결정에서 가장 어려워하는 것은?',
      options: [
        { text: '충분한 시간을 두고 생각하는 것', value: 'taking-time' },
        { text: '빠르게 결정하는 것', value: 'quick-decision' },
        {
          text: '다른 사람의 의견을 조율하는 것',
          value: 'coordinating-opinions',
        },
        { text: '기존 방식을 벗어나는 것', value: 'breaking-tradition' },
      ],
    },
    {
      question: '의사결정 스타일을 한 마디로 표현하면?',
      options: [
        { text: '빠르고 효율적인 결정', value: 'fast-efficient' },
        { text: '신중하고 분석적인 결정', value: 'careful-analytical' },
        { text: '협력적이고 합의하는 결정', value: 'collaborative-consensus' },
        { text: '창의적이고 혁신적인 결정', value: 'creative-innovative' },
      ],
    },
    {
      question: '의사결정에서 가장 중요한 가치는?',
      options: [
        { text: '효율성과 성과', value: 'efficiency-performance' },
        { text: '정확성과 완성도', value: 'accuracy-completeness' },
        { text: '협력과 소통', value: 'collaboration-communication' },
        { text: '창의성과 혁신', value: 'creativity-innovation' },
      ],
    },
    {
      question: '의사결정 후 가장 좋아지는 것은?',
      options: [
        { text: '빠르게 성과를 달성했을 때', value: 'quick-achievement' },
        { text: '완벽한 결과를 얻었을 때', value: 'perfect-result' },
        { text: '팀이 함께 성공했을 때', value: 'team-success' },
        { text: '새로운 가능성을 발견했을 때', value: 'new-possibility' },
      ],
    },
    {
      question: '의사결정에서 가장 어려운 결정은?',
      options: [
        { text: '속도와 정확성 사이의 선택', value: 'speed-accuracy' },
        { text: '개인 판단과 팀 의견 사이의 선택', value: 'individual-team' },
        { text: '안전성과 혁신 사이의 선택', value: 'safety-innovation' },
        { text: '효율성과 창의성 사이의 선택', value: 'efficiency-creativity' },
      ],
    },
    {
      question: '의사결정에서 가장 잘하는 것은?',
      options: [
        { text: '빠르고 정확한 판단', value: 'quick-accurate-judgment' },
        {
          text: '체계적이고 논리적인 분석',
          value: 'systematic-logical-analysis',
        },
        {
          text: '팀원들과의 효과적인 협력',
          value: 'effective-team-collaboration',
        },
        {
          text: '창의적이고 혁신적인 접근',
          value: 'creative-innovative-approach',
        },
      ],
    },
    {
      question: '의사결정에서 가장 만족스러운 것은?',
      options: [
        { text: '목표를 달성하고 성과를 얻었을 때', value: 'goal-achievement' },
        { text: '완벽한 분석과 결정을 했을 때', value: 'perfect-analysis' },
        {
          text: '팀과 함께 최선의 결과를 얻었을 때',
          value: 'best-team-result',
        },
        { text: '새로운 해결책을 발견했을 때', value: 'new-solution' },
      ],
    },
    {
      question: '의사결정에서 가장 중요한 것은?',
      options: [
        { text: '빠른 실행과 결과', value: 'quick-execution-result' },
        { text: '정확한 분석과 판단', value: 'accurate-analysis-judgment' },
        { text: '팀 협력과 소통', value: 'team-collaboration-communication' },
        { text: '창의적 사고와 혁신', value: 'creative-thinking-innovation' },
      ],
    },
    {
      question: '의사결정에서 가장 어려운 것은?',
      options: [
        {
          text: '충분한 정보 없이 결정하는 것',
          value: 'insufficient-information',
        },
        { text: '빠르게 결정해야 하는 것', value: 'quick-decision-required' },
        { text: '다른 사람의 반대를 받는 것', value: 'facing-opposition' },
        { text: '기존 방식을 바꾸는 것', value: 'changing-tradition' },
      ],
    },
    {
      question: '이상적인 의사결정 과정은?',
      options: [
        {
          text: '빠르고 효율적인 결정과 실행',
          value: 'fast-efficient-decision-execution',
        },
        {
          text: '신중하고 체계적인 분석과 결정',
          value: 'careful-systematic-analysis',
        },
        {
          text: '팀과의 협력적 합의와 실행',
          value: 'collaborative-consensus-execution',
        },
        {
          text: '창의적이고 혁신적인 접근과 실행',
          value: 'creative-innovative-approach',
        },
      ],
    },
    {
      question: '의사결정에서 가장 좋아하는 것은?',
      options: [
        { text: '빠르게 문제를 해결하는 것', value: 'quick-problem-solving' },
        {
          text: '완벽한 분석을 통해 결정하는 것',
          value: 'perfect-analysis-decision',
        },
        {
          text: '팀과 함께 최선의 방안을 찾는 것',
          value: 'team-best-solution',
        },
        {
          text: '새로운 아이디어로 문제를 해결하는 것',
          value: 'new-idea-problem-solving',
        },
      ],
    },
    {
      question: '의사결정에서 가장 싫어하는 것은?',
      options: [
        { text: '지나치게 오래 끄는 결정 과정', value: 'overly-long-process' },
        {
          text: '충분한 분석 없이 결정하는 것',
          value: 'insufficient-analysis',
        },
        { text: '팀원들과의 갈등', value: 'team-conflict' },
        { text: '기존 방식을 고수하는 것', value: 'sticking-to-tradition' },
      ],
    },
    {
      question: '의사결정에서 가장 잘하는 전략은?',
      options: [
        {
          text: '빠른 판단과 즉시 실행',
          value: 'quick-judgment-immediate-execution',
        },
        {
          text: '체계적 분석과 신중한 결정',
          value: 'systematic-analysis-careful-decision',
        },
        {
          text: '팀 협력과 합의 기반 결정',
          value: 'team-collaboration-consensus',
        },
        {
          text: '창의적 사고와 혁신적 접근',
          value: 'creative-thinking-innovative-approach',
        },
      ],
    },
    {
      question: '의사결정에서 성장하고 싶은 방향은?',
      options: [
        {
          text: '더욱 빠르고 정확한 의사결정',
          value: 'faster-accurate-decision',
        },
        {
          text: '더욱 체계적이고 완벽한 분석',
          value: 'more-systematic-perfect-analysis',
        },
        {
          text: '더욱 효과적인 팀 협력',
          value: 'more-effective-team-collaboration',
        },
        {
          text: '더욱 창의적이고 혁신적인 접근',
          value: 'more-creative-innovative-approach',
        },
      ],
    },
    {
      question: '의사결정에서 가장 중요한 것은?',
      options: [
        {
          text: '효율성과 성과 달성',
          value: 'efficiency-performance-achievement',
        },
        { text: '정확성과 완성도', value: 'accuracy-completeness' },
        { text: '팀 협력과 성공', value: 'team-collaboration-success' },
        { text: '창의성과 혁신', value: 'creativity-innovation' },
      ],
    },
  ],
  results: {
    'quick-decision-maker': {
      title: '빠른 의사결정자형',
      description:
        '당신은 빠르고 효율적인 의사결정을 선호하는 타입입니다. 목표를 명확히 하고 빠르게 진행하며, 속도와 성과를 중요하게 생각합니다. 즉시 실행하고 결과를 확인하는 것을 선호하며, 효율적인 의사결정을 추구합니다.',
      characteristics: [
        '빠르고 효율적인 의사결정',
        '목표 지향적이고 즉시 실행',
        '속도와 성과를 중요하게 생각',
        '효율적인 의사결정 추구',
      ],
    },
    'careful-analyst': {
      title: '신중한 분석가형',
      description:
        '당신은 신중하고 분석적인 의사결정을 선호하는 타입입니다. 모든 옵션을 체계적으로 분석하고 비교하며, 정확성과 완성도를 중요하게 생각합니다. 충분한 시간을 두고 완벽한 결정을 내리는 것을 추구합니다.',
      characteristics: [
        '신중하고 분석적인 의사결정',
        '체계적이고 논리적인 분석',
        '정확성과 완성도를 중요하게 생각',
        '완벽한 결정을 추구',
      ],
    },
    'collaborative-consensus-builder': {
      title: '협력적 합의자형',
      description:
        '당신은 협력적이고 합의 기반의 의사결정을 선호하는 타입입니다. 팀원들과 상의하여 결정하며, 협력과 소통을 중요하게 생각합니다. 모든 사람이 만족하는 결과를 추구하며, 팀워크를 중시합니다.',
      characteristics: [
        '협력적이고 합의 기반의 의사결정',
        '팀원들과의 상의와 협력',
        '협력과 소통을 중요하게 생각',
        '팀워크와 만족을 추구',
      ],
    },
    'creative-innovator': {
      title: '창의적 혁신가형',
      description:
        '당신은 창의적이고 혁신적인 의사결정을 선호하는 타입입니다. 새로운 관점에서 접근하며, 창의성과 혁신을 중요하게 생각합니다. 기존 방식을 벗어나 새로운 해결책을 찾는 것을 추구합니다.',
      characteristics: [
        '창의적이고 혁신적인 의사결정',
        '새로운 관점에서의 접근',
        '창의성과 혁신을 중요하게 생각',
        '새로운 해결책 추구',
      ],
    },
  },
};
