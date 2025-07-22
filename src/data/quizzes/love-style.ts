import type { Quiz } from '../../types';

export const loveStyleQuiz: Quiz = {
  id: 'love-style',
  title: '연애 스타일 분석',
  description: '당신의 연애 스타일을 알아보고 이상적인 파트너를 찾아보세요',
  category: '연애',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '연애를 시작할 때 당신은?',
      options: [
        { text: '천천히 서로를 알아가며 신중하게 접근한다', value: 'cautious' },
        { text: '즉시 깊이 빠져들며 열정적으로 사랑한다', value: 'passionate' },
        {
          text: '친구처럼 편안하게 시작하여 자연스럽게 발전한다',
          value: 'friendly',
        },
        {
          text: '명확한 기준과 목표를 가지고 체계적으로 접근한다',
          value: 'logical',
        },
      ],
    },
    {
      question: '파트너와의 갈등이 생겼을 때 당신은?',
      options: [
        {
          text: '즉시 대화를 통해 문제를 해결하려고 한다',
          value: 'communicative',
        },
        { text: '시간을 두고 차분히 생각한 후 대화한다', value: 'reflective' },
        {
          text: '감정적으로 반응하며 즉시 해결책을 찾는다',
          value: 'emotional',
        },
        {
          text: '논리적으로 분석하여 최선의 해결책을 찾는다',
          value: 'analytical',
        },
      ],
    },
    {
      question: '데이트에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '깊이 있는 대화와 정신적 교감', value: 'intellectual' },
        { text: '즐거운 활동과 새로운 경험', value: 'adventurous' },
        { text: '편안하고 안정적인 시간', value: 'comfortable' },
        { text: '로맨틱한 분위기와 감정적 교감', value: 'romantic' },
      ],
    },
    {
      question: '파트너에게 애정을 표현하는 방법은?',
      options: [
        { text: '말로 직접적으로 사랑을 표현한다', value: 'verbal' },
        { text: '행동과 봉사로 사랑을 보여준다', value: 'acts' },
        { text: '물리적 접촉과 스킨십으로 표현한다', value: 'physical' },
        { text: '선물과 특별한 이벤트로 표현한다', value: 'gifts' },
      ],
    },
    {
      question: '연애에서 가장 두려워하는 것은?',
      options: [
        { text: '상대방의 배신이나 거짓말', value: 'betrayal' },
        { text: '감정이 식어가는 것', value: 'cooling' },
        { text: '개인적 자유의 상실', value: 'freedom' },
        { text: '미래에 대한 불확실성', value: 'uncertainty' },
      ],
    },
    {
      question: '이상적인 파트너의 특징은?',
      options: [
        { text: '지적이고 대화가 잘 통하는 사람', value: 'intellectual' },
        { text: '열정적이고 감정 표현이 풍부한 사람', value: 'passionate' },
        { text: '안정적이고 신뢰할 수 있는 사람', value: 'reliable' },
        { text: '독립적이고 개성 있는 사람', value: 'independent' },
      ],
    },
    {
      question: '연애 관계에서 당신의 역할은?',
      options: [
        { text: '관계를 이끌고 주도하는 역할', value: 'leader' },
        { text: '상대방을 지원하고 보조하는 역할', value: 'supporter' },
        { text: '평등한 파트너로서 협력하는 역할', value: 'equal' },
        { text: '독립적이면서도 연결된 관계', value: 'independent' },
      ],
    },
    {
      question: '연애 초기에 가장 먼저 확인하고 싶은 것은?',
      options: [
        { text: '상대방의 가치관과 인생관', value: 'values' },
        { text: '상대방의 감정과 호감도', value: 'feelings' },
        { text: '상대방의 일상과 습관', value: 'lifestyle' },
        { text: '상대방의 미래 계획과 목표', value: 'future' },
      ],
    },
    {
      question: '파트너와 시간을 보낼 때 선호하는 것은?',
      options: [
        { text: '조용한 카페에서 깊이 있는 대화', value: 'deep' },
        { text: '활동적이고 재미있는 데이트', value: 'fun' },
        { text: '집에서 편안하게 영화 보기', value: 'comfort' },
        { text: '각자의 공간을 존중하며 함께하기', value: 'space' },
      ],
    },
    {
      question: '연애에서 가장 만족스러운 순간은?',
      options: [
        { text: '서로의 마음을 완전히 이해하는 순간', value: 'understanding' },
        { text: '함께 웃고 즐거워하는 순간', value: 'joy' },
        { text: '서로를 믿고 의지할 수 있는 순간', value: 'trust' },
        { text: '함께 성장하고 발전하는 순간', value: 'growth' },
      ],
    },
    {
      question: '연애 스타일을 한 마디로 표현하면?',
      options: [
        { text: '깊이 있고 진지한 연애', value: 'deep' },
        { text: '즐겁고 활기찬 연애', value: 'fun' },
        { text: '안정적이고 신뢰할 수 있는 연애', value: 'stable' },
        { text: '독립적이고 자유로운 연애', value: 'free' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const cautiousCount = answers.filter((a) => a === 'cautious').length;
    const passionateCount = answers.filter((a) => a === 'passionate').length;
    const friendlyCount = answers.filter((a) => a === 'friendly').length;
    const logicalCount = answers.filter((a) => a === 'logical').length;
    const deepCount = answers.filter((a) => a === 'deep').length;
    const funCount = answers.filter((a) => a === 'fun').length;
    const stableCount = answers.filter((a) => a === 'stable').length;
    const freeCount = answers.filter((a) => a === 'free').length;

    // 가장 많이 선택된 스타일 결정
    const styleCounts = {
      deep: deepCount + cautiousCount,
      fun: funCount + passionateCount,
      stable: stableCount + friendlyCount,
      free: freeCount + logicalCount,
    };

    const maxStyle = Object.entries(styleCounts).reduce((a, b) =>
      styleCounts[a[0] as keyof typeof styleCounts] >
      styleCounts[b[0] as keyof typeof styleCounts]
        ? a
        : b
    )[0];

    const results = {
      deep: {
        title: '깊이 있는 로맨틱형',
        description:
          '당신은 연애에서 깊이 있는 정신적 교감과 로맨틱한 감정을 중요하게 생각합니다. 상대방의 마음을 완전히 이해하고 싶어하며, 영혼의 동반자를 찾고 있습니다.',
        detailedDescription:
          '진정한 사랑을 추구하는 당신은 표면적인 관계보다는 깊이 있는 연결을 원합니다. 감정 표현이 풍부하고 로맨틱하며, 상대방의 마음을 깊이 이해하려 노력합니다.',
        traits: ['감정적', '로맨틱', '깊이 있음', '이해심 많음'],
        strengths: ['깊은 공감 능력', '로맨틱한 표현', '정신적 교감', '진정성'],
        weaknesses: [
          '과도한 감정이입',
          '현실성 부족',
          '의존적 성향',
          '완벽주의',
        ],
        goodMatches: ['안정적 신뢰형', '독립적 성장형'],
        badMatches: ['즉흥적 모험가형'],
        goodMatchReasons: [
          '안정적 신뢰형: 당신의 깊이 있는 사랑을 안정적으로 받아줍니다',
          '독립적 성장형: 함께 성장하며 깊이 있는 관계를 만들어갑니다',
        ],
        badMatchReasons: [
          '즉흥적 모험가형: 깊이 있는 관계를 부담스러워할 수 있습니다',
        ],
        recommendations: [
          '현실적 기대 갖기',
          '독립성 기르기',
          '과도한 감정이입 줄이기',
          '완벽주의 완화하기',
        ],
      },
      fun: {
        title: '즉흥적 모험가형',
        description:
          '당신은 연애에서 열정과 모험을 추구합니다. 새로운 경험을 함께하며 활기찬 관계를 원합니다.',
        detailedDescription:
          '감정 표현이 풍부하고 즉흥적이며, 함께 웃고 즐거워하는 시간을 중요하게 생각합니다. 새로운 것에 대한 호기심이 많고 모험을 즐깁니다.',
        traits: ['열정적', '즉흥적', '활기찬', '모험적'],
        strengths: ['에너지 넘침', '즐거운 분위기', '새로운 경험', '긍정적'],
        weaknesses: ['일관성 부족', '깊이 부족', '안정성 부족', '변덕스러움'],
        goodMatches: ['독립적 성장형', '안정적 신뢰형'],
        badMatches: ['깊이 있는 로맨틱형'],
        goodMatchReasons: [
          '독립적 성장형: 함께 새로운 경험을 하며 성장할 수 있습니다',
          '안정적 신뢰형: 당신의 활기찬 성격에 안정감을 제공해줍니다',
        ],
        badMatchReasons: [
          '깊이 있는 로맨틱형: 깊이 있는 관계를 부담스러워할 수 있습니다',
        ],
        recommendations: [
          '일관성 기르기',
          '깊이 있는 관계 시도하기',
          '안정감 찾기',
          '변덕스러움 줄이기',
        ],
      },
      stable: {
        title: '안정적 신뢰형',
        description:
          '당신은 연애에서 안정성과 신뢰를 가장 중요하게 생각합니다. 서로를 믿고 의지할 수 있는 관계를 원합니다.',
        detailedDescription:
          '일상적인 편안함을 추구하며, 충실하고 책임감 있는 파트너십을 만듭니다. 변화보다는 안정을 선호하고 신뢰할 수 있는 관계를 만드는 데 탁월합니다.',
        traits: ['안정적', '신뢰할 수 있음', '책임감', '편안함'],
        strengths: ['안정성 제공', '신뢰성', '책임감', '일관성'],
        weaknesses: ['지루함', '변화 저항', '자발성 부족', '감정 표현 어려움'],
        goodMatches: ['깊이 있는 로맨틱형', '즉흥적 모험가형'],
        badMatches: ['독립적 성장형'],
        goodMatchReasons: [
          '깊이 있는 로맨틱형: 당신의 안정성을 바탕으로 깊이 있는 사랑을 나눌 수 있습니다',
          '즉흥적 모험가형: 당신의 안정감이 활기찬 상대방에게 균형을 제공합니다',
        ],
        badMatchReasons: [
          '독립적 성장형: 변화를 추구하는 성향과 충돌할 수 있습니다',
        ],
        recommendations: [
          '자발성 기르기',
          '변화 수용하기',
          '감정 표현 연습하기',
          '재미 요소 추가하기',
        ],
      },
      free: {
        title: '독립적 성장형',
        description:
          '당신은 연애에서 개인의 독립성과 함께 성장하는 것을 중요하게 생각합니다. 서로의 개성을 존중하는 관계를 원합니다.',
        detailedDescription:
          '논리적이고 체계적인 접근을 선호하며, 함께 성장하고 발전하는 관계를 만듭니다. 개인의 자유와 독립성을 소중히 여기면서도 파트너와의 연결을 유지합니다.',
        traits: ['독립적', '성장 지향적', '논리적', '개성적'],
        strengths: ['자립심', '성장 추구', '논리적 사고', '개성 존중'],
        weaknesses: [
          '감정적 거리감',
          '의존성 부족',
          '로맨틱함 부족',
          '소통 어려움',
        ],
        goodMatches: ['즉흥적 모험가형', '깊이 있는 로맨틱형'],
        badMatches: ['안정적 신뢰형'],
        goodMatchReasons: [
          '즉흥적 모험가형: 함께 새로운 경험을 하며 성장할 수 있습니다',
          '깊이 있는 로맨틱형: 당신의 독립성을 이해하며 깊이 있는 관계를 만들어갑니다',
        ],
        badMatchReasons: [
          '안정적 신뢰형: 안정성을 추구하는 성향과 충돌할 수 있습니다',
        ],
        recommendations: [
          '감정 표현 늘리기',
          '의존성 기르기',
          '로맨틱함 연습하기',
          '소통 능력 개발하기',
        ],
      },
    };

    return results[maxStyle as keyof typeof results] || results.deep;
  },
};
