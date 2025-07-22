import type { Quiz } from '../../types';

export const socialStyleQuiz: Quiz = {
  id: 'social-style',
  title: '사회적 스타일 테스트',
  description:
    '당신의 사회적 상호작용 방식을 알아보고 더 효과적인 인간관계를 만드는 방법을 찾아보세요',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 사람들과 만날 때 당신은?',
      options: [
        {
          text: '적극적으로 대화를 시작하고 먼저 다가간다',
          value: 'extroverted',
        },
        {
          text: '상대방이 먼저 말을 걸어주기를 기다린다',
          value: 'introverted',
        },
        { text: '공통 관심사를 찾아 자연스럽게 대화한다', value: 'balanced' },
        { text: '상황에 따라 적응적으로 행동한다', value: 'adaptive' },
      ],
    },
    {
      question: '파티나 모임에서 당신은?',
      options: [
        {
          text: '여러 사람과 어울리며 활발하게 참여한다',
          value: 'extroverted',
        },
        {
          text: '소수의 친한 사람들과 깊이 있는 대화를 한다',
          value: 'introverted',
        },
        { text: '모든 사람과 균형 있게 소통한다', value: 'balanced' },
        { text: '분위기에 따라 참여 정도를 조절한다', value: 'adaptive' },
      ],
    },
    {
      question: '의견이 다른 사람과 대화할 때 당신은?',
      options: [
        { text: '적극적으로 자신의 의견을 주장한다', value: 'assertive' },
        { text: '상대방의 의견을 경청하고 이해하려 한다', value: 'empathetic' },
        { text: '객관적으로 양쪽 의견을 분석한다', value: 'analytical' },
        { text: '상황에 따라 적절한 방식을 선택한다', value: 'adaptive' },
      ],
    },
    {
      question: '친구가 문제를 가지고 있을 때 당신은?',
      options: [
        { text: '즉시 해결책을 제시하고 도움을 준다', value: 'helpful' },
        { text: '공감하며 감정적 지원을 제공한다', value: 'empathetic' },
        { text: '문제를 분석하고 논리적으로 접근한다', value: 'analytical' },
        { text: '친구가 원하는 방식에 맞춰 도움을 준다', value: 'adaptive' },
      ],
    },
    {
      question: '팀 프로젝트에서 당신은?',
      options: [
        { text: '리더 역할을 맡아 팀을 이끈다', value: 'leadership' },
        { text: '팀원들과 협력하여 함께 작업한다', value: 'collaborative' },
        { text: '자신의 전문 분야에서 기여한다', value: 'specialized' },
        { text: '상황에 따라 다양한 역할을 수행한다', value: 'adaptive' },
      ],
    },
    {
      question: '갈등 상황에서 당신은?',
      options: [
        { text: '직접적으로 문제를 해결하려 한다', value: 'confrontational' },
        { text: '중재자 역할을 하며 양쪽을 조율한다', value: 'mediator' },
        { text: '객관적으로 상황을 분석한다', value: 'analytical' },
        { text: '상황에 따라 적절한 방식을 선택한다', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 환경에 적응할 때 당신은?',
      options: [
        { text: '적극적으로 새로운 사람들과 친해진다', value: 'extroverted' },
        { text: '천천히 주변을 관찰하며 적응한다', value: 'introverted' },
        {
          text: '기존 경험을 바탕으로 체계적으로 적응한다',
          value: 'systematic',
        },
        { text: '상황에 따라 유연하게 적응한다', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람의 성공을 축하할 때 당신은?',
      options: [
        { text: '적극적으로 축하하고 격려한다', value: 'enthusiastic' },
        { text: '진심 어린 축하와 공감을 표현한다', value: 'empathetic' },
        { text: '객관적으로 성공의 의미를 인정한다', value: 'analytical' },
        { text: '상대방이 원하는 방식으로 축하한다', value: 'adaptive' },
      ],
    },
    {
      question: '의사결정을 할 때 당신은?',
      options: [
        { text: '빠르게 결정하고 실행한다', value: 'decisive' },
        { text: '다른 사람들의 의견을 고려한다', value: 'collaborative' },
        { text: '충분한 정보를 수집한 후 결정한다', value: 'analytical' },
        { text: '상황에 따라 결정 방식을 조절한다', value: 'adaptive' },
      ],
    },
    {
      question: '스트레스를 받았을 때 당신은?',
      options: [
        { text: '다른 사람들과 함께 시간을 보내며 해소한다', value: 'social' },
        { text: '혼자만의 시간을 가지며 정리한다', value: 'solitary' },
        { text: '문제를 분석하고 해결책을 찾는다', value: 'analytical' },
        { text: '상황에 따라 다양한 방법을 시도한다', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 아이디어를 제안할 때 당신은?',
      options: [
        { text: '적극적으로 아이디어를 발표하고 설득한다', value: 'assertive' },
        {
          text: '다른 사람들의 반응을 고려하여 제안한다',
          value: 'considerate',
        },
        { text: '논리적으로 아이디어의 장점을 설명한다', value: 'analytical' },
        { text: '상황에 맞는 적절한 방식으로 제안한다', value: 'adaptive' },
      ],
    },
    {
      question: '피드백을 받을 때 당신은?',
      options: [
        { text: '적극적으로 피드백을 요청하고 받아들인다', value: 'open' },
        { text: '신중하게 피드백을 고려한다', value: 'cautious' },
        { text: '객관적으로 피드백을 분석한다', value: 'analytical' },
        { text: '피드백의 성격에 따라 대응한다', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람을 도울 때 당신은?',
      options: [
        { text: '적극적으로 도움을 제안하고 실행한다', value: 'proactive' },
        { text: '상대방이 요청할 때 도움을 준다', value: 'responsive' },
        { text: '체계적으로 도움의 방법을 계획한다', value: 'systematic' },
        { text: '상황에 따라 적절한 도움을 제공한다', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 문화나 관습을 접할 때 당신은?',
      options: [
        { text: '적극적으로 참여하고 배운다', value: 'immersive' },
        { text: '관찰하며 천천히 이해한다', value: 'observant' },
        { text: '체계적으로 정보를 수집하고 분석한다', value: 'analytical' },
        { text: '상황에 따라 적응한다', value: 'adaptive' },
      ],
    },
    {
      question: '실수를 했을 때 당신은?',
      options: [
        { text: '즉시 인정하고 사과한다', value: 'honest' },
        { text: '상대방의 감정을 고려하여 대응한다', value: 'empathetic' },
        { text: '실수의 원인을 분석하고 개선한다', value: 'analytical' },
        { text: '상황에 따라 적절한 대응을 한다', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 기술이나 지식을 배울 때 당신은?',
      options: [
        { text: '적극적으로 질문하고 실습한다', value: 'active' },
        { text: '조용히 관찰하며 배운다', value: 'passive' },
        { text: '체계적으로 학습 계획을 세운다', value: 'systematic' },
        { text: '상황에 따라 다양한 방법을 시도한다', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람의 실수를 지적할 때 당신은?',
      options: [
        { text: '직접적으로 문제점을 지적한다', value: 'direct' },
        { text: '부드럽게 개선점을 제안한다', value: 'gentle' },
        { text: '객관적으로 문제를 분석한다', value: 'analytical' },
        { text: '상대방의 성격에 맞춰 지적한다', value: 'adaptive' },
      ],
    },
    {
      question: '새로운 도전에 직면할 때 당신은?',
      options: [
        { text: '적극적으로 도전을 받아들인다', value: 'bold' },
        { text: '신중하게 준비한 후 도전한다', value: 'cautious' },
        { text: '체계적으로 계획을 세우고 도전한다', value: 'systematic' },
        { text: '상황을 분석한 후 적절히 대응한다', value: 'adaptive' },
      ],
    },
    {
      question: '다른 사람과의 관계에서 당신은?',
      options: [
        { text: '적극적으로 관계를 발전시킨다', value: 'proactive' },
        { text: '자연스럽게 관계가 발전하기를 기다린다', value: 'natural' },
        { text: '관계의 질을 체계적으로 관리한다', value: 'systematic' },
        { text: '상대방과의 관계에 따라 적응한다', value: 'adaptive' },
      ],
    },
    {
      question: '사회적 상황에서 당신의 목표는?',
      options: [
        { text: '적극적으로 영향력을 발휘한다', value: 'influential' },
        { text: '조화로운 관계를 만든다', value: 'harmonious' },
        { text: '효율적인 소통을 추구한다', value: 'efficient' },
        { text: '상황에 맞는 적절한 목표를 설정한다', value: 'adaptive' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 각 유형별 카운트
    const extroverted = answers.filter((a) => a === 'extroverted').length;
    const introverted = answers.filter((a) => a === 'introverted').length;
    const balanced = answers.filter((a) => a === 'balanced').length;
    const adaptive = answers.filter((a) => a === 'adaptive').length;
    // 유형별 점수 합산
    const scores = [
      { type: 'extroverted', score: extroverted },
      { type: 'introverted', score: introverted },
      { type: 'balanced', score: balanced },
      { type: 'adaptive', score: adaptive },
    ];
    const max = scores.reduce((a, b) => (b.score > a.score ? b : a));
    // 결과 매핑(예시)
    const resultMap = {
      extroverted: {
        title: '외향적 사교형',
        description: '사람들과 어울리고 대화를 주도하는 스타일입니다.',
        detailedDescription:
          '새로운 사람들과의 만남을 즐기고, 파티나 모임에서 활발하게 활동합니다. 적극적으로 대화를 시작하고 분위기를 이끌어갑니다.',
        traits: ['외향적', '사교적', '활동적'],
        strengths: ['네트워킹', '분위기 주도'],
        weaknesses: ['혼자 있는 시간 부족', '집중력 저하'],
        goodMatches: ['adaptive', 'balanced'],
        badMatches: ['introverted'],
        goodMatchReasons: [
          '적응형, 균형형과 함께하면 다양한 상황에 잘 어울립니다.',
        ],
        badMatchReasons: ['내향형과는 에너지 소모가 다를 수 있습니다.'],
        recommendations: ['가끔은 혼자만의 시간도 가져보세요.'],
      },
      introverted: {
        title: '내향적 관찰형',
        description: '조용하고 신중하게 관계를 맺는 스타일입니다.',
        detailedDescription:
          '소수의 친한 사람들과 깊은 대화를 나누는 것을 선호합니다. 새로운 환경에서는 관찰하며 적응합니다.',
        traits: ['내향적', '신중함', '관찰력'],
        strengths: ['깊이 있는 관계', '신중한 판단'],
        weaknesses: ['사교성 부족', '적응 시간 필요'],
        goodMatches: ['balanced', 'adaptive'],
        badMatches: ['extroverted'],
        goodMatchReasons: [
          '균형형, 적응형과 함께하면 부담 없이 어울릴 수 있습니다.',
        ],
        badMatchReasons: ['외향형과는 에너지 소모가 다를 수 있습니다.'],
        recommendations: ['가끔은 새로운 사람들과도 어울려보세요.'],
      },
      balanced: {
        title: '균형 잡힌 융합형',
        description:
          '상황에 따라 외향성과 내향성을 조화롭게 발휘하는 스타일입니다.',
        detailedDescription:
          '사람들과 어울릴 때도, 혼자 있을 때도 편안함을 느낍니다. 상황에 따라 유연하게 행동합니다.',
        traits: ['융통성', '적응력', '균형감'],
        strengths: ['상황 적응', '다양한 인간관계'],
        weaknesses: ['정체성 혼란', '우유부단함'],
        goodMatches: ['extroverted', 'introverted', 'adaptive'],
        badMatches: [],
        goodMatchReasons: ['모든 유형과 조화롭게 어울릴 수 있습니다.'],
        badMatchReasons: [],
        recommendations: ['자신만의 중심을 잡는 연습을 해보세요.'],
      },
      adaptive: {
        title: '적응형 유연가',
        description:
          '상황에 따라 행동을 바꾸고, 다양한 환경에 잘 적응하는 스타일입니다.',
        detailedDescription:
          '새로운 환경이나 사람들에게 빠르게 적응하며, 변화에 유연하게 대처합니다.',
        traits: ['적응력', '융통성', '유연함'],
        strengths: ['변화 대응', '다양한 인간관계'],
        weaknesses: ['우유부단함', '정체성 혼란'],
        goodMatches: ['balanced', 'extroverted', 'introverted'],
        badMatches: [],
        goodMatchReasons: ['모든 유형과 조화롭게 어울릴 수 있습니다.'],
        badMatchReasons: [],
        recommendations: ['자신만의 기준을 세워보세요.'],
      },
    };
    return resultMap[max.type] || resultMap['balanced'];
  },
};
