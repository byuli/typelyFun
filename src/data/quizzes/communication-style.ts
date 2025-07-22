import type { Quiz } from '../../types';

export const communicationStyleQuiz: Quiz = {
  id: 'communication-style',
  title: '소통 스타일 테스트',
  description: '당신의 소통 스타일을 알아보고 효과적인 소통 방법을 찾아보세요',
  category: '성격',
  duration: '2분',
  questionCount: 20,
  questions: [
    {
      question: '대화를 시작할 때 당신은?',
      options: [
        { text: '직접적이고 명확하게 본론을 말한다', value: 'direct' },
        { text: '상대방의 기분을 먼저 확인한다', value: 'empathetic' },
        { text: '논리적으로 체계적으로 설명한다', value: 'logical' },
        { text: '재미있고 흥미로운 주제로 시작한다', value: 'entertaining' },
      ],
    },
    {
      question: '의견이 다를 때 당신은?',
      options: [
        { text: '자신의 의견을 명확히 주장한다', value: 'assertive' },
        { text: '상대방의 관점을 이해하려 노력한다', value: 'understanding' },
        {
          text: '객관적 사실을 바탕으로 논리적으로 설명한다',
          value: 'factual',
        },
        { text: '중간점을 찾아 타협한다', value: 'compromising' },
      ],
    },
    {
      question: '상대방이 감정적으로 반응할 때?',
      options: [
        { text: '문제를 즉시 해결하려고 한다', value: 'problem-solver' },
        {
          text: '상대방의 감정을 먼저 인정하고 공감한다',
          value: 'emotionally-supportive',
        },
        { text: '차분하게 상황을 분석한다', value: 'analytical' },
        { text: '분위기를 바꿔서 긴장을 완화한다', value: 'mood-changer' },
      ],
    },
    {
      question: '정보를 전달할 때 선호하는 방식은?',
      options: [
        { text: '핵심 내용을 간결하게 전달한다', value: 'concise' },
        {
          text: '상대방이 이해할 수 있도록 자세히 설명한다',
          value: 'detailed',
        },
        { text: '구조화된 형태로 체계적으로 전달한다', value: 'structured' },
        {
          text: '예시와 스토리를 통해 재미있게 전달한다',
          value: 'storytelling',
        },
      ],
    },
    {
      question: '소통에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '효율성과 명확성', value: 'efficiency' },
        { text: '상대방과의 연결과 이해', value: 'connection' },
        { text: '정확성과 논리성', value: 'accuracy' },
        { text: '즐거움과 긍정적 분위기', value: 'positivity' },
      ],
    },
    {
      question: '상대방이 말을 할 때 당신은?',
      options: [
        { text: '핵심 내용에 집중하여 듣는다', value: 'focused' },
        { text: '감정과 톤까지 세심하게 듣는다', value: 'attentive' },
        { text: '논리적 구조를 파악하며 듣는다', value: 'analytical-listener' },
        { text: '적극적으로 반응하며 듣는다', value: 'responsive' },
      ],
    },
    {
      question: '피드백을 줄 때 당신은?',
      options: [
        { text: '직접적이고 솔직하게 피드백을 준다', value: 'honest' },
        { text: '상대방의 감정을 고려하여 부드럽게 전달한다', value: 'gentle' },
        { text: '구체적이고 구체적인 개선점을 제시한다', value: 'specific' },
        { text: '긍정적인 면을 먼저 언급한다', value: 'positive-first' },
      ],
    },
    {
      question: '갈등 상황에서 당신은?',
      options: [
        { text: '문제를 즉시 해결하려고 한다', value: 'immediate-resolution' },
        {
          text: '상대방의 입장을 먼저 이해하려 한다',
          value: 'understanding-first',
        },
        {
          text: '객관적 사실을 바탕으로 분석한다',
          value: 'objective-analysis',
        },
        {
          text: '분위기를 개선하여 갈등을 완화한다',
          value: 'mood-improvement',
        },
      ],
    },
    {
      question: '소통 스타일을 한 마디로 표현하면?',
      options: [
        { text: '직접적이고 효율적인 소통', value: 'direct-efficient' },
        { text: '공감적이고 이해하는 소통', value: 'empathetic-understanding' },
        { text: '논리적이고 체계적인 소통', value: 'logical-systematic' },
        { text: '즐겁고 긍정적인 소통', value: 'enjoyable-positive' },
      ],
    },
    {
      question: '소통에서 가장 어려워하는 것은?',
      options: [
        { text: '감정적 상황을 다루는 것', value: 'emotional-situations' },
        { text: '복잡한 정보를 전달하는 것', value: 'complex-information' },
        {
          text: '상대방의 감정을 이해하는 것',
          value: 'understanding-emotions',
        },
        {
          text: '지루한 주제를 재미있게 만드는 것',
          value: 'making-boring-interesting',
        },
      ],
    },
    {
      question: '소통에서 가장 잘하는 것은?',
      options: [
        { text: '명확하고 간결한 메시지 전달', value: 'clear-concise' },
        { text: '상대방의 감정에 공감하고 이해', value: 'emotional-empathy' },
        {
          text: '복잡한 정보를 체계적으로 정리',
          value: 'systematic-organization',
        },
        {
          text: '즐거운 분위기로 대화를 이끌기',
          value: 'enjoyable-conversation',
        },
      ],
    },
    {
      question: '소통에서 가장 만족스러운 순간은?',
      options: [
        { text: '메시지가 정확히 전달되었을 때', value: 'accurate-delivery' },
        {
          text: '상대방과 깊이 있는 이해를 나눌 때',
          value: 'deep-understanding',
        },
        {
          text: '논리적으로 완벽한 설명을 했을 때',
          value: 'perfect-explanation',
        },
        { text: '즐거운 대화를 나눌 때', value: 'enjoyable-conversation' },
      ],
    },
    {
      question: '소통에서 가장 중요한 가치는?',
      options: [
        { text: '효율성과 명확성', value: 'efficiency-clarity' },
        { text: '연결과 이해', value: 'connection-understanding' },
        { text: '정확성과 논리성', value: 'accuracy-logic' },
        { text: '즐거움과 긍정성', value: 'enjoyment-positivity' },
      ],
    },
    {
      question: '소통 후 가장 좋아지는 것은?',
      options: [
        { text: '목표를 달성하고 성과를 얻었을 때', value: 'goal-achievement' },
        {
          text: '상대방과의 관계가 깊어졌을 때',
          value: 'relationship-deepening',
        },
        { text: '정보가 정확히 전달되었을 때', value: 'information-delivery' },
        { text: '즐거운 시간을 보냈을 때', value: 'enjoyable-time' },
      ],
    },
    {
      question: '소통에서 가장 어려운 결정은?',
      options: [
        { text: '효율성과 상세함 사이의 선택', value: 'efficiency-detail' },
        {
          text: '직접성과 부드러움 사이의 선택',
          value: 'directness-gentleness',
        },
        { text: '논리성과 감정 사이의 선택', value: 'logic-emotion' },
        { text: '진실성과 즐거움 사이의 선택', value: 'truth-enjoyment' },
      ],
    },
    {
      question: '소통에서 가장 좋아하는 것은?',
      options: [
        { text: '명확하고 효율적인 대화', value: 'clear-efficient' },
        { text: '깊이 있는 감정적 교감', value: 'deep-emotional' },
        { text: '논리적이고 체계적인 설명', value: 'logical-systematic' },
        { text: '즐겁고 활기찬 대화', value: 'enjoyable-lively' },
      ],
    },
    {
      question: '소통에서 가장 싫어하는 것은?',
      options: [
        { text: '모호하고 불분명한 메시지', value: 'vague-unclear' },
        { text: '감정적이고 비논리적인 대화', value: 'emotional-illogical' },
        { text: '지루하고 단조로운 대화', value: 'boring-monotonous' },
        { text: '직접적이고 공격적인 대화', value: 'direct-aggressive' },
      ],
    },
    {
      question: '이상적인 소통 파트너는?',
      options: [
        {
          text: '명확하고 효율적인 소통을 하는 사람',
          value: 'clear-efficient',
        },
        { text: '공감적이고 이해하는 사람', value: 'empathetic-understanding' },
        { text: '논리적이고 체계적인 사람', value: 'logical-systematic' },
        { text: '즐겁고 긍정적인 사람', value: 'enjoyable-positive' },
      ],
    },
    {
      question: '소통에서 성장하고 싶은 방향은?',
      options: [
        { text: '더욱 효율적이고 명확한 소통', value: 'more-efficient-clear' },
        {
          text: '더욱 공감적이고 이해하는 소통',
          value: 'more-empathetic-understanding',
        },
        {
          text: '더욱 논리적이고 체계적인 소통',
          value: 'more-logical-systematic',
        },
        { text: '더욱 즐겁고 긍정적인 소통', value: 'more-enjoyable-positive' },
      ],
    },
    {
      question: '소통에서 가장 중요한 것은?',
      options: [
        { text: '목표 달성과 성과', value: 'goal-achievement' },
        { text: '관계 형성과 이해', value: 'relationship-understanding' },
        { text: '정보 전달과 정확성', value: 'information-accuracy' },
        { text: '즐거움과 만족감', value: 'enjoyment-satisfaction' },
      ],
    },
  ],
  results: {
    'direct-communicator': {
      title: '직접적 소통가형',
      description:
        '당신은 소통에서 직접적이고 효율적인 접근을 선호하는 타입입니다. 명확하고 간결한 메시지 전달을 중요하게 생각하며, 목표 지향적인 소통을 합니다. 논리적이고 체계적인 설명을 선호하며, 문제 해결에 집중합니다.',
      characteristics: [
        '직접적이고 효율적인 소통',
        '명확하고 간결한 메시지 전달',
        '목표 지향적인 소통',
        '논리적이고 체계적인 설명',
      ],
    },
    'empathetic-communicator': {
      title: '공감적 소통가형',
      description:
        '당신은 소통에서 공감과 이해를 중요하게 생각하는 타입입니다. 상대방의 감정과 관점을 먼저 이해하려 노력하며, 관계 형성을 중시합니다. 부드럽고 따뜻한 소통을 선호하며, 갈등 상황에서도 이해를 바탕으로 해결합니다.',
      characteristics: [
        '공감과 이해를 중요하게 생각함',
        '상대방의 감정과 관점 이해',
        '관계 형성을 중시하는 소통',
        '부드럽고 따뜻한 소통 스타일',
      ],
    },
    'logical-communicator': {
      title: '논리적 소통가형',
      description:
        '당신은 소통에서 논리성과 정확성을 중요하게 생각하는 타입입니다. 객관적 사실을 바탕으로 체계적인 설명을 선호하며, 복잡한 정보를 구조화하여 전달합니다. 분석적이고 신중한 접근을 하며, 정확한 정보 전달을 추구합니다.',
      characteristics: [
        '논리성과 정확성을 중요하게 생각함',
        '객관적 사실 기반의 설명',
        '체계적이고 구조화된 정보 전달',
        '분석적이고 신중한 접근',
      ],
    },
    'entertaining-communicator': {
      title: '즐거운 소통가형',
      description:
        '당신은 소통에서 즐거움과 긍정적인 분위기를 중요하게 생각하는 타입입니다. 재미있고 활기찬 대화를 선호하며, 상대방을 즐겁게 하는 것을 목표로 합니다. 스토리텔링과 예시를 통해 메시지를 전달하며, 긍정적인 에너지를 나눕니다.',
      characteristics: [
        '즐거움과 긍정적인 분위기 중시',
        '재미있고 활기찬 대화 선호',
        '스토리텔링과 예시를 통한 전달',
        '긍정적인 에너지 공유',
      ],
    },
  },
};
