import type { Quiz } from '../../types';

export const learningStyleQuiz: Quiz = {
  id: 'learning-style',
  title: '학습 스타일 테스트',
  description: '당신의 학습 스타일을 알아보고 효과적인 학습 방법을 찾아보세요',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 것을 배울 때 선호하는 방법은?',
      options: [
        { text: '직접 경험하고 실습한다', value: 'hands-on' },
        { text: '이론을 먼저 이해한다', value: 'theoretical' },
        { text: '다른 사람과 함께 학습한다', value: 'collaborative' },
        { text: '시각적 자료를 통해 학습한다', value: 'visual' },
      ],
    },
    {
      question: '학습할 때 가장 집중하는 것은?',
      options: [
        { text: '실제 적용과 결과', value: 'application' },
        { text: '개념과 원리', value: 'concepts' },
        { text: '토론과 상호작용', value: 'discussion' },
        { text: '이미지와 다이어그램', value: 'images' },
      ],
    },
    {
      question: '학습에서 가장 만족스러운 순간은?',
      options: [
        { text: '실제로 성공했을 때', value: 'success' },
        { text: '이해가 되었을 때', value: 'understanding' },
        { text: '다른 사람과 공유했을 때', value: 'sharing' },
        { text: '패턴을 발견했을 때', value: 'pattern' },
      ],
    },
    {
      question: '학습할 때 선호하는 환경은?',
      options: [
        { text: '활동적이고 실습할 수 있는 공간', value: 'active' },
        { text: '조용하고 집중할 수 있는 공간', value: 'quiet' },
        { text: '사람들과 함께할 수 있는 공간', value: 'social' },
        { text: '시각적 자료가 풍부한 공간', value: 'visual-rich' },
      ],
    },
    {
      question: '학습에서 가장 어려워하는 것은?',
      options: [
        {
          text: '이론적 설명을 이해하는 것',
          value: 'theoretical-understanding',
        },
        { text: '실제 적용하는 것', value: 'practical-application' },
        { text: '다른 사람과 협력하는 것', value: 'collaboration' },
        { text: '시각적 정보를 처리하는 것', value: 'visual-processing' },
      ],
    },
    {
      question: '학습 자료를 선택할 때?',
      options: [
        { text: '실습과 실험이 포함된 자료', value: 'practical' },
        { text: '체계적이고 논리적인 자료', value: 'systematic' },
        { text: '토론과 상호작용이 가능한 자료', value: 'interactive' },
        { text: '그림과 차트가 많은 자료', value: 'illustrated' },
      ],
    },
    {
      question: '학습 스타일을 한 마디로 표현하면?',
      options: [
        { text: '실습적이고 경험적인 학습', value: 'experiential' },
        { text: '이론적이고 분석적인 학습', value: 'analytical' },
        { text: '사회적이고 협력적인 학습', value: 'social' },
        { text: '시각적이고 직관적인 학습', value: 'intuitive' },
      ],
    },
    {
      question: '학습에서 가장 중요한 가치는?',
      options: [
        { text: '실용성과 적용', value: 'practicality' },
        { text: '이해와 깊이', value: 'depth' },
        { text: '협력과 공유', value: 'collaboration' },
        { text: '직관과 창의성', value: 'creativity' },
      ],
    },
    {
      question: '학습 후 가장 좋아지는 것은?',
      options: [
        { text: '실제로 활용할 수 있게 되었을 때', value: 'usable' },
        { text: '깊이 있게 이해했을 때', value: 'deep-understanding' },
        { text: '다른 사람에게 가르칠 수 있을 때', value: 'teachable' },
        { text: '새로운 아이디어가 떠올랐을 때', value: 'new-ideas' },
      ],
    },
    {
      question: '학습에서 가장 어려운 결정은?',
      options: [
        { text: '이론과 실습 사이의 균형', value: 'theory-practice' },
        {
          text: '개인 학습과 협력 학습 사이의 선택',
          value: 'individual-collaborative',
        },
        {
          text: '체계적 접근과 직관적 접근 사이의 선택',
          value: 'systematic-intuitive',
        },
        { text: '속도와 깊이 사이의 선택', value: 'speed-depth' },
      ],
    },
    {
      question: '학습에서 가장 잘하는 것은?',
      options: [
        { text: '실제 문제를 해결하는 것', value: 'problem-solving' },
        { text: '복잡한 개념을 분석하는 것', value: 'concept-analysis' },
        { text: '다른 사람과 지식을 공유하는 것', value: 'knowledge-sharing' },
        { text: '새로운 연결을 발견하는 것', value: 'connection-discovery' },
      ],
    },
    {
      question: '학습에서 가장 만족스러운 것은?',
      options: [
        { text: '실제 성과를 달성했을 때', value: 'achievement' },
        { text: '완전히 이해했을 때', value: 'complete-understanding' },
        { text: '함께 성장했을 때', value: 'growth-together' },
        { text: '창의적 통찰을 얻었을 때', value: 'creative-insight' },
      ],
    },
    {
      question: '학습에서 가장 중요한 것은?',
      options: [
        { text: '실용적 적용', value: 'practical-application' },
        { text: '깊이 있는 이해', value: 'deep-understanding' },
        { text: '협력과 소통', value: 'collaboration-communication' },
        { text: '창의적 사고', value: 'creative-thinking' },
      ],
    },
    {
      question: '학습에서 가장 어려운 것은?',
      options: [
        { text: '이론을 실제에 적용하는 것', value: 'theory-application' },
        { text: '실습을 통해 이론을 이해하는 것', value: 'practice-theory' },
        { text: '혼자서 학습하는 것', value: 'solo-learning' },
        { text: '논리적 순서로 정리하는 것', value: 'logical-organization' },
      ],
    },
    {
      question: '이상적인 학습 환경은?',
      options: [
        { text: '실습과 실험이 가능한 환경', value: 'hands-on-environment' },
        { text: '조용하고 집중할 수 있는 환경', value: 'focused-environment' },
        {
          text: '협력과 토론이 활발한 환경',
          value: 'collaborative-environment',
        },
        { text: '시각적 자료가 풍부한 환경', value: 'visual-environment' },
      ],
    },
    {
      question: '학습에서 가장 좋아하는 것은?',
      options: [
        { text: '실제로 해보고 결과를 확인하는 것', value: 'trial-and-result' },
        {
          text: '이론을 체계적으로 정리하는 것',
          value: 'systematic-organization',
        },
        { text: '다른 사람과 의견을 나누는 것', value: 'opinion-exchange' },
        { text: '새로운 관점을 발견하는 것', value: 'new-perspective' },
      ],
    },
    {
      question: '학습에서 가장 싫어하는 것은?',
      options: [
        { text: '이론만 있고 실습이 없는 것', value: 'theory-only' },
        { text: '실습만 있고 이론이 없는 것', value: 'practice-only' },
        { text: '혼자서만 학습하는 것', value: 'solo-only' },
        { text: '지루하고 단조로운 학습', value: 'boring-learning' },
      ],
    },
    {
      question: '학습에서 가장 잘하는 전략은?',
      options: [
        { text: '실습을 통한 경험적 학습', value: 'experiential-strategy' },
        { text: '이론을 통한 분석적 학습', value: 'analytical-strategy' },
        { text: '협력을 통한 사회적 학습', value: 'social-strategy' },
        { text: '시각화를 통한 직관적 학습', value: 'intuitive-strategy' },
      ],
    },
    {
      question: '학습에서 성장하고 싶은 방향은?',
      options: [
        { text: '더욱 실용적이고 적용 가능한 학습', value: 'more-practical' },
        { text: '더욱 깊이 있고 체계적인 학습', value: 'more-systematic' },
        { text: '더욱 협력적이고 소통하는 학습', value: 'more-collaborative' },
        { text: '더욱 창의적이고 직관적인 학습', value: 'more-creative' },
      ],
    },
    {
      question: '학습에서 가장 중요한 것은?',
      options: [
        { text: '실제 활용과 성과', value: 'practical-use' },
        { text: '이해와 깊이', value: 'understanding-depth' },
        { text: '협력과 성장', value: 'collaboration-growth' },
        { text: '창의성과 혁신', value: 'creativity-innovation' },
      ],
    },
  ],
  results: {
    'practical-learner': {
      title: '실습적 학습자형',
      description:
        '당신은 실습과 경험을 통한 학습을 선호하는 타입입니다. 직접 경험하고 실습하는 것을 중요하게 생각하며, 실제 적용 가능한 지식을 추구합니다. 활동적이고 실험적인 학습 환경을 선호하며, 결과를 통해 학습합니다.',
      characteristics: [
        '실습과 경험을 통한 학습 선호',
        '직접 경험하고 실습하는 것 중시',
        '실제 적용 가능한 지식 추구',
        '활동적이고 실험적인 학습 환경',
      ],
    },
    'theoretical-learner': {
      title: '이론적 학습자형',
      description:
        '당신은 이론과 개념을 통한 학습을 선호하는 타입입니다. 체계적이고 논리적인 접근을 중요하게 생각하며, 깊이 있는 이해를 추구합니다. 조용하고 집중할 수 있는 환경을 선호하며, 분석적 사고를 통해 학습합니다.',
      characteristics: [
        '이론과 개념을 통한 학습 선호',
        '체계적이고 논리적인 접근',
        '깊이 있는 이해 추구',
        '조용하고 집중할 수 있는 환경',
      ],
    },
    'social-learner': {
      title: '사회적 학습자형',
      description:
        '당신은 협력과 소통을 통한 학습을 선호하는 타입입니다. 다른 사람과 함께 학습하는 것을 중요하게 생각하며, 토론과 상호작용을 통해 지식을 습득합니다. 사회적이고 협력적인 환경을 선호하며, 공유를 통해 성장합니다.',
      characteristics: [
        '협력과 소통을 통한 학습 선호',
        '다른 사람과 함께 학습하는 것 중시',
        '토론과 상호작용을 통한 지식 습득',
        '사회적이고 협력적인 환경',
      ],
    },
    'visual-learner': {
      title: '시각적 학습자형',
      description:
        '당신은 시각적 자료를 통한 학습을 선호하는 타입입니다. 이미지, 다이어그램, 차트를 중요하게 생각하며, 직관적이고 창의적인 접근을 합니다. 시각적 자료가 풍부한 환경을 선호하며, 패턴과 연결을 통해 학습합니다.',
      characteristics: [
        '시각적 자료를 통한 학습 선호',
        '이미지, 다이어그램, 차트 중시',
        '직관적이고 창의적인 접근',
        '시각적 자료가 풍부한 환경',
      ],
    },
  },
};
