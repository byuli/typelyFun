import type { Quiz } from '../../types';

export const stressManagementQuiz: Quiz = {
  id: 'stress-management',
  title: '스트레스 관리 스타일 테스트',
  description:
    '당신의 스트레스 관리 방식을 알아보고 더 효과적인 스트레스 해소 방법을 찾아보세요',
  category: '건강',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '스트레스를 받았을 때 당신은?',
      options: [
        {
          text: '운동이나 신체 활동으로 스트레스를 해소한다',
          value: 'physical',
        },
        { text: '명상이나 호흡 운동으로 마음을 진정시킨다', value: 'mental' },
        { text: '친구나 가족과 대화하며 위로를 받는다', value: 'social' },
        { text: '취미나 즐거운 활동에 몰입한다', value: 'recreational' },
      ],
    },
    {
      question: '업무나 학업으로 압박감을 느낄 때 당신은?',
      options: [
        {
          text: '체계적으로 일정을 정리하고 우선순위를 정한다',
          value: 'organizational',
        },
        { text: '잠시 휴식을 취하고 마음을 정리한다', value: 'mental' },
        {
          text: '동료나 친구들과 상황을 공유하고 조언을 구한다',
          value: 'social',
        },
        { text: '다른 활동으로 주의를 돌린다', value: 'recreational' },
      ],
    },
    {
      question: '감정적으로 힘들 때 당신은?',
      options: [
        { text: '산책이나 조깅으로 몸을 움직인다', value: 'physical' },
        {
          text: '일기 쓰기나 자기 성찰을 통해 감정을 정리한다',
          value: 'mental',
        },
        {
          text: '신뢰할 수 있는 사람과 깊이 있는 대화를 한다',
          value: 'social',
        },
        {
          text: '음악을 듣거나 영화를 보며 기분을 전환한다',
          value: 'recreational',
        },
      ],
    },
    {
      question: '긴장감을 느낄 때 당신은?',
      options: [
        { text: '스트레칭이나 요가로 몸을 이완시킨다', value: 'physical' },
        { text: '깊은 호흡이나 명상으로 긴장을 풀어준다', value: 'mental' },
        { text: '가벼운 대화나 농담으로 분위기를 바꾼다', value: 'social' },
        {
          text: '게임이나 퍼즐로 집중력을 다른 곳에 둔다',
          value: 'recreational',
        },
      ],
    },
    {
      question: '피로함을 느낄 때 당신은?',
      options: [
        { text: '충분한 수면을 취하고 휴식을 취한다', value: 'physical' },
        {
          text: '마음의 평화를 찾기 위해 조용한 시간을 가진다',
          value: 'mental',
        },
        { text: '사람들과 만나서 에너지를 얻는다', value: 'social' },
        { text: '즐거운 활동으로 기분을 전환한다', value: 'recreational' },
      ],
    },
    {
      question: '불안감을 느낄 때 당신은?',
      options: [
        { text: '운동으로 불안한 에너지를 발산한다', value: 'physical' },
        { text: '현재에 집중하고 마음챙김을 연습한다', value: 'mental' },
        {
          text: '불안한 감정을 다른 사람과 나누어 위로받는다',
          value: 'social',
        },
        { text: '창작 활동이나 예술로 감정을 표현한다', value: 'recreational' },
      ],
    },
    {
      question: '짜증이나 화가 날 때 당신은?',
      options: [
        { text: '격렬한 운동으로 화를 발산한다', value: 'physical' },
        { text: '화가 난 이유를 분석하고 마음을 진정시킨다', value: 'mental' },
        {
          text: '화를 식히기 위해 잠시 혼자 있거나 다른 사람과 대화한다',
          value: 'social',
        },
        { text: '즐거운 활동으로 기분을 바꾼다', value: 'recreational' },
      ],
    },
    {
      question: '우울한 기분일 때 당신은?',
      options: [
        {
          text: '밖에 나가서 햇볕을 쬐고 신선한 공기를 마신다',
          value: 'physical',
        },
        { text: '긍정적인 생각을 하며 마음을 다스린다', value: 'mental' },
        { text: '친한 사람과 만나서 위로와 격려를 받는다', value: 'social' },
        {
          text: '즐거운 영화나 음악으로 기분을 전환한다',
          value: 'recreational',
        },
      ],
    },
    {
      question: '압박감을 느낄 때 당신은?',
      options: [
        {
          text: '체계적으로 일을 정리하고 계획을 세운다',
          value: 'organizational',
        },
        {
          text: '마음의 여유를 찾기 위해 명상이나 휴식을 취한다',
          value: 'mental',
        },
        {
          text: '동료나 친구들과 상황을 공유하고 도움을 요청한다',
          value: 'social',
        },
        { text: '잠시 다른 활동으로 주의를 돌린다', value: 'recreational' },
      ],
    },
    {
      question: '집중력이 떨어질 때 당신은?',
      options: [
        {
          text: '짧은 산책이나 스트레칭으로 기운을 되찾는다',
          value: 'physical',
        },
        {
          text: '마음을 정리하고 현재에 집중하는 연습을 한다',
          value: 'mental',
        },
        { text: '다른 사람과 대화하며 기분을 전환한다', value: 'social' },
        { text: '즐거운 활동으로 에너지를 회복한다', value: 'recreational' },
      ],
    },
    {
      question: '무기력함을 느낄 때 당신은?',
      options: [
        {
          text: '가벼운 운동으로 몸을 깨우고 활력을 되찾는다',
          value: 'physical',
        },
        { text: '목표를 다시 설정하고 동기를 찾는다', value: 'mental' },
        { text: '사람들과 만나서 에너지와 영감을 얻는다', value: 'social' },
        { text: '새로운 취미나 활동을 시작한다', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 잠을 잘 못 잘 때 당신은?',
      options: [
        { text: '편안한 환경을 만들고 수면 루틴을 정한다', value: 'physical' },
        {
          text: '마음을 진정시키는 명상이나 호흡 운동을 한다',
          value: 'mental',
        },
        {
          text: '불안한 감정을 다른 사람과 나누어 위로받는다',
          value: 'social',
        },
        {
          text: '잠들기 전에 가벼운 독서나 음악을 듣는다',
          value: 'recreational',
        },
      ],
    },
    {
      question: '과로로 지칠 때 당신은?',
      options: [
        { text: '충분한 휴식과 수면을 취한다', value: 'physical' },
        {
          text: '마음의 평화를 찾기 위해 조용한 시간을 가진다',
          value: 'mental',
        },
        {
          text: '가족이나 친구들과 함께 편안한 시간을 보낸다',
          value: 'social',
        },
        { text: '즐거운 활동으로 스트레스를 해소한다', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 식욕이 없을 때 당신은?',
      options: [
        {
          text: '규칙적인 식사 시간을 정하고 건강한 음식을 먹는다',
          value: 'physical',
        },
        { text: '마음의 안정을 찾고 식사에 집중한다', value: 'mental' },
        { text: '다른 사람과 함께 식사하며 기분을 전환한다', value: 'social' },
        {
          text: '즐거운 식사 환경을 만들고 맛있는 음식을 준비한다',
          value: 'recreational',
        },
      ],
    },
    {
      question: '스트레스로 인해 두통이나 몸이 아플 때 당신은?',
      options: [
        { text: '충분한 휴식을 취하고 몸을 이완시킨다', value: 'physical' },
        { text: '마음의 긴장을 풀고 편안한 상태를 만든다', value: 'mental' },
        { text: '다른 사람과 대화하며 주의를 돌린다', value: 'social' },
        { text: '가벼운 활동으로 기분을 전환한다', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 짜증이 날 때 당신은?',
      options: [
        { text: '운동으로 스트레스를 발산한다', value: 'physical' },
        { text: '마음을 진정시키고 인내심을 기른다', value: 'mental' },
        {
          text: '다른 사람과의 갈등을 피하고 혼자 시간을 가진다',
          value: 'social',
        },
        { text: '즐거운 활동으로 기분을 바꾼다', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 자신감이 떨어질 때 당신은?',
      options: [
        {
          text: '자신의 강점을 되새기고 긍정적인 자세를 유지한다',
          value: 'mental',
        },
        {
          text: '신뢰할 수 있는 사람과 대화하며 격려를 받는다',
          value: 'social',
        },
        {
          text: '자신이 잘하는 일을 하며 성취감을 느낀다',
          value: 'recreational',
        },
        {
          text: '체계적으로 목표를 세우고 단계별로 달성한다',
          value: 'organizational',
        },
      ],
    },
    {
      question: '스트레스로 인해 집중이 안 될 때 당신은?',
      options: [
        { text: '짧은 휴식을 취하고 기운을 되찾는다', value: 'physical' },
        {
          text: '마음을 정리하고 현재에 집중하는 연습을 한다',
          value: 'mental',
        },
        { text: '다른 사람과 대화하며 기분을 전환한다', value: 'social' },
        { text: '즐거운 활동으로 에너지를 회복한다', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 불안해할 때 당신은?',
      options: [
        { text: '깊은 호흡이나 명상으로 마음을 진정시킨다', value: 'mental' },
        { text: '신뢰할 수 있는 사람과 불안한 감정을 나눈다', value: 'social' },
        { text: '즐거운 활동으로 주의를 돌린다', value: 'recreational' },
        {
          text: '체계적으로 문제를 분석하고 해결책을 찾는다',
          value: 'organizational',
        },
      ],
    },
    {
      question: '스트레스 관리 방법을 개선하고 싶을 때 당신은?',
      options: [
        { text: '새로운 운동이나 건강 관리 방법을 배운다', value: 'physical' },
        { text: '명상이나 마음챙김 기법을 연습한다', value: 'mental' },
        { text: '더 많은 사람들과 소통하고 관계를 개선한다', value: 'social' },
        { text: '다양한 취미와 활동을 시도해본다', value: 'recreational' },
      ],
    },
  ],
  resultMapping: (answers) => {
    const physical = answers.filter((a) => a === 'physical').length;
    const mental = answers.filter((a) => a === 'mental').length;
    const social = answers.filter((a) => a === 'social').length;
    const recreational = answers.filter((a) => a === 'recreational').length;
    const scores = [
      { type: 'physical', score: physical },
      { type: 'mental', score: mental },
      { type: 'social', score: social },
      { type: 'recreational', score: recreational },
    ];
    const max = scores.reduce((a, b) => (b.score > a.score ? b : a));
    const resultMap = {
      physical: {
        title: '신체 활동형',
        description: '운동이나 신체 활동으로 스트레스를 해소하는 스타일입니다.',
        detailedDescription:
          '몸을 움직이며 에너지를 발산하고, 신체적 활동을 통해 스트레스를 해소합니다.',
        traits: ['활동적', '에너지', '운동'],
        strengths: ['체력', '스트레스 해소'],
        weaknesses: ['과도한 활동', '휴식 부족'],
        goodMatches: ['recreational', 'social'],
        badMatches: ['mental'],
        goodMatchReasons: [
          '취미형, 사회형과 함께하면 즐겁게 활동할 수 있습니다.',
        ],
        badMatchReasons: [
          '정신형과는 해소 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['휴식도 중요하게 생각하세요.'],
      },
      mental: {
        title: '정신 안정형',
        description:
          '명상이나 호흡 운동 등으로 마음을 진정시키는 스타일입니다.',
        detailedDescription:
          '마음의 평화와 내면의 안정을 추구하며, 조용한 환경에서 스트레스를 해소합니다.',
        traits: ['평화', '명상', '내면'],
        strengths: ['집중력', '자기 성찰'],
        weaknesses: ['사회성 부족', '고립'],
        goodMatches: ['physical', 'recreational'],
        badMatches: ['social'],
        goodMatchReasons: [
          '신체형, 취미형과 함께하면 균형 잡힌 해소가 가능합니다.',
        ],
        badMatchReasons: [
          '사회형과는 해소 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['가끔은 사람들과 어울려보세요.'],
      },
      social: {
        title: '사회적 교류형',
        description:
          '사람들과의 대화나 교류를 통해 스트레스를 해소하는 스타일입니다.',
        detailedDescription:
          '친구, 가족 등과의 소통을 통해 위로와 힘을 얻습니다.',
        traits: ['사교', '소통', '공감'],
        strengths: ['공감', '관계'],
        weaknesses: ['의존성', '혼자 해소 어려움'],
        goodMatches: ['physical', 'recreational'],
        badMatches: ['mental'],
        goodMatchReasons: [
          '신체형, 취미형과 함께하면 즐겁게 해소할 수 있습니다.',
        ],
        badMatchReasons: [
          '정신형과는 해소 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['혼자만의 시간도 가져보세요.'],
      },
      recreational: {
        title: '취미 즐김형',
        description:
          '취미나 즐거운 활동에 몰입하여 스트레스를 해소하는 스타일입니다.',
        detailedDescription:
          '자신이 좋아하는 활동에 몰입하며 스트레스를 잊습니다.',
        traits: ['취미', '몰입', '즐거움'],
        strengths: ['몰입력', '스트레스 해소'],
        weaknesses: ['현실 도피', '책임 회피'],
        goodMatches: ['physical', 'mental'],
        badMatches: ['social'],
        goodMatchReasons: [
          '신체형, 정신형과 함께하면 다양한 해소법을 경험할 수 있습니다.',
        ],
        badMatchReasons: [
          '사회형과는 해소 방식이 달라 갈등이 생길 수 있습니다.',
        ],
        recommendations: ['현실도 중요하게 생각하세요.'],
      },
    };
    return resultMap[max.type] || resultMap['physical'];
  },
};
