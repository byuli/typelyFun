import type { Quiz } from '../../types';

export const movieTasteQuiz: Quiz = {
  id: 'movie-taste',
  title: '영화 취향으로 보는 성격',
  description: '당신의 영화 취향을 통해 성격을 분석해보세요',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: '영화를 선택할 때 가장 중요하게 생각하는 것은?',
      options: [
        { text: '스토리와 줄거리', value: 'story' },
        { text: '감정과 분위기', value: 'emotion' },
        { text: '시각적 효과와 액션', value: 'visual' },
        { text: '배우와 감독', value: 'cast' },
      ],
    },
    {
      question: '선호하는 영화 장르는?',
      options: [
        { text: '드라마나 멜로드라마', value: 'drama' },
        { text: '액션이나 스릴러', value: 'action' },
        { text: '코미디나 로맨스', value: 'comedy' },
        { text: 'SF나 판타지', value: 'sci-fi' },
      ],
    },
    {
      question: '영화를 볼 때 가장 집중하는 것은?',
      options: [
        { text: '등장인물의 감정과 심리', value: 'character' },
        { text: '스토리의 전개와 결말', value: 'plot' },
        { text: '시각적 장면과 효과', value: 'visual-effects' },
        { text: '대사와 연기', value: 'acting' },
      ],
    },
    {
      question: '영화에서 가장 만족스러운 순간은?',
      options: [
        {
          text: '깊이 있는 감정적 교감을 느낄 때',
          value: 'emotional-connection',
        },
        { text: '예상치 못한 반전을 경험할 때', value: 'plot-twist' },
        { text: '화려한 액션과 특수효과를 볼 때', value: 'spectacle' },
        { text: '재미있고 즐거운 시간을 보낼 때', value: 'enjoyment' },
      ],
    },
    {
      question: '영화를 볼 때 선호하는 환경은?',
      options: [
        { text: '조용하고 집중할 수 있는 환경', value: 'quiet' },
        { text: '활발하고 역동적인 분위기', value: 'lively' },
        { text: '편안하고 여유로운 분위기', value: 'comfortable' },
        { text: '특별하고 몰입할 수 있는 환경', value: 'immersive' },
      ],
    },
    {
      question: '영화에서 가장 어려워하는 것은?',
      options: [
        { text: '복잡한 스토리를 이해하는 것', value: 'complex-story' },
        { text: '감정적 장면을 감당하는 것', value: 'emotional-scenes' },
        { text: '지나치게 폭력적인 장면', value: 'violent-scenes' },
        { text: '지루하고 단조로운 전개', value: 'boring-plot' },
      ],
    },
    {
      question: '영화를 선택할 때 당신의 스타일은?',
      options: [
        { text: '리뷰와 평가를 꼼꼼히 확인한다', value: 'research' },
        { text: '첫인상과 감각으로 선택한다', value: 'intuition' },
        { text: '추천받은 영화를 선택한다', value: 'recommendation' },
        { text: '인기 있는 영화를 선택한다', value: 'popular' },
      ],
    },
    {
      question: '영화를 본 후 가장 좋아하는 것은?',
      options: [
        { text: '깊이 있는 생각과 성찰', value: 'reflection' },
        { text: '스릴과 흥미진진한 경험', value: 'thrill' },
        { text: '웃음과 즐거운 기분', value: 'laughter' },
        { text: '새로운 세계관과 상상력', value: 'imagination' },
      ],
    },
    {
      question: '영화에서 가장 중요하게 생각하는 가치는?',
      options: [
        { text: '감정적 깊이와 공감', value: 'empathy' },
        { text: '스토리의 완성도와 논리', value: 'logic' },
        { text: '시각적 완성도와 기술', value: 'technology' },
        { text: '오락성과 즐거움', value: 'entertainment' },
      ],
    },
    {
      question: '영화를 볼 때 당신의 행동은?',
      options: [
        { text: '조용히 집중하며 몰입한다', value: 'focused' },
        { text: '반응을 보이며 적극적으로 참여한다', value: 'reactive' },
        { text: '편안하게 즐기며 관람한다', value: 'relaxed' },
        { text: '분석적으로 관찰한다', value: 'analytical' },
      ],
    },
    {
      question: '영화 취향을 한 마디로 표현하면?',
      options: [
        { text: '감정적이고 깊이 있는 취향', value: 'emotional' },
        { text: '스릴하고 역동적인 취향', value: 'thrilling' },
        { text: '즐겁고 가벼운 취향', value: 'light' },
        { text: '창의적이고 상상력 풍부한 취향', value: 'creative' },
      ],
    },
    {
      question: '영화에서 가장 좋아하는 주제는?',
      options: [
        { text: '인간관계와 감정', value: 'relationships' },
        { text: '모험과 도전', value: 'adventure' },
        { text: '사랑과 로맨스', value: 'romance' },
        { text: '미래와 가능성', value: 'future' },
      ],
    },
    {
      question: '영화를 본 후 가장 어려운 것은?',
      options: [
        { text: '감정적 여운을 정리하는 것', value: 'emotional-processing' },
        { text: '스토리의 복잡성을 이해하는 것', value: 'story-complexity' },
        { text: '현실과 영화의 경계를 구분하는 것', value: 'reality-fiction' },
        { text: '영화의 의미를 해석하는 것', value: 'interpretation' },
      ],
    },
    {
      question: '이상적인 영화 경험은?',
      options: [
        { text: '깊이 있는 감정적 교감과 성찰', value: 'deep-emotional' },
        { text: '스릴과 긴장감이 있는 모험', value: 'thrilling-adventure' },
        { text: '웃음과 즐거움이 가득한 시간', value: 'joyful-time' },
        {
          text: '새로운 세계관과 상상력의 확장',
          value: 'imaginative-expansion',
        },
      ],
    },
    {
      question: '영화에서 가장 만족스러운 것은?',
      options: [
        {
          text: '등장인물과의 깊은 감정적 연결',
          value: 'character-connection',
        },
        { text: '예상치 못한 스토리 전개', value: 'unexpected-plot' },
        { text: '화려하고 임팩트 있는 장면', value: 'impactful-scenes' },
        { text: '편안하고 즐거운 관람 시간', value: 'enjoyable-time' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const actionCount = answers.filter((a) => a === 'action').length;
    const romanceCount = answers.filter((a) => a === 'romance').length;
    const comedyCount = answers.filter((a) => a === 'comedy').length;
    const dramaCount = answers.filter((a) => a === 'drama').length;
    const thrillerCount = answers.filter((a) => a === 'thriller').length;
    const fantasyCount = answers.filter((a) => a === 'fantasy').length;
    const documentaryCount = answers.filter((a) => a === 'documentary').length;
    const horrorCount = answers.filter((a) => a === 'horror').length;

    // 스타일 점수 계산
    const excitingScore = actionCount + thrillerCount + horrorCount;
    const emotionalScore = romanceCount + dramaCount;
    const lightScore = comedyCount + fantasyCount;
    const intellectualScore = documentaryCount;

    const scores = [
      { type: 'exciting', score: excitingScore },
      { type: 'emotional', score: emotionalScore },
      { type: 'light', score: lightScore },
      { type: 'intellectual', score: intellectualScore },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      exciting: {
        title: '스릴 추구형',
        description:
          '당신은 긴장감과 스릴을 추구하는 영화를 선호합니다. 액션, 스릴러, 호러 장르를 즐깁니다.',
        detailedDescription:
          '강렬한 감정과 긴장감을 즐기며, 예측할 수 없는 전개와 반전을 선호합니다. 영화를 통해 강한 자극과 흥미를 추구합니다.',
        traits: ['스릴 추구', '강렬함', '긴장감', '자극적'],
        strengths: ['집중력', '긴장감 감지', '반전 이해', '강한 감정'],
        weaknesses: ['스트레스', '불안감', '과도한 자극', '평온함 부족'],
        goodMatches: ['감성적 공감형', '가벼운 즐거움형'],
        badMatches: ['지적 탐구형'],
        goodMatchReasons: [
          '감성적 공감형: 함께 강렬한 감정을 나눌 수 있습니다',
          '가벼운 즐거움형: 함께 즐거운 영화 경험을 할 수 있습니다',
        ],
        badMatchReasons: [
          '지적 탐구형: 조용하고 지적인 영화를 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '가벼운 영화도 시도하기',
          '스트레스 관리하기',
          '평온한 영화 시도하기',
          '과도한 자극 줄이기',
        ],
      },
      emotional: {
        title: '감성적 공감형',
        description:
          '당신은 감정적이고 공감할 수 있는 영화를 선호합니다. 로맨스, 드라마 장르를 즐깁니다.',
        detailedDescription:
          '인간관계와 감정을 중요하게 생각하며, 영화를 통해 공감과 위로를 받습니다. 깊이 있는 감정적 경험을 추구합니다.',
        traits: ['감성적', '공감적', '인간적', '깊이 있음'],
        strengths: ['공감 능력', '감정 이해', '인간관계 이해', '위로 능력'],
        weaknesses: [
          '과도한 감정이입',
          '현실성 부족',
          '감정적 피로',
          '객관성 부족',
        ],
        goodMatches: ['스릴 추구형', '지적 탐구형'],
        badMatches: ['가벼운 즐거움형'],
        goodMatchReasons: [
          '스릴 추구형: 함께 강렬한 감정을 나눌 수 있습니다',
          '지적 탐구형: 함께 깊이 있는 영화를 즐길 수 있습니다',
        ],
        badMatchReasons: [
          '가벼운 즐거움형: 가벼운 영화를 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '가벼운 영화도 시도하기',
          '객관성 기르기',
          '현실적 관점 갖기',
          '감정적 거리 두기',
        ],
      },
      light: {
        title: '가벼운 즐거움형',
        description:
          '당신은 즐겁고 가벼운 영화를 선호합니다. 코미디, 판타지 장르를 즐깁니다.',
        detailedDescription:
          '웃음과 즐거움을 추구하며, 스트레스 해소를 위해 영화를 봅니다. 현실에서 벗어나 상상의 세계를 즐깁니다.',
        traits: ['즐거움 추구', '가벼움', '긍정적', '상상력'],
        strengths: ['긍정적 사고', '스트레스 해소', '상상력', '즐거움'],
        weaknesses: ['깊이 부족', '현실성 부족', '성숙도 부족', '진지함 부족'],
        goodMatches: ['스릴 추구형', '감성적 공감형'],
        badMatches: ['지적 탐구형'],
        goodMatchReasons: [
          '스릴 추구형: 함께 즐거운 영화 경험을 할 수 있습니다',
          '감성적 공감형: 함께 즐거운 시간을 보낼 수 있습니다',
        ],
        badMatchReasons: [
          '지적 탐구형: 진지하고 지적인 영화를 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '깊이 있는 영화도 시도하기',
          '진지한 영화 시도하기',
          '성숙한 관점 기르기',
          '현실적 영화 시도하기',
        ],
      },
      intellectual: {
        title: '지적 탐구형',
        description:
          '당신은 지적이고 교육적인 영화를 선호합니다. 다큐멘터리, 지식 관련 영화를 즐깁니다.',
        detailedDescription:
          '지식과 정보를 중요하게 생각하며, 영화를 통해 배우고 성장하는 것을 추구합니다. 객관적이고 분석적인 관점을 선호합니다.',
        traits: ['지적', '탐구적', '객관적', '교육적'],
        strengths: ['지식 습득', '분석 능력', '객관적 판단', '학습 능력'],
        weaknesses: [
          '즐거움 부족',
          '감정적 거리감',
          '따뜻함 부족',
          '유연성 부족',
        ],
        goodMatches: ['감성적 공감형'],
        badMatches: ['스릴 추구형', '가벼운 즐거움형'],
        goodMatchReasons: [
          '감성적 공감형: 함께 깊이 있는 영화를 즐길 수 있습니다',
        ],
        badMatchReasons: [
          '스릴 추구형: 자극적인 영화를 선호하는 성향과 맞지 않을 수 있습니다',
          '가벼운 즐거움형: 가벼운 영화를 선호하는 성향과 맞지 않을 수 있습니다',
        ],
        recommendations: [
          '즐거운 영화도 시도하기',
          '감정적 영화 시도하기',
          '유연성 기르기',
          '따뜻함 기르기',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.light;
  },
};
