import type { Quiz } from '../../types';

export const creativityStyleQuiz: Quiz = {
  id: 'creativity-style',
  title: '🎨 당신은 어떤 예술가인가요?',
  description:
    '창의성 스타일로 알아보는 당신의 숨겨진 예술가 기질! 어떤 예술가와 가장 닮았을까요?',
  category: '성격',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '새로운 아이디어가 떠올랐을 때 당신의 반응은?',
      options: [
        {
          text: '🎭 "와! 이거 완전 천재적인 아이디어야!" (즉시 실행)',
          value: 'spontaneous',
        },
        {
          text: '🔬 "음... 이 아이디어를 체계적으로 분석해보자" (신중하게 검토)',
          value: 'analytical',
        },
        {
          text: '👥 "친구들이랑 얘기해보고 발전시켜야겠어!" (협력 추구)',
          value: 'collaborative',
        },
        {
          text: '🧩 "기존 아이디어들과 조합하면 완벽할 것 같아!" (조합 창작)',
          value: 'combinational',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 즐거운 순간은?',
      options: [
        {
          text: '✨ 예상치 못한 영감이 번개처럼 떠올랐을 때',
          value: 'inspiration',
        },
        { text: '🏗️ 완벽한 구조를 체계적으로 구축했을 때', value: 'structure' },
        { text: '🎊 팀원들과 함께 창작의 기쁨을 나눴을 때', value: 'team-joy' },
        {
          text: '💎 기존 것들을 융합해서 새로운 보석을 만들었을 때',
          value: 'fusion',
        },
      ],
    },
    {
      question: '창의적 문제를 해결할 때 당신은?',
      options: [
        { text: '🔮 직감의 마법에 의존해서 즉시 해결!', value: 'intuition' },
        { text: '📊 데이터와 논리로 체계적으로 분석!', value: 'data-analysis' },
        {
          text: '🤝 브레인스토밍으로 함께 해결책 찾기!',
          value: 'brainstorming',
        },
        {
          text: '🔄 기존 해결책들을 조합해서 새로운 방법 만들기!',
          value: 'combination',
        },
      ],
    },
    {
      question: '창의적 작업 환경에서 가장 중요한 것은?',
      options: [
        { text: '🌈 자유롭고 제약 없는 창작 공간', value: 'freedom' },
        { text: '📐 체계적이고 정돈된 작업 공간', value: 'organization' },
        { text: '🎪 활발한 소통과 협력이 있는 공간', value: 'communication' },
        { text: '🔬 실험과 혁신이 가능한 공간', value: 'experimentation' },
      ],
    },
    {
      question: '창의적 작업에서 가장 어려워하는 것은?',
      options: [
        { text: '📋 아이디어를 구조화하고 정리하는 것', value: 'structuring' },
        {
          text: '🎨 즉흥적으로 자유롭게 표현하는 것',
          value: 'free-expression',
        },
        { text: '🦅 혼자서 독립적으로 작업하는 것', value: 'solo-work' },
        {
          text: '🚀 완전히 새로운 것을 처음부터 만드는 것',
          value: 'from-scratch',
        },
      ],
    },
    {
      question: '창의적 작업 후 가장 만족스러운 것은?',
      options: [
        { text: '🎭 자유롭게 표현한 예술 작품', value: 'artistic-expression' },
        { text: '🏛️ 완벽하게 구성된 건축물', value: 'perfect-architecture' },
        { text: '🎪 함께 만든 서커스 공연', value: 'circus-performance' },
        { text: '💎 기존 보석들을 융합한 새로운 보석', value: 'fused-gem' },
      ],
    },
    {
      question: '창의적 작업에서 가장 잘하는 것은?',
      options: [
        { text: '🎨 즉흥적이고 자유로운 예술 표현', value: 'free-art' },
        { text: '🏗️ 체계적이고 논리적인 구조 설계', value: 'logical-design' },
        { text: '👥 팀워크를 통한 창의적 협력', value: 'team-creativity' },
        { text: '🧩 기존 요소들의 창의적 조합', value: 'creative-combination' },
      ],
    },
    {
      question: '창의적 작업에서 가장 중요한 가치는?',
      options: [
        { text: '🦋 자유와 표현의 나비', value: 'freedom-butterfly' },
        { text: '⚖️ 구조와 완성도의 저울', value: 'structure-balance' },
        { text: '🤝 협력과 소통의 악수', value: 'collaboration-handshake' },
        { text: '💡 혁신과 독창성의 전구', value: 'innovation-lightbulb' },
      ],
    },
    {
      question: '창의적 작업에서 가장 좋아하는 과정은?',
      options: [
        {
          text: '🎭 자유롭게 떠오르는 영감의 순간들',
          value: 'inspiration-moments',
        },
        { text: '🏗️ 체계적으로 구축하는 건축 과정', value: 'building-process' },
        { text: '🎪 팀원들과 함께하는 창작 파티', value: 'creation-party' },
        { text: '🧩 기존 퍼즐들을 조합하는 과정', value: 'puzzle-combination' },
      ],
    },
    {
      question: '창의적 작업에서 가장 싫어하는 것은?',
      options: [
        {
          text: '📋 아이디어를 체계적으로 정리하는 것',
          value: 'systematic-organization',
        },
        {
          text: '🎨 즉흥적으로 자유롭게 표현하는 것',
          value: 'spontaneous-expression',
        },
        { text: '🦅 혼자서 독립적으로 작업하는 것', value: 'independent-work' },
        {
          text: '📚 기존 방식을 그대로 따르는 것',
          value: 'following-tradition',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 어려운 결정은?',
      options: [
        {
          text: '🎭 자유와 구조 사이의 균형',
          value: 'freedom-structure-balance',
        },
        {
          text: '👥 개인 창작과 팀 창작 사이의 선택',
          value: 'individual-team-choice',
        },
        {
          text: '🔄 전통과 혁신 사이의 선택',
          value: 'tradition-innovation-choice',
        },
        {
          text: '⚡ 즉흥성과 계획성 사이의 선택',
          value: 'spontaneity-planning-choice',
        },
      ],
    },
    {
      question: '창의적 작업에서 성장하고 싶은 방향은?',
      options: [
        {
          text: '🦋 더욱 자유롭고 즉흥적인 나비가 되기',
          value: 'more-free-butterfly',
        },
        {
          text: '🏛️ 더욱 체계적이고 완성도 높은 건축가 되기',
          value: 'more-systematic-architect',
        },
        {
          text: '🎪 더욱 협력적이고 소통하는 서커스 감독 되기',
          value: 'more-collaborative-director',
        },
        {
          text: '💎 더욱 혁신적이고 독창적인 보석공 되기',
          value: 'more-innovative-jeweler',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 중요한 것은?',
      options: [
        {
          text: '🎨 자유로운 표현과 창작의 즐거움',
          value: 'free-expression-joy',
        },
        {
          text: '🏆 완성도와 품질의 우승',
          value: 'completeness-quality-victory',
        },
        {
          text: '🤝 협력과 성장의 파트너십',
          value: 'collaboration-growth-partnership',
        },
        {
          text: '🚀 혁신과 발전의 로켓',
          value: 'innovation-development-rocket',
        },
      ],
    },
    {
      question: '창의적 작업에서 가장 잘하는 전략은?',
      options: [
        { text: '🎭 즉흥적이고 자유로운 연극', value: 'spontaneous-theater' },
        {
          text: '🏗️ 체계적이고 논리적인 건축',
          value: 'systematic-architecture',
        },
        {
          text: '🎪 협력적이고 소통하는 서커스',
          value: 'collaborative-circus',
        },
        {
          text: '💎 혁신적이고 독창적인 보석 제작',
          value: 'innovative-jewelry',
        },
      ],
    },
    {
      question: '이상적인 창의적 작업은?',
      options: [
        { text: '🎨 자유롭고 제약 없는 예술 작품', value: 'free-artwork' },
        { text: '🏛️ 체계적이고 완벽한 건축물', value: 'perfect-building' },
        {
          text: '🎪 협력과 소통이 가득한 공연',
          value: 'collaborative-performance',
        },
        { text: '💎 기존 보석들을 융합한 새로운 보석', value: 'fused-jewelry' },
      ],
    },
  ],
  resultMapping: (answers) => {
    const spontaneousCount = answers.filter((a) =>
      [
        'spontaneous',
        'inspiration',
        'intuition',
        'freedom',
        'free-expression',
        'artistic-expression',
        'free-art',
        'freedom-butterfly',
        'inspiration-moments',
        'spontaneous-expression',
        'freedom-structure-balance',
        'more-free-butterfly',
        'free-expression-joy',
        'spontaneous-theater',
        'free-artwork',
      ].includes(a)
    ).length;

    const analyticalCount = answers.filter((a) =>
      [
        'analytical',
        'structure',
        'data-analysis',
        'organization',
        'structuring',
        'perfect-architecture',
        'logical-design',
        'structure-balance',
        'building-process',
        'systematic-organization',
        'individual-team-choice',
        'more-systematic-architect',
        'completeness-quality-victory',
        'systematic-architecture',
        'perfect-building',
      ].includes(a)
    ).length;

    const collaborativeCount = answers.filter((a) =>
      [
        'collaborative',
        'team-joy',
        'brainstorming',
        'communication',
        'solo-work',
        'circus-performance',
        'team-creativity',
        'collaboration-handshake',
        'creation-party',
        'independent-work',
        'tradition-innovation-choice',
        'more-collaborative-director',
        'collaboration-growth-partnership',
        'collaborative-circus',
        'collaborative-performance',
      ].includes(a)
    ).length;

    const combinationalCount = answers.filter((a) =>
      [
        'combinational',
        'fusion',
        'combination',
        'experimentation',
        'from-scratch',
        'fused-gem',
        'creative-combination',
        'innovation-lightbulb',
        'puzzle-combination',
        'following-tradition',
        'spontaneity-planning-choice',
        'more-innovative-jeweler',
        'innovation-development-rocket',
        'innovative-jewelry',
        'fused-jewelry',
      ].includes(a)
    ).length;

    const scores = [
      { type: 'spontaneous', score: spontaneousCount },
      { type: 'analytical', score: analyticalCount },
      { type: 'collaborative', score: collaborativeCount },
      { type: 'combinational', score: combinationalCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      spontaneous: {
        title: '🎭 자유로운 연극인 같은 즉흥가',
        description:
          '당신은 자유로운 연극인처럼 즉흥적이고 창의적인 성격의 소유자입니다!',
        detailedDescription: `당신은 자유로운 연극인처럼 즉흥적이고 창의적인 성격을 가지고 있어요. 새로운 아이디어가 떠오르면 바로 무대(실행)에 올리고, 틀에 얽매이지 않는 자유로운 표현을 추구하는 예술가입니다.

자유로운 연극인처럼 예상치 못한 영감이 번개처럼 떠올랐을 때 가장 행복해하고, 자유롭고 제약 없는 창작 공간에서 최고의 작품을 만들어내요. 직감의 마법에 의존해서 즉시 문제를 해결하는 능력도 뛰어나고, 창의적 발상과 유연성이 특기예요.

하지만 자유로운 연극인도 너무 즉흥적이면 공연이 산만해질 수 있듯이, 당신도 때로는 일관성이나 계획성이 부족할 수 있어요. 가끔은 자유로운 연극에도 기본 대본(계획)이 필요하다는 걸 잊지 마세요!`,
        traits: ['즉흥적', '자유로움', '창의적', '직감적', '유연함'],
        strengths: ['창의적 발상', '유연성', '즉흥성', '자유로운 표현', '영감'],
        weaknesses: [
          '일관성 부족',
          '계획 부족',
          '구조화 부족',
          '완성도 부족',
          '산만함',
        ],
        goodMatches: [
          '🎪 협력하는 서커스단 같은 협업가',
          '💎 혁신적인 보석공 같은 조합가',
        ],
        badMatches: ['🏗️ 체계적인 건축가 같은 분석가'],
        goodMatchReasons: [
          '🎪 협력하는 서커스단 같은 협업가: 당신의 즉흥성이 상대방의 협력과 조화를 이룰 수 있어요',
          '💎 혁신적인 보석공 같은 조합가: 함께 자유롭고 창의적인 작품을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🏗️ 체계적인 건축가 같은 분석가: 너무 체계적이고 분석적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '기본 계획도 세워보세요',
          '일관성을 기르세요',
          '구조화 능력을 개발하세요',
          '완성도를 높여보세요',
        ],
      },
      analytical: {
        title: '🏗️ 체계적인 건축가 같은 분석가',
        description:
          '당신은 체계적인 건축가처럼 논리적이고 체계적인 성격의 소유자입니다!',
        detailedDescription: `당신은 체계적인 건축가처럼 논리적이고 체계적인 성격을 가지고 있어요. 아이디어를 분석하고, 구조화하여 완성도 높은 결과물을 만드는 건축가입니다.

체계적인 건축가처럼 완벽한 구조를 체계적으로 구축했을 때 가장 만족스러워하고, 체계적이고 정돈된 작업 공간에서 최고의 작품을 만들어내요. 논리적 사고와 분석 능력이 뛰어나고, 완성도와 품질을 중요하게 생각하는 성격이에요.

하지만 체계적인 건축가도 너무 딱딱하면 창의성이 부족할 수 있듯이, 당신도 때로는 융통성이나 즉흥성이 부족할 수 있어요. 가끔은 체계적인 건축물에도 예술적 요소(창의성)가 필요하다는 걸 잊지 마세요!`,
        traits: ['논리적', '체계적', '분석적', '완벽주의적', '신중함'],
        strengths: ['완성도', '분석적 사고', '체계성', '논리성', '품질'],
        weaknesses: [
          '융통성 부족',
          '즉흥성 부족',
          '창의성 부족',
          '유연성 부족',
          '딱딱함',
        ],
        goodMatches: [
          '💎 혁신적인 보석공 같은 조합가',
          '🎪 협력하는 서커스단 같은 협업가',
        ],
        badMatches: ['🎭 자유로운 연극인 같은 즉흥가'],
        goodMatchReasons: [
          '💎 혁신적인 보석공 같은 조합가: 당신의 체계성이 상대방의 창의성과 조화를 이룰 수 있어요',
          '🎪 협력하는 서커스단 같은 협업가: 함께 완성도 높고 협력적인 작품을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🎭 자유로운 연극인 같은 즉흥가: 너무 즉흥적이고 자유로운 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 즉흥적으로 시도해보세요',
          '창의성을 기르세요',
          '유연성을 개발하세요',
          '융통성을 높여보세요',
        ],
      },
      collaborative: {
        title: '🎪 협력하는 서커스단 같은 협업가',
        description:
          '당신은 협력하는 서커스단처럼 팀워크와 소통을 중시하는 성격의 소유자입니다!',
        detailedDescription: `당신은 협력하는 서커스단처럼 팀워크와 소통을 중시하는 성격을 가지고 있어요. 다른 사람들과 함께 아이디어를 발전시키고, 창의적인 결과물을 만드는 협업가입니다.

협력하는 서커스단처럼 팀원들과 함께 창작의 기쁨을 나눴을 때 가장 행복해하고, 활발한 소통과 협력이 있는 공간에서 최고의 공연을 만들어내요. 다양한 관점을 수용하고, 협력적 결과를 만들어내는 능력이 뛰어나고, 소통과 팀워크를 중요하게 생각하는 성격이에요.

하지만 협력하는 서커스단도 너무 의존적이면 독립성이 부족할 수 있듯이, 당신도 때로는 의존성이나 결정 지연이 있을 수 있어요. 가끔은 협력하는 서커스단도 솔로 공연(독립적 작업)이 필요하다는 걸 잊지 마세요!`,
        traits: ['협력적', '소통적', '팀워크', '포용적', '사회적'],
        strengths: [
          '다양한 관점',
          '협력적 결과',
          '소통 능력',
          '팀워크',
          '포용성',
        ],
        weaknesses: [
          '의존성',
          '결정 지연',
          '독립성 부족',
          '개인주의 부족',
          '비효율성',
        ],
        goodMatches: [
          '🎭 자유로운 연극인 같은 즉흥가',
          '🏗️ 체계적인 건축가 같은 분석가',
        ],
        badMatches: ['💎 혁신적인 보석공 같은 조합가'],
        goodMatchReasons: [
          '🎭 자유로운 연극인 같은 즉흥가: 당신의 협력성이 상대방의 즉흥성과 조화를 이룰 수 있어요',
          '🏗️ 체계적인 건축가 같은 분석가: 함께 체계적이고 협력적인 작품을 만들 수 있어요',
        ],
        badMatchReasons: [
          '💎 혁신적인 보석공 같은 조합가: 너무 개인적이고 독립적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '독립적으로 아이디어를 내는 연습도 해보세요',
          '개인주의도 기르세요',
          '의존성을 줄여보세요',
          '결정력을 높여보세요',
        ],
      },
      combinational: {
        title: '💎 혁신적인 보석공 같은 조합가',
        description:
          '당신은 혁신적인 보석공처럼 기존 요소들을 창의적으로 조합하는 성격의 소유자입니다!',
        detailedDescription: `당신은 혁신적인 보석공처럼 기존 아이디어를 조합하여 새로운 것을 만드는 성격을 가지고 있어요. 여러 요소를 융합하여 독창적인 결과물을 만들어내는 조합가입니다.

혁신적인 보석공처럼 기존 보석들을 융합해서 새로운 보석을 만들었을 때 가장 만족스러워하고, 실험과 혁신이 가능한 공간에서 최고의 작품을 만들어내요. 응용력과 독창성이 뛰어나고, 기존 요소들을 창의적으로 조합하는 능력이 특기예요.

하지만 혁신적인 보석공도 너무 기존에 의존하면 새로움이 부족할 수 있듯이, 당신도 때로는 완전히 새로운 것을 처음부터 만드는 능력이 부족할 수 있어요. 가끔은 혁신적인 보석공도 새로운 원석(완전히 새로운 아이디어)을 발견해보는 것도 좋을 것 같아요!`,
        traits: ['융합적', '독창적', '응용력', '혁신적', '조합적'],
        strengths: ['응용력', '독창성', '융합 능력', '혁신성', '조합 능력'],
        weaknesses: [
          '새로움 부족',
          '의존성',
          '독립성 부족',
          '창의성 부족',
          '보수적',
        ],
        goodMatches: [
          '🏗️ 체계적인 건축가 같은 분석가',
          '🎭 자유로운 연극인 같은 즉흥가',
        ],
        badMatches: ['🎪 협력하는 서커스단 같은 협업가'],
        goodMatchReasons: [
          '🏗️ 체계적인 건축가 같은 분석가: 당신의 조합 능력이 상대방의 체계성과 조화를 이룰 수 있어요',
          '🎭 자유로운 연극인 같은 즉흥가: 함께 창의적이고 혁신적인 작품을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🎪 협력하는 서커스단 같은 협업가: 너무 협력적이고 사회적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '독립적으로 창작하는 연습도 해보세요',
          '완전히 새로운 아이디어를 개발해보세요',
          '의존성을 줄여보세요',
          '창의성을 높여보세요',
        ],
      },
    };

    return (
      results[maxScore.type as keyof typeof results] || results.spontaneous
    );
  },
};
