import type { Quiz } from '../../types';

export const loveStyleQuiz: Quiz = {
  id: 'love-style',
  title: '당신은 어떤 연인인가요?',
  description:
    '연애 스타일로 알아보는 당신의 숨겨진 성격! 어떤 연인과 가장 닮았을까요?',
  category: '연애',
  duration: '2분',
  questionCount: 15,
  questions: [
    {
      question: '연애를 시작할 때 당신의 스타일은?',
      options: [
        {
          text: '"천천히 서로를 알아가며 신중하게 접근"',
          value: 'cautious',
        },
        {
          text: '"즉시 깊이 빠져들며 열정적으로 사랑!"',
          value: 'passionate',
        },
        {
          text: '"친구처럼 편안하게 시작해서 자연스럽게 발전"',
          value: 'friendly',
        },
        {
          text: '"명확한 기준과 목표를 가지고 체계적으로 접근"',
          value: 'logical',
        },
      ],
    },
    {
      question: '파트너와 갈등이 생겼을 때 당신은?',
      options: [
        {
          text: '"즉시 대화를 통해 문제를 해결하려고 해!"',
          value: 'communicative',
        },
        {
          text: '"시간을 두고 차분히 생각한 후 대화해"',
          value: 'reflective',
        },
        {
          text: '"감정적으로 반응하며 즉시 해결책을 찾아!"',
          value: 'emotional',
        },
        {
          text: '"논리적으로 분석하여 최선의 해결책을 찾아"',
          value: 'analytical',
        },
      ],
    },
    {
      question: '데이트에서 가장 중요한 것은?',
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
        { text: '"말로 직접적으로 사랑을 표현해!"', value: 'verbal' },
        { text: '"행동과 봉사로 사랑을 보여줘"', value: 'acts' },
        { text: '"물리적 접촉과 스킨십으로 표현해!"', value: 'physical' },
        { text: '"선물과 특별한 이벤트로 표현해!"', value: 'gifts' },
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
        { text: '"관계를 이끌고 주도하는 역할!"', value: 'leader' },
        { text: '"상대방을 지원하고 보조하는 역할"', value: 'supporter' },
        { text: '"평등한 파트너로서 협력하는 역할"', value: 'equal' },
        { text: '"독립적이면서도 연결된 관계"', value: 'independent' },
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
        { text: '함께 배우고 성장하는 시간', value: 'growth' },
        { text: '함께 즐기고 웃는 시간', value: 'fun' },
        { text: '함께 편안하게 쉬는 시간', value: 'relax' },
        { text: '함께 로맨틱한 시간', value: 'romance' },
      ],
    },
    {
      question: '연애에서 가장 만족스러운 순간은?',
      options: [
        { text: '깊이 있는 대화를 나눌 때', value: 'deep-conversation' },
        { text: '함께 새로운 경험을 할 때', value: 'new-experience' },
        {
          text: '편안하고 안정적인 시간을 보낼 때',
          value: 'comfortable-time',
        },
        { text: '로맨틱한 순간을 공유할 때', value: 'romantic-moment' },
      ],
    },
    {
      question: '연애 스타일을 한 마디로 표현하면?',
      options: [
        { text: '지적이고 깊이 있는 연인', value: 'intellectual-lover' },
        { text: '열정적이고 감정적인 연인', value: 'passionate-lover' },
        { text: '편안하고 안정적인 연인', value: 'stable-lover' },
        { text: '독립적이고 자유로운 연인', value: 'free-lover' },
      ],
    },
    {
      question: '연애에서 추구하는 가치는?',
      options: [
        { text: '지적 성장과 교감', value: 'intellectual-growth' },
        { text: '열정과 감정적 교감', value: 'passionate-connection' },
        { text: '안정과 신뢰', value: 'stability-trust' },
        { text: '자유와 개성', value: 'freedom-individuality' },
      ],
    },
    {
      question: '파트너와의 갈등 해결 방법은?',
      options: [
        { text: '즉시 대화로 해결', value: 'immediate-talk' },
        { text: '시간을 두고 신중하게 해결', value: 'careful-resolution' },
        { text: '감정적으로 즉시 해결', value: 'emotional-resolution' },
        { text: '논리적으로 분석해서 해결', value: 'logical-resolution' },
      ],
    },
    {
      question: '연애에서 가장 중요한 것은?',
      options: [
        { text: '정신적 교감과 이해', value: 'mental-connection' },
        { text: '감정적 교감과 사랑', value: 'emotional-connection' },
        { text: '안정과 신뢰', value: 'stability-reliability' },
        { text: '자유와 존중', value: 'freedom-respect' },
      ],
    },
    {
      question: '이상적인 연애는?',
      options: [
        { text: '함께 성장하는 지적 연애', value: 'intellectual-romance' },
        { text: '열정적인 로맨틱 연애', value: 'passionate-romance' },
        { text: '편안하고 안정적인 연애', value: 'comfortable-romance' },
        { text: '자유롭고 독립적인 연애', value: 'free-romance' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const intellectualCount = answers.filter((a) =>
      [
        'cautious',
        'reflective',
        'intellectual',
        'analytical',
        'values',
        'growth',
        'deep-conversation',
        'intellectual-lover',
        'intellectual-growth',
        'careful-resolution',
        'mental-connection',
        'intellectual-romance',
      ].includes(a as string)
    ).length;

    const passionateCount = answers.filter((a) =>
      [
        'passionate',
        'emotional',
        'romantic',
        'physical',
        'feelings',
        'romance',
        'romantic-moment',
        'passionate-lover',
        'passionate-connection',
        'emotional-resolution',
        'emotional-connection',
        'passionate-romance',
      ].includes(a as string)
    ).length;

    const stableCount = answers.filter((a) =>
      [
        'friendly',
        'comfortable',
        'reliable',
        'supporter',
        'lifestyle',
        'relax',
        'comfortable-time',
        'stable-lover',
        'stability-trust',
        'stability-reliability',
        'comfortable-romance',
      ].includes(a as string)
    ).length;

    const independentCount = answers.filter((a) =>
      [
        'logical',
        'freedom',
        'independent',
        'leader',
        'future',
        'fun',
        'new-experience',
        'free-lover',
        'freedom-individuality',
        'freedom-respect',
        'free-romance',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'intellectual', score: intellectualCount },
      { type: 'passionate', score: passionateCount },
      { type: 'stable', score: stableCount },
      { type: 'independent', score: independentCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      intellectual: {
        title: '철학자 같은 지성가',
        description:
          '당신은 철학자처럼 깊이 있고 지적인 연애를 하는 지성가입니다!',
        detailedDescription: `당신은 철학자처럼 깊이 있고 지적인 성격을 가지고 있어요. 연애에서도 정신적 교감과 깊이 있는 대화를 중요하게 생각하는 지성가입니다. 

철학자처럼 천천히 신중하게 관계를 발전시키고, 상대방의 가치관과 인생관을 먼저 파악하려고 해요. 깊이 있는 대화를 통해 서로를 이해하고 성장하는 것을 추구하는 성격이에요.

하지만 철학자도 너무 이성적이면 감정을 놓칠 수 있듯이, 당신도 때로는 너무 분석적이거나 감정적 교감을 놓칠 수 있어요. 가끔은 철학자도 감정(로맨스)을 표현해보는 것도 좋을 것 같아요!`,
        traits: ['지적', '신중함', '분석적', '깊이있음', '이성적'],
        strengths: [
          '깊이 있는 사고',
          '신중한 판단',
          '분석 능력',
          '지적 교감',
          '성장 지향',
        ],
        weaknesses: [
          '감정 표현 부족',
          '즉흥성 부족',
          '로맨틱함 부족',
          '과도한 분석',
          '느림',
        ],
        goodMatches: ['로맨틱 시인 같은 열정가', '따뜻한 집 같은 안정가'],
        badMatches: ['자유로운 새 같은 독립가'],
        goodMatchReasons: [
          '로맨틱 시인 같은 열정가: 당신의 지성이 상대방의 열정과 조화를 이룰 수 있어요',
          '따뜻한 집 같은 안정가: 함께 깊이 있고 안정적인 관계를 만들 수 있어요',
        ],
        badMatchReasons: [
          '자유로운 새 같은 독립가: 너무 자유롭고 즉흥적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 감정 표현도 해보세요',
          '즉흥성도 기르세요',
          '로맨틱함도 추구해보세요',
          '과도한 분석을 줄여보세요',
        ],
      },
      passionate: {
        title: '로맨틱 시인 같은 열정가',
        description:
          '당신은 로맨틱 시인처럼 열정적이고 감정적인 연애를 하는 열정가입니다!',
        detailedDescription: `당신은 로맨틱 시인처럼 열정적이고 감정적인 성격을 가지고 있어요. 연애에서도 깊은 감정과 로맨틱한 교감을 중요하게 생각하는 열정가입니다. 

로맨틱 시인처럼 즉시 깊이 빠져들며 열정적으로 사랑하고, 감정 표현이 풍부한 성격이에요. 로맨틱한 분위기와 감정적 교감을 추구하며, 물리적 접촉과 스킨십으로 애정을 표현해요.

하지만 로맨틱 시인도 너무 감정적이면 이성을 잃을 수 있듯이, 당신도 때로는 너무 감정적이거나 성급한 판단을 할 수 있어요. 가끔은 로맨틱 시인도 이성(신중함)을 가져보는 것도 좋을 것 같아요!`,
        traits: ['열정적', '감정적', '로맨틱', '즉흥적', '표현적'],
        strengths: ['감정 표현', '열정', '로맨틱함', '즉흥성', '교감 능력'],
        weaknesses: [
          '성급함',
          '이성 부족',
          '안정성 부족',
          '과도한 감정',
          '집착',
        ],
        goodMatches: ['철학자 같은 지성가', '자유로운 새 같은 독립가'],
        badMatches: ['따뜻한 집 같은 안정가'],
        goodMatchReasons: [
          '철학자 같은 지성가: 당신의 열정이 상대방의 지성과 조화를 이룰 수 있어요',
          '자유로운 새 같은 독립가: 함께 자유롭고 열정적인 관계를 만들 수 있어요',
        ],
        badMatchReasons: [
          '따뜻한 집 같은 안정가: 너무 안정적이고 보수적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 신중한 판단도 해보세요',
          '이성도 기르세요',
          '안정성도 추구해보세요',
          '과도한 감정을 조절해보세요',
        ],
      },
      stable: {
        title: '따뜻한 집 같은 안정가',
        description:
          '당신은 따뜻한 집처럼 편안하고 안정적인 연애를 하는 안정가입니다!',
        detailedDescription: `당신은 따뜻한 집처럼 편안하고 안정적인 성격을 가지고 있어요. 연애에서도 신뢰와 안정을 중요하게 생각하며, 상대방을 지원하고 보조하는 역할을 잘 하는 안정가입니다. 

따뜻한 집처럼 편안하고 안정적인 시간을 선호하고, 상대방의 일상과 습관을 중요하게 생각해요. 행동과 봉사로 애정을 표현하며, 신뢰할 수 있는 관계를 추구하는 성격이에요.

하지만 따뜻한 집도 너무 안정적이면 지루할 수 있듯이, 당신도 때로는 너무 보수적이거나 새로운 경험을 두려워할 수 있어요. 가끔은 따뜻한 집에서 나와서 모험(새로운 경험)을 해보는 것도 좋을 것 같아요!`,
        traits: ['안정적', '신뢰성', '편안함', '보수적', '봉사적'],
        strengths: ['안정성', '신뢰성', '편안함', '봉사 정신', '지지 능력'],
        weaknesses: [
          '새로움 회피',
          '보수적',
          '즐거움 부족',
          '도전 부족',
          '지루함',
        ],
        goodMatches: ['철학자 같은 지성가', '로맨틱 시인 같은 열정가'],
        badMatches: ['자유로운 새 같은 독립가'],
        goodMatchReasons: [
          '철학자 같은 지성가: 함께 깊이 있고 안정적인 관계를 만들 수 있어요',
          '로맨틱 시인 같은 열정가: 당신의 안정성이 상대방의 열정에 균형을 제공해요',
        ],
        badMatchReasons: [
          '자유로운 새 같은 독립가: 너무 자유롭고 즉흥적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 새로운 경험도 시도해보세요',
          '즐거움도 추구해보세요',
          '도전을 두려워하지 마세요',
          '새로움에 대한 개방성을 가져보세요',
        ],
      },
      independent: {
        title: '자유로운 새 같은 독립가',
        description:
          '당신은 자유로운 새처럼 독립적이고 자유로운 연애를 하는 독립가입니다!',
        detailedDescription: `당신은 자유로운 새처럼 독립적이고 자유로운 성격을 가지고 있어요. 연애에서도 개인적 자유와 독립성을 중요하게 생각하며, 관계를 이끌고 주도하는 역할을 선호하는 독립가입니다. 

자유로운 새처럼 명확한 기준과 목표를 가지고 체계적으로 접근하며, 상대방의 미래 계획과 목표를 중요하게 생각해요. 함께 즐기고 웃는 시간을 선호하며, 독립적이면서도 연결된 관계를 추구하는 성격이에요.

하지만 자유로운 새도 너무 독립적이면 외로울 수 있듯이, 당신도 때로는 너무 개인적이거나 상대방과의 깊은 연결을 놓칠 수 있어요. 가끔은 자유로운 새도 둥지(깊은 연결)를 만들어보는 것도 좋을 것 같아요!`,
        traits: ['독립적', '자유로움', '주도적', '개성적', '목표 지향적'],
        strengths: ['독립성', '자유로움', '주도성', '개성', '목표 의식'],
        weaknesses: [
          '의존성 부족',
          '깊이 부족',
          '안정성 부족',
          '외로움',
          '연결 부족',
        ],
        goodMatches: ['로맨틱 시인 같은 열정가', '철학자 같은 지성가'],
        badMatches: ['따뜻한 집 같은 안정가'],
        goodMatchReasons: [
          '로맨틱 시인 같은 열정가: 함께 자유롭고 열정적인 관계를 만들 수 있어요',
          '철학자 같은 지성가: 상대방의 지성이 당신의 독립성과 조화를 이룰 수 있어요',
        ],
        badMatchReasons: [
          '따뜻한 집 같은 안정가: 너무 안정적이고 보수적인 성향과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '가끔은 깊은 연결도 만들어보세요',
          '의존성도 기르세요',
          '안정성도 추구해보세요',
          '외로움을 두려워하지 마세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.stable;
  },
};
