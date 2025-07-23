import type { Quiz } from '../../types';

export const stressManagementQuiz: Quiz = {
  id: 'stress-management',
  title: '당신만의 스트레스 관리법은?',
  description:
    '스트레스와 마주할 때 당신은 어떻게 대처하나요? 당신만의 특별한 스트레스 관리 비법을 찾아보세요!',
  category: '건강',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '스트레스를 받았을 때 당신의 첫 번째 반응은?',
      options: [
        { text: '"운동이나 신체 활동으로 스트레스를 날려버려!"', value: 'physical' },
        { text: '"명상이나 호흡 운동으로 마음을 진정시켜!"', value: 'mental' },
        { text: '"친구나 가족과 대화하며 위로받아!"', value: 'social' },
        { text: '"취미나 즐거운 활동에 몰입해!"', value: 'recreational' },
      ],
    },
    {
      question: '업무나 학업으로 압박감을 느낄 때 당신은?',
      options: [
        { text: '"체계적으로 일정을 정리하고 우선순위를 정해!"', value: 'organizational' },
        { text: '"잠시 휴식을 취하고 마음을 정리해!"', value: 'mental' },
        { text: '"동료나 친구들과 상황을 공유하고 조언을 구해!"', value: 'social' },
        { text: '"다른 활동으로 주의를 돌려!"', value: 'recreational' },
      ],
    },
    {
      question: '감정적으로 힘들 때 당신은?',
      options: [
        { text: '"산책이나 조깅으로 몸을 움직여!"', value: 'physical' },
        { text: '"일기 쓰기나 자기 성찰을 통해 감정을 정리해!"', value: 'mental' },
        { text: '"신뢰할 수 있는 사람과 깊이 있는 대화를 해!"', value: 'social' },
        { text: '"음악을 듣거나 영화를 보며 기분을 전환해!"', value: 'recreational' },
      ],
    },
    {
      question: '긴장감을 느낄 때 당신은?',
      options: [
        { text: '"스트레칭이나 요가로 몸을 이완시켜!"', value: 'physical' },
        { text: '"깊은 호흡이나 명상으로 긴장을 풀어줘!"', value: 'mental' },
        { text: '"가벼운 대화나 농담으로 분위기를 바꿔!"', value: 'social' },
        { text: '"게임이나 퍼즐로 집중력을 다른 곳에 둬!"', value: 'recreational' },
      ],
    },
    {
      question: '피로함을 느낄 때 당신은?',
      options: [
        { text: '"충분한 수면을 취하고 휴식을 취해!"', value: 'physical' },
        { text: '"마음의 평화를 찾기 위해 조용한 시간을 가져!"', value: 'mental' },
        { text: '"사람들과 만나서 에너지를 얻어!"', value: 'social' },
        { text: '"즐거운 활동으로 기분을 전환해!"', value: 'recreational' },
      ],
    },
    {
      question: '불안감을 느낄 때 당신은?',
      options: [
        { text: '"운동으로 불안한 에너지를 발산해!"', value: 'physical' },
        { text: '"현재에 집중하고 마음챙김을 연습해!"', value: 'mental' },
        { text: '"불안한 감정을 다른 사람과 나누어 위로받아!"', value: 'social' },
        { text: '"창작 활동이나 예술로 감정을 표현해!"', value: 'recreational' },
      ],
    },
    {
      question: '짜증이나 화가 날 때 당신은?',
      options: [
        { text: '"격렬한 운동으로 화를 발산해!"', value: 'physical' },
        { text: '"화가 난 이유를 분석하고 마음을 진정시켜!"', value: 'mental' },
        { text: '"화를 식히기 위해 잠시 혼자 있거나 다른 사람과 대화해!"', value: 'social' },
        { text: '"즐거운 활동으로 기분을 바꿔!"', value: 'recreational' },
      ],
    },
    {
      question: '우울한 기분일 때 당신은?',
      options: [
        { text: '"밖에 나가서 햇볕을 쬐고 신선한 공기를 마셔!"', value: 'physical' },
        { text: '"긍정적인 생각을 하며 마음을 다스려!"', value: 'mental' },
        { text: '"친한 사람과 만나서 위로와 격려를 받아!"', value: 'social' },
        { text: '"즐거운 영화나 음악으로 기분을 전환해!"', value: 'recreational' },
      ],
    },
    {
      question: '압박감을 느낄 때 당신은?',
      options: [
        { text: '"체계적으로 일을 정리하고 계획을 세워!"', value: 'organizational' },
        { text: '"마음의 여유를 찾기 위해 명상이나 휴식을 취해!"', value: 'mental' },
        { text: '"동료나 친구들과 상황을 공유하고 도움을 요청해!"', value: 'social' },
        { text: '"잠시 다른 활동으로 주의를 돌려!"', value: 'recreational' },
      ],
    },
    {
      question: '집중력이 떨어질 때 당신은?',
      options: [
        { text: '"짧은 산책이나 스트레칭으로 기운을 되찾아!"', value: 'physical' },
        { text: '"마음을 정리하고 현재에 집중하는 연습을 해!"', value: 'mental' },
        { text: '"다른 사람과 대화하며 기분을 전환해!"', value: 'social' },
        { text: '"즐거운 활동으로 에너지를 회복해!"', value: 'recreational' },
      ],
    },
    {
      question: '무기력함을 느낄 때 당신은?',
      options: [
        { text: '"가벼운 운동으로 몸을 깨우고 활력을 되찾아!"', value: 'physical' },
        { text: '"목표를 다시 설정하고 동기를 찾아!"', value: 'mental' },
        { text: '"사람들과 만나서 에너지와 영감을 얻어!"', value: 'social' },
        { text: '"새로운 취미나 활동을 시작해!"', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 잠을 잘 못 잘 때 당신은?',
      options: [
        { text: '"편안한 환경을 만들고 수면 루틴을 정해!"', value: 'physical' },
        { text: '"마음을 진정시키는 명상이나 호흡 운동을 해!"', value: 'mental' },
        { text: '"불안한 감정을 다른 사람과 나누어 위로받아!"', value: 'social' },
        { text: '"잠들기 전에 가벼운 독서나 음악을 들어!"', value: 'recreational' },
      ],
    },
    {
      question: '과로로 지칠 때 당신은?',
      options: [
        { text: '"충분한 휴식과 수면을 취해!"', value: 'physical' },
        { text: '"마음의 평화를 찾기 위해 조용한 시간을 가져!"', value: 'mental' },
        { text: '"가족이나 친구들과 함께 편안한 시간을 보내!"', value: 'social' },
        { text: '"즐거운 활동으로 스트레스를 해소해!"', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 식욕이 없을 때 당신은?',
      options: [
        { text: '"규칙적인 식사 시간을 정하고 건강한 음식을 먹어!"', value: 'physical' },
        { text: '"마음의 안정을 찾고 식사에 집중해!"', value: 'mental' },
        { text: '"다른 사람과 함께 식사하며 기분을 전환해!"', value: 'social' },
        { text: '"즐거운 식사 환경을 만들고 맛있는 음식을 준비해!"', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 두통이나 몸이 아플 때 당신은?',
      options: [
        { text: '"충분한 휴식을 취하고 몸을 이완시켜!"', value: 'physical' },
        { text: '"마음의 긴장을 풀고 편안한 상태를 만들어!"', value: 'mental' },
        { text: '"다른 사람과 대화하며 주의를 돌려!"', value: 'social' },
        { text: '"가벼운 활동으로 기분을 전환해!"', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 짜증이 날 때 당신은?',
      options: [
        { text: '"운동으로 스트레스를 발산해!"', value: 'physical' },
        { text: '"마음을 진정시키고 인내심을 길러!"', value: 'mental' },
        { text: '"다른 사람과의 갈등을 피하고 혼자 시간을 가져!"', value: 'social' },
        { text: '"즐거운 활동으로 기분을 바꿔!"', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 자신감이 떨어질 때 당신은?',
      options: [
        { text: '"자신의 강점을 되새기고 긍정적인 자세를 유지해!"', value: 'mental' },
        { text: '"신뢰할 수 있는 사람과 대화하며 격려를 받아!"', value: 'social' },
        { text: '"자신이 잘하는 일을 하며 성취감을 느껴!"', value: 'recreational' },
        { text: '"체계적으로 목표를 세우고 단계별로 달성해!"', value: 'organizational' },
      ],
    },
    {
      question: '스트레스로 인해 집중이 안 될 때 당신은?',
      options: [
        { text: '"짧은 휴식을 취하고 기운을 되찾아!"', value: 'physical' },
        { text: '"마음을 정리하고 현재에 집중하는 연습을 해!"', value: 'mental' },
        { text: '"다른 사람과 대화하며 기분을 전환해!"', value: 'social' },
        { text: '"즐거운 활동으로 에너지를 회복해!"', value: 'recreational' },
      ],
    },
    {
      question: '스트레스로 인해 불안해할 때 당신은?',
      options: [
        { text: '"깊은 호흡이나 명상으로 마음을 진정시켜!"', value: 'mental' },
        { text: '"신뢰할 수 있는 사람과 불안한 감정을 나눠!"', value: 'social' },
        { text: '"즐거운 활동으로 주의를 돌려!"', value: 'recreational' },
        { text: '"체계적으로 문제를 분석하고 해결책을 찾아!"', value: 'organizational' },
      ],
    },
    {
      question: '스트레스 관리 방법을 개선하고 싶을 때 당신은?',
      options: [
        { text: '"새로운 운동이나 건강 관리 방법을 배워!"', value: 'physical' },
        { text: '"명상이나 마음챙김 기법을 연습해!"', value: 'mental' },
        { text: '"더 많은 사람들과 소통하고 관계를 개선해!"', value: 'social' },
        { text: '"다양한 취미와 활동을 시도해봐!"', value: 'recreational' },
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
        title: '운동장 같은 신체활동가',
        description: '당신은 운동장처럼 활동적이고 역동적으로 스트레스를 해소하는 에너지의 달인입니다!',
        detailedDescription: `당신은 운동장처럼 활기차고 역동적인 성격을 가지고 있어요. 스트레스를 받을 때 몸을 움직이고 신체 활동을 통해 에너지를 발산하며 건강하게 스트레스를 해소하는 활력의 달인입니다.

운동장처럼 넓고 자유로운 공간에서 뛰어노는 것을 좋아하며, 운동이나 산책, 요가 등을 통해 몸과 마음의 균형을 찾는 것을 선호해요. 신체적 활동을 통해 스트레스를 건설적으로 풀어내는 건강한 방식을 추구하는 성격이에요.

하지만 운동장도 때로는 너무 활동적이어서 조용한 휴식이 필요할 수 있듯이, 당신도 가끔은 과도한 활동으로 피로가 쌓이거나 정신적인 휴식을 놓칠 수 있어요. 가끔은 운동장도 조용한 도서관(정신적 휴식)이 되어보는 것이 좋을 것 같아요!`,
        traits: ['활동적', '에너지 넘침', '건강지향', '역동적', '체력'],
        strengths: [
          '뛰어난 체력', '건강한 스트레스 해소', '높은 활력', '신체적 회복력', '긍정적 에너지',
        ],
        weaknesses: [
          '과도한 활동', '정신적 휴식 부족', '부상 위험', '의존성', '날씨나 환경 제약',
        ],
        goodMatches: ['호수 같은 정신안정가', '놀이터 같은 취미몰입가'],
        badMatches: ['카페 같은 사회교류가'],
        goodMatchReasons: [
          '호수 같은 정신안정가: 당신의 활동적 에너지와 상대방의 평온함이 완벽한 균형을 만들어요',
          '놀이터 같은 취미몰입가: 함께 다양한 활동을 즐기며 스트레스를 해소할 수 있어요',
        ],
        badMatchReasons: [
          '카페 같은 사회교류가: 너무 사교적인 방식과 개인적 활동 성향이 맞지 않을 수 있어요',
        ],
        recommendations: [
          '때로는 정신적 휴식도 취해보세요', '과도한 운동은 피하세요', '다양한 형태의 신체활동을 시도해보세요', '날씨에 상관없는 실내 활동도 준비하세요',
        ],
      },
      mental: {
        title: '호수 같은 정신안정가',
        description: '당신은 호수처럼 고요하고 평온하게 마음을 다스리며 스트레스를 관리하는 내면의 달인입니다!',
        detailedDescription: `당신은 호수처럼 깊고 평온한 성격을 가지고 있어요. 스트레스를 받을 때 내면으로 향하며 명상, 호흡, 성찰을 통해 마음의 평화를 찾고 정신적 안정을 추구하는 마음챙김의 달인입니다.

호수처럼 고요한 표면 아래 깊은 지혜와 평정심을 간직하고 있으며, 조용한 시간과 공간에서 자신만의 방법으로 마음을 정리하고 치유하는 것을 좋아해요. 내적 성찰과 정신적 수양을 통해 근본적인 평화를 찾는 성격이에요.

하지만 호수도 때로는 너무 고요해서 정체될 수 있듯이, 당신도 가끔은 지나치게 내향적이 되거나 사회적 교류를 피하게 될 수 있어요. 가끔은 호수도 바다(사교성)와 만나서 활력을 얻는 것이 좋을 것 같아요!`,
        traits: ['평온함', '내성적', '성찰적', '집중력', '정신력'],
        strengths: [
          '깊은 성찰 능력', '뛰어난 집중력', '정신적 안정', '감정 조절', '마음챙김',
        ],
        weaknesses: [
          '사회적 고립', '현실 회피', '수동성', '우울감 증가', '에너지 부족',
        ],
        goodMatches: ['운동장 같은 신체활동가', '카페 같은 사회교류가'],
        badMatches: ['놀이터 같은 취미몰입가'],
        goodMatchReasons: [
          '운동장 같은 신체활동가: 당신의 정신적 평온과 상대방의 활동적 에너지가 완벽한 조화를 이뤄요',
          '카페 같은 사회교류가: 함께 조용하면서도 따뜻한 소통을 할 수 있어요',
        ],
        badMatchReasons: [
          '놀이터 같은 취미몰입가: 너무 활발하고 자극적인 취미 활동과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '적당한 사회적 교류도 시도해보세요', '현실적인 문제 해결도 중요해요', '가벼운 신체활동도 함께 해보세요', '혼자만의 시간과 타인과의 시간을 균형있게 가져보세요',
        ],
      },
      social: {
        title: '카페 같은 사회교류가',
        description: '당신은 카페처럼 따뜻하고 소통적으로 사람들과의 교류를 통해 스트레스를 해소하는 관계의 달인입니다!',
        detailedDescription: `당신은 카페처럼 따뜻하고 사람 냄새 나는 분위기를 가지고 있어요. 스트레스를 받을 때 혼자 견디기보다는 가족, 친구, 동료들과의 대화와 소통을 통해 위로받고 힘을 얻는 인간관계의 달인입니다.

카페처럼 사람들이 모여 대화하고 공감하며 서로를 위로하는 공간을 만드는 것을 좋아해요. 감정을 나누고 공유하며, 다른 사람들로부터 조언과 격려를 받는 것을 통해 스트레스를 건강하게 해소하는 성격이에요.

하지만 카페도 때로는 너무 시끄러워서 개인적인 고요함이 필요할 수 있듯이, 당신도 가끔은 다른 사람에게만 의존하거나 혼자만의 시간을 갖지 못할 수 있어요. 가끔은 카페도 조용한 도서관(혼자만의 시간)이 되어보는 것이 좋을 것 같아요!`,
        traits: ['사교적', '공감력', '소통력', '협력적', '따뜻함'],
        strengths: [
          '뛰어난 소통능력', '강한 공감력', '넓은 인맥', '감정적 지지', '갈등 해결',
        ],
        weaknesses: [
          '타인 의존성', '프라이버시 부족', '감정 전염', '혼자 있기 어려움', '관계 스트레스',
        ],
        goodMatches: ['호수 같은 정신안정가', '놀이터 같은 취미몰입가'],
        badMatches: ['운동장 같은 신체활동가'],
        goodMatchReasons: [
          '호수 같은 정신안정가: 당신의 따뜻한 소통과 상대방의 깊은 평온함이 아름다운 조화를 만들어요',
          '놀이터 같은 취미몰입가: 함께 즐거운 활동을 하며 소통할 수 있어요',
        ],
        badMatchReasons: [
          '운동장 같은 신체활동가: 너무 개인적이고 활동 중심적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '혼자만의 시간도 중요하게 생각하세요', '너무 많은 관계에 에너지를 쏟지 마세요', '자신만의 스트레스 해소법도 개발해보세요', '온라인과 오프라인 소통의 균형을 맞춰보세요',
        ],
      },
      recreational: {
        title: '놀이터 같은 취미몰입가',
        description: '당신은 놀이터처럼 즐겁고 창의적인 활동에 몰입하며 스트레스를 해소하는 재미의 달인입니다!',
        detailedDescription: `당신은 놀이터처럼 다채롭고 즐거운 성격을 가지고 있어요. 스트레스를 받을 때 자신이 좋아하는 취미나 여가활동에 몰입하며, 창작이나 오락을 통해 스트레스를 잊고 즐거움을 찾는 재미의 달인입니다.

놀이터처럼 다양하고 흥미로운 활동들로 가득하며, 음악 감상, 영화 관람, 게임, 독서, 창작 활동 등을 통해 현실에서 잠시 벗어나 자신만의 즐거운 세계를 만드는 것을 좋아해요. 창의적이고 재미있는 방법으로 스트레스를 해소하는 성격이에요.

하지만 놀이터도 때로는 너무 재미에만 빠져서 현실을 잊을 수 있듯이, 당신도 가끔은 현실 도피 수단으로만 사용하거나 중요한 문제들을 미루게 될 수 있어요. 가끔은 놀이터도 교실(현실적 해결)이 되어보는 것이 좋을 것 같아요!`,
        traits: ['창의적', '재미추구', '몰입력', '상상력', '자유로움'],
        strengths: [
          '높은 몰입력', '창의적 사고', '스트레스 해소', '긍정적 에너지', '다양한 관심사',
        ],
        weaknesses: [
          '현실 도피', '중독성', '책임 회피', '사회성 부족', '시간 관리 어려움',
        ],
        goodMatches: ['카페 같은 사회교류가', '운동장 같은 신체활동가'],
        badMatches: ['호수 같은 정신안정가'],
        goodMatchReasons: [
          '카페 같은 사회교류가: 당신의 재미있는 활동과 상대방의 따뜻한 소통이 즐거운 시너지를 만들어요',
          '운동장 같은 신체활동가: 함께 활동적이고 재미있는 취미를 즐길 수 있어요',
        ],
        badMatchReasons: [
          '호수 같은 정신안정가: 너무 조용하고 성찰적인 방식과 활발한 취미 활동이 맞지 않을 수 있어요',
        ],
        recommendations: [
          '현실적인 문제도 함께 해결해보세요', '취미 시간과 현실 시간을 균형있게 관리하세요', '다른 사람들과 함께하는 취미도 시도해보세요', '건설적인 취미 활동을 늘려보세요',
        ],
      },
    };
    
    return resultMap[max.type as keyof typeof resultMap] || resultMap.physical;
  },
};
