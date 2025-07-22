import type { Quiz } from '../../types';

export const learningStyleQuiz: Quiz = {
  id: 'learning-style',
  title: '📚 당신은 어떤 학습자인가요?',
  description: '학습에서 당신만의 독특한 스타일을 알아보고 더 효과적인 학습 방법을 찾아보세요!',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '새로운 것을 배울 때 선호하는 방법은?',
      options: [
        { text: '🛠️ "직접 만지고 경험하면서 배워!"', value: 'hands-on' },
        { text: '📖 "이론을 먼저 차근차근 이해해!"', value: 'theoretical' },
        { text: '👥 "친구들과 함께 토론하며 배워!"', value: 'collaborative' },
        { text: '🎨 "그림과 도표로 시각적으로 배워!"', value: 'visual' },
      ],
    },
    {
      question: '학습할 때 가장 집중하는 것은?',
      options: [
        { text: '⚙️ "실제로 어떻게 사용하는지!"', value: 'application' },
        { text: '🧠 "왜 그런지 원리와 개념!"', value: 'concepts' },
        { text: '💬 "다른 사람들과의 의견 교환!"', value: 'discussion' },
        { text: '📊 "차트와 그래프 같은 자료!"', value: 'images' },
      ],
    },
    {
      question: '학습에서 가장 만족스러운 순간은?',
      options: [
        { text: '🎯 "실제로 성공했을 때!"', value: 'success' },
        { text: '💡 "아! 이해가 되었을 때!"', value: 'understanding' },
        { text: '🤝 "다른 사람과 지식을 나눴을 때!"', value: 'sharing' },
        { text: '🔍 "복잡한 패턴을 발견했을 때!"', value: 'pattern' },
      ],
    },
    {
      question: '학습할 때 선호하는 환경은?',
      options: [
        { text: '🏗️ "실습할 수 있는 활동적인 공간!"', value: 'active' },
        { text: '📚 "집중할 수 있는 조용한 도서관!"', value: 'quiet' },
        { text: '☕ "사람들과 함께할 수 있는 카페!"', value: 'social' },
        { text: '🖼️ "시각적 자료가 풍부한 공간!"', value: 'visual-rich' },
      ],
    },
    {
      question: '학습에서 가장 어려워하는 것은?',
      options: [
        { text: '📖 "이론만 있고 실습이 없는 것!"', value: 'theory-only' },
        { text: '⚡ "너무 빨리 진행되는 것!"', value: 'too-fast' },
        { text: '🤐 "혼자서만 조용히 하는 것!"', value: 'solo-quiet' },
        { text: '📝 "글로만 설명된 복잡한 내용!"', value: 'text-heavy' },
      ],
    },
    {
      question: '새로운 기술을 배울 때?',
      options: [
        { text: '🔨 "일단 해보면서 배워!"', value: 'learn-by-doing' },
        { text: '📋 "매뉴얼을 먼저 읽어!"', value: 'manual-first' },
        { text: '👨‍🏫 "누군가에게 물어봐!"', value: 'ask-others' },
        { text: '🎥 "영상 튜토리얼을 봐!"', value: 'video-tutorial' },
      ],
    },
    {
      question: '시험 공부할 때 가장 효과적인 방법은?',
      options: [
        { text: '✍️ "직접 써보고 연습문제 풀기!"', value: 'practice' },
        { text: '📚 "교재를 반복해서 읽기!"', value: 'reading' },
        { text: '👥 "스터디 그룹으로 함께 공부!"', value: 'study-group' },
        { text: '🗺️ "마인드맵과 다이어그램 그리기!"', value: 'mind-map' },
      ],
    },
    {
      question: '복잡한 개념을 이해할 때?',
      options: [
        { text: '🔧 "실제 예시로 직접 적용해봐!"', value: 'apply-examples' },
        { text: '🧩 "단계별로 나누어서 분석해!"', value: 'step-by-step' },
        { text: '💭 "다른 사람의 관점을 들어봐!"', value: 'multiple-perspectives' },
        { text: '🎨 "그림으로 그려서 표현해봐!"', value: 'visualize' },
      ],
    },
    {
      question: '강의를 들을 때 집중을 위해?',
      options: [
        { text: '📝 "직접 메모하고 필기해!"', value: 'note-taking' },
        { text: '🤔 "생각하며 조용히 집중해!"', value: 'silent-focus' },
        { text: '🙋 "질문하고 토론에 참여해!"', value: 'participate' },
        { text: '🖍️ "중요한 부분에 색칠하고 표시해!"', value: 'highlight' },
      ],
    },
    {
      question: '새로운 언어를 배운다면?',
      options: [
        { text: '🗣️ "바로 말하고 실제 상황에서 써봐!"', value: 'speak-practice' },
        { text: '📖 "문법부터 체계적으로 공부해!"', value: 'grammar-first' },
        { text: '👥 "원어민과 대화하며 배워!"', value: 'conversation' },
        { text: '📺 "영화와 드라마로 자연스럽게!"', value: 'media-learning' },
      ],
    },
    {
      question: '창의적인 프로젝트를 할 때?',
      options: [
        { text: '🛠️ "만들면서 아이디어를 발전시켜!"', value: 'create-while-thinking' },
        { text: '📋 "먼저 계획을 세우고 시작해!"', value: 'plan-first' },
        { text: '🎭 "팀원들과 브레인스토밍해!"', value: 'brainstorm' },
        { text: '🎨 "시각적 자료로 아이디어를 표현해!"', value: 'visual-ideas' },
      ],
    },
    {
      question: '실수했을 때 어떻게 배우나요?',
      options: [
        { text: '🔄 "다시 시도해서 완전히 이해해!"', value: 'retry-until-success' },
        { text: '📝 "실수를 분석하고 기록해!"', value: 'analyze-mistakes' },
        { text: '🤝 "다른 사람에게 도움을 요청해!"', value: 'seek-help' },
        { text: '🔍 "다른 방법을 찾아봐!"', value: 'find-alternatives' },
      ],
    },
    {
      question: '정보를 기억하는 가장 좋은 방법은?',
      options: [
        { text: '🏃 "반복 연습하고 몸으로 기억해!"', value: 'repetitive-practice' },
        { text: '🧠 "논리적 연결고리를 만들어!"', value: 'logical-connections' },
        { text: '📢 "다른 사람에게 설명해!"', value: 'teach-others' },
        { text: '🖼️ "이미지와 연결해서 기억해!"', value: 'visual-memory' },
      ],
    },
    {
      question: '온라인 강의를 들을 때?',
      options: [
        { text: '⏸️ "중간중간 멈춰서 따라해봐!"', value: 'pause-and-practice' },
        { text: '📒 "꼼꼼하게 노트정리해!"', value: 'detailed-notes' },
        { text: '💬 "채팅으로 질문하고 소통해!"', value: 'online-interaction' },
        { text: '📊 "시각적 자료에 집중해!"', value: 'visual-focus' },
      ],
    },
    {
      question: '그룹 프로젝트에서 당신의 역할은?',
      options: [
        { text: '🔨 "실제 작업을 맡아서 해!"', value: 'hands-on-worker' },
        { text: '🗂️ "계획을 세우고 조직해!"', value: 'organizer' },
        { text: '🎤 "발표하고 소통을 담당해!"', value: 'presenter' },
        { text: '🎨 "디자인과 시각적 요소를 담당해!"', value: 'visual-designer' },
      ],
    },
    {
      question: '새로운 취미를 배울 때?',
      options: [
        { text: '🎯 "일단 시작하고 하면서 배워!"', value: 'jump-in' },
        { text: '📚 "기초부터 단계적으로 배워!"', value: 'step-by-step-hobby' },
        { text: '👨‍🏫 "클래스에 등록해서 배워!"', value: 'class-learning' },
        { text: '📱 "앱이나 영상으로 배워!"', value: 'digital-learning' },
      ],
    },
    {
      question: '학습 목표를 설정할 때?',
      options: [
        { text: '🏆 "구체적인 성과 목표를 세워!"', value: 'achievement-goals' },
        { text: '📈 "단계별 학습 계획을 세워!"', value: 'learning-plan' },
        { text: '🤝 "함께 공부할 동료를 찾아!"', value: 'learning-buddy' },
        { text: '🗂️ "시각적으로 정리해서 계획해!"', value: 'visual-planning' },
      ],
    },
    {
      question: '학습한 내용을 복습할 때?',
      options: [
        { text: '🔁 "반복해서 직접 실행해봐!"', value: 'practice-repeat' },
        { text: '📖 "요약하고 정리해서 다시 읽어!"', value: 'summarize-review' },
        { text: '👥 "다른 사람과 토론해!"', value: 'discuss-review' },
        { text: '🗺️ "차트나 그래프로 정리해!"', value: 'visual-review' },
      ],
    },
    {
      question: '학습 스타일을 한 마디로 표현하면?',
      options: [
        { text: '🛠️ "도구를 다루는 장인 같은 스타일!"', value: 'craftsman' },
        { text: '🧙 "마법사 같은 탐구형 스타일!"', value: 'wizard' },
        { text: '🎭 "무대 위의 배우 같은 소통형 스타일!"', value: 'performer' },
        { text: '🎨 "예술가 같은 창조형 스타일!"', value: 'artist' },
      ],
    },
    {
      question: '이상적인 학습 환경은?',
      options: [
        { text: '🏗️ "실습실이나 워크숍!"', value: 'workshop' },
        { text: '📚 "조용한 도서관이나 서재!"', value: 'library' },
        { text: '☕ "스터디 카페나 세미나실!"', value: 'study-cafe' },
        { text: '🖥️ "시각적 자료가 풍부한 멀티미디어 공간!"', value: 'multimedia-space' },
      ],
    },
  ],
  resultMapping: (answers) => {
    // 답변 분석
    const kinestheticCount = answers.filter((a) =>
      [
        'hands-on',
        'application',
        'success',
        'active',
        'theory-only',
        'learn-by-doing',
        'practice',
        'apply-examples',
        'note-taking',
        'speak-practice',
        'create-while-thinking',
        'retry-until-success',
        'repetitive-practice',
        'pause-and-practice',
        'hands-on-worker',
        'jump-in',
        'achievement-goals',
        'practice-repeat',
        'craftsman',
        'workshop',
      ].includes(a as string)
    ).length;

    const analyticalCount = answers.filter((a) =>
      [
        'theoretical',
        'concepts',
        'understanding',
        'quiet',
        'too-fast',
        'manual-first',
        'reading',
        'step-by-step',
        'silent-focus',
        'grammar-first',
        'plan-first',
        'analyze-mistakes',
        'logical-connections',
        'detailed-notes',
        'organizer',
        'step-by-step-hobby',
        'learning-plan',
        'summarize-review',
        'wizard',
        'library',
      ].includes(a as string)
    ).length;

    const socialCount = answers.filter((a) =>
      [
        'collaborative',
        'discussion',
        'sharing',
        'social',
        'solo-quiet',
        'ask-others',
        'study-group',
        'multiple-perspectives',
        'participate',
        'conversation',
        'brainstorm',
        'seek-help',
        'teach-others',
        'online-interaction',
        'presenter',
        'class-learning',
        'learning-buddy',
        'discuss-review',
        'performer',
        'study-cafe',
      ].includes(a as string)
    ).length;

    const visualCount = answers.filter((a) =>
      [
        'visual',
        'images',
        'pattern',
        'visual-rich',
        'text-heavy',
        'video-tutorial',
        'mind-map',
        'visualize',
        'highlight',
        'media-learning',
        'visual-ideas',
        'find-alternatives',
        'visual-memory',
        'visual-focus',
        'visual-designer',
        'digital-learning',
        'visual-planning',
        'visual-review',
        'artist',
        'multimedia-space',
      ].includes(a as string)
    ).length;

    const scores = [
      { type: 'kinesthetic', score: kinestheticCount },
      { type: 'analytical', score: analyticalCount },
      { type: 'social', score: socialCount },
      { type: 'visual', score: visualCount },
    ];

    const maxScore = scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );

    const results = {
      kinesthetic: {
        title: '🛠️ 장인 같은 체험형 학습자',
        description: '당신은 도구를 다루는 장인처럼 손으로 직접 만지고 경험하며 배우는 체험형 학습자입니다!',
        detailedDescription: `당신은 장인처럼 손재주가 뛰어나고 실용적인 성격을 가지고 있어요. 학습에서 직접 해보고 경험하는 것을 가장 좋아하며, 이론보다는 실습을 통해 몸으로 체득하는 체험형 학습자입니다.

장인처럼 도구를 다루고 직접 만들어가면서 배우는 것을 즐기며, 추상적인 개념보다는 구체적이고 실용적인 지식을 선호해요. 실패를 두려워하지 않고 시행착오를 통해 완벽하게 익히는 것을 좋아하는 성격이에요.

하지만 장인도 때로는 도구에만 의존할 수 있듯이, 당신도 가끔은 이론적 배경을 소홀히 하거나 체계적인 학습 계획이 부족할 수 있어요. 가끔은 장인도 설계도(이론)를 보면서 더 완벽한 작품을 만들어보는 것도 좋을 것 같아요!`,
        traits: ['실용적', '체험 중심', '행동 지향', '끈기', '창의적'],
        strengths: [
          '실습 능력',
          '문제 해결력',
          '지속적 연습',
          '창의적 응용',
          '빠른 적응',
        ],
        weaknesses: [
          '이론 부족',
          '계획성 부족',
          '체계성 부족',
          '추상적 개념 어려움',
          '집중력 부족',
        ],
        goodMatches: ['🧙 마법사 같은 분석형 학습자', '🎨 예술가 같은 시각형 학습자'],
        badMatches: ['🎭 무대 위의 소통형 학습자'],
        goodMatchReasons: [
          '🧙 마법사 같은 분석형 학습자: 당신의 실습력과 상대방의 이론이 완벽한 조합을 만들어요',
          '🎨 예술가 같은 시각형 학습자: 함께 창의적이고 실용적인 프로젝트를 할 수 있어요',
        ],
        badMatchReasons: [
          '🎭 무대 위의 소통형 학습자: 너무 토론 중심적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '이론적 배경도 함께 공부해보세요',
          '체계적인 학습 계획을 세워보세요',
          '추상적 개념도 실습과 연결해보세요',
          '다른 사람과의 협업도 시도해보세요',
        ],
      },
      analytical: {
        title: '🧙 마법사 같은 분석형 학습자',
        description: '당신은 마법사처럼 깊이 있게 분석하고 체계적으로 배우는 분석형 학습자입니다!',
        detailedDescription: `당신은 마법사처럼 지혜롭고 체계적인 성격을 가지고 있어요. 학습에서 이론과 개념을 깊이 있게 이해하는 것을 좋아하며, 논리적이고 단계적인 접근을 통해 완벽하게 습득하는 분석형 학습자입니다.

마법사처럼 복잡한 지식을 체계적으로 정리하고 원리를 파악하는 것을 즐기며, 충분한 이해 없이는 다음 단계로 넘어가지 않는 신중함을 가지고 있어요. 조용하고 집중할 수 있는 환경에서 깊이 있는 사고를 하는 것을 선호하는 성격이에요.

하지만 마법사도 때로는 탑에만 있으면 현실과 거리가 멀어질 수 있듯이, 당신도 가끔은 너무 이론에만 치중하거나 실제 적용에서 어려움을 겪을 수 있어요. 가끔은 마법사도 탑에서 내려와서 현실 세계(실습)에서 마법을 써보는 것도 좋을 것 같아요!`,
        traits: ['분석적', '체계적', '논리적', '신중함', '완벽주의'],
        strengths: [
          '깊이 있는 이해',
          '체계적 정리',
          '논리적 사고',
          '집중력',
          '꼼꼼함',
        ],
        weaknesses: [
          '실습 부족',
          '속도 느림',
          '유연성 부족',
          '완벽주의',
          '사회적 학습 어려움',
        ],
        goodMatches: ['🛠️ 장인 같은 체험형 학습자', '🎭 무대 위의 소통형 학습자'],
        badMatches: ['🎨 예술가 같은 시각형 학습자'],
        goodMatchReasons: [
          '🛠️ 장인 같은 체험형 학습자: 당신의 이론과 상대방의 실습력이 완벽한 조합을 만들어요',
          '🎭 무대 위의 소통형 학습자: 당신의 깊이와 상대방의 소통력이 균형을 이룰 수 있어요',
        ],
        badMatchReasons: [
          '🎨 예술가 같은 시각형 학습자: 너무 직관적이고 시각적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '실습과 적용도 병행해보세요',
          '완벽주의를 조금 줄여보세요',
          '다른 사람과의 토론도 시도해보세요',
          '창의적인 학습 방법도 경험해보세요',
        ],
      },
      social: {
        title: '🎭 무대 위의 소통형 학습자',
        description: '당신은 무대 위의 배우처럼 다른 사람들과 소통하며 배우는 소통형 학습자입니다!',
        detailedDescription: `당신은 무대 위의 배우처럼 표현력이 풍부하고 사교적인 성격을 가지고 있어요. 학습에서 다른 사람들과의 토론과 협력을 통해 지식을 습득하는 것을 좋아하는 소통형 학습자입니다.

배우처럼 다른 사람들과의 상호작용을 통해 에너지를 얻고, 설명하고 가르치면서 자신의 이해도 깊어지는 것을 즐겨요. 혼자 공부하는 것보다는 스터디 그룹이나 토론을 통해 더 효과적으로 학습하는 성격이에요.

하지만 배우도 때로는 무대에만 있으면 개인적인 성찰이 부족할 수 있듯이, 당신도 가끔은 다른 사람에게 너무 의존하거나 혼자만의 깊이 있는 학습이 어려울 수 있어요. 가끔은 무대에서 내려와서 조용한 독백(개인 학습)의 시간도 가져보는 것이 좋을 것 같아요!`,
        traits: ['사교적', '소통적', '협력적', '표현적', '에너지 넘침'],
        strengths: [
          '뛰어난 소통력',
          '팀워크',
          '동기부여',
          '기억력 향상',
          '다양한 관점',
        ],
        weaknesses: [
          '개인 학습 어려움',
          '의존성',
          '집중력 부족',
          '깊이 부족',
          '조용한 환경 어려움',
        ],
        goodMatches: ['🧙 마법사 같은 분석형 학습자', '🎨 예술가 같은 시각형 학습자'],
        badMatches: ['🛠️ 장인 같은 체험형 학습자'],
        goodMatchReasons: [
          '🧙 마법사 같은 분석형 학습자: 당신의 소통력과 상대방의 깊이가 균형을 이룰 수 있어요',
          '🎨 예술가 같은 시각형 학습자: 함께 창의적이고 활발한 학습 환경을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🛠️ 장인 같은 체험형 학습자: 너무 실습 중심적이고 개인적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '혼자만의 학습 시간도 가져보세요',
          '깊이 있는 개인 성찰도 해보세요',
          '조용한 환경에서도 공부해보세요',
          '자립적인 학습 능력을 기르세요',
        ],
      },
      visual: {
        title: '🎨 예술가 같은 시각형 학습자',
        description: '당신은 예술가처럼 시각적이고 창의적으로 배우는 시각형 학습자입니다!',
        detailedDescription: `당신은 예술가처럼 창의적이고 시각적인 감각이 뛰어난 성격을 가지고 있어요. 학습에서 그림, 도표, 색깔 등 시각적 요소를 활용하여 정보를 처리하고 기억하는 것을 좋아하는 시각형 학습자입니다.

예술가처럼 복잡한 정보를 아름답고 이해하기 쉬운 형태로 변환하는 능력이 뛰어나며, 패턴과 관계를 시각적으로 파악하는 것을 잘해요. 마인드맵, 차트, 인포그래픽 등을 통해 학습 효과를 극대화하는 성격이에요.

하지만 예술가도 때로는 너무 형태에만 집중해서 내용을 놓칠 수 있듯이, 당신도 가끔은 시각적 요소에만 의존하거나 추상적인 개념을 이해하는데 어려움을 겪을 수 있어요. 가끔은 예술가도 작품 뒤의 깊은 의미(개념적 이해)를 탐구해보는 것도 좋을 것 같아요!`,
        traits: ['창의적', '시각적', '직관적', '패턴 인식', '예술적'],
        strengths: [
          '시각적 기억',
          '패턴 인식',
          '창의적 표현',
          '빠른 이해',
          '정보 정리',
        ],
        weaknesses: [
          '추상적 개념 어려움',
          '청각적 학습 부족',
          '논리적 순서 어려움',
          '텍스트 기반 학습 부족',
          '세부사항 놓침',
        ],
        goodMatches: ['🛠️ 장인 같은 체험형 학습자', '🎭 무대 위의 소통형 학습자'],
        badMatches: ['🧙 마법사 같은 분석형 학습자'],
        goodMatchReasons: [
          '🛠️ 장인 같은 체험형 학습자: 함께 창의적이고 실용적인 프로젝트를 할 수 있어요',
          '🎭 무대 위의 소통형 학습자: 함께 창의적이고 활발한 학습 환경을 만들 수 있어요',
        ],
        badMatchReasons: [
          '🧙 마법사 같은 분석형 학습자: 너무 논리적이고 이론 중심적인 방식과 맞지 않을 수 있어요',
        ],
        recommendations: [
          '추상적 개념도 시각화해보세요',
          '텍스트 기반 학습도 연습해보세요',
          '논리적 순서도 중요하게 생각해보세요',
          '청각적 학습 방법도 시도해보세요',
        ],
      },
    };

    return results[maxScore.type as keyof typeof results] || results.kinesthetic;
  },
};
