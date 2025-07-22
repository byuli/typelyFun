import type { Quiz } from '../../types';

export const workplaceCharacterQuiz: Quiz = {
  id: 'workplace-character',
  title: '직장 스타일 테스트',
  description: '당신의 직장에서의 성향과 스타일을 알아보세요',
  category: '직장',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '업무를 시작할 때 당신은?',
      options: [
        {
          text: '전체적인 계획을 세우고 체계적으로 진행한다',
          value: 'planner',
        },
        { text: '즉시 실행에 옮기며 진행하면서 수정한다', value: 'doer' },
        { text: '팀원들과 상의하여 함께 결정한다', value: 'collaborator' },
        { text: '가장 중요한 것부터 우선순위를 정한다', value: 'prioritizer' },
      ],
    },
    {
      question: '회의에서 당신의 역할은?',
      options: [
        {
          text: '아이디어를 제시하고 창의적인 해결책을 제안한다',
          value: 'innovator',
        },
        {
          text: '논리적으로 분석하고 실현 가능성을 검토한다',
          value: 'analyst',
        },
        {
          text: '팀원들의 의견을 조율하고 합의를 이끌어낸다',
          value: 'mediator',
        },
        {
          text: '구체적인 실행 계획을 세우고 역할을 분담한다',
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
          text: '문제를 분석하고 체계적으로 해결한다',
          value: 'problem-solver',
        },
        { text: '팀원들과 상의하여 함께 해결한다', value: 'team-player' },
        {
          text: '새로운 관점에서 접근하여 창의적으로 해결한다',
          value: 'creative',
        },
        { text: '우선순위를 정하고 단계별로 처리한다', value: 'systematic' },
      ],
    },
    {
      question: '동료와의 갈등이 생겼을 때?',
      options: [
        { text: '직접 대화를 통해 문제를 해결한다', value: 'direct' },
        { text: '상급자나 중재자를 통해 해결한다', value: 'mediated' },
        {
          text: '시간을 두고 자연스럽게 해결되기를 기다린다',
          value: 'patient',
        },
        {
          text: '객관적 사실을 바탕으로 논리적으로 해결한다',
          value: 'logical',
        },
      ],
    },
    {
      question: '새로운 프로젝트를 맡았을 때?',
      options: [
        {
          text: '기존 방식을 개선할 수 있는 새로운 아이디어를 찾는다',
          value: 'improver',
        },
        { text: '성공 사례를 참고하여 안전하게 진행한다', value: 'safe' },
        { text: '팀원들의 의견을 수렴하여 함께 진행한다', value: 'inclusive' },
        {
          text: '명확한 목표와 일정을 세우고 체계적으로 진행한다',
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
        { text: '즉시 도움을 요청하고 함께 해결한다', value: 'immediate' },
        { text: '충분히 시도한 후에 도움을 요청한다', value: 'after-try' },
        { text: '공식적인 절차를 통해 도움을 요청한다', value: 'formal' },
        { text: '비공식적으로 친근하게 도움을 요청한다', value: 'informal' },
      ],
    },
    {
      question: '업무 성과를 평가받을 때?',
      options: [
        {
          text: '창의성과 혁신성을 중점적으로 평가받고 싶다',
          value: 'creativity',
        },
        {
          text: '정확성과 완성도를 중점적으로 평가받고 싶다',
          value: 'accuracy',
        },
        {
          text: '협력과 팀워크를 중점적으로 평가받고 싶다',
          value: 'collaboration',
        },
        {
          text: '효율성과 생산성을 중점적으로 평가받고 싶다',
          value: 'productivity',
        },
      ],
    },
    {
      question: '업무에서 리더십을 발휘할 때?',
      options: [
        { text: '창의적인 비전을 제시하고 팀을 이끈다', value: 'visionary' },
        { text: '체계적인 계획을 세우고 실행을 관리한다', value: 'manager' },
        {
          text: '팀원들의 의견을 수렴하고 합의를 이끌어낸다',
          value: 'consensus',
        },
        { text: '전문성을 바탕으로 기술적 지도를 한다', value: 'expert' },
      ],
    },
    {
      question: '업무에서 학습할 때?',
      options: [
        {
          text: '새로운 기술과 트렌드를 적극적으로 학습한다',
          value: 'trend-learner',
        },
        {
          text: '기존 지식을 깊이 있게 연구하고 정리한다',
          value: 'deep-learner',
        },
        {
          text: '동료들과 함께 학습하고 경험을 공유한다',
          value: 'collaborative-learner',
        },
        {
          text: '실무에 바로 적용할 수 있는 실용적 지식을 학습한다',
          value: 'practical-learner',
        },
      ],
    },
    {
      question: '업무에서 실수를 했을 때?',
      options: [
        { text: '즉시 인정하고 해결책을 찾는다', value: 'immediate-fix' },
        { text: '원인을 분석하고 재발 방지책을 세운다', value: 'preventive' },
        { text: '팀원들과 상의하여 함께 해결한다', value: 'team-solve' },
        { text: '객관적으로 분석하고 개선점을 찾는다', value: 'improvement' },
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
        { text: '창의적이고 혁신적인 스타일', value: 'innovative' },
        { text: '정확하고 완벽한 스타일', value: 'precise' },
        { text: '협력적이고 소통하는 스타일', value: 'collaborative' },
        { text: '체계적이고 효율적인 스타일', value: 'systematic' },
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
          text: '창의적 리더십과 비전 제시 능력',
          value: 'creative-leadership',
        },
        { text: '전문성과 기술적 역량', value: 'expertise' },
        { text: '팀 관리와 협력 능력', value: 'team-management' },
        { text: '전략적 사고와 경영 능력', value: 'strategic-thinking' },
      ],
    },
  ],
  results: {
    'creative-innovator': {
      title: '창의적 혁신가형',
      description:
        '당신은 직장에서 창의성과 혁신을 추구하는 타입입니다. 새로운 아이디어를 제시하고 기존 방식을 개선하는 것을 즐깁니다. 자유로운 환경에서 창의력을 발휘하며, 혁신적인 해결책을 찾아내는 능력이 뛰어납니다.',
      characteristics: [
        '창의적이고 혁신적인 아이디어 제시',
        '새로운 기술과 트렌드에 관심이 많음',
        '자유로운 환경에서 창의력 발휘',
        '기존 방식을 개선하는 것을 즐김',
      ],
    },
    'precise-perfectionist': {
      title: '정확한 완벽주의자형',
      description:
        '당신은 직장에서 정확성과 완성도를 중요하게 생각하는 타입입니다. 체계적이고 논리적인 접근을 선호하며, 완벽한 결과물을 만들어내는 것을 목표로 합니다. 안정적이고 신뢰할 수 있는 업무 수행이 특징입니다.',
      characteristics: [
        '정확하고 완벽한 업무 수행',
        '체계적이고 논리적인 접근',
        '안정적이고 신뢰할 수 있는 업무 스타일',
        '전문성과 기술적 역량 개발',
      ],
    },
    'collaborative-team-player': {
      title: '협력적 팀플레이어형',
      description:
        '당신은 직장에서 협력과 팀워크를 중요하게 생각하는 타입입니다. 동료들과의 소통을 즐기며, 함께 성과를 달성하는 것을 추구합니다. 팀의 분위기를 좋게 만들고 조율하는 능력이 뛰어납니다.',
      characteristics: [
        '팀워크와 협력을 중요하게 생각함',
        '동료들과의 소통을 즐김',
        '팀 분위기 조율 능력이 뛰어남',
        '함께 성과를 달성하는 것을 추구함',
      ],
    },
    'efficient-organizer': {
      title: '효율적 조직가형',
      description:
        '당신은 직장에서 효율성과 생산성을 중요하게 생각하는 타입입니다. 체계적인 계획과 관리 능력이 뛰어나며, 시간과 자원을 효율적으로 활용합니다. 목표 지향적이고 실용적인 접근을 선호합니다.',
      characteristics: [
        '효율성과 생산성을 중요하게 생각함',
        '체계적인 계획과 관리 능력',
        '시간과 자원의 효율적 활용',
        '목표 지향적이고 실용적인 접근',
      ],
    },
  },
};
