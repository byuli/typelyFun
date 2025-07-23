import type { Quiz } from '../../types';

export const stressReliefQuiz: Quiz = {
  id: 'stress-relief',
  title: '당신만의 스트레스 해소법은?',
  description: '스트레스를 받을 때 당신은 어떻게 해소하나요? 당신만의 특별한 스트레스 해소 방법을 찾아보세요!',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: '스트레스를 받았을 때 가장 먼저 하고 싶은 것은?',
      options: [
        { text: '"조용한 곳에서 혼자만의 시간을 가져!"', value: 'alone' },
        { text: '"친구나 가족과 대화를 나눠!"', value: 'talk' },
        { text: '"운동이나 신체 활동을 해!"', value: 'exercise' },
        { text: '"좋아하는 음악을 듣거나 영화를 봐!"', value: 'entertainment' },
      ],
    },
    {
      question: '스트레스 상황에서 당신의 반응은?',
      options: [
        { text: '"차분히 생각하고 해결책을 찾아!"', value: 'calm' },
        { text: '"감정적으로 반응하며 즉시 표현해!"', value: 'emotional' },
        { text: '"활동적으로 움직이며 스트레스를 해소해!"', value: 'active' },
        { text: '"다른 일에 집중하여 잠시 잊어!"', value: 'distract' },
      ],
    },
    {
      question: '스트레스 해소를 위해 선호하는 활동은?',
      options: [
        { text: '명상이나 요가 같은 정적인 활동', value: 'meditation' },
        { text: '사람들과 만나서 대화하는 것', value: 'social' },
        { text: '운동이나 스포츠 같은 동적인 활동', value: 'sports' },
        { text: '취미 활동이나 창작 활동', value: 'hobby' },
      ],
    },
    {
      question: '스트레스로 인한 불안감을 해소하는 방법은?',
      options: [
        { text: '"깊은 호흡과 이완 운동을 해!"', value: 'breathing' },
        { text: '"신뢰하는 사람과 이야기를 나눠!"', value: 'sharing' },
        { text: '"산책이나 가벼운 운동을 해!"', value: 'walking' },
        { text: '"좋아하는 음악이나 책에 집중해!"', value: 'focus' },
      ],
    },
    {
      question: '스트레스 상황에서 가장 도움이 되는 것은?',
      options: [
        { text: '조용하고 평화로운 환경', value: 'quiet' },
        { text: '이해해주는 사람들의 존재', value: 'support' },
        { text: '신체적 활동과 움직임', value: 'movement' },
        { text: '창의적이고 재미있는 활동', value: 'creative' },
      ],
    },
    {
      question: '스트레스를 받을 때 가장 피하고 싶은 것은?',
      options: [
        { text: '시끄럽고 복잡한 환경', value: 'noise' },
        { text: '혼자 있는 시간', value: 'isolation' },
        { text: '가만히 앉아있는 것', value: 'stillness' },
        { text: '복잡하고 어려운 일', value: 'complexity' },
      ],
    },
    {
      question: '스트레스가 쌓였을 때 당신은?',
      options: [
        { text: '"내면의 평화를 찾기 위해 조용히 성찰해!"', value: 'reflect' },
        { text: '"가까운 사람에게 전화해서 털어놔!"', value: 'communicate' },
        { text: '"헬스장에 가서 땀을 흘려!"', value: 'workout' },
        { text: '"재미있는 활동으로 기분 전환을 해!"', value: 'fun' },
      ],
    },
    {
      question: '스트레스 해소 후 가장 좋아하는 기분은?',
      options: [
        { text: '"평온하고 고요한 마음"', value: 'peaceful' },
        { text: '"사랑받고 이해받는 느낌"', value: 'loved' },
        { text: '"활력 넘치고 생기 있는 상태"', value: 'energetic' },
        { text: '"즐겁고 기분 좋은 상태"', value: 'happy' },
      ],
    },
    {
      question: '스트레스를 예방하기 위해 하는 일은?',
      options: [
        { text: '"규칙적인 명상이나 휴식"', value: 'prevention-calm' },
        { text: '"소중한 사람들과의 시간"', value: 'prevention-social' },
        { text: '"꾸준한 운동과 건강 관리"', value: 'prevention-active' },
        { text: '"취미나 관심사에 시간 투자"', value: 'prevention-hobby' },
      ],
    },
    {
      question: '스트레스가 심할 때 가장 효과적인 방법은?',
      options: [
        { text: '"자연 속에서 혼자만의 시간"', value: 'nature-alone' },
        { text: '"믿을 만한 사람과의 깊은 대화"', value: 'deep-talk' },
        { text: '"격렬한 운동으로 에너지 분출"', value: 'intense-exercise' },
        { text: '"완전히 다른 활동으로 전환"', value: 'complete-change' },
      ],
    },
    {
      question: '스트레스 해소 스타일을 한 마디로 표현하면?',
      options: [
        { text: '"조용하고 평화로운 스타일"', value: 'peaceful-style' },
        { text: '"소통하고 공유하는 스타일"', value: 'social-style' },
        { text: '"활동적이고 역동적인 스타일"', value: 'active-style' },
        { text: '"창의적이고 재미있는 스타일"', value: 'creative-style' },
      ],
    },
    {
      question: '스트레스 받을 때 가장 필요한 것은?',
      options: [
        { text: '"조용한 공간과 충분한 휴식"', value: 'rest' },
        { text: '"따뜻한 위로와 공감"', value: 'comfort' },
        { text: '"에너지 발산과 활동"', value: 'energy' },
        { text: '"즐거움과 기분 전환"', value: 'joy' },
      ],
    },
    {
      question: '스트레스 관리에서 가장 중요한 것은?',
      options: [
        { text: '"마음의 평온과 균형"', value: 'balance' },
        { text: '"인간관계와 소통"', value: 'connection' },
        { text: '"신체적 건강과 활력"', value: 'health' },
        { text: '"긍정적 마인드와 즐거움"', value: 'positivity' },
      ],
    },
    {
      question: '이상적인 스트레스 해소 환경은?',
      options: [
        { text: '"자연 속의 조용한 공간"', value: 'nature' },
        { text: '"편안한 카페나 친구 집"', value: 'cozy' },
        { text: '"체육관이나 운동장"', value: 'gym' },
        { text: '"창작 스튜디오나 놀이공간"', value: 'studio' },
      ],
    },
    {
      question: '스트레스 해소 후 얻고 싶은 것은?',
      options: [
        { text: '"내면의 평화와 안정감"', value: 'inner-peace' },
        { text: '"사랑과 연결감"', value: 'love-connection' },
        { text: '"에너지와 활력"', value: 'vitality' },
        { text: '"영감과 창의성"', value: 'inspiration' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const calmCount = answers.filter((a) =>
      [
        'alone',
        'calm',
        'meditation',
        'breathing',
        'quiet',
        'noise',
        'reflect',
        'peaceful',
        'prevention-calm',
        'nature-alone',
        'peaceful-style',
        'rest',
        'balance',
        'nature',
        'inner-peace',
      ].includes(a as string)
    ).length;

    const socialCount = answers.filter((a) =>
      [
        'talk',
        'emotional',
        'social',
        'sharing',
        'support',
        'isolation',
        'communicate',
        'loved',
        'prevention-social',
        'deep-talk',
        'social-style',
        'comfort',
        'connection',
        'cozy',
        'love-connection',
      ].includes(a as string)
    ).length;

    const activeCount = answers.filter((a) =>
      [
        'exercise',
        'active',
        'sports',
        'walking',
        'movement',
        'stillness',
        'workout',
        'energetic',
        'prevention-active',
        'intense-exercise',
        'active-style',
        'energy',
        'health',
        'gym',
        'vitality',
      ].includes(a as string)
    ).length;

    const creativeCount = answers.filter((a) =>
      [
        'entertainment',
        'distract',
        'hobby',
        'focus',
        'creative',
        'complexity',
        'fun',
        'happy',
        'prevention-hobby',
        'complete-change',
        'creative-style',
        'joy',
        'positivity',
        'studio',
        'inspiration',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'calm', score: calmCount },
      { type: 'social', score: socialCount },
      { type: 'active', score: activeCount },
      { type: 'creative', score: creativeCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      calm: {
        title: '산속 같은 평온한 명상가',
        description: '당신은 산속의 고요한 명상가처럼 평온함 속에서 스트레스를 해소하는 스타일입니다!',
        detailedDescription: `당신은 산속의 명상가처럼 고요하고 평온한 성격을 가지고 있어요. 스트레스를 받을 때 혼자만의 시간을 가지며 내면의 평화를 찾아 마음을 다스리는 평온한 명상가입니다.

산속의 명상가처럼 조용한 환경에서 깊은 호흡과 명상을 통해 스트레스를 해소하며, 자연 속에서 혼자만의 시간을 가지는 것을 좋아해요. 내면의 성찰을 통해 근본적인 해결책을 찾으려고 노력하는 성격이에요.

하지만 산속도 때로는 너무 고립될 수 있듯이, 당신도 가끔은 혼자만 있으려 하거나 다른 사람들과의 소통을 피할 수 있어요. 가끔은 산에서 내려와서 사람들과의 교류(소통)를 통해 더 큰 평화를 찾아보는 것도 좋을 것 같아요!`,
        traits: ['평온함', '성찰적', '독립적', '차분함', '내향적'],
        strengths: [
          '깊은 성찰 능력',
          '감정 조절',
          '집중력',
          '자기 관리',
          '정신적 안정',
        ],
        weaknesses: [
          '사회적 고립',
          '소통 부족',
          '수동적',
          '현실 회피',
          '에너지 부족',
        ],
        goodMatches: ['따뜻한 카페 같은 소통가', '무지개 같은 창의가'],
        badMatches: ['번개 같은 활동가'],
        goodMatchReasons: [
          '따뜻한 카페 같은 소통가: 당신의 평온함이 상대방의 소통 능력과 조화를 이룰 수 있어요',
          '무지개 같은 창의가: 함께 평화롭고 창의적인 환경을 만들 수 있어요',
        ],
        badMatchReasons: [
          '번개 같은 활동가: 너무 활동적이고 역동적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 사람들과의 소통도 시도해보세요',
          '적당한 신체 활동도 해보세요',
          '현실적인 문제 해결도 중요해요',
          '다양한 해소 방법을 경험해보세요',
        ],
      },
      social: {
        title: '따뜻한 카페 같은 소통가',
        description: '당신은 따뜻한 카페처럼 사람들과의 소통을 통해 스트레스를 해소하는 스타일입니다!',
        detailedDescription: `당신은 따뜻한 카페처럼 아늑하고 소통을 중시하는 성격을 가지고 있어요. 스트레스를 받을 때 사람들과 대화를 나누고 감정을 공유하며 위로받는 것을 좋아하는 소통가입니다.

따뜻한 카페처럼 편안한 분위기에서 신뢰하는 사람들과 깊은 대화를 나누며, 서로의 감정을 나누고 공감하는 것을 통해 스트레스를 해소해요. 혼자 있는 것보다는 사람들과 함께 있을 때 더 편안함을 느끼는 성격이에요.

하지만 카페도 때로는 너무 시끄러울 수 있듯이, 당신도 가끔은 다른 사람들에게 너무 의존하거나 혼자만의 시간을 갖지 못할 수 있어요. 가끔은 따뜻한 카페에서 나와서 조용한 성찰(혼자만의 시간)의 시간을 가져보는 것도 좋을 것 같아요!`,
        traits: ['사교적', '공감적', '소통적', '감정적', '외향적'],
        strengths: [
          '뛰어난 소통력',
          '공감 능력',
          '인간관계',
          '감정 표현',
          '지지 체계',
        ],
        weaknesses: [
          '의존성',
          '경계선 부족',
          '감정 과부하',
          '혼자 시간 어려움',
          '타인 의존',
        ],
        goodMatches: ['산속 같은 평온한 명상가', '번개 같은 활동가'],
        badMatches: ['무지개 같은 창의가'],
        goodMatchReasons: [
          '산속 같은 평온한 명상가: 당신의 소통력이 상대방의 평온함과 조화를 이룰 수 있어요',
          '번개 같은 활동가: 함께 활발하고 사교적인 환경을 만들 수 있어요',
        ],
        badMatchReasons: [
          '무지개 같은 창의가: 너무 개인적이고 창의적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '혼자만의 시간도 가져보세요',
          '감정적 경계선을 설정해보세요',
          '자립적인 해소 방법도 개발해보세요',
          '다른 사람에게 너무 의존하지 마세요',
        ],
      },
      active: {
        title: '번개 같은 활동가',
        description: '당신은 번개처럼 역동적이고 활발한 신체 활동을 통해 스트레스를 해소하는 스타일입니다!',
        detailedDescription: `당신은 번개처럼 역동적이고 에너지 넘치는 성격을 가지고 있어요. 스트레스를 받을 때 운동이나 신체 활동을 통해 에너지를 발산하며 스트레스를 해소하는 활발한 활동가입니다.

번개처럼 빠르고 강력한 에너지로 헬스장에서 땀을 흘리거나 격렬한 운동을 통해 스트레스를 분출해요. 가만히 앉아있는 것보다는 몸을 움직이며 활동할 때 더 큰 만족감을 느끼는 성격이에요.

하지만 번개도 때로는 너무 강렬해서 주변을 태울 수 있듯이, 당신도 가끔은 너무 격렬하거나 무리한 활동으로 오히려 피로를 느낄 수 있어요. 가끔은 번개도 잠잠해져서 조용한 휴식(평온함)의 시간을 가져보는 것도 좋을 것 같아요!`,
        traits: ['활동적', '에너지 넘침', '역동적', '적극적', '건강지향'],
        strengths: [
          '높은 에너지',
          '신체 건강',
          '스트레스 발산',
          '활력',
          '적극성',
        ],
        weaknesses: [
          '과도한 활동',
          '휴식 부족',
          '균형 잃음',
          '번아웃',
          '정신적 성찰 부족',
        ],
        goodMatches: ['따뜻한 카페 같은 소통가', '무지개 같은 창의가'],
        badMatches: ['산속 같은 평온한 명상가'],
        goodMatchReasons: [
          '따뜻한 카페 같은 소통가: 함께 활발하고 사교적인 환경을 만들 수 있어요',
          '무지개 같은 창의가: 당신의 활동성이 상대방의 창의성과 조화를 이룰 수 있어요',
        ],
        badMatchReasons: [
          '산속 같은 평온한 명상가: 너무 조용하고 정적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '적절한 휴식도 취해보세요',
          '정신적 성찰 시간도 가져보세요',
          '과도한 활동은 피해보세요',
          '다양한 해소 방법을 시도해보세요',
        ],
      },
      creative: {
        title: '무지개 같은 창의가',
        description: '당신은 무지개처럼 다채롭고 창의적인 활동을 통해 스트레스를 해소하는 스타일입니다!',
        detailedDescription: `당신은 무지개처럼 다채롭고 창의적인 성격을 가지고 있어요. 스트레스를 받을 때 취미 활동이나 창작을 통해 기분 전환을 하며 스트레스를 해소하는 창의적인 예술가입니다.

무지개처럼 다양한 색깔의 활동들을 통해 즐거움을 찾고, 음악을 듣거나 영화를 보거나 예술 활동을 하면서 마음을 달래요. 재미있고 흥미로운 활동을 통해 완전히 다른 세계로 기분 전환을 하는 것을 좋아하는 성격이에요.

하지만 무지개도 때로는 너무 화려해서 집중하기 어려울 수 있듯이, 당신도 가끔은 너무 다양한 활동으로 인해 산만해지거나 근본적인 문제 해결을 미룰 수 있어요. 가끔은 무지개도 하나의 색(집중)에 머물러보는 것도 좋을 것 같아요!`,
        traits: ['창의적', '다양성', '즐거움 추구', '예술적', '자유로움'],
        strengths: [
          '창의적 표현',
          '기분 전환',
          '다양성',
          '즐거움',
          '예술적 감각',
        ],
        weaknesses: [
          '회피적',
          '산만함',
          '일관성 부족',
          '현실 도피',
          '근본 해결 미룸',
        ],
        goodMatches: ['산속 같은 평온한 명상가', '번개 같은 활동가'],
        badMatches: ['따뜻한 카페 같은 소통가'],
        goodMatchReasons: [
          '산속 같은 평온한 명상가: 함께 평화롭고 창의적인 환경을 만들 수 있어요',
          '번개 같은 활동가: 당신의 창의성이 상대방의 활동성과 조화를 이룰 수 있어요',
        ],
        badMatchReasons: [
          '따뜻한 카페 같은 소통가: 너무 사교적이고 소통 중심적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '근본적인 문제 해결도 시도해보세요',
          '한 가지에 집중하는 연습을 해보세요',
          '현실을 피하지 마세요',
          '체계적인 접근도 시도해보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.calm;
  },
};
