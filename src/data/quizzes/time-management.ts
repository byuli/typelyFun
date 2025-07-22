import type { Quiz } from '../../types';

export const timeManagementQuiz: Quiz = {
  id: 'time-management',
  title: '시간 관리 스타일',
  description:
    '당신의 시간 관리 스타일을 알아보고 효율적인 시간 활용법을 찾아보세요',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: '일정을 계획할 때 당신은?',
      options: [
        {
          text: '상세한 계획표를 만들고 체계적으로 관리한다',
          value: 'detailed',
        },
        { text: '대략적인 계획만 세우고 유연하게 조정한다', value: 'flexible' },
        { text: '우선순위를 정하고 중요한 것부터 처리한다', value: 'priority' },
        { text: '즉흥적으로 상황에 따라 결정한다', value: 'spontaneous' },
      ],
    },
    {
      question: '시간을 관리할 때 가장 중요하게 생각하는 것은?',
      options: [
        { text: '계획의 완벽한 실행', value: 'execution' },
        { text: '유연성과 적응성', value: 'flexibility' },
        { text: '효율성과 생산성', value: 'efficiency' },
        { text: '즐거움과 만족감', value: 'enjoyment' },
      ],
    },
    {
      question: '마감 시간이 다가올 때 당신은?',
      options: [
        { text: '미리 계획하여 여유롭게 완료한다', value: 'early' },
        { text: '적당한 시점에 집중하여 완료한다', value: 'moderate' },
        { text: '마감 직전에 급하게 완료한다', value: 'last-minute' },
        { text: '마감을 넘겨서 완료한다', value: 'overdue' },
      ],
    },
    {
      question: '여러 일을 동시에 처리할 때?',
      options: [
        { text: '한 번에 하나씩 차례대로 처리한다', value: 'sequential' },
        { text: '여러 일을 번갈아가며 처리한다', value: 'alternating' },
        { text: '중요한 것부터 우선적으로 처리한다', value: 'important-first' },
        { text: '즉흥적으로 상황에 따라 처리한다', value: 'situational' },
      ],
    },
    {
      question: '시간이 부족할 때 당신은?',
      options: [
        { text: '계획을 재조정하여 시간을 확보한다', value: 'reorganize' },
        { text: '유연하게 일정을 조정한다', value: 'adjust' },
        { text: '효율성을 높여 시간을 절약한다', value: 'optimize' },
        { text: '시간을 늘려서 해결한다', value: 'extend' },
      ],
    },
    {
      question: '일정이 변경될 때 당신의 반응은?',
      options: [
        { text: '새로운 계획을 세우고 체계적으로 대응한다', value: 'replan' },
        { text: '유연하게 적응하여 새로운 상황에 맞춘다', value: 'adapt' },
        { text: '우선순위를 재조정하여 대응한다', value: 'reprioritize' },
        { text: '즉흥적으로 새로운 상황에 대응한다', value: 'improvise' },
      ],
    },
    {
      question: '시간 관리에서 가장 만족스러운 것은?',
      options: [
        { text: '계획대로 완벽하게 실행했을 때', value: 'perfect-execution' },
        { text: '유연하게 상황에 적응했을 때', value: 'flexible-adaptation' },
        {
          text: '효율적으로 많은 일을 해냈을 때',
          value: 'efficient-completion',
        },
        { text: '즐거운 시간을 보냈을 때', value: 'enjoyable-time' },
      ],
    },
    {
      question: '시간 관리에서 가장 어려워하는 것은?',
      options: [
        { text: '예상치 못한 상황에 대응하는 것', value: 'unexpected' },
        { text: '계획을 엄격하게 지키는 것', value: 'strict-adherence' },
        {
          text: '시간을 효율적으로 분배하는 것',
          value: 'efficient-allocation',
        },
        { text: '일정을 정확하게 예측하는 것', value: 'accurate-prediction' },
      ],
    },
    {
      question: '휴식 시간을 어떻게 활용하나요?',
      options: [
        { text: '계획된 휴식 시간을 정확히 지킨다', value: 'scheduled' },
        { text: '필요에 따라 유연하게 휴식을 취한다', value: 'as-needed' },
        { text: '효율적으로 짧은 휴식을 여러 번 취한다', value: 'efficient' },
        { text: '즐거운 활동으로 휴식을 취한다', value: 'enjoyable' },
      ],
    },
    {
      question: '시간 관리 스타일을 한 마디로 표현하면?',
      options: [
        { text: '체계적이고 계획적인 스타일', value: 'systematic' },
        { text: '유연하고 적응적인 스타일', value: 'adaptive' },
        { text: '효율적이고 생산적인 스타일', value: 'productive' },
        { text: '즉흥적이고 자유로운 스타일', value: 'free' },
      ],
    },
    {
      question: '시간 관리에서 가장 중요한 가치는?',
      options: [
        { text: '계획과 실행의 일치', value: 'consistency' },
        { text: '유연성과 적응성', value: 'adaptability' },
        { text: '효율성과 생산성', value: 'productivity' },
        { text: '즐거움과 만족감', value: 'satisfaction' },
      ],
    },
    {
      question: '시간을 낭비하는 것에 대해 어떻게 생각하나요?',
      options: [
        { text: '계획에 없는 시간 낭비를 싫어한다', value: 'dislike-waste' },
        {
          text: '때로는 유연한 시간 활용이 필요하다고 생각한다',
          value: 'flexible-needed',
        },
        {
          text: '효율적인 시간 활용을 중요하게 생각한다',
          value: 'efficiency-important',
        },
        {
          text: '즐거운 시간은 낭비가 아니라고 생각한다',
          value: 'enjoyable-not-waste',
        },
      ],
    },
    {
      question: '시간 관리에서 가장 잘하는 것은?',
      options: [
        { text: '상세한 계획 수립과 실행', value: 'planning-execution' },
        { text: '상황에 따른 유연한 대응', value: 'flexible-response' },
        { text: '효율적인 시간 활용', value: 'efficient-usage' },
        { text: '즉흥적인 상황 대응', value: 'spontaneous-response' },
      ],
    },
    {
      question: '이상적인 시간 관리는?',
      options: [
        { text: '계획대로 완벽하게 실행되는 시간', value: 'perfect-execution' },
        { text: '유연하고 적응적인 시간 활용', value: 'flexible-adaptation' },
        {
          text: '효율적이고 생산적인 시간 활용',
          value: 'efficient-productivity',
        },
        {
          text: '즐겁고 만족스러운 시간 활용',
          value: 'enjoyable-satisfaction',
        },
      ],
    },
    {
      question: '시간 관리 후 가장 만족스러운 것은?',
      options: [
        {
          text: '계획을 완벽하게 실행했을 때',
          value: 'perfect-plan-execution',
        },
        {
          text: '상황에 유연하게 적응했을 때',
          value: 'flexible-adaptation-success',
        },
        {
          text: '효율적으로 많은 일을 해냈을 때',
          value: 'efficient-many-tasks',
        },
        { text: '즐거운 시간을 보냈을 때', value: 'enjoyable-time-spent' },
      ],
    },
  ],
  results: {
    'systematic-planner': {
      title: '체계적 계획가형',
      description:
        '당신은 시간 관리에서 체계적이고 계획적인 접근을 선호하는 타입입니다. 상세한 계획표를 만들고 체계적으로 관리하며, 계획의 완벽한 실행을 추구합니다. 예측 가능하고 안정적인 시간 관리를 선호합니다.',
      characteristics: [
        '체계적이고 계획적인 접근',
        '상세한 계획표 수립과 관리',
        '계획의 완벽한 실행 추구',
        '예측 가능하고 안정적인 시간 관리',
      ],
    },
    'flexible-adapter': {
      title: '유연한 적응자형',
      description:
        '당신은 시간 관리에서 유연성과 적응성을 중요하게 생각하는 타입입니다. 상황에 따라 유연하게 일정을 조정하며, 예상치 못한 변화에 잘 대응합니다. 융통성 있고 적응적인 시간 관리를 선호합니다.',
      characteristics: [
        '유연성과 적응성을 중요하게 생각함',
        '상황에 따른 유연한 일정 조정',
        '예상치 못한 변화에 잘 대응',
        '융통성 있고 적응적인 시간 관리',
      ],
    },
    'efficient-producer': {
      title: '효율적 생산자형',
      description:
        '당신은 시간 관리에서 효율성과 생산성을 중요하게 생각하는 타입입니다. 우선순위를 정하고 중요한 것부터 처리하며, 시간을 효율적으로 활용합니다. 생산적이고 목표 지향적인 시간 관리를 선호합니다.',
      characteristics: [
        '효율성과 생산성을 중요하게 생각함',
        '우선순위 기반의 작업 처리',
        '시간의 효율적 활용',
        '생산적이고 목표 지향적인 시간 관리',
      ],
    },
    'spontaneous-enjoyer': {
      title: '즉흥적 즐거움형',
      description:
        '당신은 시간 관리에서 자유롭고 즉흥적인 접근을 선호하는 타입입니다. 상황에 따라 즉흥적으로 결정하며, 즐거움과 만족감을 중요하게 생각합니다. 자유롭고 유연한 시간 관리를 선호합니다.',
      characteristics: [
        '자유롭고 즉흥적인 접근',
        '상황에 따른 즉흥적 결정',
        '즐거움과 만족감을 중요하게 생각',
        '자유롭고 유연한 시간 관리',
      ],
    },
  },
};
