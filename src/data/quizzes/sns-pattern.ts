import type { Quiz } from '../../types';

export const snsPatternQuiz: Quiz = {
  id: 'sns-pattern',
  title: 'SNS 사용 패턴 분석',
  description: '당신의 SNS 사용 패턴을 통해 성격을 분석해보세요',
  category: '라이프스타일',
  duration: '1분 30초',
  questionCount: 15,
  questions: [
    {
      question: 'SNS를 사용하는 주요 목적은?',
      options: [
        {
          text: '다른 사람들과 소통하고 관계를 유지한다',
          value: 'communication',
        },
        { text: '자신의 일상을 공유하고 기록한다', value: 'sharing' },
        { text: '정보를 얻고 새로운 것을 배운다', value: 'learning' },
        { text: '오락과 즐거움을 위해 사용한다', value: 'entertainment' },
      ],
    },
    {
      question: 'SNS에 게시물을 올릴 때 당신은?',
      options: [
        { text: '자주 올리고 활발하게 활동한다', value: 'active' },
        { text: '신중하게 고려한 후 올린다', value: 'cautious' },
        { text: '특별한 순간만 선별해서 올린다', value: 'selective' },
        { text: '거의 올리지 않고 주로 구경한다', value: 'passive' },
      ],
    },
    {
      question: 'SNS에서 가장 즐기는 활동은?',
      options: [
        { text: '댓글과 좋아요로 다른 사람과 소통', value: 'interaction' },
        { text: '자신의 일상을 사진과 글로 공유', value: 'self-expression' },
        { text: '다양한 정보와 콘텐츠를 탐색', value: 'exploration' },
        { text: '재미있는 영상과 콘텐츠를 감상', value: 'consumption' },
      ],
    },
    {
      question: 'SNS에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '다른 사람들과의 연결과 소통', value: 'connection' },
        { text: '자신의 개성과 스타일 표현', value: 'expression' },
        { text: '유용한 정보와 지식 습득', value: 'information' },
        { text: '즐거움과 오락', value: 'fun' },
      ],
    },
    {
      question: 'SNS 사용 시간을 어떻게 관리하나요?',
      options: [
        { text: '자유롭게 사용하고 시간 제한을 두지 않는다', value: 'free' },
        { text: '정해진 시간만 사용하고 제한을 둔다', value: 'limited' },
        {
          text: '필요할 때만 사용하고 목적이 있을 때 접속한다',
          value: 'purposeful',
        },
        { text: '거의 사용하지 않고 가끔 확인만 한다', value: 'minimal' },
      ],
    },
    {
      question: 'SNS에서 다른 사람의 게시물에 반응할 때?',
      options: [
        { text: '적극적으로 댓글과 좋아요를 남긴다', value: 'engaged' },
        { text: '신중하게 고려한 후 반응한다', value: 'thoughtful' },
        { text: '관심 있는 내용에만 반응한다', value: 'selective' },
        { text: '주로 구경만 하고 반응하지 않는다', value: 'observer' },
      ],
    },
    {
      question: 'SNS에서 가장 만족스러운 순간은?',
      options: [
        {
          text: '다른 사람들과 의미 있는 대화를 나눌 때',
          value: 'meaningful-talk',
        },
        {
          text: '자신의 게시물에 좋은 반응을 받을 때',
          value: 'positive-feedback',
        },
        { text: '유용한 정보나 새로운 것을 발견할 때', value: 'discovery' },
        { text: '재미있는 콘텐츠를 즐길 때', value: 'enjoyment' },
      ],
    },
    {
      question: 'SNS에서 가장 어려워하는 것은?',
      options: [
        {
          text: '다른 사람의 부정적인 반응을 받는 것',
          value: 'negative-reaction',
        },
        { text: '자신의 개인정보를 공개하는 것', value: 'privacy' },
        { text: '시간을 효율적으로 관리하는 것', value: 'time-management' },
        { text: '관심 없는 콘텐츠를 필터링하는 것', value: 'filtering' },
      ],
    },
    {
      question: 'SNS 사용 스타일을 한 마디로 표현하면?',
      options: [
        { text: '활발하고 소통하는 스타일', value: 'communicative' },
        { text: '신중하고 선별적인 스타일', value: 'selective' },
        { text: '정보 수집과 학습 중심 스타일', value: 'informational' },
        { text: '오락과 즐거움 중심 스타일', value: 'entertainment' },
      ],
    },
    {
      question: 'SNS에서 가장 좋아하는 콘텐츠는?',
      options: [
        { text: '친구들의 일상과 소식', value: 'friends-life' },
        { text: '개성 있고 창의적인 콘텐츠', value: 'creative' },
        { text: '유용한 정보와 팁', value: 'useful' },
        { text: '재미있고 즐거운 콘텐츠', value: 'fun' },
      ],
    },
    {
      question: 'SNS에서 가장 싫어하는 것은?',
      options: [
        { text: '부정적이고 공격적인 댓글', value: 'negative-comments' },
        { text: '과도한 개인정보 공개', value: 'over-sharing' },
        { text: '허위 정보와 가짜 뉴스', value: 'fake-news' },
        { text: '지나치게 상업적인 콘텐츠', value: 'commercial' },
      ],
    },
    {
      question: 'SNS에서 가장 잘하는 것은?',
      options: [
        { text: '다른 사람들과의 소통과 관계 형성', value: 'relationship' },
        { text: '자신의 개성과 스타일 표현', value: 'self-expression' },
        { text: '유용한 정보 수집과 정리', value: 'information-gathering' },
        { text: '재미있는 콘텐츠 발견과 공유', value: 'content-discovery' },
      ],
    },
    {
      question: 'SNS 사용에서 가장 중요한 가치는?',
      options: [
        { text: '연결과 소통', value: 'connection' },
        { text: '개성과 표현', value: 'expression' },
        { text: '정보와 지식', value: 'knowledge' },
        { text: '즐거움과 오락', value: 'entertainment' },
      ],
    },
    {
      question: 'SNS에서 이상적인 경험은?',
      options: [
        {
          text: '의미 있는 대화와 깊이 있는 소통',
          value: 'deep-communication',
        },
        { text: '자신의 개성을 자유롭게 표현', value: 'free-expression' },
        { text: '유용한 정보와 새로운 지식 습득', value: 'learning' },
        { text: '즐거운 시간과 스트레스 해소', value: 'stress-relief' },
      ],
    },
    {
      question: 'SNS 사용 후 가장 만족스러운 것은?',
      options: [
        {
          text: '새로운 사람들과의 연결을 만들었을 때',
          value: 'new-connections',
        },
        { text: '자신의 생각과 감정을 표현했을 때', value: 'self-expression' },
        { text: '유용한 정보나 새로운 것을 배웠을 때', value: 'new-knowledge' },
        { text: '즐거운 시간을 보냈을 때', value: 'enjoyable-time' },
      ],
    },
  ],
  results: {
    'social-communicator': {
      title: '사회적 소통가형',
      description:
        '당신은 SNS를 통해 다른 사람들과의 소통과 관계를 중요하게 생각하는 타입입니다. 활발하게 댓글과 좋아요를 남기며, 의미 있는 대화를 추구합니다. SNS를 통해 새로운 사람들과 연결하고 기존 관계를 유지하는 것을 즐깁니다.',
      characteristics: [
        '다른 사람들과의 소통을 중요하게 생각함',
        '활발한 댓글과 좋아요 활동',
        '의미 있는 대화와 관계 형성',
        '새로운 연결과 기존 관계 유지',
      ],
    },
    'selective-expressor': {
      title: '선별적 표현가형',
      description:
        '당신은 SNS에서 신중하고 선별적인 접근을 하는 타입입니다. 자신의 개성과 스타일을 표현하는 것을 중요하게 생각하며, 특별한 순간만 선별해서 공유합니다. 개인정보 보호에 신경 쓰며, 품질 높은 콘텐츠를 추구합니다.',
      characteristics: [
        '신중하고 선별적인 SNS 사용',
        '개성과 스타일 표현을 중요하게 생각함',
        '특별한 순간만 선별해서 공유',
        '개인정보 보호와 품질 높은 콘텐츠 추구',
      ],
    },
    'informational-learner': {
      title: '정보 수집 학습자형',
      description:
        '당신은 SNS를 통해 정보 수집과 학습을 중요하게 생각하는 타입입니다. 유용한 정보와 새로운 지식을 습득하는 것을 목표로 하며, 목적이 있을 때만 SNS에 접속합니다. 효율적인 정보 관리와 시간 활용을 추구합니다.',
      characteristics: [
        '정보 수집과 학습을 중요하게 생각함',
        '유용한 정보와 새로운 지식 습득',
        '목적이 있을 때만 SNS 접속',
        '효율적인 정보 관리와 시간 활용',
      ],
    },
    'entertainment-enjoyer': {
      title: '오락 즐거움형',
      description:
        '당신은 SNS를 통해 오락과 즐거움을 추구하는 타입입니다. 재미있는 콘텐츠를 감상하고 즐기는 것을 목표로 하며, 스트레스 해소와 여가 시간 활용을 중요하게 생각합니다. 자유롭고 편안한 SNS 사용을 선호합니다.',
      characteristics: [
        '오락과 즐거움을 추구함',
        '재미있는 콘텐츠 감상과 즐김',
        '스트레스 해소와 여가 시간 활용',
        '자유롭고 편안한 SNS 사용',
      ],
    },
  },
};
