import type { Quiz } from '../../types';

export const stressReliefQuiz: Quiz = {
  id: 'stress-relief',
  title: '스트레스 해소 유형',
  description: '당신만의 스트레스 해소 방법을 찾아보세요',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: '스트레스를 받았을 때 가장 먼저 하고 싶은 것은?',
      options: [
        { text: '조용한 곳에서 혼자만의 시간을 가진다', value: 'alone' },
        { text: '친구나 가족과 대화를 나눈다', value: 'talk' },
        { text: '운동이나 신체 활동을 한다', value: 'exercise' },
        { text: '좋아하는 음악을 듣거나 영화를 본다', value: 'entertainment' },
      ],
    },
    {
      question: '스트레스 상황에서 당신의 반응은?',
      options: [
        { text: '차분히 생각하고 해결책을 찾는다', value: 'calm' },
        { text: '감정적으로 반응하며 즉시 표현한다', value: 'emotional' },
        { text: '활동적으로 움직이며 스트레스를 해소한다', value: 'active' },
        { text: '다른 일에 집중하여 잠시 잊는다', value: 'distract' },
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
        { text: '깊은 호흡과 이완 운동을 한다', value: 'breathing' },
        { text: '신뢰하는 사람과 이야기를 나눈다', value: 'sharing' },
        { text: '산책이나 가벼운 운동을 한다', value: 'walking' },
        { text: '좋아하는 음악이나 책에 집중한다', value: 'focus' },
      ],
    },
    {
      question: '스트레스 상황에서 가장 도움이 되는 것은?',
      options: [
        { text: '조용하고 평화로운 환경', value: 'quiet' },
        { text: '따뜻한 대화와 공감', value: 'empathy' },
        { text: '신체적 활동과 운동', value: 'physical' },
        { text: '창의적이고 즐거운 활동', value: 'creative' },
      ],
    },
    {
      question: '스트레스로 인한 피로를 회복하는 방법은?',
      options: [
        { text: '충분한 휴식과 수면', value: 'rest' },
        { text: '사람들과의 즐거운 만남', value: 'meeting' },
        { text: '가벼운 운동과 스트레칭', value: 'stretching' },
        { text: '좋아하는 음식이나 취미 활동', value: 'enjoyment' },
      ],
    },
    {
      question: '스트레스 상황에서 당신이 가장 잘하는 것은?',
      options: [
        { text: '차분하게 상황을 분석하고 대처한다', value: 'analyze' },
        { text: '감정을 표현하고 공감을 받는다', value: 'express' },
        { text: '활동적으로 스트레스를 해소한다', value: 'release' },
        { text: '다른 일에 집중하여 균형을 맞춘다', value: 'balance' },
      ],
    },
    {
      question: '스트레스 해소를 위한 이상적인 환경은?',
      options: [
        { text: '조용하고 평화로운 자연 속', value: 'nature' },
        { text: '따뜻하고 편안한 사람들과 함께', value: 'people' },
        { text: '활동적이고 역동적인 공간', value: 'dynamic' },
        { text: '창의적이고 자유로운 공간', value: 'creative' },
      ],
    },
    {
      question: '스트레스로 인한 긴장을 풀어주는 것은?',
      options: [
        { text: '명상이나 깊은 호흡', value: 'meditation' },
        { text: '따뜻한 대화와 웃음', value: 'laughter' },
        { text: '가벼운 운동이나 마사지', value: 'massage' },
        { text: '좋아하는 음악이나 예술', value: 'art' },
      ],
    },
    {
      question: '스트레스 상황에서 가장 어려워하는 것은?',
      options: [
        { text: '감정을 조절하고 차분해지는 것', value: 'control' },
        { text: '다른 사람에게 도움을 요청하는 것', value: 'help' },
        { text: '활동적으로 움직이는 것', value: 'move' },
        { text: '다른 일에 집중하는 것', value: 'concentrate' },
      ],
    },
    {
      question: '스트레스 해소 후 가장 만족스러운 것은?',
      options: [
        { text: '마음의 평화와 안정감', value: 'peace' },
        { text: '사람들과의 연결감', value: 'connection' },
        { text: '신체적 활력과 에너지', value: 'energy' },
        { text: '창의적 영감과 만족감', value: 'inspiration' },
      ],
    },
    {
      question: '스트레스 관리에서 가장 중요한 것은?',
      options: [
        { text: '정신적 균형과 평온함', value: 'mental' },
        { text: '사회적 지지와 공감', value: 'social' },
        { text: '신체적 건강과 활력', value: 'physical' },
        { text: '개인적 만족과 성취감', value: 'personal' },
      ],
    },
    {
      question: '스트레스 해소 스타일을 한 마디로 표현하면?',
      options: [
        { text: '조용하고 평화로운 스타일', value: 'peaceful' },
        { text: '소통하고 공감하는 스타일', value: 'communicative' },
        { text: '활동적이고 역동적인 스타일', value: 'dynamic' },
        { text: '창의적이고 즐거운 스타일', value: 'enjoyable' },
      ],
    },
    {
      question: '스트레스 해소를 위한 이상적인 시간은?',
      options: [
        { text: '아침이나 저녁의 조용한 시간', value: 'quiet-time' },
        { text: '사람들과 함께하는 시간', value: 'social-time' },
        { text: '활동적인 오후 시간', value: 'active-time' },
        { text: '자유롭고 여유로운 시간', value: 'free-time' },
      ],
    },
    {
      question: '스트레스 해소 후 가장 좋아지는 것은?',
      options: [
        { text: '마음의 안정과 명확한 사고', value: 'clarity' },
        { text: '사람들과의 관계 개선', value: 'relationship' },
        { text: '신체적 건강과 활력', value: 'vitality' },
        { text: '개인적 성장과 만족감', value: 'growth' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const peacefulCount = answers.filter((a) => a === 'peaceful').length;
    const communicativeCount = answers.filter(
      (a) => a === 'communicative'
    ).length;
    const dynamicCount = answers.filter((a) => a === 'dynamic').length;
    const enjoyableCount = answers.filter((a) => a === 'enjoyable').length;
    const quietCount = answers.filter((a) => a === 'quiet').length;
    const socialCount = answers.filter((a) => a === 'social').length;
    const activeCount = answers.filter((a) => a === 'active').length;
    const creativeCount = answers.filter((a) => a === 'creative').length;
    const aloneCount = answers.filter((a) => a === 'alone').length;
    const talkCount = answers.filter((a) => a === 'talk').length;
    const exerciseCount = answers.filter((a) => a === 'exercise').length;
    const hobbyCount = answers.filter((a) => a === 'hobby').length;
    const calmCount = answers.filter((a) => a === 'calm').length;
    const shareCount = answers.filter((a) => a === 'sharing').length;
    const moveCount = answers.filter((a) => a === 'move').length;
    const expressCount = answers.filter((a) => a === 'express').length;
    const peaceCount = answers.filter((a) => a === 'peace').length;
    const connectionCount = answers.filter((a) => a === 'connection').length;
    const energyCount = answers.filter((a) => a === 'energy').length;
    const inspirationCount = answers.filter((a) => a === 'inspiration').length;
    const mentalCount = answers.filter((a) => a === 'mental').length;
    const socialSupportCount = answers.filter((a) => a === 'social').length;
    const physicalCount = answers.filter((a) => a === 'physical').length;
    const personalCount = answers.filter((a) => a === 'personal').length;
    const quietTimeCount = answers.filter((a) => a === 'quiet-time').length;
    const socialTimeCount = answers.filter((a) => a === 'social-time').length;
    const activeTimeCount = answers.filter((a) => a === 'active-time').length;
    const freeTimeCount = answers.filter((a) => a === 'free-time').length;
    const clarityCount = answers.filter((a) => a === 'clarity').length;
    const relationshipCount = answers.filter(
      (a) => a === 'relationship'
    ).length;
    const vitalityCount = answers.filter((a) => a === 'vitality').length;
    const growthCount = answers.filter((a) => a === 'growth').length;

    // 스타일 점수 계산
    const peacefulScore =
      peacefulCount +
      quietCount +
      aloneCount +
      calmCount +
      peaceCount +
      mentalCount +
      quietTimeCount +
      clarityCount;
    const socialScore =
      communicativeCount +
      socialCount +
      talkCount +
      shareCount +
      connectionCount +
      socialSupportCount +
      socialTimeCount +
      relationshipCount;
    const activeScore =
      dynamicCount +
      activeCount +
      exerciseCount +
      moveCount +
      energyCount +
      physicalCount +
      activeTimeCount +
      vitalityCount;
    const creativeScore =
      enjoyableCount +
      creativeCount +
      hobbyCount +
      expressCount +
      inspirationCount +
      personalCount +
      freeTimeCount +
      growthCount;

    // 가장 높은 점수의 스타일 결정
    const scores = [
      { type: 'peaceful', score: peacefulScore },
      { type: 'social', score: socialScore },
      { type: 'active', score: activeScore },
      { type: 'creative', score: creativeScore },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      peaceful: {
        title: '평화로운 명상가형',
        description:
          '당신은 스트레스 해소를 위해 조용하고 평화로운 환경을 선호합니다. 명상, 깊은 호흡, 혼자만의 시간을 통해 스트레스를 해소합니다.',
        detailedDescription:
          '마음의 평화와 안정감을 추구하며, 차분하고 신중한 접근으로 스트레스 상황을 관리합니다. 조용한 환경에서 내면을 들여다보며 스트레스를 해소하는 것을 선호합니다.',
        traits: ['평화로움', '신중함', '내향적', '명상적'],
        strengths: ['집중력', '내면 탐구', '평온함', '자기 성찰'],
        weaknesses: ['사회적 고립', '행동 지연', '감정 억압', '현실 회피'],
        goodMatches: ['소통하는 공감형', '창의적 즐거움형'],
        badMatches: ['활동적 에너자이저형'],
        goodMatchReasons: [
          '소통하는 공감형: 당신의 평온함이 상대방에게 안정감을 제공합니다',
          '창의적 즐거움형: 함께 조용한 창작 활동을 즐길 수 있습니다',
        ],
        badMatchReasons: [
          '활동적 에너자이저형: 활동적인 스타일이 당신의 평온함을 방해할 수 있습니다',
        ],
        recommendations: [
          '사회적 활동도 가끔 시도하기',
          '감정 표현 연습하기',
          '현실적 문제 해결하기',
          '활동적 요소 추가하기',
        ],
      },
      social: {
        title: '소통하는 공감형',
        description:
          '당신은 스트레스 해소를 위해 사람들과의 소통을 중요하게 생각합니다. 대화, 공감, 사회적 지지를 통해 스트레스를 해소합니다.',
        detailedDescription:
          '따뜻한 관계와 연결감을 추구하며, 감정 표현과 공유를 통해 스트레스를 관리합니다. 다른 사람과의 교류를 통해 위로받고 힘을 얻는 것을 선호합니다.',
        traits: ['사교적', '공감적', '소통적', '지지적'],
        strengths: ['감정 공유', '관계 형성', '공감 능력', '사회적 지지'],
        weaknesses: [
          '타인 의존',
          '개인 시간 부족',
          '감정 과부하',
          '독립성 부족',
        ],
        goodMatches: ['평화로운 명상가형', '활동적 에너자이저형'],
        badMatches: ['창의적 즐거움형'],
        goodMatchReasons: [
          '평화로운 명상가형: 당신의 따뜻함이 상대방에게 안정감을 제공합니다',
          '활동적 에너자이저형: 함께 활동하며 소통할 수 있습니다',
        ],
        badMatchReasons: [
          '창의적 즐거움형: 혼자만의 시간을 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '개인 시간 확보하기',
          '독립성 기르기',
          '감정 경계 설정하기',
          '혼자만의 활동 시도하기',
        ],
      },
      active: {
        title: '활동적 에너자이저형',
        description:
          '당신은 스트레스 해소를 위해 신체적 활동을 선호합니다. 운동, 스포츠, 동적인 활동을 통해 스트레스를 해소합니다.',
        detailedDescription:
          '신체적 활력과 에너지를 추구하며, 활동적이고 역동적인 방식으로 스트레스를 관리합니다. 몸을 움직이면서 스트레스를 해소하는 것을 선호합니다.',
        traits: ['활동적', '역동적', '에너지 넘침', '신체적'],
        strengths: ['체력', '활력', '행동력', '끈기'],
        weaknesses: ['휴식 부족', '정신적 피로', '과도한 활동', '평온함 부족'],
        goodMatches: ['소통하는 공감형', '창의적 즐거움형'],
        badMatches: ['평화로운 명상가형'],
        goodMatchReasons: [
          '소통하는 공감형: 함께 활동하며 소통할 수 있습니다',
          '창의적 즐거움형: 활동적인 창작 활동을 함께 즐길 수 있습니다',
        ],
        badMatchReasons: [
          '평화로운 명상가형: 조용한 환경을 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '휴식 시간 확보하기',
          '정신적 회복 시간 갖기',
          '과도한 활동 줄이기',
          '평온한 활동도 시도하기',
        ],
      },
      creative: {
        title: '창의적 즐거움형',
        description:
          '당신은 스트레스 해소를 위해 창의적이고 즐거운 활동을 선호합니다. 취미, 예술, 창작 활동을 통해 스트레스를 해소합니다.',
        detailedDescription:
          '개인적 만족과 성취감을 추구하며, 자유롭고 창의적인 방식으로 스트레스를 관리합니다. 자신만의 방식으로 표현하고 창작하는 것을 선호합니다.',
        traits: ['창의적', '즐거움 추구', '개성적', '자유로움'],
        strengths: ['창의력', '표현력', '즐거움', '개인적 성취'],
        weaknesses: [
          '일관성 부족',
          '현실성 부족',
          '완성도 부족',
          '사회성 부족',
        ],
        goodMatches: ['평화로운 명상가형', '활동적 에너자이저형'],
        badMatches: ['소통하는 공감형'],
        goodMatchReasons: [
          '평화로운 명상가형: 함께 조용한 창작 활동을 즐길 수 있습니다',
          '활동적 에너자이저형: 활동적인 창작 활동을 함께 즐길 수 있습니다',
        ],
        badMatchReasons: [
          '소통하는 공감형: 혼자만의 시간을 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '일관성 기르기',
          '완성도 높이기',
          '사회적 활동 추가하기',
          '현실적 목표 설정하기',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.peaceful;
  },
};
