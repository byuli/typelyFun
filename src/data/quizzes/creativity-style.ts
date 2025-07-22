import type { Quiz } from '../../types';

export const creativityStyleQuiz: Quiz = {
  id: 'creativity-style',
  title: '창의성 스타일 테스트',
  description: '당신의 창의성 스타일을 알아보고 창의적 잠재력을 개발해보세요',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 아이디어를 떠올릴 때 당신은?',
      options: [
        {
          text: '즉흥적으로 떠오르는 아이디어를 받아들인다',
          value: 'spontaneous',
        },
        { text: '체계적으로 분석하고 발전시킨다', value: 'systematic' },
        {
          text: '다른 사람과의 대화에서 영감을 얻는다',
          value: 'collaborative',
        },
        {
          text: '기존 아이디어를 조합하여 새로운 것을 만든다',
          value: 'combinational',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '자유로운 표현과 즉흥성', value: 'freedom' },
        { text: '논리적 구조와 완성도', value: 'logic' },
        { text: '협력과 소통', value: 'collaboration' },
        { text: '혁신과 독창성', value: 'innovation' },
      ],
    },
    {
      question: '창의적 문제 해결에서 당신은?',
      options: [
        { text: '직감에 따라 즉시 해결책을 찾는다', value: 'intuitive' },
        { text: '체계적으로 분석하여 해결책을 찾는다', value: 'analytical' },
        { text: '다른 사람과 함께 해결책을 찾는다', value: 'team-based' },
        { text: '새로운 관점에서 접근한다', value: 'perspective' },
      ],
    },
    {
      question: '창의적 작업에서 가장 만족스러운 순간은?',
      options: [
        {
          text: '예상치 못한 아이디어가 떠올랐을 때',
          value: 'unexpected-idea',
        },
        { text: '완벽한 구조를 만들었을 때', value: 'perfect-structure' },
        {
          text: '함께 창작한 결과물을 완성했을 때',
          value: 'collaborative-result',
        },
        { text: '혁신적인 해결책을 발견했을 때', value: 'innovative-solution' },
      ],
    },
    {
      question: '창의적 작업에서 가장 어려워하는 것은?',
      options: [
        { text: '구조화하고 정리하는 것', value: 'structuring' },
        { text: '즉흥적으로 표현하는 것', value: 'spontaneous-expression' },
        { text: '혼자서 작업하는 것', value: 'solo-work' },
        { text: '기존 방식을 벗어나는 것', value: 'breaking-tradition' },
      ],
    },
    {
      question: '창의성 스타일을 한 마디로 표현하면?',
      options: [
        { text: '즉흥적이고 자유로운 창작', value: 'spontaneous-free' },
        { text: '체계적이고 논리적인 창작', value: 'systematic-logical' },
        {
          text: '협력적이고 소통하는 창작',
          value: 'collaborative-communicative',
        },
        { text: '혁신적이고 독창적인 창작', value: 'innovative-original' },
      ],
    },
    {
      question: '창의적 작업에서 가장 중요한 가치는?',
      options: [
        { text: '자유와 표현', value: 'freedom-expression' },
        { text: '구조와 완성도', value: 'structure-completeness' },
        { text: '협력과 소통', value: 'collaboration-communication' },
        { text: '혁신과 독창성', value: 'innovation-originality' },
      ],
    },
    {
      question: '창의적 작업 후 가장 좋아지는 것은?',
      options: [
        { text: '자유롭게 표현했을 때', value: 'free-expression' },
        { text: '완벽한 결과물을 만들었을 때', value: 'perfect-result' },
        { text: '함께 창작했을 때', value: 'collaborative-creation' },
        { text: '새로운 것을 발견했을 때', value: 'new-discovery' },
      ],
    },
    {
      question: '창의적 작업에서 가장 어려운 결정은?',
      options: [
        { text: '자유와 구조 사이의 균형', value: 'freedom-structure' },
        {
          text: '개인 창작과 협력 창작 사이의 선택',
          value: 'individual-collaborative',
        },
        { text: '전통과 혁신 사이의 선택', value: 'tradition-innovation' },
        { text: '즉흥성과 계획성 사이의 선택', value: 'spontaneity-planning' },
      ],
    },
    {
      question: '창의적 작업에서 가장 잘하는 것은?',
      options: [
        {
          text: '즉흥적이고 자유로운 표현',
          value: 'spontaneous-free-expression',
        },
        {
          text: '체계적이고 논리적인 구성',
          value: 'systematic-logical-composition',
        },
        { text: '다른 사람과의 창의적 협력', value: 'creative-collaboration' },
        {
          text: '혁신적이고 독창적인 접근',
          value: 'innovative-original-approach',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 만족스러운 것은?',
      options: [
        { text: '자유롭게 표현한 결과물', value: 'freely-expressed-result' },
        { text: '완벽하게 구성된 작품', value: 'perfectly-composed-work' },
        { text: '함께 만든 창작물', value: 'collaboratively-created-work' },
        { text: '혁신적인 창작물', value: 'innovative-creation' },
      ],
    },
    {
      question: '창의적 작업에서 가장 중요한 것은?',
      options: [
        {
          text: '자유로운 표현과 즉흥성',
          value: 'free-expression-spontaneity',
        },
        {
          text: '논리적 구조와 완성도',
          value: 'logical-structure-completeness',
        },
        { text: '협력과 소통', value: 'collaboration-communication' },
        { text: '혁신과 독창성', value: 'innovation-originality' },
      ],
    },
    {
      question: '창의적 작업에서 가장 어려운 것은?',
      options: [
        { text: '구조화하고 정리하는 것', value: 'structuring-organizing' },
        { text: '즉흥적으로 표현하는 것', value: 'spontaneous-expression' },
        { text: '혼자서 작업하는 것', value: 'working-alone' },
        { text: '기존 방식을 벗어나는 것', value: 'breaking-existing-methods' },
      ],
    },
    {
      question: '이상적인 창의적 작업 환경은?',
      options: [
        {
          text: '자유롭고 제약이 없는 환경',
          value: 'free-unconstrained-environment',
        },
        {
          text: '체계적이고 정돈된 환경',
          value: 'systematic-organized-environment',
        },
        {
          text: '협력과 소통이 활발한 환경',
          value: 'collaborative-communicative-environment',
        },
        {
          text: '혁신과 실험이 가능한 환경',
          value: 'innovative-experimental-environment',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 좋아하는 것은?',
      options: [
        { text: '자유롭게 떠오르는 아이디어', value: 'freely-arising-ideas' },
        {
          text: '체계적으로 구성하는 과정',
          value: 'systematic-composition-process',
        },
        { text: '다른 사람과의 창의적 대화', value: 'creative-conversation' },
        { text: '새로운 방법을 발견하는 것', value: 'discovering-new-methods' },
      ],
    },
    {
      question: '창의적 작업에서 가장 싫어하는 것은?',
      options: [
        { text: '구조화하고 정리하는 것', value: 'structuring-organizing' },
        { text: '즉흥적으로 표현하는 것', value: 'spontaneous-expression' },
        { text: '혼자서 작업하는 것', value: 'working-alone' },
        { text: '기존 방식을 따르는 것', value: 'following-existing-methods' },
      ],
    },
    {
      question: '창의적 작업에서 가장 잘하는 전략은?',
      options: [
        {
          text: '즉흥적이고 자유로운 접근',
          value: 'spontaneous-free-approach',
        },
        {
          text: '체계적이고 논리적인 접근',
          value: 'systematic-logical-approach',
        },
        {
          text: '협력적이고 소통하는 접근',
          value: 'collaborative-communicative-approach',
        },
        {
          text: '혁신적이고 독창적인 접근',
          value: 'innovative-original-approach',
        },
      ],
    },
    {
      question: '창의적 작업에서 성장하고 싶은 방향은?',
      options: [
        { text: '더욱 자유롭고 즉흥적인 창작', value: 'more-free-spontaneous' },
        {
          text: '더욱 체계적이고 완성도 높은 창작',
          value: 'more-systematic-complete',
        },
        {
          text: '더욱 협력적이고 소통하는 창작',
          value: 'more-collaborative-communicative',
        },
        {
          text: '더욱 혁신적이고 독창적인 창작',
          value: 'more-innovative-original',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 중요한 것은?',
      options: [
        { text: '자유로운 표현과 즐거움', value: 'free-expression-enjoyment' },
        { text: '완성도와 품질', value: 'completeness-quality' },
        { text: '협력과 성장', value: 'collaboration-growth' },
        { text: '혁신과 발전', value: 'innovation-development' },
      ],
    },
  ],
  resultMapping: (answers) => {
    const spontaneous = answers.filter((a) => a === 'spontaneous').length;
    const systematic = answers.filter((a) => a === 'systematic').length;
    const collaborative = answers.filter((a) => a === 'collaborative').length;
    const combinational = answers.filter((a) => a === 'combinational').length;
    const scores = [
      { type: 'spontaneous', score: spontaneous },
      { type: 'systematic', score: systematic },
      { type: 'collaborative', score: collaborative },
      { type: 'combinational', score: combinational },
    ];
    const max = scores.reduce((a, b) => (b.score > a.score ? b : a));
    const resultMap = {
      spontaneous: {
        title: '즉흥적 창작형',
        description:
          '즉흥적으로 아이디어를 내고 자유롭게 표현하는 스타일입니다.',
        detailedDescription:
          '새로운 아이디어가 떠오르면 바로 실행에 옮기고, 틀에 얽매이지 않습니다.',
        traits: ['즉흥성', '자유로움', '창의성'],
        strengths: ['창의적 발상', '유연성'],
        weaknesses: ['일관성 부족', '계획 부족'],
        goodMatches: ['collaborative', 'combinational'],
        badMatches: ['systematic'],
        goodMatchReasons: [
          '협업형, 조합형과 함께하면 다양한 창작이 가능합니다.',
        ],
        badMatchReasons: [
          '체계형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['기본 계획도 세워보세요.'],
      },
      systematic: {
        title: '체계적 창작형',
        description:
          '논리적이고 체계적으로 아이디어를 발전시키는 스타일입니다.',
        detailedDescription:
          '아이디어를 분석하고, 구조화하여 완성도 높은 결과물을 만듭니다.',
        traits: ['논리성', '체계성', '분석력'],
        strengths: ['완성도', '분석적 사고'],
        weaknesses: ['융통성 부족', '즉흥성 부족'],
        goodMatches: ['combinational', 'collaborative'],
        badMatches: ['spontaneous'],
        goodMatchReasons: [
          '조합형, 협업형과 함께하면 완성도와 창의성을 동시에 얻을 수 있습니다.',
        ],
        badMatchReasons: [
          '즉흥형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['가끔은 즉흥적으로 시도해보세요.'],
      },
      collaborative: {
        title: '협업 창작형',
        description: '다른 사람들과 함께 아이디어를 발전시키는 스타일입니다.',
        detailedDescription: '팀워크와 소통을 통해 창의적인 결과물을 만듭니다.',
        traits: ['협력', '소통', '팀워크'],
        strengths: ['다양한 관점', '협력적 결과'],
        weaknesses: ['의존성', '결정 지연'],
        goodMatches: ['spontaneous', 'systematic'],
        badMatches: ['combinational'],
        goodMatchReasons: [
          '즉흥형, 체계형과 함께하면 다양한 창작이 가능합니다.',
        ],
        badMatchReasons: [
          '조합형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['독립적으로 아이디어를 내는 연습도 해보세요.'],
      },
      combinational: {
        title: '조합 창작형',
        description:
          '기존 아이디어를 조합하여 새로운 것을 만드는 스타일입니다.',
        detailedDescription:
          '여러 아이디어를 융합하여 독창적인 결과물을 만듭니다.',
        traits: ['융합', '독창성', '응용력'],
        strengths: ['응용력', '독창성'],
        weaknesses: ['새로움 부족', '의존성'],
        goodMatches: ['systematic', 'spontaneous'],
        badMatches: ['collaborative'],
        goodMatchReasons: [
          '체계형, 즉흥형과 함께하면 완성도와 창의성을 동시에 얻을 수 있습니다.',
        ],
        badMatchReasons: [
          '협업형과는 접근 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['독립적으로 창작하는 연습도 해보세요.'],
      },
    };
    return resultMap[max.type] || resultMap['spontaneous'];
  },
};
