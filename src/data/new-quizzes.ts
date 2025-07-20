import type { Quiz } from '../types';

export const newQuizzes: Quiz[] = [
  {
    id: 'communication-style',
    title: '소통 스타일 테스트',
    description: '직설적? 우회적? 당신만의 완벽한 소통 방식을 발견해보세요',
    category: '소통',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '의견이 다를 때 당신은?',
        options: [
          { text: '직접적으로 말한다', value: 'direct' },
          { text: '부드럽게 우회해서 표현한다', value: 'indirect' }
        ]
      },
      {
        question: '칭찬을 받으면?',
        options: [
          { text: '고맙다고 바로 받아들인다', value: 'accept' },
          { text: '부끄러워하며 겸손하게 거절한다', value: 'modest' }
        ]
      },
      {
        question: '화가 났을 때?',
        options: [
          { text: '즉시 표현한다', value: 'express' },
          { text: '시간을 두고 차분해진 후 말한다', value: 'calm' }
        ]
      },
      {
        question: '설명할 때 선호하는 방식은?',
        options: [
          { text: '핵심부터 간단명료하게', value: 'concise' },
          { text: '배경부터 차근차근 자세히', value: 'detailed' }
        ]
      },
      {
        question: '대화 중 상대방이 말을 끊으면?',
        options: [
          { text: '끝까지 들어달라고 요청한다', value: 'assertive' },
          { text: '조용히 기다린다', value: 'patient' }
        ]
      },
      {
        question: '모르는 것이 있을 때?',
        options: [
          { text: '바로 질문한다', value: 'ask' },
          { text: '혼자 찾아보고 나서 질문한다', value: 'research' }
        ]
      },
      {
        question: '상대방의 실수를 지적할 때?',
        options: [
          { text: '바로 정정한다', value: 'correct' },
          { text: '나중에 개인적으로 말한다', value: 'private' }
        ]
      },
      {
        question: '감정을 표현할 때?',
        options: [
          { text: '얼굴에 바로 드러난다', value: 'open' },
          { text: '속으로만 간직한다', value: 'reserved' }
        ]
      },
      {
        question: '의사결정을 할 때?',
        options: [
          { text: '빠르게 결정한다', value: 'quick' },
          { text: '충분히 고민한 후 결정한다', value: 'thoughtful' }
        ]
      },
      {
        question: '갈등 상황에서?',
        options: [
          { text: '직접 대화로 해결한다', value: 'confront' },
          { text: '중재자를 통해 해결한다', value: 'mediate' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const directCount = answers.filter(a => ['direct', 'accept', 'express', 'concise', 'assertive', 'ask', 'correct', 'open', 'quick', 'confront'].includes(a as string)).length;
      const indirectCount = answers.filter(a => ['indirect', 'modest', 'calm', 'detailed', 'patient', 'research', 'private', 'reserved', 'thoughtful', 'mediate'].includes(a as string)).length;

      if (directCount >= 6) {
        return {
          title: '직설적 소통가 💬',
          description: '솔직하고 명확한 소통을 선호하는 당신! 효율적이고 직접적인 대화로 빠른 결과를 만들어냅니다.',
          detailedDescription: '당신은 솔직하고 명확한 소통을 선호하는 직설적인 성격입니다. 핵심을 바로 말하고, 감정을 숨기지 않으며, 빠른 의사결정을 추구합니다. 갈등 상황에서도 직접적인 대화로 해결하려고 하며, 상대방의 기분보다는 진실과 효율성을 중시합니다.',
          traits: ['솔직함', '직설적', '효율적', '명확함', '결단력'],
          strengths: ['빠른 소통', '명확한 의사전달', '효율적 문제해결', '솔직한 피드백', '결단력'],
          weaknesses: ['감정적 둔감', '상대방 기분 고려 부족', '갈등 유발 가능', '성급한 판단', '우회적 표현 부족'],
          goodMatches: ['공감적 소통가', '균형잡힌 소통가'],
          badMatches: ['우회적 소통가', '조용한 소통가'],
          goodMatchReasons: ['공감적 소통가: 당신의 직설성을 부드럽게 조절해주며 효과적인 소통을 도와줍니다', '균형잡힌 소통가: 상황에 맞는 적절한 소통 방식을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['우회적 소통가: 직접적인 소통 방식이 부담스러워 갈등이 생길 수 있습니다', '조용한 소통가: 너무 직설적인 표현으로 상처를 줄 수 있습니다'],
          recommendations: ['상대방 감정 고려하기', '부드러운 표현 연습하기', '인내심 기르기', '상황별 소통 방식 조절하기', '공감 능력 개발하기']
        };
      } else if (indirectCount >= 6) {
        return {
          title: '우회적 소통가 🌸',
          description: '부드럽고 조화로운 소통을 선호하는 당신! 상대방의 감정을 고려한 따뜻한 대화로 관계를 돈독히 합니다.',
          detailedDescription: '당신은 상대방의 감정을 고려한 부드럽고 조화로운 소통을 선호하는 사람입니다. 직접적인 표현보다는 우회적이고 예의 바른 방식으로 의사를 전달하며, 갈등을 피하고 조화를 추구합니다. 상대방의 기분을 상하게 하지 않으려고 노력하며, 공감적이고 따뜻한 대화를 중시합니다.',
          traits: ['부드러움', '공감적', '조화 추구', '예의 바름', '갈등 회피'],
          strengths: ['상대방 배려', '조화로운 관계', '공감 능력', '갈등 예방', '따뜻한 소통'],
          weaknesses: ['의사전달 불명확', '갈등 해결 어려움', '우유부단함', '진실 회피', '자기주장 부족'],
          goodMatches: ['직설적 소통가', '균형잡힌 소통가'],
          badMatches: ['공감적 소통가', '조용한 소통가'],
          goodMatchReasons: ['직설적 소통가: 당신의 부드러운 소통을 보완해주며 명확한 의사전달을 도와줍니다', '균형잡힌 소통가: 상황에 맞는 적절한 소통 방식을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['공감적 소통가: 너무 우회적인 표현으로 소통이 어려울 수 있습니다', '조용한 소통가: 둘 다 소극적인 소통으로 진전이 어려울 수 있습니다'],
          recommendations: ['명확한 의사전달 연습하기', '갈등 해결 기술 배우기', '자기주장 기르기', '직설적 표현도 시도하기', '진실 담담하기']
        };
      } else {
        return {
          title: '균형잡힌 소통가 ⚖️',
          description: '상황에 맞는 적절한 소통을 하는 당신! 유연하고 지혜로운 대화로 다양한 사람들과 조화를 이룹니다.',
          detailedDescription: '당신은 상황과 상대방에 따라 적절한 소통 방식을 선택하는 균형잡힌 소통가입니다. 때로는 직설적으로, 때로는 부드럽게 표현할 줄 알며, 상대방의 성격과 상황을 고려한 유연한 소통을 합니다. 갈등 상황에서도 중재자 역할을 잘하며, 다양한 사람들과 조화로운 관계를 유지합니다.',
          traits: ['유연성', '적응력', '균형감', '지혜', '조화'],
          strengths: ['상황 적응력', '다양한 소통 방식', '갈등 조정', '관계 조화', '효과적 소통'],
          weaknesses: ['뚜렷한 개성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 소통 스타일과 조화 가능'],
          badMatches: ['극단적인 소통 성향의 사람'],
          goodMatchReasons: ['모든 소통 스타일과 조화 가능: 어떤 소통 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 소통 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 소통 철학 정립하기', '일관된 스타일 개발하기', '전문 분야 만들기', '깊이 있는 소통 시도하기', '개성 있는 표현 기르기']
        };
      }
    }
  },
  {
    id: 'learning-style',
    title: '학습 스타일 테스트',
    description: '시각적? 청각적? 당신만의 완벽한 학습법을 발견해보세요',
    category: '학습',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '새로운 것을 배울 때 선호하는 방법은?',
        options: [
          { text: '그림이나 도표로 보면서', value: 'visual' },
          { text: '설명을 들으면서', value: 'auditory' }
        ]
      },
      {
        question: '정보를 기억할 때?',
        options: [
          { text: '이미지나 색깔로 연상한다', value: 'visual' },
          { text: '소리나 리듬으로 기억한다', value: 'auditory' }
        ]
      },
      {
        question: '공부할 때 가장 효과적인 것은?',
        options: [
          { text: '마인드맵이나 플로우차트 그리기', value: 'visual' },
          { text: '소리 내어 읽거나 설명하기', value: 'auditory' }
        ]
      },
      {
        question: '방향을 찾을 때?',
        options: [
          { text: '지도를 보고 찾는다', value: 'visual' },
          { text: '사람에게 물어서 찾는다', value: 'auditory' }
        ]
      },
      {
        question: '이름을 기억할 때?',
        options: [
          { text: '얼굴과 연결해서 기억한다', value: 'visual' },
          { text: '소리와 연결해서 기억한다', value: 'auditory' }
        ]
      },
      {
        question: '프레젠테이션을 할 때?',
        options: [
          { text: '시각적 자료를 많이 사용한다', value: 'visual' },
          { text: '설명에 집중한다', value: 'auditory' }
        ]
      },
      {
        question: '휴대폰을 사용할 때?',
        options: [
          { text: '앱 아이콘의 위치로 찾는다', value: 'visual' },
          { text: '앱 이름을 검색한다', value: 'auditory' }
        ]
      },
      {
        question: '문제를 해결할 때?',
        options: [
          { text: '그림을 그리거나 도표를 만든다', value: 'visual' },
          { text: '말로 설명하면서 생각한다', value: 'auditory' }
        ]
      },
      {
        question: '휴식 시간에 선호하는 것은?',
        options: [
          { text: '영화나 드라마 보기', value: 'visual' },
          { text: '음악 듣기', value: 'auditory' }
        ]
      },
      {
        question: '새로운 장소에 갔을 때?',
        options: [
          { text: '주변 환경을 자세히 관찰한다', value: 'visual' },
          { text: '사람들과 대화하며 정보를 얻는다', value: 'auditory' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const visualCount = answers.filter(a => a === 'visual').length;
      const auditoryCount = answers.filter(a => a === 'auditory').length;

      if (visualCount >= 6) {
        return {
          title: '시각적 학습자 👁️',
          description: '보는 것을 통해 배우는 당신! 이미지와 색깔로 정보를 효과적으로 처리하는 시각적 천재입니다.',
          detailedDescription: '당신은 시각적 정보를 통해 가장 효과적으로 학습하는 시각적 학습자입니다. 그림, 도표, 색깔, 공간적 배열을 통해 정보를 기억하고 이해하는 능력이 뛰어납니다. 마인드맵이나 플로우차트를 그리는 것을 좋아하며, 시각적 자료가 있는 학습에서 최고의 성과를 보입니다.',
          traits: ['시각적', '공간적', '색감 민감', '이미지 기억', '도표 선호'],
          strengths: ['시각적 정보 처리', '공간적 이해', '색깔 활용', '도표 작성', '이미지 기억'],
          weaknesses: ['청각적 정보 부족', '음성 설명 어려움', '소리 기억 부족', '대화 중심 학습 어려움', '청각적 피드백 부족'],
          goodMatches: ['청각적 학습자', '균형잡힌 학습자'],
          badMatches: ['청각적 학습자', '균형잡힌 학습자'],
          goodMatchReasons: ['청각적 학습자: 서로 다른 학습 방식을 보완하며 다양한 방법으로 학습할 수 있습니다', '균형잡힌 학습자: 시각적 학습의 장점을 함께 활용할 수 있습니다'],
          badMatchReasons: ['청각적 학습자: 학습 방식의 차이로 함께 공부하기 어려울 수 있습니다', '균형잡힌 학습자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['청각적 학습도 시도하기', '음성 설명 듣기 연습', '대화 중심 학습 참여', '다양한 학습 방법 활용', '균형잡힌 학습법 개발']
        };
      } else if (auditoryCount >= 6) {
        return {
          title: '청각적 학습자 🎧',
          description: '듣는 것을 통해 배우는 당신! 소리와 대화로 정보를 효과적으로 처리하는 청각적 천재입니다.',
          detailedDescription: '당신은 청각적 정보를 통해 가장 효과적으로 학습하는 청각적 학습자입니다. 설명을 듣고, 대화를 통해, 소리와 리듬으로 정보를 기억하고 이해하는 능력이 뛰어납니다. 강의나 토론을 통한 학습에서 최고의 성과를 보이며, 소리 내어 읽거나 설명하는 것을 좋아합니다.',
          traits: ['청각적', '대화 선호', '소리 민감', '음성 기억', '설명 선호'],
          strengths: ['청각적 정보 처리', '대화 중심 학습', '음성 기억', '설명 능력', '토론 참여'],
          weaknesses: ['시각적 정보 부족', '도표 이해 어려움', '이미지 기억 부족', '조용한 학습 어려움', '시각적 자료 활용 부족'],
          goodMatches: ['시각적 학습자', '균형잡힌 학습자'],
          badMatches: ['시각적 학습자', '균형잡힌 학습자'],
          goodMatchReasons: ['시각적 학습자: 서로 다른 학습 방식을 보완하며 다양한 방법으로 학습할 수 있습니다', '균형잡힌 학습자: 청각적 학습의 장점을 함께 활용할 수 있습니다'],
          badMatchReasons: ['시각적 학습자: 학습 방식의 차이로 함께 공부하기 어려울 수 있습니다', '균형잡힌 학습자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['시각적 학습도 시도하기', '도표나 그림 활용하기', '조용한 학습 연습', '다양한 학습 방법 활용', '균형잡힌 학습법 개발']
        };
      } else {
        return {
          title: '균형잡힌 학습자 ⚖️',
          description: '다양한 방법으로 배우는 당신! 시각과 청각을 모두 활용하는 유연한 학습 천재입니다.',
          detailedDescription: '당신은 시각적, 청각적 학습 방식을 모두 활용할 수 있는 균형잡힌 학습자입니다. 상황과 내용에 따라 적절한 학습 방법을 선택할 줄 알며, 다양한 학습 도구를 효과적으로 활용합니다. 시각적 자료와 음성 설명을 모두 잘 처리하며, 다양한 학습 환경에 적응할 수 있습니다.',
          traits: ['균형감', '유연성', '적응력', '다재다능', '통합적'],
          strengths: ['다양한 학습 방법', '상황 적응력', '통합적 이해', '유연한 학습', '효과적 학습'],
          weaknesses: ['뚜렷한 특성 부족', '전문성 부족', '일관성 부족', '깊이 부족', '우유부단함'],
          goodMatches: ['모든 학습 스타일과 조화 가능'],
          badMatches: ['극단적인 학습 성향의 사람'],
          goodMatchReasons: ['모든 학습 스타일과 조화 가능: 어떤 학습 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 학습 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 학습 철학 정립하기', '일관된 스타일 개발하기', '전문 분야 만들기', '깊이 있는 학습 시도하기', '개성 있는 학습법 만들기']
        };
      }
    }
  },
  {
    id: 'decision-making',
    title: '의사결정 스타일 테스트',
    description: '빠른 결정? 신중한 분석? 당신만의 의사결정 방식을 발견해보세요',
    category: '의사결정',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '중요한 결정을 내릴 때?',
        options: [
          { text: '직감에 따라 빠르게 결정한다', value: 'intuitive' },
          { text: '충분한 정보를 모은 후 결정한다', value: 'analytical' }
        ]
      },
      {
        question: '새로운 기회가 왔을 때?',
        options: [
          { text: '즉시 도전한다', value: 'risk' },
          { text: '장단점을 분석한 후 결정한다', value: 'careful' }
        ]
      },
      {
        question: '문제가 생겼을 때?',
        options: [
          { text: '즉시 해결책을 찾는다', value: 'quick' },
          { text: '원인을 분석한 후 해결한다', value: 'thorough' }
        ]
      },
      {
        question: '여러 선택지가 있을 때?',
        options: [
          { text: '첫 번째로 떠오른 것을 선택한다', value: 'first' },
          { text: '모든 옵션을 비교 분석한다', value: 'compare' }
        ]
      },
      {
        question: '실패했을 때?',
        options: [
          { text: '다른 방법을 즉시 시도한다', value: 'adapt' },
          { text: '실패 원인을 분석한 후 다시 시도한다', value: 'learn' }
        ]
      },
      {
        question: '새로운 정보를 받았을 때?',
        options: [
          { text: '즉시 행동에 반영한다', value: 'act' },
          { text: '기존 정보와 비교 분석한다', value: 'evaluate' }
        ]
      },
      {
        question: '팀 프로젝트에서 의견이 다를 때?',
        options: [
          { text: '내 의견을 강하게 주장한다', value: 'assertive' },
          { text: '모든 의견을 종합해서 결정한다', value: 'consensus' }
        ]
      },
      {
        question: '시간이 부족할 때?',
        options: [
          { text: '가능한 한 빨리 결정한다', value: 'fast' },
          { text: '핵심만 분석해서 결정한다', value: 'essential' }
        ]
      },
      {
        question: '과거 경험을 활용할 때?',
        options: [
          { text: '비슷한 상황의 느낌을 따른다', value: 'feeling' },
          { text: '구체적인 결과를 분석한다', value: 'data' }
        ]
      },
      {
        question: '미래를 계획할 때?',
        options: [
          { text: '큰 그림을 그리고 시작한다', value: 'vision' },
          { text: '단계별로 세부 계획을 세운다', value: 'detail' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const intuitiveCount = answers.filter(a => ['intuitive', 'risk', 'quick', 'first', 'adapt', 'act', 'assertive', 'fast', 'feeling', 'vision'].includes(a as string)).length;
      const analyticalCount = answers.filter(a => ['analytical', 'careful', 'thorough', 'compare', 'learn', 'evaluate', 'consensus', 'essential', 'data', 'detail'].includes(a as string)).length;

      if (intuitiveCount >= 6) {
        return {
          title: '직감적 의사결정자 ⚡',
          description: '빠르고 직감적인 결정을 내리는 당신! 순간의 영감으로 놀라운 결과를 만들어내는 천재입니다.',
          detailedDescription: '당신은 직감과 감각에 따라 빠르게 의사결정을 내리는 직감적 의사결정자입니다. 복잡한 분석보다는 순간의 영감과 경험을 바탕으로 한 빠른 판단을 선호하며, 새로운 기회에 과감하게 도전합니다. 변화하는 상황에 빠르게 적응하며, 창의적이고 혁신적인 해결책을 찾아내는 능력이 뛰어납니다.',
          traits: ['직감적', '빠른 판단', '도전적', '적응력', '창의적'],
          strengths: ['빠른 의사결정', '변화 적응력', '창의적 해결', '도전 정신', '직감적 판단'],
          weaknesses: ['성급한 판단', '분석 부족', '위험 관리 부족', '일관성 부족', '감정적 결정'],
          goodMatches: ['분석적 의사결정자', '균형잡힌 의사결정자'],
          badMatches: ['분석적 의사결정자', '균형잡힌 의사결정자'],
          goodMatchReasons: ['분석적 의사결정자: 당신의 직감을 분석으로 보완해주며 신중한 검토를 도와줍니다', '균형잡힌 의사결정자: 상황에 맞는 적절한 의사결정 방식을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['분석적 의사결정자: 의사결정 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 의사결정자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['분석적 사고 연습하기', '신중한 검토 습관 기르기', '위험 관리 능력 개발하기', '일관성 있는 판단 기준 만들기', '감정적 결정 피하기']
        };
      } else if (analyticalCount >= 6) {
        return {
          title: '분석적 의사결정자 🔍',
          description: '신중하고 체계적인 분석을 통해 결정하는 당신! 논리적이고 정확한 판단으로 안정적인 결과를 만들어냅니다.',
          detailedDescription: '당신은 충분한 정보 수집과 체계적인 분석을 통해 의사결정을 내리는 분석적 의사결정자입니다. 감정보다는 논리와 데이터를 중시하며, 위험을 최소화하고 안정적인 결과를 추구합니다. 과거 경험과 구체적인 정보를 바탕으로 한 신중한 판단을 선호하며, 장기적인 관점에서 의사결정을 내립니다.',
          traits: ['분석적', '신중함', '논리적', '체계적', '안정적'],
          strengths: ['정확한 분석', '위험 관리', '논리적 판단', '체계적 접근', '안정적 결과'],
          weaknesses: ['느린 의사결정', '기회 상실', '과도한 분석', '창의성 부족', '변화 적응 어려움'],
          goodMatches: ['직감적 의사결정자', '균형잡힌 의사결정자'],
          badMatches: ['직감적 의사결정자', '균형잡힌 의사결정자'],
          goodMatchReasons: ['직감적 의사결정자: 당신의 분석을 직감으로 보완해주며 빠른 대응을 도와줍니다', '균형잡힌 의사결정자: 상황에 맞는 적절한 의사결정 방식을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['직감적 의사결정자: 의사결정 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 의사결정자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['빠른 판단 연습하기', '직감 활용하기', '창의적 사고 개발하기', '변화 적응력 기르기', '기회 포착 능력 향상하기']
        };
      } else {
        return {
          title: '균형잡힌 의사결정자 ⚖️',
          description: '상황에 맞는 적절한 의사결정을 하는 당신! 직감과 분석을 조화롭게 활용하는 지혜로운 의사결정자입니다.',
          detailedDescription: '당신은 상황과 중요도에 따라 직감과 분석을 적절히 조합하여 의사결정을 내리는 균형잡힌 의사결정자입니다. 긴급한 상황에서는 빠른 판단을, 중요한 결정에서는 신중한 분석을 선호하며, 다양한 의사결정 도구를 효과적으로 활용합니다. 직감적 판단과 논리적 분석을 모두 활용하여 최적의 결과를 만들어냅니다.',
          traits: ['균형감', '적응력', '지혜', '유연성', '통합적'],
          strengths: ['상황 적응력', '다양한 의사결정 방식', '최적화된 결과', '유연한 접근', '효과적 의사결정'],
          weaknesses: ['뚜렷한 특성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 의사결정 스타일과 조화 가능'],
          badMatches: ['극단적인 의사결정 성향의 사람'],
          goodMatchReasons: ['모든 의사결정 스타일과 조화 가능: 어떤 의사결정 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 의사결정 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 의사결정 철학 정립하기', '일관된 기준 개발하기', '전문 분야 만들기', '깊이 있는 분석 시도하기', '개성 있는 판단 기준 만들기']
        };
      }
    }
  },
  {
    id: 'creativity-style',
    title: '창의성 스타일 테스트',
    description: '혁신적? 실용적? 당신만의 창의적 사고 방식을 발견해보세요',
    category: '창의성',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '새로운 아이디어를 떠올릴 때?',
        options: [
          { text: '완전히 새로운 것을 상상한다', value: 'innovative' },
          { text: '기존 것을 개선하는 방향으로 생각한다', value: 'practical' }
        ]
      },
      {
        question: '문제를 해결할 때?',
        options: [
          { text: '혁신적인 방법을 찾는다', value: 'revolutionary' },
          { text: '검증된 방법을 활용한다', value: 'proven' }
        ]
      },
      {
        question: '작업을 할 때?',
        options: [
          { text: '자유롭게 실험한다', value: 'experimental' },
          { text: '체계적으로 진행한다', value: 'systematic' }
        ]
      },
      {
        question: '영감을 받을 때?',
        options: [
          { text: '예술이나 자연에서 받는다', value: 'artistic' },
          { text: '실제 문제나 필요에서 받는다', value: 'needs' }
        ]
      },
      {
        question: '아이디어를 평가할 때?',
        options: [
          { text: '독창성과 새로움을 중시한다', value: 'originality' },
          { text: '실용성과 효과를 중시한다', value: 'effectiveness' }
        ]
      },
      {
        question: '실패했을 때?',
        options: [
          { text: '완전히 다른 접근을 시도한다', value: 'different' },
          { text: '기존 방법을 개선한다', value: 'improve' }
        ]
      },
      {
        question: '팀 프로젝트에서?',
        options: [
          { text: '혁신적인 아이디어를 제안한다', value: 'innovate' },
          { text: '실행 가능한 방안을 제시한다', value: 'feasible' }
        ]
      },
      {
        question: '새로운 기술을 배울 때?',
        options: [
          { text: '창의적으로 활용하는 방법을 찾는다', value: 'creative' },
          { text: '기본 기능을 충실히 익힌다', value: 'basic' }
        ]
      },
      {
        question: '미래를 상상할 때?',
        options: [
          { text: '완전히 다른 세상을 그린다', value: 'utopian' },
          { text: '현실적인 발전을 상상한다', value: 'realistic' }
        ]
      },
      {
        question: '결과물을 만들 때?',
        options: [
          { text: '예술적 완성도를 추구한다', value: 'artistic' },
          { text: '실용적 기능을 중시한다', value: 'functional' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const innovativeCount = answers.filter(a => ['innovative', 'revolutionary', 'experimental', 'artistic', 'originality', 'different', 'innovate', 'creative', 'utopian', 'artistic'].includes(a as string)).length;
      const practicalCount = answers.filter(a => ['practical', 'proven', 'systematic', 'needs', 'effectiveness', 'improve', 'feasible', 'basic', 'realistic', 'functional'].includes(a as string)).length;

      if (innovativeCount >= 6) {
        return {
          title: '혁신적 창작자 🎨',
          description: '완전히 새로운 것을 창조하는 당신! 독창적이고 예술적인 아이디어로 세상을 바꾸는 천재입니다.',
          detailedDescription: '당신은 기존의 틀을 벗어나 완전히 새로운 것을 창조하는 혁신적 창작자입니다. 독창성과 예술성을 중시하며, 실용성보다는 창의적 완성도를 추구합니다. 자유로운 상상력과 실험적 정신을 바탕으로 혁신적인 아이디어를 만들어내며, 예술, 자연, 철학 등에서 영감을 받아 독특한 관점을 제시합니다.',
          traits: ['혁신적', '독창적', '예술적', '실험적', '자유로운'],
          strengths: ['독창적 아이디어', '혁신적 사고', '예술적 감각', '실험 정신', '창의적 문제해결'],
          weaknesses: ['실용성 부족', '실행력 부족', '일관성 부족', '현실성 부족', '효율성 부족'],
          goodMatches: ['실용적 창작자', '균형잡힌 창작자'],
          badMatches: ['실용적 창작자', '균형잡힌 창작자'],
          goodMatchReasons: ['실용적 창작자: 당신의 혁신적 아이디어를 실용적으로 구현해주며 실행력을 보완해줍니다', '균형잡힌 창작자: 혁신과 실용의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['실용적 창작자: 창의성과 실용성의 차이로 갈등이 생길 수 있습니다', '균형잡힌 창작자: 한 가지 방식에만 집중하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['실용성 고려하기', '실행 가능성 검토하기', '현실적 제약 이해하기', '효율성 개선하기', '일관성 있는 작업 방식 개발하기']
        };
      } else if (practicalCount >= 6) {
        return {
          title: '실용적 창작자 🔧',
          description: '실용적이고 효과적인 해결책을 만드는 당신! 검증된 방법으로 확실한 결과를 만들어내는 실용주의자입니다.',
          detailedDescription: '당신은 실용성과 효과를 중시하는 실용적 창작자입니다. 독창성보다는 검증된 방법과 체계적인 접근을 선호하며, 실제 문제 해결과 사용자 니즈에 집중합니다. 기존의 것을 개선하고 최적화하는 능력이 뛰어나며, 실행 가능하고 효과적인 해결책을 만들어냅니다.',
          traits: ['실용적', '체계적', '효과적', '검증된', '실행 가능'],
          strengths: ['실용적 해결책', '체계적 접근', '효과적 구현', '검증된 방법', '실행력'],
          weaknesses: ['독창성 부족', '혁신성 부족', '예술성 부족', '실험 정신 부족', '자유로운 사고 부족'],
          goodMatches: ['혁신적 창작자', '균형잡힌 창작자'],
          badMatches: ['혁신적 창작자', '균형잡힌 창작자'],
          goodMatchReasons: ['혁신적 창작자: 당신의 실용적 접근을 혁신적 아이디어로 보완해주며 창의성을 더해줍니다', '균형잡힌 창작자: 실용과 혁신의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['혁신적 창작자: 실용성과 창의성의 차이로 갈등이 생길 수 있습니다', '균형잡힌 창작자: 한 가지 방식에만 집중하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['독창성 개발하기', '혁신적 사고 연습하기', '실험 정신 기르기', '자유로운 상상력 발휘하기', '예술적 감각 개발하기']
        };
      } else {
        return {
          title: '균형잡힌 창작자 ⚖️',
          description: '혁신과 실용을 조화롭게 결합하는 당신! 창의적이면서도 실용적인 완벽한 해결책을 만들어내는 지혜로운 창작자입니다.',
          detailedDescription: '당신은 혁신적 창의성과 실용적 효과를 모두 고려하는 균형잡힌 창작자입니다. 상황과 목적에 따라 독창적 아이디어와 검증된 방법을 적절히 조합하며, 창의적이면서도 실행 가능한 해결책을 만들어냅니다. 예술적 완성도와 실용적 기능을 모두 추구하며, 다양한 창작 도구와 방법을 효과적으로 활용합니다.',
          traits: ['균형감', '통합적', '적응력', '지혜', '조화'],
          strengths: ['균형잡힌 접근', '통합적 사고', '상황 적응력', '효과적 창작', '실행 가능한 혁신'],
          weaknesses: ['뚜렷한 특성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 창작 스타일과 조화 가능'],
          badMatches: ['극단적인 창작 성향의 사람'],
          goodMatchReasons: ['모든 창작 스타일과 조화 가능: 어떤 창작 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 창작 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 창작 철학 정립하기', '일관된 스타일 개발하기', '전문 분야 만들기', '깊이 있는 창작 시도하기', '개성 있는 표현 기르기']
        };
      }
    }
  },
  {
    id: 'leadership-style',
    title: '리더십 스타일 테스트',
    description: '지시적? 민주적? 당신만의 리더십 방식을 발견해보세요',
    category: '리더십',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '팀 프로젝트에서 문제가 생겼을 때?',
        options: [
          { text: '직접 해결책을 제시한다', value: 'directive' },
          { text: '팀원들과 함께 해결책을 찾는다', value: 'democratic' }
        ]
      },
      {
        question: '새로운 아이디어를 제안받았을 때?',
        options: [
          { text: '내 판단으로 즉시 결정한다', value: 'autocratic' },
          { text: '팀원들의 의견을 종합한다', value: 'participative' }
        ]
      },
      {
        question: '팀원이 실수를 했을 때?',
        options: [
          { text: '바로 지적하고 수정을 요구한다', value: 'corrective' },
          { text: '개인적으로 상담하고 함께 해결한다', value: 'supportive' }
        ]
      },
      {
        question: '목표를 설정할 때?',
        options: [
          { text: '내가 명확한 목표를 제시한다', value: 'goal-setter' },
          { text: '팀원들과 함께 목표를 정한다', value: 'collaborative' }
        ]
      },
      {
        question: '업무를 분배할 때?',
        options: [
          { text: '각자의 능력에 맞게 직접 배정한다', value: 'assigner' },
          { text: '팀원들이 원하는 업무를 선택하게 한다', value: 'facilitator' }
        ]
      },
      {
        question: '성과 평가를 할 때?',
        options: [
          { text: '객관적 지표로 평가한다', value: 'objective' },
          { text: '개인적 성장과 노력을 고려한다', value: 'developmental' }
        ]
      },
      {
        question: '갈등이 발생했을 때?',
        options: [
          { text: '내가 중재하여 해결한다', value: 'mediator' },
          { text: '당사자들이 직접 해결하도록 돕는다', value: 'coach' }
        ]
      },
      {
        question: '새로운 정책을 도입할 때?',
        options: [
          { text: '효율성을 위해 즉시 적용한다', value: 'efficient' },
          { text: '팀원들의 의견을 수렴한 후 적용한다', value: 'inclusive' }
        ]
      },
      {
        question: '팀원의 성장을 돕는 방법은?',
        options: [
          { text: '명확한 지시와 피드백을 제공한다', value: 'instructor' },
          { text: '자기주도적 학습을 격려한다', value: 'mentor' }
        ]
      },
      {
        question: '팀의 성과가 좋지 않을 때?',
        options: [
          { text: '더 엄격한 관리와 감독을 한다', value: 'controller' },
          { text: '팀원들과 함께 원인을 분석한다', value: 'analyzer' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const directiveCount = answers.filter(a => ['directive', 'autocratic', 'corrective', 'goal-setter', 'assigner', 'objective', 'mediator', 'efficient', 'instructor', 'controller'].includes(a as string)).length;
      const democraticCount = answers.filter(a => ['democratic', 'participative', 'supportive', 'collaborative', 'facilitator', 'developmental', 'coach', 'inclusive', 'mentor', 'analyzer'].includes(a as string)).length;

      if (directiveCount >= 6) {
        return {
          title: '지시적 리더 🎯',
          description: '명확한 지시와 통제로 팀을 이끄는 당신! 효율적이고 체계적인 관리로 확실한 결과를 만들어냅니다.',
          detailedDescription: '당신은 명확한 지시와 체계적인 통제를 통해 팀을 이끄는 지시적 리더입니다. 목표 설정부터 업무 분배, 성과 평가까지 모든 과정에서 주도적인 역할을 하며, 효율성과 결과를 중시합니다. 빠른 의사결정과 명확한 피드백을 통해 팀의 성과를 향상시키며, 구조화된 환경에서 최고의 성과를 보입니다.',
          traits: ['지시적', '통제적', '효율적', '결과 지향', '주도적'],
          strengths: ['빠른 의사결정', '명확한 지시', '효율적 관리', '결과 달성', '체계적 운영'],
          weaknesses: ['팀원 자율성 부족', '창의성 억제', '갈등 유발 가능', '팀원 성장 제한', '유연성 부족'],
          goodMatches: ['민주적 리더', '균형잡힌 리더'],
          badMatches: ['민주적 리더', '균형잡힌 리더'],
          goodMatchReasons: ['민주적 리더: 당신의 지시적 리더십을 민주적 참여로 보완해주며 팀원들의 자율성을 높여줍니다', '균형잡힌 리더: 상황에 맞는 적절한 리더십 방식을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['민주적 리더: 리더십 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 리더: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['팀원 자율성 존중하기', '민주적 참여 유도하기', '창의성 격려하기', '유연한 리더십 개발하기', '팀원 성장 지원하기']
        };
      } else if (democraticCount >= 6) {
        return {
          title: '민주적 리더 🤝',
          description: '팀원들의 참여와 협력을 중시하는 당신! 포용적이고 지지하는 리더십으로 팀의 잠재력을 최대한 끌어올립니다.',
          detailedDescription: '당신은 팀원들의 참여와 협력을 중시하는 민주적 리더입니다. 의사결정에서 팀원들의 의견을 수렴하고, 개인의 성장과 자율성을 존중하며, 포용적이고 지지하는 환경을 만듭니다. 갈등 해결에서도 당사자들이 직접 해결할 수 있도록 돕고, 팀원들의 창의성과 혁신을 격려합니다.',
          traits: ['민주적', '포용적', '지지적', '협력적', '성장 지향'],
          strengths: ['팀원 참여 유도', '자율성 존중', '창의성 격려', '팀원 성장 지원', '협력적 환경 조성'],
          weaknesses: ['느린 의사결정', '효율성 부족', '명확한 지시 부족', '통제력 부족', '결과 지향성 부족'],
          goodMatches: ['지시적 리더', '균형잡힌 리더'],
          badMatches: ['지시적 리더', '균형잡힌 리더'],
          goodMatchReasons: ['지시적 리더: 당신의 민주적 리더십을 지시적 관리로 보완해주며 효율성을 높여줍니다', '균형잡힌 리더: 상황에 맞는 적절한 리더십 방식을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['지시적 리더: 리더십 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 리더: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['빠른 의사결정 연습하기', '명확한 지시 제공하기', '효율성 개선하기', '결과 지향적 사고 기르기', '적절한 통제력 발휘하기']
        };
      } else {
        return {
          title: '균형잡힌 리더 ⚖️',
          description: '상황에 맞는 적절한 리더십을 발휘하는 당신! 지시와 민주를 조화롭게 활용하는 지혜로운 리더입니다.',
          detailedDescription: '당신은 상황과 팀의 특성에 따라 지시적 리더십과 민주적 리더십을 적절히 조합하는 균형잡힌 리더입니다. 긴급한 상황에서는 빠른 지시를, 창의성이 필요한 상황에서는 민주적 참여를 선호하며, 팀원들의 성장 단계와 능력에 맞는 리더십을 발휘합니다. 효율성과 팀원 성장을 모두 고려한 최적의 리더십을 구현합니다.',
          traits: ['균형감', '적응력', '유연성', '지혜', '통합적'],
          strengths: ['상황 적응력', '다양한 리더십 방식', '최적화된 관리', '유연한 접근', '효과적 리더십'],
          weaknesses: ['뚜렷한 특성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 리더십 스타일과 조화 가능'],
          badMatches: ['극단적인 리더십 성향의 사람'],
          goodMatchReasons: ['모든 리더십 스타일과 조화 가능: 어떤 리더십 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 리더십 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 리더십 철학 정립하기', '일관된 스타일 개발하기', '전문 분야 만들기', '깊이 있는 리더십 시도하기', '개성 있는 리더십 기르기']
        };
      }
    }
  },
  {
    id: 'problem-solving',
    title: '문제해결 스타일 테스트',
    description: '논리적? 직관적? 당신만의 문제해결 방식을 발견해보세요',
    category: '문제해결',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '복잡한 문제를 마주했을 때?',
        options: [
          { text: '단계별로 분석해서 해결한다', value: 'logical' },
          { text: '직감에 따라 해결책을 찾는다', value: 'intuitive' }
        ]
      },
      {
        question: '새로운 문제를 접했을 때?',
        options: [
          { text: '기존 경험과 지식을 활용한다', value: 'experience' },
          { text: '창의적인 방법을 시도한다', value: 'creative' }
        ]
      },
      {
        question: '문제의 원인을 찾을 때?',
        options: [
          { text: '체계적으로 조사하고 분석한다', value: 'systematic' },
          { text: '패턴을 보고 추측한다', value: 'pattern' }
        ]
      },
      {
        question: '해결책을 선택할 때?',
        options: [
          { text: '장단점을 비교 분석한다', value: 'analysis' },
          { text: '가장 적합한 것을 직감으로 선택한다', value: 'gut' }
        ]
      },
      {
        question: '실패했을 때?',
        options: [
          { text: '원인을 분석하고 다른 방법을 시도한다', value: 'learn' },
          { text: '완전히 다른 접근을 시도한다', value: 'different' }
        ]
      },
      {
        question: '팀과 함께 문제를 해결할 때?',
        options: [
          { text: '각자의 역할을 명확히 분담한다', value: 'role' },
          { text: '자유롭게 아이디어를 공유한다', value: 'ideas' }
        ]
      },
      {
        question: '시간이 부족할 때?',
        options: [
          { text: '핵심만 파악하고 빠르게 해결한다', value: 'quick' },
          { text: '직감에 따라 즉시 행동한다', value: 'immediate' }
        ]
      },
      {
        question: '정보가 부족할 때?',
        options: [
          { text: '추가 정보를 수집한다', value: 'gather' },
          { text: '가능한 시나리오를 상상한다', value: 'imagine' }
        ]
      },
      {
        question: '여러 해결책이 있을 때?',
        options: [
          { text: '가장 효율적인 것을 선택한다', value: 'efficient' },
          { text: '가장 혁신적인 것을 선택한다', value: 'innovative' }
        ]
      },
      {
        question: '문제 해결 후?',
        options: [
          { text: '과정을 정리하고 기록한다', value: 'document' },
          { text: '다음 문제로 넘어간다', value: 'move' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const logicalCount = answers.filter(a => ['logical', 'experience', 'systematic', 'analysis', 'learn', 'role', 'quick', 'gather', 'efficient', 'document'].includes(a as string)).length;
      const intuitiveCount = answers.filter(a => ['intuitive', 'creative', 'pattern', 'gut', 'different', 'ideas', 'immediate', 'imagine', 'innovative', 'move'].includes(a as string)).length;

      if (logicalCount >= 6) {
        return {
          title: '논리적 문제해결자 🧠',
          description: '체계적이고 분석적인 접근으로 문제를 해결하는 당신! 논리적 사고와 경험을 바탕으로 확실한 해결책을 찾아냅니다.',
          detailedDescription: '당신은 논리적 사고와 체계적인 분석을 통해 문제를 해결하는 논리적 문제해결자입니다. 문제를 단계별로 분석하고, 기존 경험과 지식을 활용하며, 장단점을 비교하여 최적의 해결책을 선택합니다. 실패했을 때도 원인을 분석하고 학습하여 더 나은 방법을 찾아내며, 효율적이고 검증된 방법을 선호합니다.',
          traits: ['논리적', '체계적', '분석적', '경험적', '효율적'],
          strengths: ['체계적 분석', '논리적 사고', '경험 활용', '효율적 해결', '학습 능력'],
          weaknesses: ['창의성 부족', '직감 활용 부족', '유연성 부족', '혁신성 부족', '직관적 판단 부족'],
          goodMatches: ['직관적 문제해결자', '균형잡힌 문제해결자'],
          badMatches: ['직관적 문제해결자', '균형잡힌 문제해결자'],
          goodMatchReasons: ['직관적 문제해결자: 당신의 논리적 접근을 직감으로 보완해주며 창의적 해결책을 제시해줍니다', '균형잡힌 문제해결자: 논리와 직감의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['직관적 문제해결자: 문제해결 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 문제해결자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['창의적 사고 개발하기', '직감 활용하기', '유연한 접근 시도하기', '혁신적 방법 탐구하기', '직관적 판단 기르기']
        };
      } else if (intuitiveCount >= 6) {
        return {
          title: '직관적 문제해결자 ✨',
          description: '직감과 창의성으로 문제를 해결하는 당신! 혁신적이고 독창적인 접근으로 놀라운 해결책을 찾아냅니다.',
          detailedDescription: '당신은 직감과 창의성을 통해 문제를 해결하는 직관적 문제해결자입니다. 패턴을 보고 추측하며, 직감에 따라 해결책을 선택하고, 완전히 새로운 접근을 시도합니다. 자유로운 아이디어 공유를 선호하며, 혁신적이고 독창적인 방법을 찾아내는 능력이 뛰어납니다. 기존의 틀을 벗어난 창의적 해결책을 제시합니다.',
          traits: ['직관적', '창의적', '혁신적', '자유로운', '독창적'],
          strengths: ['직감적 판단', '창의적 사고', '혁신적 접근', '자유로운 발상', '독창적 해결'],
          weaknesses: ['체계성 부족', '논리적 분석 부족', '경험 활용 부족', '효율성 부족', '일관성 부족'],
          goodMatches: ['논리적 문제해결자', '균형잡힌 문제해결자'],
          badMatches: ['논리적 문제해결자', '균형잡힌 문제해결자'],
          goodMatchReasons: ['논리적 문제해결자: 당신의 직관적 접근을 논리로 보완해주며 체계적 분석을 도와줍니다', '균형잡힌 문제해결자: 직감과 논리의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['논리적 문제해결자: 문제해결 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 문제해결자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['체계적 분석 연습하기', '논리적 사고 개발하기', '경험 활용하기', '효율성 개선하기', '일관성 있는 접근 기르기']
        };
      } else {
        return {
          title: '균형잡힌 문제해결자 ⚖️',
          description: '논리와 직감을 조화롭게 활용하는 당신! 체계적이면서도 창의적인 완벽한 문제해결 능력을 보유한 지혜로운 해결사입니다.',
          detailedDescription: '당신은 논리적 분석과 직관적 판단을 모두 활용하는 균형잡힌 문제해결자입니다. 상황과 문제의 특성에 따라 체계적 분석과 창의적 접근을 적절히 조합하며, 효율적이면서도 혁신적인 해결책을 만들어냅니다. 경험을 활용하면서도 새로운 방법을 시도하고, 논리적 사고와 직감적 판단을 모두 활용하여 최적의 결과를 도출합니다.',
          traits: ['균형감', '통합적', '적응력', '지혜', '조화'],
          strengths: ['균형잡힌 접근', '통합적 사고', '상황 적응력', '효과적 해결', '창의적 논리'],
          weaknesses: ['뚜렷한 특성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 문제해결 스타일과 조화 가능'],
          badMatches: ['극단적인 문제해결 성향의 사람'],
          goodMatchReasons: ['모든 문제해결 스타일과 조화 가능: 어떤 문제해결 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 문제해결 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 문제해결 철학 정립하기', '일관된 방법 개발하기', '전문 분야 만들기', '깊이 있는 분석 시도하기', '개성 있는 해결법 기르기']
        };
      }
    }
  },
  {
    id: 'stress-management',
    title: '스트레스 관리 스타일 테스트',
    description: '적극적? 수용적? 당신만의 스트레스 대처 방식을 발견해보세요',
    category: '스트레스',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '스트레스를 받았을 때?',
        options: [
          { text: '즉시 해결책을 찾는다', value: 'active' },
          { text: '시간을 두고 차분해진다', value: 'passive' }
        ]
      },
      {
        question: '문제가 생겼을 때?',
        options: [
          { text: '직접 해결하려고 노력한다', value: 'solve' },
          { text: '상황을 받아들이고 적응한다', value: 'accept' }
        ]
      },
      {
        question: '감정이 복잡할 때?',
        options: [
          { text: '활동을 통해 감정을 해소한다', value: 'activity' },
          { text: '조용히 감정을 정리한다', value: 'quiet' }
        ]
      },
      {
        question: '압박감을 느낄 때?',
        options: [
          { text: '더 열심히 일한다', value: 'work' },
          { text: '휴식을 취한다', value: 'rest' }
        ]
      },
      {
        question: '불안할 때?',
        options: [
          { text: '구체적인 계획을 세운다', value: 'plan' },
          { text: '마음을 비우고 명상한다', value: 'meditate' }
        ]
      },
      {
        question: '갈등 상황에서?',
        options: [
          { text: '직접 대화로 해결한다', value: 'confront' },
          { text: '시간을 두고 기다린다', value: 'wait' }
        ]
      },
      {
        question: '실패했을 때?',
        options: [
          { text: '다시 도전한다', value: 'retry' },
          { text: '실패를 받아들이고 배운다', value: 'learn' }
        ]
      },
      {
        question: '변화가 있을 때?',
        options: [
          { text: '기존 방식을 유지하려고 한다', value: 'stable' },
          { text: '변화에 적응하려고 노력한다', value: 'adaptive' }
        ]
      },
      {
        question: '업무를 완료할 때?',
        options: [
          { text: '모든 세부사항을 확인한다', value: 'detail' },
          { text: '전체적인 완성도를 중시한다', value: 'overall' }
        ]
      },
      {
        question: '업무 스킬을 향상시킬 때?',
        options: [
          { text: '기존 방법을 더 정교하게 익힌다', value: 'refine' },
          { text: '새로운 기술을 배운다', value: 'learn' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const activeCount = answers.filter(a => ['active', 'solve', 'activity', 'work', 'plan', 'confront', 'retry', 'adapt', 'active_hobby', 'prepare'].includes(a as string)).length;
      const passiveCount = answers.filter(a => ['passive', 'accept', 'quiet', 'rest', 'meditate', 'wait', 'learn', 'flow', 'quiet_hobby', 'present'].includes(a as string)).length;

      if (activeCount >= 6) {
        return {
          title: '적극적 스트레스 관리자 💪',
          description: '적극적으로 스트레스에 대응하는 당신! 문제 해결과 활동을 통해 스트레스를 효과적으로 관리하는 행동주의자입니다.',
          detailedDescription: '당신은 스트레스를 받았을 때 적극적으로 대응하는 적극적 스트레스 관리자입니다. 문제가 생기면 즉시 해결책을 찾고, 감정이 복잡할 때는 활동을 통해 해소하며, 압박감을 느낄 때는 더 열심히 일합니다. 구체적인 계획을 세우고 직접적인 대화로 갈등을 해결하며, 실패했을 때도 다시 도전하는 끈기와 의지를 가지고 있습니다.',
          traits: ['적극적', '행동적', '해결 지향', '도전적', '계획적'],
          strengths: ['빠른 문제 해결', '활동적 스트레스 해소', '적극적 대응', '계획적 접근', '끈기와 의지'],
          weaknesses: ['과도한 스트레스', '휴식 부족', '감정 억압', '성급한 판단', '자연스러운 흐름 부족'],
          goodMatches: ['수용적 스트레스 관리자', '균형잡힌 스트레스 관리자'],
          badMatches: ['수용적 스트레스 관리자', '균형잡힌 스트레스 관리자'],
          goodMatchReasons: ['수용적 스트레스 관리자: 당신의 적극적 접근을 수용적 태도로 보완해주며 자연스러운 흐름을 도와줍니다', '균형잡힌 스트레스 관리자: 적극과 수용의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['수용적 스트레스 관리자: 스트레스 대처 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 스트레스 관리자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['적절한 휴식 취하기', '감정 수용하기', '자연스러운 흐름 따르기', '성급한 판단 피하기', '마음의 여유 기르기']
        };
      } else if (passiveCount >= 6) {
        return {
          title: '수용적 스트레스 관리자 🧘',
          description: '자연스럽게 스트레스를 받아들이는 당신! 수용과 적응을 통해 스트레스를 지혜롭게 관리하는 명상가입니다.',
          detailedDescription: '당신은 스트레스를 받았을 때 자연스럽게 받아들이는 수용적 스트레스 관리자입니다. 문제가 생기면 상황을 받아들이고 적응하며, 감정이 복잡할 때는 조용히 정리합니다. 압박감을 느낄 때는 휴식을 취하고, 불안할 때는 마음을 비우고 명상합니다. 갈등 상황에서도 시간을 두고 기다리며, 실패를 받아들이고 배우는 지혜를 가지고 있습니다.',
          traits: ['수용적', '적응적', '명상적', '자연스러운', '지혜로운'],
          strengths: ['자연스러운 스트레스 수용', '적응력', '마음의 평화', '지혜로운 대처', '자연스러운 흐름'],
          weaknesses: ['적극적 해결 부족', '행동력 부족', '문제 회피', '의지 부족', '변화 주도 부족'],
          goodMatches: ['적극적 스트레스 관리자', '균형잡힌 스트레스 관리자'],
          badMatches: ['적극적 스트레스 관리자', '균형잡힌 스트레스 관리자'],
          goodMatchReasons: ['적극적 스트레스 관리자: 당신의 수용적 태도를 적극적 해결로 보완해주며 행동력을 더해줍니다', '균형잡힌 스트레스 관리자: 수용과 적극의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['적극적 스트레스 관리자: 스트레스 대처 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 스트레스 관리자: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['적극적 해결 시도하기', '행동력 기르기', '문제 직접 대응하기', '의지 발휘하기', '변화 주도하기']
        };
      } else {
        return {
          title: '균형잡힌 스트레스 관리자 ⚖️',
          description: '적극과 수용을 조화롭게 활용하는 당신! 상황에 맞는 적절한 스트레스 관리로 완벽한 균형을 이루는 지혜로운 관리자입니다.',
          detailedDescription: '당신은 적극적 대응과 수용적 태도를 모두 활용하는 균형잡힌 스트레스 관리자입니다. 상황과 스트레스의 특성에 따라 적극적으로 해결하거나 자연스럽게 받아들이며, 활동과 휴식을 적절히 조합합니다. 문제 해결 능력과 마음의 평화를 모두 가지고 있으며, 적응력과 의지를 조화롭게 발휘하여 최적의 스트레스 관리를 실현합니다.',
          traits: ['균형감', '적응력', '지혜', '유연성', '통합적'],
          strengths: ['균형잡힌 접근', '상황 적응력', '효과적 스트레스 관리', '유연한 대처', '완벽한 균형'],
          weaknesses: ['뚜렷한 특성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 스트레스 관리 스타일과 조화 가능'],
          badMatches: ['극단적인 스트레스 관리 성향의 사람'],
          goodMatchReasons: ['모든 스트레스 관리 스타일과 조화 가능: 어떤 스트레스 관리 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 스트레스 관리 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 스트레스 관리 철학 정립하기', '일관된 방법 개발하기', '전문 분야 만들기', '깊이 있는 관리 시도하기', '개성 있는 대처법 기르기']
        };
      }
    }
  },
  {
    id: 'social-style',
    title: '사회적 스타일 테스트',
    description: '외향적? 내향적? 당신만의 사회적 성향을 발견해보세요',
    category: '사회성',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '새로운 사람을 만날 때?',
        options: [
          { text: '적극적으로 대화를 시작한다', value: 'extrovert' },
          { text: '상대방이 먼저 다가오기를 기다린다', value: 'introvert' }
        ]
      },
      {
        question: '파티나 모임에서?',
        options: [
          { text: '여러 사람과 대화하며 즐긴다', value: 'social' },
          { text: '소수의 사람과 깊이 있는 대화를 나눈다', value: 'deep' }
        ]
      },
      {
        question: '에너지를 얻는 방법은?',
        options: [
          { text: '사람들과 함께 있는 시간', value: 'people' },
          { text: '혼자만의 시간', value: 'alone' }
        ]
      },
      {
        question: '스트레스를 해소할 때?',
        options: [
          { text: '친구들과 만나서 이야기한다', value: 'talk' },
          { text: '혼자 조용히 시간을 보낸다', value: 'quiet' }
        ]
      },
      {
        question: '의사결정을 할 때?',
        options: [
          { text: '다른 사람의 의견을 듣고 결정한다', value: 'consult' },
          { text: '혼자 생각하고 결정한다', value: 'think' }
        ]
      },
      {
        question: '업무나 공부할 때?',
        options: [
          { text: '팀워크를 선호한다', value: 'team' },
          { text: '개인적으로 집중한다', value: 'individual' }
        ]
      },
      {
        question: '문제가 생겼을 때?',
        options: [
          { text: '다른 사람과 상의한다', value: 'discuss' },
          { text: '혼자 해결책을 찾는다', value: 'solve' }
        ]
      },
      {
        question: '휴식 시간에?',
        options: [
          { text: '친구들과 만나거나 활동한다', value: 'active' },
          { text: '혼자 취미를 즐긴다', value: 'hobby' }
        ]
      },
      {
        question: '새로운 환경에 적응할 때?',
        options: [
          { text: '빠르게 사람들과 친해진다', value: 'fast' },
          { text: '천천히 관찰하며 적응한다', value: 'slow' }
        ]
      },
      {
        question: '감정을 표현할 때?',
        options: [
          { text: '즉시 다른 사람과 공유한다', value: 'share' },
          { text: '혼자 정리하고 처리한다', value: 'process' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const extrovertCount = answers.filter(a => ['extrovert', 'social', 'people', 'talk', 'consult', 'team', 'discuss', 'active', 'fast', 'share'].includes(a as string)).length;
      const introvertCount = answers.filter(a => ['introvert', 'deep', 'alone', 'quiet', 'think', 'individual', 'solve', 'hobby', 'slow', 'process'].includes(a as string)).length;

      if (extrovertCount >= 6) {
        return {
          title: '외향적 사회인 🌟',
          description: '적극적이고 활발한 사회적 성향의 당신! 사람들과의 상호작용을 통해 에너지를 얻는 사회적 천재입니다.',
          detailedDescription: '당신은 외향적이고 활발한 사회적 성향을 가진 외향적 사회인입니다. 새로운 사람을 만날 때 적극적으로 대화를 시작하며, 파티나 모임에서 여러 사람과 즐겁게 대화합니다. 사람들과 함께 있는 시간을 통해 에너지를 얻고, 스트레스 해소도 친구들과의 만남을 통해 합니다. 팀워크를 선호하고, 문제가 생기면 다른 사람과 상의하며, 새로운 환경에 빠르게 적응합니다.',
          traits: ['외향적', '사회적', '활발한', '적극적', '사교적'],
          strengths: ['빠른 친교 형성', '팀워크 능력', '적극적 소통', '환경 적응력', '에너지 전파'],
          weaknesses: ['깊이 있는 관계 부족', '혼자 시간 부족', '성찰 부족', '집중력 부족', '독립성 부족'],
          goodMatches: ['내향적 사회인', '균형잡힌 사회인'],
          badMatches: ['내향적 사회인', '균형잡힌 사회인'],
          goodMatchReasons: ['내향적 사회인: 당신의 외향적 성향을 내향적 깊이로 보완해주며 깊이 있는 관계를 도와줍니다', '균형잡힌 사회인: 외향과 내향의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['내향적 사회인: 사회적 성향의 차이로 갈등이 생길 수 있습니다', '균형잡힌 사회인: 한 가지 성향에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['깊이 있는 관계 기르기', '혼자 시간 가지기', '성찰 습관 기르기', '집중력 개발하기', '독립성 기르기']
        };
      } else if (introvertCount >= 6) {
        return {
          title: '내향적 사회인 🌙',
          description: '조용하고 깊이 있는 사회적 성향의 당신! 혼자만의 시간을 통해 에너지를 얻는 사색가입니다.',
          detailedDescription: '당신은 내향적이고 조용한 사회적 성향을 가진 내향적 사회인입니다. 새로운 사람을 만날 때 상대방이 먼저 다가오기를 기다리며, 파티나 모임에서 소수의 사람과 깊이 있는 대화를 선호합니다. 혼자만의 시간을 통해 에너지를 얻고, 스트레스 해소도 조용히 혼자 시간을 보내며 합니다. 개인적으로 집중하는 것을 선호하고, 문제가 생기면 혼자 해결책을 찾으며, 새로운 환경에 천천히 적응합니다.',
          traits: ['내향적', '조용한', '깊이 있는', '사색적', '독립적'],
          strengths: ['깊이 있는 관계', '집중력', '독립적 사고', '성찰 능력', '내면의 풍부함'],
          weaknesses: ['빠른 친교 형성 어려움', '팀워크 부족', '적극적 소통 부족', '환경 적응 어려움', '에너지 전파 부족'],
          goodMatches: ['외향적 사회인', '균형잡힌 사회인'],
          badMatches: ['외향적 사회인', '균형잡힌 사회인'],
          goodMatchReasons: ['외향적 사회인: 당신의 내향적 성향을 외향적 활발함으로 보완해주며 사회적 연결을 도와줍니다', '균형잡힌 사회인: 내향과 외향의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['외향적 사회인: 사회적 성향의 차이로 갈등이 생길 수 있습니다', '균형잡힌 사회인: 한 가지 성향에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['적극적 소통 연습하기', '팀워크 참여하기', '빠른 친교 형성 시도하기', '환경 적응력 기르기', '에너지 전파하기']
        };
      } else {
        return {
          title: '균형잡힌 사회인 ⚖️',
          description: '외향과 내향을 조화롭게 활용하는 당신! 상황에 맞는 적절한 사회적 성향으로 완벽한 균형을 이루는 지혜로운 사회인입니다.',
          detailedDescription: '당신은 외향적 성향과 내향적 성향을 모두 활용하는 균형잡힌 사회인입니다. 상황과 상대방에 따라 적극적으로 소통하거나 조용히 관찰하며, 팀워크와 개인 활동을 적절히 조합합니다. 사람들과의 상호작용과 혼자만의 시간을 모두 중요하게 여기며, 빠른 적응력과 깊이 있는 사고를 모두 가지고 있습니다. 다양한 사회적 상황에 유연하게 대응할 수 있습니다.',
          traits: ['균형감', '적응력', '유연성', '지혜', '통합적'],
          strengths: ['균형잡힌 사회성', '상황 적응력', '다양한 관계 형성', '유연한 소통', '완벽한 균형'],
          weaknesses: ['뚜렷한 특성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 사회적 스타일과 조화 가능'],
          badMatches: ['극단적인 사회적 성향의 사람'],
          goodMatchReasons: ['모든 사회적 스타일과 조화 가능: 어떤 사회적 성향과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 사회적 성향의 사람: 한 가지 성향만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 사회적 철학 정립하기', '일관된 스타일 개발하기', '전문 분야 만들기', '깊이 있는 관계 시도하기', '개성 있는 소통법 기르기']
        };
      }
    }
  },
  {
    id: 'work-style',
    title: '업무 스타일 테스트',
    description: '체계적? 유연적? 당신만의 업무 방식을 발견해보세요',
    category: '업무',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '업무를 시작할 때?',
        options: [
          { text: '계획을 세우고 체계적으로 진행한다', value: 'systematic' },
          { text: '상황에 따라 유연하게 진행한다', value: 'flexible' }
        ]
      },
      {
        question: '마감일이 있을 때?',
        options: [
          { text: '미리미리 준비해서 여유롭게 마친다', value: 'early' },
          { text: '마감일에 맞춰 집중해서 완성한다', value: 'deadline' }
        ]
      },
      {
        question: '새로운 업무를 받았을 때?',
        options: [
          { text: '기존 방법을 따라 진행한다', value: 'traditional' },
          { text: '새로운 방법을 시도한다', value: 'innovative' }
        ]
      },
      {
        question: '문제가 생겼을 때?',
        options: [
          { text: '규정과 절차에 따라 해결한다', value: 'procedure' },
          { text: '창의적인 해결책을 찾는다', value: 'creative' }
        ]
      },
      {
        question: '팀 프로젝트에서?',
        options: [
          { text: '명확한 역할 분담을 선호한다', value: 'role' },
          { text: '자유롭게 협력하는 것을 선호한다', value: 'collaboration' }
        ]
      },
      {
        question: '업무 환경에서?',
        options: [
          { text: '정돈된 환경을 선호한다', value: 'organized' },
          { text: '자유로운 환경을 선호한다', value: 'free' }
        ]
      },
      {
        question: '업무 결과를 평가할 때?',
        options: [
          { text: '정량적 지표를 중시한다', value: 'quantitative' },
          { text: '정성적 성과를 중시한다', value: 'qualitative' }
        ]
      },
      {
        question: '변화가 있을 때?',
        options: [
          { text: '기존 방식을 유지하려고 한다', value: 'stable' },
          { text: '변화에 적응하려고 노력한다', value: 'adaptive' }
        ]
      },
      {
        question: '업무를 완료할 때?',
        options: [
          { text: '모든 세부사항을 확인한다', value: 'detail' },
          { text: '전체적인 완성도를 중시한다', value: 'overall' }
        ]
      },
      {
        question: '업무 스킬을 향상시킬 때?',
        options: [
          { text: '기존 방법을 더 정교하게 익힌다', value: 'refine' },
          { text: '새로운 기술을 배운다', value: 'learn' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const systematicCount = answers.filter(a => ['systematic', 'early', 'traditional', 'procedure', 'role', 'organized', 'quantitative', 'stable', 'detail', 'refine'].includes(a as string)).length;
      const flexibleCount = answers.filter(a => ['flexible', 'deadline', 'innovative', 'creative', 'collaboration', 'free', 'qualitative', 'adaptive', 'overall', 'learn'].includes(a as string)).length;

      if (systematicCount >= 6) {
        return {
          title: '체계적 업무인 📋',
          description: '계획적이고 체계적인 업무 방식을 선호하는 당신! 정돈된 환경에서 확실한 결과를 만들어내는 전문가입니다.',
          detailedDescription: '당신은 계획적이고 체계적인 업무 방식을 선호하는 체계적 업무인입니다. 업무를 시작할 때 계획을 세우고 체계적으로 진행하며, 마감일이 있으면 미리미리 준비해서 여유롭게 마칩니다. 기존 방법과 규정을 중시하며, 명확한 역할 분담과 정돈된 환경을 선호합니다. 정량적 지표로 결과를 평가하고, 모든 세부사항을 꼼꼼히 확인하는 꼼꼼함을 가지고 있습니다.',
          traits: ['체계적', '계획적', '정돈된', '전문적', '꼼꼼한'],
          strengths: ['체계적 업무 진행', '계획적 접근', '정확성', '안정성', '세부사항 관리'],
          weaknesses: ['유연성 부족', '창의성 부족', '변화 적응 어려움', '자유로운 사고 부족', '혁신성 부족'],
          goodMatches: ['유연적 업무인', '균형잡힌 업무인'],
          badMatches: ['유연적 업무인', '균형잡힌 업무인'],
          goodMatchReasons: ['유연적 업무인: 당신의 체계적 접근을 유연한 방법으로 보완해주며 창의성을 더해줍니다', '균형잡힌 업무인: 체계와 유연의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['유연적 업무인: 업무 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 업무인: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['유연한 사고 기르기', '창의적 방법 시도하기', '변화 적응력 개발하기', '자유로운 접근 시도하기', '혁신적 아이디어 탐구하기']
        };
      } else if (flexibleCount >= 6) {
        return {
          title: '유연적 업무인 🎯',
          description: '유연하고 창의적인 업무 방식을 선호하는 당신! 자유로운 환경에서 혁신적인 결과를 만들어내는 혁신가입니다.',
          detailedDescription: '당신은 유연하고 창의적인 업무 방식을 선호하는 유연적 업무인입니다. 상황에 따라 유연하게 업무를 진행하며, 마감일에 맞춰 집중해서 완성하는 능력이 뛰어납니다. 새로운 방법과 창의적인 해결책을 선호하며, 자유로운 협력과 환경을 중시합니다. 정성적 성과를 중시하고, 변화에 적응하며, 전체적인 완성도를 추구합니다.',
          traits: ['유연한', '창의적', '혁신적', '자유로운', '적응적'],
          strengths: ['유연한 업무 진행', '창의적 해결', '혁신적 접근', '변화 적응력', '전체적 관점'],
          weaknesses: ['체계성 부족', '계획성 부족', '정확성 부족', '안정성 부족', '세부사항 관리 부족'],
          goodMatches: ['체계적 업무인', '균형잡힌 업무인'],
          badMatches: ['체계적 업무인', '균형잡힌 업무인'],
          goodMatchReasons: ['체계적 업무인: 당신의 유연한 접근을 체계적 방법으로 보완해주며 정확성을 높여줍니다', '균형잡힌 업무인: 유연과 체계의 균형을 함께 찾아갈 수 있습니다'],
          badMatchReasons: ['체계적 업무인: 업무 방식의 차이로 갈등이 생길 수 있습니다', '균형잡힌 업무인: 한 가지 방식에만 의존하는 것을 이해하기 어려울 수 있습니다'],
          recommendations: ['체계적 계획 세우기', '정확성 기르기', '안정성 확보하기', '세부사항 관리하기', '전문성 개발하기']
        };
      } else {
        return {
          title: '균형잡힌 업무인 ⚖️',
          description: '체계와 유연을 조화롭게 활용하는 당신! 상황에 맞는 적절한 업무 방식으로 완벽한 결과를 만들어내는 지혜로운 전문가입니다.',
          detailedDescription: '당신은 체계적 접근과 유연한 방법을 모두 활용하는 균형잡힌 업무인입니다. 상황과 업무의 특성에 따라 계획적이거나 유연하게 진행하며, 체계성과 창의성을 적절히 조합합니다. 정확성과 혁신성을 모두 추구하며, 안정성과 변화 적응력을 조화롭게 발휘하여 최적의 업무 성과를 만들어냅니다.',
          traits: ['균형감', '적응력', '지혜', '통합적', '완벽한'],
          strengths: ['균형잡힌 업무 방식', '상황 적응력', '효과적 업무 진행', '유연한 접근', '완벽한 결과'],
          weaknesses: ['뚜렷한 특성 부족', '일관성 부족', '우유부단함', '깊이 부족', '전문성 부족'],
          goodMatches: ['모든 업무 스타일과 조화 가능'],
          badMatches: ['극단적인 업무 성향의 사람'],
          goodMatchReasons: ['모든 업무 스타일과 조화 가능: 어떤 업무 방식과도 적절히 조화를 이룰 수 있습니다'],
          badMatchReasons: ['극단적인 업무 성향의 사람: 한 가지 방식만 고집하는 사람과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 업무 철학 정립하기', '일관된 방식 개발하기', '전문 분야 만들기', '깊이 있는 업무 시도하기', '개성 있는 업무법 기르기']
        };
      }
    }
  }
];