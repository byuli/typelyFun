import type { Quiz } from '../../types';

export const shoppingStyleQuiz: Quiz = {
  id: 'shopping-style',
  title: '🛍️ 당신은 어떤 쇼핑러인가요?',
  description:
    '쇼핑 스타일로 알아보는 당신의 숨겨진 성격! 어떤 쇼핑러와 가장 닮았을까요?',
  category: '라이프스타일',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '쇼핑을 시작할 때 당신의 스타일은?',
      options: [
        { text: '📋 "미리 목록 작성하고 계획적으로 쇼핑!"', value: 'planner' },
        {
          text: '🎯 "오늘은 어디 갈까? 갑자기 떠오른 곳으로!"',
          value: 'impulsive',
        },
        { text: '👥 "친구들이랑 같이 가는 게 제일 재밌어!"', value: 'social' },
        {
          text: '🔍 "온라인 리뷰 100개 읽고 가격 비교 완료!"',
          value: 'researcher',
        },
      ],
    },
    {
      question: '쇼핑에서 가장 중요한 것은?',
      options: [
        { text: '💰 가격과 가성비의 승리!', value: 'price' },
        { text: '🏆 품질과 브랜드의 우수함', value: 'quality' },
        { text: '✨ 디자인과 스타일의 완벽함', value: 'design' },
        { text: '⚡ 편의성과 실용성의 효율', value: 'convenience' },
      ],
    },
    {
      question: '쇼핑할 때 당신의 행동은?',
      options: [
        {
          text: '🏃‍♀️ "여러 매장 돌아다니며 최고의 가격 찾기!"',
          value: 'comparison',
        },
        { text: '💫 "첫인상에 반한 것 바로 구매!"', value: 'first-impression' },
        { text: '👂 "다른 사람 의견 꼭 들어보고 결정!"', value: 'opinion' },
        { text: '📊 "리뷰와 평가 꼼꼼히 분석!"', value: 'review' },
      ],
    },
    {
      question: '쇼핑에서 가장 만족스러운 순간은?',
      options: [
        { text: '🎉 "와! 70% 할인 발견! 대박!"', value: 'discount' },
        { text: '🏆 "드디어 원하는 브랜드 제품 구매!"', value: 'brand' },
        { text: '💖 "너무 예쁜 디자인! 완전 내 스타일!"', value: 'beautiful' },
        { text: '✅ "실용적이고 유용한 제품! 만족!"', value: 'useful' },
      ],
    },
    {
      question: '쇼핑에서 가장 어려워하는 것은?',
      options: [
        { text: '😰 가격 비교와 선택의 고민', value: 'choice' },
        { text: '⚖️ 품질과 가격의 균형 맞추기', value: 'balance' },
        { text: '🤔 다른 사람 의견과 내 취향 사이', value: 'preference' },
        { text: '😤 실용성과 디자인의 선택', value: 'practical' },
      ],
    },
    {
      question: '선호하는 쇼핑 환경은?',
      options: [
        { text: '🤫 조용하고 여유로운 분위기', value: 'quiet' },
        { text: '🎪 활발하고 다양한 상품이 있는 곳', value: 'variety' },
        { text: '🎊 친구들과 함께 즐거운 분위기', value: 'fun' },
        { text: '📐 체계적이고 정돈된 공간', value: 'organized' },
      ],
    },
    {
      question: '쇼핑에서 가장 잘하는 것은?',
      options: [
        { text: '🧮 가격 비교와 합리적 선택', value: 'rational' },
        { text: '👑 품질과 브랜드 판단', value: 'judgment' },
        { text: '🎨 스타일과 디자인 선택', value: 'style' },
        { text: '🔧 실용성과 기능성 평가', value: 'function' },
      ],
    },
    {
      question: '쇼핑 스타일을 한 마디로 표현하면?',
      options: [
        { text: '📋 계획적이고 합리적인 쇼핑러', value: 'planned' },
        { text: '💫 즉흥적이고 감성적인 쇼핑러', value: 'emotional' },
        { text: '👥 사회적이고 즐거운 쇼핑러', value: 'social' },
        { text: '🔬 신중하고 분석적인 쇼핑러', value: 'analytical' },
      ],
    },
    {
      question: '쇼핑에서 추구하는 가치는?',
      options: [
        { text: '💰 경제성과 합리성', value: 'economy' },
        { text: '😊 품질과 만족도', value: 'satisfaction' },
        { text: '✨ 개성과 스타일', value: 'personality' },
        { text: '⚡ 실용성과 효율성', value: 'efficiency' },
      ],
    },
    {
      question: '쇼핑 후 가장 만족스러운 것은?',
      options: [
        { text: '✅ "예산 내에서 좋은 물건 구매 성공!"', value: 'budget' },
        { text: '🏆 "원하는 브랜드 제품 구매 완료!"', value: 'desired' },
        { text: '💖 "예쁘고 만족스러운 제품 발견!"', value: 'satisfying' },
        { text: '🔧 "실용적이고 유용한 제품 구매!"', value: 'practical' },
      ],
    },
    {
      question: '쇼핑에서 가장 싫어하는 것은?',
      options: [
        { text: '😤 너무 비싼 가격', value: 'expensive' },
        { text: '😞 품질이 나쁜 제품', value: 'poor-quality' },
        { text: '😫 지루하고 단조로운 쇼핑', value: 'boring' },
        { text: '😤 복잡하고 번거로운 과정', value: 'complicated' },
      ],
    },
    {
      question: '쇼핑할 때 당신의 감정은?',
      options: [
        { text: '😌 "합리적인 선택으로 만족!"', value: 'satisfied' },
        { text: '🤩 "새로운 발견의 즐거움!"', value: 'excited' },
        { text: '😊 "친구들과 함께하는 즐거움!"', value: 'happy' },
        { text: '😌 "체계적으로 완료한 성취감!"', value: 'accomplished' },
      ],
    },
    {
      question: '쇼핑에서 가장 중요한 결정은?',
      options: [
        { text: '⚖️ 가격과 품질 사이의 선택', value: 'price-quality' },
        { text: '🎨 디자인과 실용성 사이의 선택', value: 'design-practical' },
        {
          text: '👥 개인 취향과 추천 사이의 선택',
          value: 'taste-recommendation',
        },
        { text: '⏰ 시간과 완벽함 사이의 선택', value: 'time-perfection' },
      ],
    },
    {
      question: '이상적인 쇼핑 동반자는?',
      options: [
        { text: '💰 가격 비교를 잘하는 사람', value: 'price-conscious' },
        { text: '🎨 스타일과 디자인에 감각 있는 사람', value: 'stylish' },
        { text: '👥 즐거운 분위기를 만드는 사람', value: 'fun-loving' },
        { text: '📊 분석적이고 신중한 사람', value: 'analytical' },
      ],
    },
    {
      question: '쇼핑에서 가장 좋아하는 경험은?',
      options: [
        { text: '🎉 "대박 할인 발견!"', value: 'great-deal' },
        { text: '💎 "완벽한 제품 발견!"', value: 'perfect-item' },
        { text: '🎊 "친구들과 즐거운 쇼핑!"', value: 'fun-shopping' },
        { text: '✅ "효율적으로 완료한 쇼핑!"', value: 'efficient-shopping' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const plannerCount = answers.filter((a) =>
      [
        'planner',
        'researcher',
        'price',
        'comparison',
        'discount',
        'choice',
        'quiet',
        'rational',
        'planned',
        'economy',
        'budget',
        'expensive',
        'satisfied',
        'price-quality',
        'price-conscious',
        'great-deal',
      ].includes(a)
    ).length;

    const impulsiveCount = answers.filter((a) =>
      [
        'impulsive',
        'design',
        'first-impression',
        'beautiful',
        'variety',
        'style',
        'emotional',
        'personality',
        'satisfying',
        'excited',
        'design-practical',
        'stylish',
        'perfect-item',
      ].includes(a)
    ).length;

    const socialCount = answers.filter((a) =>
      ['social', 'opinion', 'fun', 'fun-loving', 'fun-shopping'].includes(a)
    ).length;

    const analyticalCount = answers.filter((a) =>
      [
        'quality',
        'review',
        'useful',
        'balance',
        'organized',
        'judgment',
        'analytical',
        'efficiency',
        'practical',
        'complicated',
        'accomplished',
        'time-perfection',
        'analytical',
        'efficient-shopping',
      ].includes(a)
    ).length;

    const scores = [
      { type: 'planner', score: plannerCount },
      { type: 'impulsive', score: impulsiveCount },
      { type: 'social', score: socialCount },
      { type: 'analytical', score: analyticalCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      planner: {
        title: '💰 쿠폰 수집가 같은 절약가',
        description:
          '당신은 쿠폰 수집가처럼 경제적이고 합리적인 쇼핑을 하는 절약가입니다!',
        detailedDescription: `당신은 쿠폰 수집가처럼 경제적이고 합리적인 성격을 가지고 있어요. 모든 쇼핑을 계획적으로 하고, 최고의 가성비를 추구하는 절약가입니다. 

쿠폰 수집가처럼 미리 조사하고 계획을 세워서 쇼핑하는 성격이에요. 할인과 특가를 발견하는 것에 특별한 재미를 느끼고, 예산 관리에 뛰어난 능력을 가지고 있어요.

하지만 쿠폰 수집가도 너무 가격에만 집착하면 품질을 놓칠 수 있듯이, 당신도 때로는 너무 경제성만 추구하다가 만족도를 놓칠 수 있어요. 가끔은 쿠폰 없이도 마음에 드는 것(품질)을 선택해보는 것도 좋을 것 같아요!`,
        traits: ['경제적', '계획적', '합리적', '절약적', '신중함'],
        strengths: ['예산 관리', '가격 비교', '계획성', '절약 능력', '신중함'],
        weaknesses: [
          '즉흥성 부족',
          '감성적 선택 부족',
          '즐거움 부족',
          '보수적',
          '완벽주의',
        ],
        goodMatches: [
          '✨ 패션 에디터 같은 스타일리스트',
          '🔬 품질 관리사 같은 분석가',
        ],
        badMatches: ['🎊 파티 애니멀 같은 사교가'],
        goodMatchReasons: [
          '✨ 패션 에디터 같은 스타일리스트: 당신의 경제성이 상대방의 스타일과 조화를 이룰 수 있어요',
          '🔬 품질 관리사 같은 분석가: 함께 합리적이고 효율적인 쇼핑을 할 수 있어요',
        ],
        badMatchReasons: [
          '🎊 파티 애니멀 같은 사교가: 너무 즉흥적이고 사회적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 감성적 선택도 해보세요',
          '즐거움도 추구해보세요',
          '즉흥성도 기르세요',
          '완벽주의를 완화하세요',
        ],
      },
      impulsive: {
        title: '✨ 패션 에디터 같은 스타일리스트',
        description:
          '당신은 패션 에디터처럼 스타일과 디자인에 감각이 있는 스타일리스트입니다!',
        detailedDescription: `당신은 패션 에디터처럼 스타일과 디자인에 감각이 있는 성격을 가지고 있어요. 아름다운 것과 개성 있는 디자인을 추구하며, 첫인상에 반한 것을 즉시 선택하는 스타일리스트입니다. 

패션 에디터처럼 트렌드에 민감하고, 아름다운 디자인을 발견하는 것에 특별한 재미를 느껴요. 개성과 스타일을 중요하게 생각하며, 감성적인 선택을 선호하는 성격이에요.

하지만 패션 에디터도 너무 감성적이면 실용성을 놓칠 수 있듯이, 당신도 때로는 너무 디자인만 추구하다가 실용성을 놓칠 수 있어요. 가끔은 패션 에디터도 실용적인 아이템(기능성)을 고려해보는 것도 좋을 것 같아요!`,
        traits: ['감성적', '스타일리시', '즉흥적', '트렌디', '개성적'],
        strengths: [
          '스타일 감각',
          '디자인 감각',
          '즉흥성',
          '트렌드 감지',
          '개성',
        ],
        weaknesses: [
          '경제성 부족',
          '계획성 부족',
          '실용성 부족',
          '합리성 부족',
          '예산 초과',
        ],
        goodMatches: [
          '💰 쿠폰 수집가 같은 절약가',
          '🎊 파티 애니멀 같은 사교가',
        ],
        badMatches: ['🔬 품질 관리사 같은 분석가'],
        goodMatchReasons: [
          '💰 쿠폰 수집가 같은 절약가: 당신의 스타일과 상대방의 경제성이 조화를 이룰 수 있어요',
          '🎊 파티 애니멀 같은 사교가: 함께 즐거운 쇼핑 경험을 나눌 수 있어요',
        ],
        badMatchReasons: [
          '🔬 품질 관리사 같은 분석가: 너무 분석적이고 신중한 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 경제성도 고려해보세요',
          '계획성도 기르세요',
          '실용성도 생각해보세요',
          '예산 관리를 신경 쓰세요',
        ],
      },
      social: {
        title: '🎊 파티 애니멀 같은 사교가',
        description:
          '당신은 파티 애니멀처럼 사람들과 함께하는 것을 좋아하는 사교적인 쇼핑러입니다!',
        detailedDescription: `당신은 파티 애니멀처럼 사람들과 함께하는 것을 좋아하는 사교적인 성격이에요. 쇼핑도 혼자보다는 친구들과 함께하는 것을 선호하며, 다른 사람의 의견을 중요하게 생각해요. 

파티 애니멀처럼 즐거운 분위기를 만드는 능력이 뛰어나고, 사람들과의 소통을 통해 쇼핑의 즐거움을 배가시키는 성격이에요. 사회적이고 친화적인 쇼핑 스타일을 가지고 있어요.

하지만 파티 애니멀도 너무 사회적이면 독립성이 부족할 수 있듯이, 당신도 때로는 너무 다른 사람 의존적이거나 자신의 취향을 놓칠 수 있어요. 가끔은 파티에서 잠시 나와서 혼자만의 시간(독립적 선택)도 가져보는 것도 좋을 것 같아요!`,
        traits: ['사교적', '친화적', '즐거움 추구', '의존적', '소통 능력'],
        strengths: [
          '대인관계 능력',
          '소통 능력',
          '즐거움',
          '친화성',
          '협력 능력',
        ],
        weaknesses: [
          '독립성 부족',
          '자신감 부족',
          '의존성',
          '결정력 부족',
          '개성 부족',
        ],
        goodMatches: [
          '✨ 패션 에디터 같은 스타일리스트',
          '🔬 품질 관리사 같은 분석가',
        ],
        badMatches: ['💰 쿠폰 수집가 같은 절약가'],
        goodMatchReasons: [
          '✨ 패션 에디터 같은 스타일리스트: 함께 즐거운 쇼핑 경험을 나눌 수 있어요',
          '🔬 품질 관리사 같은 분석가: 상대방의 분석력이 당신의 결정에 도움을 줄 수 있어요',
        ],
        badMatchReasons: [
          '💰 쿠폰 수집가 같은 절약가: 너무 경제적이고 계획적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 혼자만의 쇼핑도 해보세요',
          '자신의 취향을 믿어보세요',
          '독립성을 기르세요',
          '결정력을 키워보세요',
        ],
      },
      analytical: {
        title: '🔬 품질 관리사 같은 분석가',
        description:
          '당신은 품질 관리사처럼 신중하고 분석적인 쇼핑을 하는 분석가입니다!',
        detailedDescription: `당신은 품질 관리사처럼 신중하고 분석적인 성격을 가지고 있어요. 모든 구매를 체계적으로 분석하고, 품질과 기능성을 중요하게 생각하는 분석가입니다. 

품질 관리사처럼 리뷰와 평가를 꼼꼼히 확인하고, 실용성과 효율성을 추구하는 성격이에요. 체계적이고 정돈된 쇼핑 환경을 선호하며, 완벽한 선택을 추구해요.

하지만 품질 관리사도 너무 분석적이면 즐거움을 놓칠 수 있듯이, 당신도 때로는 너무 신중하다가 쇼핑의 재미를 놓칠 수 있어요. 가끔은 품질 관리사도 직감적 선택(즐거움)을 해보는 것도 좋을 것 같아요!`,
        traits: ['분석적', '신중함', '체계적', '완벽주의적', '실용적'],
        strengths: ['분석 능력', '신중함', '체계성', '품질 판단', '실용성'],
        weaknesses: [
          '즐거움 부족',
          '즉흥성 부족',
          '감성적 선택 부족',
          '완벽주의',
          '느림',
        ],
        goodMatches: [
          '💰 쿠폰 수집가 같은 절약가',
          '🎊 파티 애니멀 같은 사교가',
        ],
        badMatches: ['✨ 패션 에디터 같은 스타일리스트'],
        goodMatchReasons: [
          '💰 쿠폰 수집가 같은 절약가: 함께 합리적이고 효율적인 쇼핑을 할 수 있어요',
          '🎊 파티 애니멀 같은 사교가: 상대방의 즐거움이 당신의 분석에 균형을 제공해요',
        ],
        badMatchReasons: [
          '✨ 패션 에디터 같은 스타일리스트: 너무 즉흥적이고 감성적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 즐거움도 추구해보세요',
          '즉흥성도 기르세요',
          '감성적 선택도 해보세요',
          '완벽주의를 완화하세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.planner;
  },
};
