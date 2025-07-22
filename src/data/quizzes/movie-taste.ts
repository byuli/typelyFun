import type { Quiz } from '../../types';

export const movieTasteQuiz: Quiz = {
  id: 'movie-taste',
  title: '🎬 당신은 어떤 영화인가요?',
  description:
    '영화 취향으로 알아보는 당신의 숨겨진 성격! 어떤 영화와 가장 닮았을까요?',
  category: '라이프스타일',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '새로운 영화를 발견했을 때 당신의 반응은?',
      options: [
        {
          text: '🔥 "와! 이거 완전 새로운 세계야!" (즉시 관람)',
          value: 'adventurous',
        },
        {
          text: '🤔 "리뷰와 평점을 먼저 확인해야겠어" (신중하게 분석)',
          value: 'analytical',
        },
        {
          text: '😊 "친구가 추천해줬는데 어떨까?" (추천 의존)',
          value: 'social',
        },
        {
          text: '😌 "역시 내가 좋아하는 장르가 최고야" (안전 선호)',
          value: 'comfort',
        },
      ],
    },
    {
      question: '영화관에서 영화를 볼 때 당신은?',
      options: [
        {
          text: '🎯 "오늘은 완전 새로운 장르를 시도해보자!"',
          value: 'explorer',
        },
        { text: '📊 "감독, 배우, 각본... 모든 걸 체크!"', value: 'critic' },
        { text: '👥 "다른 사람들은 뭐 보고 있지?"', value: 'trend-follower' },
        { text: '🏠 "집에서 편하게 보는 게 최고야"', value: 'homebody' },
      ],
    },
    {
      question: '영화에서 가장 중요한 것은?',
      options: [
        { text: '💥 강렬하고 임팩트 있는 장면!', value: 'intense' },
        { text: '🧠 깊이 있고 의미 있는 스토리', value: 'meaningful' },
        { text: '🎉 사람들과 함께하는 즐거운 시간', value: 'social' },
        { text: '😌 편안하고 익숙한 분위기', value: 'comfort' },
      ],
    },
    {
      question: '영화를 볼 때 당신의 스타일은?',
      options: [
        { text: '🎨 "예술적이고 독특한 영화가 최고야!"', value: 'artistic' },
        {
          text: '⚖️ "완벽한 연기, 완벽한 각본, 완벽한 연출"',
          value: 'perfectionist',
        },
        {
          text: '👨‍👩‍👧‍👦 "가족, 친구들과 함께 보는 게 제일!"',
          value: 'collaborative',
        },
        { text: '⚡ "빠르고 간단하게 끝나는 영화!"', value: 'efficient' },
      ],
    },
    {
      question: '영화에서 가장 싫어하는 것은?',
      options: [
        { text: '😴 지루하고 단조로운 전개', value: 'boring' },
        { text: '🤢 억지스럽고 비현실적인 스토리', value: 'unrealistic' },
        { text: '😔 혼자서 보는 외로운 영화', value: 'lonely' },
        { text: '😤 복잡하고 이해하기 어려운 영화', value: 'complicated' },
      ],
    },
    {
      question: '이상적인 영화 관람 시간은?',
      options: [
        { text: '🌍 세계 각국의 영화를 탐험하는 시간', value: 'global' },
        { text: '🧘‍♀️ 깊이 있는 생각과 성찰의 시간', value: 'contemplative' },
        { text: '🎊 가족, 친구들과 떠드는 파티 시간', value: 'party' },
        { text: '🏡 집에서 편안하게 쉬는 시간', value: 'relaxing' },
      ],
    },
    {
      question: '영화 선택에서 당신의 우선순위는?',
      options: [
        { text: '🚀 새로운 경험과 자극', value: 'experience' },
        { text: '💡 지식과 깨달음', value: 'knowledge' },
        { text: '💕 사람들과의 연결', value: 'connection' },
        { text: '😌 편안함과 안정감', value: 'stability' },
      ],
    },
    {
      question: '영화를 볼 때 당신의 감정은?',
      options: [
        { text: '🤩 "와! 이건 완전 새로운 차원이야!"', value: 'excited' },
        { text: '😌 "깊이 있는 메시지를 전달하는군"', value: 'thoughtful' },
        { text: '😊 "사람들과 함께라서 더 재밌어!"', value: 'happy' },
        { text: '😌 "편안하고 안정적인 분위기야"', value: 'calm' },
      ],
    },
    {
      question: '영화에서 가장 만족스러운 순간은?',
      options: [
        { text: '💫 예상치 못한 반전을 경험했을 때', value: 'surprise' },
        { text: '✅ 깊이 있는 메시지를 이해했을 때', value: 'understanding' },
        { text: '🎉 사람들과 즐거운 영화를 마쳤을 때', value: 'celebration' },
        { text: '😌 편안하고 만족스러운 관람을 했을 때', value: 'contentment' },
      ],
    },
    {
      question: '영화 취향을 한 마디로 표현하면?',
      options: [
        { text: '🌪️ 모험적이고 도전적인 영화 탐험가', value: 'adventurer' },
        { text: '🧠 지적이고 깊이 있는 영화 비평가', value: 'critic' },
        { text: '🎊 사회적이고 즐거운 영화 애호가', value: 'enthusiast' },
        { text: '🏠 편안하고 안정적인 홈시어터러', value: 'homeviewer' },
      ],
    },
    {
      question: '영화에서 가장 어려운 결정은?',
      options: [
        { text: '🤔 새로운 것과 익숙한 것 사이의 선택', value: 'choice' },
        { text: '⚖️ 예술성과 대중성 사이의 균형', value: 'balance' },
        { text: '👥 개인 취향과 다른 사람 의견 사이', value: 'compromise' },
        { text: '⏰ 시간과 품질 사이의 선택', value: 'priority' },
      ],
    },
    {
      question: '영화에서 가장 좋아하는 경험은?',
      options: [
        {
          text: '🗺️ 새로운 영화관이나 영화를 발견하는 것',
          value: 'exploration',
        },
        { text: '📚 깊이 있는 영화 분석과 토론', value: 'analysis' },
        { text: '👨‍👩‍👧‍👦 사람들과 함께 영화를 보는 것', value: 'sharing' },
        { text: '🏡 집에서 편안하게 영화를 보는 것', value: 'comfort' },
      ],
    },
    {
      question: '영화에서 당신이 추구하는 가치는?',
      options: [
        { text: '🌟 새로운 경험과 자극', value: 'stimulation' },
        { text: '💚 지식과 깨달음', value: 'enlightenment' },
        { text: '💖 사람들과의 관계', value: 'relationship' },
        { text: '😌 평화와 안정', value: 'peace' },
      ],
    },
    {
      question: '영화를 선택할 때 당신의 직감은?',
      options: [
        { text: '🔮 "이거 완전 내 스타일일 것 같아!"', value: 'intuitive' },
        {
          text: '📋 "감독, 배우, 각본을 먼저 확인해야겠어"',
          value: 'analytical',
        },
        {
          text: '👂 "다른 사람들이 뭐라고 하는지 들어보자"',
          value: 'influenced',
        },
        { text: '✅ "역시 검증된 영화가 안전해"', value: 'safe' },
      ],
    },
    {
      question: '이상적인 영화는?',
      options: [
        { text: '🎪 놀라운 반전의 서커스 같은 영화', value: 'spectacle' },
        { text: '🏛️ 예술관처럼 완벽한 작품성', value: 'masterpiece' },
        { text: '🎊 생일파티처럼 즐거운 분위기', value: 'festive' },
        { text: '🏠 집에서의 편안한 휴식 같은 영화', value: 'cozy' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const adventurousCount = answers.filter((a) =>
      [
        'adventurous',
        'explorer',
        'intense',
        'artistic',
        'global',
        'experience',
        'excited',
        'surprise',
        'adventurer',
        'choice',
        'exploration',
        'stimulation',
        'intuitive',
        'spectacle',
      ].includes(a)
    ).length;

    const intellectualCount = answers.filter((a) =>
      [
        'analytical',
        'critic',
        'meaningful',
        'perfectionist',
        'contemplative',
        'knowledge',
        'thoughtful',
        'understanding',
        'critic',
        'balance',
        'analysis',
        'enlightenment',
        'analytical',
        'masterpiece',
      ].includes(a)
    ).length;

    const socialCount = answers.filter((a) =>
      [
        'social',
        'trend-follower',
        'collaborative',
        'party',
        'connection',
        'happy',
        'celebration',
        'enthusiast',
        'compromise',
        'sharing',
        'relationship',
        'influenced',
        'festive',
      ].includes(a)
    ).length;

    const comfortCount = answers.filter((a) =>
      [
        'comfort',
        'homebody',
        'efficient',
        'relaxing',
        'stability',
        'calm',
        'contentment',
        'homeviewer',
        'priority',
        'comfort',
        'peace',
        'safe',
        'cozy',
      ].includes(a)
    ).length;

    const scores = [
      { type: 'adventurous', score: adventurousCount },
      { type: 'intellectual', score: intellectualCount },
      { type: 'social', score: socialCount },
      { type: 'comfort', score: comfortCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      adventurous: {
        title: '🎭 인셉션 같은 모험가',
        description: '당신은 인셉션처럼 복잡하고 도전적인 성격의 소유자입니다!',
        detailedDescription: `당신은 인셉션처럼 복잡하고 도전적인 성격을 가지고 있어요. 꿈 속의 꿈(새로운 경험)을 추구하고, 예상치 못한 반전(기회)을 즐기는 모험가입니다. 

인셉션처럼 처음에는 복잡해서 이해하기 어려울 수도 있지만, 한 번 빠지면 빠져나올 수 없을 정도로 매력적이에요. 다양한 층위(경험)를 조합해서 새로운 현실(기회)을 만들어내는 창의성도 뛰어나고, 강렬한 임팩트(감정)를 추구하는 열정적인 성격이에요.

하지만 인셉션이 너무 복잡하면 현실과 꿈의 경계가 모호해지듯이, 당신도 때로는 너무 많은 도전을 동시에 하려다가 혼란을 겪을 수 있어요. 가끔은 로맨틱 코미디(평온한 시간)도 필요하다는 걸 잊지 마세요!`,
        traits: ['도전적', '창의적', '열정적', '모험적', '복잡함'],
        strengths: [
          '새로운 경험 추구',
          '창의적 사고',
          '적응력',
          '열정',
          '도전 정신',
        ],
        weaknesses: [
          '안정성 부족',
          '성급함',
          '위험 감수',
          '혼란',
          '일관성 부족',
        ],
        goodMatches: ['📚 쇼생크 탈출 같은 지성가', '🎊 라라랜드 같은 사교가'],
        badMatches: ['🏠 노트북 같은 안정가'],
        goodMatchReasons: [
          '📚 쇼생크 탈출 같은 지성가: 함께 깊이 있고 의미 있는 영화(인생)를 탐험할 수 있어요',
          '🎊 라라랜드 같은 사교가: 함께 즐거운 영화(인생) 경험을 나눌 수 있어요',
        ],
        badMatchReasons: [
          '🏠 노트북 같은 안정가: 너무 안전하고 보수적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 평온한 영화(시간)도 즐겨보세요',
          '안정성도 중요하다는 걸 기억하세요',
          '성급한 결정보다는 신중한 판단을 해보세요',
          '혼란을 피하기 위해 한 번에 하나씩 도전해보세요',
        ],
      },
      intellectual: {
        title: '📚 쇼생크 탈출 같은 지성가',
        description:
          '당신은 쇼생크 탈출처럼 깊이 있고 의미 있는 성격의 소유자입니다!',
        detailedDescription: `당신은 쇼생크 탈출처럼 깊이 있고 의미 있는 성격을 가지고 있어요. 희망(가치), 자유(목표), 우정(관계)이 모두 조화롭게 어우러진 완벽한 조합이에요.

쇼생크 탈출처럼 체계적이고 계획적인 성격으로, 지식과 깨달음을 중요하게 생각해요. 기본기가 탄탄해야 자유(목표)를 얻을 수 있듯이, 당신도 기본기가 탄탄하고 안정적인 성격이에요.

하지만 쇼생크 탈출도 너무 진지하면 무거워질 수 있듯이, 당신도 때로는 너무 완벽주의적이거나 보수적일 수 있어요. 가끔은 쇼생크 탈출에 유머(즐거움)를 추가해보는 것도 좋을 것 같아요!`,
        traits: ['지적', '깊이있음', '의미추구', '완벽주의적', '안정적'],
        strengths: ['분석력', '깊이 있는 사고', '일관성', '신뢰성', '책임감'],
        weaknesses: [
          '유연성 부족',
          '보수적',
          '즐거움 부족',
          '완벽주의',
          '새로움 회피',
        ],
        goodMatches: ['🎭 인셉션 같은 모험가', '🏠 노트북 같은 안정가'],
        badMatches: ['🎊 라라랜드 같은 사교가'],
        goodMatchReasons: [
          '🎭 인셉션 같은 모험가: 함께 깊이 있고 의미 있는 영화(인생)를 탐험할 수 있어요',
          '🏠 노트북 같은 안정가: 비슷한 가치관으로 안정적인 관계를 만들 수 있어요',
        ],
        badMatchReasons: [
          '🎊 라라랜드 같은 사교가: 너무 즉흥적이고 사회적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 가벼운 영화(경험)도 시도해보세요',
          '완벽하지 않아도 괜찮아요',
          '즐거움도 추구해보세요',
          '유연성을 기르세요',
        ],
      },
      social: {
        title: '🎊 라라랜드 같은 사교가',
        description:
          '당신은 라라랜드처럼 사람들과 함께하는 것을 좋아하는 사교적인 성격입니다!',
        detailedDescription: `당신은 라라랜드처럼 사람들과 함께하는 것을 좋아하는 사교적인 성격이에요. 라라랜드가 혼자 보기에는 아쉽고, 여러 사람이 함께 보아야 완성되듯이, 당신도 사람들과 함께 있을 때 가장 빛나는 성격이에요.

다양한 캐릭터(사람들)가 어우러져서 완성되는 라라랜드처럼, 당신도 다양한 사람들과의 관계를 중요하게 생각해요. 라라랜드가 뮤지컬 영화의 대표주자이듯이, 당신도 분위기 메이커 역할을 잘 해요.

하지만 라라랜드도 너무 많은 장면이 있으면 복잡해질 수 있듯이, 당신도 때로는 너무 많은 관계에 에너지를 쏟다가 지칠 수 있어요. 가끔은 심플한 로맨스(혼자만의 시간)도 필요하다는 걸 잊지 마세요!`,
        traits: [
          '사교적',
          '친화적',
          '즐거움 추구',
          '관계중시',
          '분위기 메이커',
        ],
        strengths: [
          '대인관계 능력',
          '소통 능력',
          '긍정적 에너지',
          '적응력',
          '공감 능력',
        ],
        weaknesses: [
          '독립성 부족',
          '집중력 부족',
          '깊이 부족',
          '에너지 소모',
          '의존성',
        ],
        goodMatches: ['🎭 인셉션 같은 모험가', '🏠 노트북 같은 안정가'],
        badMatches: ['📚 쇼생크 탈출 같은 지성가'],
        goodMatchReasons: [
          '🎭 인셉션 같은 모험가: 함께 즐거운 영화(인생) 경험을 나눌 수 있어요',
          '🏠 노트북 같은 안정가: 안정적인 관계를 바탕으로 즐거운 시간을 보낼 수 있어요',
        ],
        badMatchReasons: [
          '📚 쇼생크 탈출 같은 지성가: 너무 체계적이고 완벽주의적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 혼자만의 시간도 가져보세요',
          '깊이 있는 관계도 만들어보세요',
          '에너지 관리를 신경 쓰세요',
          '독립성도 기르세요',
        ],
      },
      comfort: {
        title: '🏠 노트북 같은 안정가',
        description: '당신은 노트북처럼 편안하고 안정적인 성격의 소유자입니다!',
        detailedDescription: `당신은 노트북처럼 편안하고 안정적인 성격을 가지고 있어요. 노트북이 어떤 상황에서도 따뜻하고 편안한 감정을 주듯이, 당신도 어떤 상황에서도 안정감을 주는 믿음직한 성격이에요.

노트북이 로맨스, 드라마, 코미디 등 다양한 장르로 변신할 수 있듯이, 당신도 상황에 따라 적응력이 뛰어나요. 하지만 기본적으로는 편안하고 익숙한 것을 선호하는 성격이에요.

하지만 노트북도 너무 단조로울 수 있듯이, 당신도 때로는 너무 보수적이거나 변화를 두려워할 수 있어요. 가끔은 노트북에 액션(새로운 경험)을 추가하거나, 스릴러(새로운 도전)로 만들어보는 것도 좋을 것 같아요!`,
        traits: ['안정적', '편안함', '적응력', '신뢰성', '보수적'],
        strengths: ['안정성', '신뢰성', '일관성', '적응력', '편안함'],
        weaknesses: [
          '새로움 회피',
          '보수적',
          '도전 부족',
          '지루함',
          '변화 두려움',
        ],
        goodMatches: ['📚 쇼생크 탈출 같은 지성가', '🎊 라라랜드 같은 사교가'],
        badMatches: ['🎭 인셉션 같은 모험가'],
        goodMatchReasons: [
          '📚 쇼생크 탈출 같은 지성가: 비슷한 가치관으로 안정적인 관계를 만들 수 있어요',
          '🎊 라라랜드 같은 사교가: 안정적인 관계를 바탕으로 즐거운 시간을 보낼 수 있어요',
        ],
        badMatchReasons: [
          '🎭 인셉션 같은 모험가: 너무 도전적이고 변화를 추구하는 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 새로운 영화(경험)도 시도해보세요',
          '변화를 두려워하지 마세요',
          '도전 정신을 기르세요',
          '새로움에 대한 개방성을 가져보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.comfort;
  },
};
