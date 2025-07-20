import type { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'personality-type',
    title: '성격 유형 테스트',
    description: '당신의 성격 유형을 알아보세요',
    category: '성격',
    duration: '1분 30초',
    questionCount: 16,
    questions: [
      // E/I 측정 질문들 (4개)
      {
        question: '새로운 사람들과 만날 때 당신은?',
        options: [
          { text: '적극적으로 대화를 시작하고 먼저 다가간다', value: 'E' },
          { text: '상대방이 먼저 말을 걸어주기를 기다린다', value: 'I' }
        ]
      },
      {
        question: '파티나 모임에서 당신은?',
        options: [
          { text: '여러 사람과 어울리며 활발하게 참여한다', value: 'E' },
          { text: '소수의 친한 사람들과 깊이 있는 대화를 한다', value: 'I' }
        ]
      },
      {
        question: '에너지를 얻는 방법은?',
        options: [
          { text: '사람들과의 활발한 상호작용과 외부 활동', value: 'E' },
          { text: '조용한 환경에서의 개인적 시간과 내적 성찰', value: 'I' }
        ]
      },
      {
        question: '팀 프로젝트에서 당신의 선호는?',
        options: [
          { text: '팀원들과 활발히 논의하며 함께 진행한다', value: 'E' },
          { text: '개별 업무에 집중하여 깊이 있게 작업한다', value: 'I' }
        ]
      },
      
      // S/N 측정 질문들 (4개)
      {
        question: '정보를 처리할 때 당신은?',
        options: [
          { text: '구체적인 사실과 세부사항에 집중한다', value: 'S' },
          { text: '전체적인 패턴과 숨겨진 의미를 본다', value: 'N' }
        ]
      },
      {
        question: '새로운 것을 배울 때?',
        options: [
          { text: '단계별로 차근차근 실습하며 익힌다', value: 'S' },
          { text: '이론과 개념을 먼저 이해하려 한다', value: 'N' }
        ]
      },
      {
        question: '미래에 대해 생각할 때?',
        options: [
          { text: '현실적이고 달성 가능한 구체적 계획을 세운다', value: 'S' },
          { text: '다양한 가능성과 이상적인 비전을 그려본다', value: 'N' }
        ]
      },
      {
        question: '문제를 해결할 때?',
        options: [
          { text: '검증된 방법과 과거 경험을 활용한다', value: 'S' },
          { text: '새로운 관점과 창의적 방법을 시도한다', value: 'N' }
        ]
      },
      
      // T/F 측정 질문들 (4개)
      {
        question: '의사결정을 할 때 가장 중요한 것은?',
        options: [
          { text: '논리적 분석과 객관적 사실 검토', value: 'T' },
          { text: '관련된 사람들의 감정과 가치 고려', value: 'F' }
        ]
      },
      {
        question: '비판을 받을 때 당신은?',
        options: [
          { text: '개선할 점을 찾는 건설적 피드백으로 받아들인다', value: 'T' },
          { text: '감정적으로 상처받지만 관계를 고려해 수용한다', value: 'F' }
        ]
      },
      {
        question: '갈등이 생겼을 때?',
        options: [
          { text: '원칙과 규칙에 따라 공정하게 해결한다', value: 'T' },
          { text: '모든 사람이 만족할 수 있는 조화로운 방법을 찾는다', value: 'F' }
        ]
      },
      {
        question: '중요한 결정을 내릴 때?',
        options: [
          { text: '장단점을 분석하고 합리적으로 판단한다', value: 'T' },
          { text: '내 가치관과 다른 사람에게 미칠 영향을 고려한다', value: 'F' }
        ]
      },
      
      // J/P 측정 질문들 (4개)
      {
        question: '일정 관리에 대한 당신의 스타일은?',
        options: [
          { text: '상세한 계획을 세우고 체계적으로 진행한다', value: 'J' },
          { text: '유연하게 상황에 맞춰 즉흥적으로 조정한다', value: 'P' }
        ]
      },
      {
        question: '마감일이 다가올 때?',
        options: [
          { text: '미리 완료해두고 여유를 갖는다', value: 'J' },
          { text: '마감 직전에 집중해서 완성한다', value: 'P' }
        ]
      },
      {
        question: '여행을 계획할 때?',
        options: [
          { text: '상세한 일정표와 예약을 미리 완료한다', value: 'J' },
          { text: '대략적인 계획만 세우고 현지에서 즉흥적으로', value: 'P' }
        ]
      },
      {
        question: '일상생활에서 당신은?',
        options: [
          { text: '규칙적인 루틴과 정돈된 환경을 선호한다', value: 'J' },
          { text: '자유로운 변화와 유연한 환경을 선호한다', value: 'P' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const eCount = answers.filter(a => a === 'E').length;
      const iCount = answers.filter(a => a === 'I').length;
      const sCount = answers.filter(a => a === 'S').length;
      const nCount = answers.filter(a => a === 'N').length;
      const tCount = answers.filter(a => a === 'T').length;
      const fCount = answers.filter(a => a === 'F').length;
      const jCount = answers.filter(a => a === 'J').length;
      const pCount = answers.filter(a => a === 'P').length;

      const type = [
        eCount > iCount ? 'E' : 'I',
        sCount > nCount ? 'S' : 'N',
        tCount > fCount ? 'T' : 'F',
        jCount > pCount ? 'J' : 'P'
      ].join('');

      const results = {
        'INTJ': {
          title: '전략가 (INTJ)',
          description: '창의적이고 전략적인 사고를 가진 혁신가입니다.',
          detailedDescription: '당신은 독립적이고 결단력 있는 성격으로, 복잡한 문제를 해결하는 데 뛰어난 능력을 가지고 있습니다. 미래를 내다보는 통찰력이 뛰어나며, 자신만의 독특한 관점으로 세상을 바라봅니다. 완벽주의적 성향이 강하고, 깊이 있는 사고를 통해 혁신적인 아이디어를 만들어냅니다.',
          traits: ['체계적 사고', '독립적 성향', '미래 지향적', '분석적', '완벽주의'],
          strengths: ['전략적 계획 수립', '복잡한 문제 해결', '장기적 비전 제시', '객관적 판단', '집중력'],
          weaknesses: ['감정 표현 부족', '지나친 비판적 사고', '융통성 부족', '사회적 교류 어려움', '완벽주의로 인한 스트레스'],
          goodMatches: ['ENFP', 'ENTP'],
          badMatches: ['ESFP', 'ESTP'],
          goodMatchReasons: ['ENFP: 창의성과 열정으로 당신의 아이디어에 생동감을 더해줍니다', 'ENTP: 혁신적 사고와 토론을 통해 서로 발전시켜줍니다'],
          badMatchReasons: ['ESFP: 즉흥적이고 감정적인 성향이 체계적인 당신과 충돌할 수 있습니다', 'ESTP: 현실적이고 액션 중심적 성향이 이론적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['감정적 소통 방법 배우기', '유연성 기르기', '팀워크 능력 개발', '스트레스 관리법 찾기', '다양한 관점 수용하기']
        },
        'INTP': {
          title: '논리술사 (INTP)',
          description: '논리적이고 분석적인 사고를 가진 철학자입니다.',
          detailedDescription: '당신은 호기심이 매우 강하고 지적 탐구를 즐기는 성격입니다. 복잡한 이론과 개념을 이해하고 분석하는 것을 좋아하며, 독창적인 아이디어를 만들어내는 능력이 뛰어납니다. 자유로운 사고를 중시하고, 논리적 일관성을 매우 중요하게 생각합니다.',
          traits: ['논리적 사고', '호기심 많음', '독창적', '유연한 사고', '내향적'],
          strengths: ['문제 분석 능력', '창의적 사고', '객관적 판단', '학습 능력', '독립적 작업'],
          weaknesses: ['실행력 부족', '감정적 둔감함', '일상 관리 어려움', '사회적 상황 회피', '우유부단함'],
          goodMatches: ['ENFJ', 'ENTJ'],
          badMatches: ['ESFJ', 'ESTJ'],
          goodMatchReasons: ['ENFJ: 따뜻함과 격려로 당신의 아이디어를 현실화하도록 도와줍니다', 'ENTJ: 리더십과 실행력으로 당신의 이론을 실현시켜줍니다'],
          badMatchReasons: ['ESFJ: 감정적 배려와 전통을 중시하는 성향이 논리 중심적인 당신과 충돌할 수 있습니다', 'ESTJ: 규칙과 질서를 중시하는 성향이 자유로운 당신과 맞지 않을 수 있습니다'],
          recommendations: ['실행력 기르기', '감정 표현 연습하기', '시간 관리 개선', '사회적 교류 늘리기', '아이디어 구체화하기']
        },
        'ENTJ': {
          title: '통솔자 (ENTJ)',
          description: '대담하고 상상력이 풍부한 강한 의지의 소유자입니다.',
          detailedDescription: '당신은 타고난 리더로서 목표를 향해 나아가는 추진력이 강합니다. 효율성을 중시하고 조직을 이끄는 능력이 뛰어나며, 도전적인 과제를 해결하는 것을 즐깁니다. 미래에 대한 명확한 비전을 가지고 있으며, 이를 실현하기 위해 끈질기게 노력합니다.',
          traits: ['리더십', '결단력', '목표 지향적', '효율성 추구', '도전적'],
          strengths: ['조직 관리 능력', '전략적 사고', '의사결정력', '동기부여 능력', '추진력'],
          weaknesses: ['감정적 둔감함', '지나친 통제욕', '비판적 성향', '인내심 부족', '스트레스 과부하'],
          goodMatches: ['INFP', 'INTP'],
          badMatches: ['ISFP', 'ISTP'],
          goodMatchReasons: ['INFP: 따뜻한 인간미와 창의성으로 당신의 리더십에 균형을 맞춰줍니다', 'INTP: 분석적 사고와 혁신적 아이디어로 당신의 전략을 발전시켜줍니다'],
          badMatchReasons: ['ISFP: 개인적 가치와 조화를 중시하는 성향이 목표 지향적인 당신과 충돌할 수 있습니다', 'ISTP: 독립적이고 유연한 성향이 체계적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['감정적 소통 기술 개발', '인내심 기르기', '스트레스 관리', '팀원 배려하기', '유연성 늘리기']
        },
        'ENTP': {
          title: '변론가 (ENTP)',
          description: '지적이고 호기심이 많은 사상가입니다.',
          detailedDescription: '당신은 새로운 아이디어와 가능성을 탐구하는 것을 좋아하는 혁신가입니다. 토론과 논쟁을 즐기며, 기존의 틀을 깨는 창의적인 해결책을 찾아냅니다. 에너지가 넘치고 사교적이며, 다양한 분야에 관심을 가지고 있습니다.',
          traits: ['혁신적 사고', '토론 좋아함', '에너지 넘침', '적응력', '사교적'],
          strengths: ['창의적 문제해결', '소통 능력', '학습 능력', '적응력', '영감 제공'],
          weaknesses: ['집중력 부족', '루틴 업무 기피', '감정적 무관심', '계획성 부족', '지속성 부족'],
          goodMatches: ['INFJ', 'INTJ'],
          badMatches: ['ISFJ', 'ISTJ'],
          goodMatchReasons: ['INFJ: 깊이 있는 통찰력과 공감 능력으로 당신의 아이디어에 의미를 부여해줍니다', 'INTJ: 체계적 사고와 실행력으로 당신의 창의성을 현실화해줍니다'],
          badMatchReasons: ['ISFJ: 안정성과 전통을 중시하는 성향이 변화를 추구하는 당신과 충돌할 수 있습니다', 'ISTJ: 규칙과 일관성을 중시하는 성향이 자유로운 당신과 맞지 않을 수 있습니다'],
          recommendations: ['집중력 향상시키기', '계획 세우는 습관 기르기', '감정적 공감 능력 기르기', '지속성 개발하기', '루틴 만들어 지키기']
        },
        'INFJ': {
          title: '옹호자 (INFJ)',
          description: '선의를 가지고 남을 도우며 목적 의식이 뚜렷한 이상주의자입니다.',
          detailedDescription: '당신은 깊은 통찰력과 공감 능력을 가진 희귀한 성격입니다. 다른 사람의 감정을 잘 이해하고, 의미 있는 관계를 추구합니다. 이상주의적이면서도 실용적인 해결책을 찾는 능력이 있으며, 자신만의 가치관과 신념이 뚜렷합니다.',
          traits: ['직관적', '공감 능력', '이상주의', '신념 강함', '통찰력'],
          strengths: ['깊은 이해력', '창의적 사고', '헌신적 태도', '미래 계획', '영감 제공'],
          weaknesses: ['완벽주의', '과도한 감정이입', '비현실적 기대', '스트레스 민감', '혼자만의 시간 필요'],
          goodMatches: ['ENFP', 'ENTP'],
          badMatches: ['ESTP', 'ESFP'],
          goodMatchReasons: ['ENFP: 열정과 활력으로 당신의 이상을 현실화하는 데 도움을 줍니다', 'ENTP: 창의적 사고와 에너지로 당신의 비전을 확장시켜줍니다'],
          badMatchReasons: ['ESTP: 현재 중심적이고 실용적인 성향이 미래 지향적인 당신과 충돌할 수 있습니다', 'ESFP: 즉흥적이고 감정적인 성향이 신중한 당신과 맞지 않을 수 있습니다'],
          recommendations: ['현실적 목표 설정하기', '스트레스 관리법 배우기', '경계선 설정하기', '자기 돌봄 실천하기', '완벽주의 완화하기']
        },
        'INFP': {
          title: '중재자 (INFP)',
          description: '항상 선을 행할 준비가 되어 있는 이타적인 이상주의자입니다.',
          detailedDescription: '당신은 따뜻하고 친절한 마음을 가진 사람으로, 자신의 가치관에 따라 살아가는 것을 중시합니다. 창의적이고 개방적인 마음을 가지고 있으며, 다른 사람의 잠재력을 끌어내는 것을 좋아합니다. 조화로운 환경을 추구하고, 갈등을 피하려는 경향이 있습니다.',
          traits: ['가치 중심적', '창의적', '온화함', '유연성', '이상주의'],
          strengths: ['창의적 표현', '공감 능력', '적응력', '개방적 마음', '잠재력 발견'],
          weaknesses: ['갈등 회피', '우유부단함', '자기 비판적', '현실 도피', '스트레스 민감'],
          goodMatches: ['ENTJ', 'ENFJ'],
          badMatches: ['ESTJ', 'ESFJ'],
          goodMatchReasons: ['ENTJ: 리더십과 결단력으로 당신의 이상을 실현하는 데 도움을 줍니다', 'ENFJ: 따뜻한 격려와 동기부여로 당신의 잠재력을 끌어냅니다'],
          badMatchReasons: ['ESTJ: 규칙과 효율성을 중시하는 성향이 자유로운 당신과 충돌할 수 있습니다', 'ESFJ: 전통과 안정을 중시하는 성향이 변화를 추구하는 당신과 맞지 않을 수 있습니다'],
          recommendations: ['갈등 해결 기술 배우기', '결정력 기르기', '자신감 향상시키기', '현실적 계획 세우기', '스트레스 관리하기']
        },
        'ENFJ': {
          title: '주인공 (ENFJ)',
          description: '카리스마 넘치고 영감을 주는 지도자입니다.',
          detailedDescription: '당신은 다른 사람들을 이끌고 영감을 주는 천성적인 리더입니다. 사람들의 잠재력을 보고 그것을 끌어내는 능력이 뛰어나며, 팀의 화합과 성장을 위해 노력합니다. 카리스마가 있고 의사소통 능력이 뛰어나며, 다른 사람들의 성공을 위해 헌신합니다.',
          traits: ['카리스마', '공감 능력', '의사소통', '영감 제공', '헌신적'],
          strengths: ['리더십', '동기부여', '팀 빌딩', '의사소통', '문제 해결'],
          weaknesses: ['과도한 이타심', '비판 민감', '번아웃', '개인 시간 부족', '완벽주의'],
          goodMatches: ['INFP', 'ISFP'],
          badMatches: ['ISTP', 'INTP'],
          goodMatchReasons: ['INFP: 창의성과 깊은 가치관으로 당신의 리더십에 의미를 더해줍니다', 'ISFP: 따뜻함과 진정성으로 당신의 이상을 지지해줍니다'],
          badMatchReasons: ['ISTP: 독립적이고 논리적인 성향이 감정 중심적인 당신과 충돌할 수 있습니다', 'INTP: 분석적이고 거리두기를 선호하는 성향이 적극적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['개인 시간 확보하기', '경계선 설정하기', '자기 돌봄 실천하기', '비판 수용하기', '스트레스 관리하기']
        },
        'ENFP': {
          title: '활동가 (ENFP)',
          description: '열정적이고 창의적인 자유로운 영혼입니다.',
          detailedDescription: '당신은 무한한 가능성을 보는 열정적인 사람입니다. 새로운 아이디어와 경험을 추구하며, 다른 사람들과의 깊은 연결을 중시합니다. 창의적이고 즉흥적이며, 일상의 루틴보다는 새로운 도전을 선호합니다. 사람들에게 영감을 주고 동기를 부여하는 능력이 뛰어납니다.',
          traits: ['열정적', '창의적', '사교적', '영감 제공', '자유로움'],
          strengths: ['창의적 사고', '의사소통', '적응력', '팀워크', '동기부여'],
          weaknesses: ['집중력 부족', '루틴 기피', '감정 기복', '계획성 부족', '과도한 약속'],
          goodMatches: ['INTJ', 'INFJ'],
          badMatches: ['ISTJ', 'ISFJ'],
          goodMatchReasons: ['INTJ: 체계적 사고와 장기적 비전으로 당신의 아이디어를 구체화해줍니다', 'INFJ: 깊은 통찰력과 공감으로 당신의 열정에 방향성을 제공해줍니다'],
          badMatchReasons: ['ISTJ: 전통과 안정을 중시하는 성향이 변화를 추구하는 당신과 충돌할 수 있습니다', 'ISFJ: 계획적이고 신중한 성향이 즉흥적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['집중력 향상시키기', '계획 세우는 습관 기르기', '감정 관리하기', '약속 지키기', '루틴 만들어 따르기']
        },
        'ISTJ': {
          title: '물류사 (ISTJ)',
          description: '사실에 근거하여 실용적으로 행동하는 신뢰할 수 있는 현실주의자입니다.',
          detailedDescription: '당신은 책임감이 강하고 성실한 성격으로, 전통과 질서를 중시합니다. 체계적이고 꼼꼼하게 일을 처리하며, 약속을 반드시 지키는 신뢰할 수 있는 사람입니다. 안정성을 추구하고, 검증된 방법을 선호하며, 장기적인 관점에서 계획을 세웁니다.',
          traits: ['책임감', '성실함', '체계적', '신뢰성', '보수적'],
          strengths: ['높은 신뢰도', '체계적 업무처리', '책임감', '인내심', '안정성'],
          weaknesses: ['변화 거부', '융통성 부족', '새로운 시도 기피', '감정 표현 어려움', '스트레스 누적'],
          goodMatches: ['ESFP', 'ESTP'],
          badMatches: ['ENFP', 'ENTP'],
          goodMatchReasons: ['ESFP: 밝고 활발한 에너지로 당신의 일상에 즐거움을 더해줍니다', 'ESTP: 실용적이면서도 활동적인 성향으로 당신에게 활력을 제공합니다'],
          badMatchReasons: ['ENFP: 즉흥적이고 변화를 추구하는 성향이 안정을 중시하는 당신과 충돌할 수 있습니다', 'ENTP: 혁신과 변화를 선호하는 성향이 전통적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['유연성 기르기', '새로운 경험 시도하기', '감정 표현 연습하기', '스트레스 관리하기', '창의적 활동 해보기']
        },
        'ISFJ': {
          title: '수호자 (ISFJ)',
          description: '따뜻하고 선의를 베푸는 수호자입니다.',
          detailedDescription: '당신은 다른 사람을 돌보고 보호하는 것을 좋아하는 온화한 성격입니다. 세심하고 배려심이 깊으며, 다른 사람의 필요를 먼저 생각합니다. 전통적인 가치를 소중히 여기고, 조화로운 관계를 유지하기 위해 노력합니다. 겸손하고 헌신적인 태도로 주변 사람들에게 안정감을 제공합니다.',
          traits: ['배려심', '온화함', '헌신적', '겸손함', '신중함'],
          strengths: ['타인 배려', '세심한 관찰', '안정성 제공', '협력 능력', '신뢰성'],
          weaknesses: ['자기주장 부족', '갈등 회피', '과도한 희생', '스트레스 내재화', '변화 적응 어려움'],
          goodMatches: ['ESFP', 'ENFP'],
          badMatches: ['ENTP', 'ENTJ'],
          goodMatchReasons: ['ESFP: 밝고 긍정적인 에너지로 당신에게 활력을 주고 감사를 표현해줍니다', 'ENFP: 열정과 창의성으로 당신의 헌신에 보답하며 새로운 경험을 제공합니다'],
          badMatchReasons: ['ENTP: 변화를 추구하고 도전적인 성향이 안정을 중시하는 당신과 충돌할 수 있습니다', 'ENTJ: 목표 지향적이고 강한 추진력이 온화한 당신에게 부담이 될 수 있습니다'],
          recommendations: ['자기주장 기르기', '경계선 설정하기', '자기 돌봄 실천하기', '갈등 해결 기술 배우기', '새로운 도전하기']
        },
        'ESTJ': {
          title: '경영자 (ESTJ)',
          description: '뛰어난 관리 능력을 가진 성실하고 헌신적인 지도자입니다.',
          detailedDescription: '당신은 조직을 효율적으로 관리하고 목표를 달성하는 데 뛰어난 능력을 가진 리더입니다. 전통과 질서를 중시하며, 규칙과 절차를 따르는 것을 중요하게 생각합니다. 실용적이고 현실적인 접근을 선호하며, 팀의 성과를 위해 체계적으로 일을 추진합니다.',
          traits: ['조직력', '실용적', '체계적', '책임감', '현실적'],
          strengths: ['조직 관리', '목표 달성', '의사결정', '체계적 업무', '리더십'],
          weaknesses: ['융통성 부족', '감정적 둔감', '권위적 성향', '변화 저항', '스트레스 과다'],
          goodMatches: ['ISFP', 'INFP'],
          badMatches: ['INTP', 'INFP'],
          goodMatchReasons: ['ISFP: 따뜻한 감성과 유연함으로 당신의 딱딱한 면을 부드럽게 해줍니다', 'INFP: 창의성과 가치관으로 당신의 업무에 의미를 부여해줍니다'],
          badMatchReasons: ['INTP: 자유로운 사고와 유연함을 선호하는 성향이 체계적인 당신과 충돌할 수 있습니다', 'INFP: 개인적 가치와 유연성을 중시하는 성향이 규칙 중심적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['유연성 기르기', '감정적 소통 개선하기', '변화 수용하기', '스트레스 관리하기', '팀원 개별성 인정하기']
        },
        'ESFJ': {
          title: '집정관 (ESFJ)',
          description: '사교적이고 인기가 많으며 배려심이 넘치는 성격입니다.',
          detailedDescription: '당신은 다른 사람들과 조화롭게 지내는 것을 중시하는 사교적인 성격입니다. 타인의 감정을 잘 이해하고 배려하며, 모든 사람이 행복하고 편안하게 느낄 수 있도록 노력합니다. 전통적인 가치를 소중히 여기고, 안정적인 관계를 유지하는 데 뛰어난 능력을 가지고 있습니다.',
          traits: ['사교적', '배려심', '협력적', '전통적', '온화함'],
          strengths: ['인간관계', '팀워크', '배려심', '조화 추구', '실용적 지원'],
          weaknesses: ['비판 민감', '갈등 회피', '자기주장 부족', '변화 저항', '과도한 타인 의식'],
          goodMatches: ['ISFP', 'ISTP'],
          badMatches: ['INTJ', 'INTP'],
          goodMatchReasons: ['ISFP: 온화하고 진정성 있는 성향으로 당신의 배려심을 이해하고 감사해줍니다', 'ISTP: 실용적이고 독립적인 성향으로 당신의 도움을 인정하면서도 부담주지 않습니다'],
          badMatchReasons: ['INTJ: 독립적이고 비판적인 성향이 조화를 추구하는 당신과 충돌할 수 있습니다', 'INTP: 논리 중심적이고 감정적 거리두기를 선호하는 성향이 감정적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['자기주장 기르기', '비판 수용력 향상시키기', '개인 시간 확보하기', '갈등 해결 기술 배우기', '변화 적응력 기르기']
        },
        'ISTP': {
          title: '만능재주꾼 (ISTP)',
          description: '대담하고 실용적인 사고를 하는 탐험가입니다.',
          detailedDescription: '당신은 실용적이고 논리적인 사고를 가진 독립적인 성격입니다. 손으로 직접 만들고 경험하는 것을 좋아하며, 문제가 생겼을 때 창의적이고 효율적인 해결책을 찾아냅니다. 자유롭고 유연한 환경을 선호하며, 필요할 때만 행동하는 경향이 있습니다.',
          traits: ['실용적', '독립적', '논리적', '유연함', '현실적'],
          strengths: ['문제 해결', '실용적 기술', '냉정한 판단', '적응력', '효율성'],
          weaknesses: ['감정 표현 어려움', '장기 계획 부족', '타인과의 거리감', '루틴 기피', '의사소통 부족'],
          goodMatches: ['ESFJ', 'ENFJ'],
          badMatches: ['ENFP', 'ESFP'],
          goodMatchReasons: ['ESFJ: 따뜻한 배려와 사회적 기술로 당신의 실용성을 사회에 연결해줍니다', 'ENFJ: 리더십과 비전으로 당신의 능력을 더 큰 목적에 활용하도록 도와줍니다'],
          badMatchReasons: ['ENFP: 감정적이고 즉흥적인 성향이 논리적인 당신과 충돌할 수 있습니다', 'ESFP: 사교적이고 감정 표현이 풍부한 성향이 내향적인 당신에게 부담이 될 수 있습니다'],
          recommendations: ['감정 표현 연습하기', '장기 계획 세우기', '의사소통 개선하기', '사회적 관계 늘리기', '팀워크 기술 배우기']
        },
        'ISFP': {
          title: '모험가 (ISFP)',
          description: '유연하고 매력적인 예술가 기질의 탐험가입니다.',
          detailedDescription: '당신은 따뜻하고 친근한 성격으로, 자신만의 가치관과 신념을 가지고 살아가는 사람입니다. 예술적 감각이 뛰어나고 아름다운 것을 추구하며, 개인의 자유와 독립성을 소중히 여깁니다. 조용하지만 내면이 풍부하고, 다른 사람들의 감정을 잘 이해합니다.',
          traits: ['예술적', '온화함', '유연성', '개성적', '감수성'],
          strengths: ['창의적 표현', '공감 능력', '미적 감각', '적응력', '개방적 마음'],
          weaknesses: ['자기주장 부족', '계획성 부족', '비판 민감', '우유부단', '스트레스 민감'],
          goodMatches: ['ENFJ', 'ESTJ'],
          badMatches: ['ENTJ', 'ESTJ'],
          goodMatchReasons: ['ENFJ: 따뜻한 격려와 리더십으로 당신의 잠재력을 끌어내고 방향을 제시해줍니다', 'ESTJ: 체계적인 접근과 실행력으로 당신의 창의성을 현실화하는 데 도움을 줍니다'],
          badMatchReasons: ['ENTJ: 강한 추진력과 목표 지향성이 자유로운 당신에게 압박감을 줄 수 있습니다', 'ESTJ: 규칙과 체계를 중시하는 성향이 유연함을 추구하는 당신과 충돌할 수 있습니다'],
          recommendations: ['자기주장 기르기', '계획 세우는 습관 만들기', '자신감 향상시키기', '비판 수용력 기르기', '목표 설정하기']
        },
        'ESFP': {
          title: '연예인 (ESFP)',
          description: '자유로운 영혼으로 삶을 사랑하는 활동가입니다.',
          detailedDescription: '당신은 에너지가 넘치고 사교적인 성격으로, 사람들과 함께 있을 때 가장 행복합니다. 순간을 즐기는 것을 좋아하고, 자연스럽고 진정성 있는 모습으로 다른 사람들에게 기쁨을 줍니다. 감정 표현이 풍부하고, 새로운 경험과 모험을 추구합니다.',
          traits: ['활발함', '사교적', '즉흥적', '낙천적', '감정적'],
          strengths: ['인간관계', '즉흥성', '긍정적 에너지', '적응력', '동기부여'],
          weaknesses: ['계획성 부족', '집중력 부족', '장기적 사고 부족', '비판 민감', '감정 기복'],
          goodMatches: ['ISTJ', 'ISFJ'],
          badMatches: ['INTJ', 'INFJ'],
          goodMatchReasons: ['ISTJ: 안정성과 체계성으로 당신의 즉흥성에 균형을 맞춰주고 실용적 조언을 제공합니다', 'ISFJ: 따뜻한 배려와 지지로 당신의 활발함을 이해하고 지원해줍니다'],
          badMatchReasons: ['INTJ: 체계적이고 계획적인 성향이 즉흥적인 당신과 충돌할 수 있습니다', 'INFJ: 내향적이고 신중한 성향이 활발한 당신과 맞지 않을 수 있습니다'],
          recommendations: ['계획 세우는 습관 기르기', '집중력 향상시키기', '장기적 목표 설정하기', '감정 관리하기', '비판 수용력 기르기']
        },
        'ESTP': {
          title: '사업가 (ESTP)',
          description: '똑똑하고 에너지 넘치며 인기가 많은 활동가입니다.',
          detailedDescription: '당신은 현실적이고 실용적인 접근을 선호하는 행동파입니다. 새로운 도전과 모험을 즐기며, 위기 상황에서도 냉정하게 대처하는 능력이 뛰어납니다. 사교적이고 설득력이 있어 사람들과 쉽게 어울리며, 즉석에서 문제를 해결하는 능력이 탁월합니다.',
          traits: ['행동력', '현실적', '사교적', '적응력', '설득력'],
          strengths: ['즉각적 대응', '실용적 해결', '리더십', '네트워킹', '위기 관리'],
          weaknesses: ['장기 계획 부족', '세부사항 간과', '감정적 둔감', '루틴 기피', '성급함'],
          goodMatches: ['ISFJ', 'ISTJ'],
          badMatches: ['INFJ', 'INTJ'],
          goodMatchReasons: ['ISFJ: 세심한 배려와 안정성으로 당신의 적극성을 지지하고 균형을 맞춰줍니다', 'ISTJ: 체계적인 접근과 신뢰성으로 당신의 즉흥성에 안정감을 제공해줍니다'],
          badMatchReasons: ['INFJ: 내향적이고 미래 지향적인 성향이 현재 중심적인 당신과 충돌할 수 있습니다', 'INTJ: 체계적이고 장기적 계획을 중시하는 성향이 즉흥적인 당신과 맞지 않을 수 있습니다'],
          recommendations: ['장기 계획 능력 기르기', '세부사항 주의하기', '감정적 공감 능력 개발하기', '인내심 기르기', '신중함 연습하기']
        }
      };

      return (type in results ? results[type as keyof typeof results] : {
        title: '균형잡힌 성격',
        description: '다양한 성향이 균형을 이루고 있습니다.',
        detailedDescription: '당신은 여러 성향이 조화롭게 균형을 이루고 있는 특별한 성격입니다. 상황에 따라 유연하게 대응할 수 있는 능력을 가지고 있으며, 다양한 사람들과 잘 어울릴 수 있습니다.',
        traits: ['균형감', '유연성', '적응력', '포용력', '다재다능'],
        strengths: ['상황 적응력', '다양한 관점 이해', '갈등 조정 능력', '폭넓은 인간관계', '스트레스 관리'],
        weaknesses: ['우유부단함', '일관성 부족', '정체성 혼란', '깊이 부족', '선택의 어려움'],
        goodMatches: ['모든 유형'],
        badMatches: ['없음'],
        goodMatchReasons: ['균형잡힌 성격으로 대부분의 사람들과 조화를 이룰 수 있습니다'],
        badMatchReasons: ['특별히 맞지 않는 유형은 없습니다'],
        recommendations: ['자신만의 독특함 찾기', '일관성 기르기', '깊이 있는 관계 만들기', '명확한 목표 설정', '개성 표현하기']
      });
    }
  },
  {
    id: 'love-style',
    title: '연애 스타일 분석',
    description: '당신의 연애 스타일을 알아보세요',
    category: '연애',
    duration: '2분',
    questionCount: 20,
    questions: [
      // 로맨틱/현실적 측면 (5문)
      {
        question: '첫 데이트 장소로 가장 선호하는 곳은?',
        options: [
          { text: '야경이 보이는 루프탑 레스토랑', value: 'romantic' },
          { text: '맛있다고 소문난 현지 맛집', value: 'practical' }
        ]
      },
      {
        question: '연인에게 선물을 줄 때?',
        options: [
          { text: '둘만의 추억이 담긴 커스텀 선물', value: 'romantic' },
          { text: '상대방이 실제로 필요로 하는 실용품', value: 'practical' }
        ]
      },
      {
        question: '연인과의 기념일에?',
        options: [
          { text: '특별한 이벤트와 서프라이즈를 준비한다', value: 'romantic' },
          { text: '평소처럼 자연스럽게 시간을 보낸다', value: 'practical' }
        ]
      },
      {
        question: '커플링이나 매칭 아이템에 대해?',
        options: [
          { text: '로맨틱하고 의미있다고 생각한다', value: 'romantic' },
          { text: '꼭 필요하지 않다고 생각한다', value: 'practical' }
        ]
      },
      {
        question: '연인과의 여행을 계획할 때?',
        options: [
          { text: '로맨틱한 분위기의 여행지를 우선 고려한다', value: 'romantic' },
          { text: '예산과 편의성을 먼저 따져본다', value: 'practical' }
        ]
      },

      // 열정/안정 측면 (5문)
      {
        question: '연애 초기에 당신은?',
        options: [
          { text: '매일 연락하고 자주 만나고 싶어한다', value: 'passionate' },
          { text: '서로의 페이스를 맞춰가며 천천히 다가간다', value: 'stable' }
        ]
      },
      {
        question: '연인과의 갈등이 생겼을 때?',
        options: [
          { text: '즉시 해결하려고 감정적으로 대화한다', value: 'passionate' },
          { text: '시간을 두고 차분히 해결방법을 찾는다', value: 'stable' }
        ]
      },
      {
        question: '연인의 관심이 다른 곳으로 향할 때?',
        options: [
          { text: '즉시 확인하고 해결하려고 한다', value: 'passionate' },
          { text: '믿고 기다리며 지켜본다', value: 'stable' }
        ]
      },
      {
        question: '사랑한다는 말을 얼마나 자주?',
        options: [
          { text: '매일 여러 번 표현한다', value: 'passionate' },
          { text: '진심으로 느낄 때만 표현한다', value: 'stable' }
        ]
      },
      {
        question: '연인과의 미래에 대해?',
        options: [
          { text: '빨리 더 깊은 관계로 발전하고 싶다', value: 'passionate' },
          { text: '충분한 시간을 두고 신중하게 결정한다', value: 'stable' }
        ]
      },

      // 독립적/의존적 측면 (5문)
      {
        question: '연인이 바쁠 때 당신은?',
        options: [
          { text: '자신만의 시간을 즐기며 기다린다', value: 'independent' },
          { text: '아쉬워하며 함께할 시간을 만들려 한다', value: 'dependent' }
        ]
      },
      {
        question: '연인과 떨어져 있는 시간에?',
        options: [
          { text: '각자의 일에 집중하는 것이 좋다', value: 'independent' },
          { text: '자주 연락하며 함께 있는 느낌을 유지한다', value: 'dependent' }
        ]
      },
      {
        question: '연인의 개인적인 취미나 활동에 대해?',
        options: [
          { text: '존중하고 응원한다', value: 'independent' },
          { text: '함께 참여하고 싶어한다', value: 'dependent' }
        ]
      },
      {
        question: '중요한 결정을 내릴 때?',
        options: [
          { text: '스스로 결정한 후 연인에게 알린다', value: 'independent' },
          { text: '연인과 함께 상의해서 결정한다', value: 'dependent' }
        ]
      },
      {
        question: '친구들과의 시간과 연인과의 시간?',
        options: [
          { text: '둘 다 중요하고 균형을 맞춘다', value: 'independent' },
          { text: '연인과의 시간이 더 우선이다', value: 'dependent' }
        ]
      },

      // 사교적/내향적 측면 (5문)
      {
        question: '연인의 친구들과 처음 만날 때?',
        options: [
          { text: '적극적으로 다가가며 친해지려 한다', value: 'social' },
          { text: '조용히 관찰하며 자연스럽게 어울린다', value: 'private' }
        ]
      },
      {
        question: '연인과 함께하는 모임에서?',
        options: [
          { text: '분위기를 이끌며 활발히 참여한다', value: 'social' },
          { text: '연인 옆에서 조용히 함께한다', value: 'private' }
        ]
      },
      {
        question: '연애 관계를 주변에?',
        options: [
          { text: '자연스럽게 공개하고 함께 어울린다', value: 'social' },
          { text: '둘만의 사적인 관계로 유지한다', value: 'private' }
        ]
      },
      {
        question: '연인과의 갈등을 해결할 때?',
        options: [
          { text: '주변의 조언도 구하며 해결한다', value: 'social' },
          { text: '둘만의 문제로 여기고 직접 해결한다', value: 'private' }
        ]
      },
      {
        question: '연인과의 데이트 스타일은?',
        options: [
          { text: '다양한 사람들과 어울리는 것을 좋아한다', value: 'social' },
          { text: '둘만의 조용한 시간을 더 선호한다', value: 'private' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const romanticCount = answers.filter(a => a === 'romantic').length;
      const practicalCount = answers.filter(a => a === 'practical').length;
      const passionateCount = answers.filter(a => a === 'passionate').length;
      const stableCount = answers.filter(a => a === 'stable').length;
      const independentCount = answers.filter(a => a === 'independent').length;
      const dependentCount = answers.filter(a => a === 'dependent').length;
      const socialCount = answers.filter(a => a === 'social').length;
      const privateCount = answers.filter(a => a === 'private').length;

      // 4차원 분석으로 8가지 타입 결정
      const isRomantic = romanticCount > practicalCount;
      const isPassionate = passionateCount > stableCount;
      const isIndependent = independentCount > dependentCount;
      // const isSocial = socialCount > privateCount;

      // 8가지 조합을 완전히 매핑 (로맨틱×열정×독립성)
      if (isRomantic && isPassionate && isIndependent) {
        return {
          title: '자유로운 로맨티스트 🌹',
          description: '열정적이면서도 독립적인 당신! 자유로운 영혼으로 사랑을 표현하는 연인입니다.',
          detailedDescription: '당신은 사랑에 대한 뜨거운 열정을 가지고 있으면서도 개인의 자유와 독립성을 소중히 여기는 매력적인 사람입니다. 로맨틱한 순간들을 만들어내지만 상대방과 자신의 개성을 존중하며, 구속받지 않는 사랑을 추구합니다. 감정 표현이 풍부하면서도 균형잡힌 관계를 만들어갑니다.',
          traits: ['열정적', '독립적', '로맨틱', '자유로움', '균형감'],
          strengths: ['풍부한 감정 표현', '개성 존중', '로맨틱한 센스', '자유로운 사고', '균형잡힌 관계'],
          weaknesses: ['일관성 부족', '약속 기피', '우선순위 혼란', '깊이 부족', '변덕스러움'],
          goodMatches: ['안정적 동반자', '따뜻한 케어러'],
          badMatches: ['차가운 독립주의자', '집착형 연인'],
          goodMatchReasons: ['안정적 동반자: 당신의 자유로운 성향을 이해하며 안정감을 제공해줍니다', '따뜻한 케어러: 당신의 열정을 따뜻하게 받아주며 보살펴줍니다'],
          badMatchReasons: ['차가운 독립주의자: 둘 다 독립적이어서 정서적 거리감이 생길 수 있습니다', '집착형 연인: 자유를 원하는 당신과 소유욕이 강한 상대방 간의 갈등이 생깁니다'],
          recommendations: ['일관성 기르기', '약속 지키는 습관', '깊이 있는 관계 시도', '우선순위 정하기', '안정감 주기']
        };
      } else if (isRomantic && isPassionate && !isIndependent) {
        return {
          title: '헌신적 연인 💕',
          description: '사랑에 모든 것을 바치는 당신! 깊고 진실한 사랑을 추구하는 헌신적인 연인입니다.',
          detailedDescription: '당신은 사랑을 삶의 가장 중요한 부분으로 여기며, 연인에게 전적으로 헌신하는 깊은 사랑을 보여줍니다. 로맨틱한 감성과 열정적인 마음으로 상대방을 위해 기꺼이 자신을 희생할 수 있으며, 둘만의 깊은 유대감을 무엇보다 소중히 여깁니다.',
          traits: ['헌신적', '열정적', '로맨틱', '감정적', '의존적'],
          strengths: ['깊은 사랑', '완전한 헌신', '로맨틱한 표현', '강한 유대감', '상대방 우선'],
          weaknesses: ['과도한 의존', '자아 상실', '질투심', '감정 기복', '현실 간과'],
          goodMatches: ['우아한 연인', '실용적 파트너'],
          badMatches: ['자유로운 모험가', '차가운 독립주의자'],
          goodMatchReasons: ['우아한 연인: 당신의 헌신을 우아하게 받아주며 균형잡힌 사랑을 나눌 수 있습니다', '실용적 파트너: 현실적 지지로 당신의 감정적 사랑을 안정화시켜줍니다'],
          badMatchReasons: ['자유로운 모험가: 헌신을 부담스러워하며 자유를 원해 갈등이 생깁니다', '차가운 독립주의자: 감정적 표현의 차이로 소통에 어려움이 생깁니다'],
          recommendations: ['개인 시간 갖기', '독립성 기르기', '현실적 계획 세우기', '감정 조절하기', '자아 찾기']
        };
      } else if (isRomantic && !isPassionate && isIndependent) {
        return {
          title: '우아한 연인 🎭',
          description: '세련되고 품격있는 당신! 성숙하고 우아한 사랑을 추구하는 연인입니다.',
          detailedDescription: '당신은 로맨틱한 감성을 가지고 있으면서도 차분하고 성숙한 방식으로 사랑을 표현하는 우아한 사람입니다. 독립적인 성향으로 서로의 개성을 존중하며, 급하지 않게 천천히 깊어지는 관계를 선호합니다. 세련된 취향과 품격있는 태도로 특별한 로맨스를 만들어갑니다.',
          traits: ['우아함', '성숙함', '로맨틱', '독립적', '세련됨'],
          strengths: ['품격있는 사랑', '성숙한 사고', '개성 존중', '안정적 관계', '세련된 취향'],
          weaknesses: ['감정 표현 절제', '거리감', '완벽주의', '높은 기준', '소극성'],
          goodMatches: ['헌신적 연인', '실용적 파트너'],
          badMatches: ['안정적 동반자', '자유로운 모험가'],
          goodMatchReasons: ['헌신적 연인: 당신의 우아함을 존경하며 깊은 사랑으로 보답해줍니다', '실용적 파트너: 현실감각으로 당신의 이상적 로맨스를 뒷받침해줍니다'],
          badMatchReasons: ['안정적 동반자: 둘 다 차분해서 관계에 활력이 부족할 수 있습니다', '자유로운 모험가: 추구하는 사랑의 방식이 달라 갈등이 생길 수 있습니다'],
          recommendations: ['감정 표현 늘리기', '자발성 기르기', '완벽주의 완화하기', '활발함 더하기', '거리감 줄이기']
        };
      } else if (isRomantic && !isPassionate && !isIndependent) {
        return {
          title: '따뜻한 케어러 🤗',
          description: '포근하고 따뜻한 당신! 상대방을 정성스럽게 돌보는 사랑을 주는 연인입니다.',
          detailedDescription: '당신은 로맨틱한 마음과 따뜻한 배려심으로 연인을 정성스럽게 돌보는 사람입니다. 화려하지 않지만 진심이 담긴 작은 것들로 사랑을 표현하며, 상대방의 행복과 편안함을 위해 세심하게 신경쓰는 헌신적인 성격입니다. 안정적이고 지속적인 관계를 추구합니다.',
          traits: ['따뜻함', '배려심', '로맨틱', '헌신적', '안정적'],
          strengths: ['세심한 돌봄', '따뜻한 마음', '지속적 사랑', '안정감 제공', '진심 어린 배려'],
          weaknesses: ['자기희생', '소극적', '개성 부족', '의존성', '자아 상실'],
          goodMatches: ['자유로운 로맨티스트', '차가운 독립주의자'],
          badMatches: ['자유로운 모험가', '집착형 연인'],
          goodMatchReasons: ['자유로운 로맨티스트: 당신의 따뜻함이 상대방의 자유로운 영혼에 안정감을 줍니다', '차가운 독립주의자: 당신의 배려가 냉정한 상대방에게 따뜻함을 전해줍니다'],
          badMatchReasons: ['자유로운 모험가: 돌봄을 부담스러워하며 자유를 제한받는다고 느낄 수 있습니다', '집착형 연인: 둘 다 상대방에게 의존적이어서 건강하지 못한 관계가 될 수 있습니다'],
          recommendations: ['자기주장 기르기', '개인 취미 갖기', '경계선 설정하기', '독립성 키우기', '자아 개발하기']
        };
      } else if (!isRomantic && isPassionate && isIndependent) {
        return {
          title: '자유로운 모험가 🦋',
          description: '역동적이고 자유로운 당신! 모험과 새로운 경험을 추구하는 활발한 연인입니다.',
          detailedDescription: '당신은 연애에서도 자유로움과 새로운 경험을 중시하는 역동적인 사람입니다. 현실적이면서도 열정적이며, 독립적인 성향으로 서로의 개성을 존중하는 관계를 좋아합니다. 구속보다는 함께 성장하고 다양한 경험을 공유하는 파트너십을 추구합니다.',
          traits: ['자유로움', '모험적', '독립적', '열정적', '현실적'],
          strengths: ['새로운 경험', '활력 넘침', '독립성', '현실적 사고', '개방적 마음'],
          weaknesses: ['불안정함', '약속 기피', '깊이 부족', '로맨틱함 부족', '변덕스러움'],
          goodMatches: ['따뜻한 케어러', '안정적 동반자'],
          badMatches: ['헌신적 연인', '우아한 연인'],
          goodMatchReasons: ['따뜻한 케어러: 당신의 자유로운 성향을 이해하며 안정적인 지지를 제공해줍니다', '안정적 동반자: 활발한 당신에게 편안한 휴식처가 되어줄 수 있습니다'],
          badMatchReasons: ['헌신적 연인: 자유를 원하는 당신과 헌신을 원하는 상대방 간의 갈등이 생깁니다', '우아한 연인: 추구하는 연애 스타일의 차이로 서로를 이해하기 어려울 수 있습니다'],
          recommendations: ['안정감 기르기', '약속 지키기', '깊이 있는 관계 시도', '로맨틱함 연출', '일관성 유지하기']
        };
      } else if (!isRomantic && isPassionate && !isIndependent) {
        return {
          title: '실용적 파트너 🔧',
          description: '현실적이면서도 열정적인 당신! 실용적인 사랑으로 관계를 든든하게 만드는 연인입니다.',
          detailedDescription: '당신은 화려한 로맨스보다는 실질적이고 든든한 지원으로 사랑을 표현하는 현실적인 사람입니다. 열정적이면서도 실용적이며, 연인과 함께 현실적인 목표를 이루어나가는 것에서 기쁨을 찾습니다. 꾸준하고 믿을 수 있는 파트너십을 구축합니다.',
          traits: ['실용적', '열정적', '현실적', '신뢰성', '목표지향'],
          strengths: ['현실적 지원', '목표 달성', '신뢰성', '꾸준함', '실질적 도움'],
          weaknesses: ['로맨틱함 부족', '감정 표현 어려움', '딱딱함', '융통성 부족', '재미 부족'],
          goodMatches: ['우아한 연인', '헌신적 연인'],
          badMatches: ['자유로운 로맨티스트', '차가운 독립주의자'],
          goodMatchReasons: ['우아한 연인: 당신의 현실적 지지가 상대방의 이상적 로맨스를 실현가능하게 만들어줍니다', '헌신적 연인: 깊은 사랑을 나누는 상대방에게 안정적인 기반을 제공해줍니다'],
          badMatchReasons: ['자유로운 로맨티스트: 현실적인 접근이 상대방의 자유로운 영혼을 제약한다고 느낄 수 있습니다', '차가운 독립주의자: 둘 다 감정 표현이 부족해서 관계가 건조해질 수 있습니다'],
          recommendations: ['로맨틱한 표현 연습', '감정 표현 늘리기', '유연성 기르기', '재미 요소 추가', '특별함 연출하기']
        };
      } else if (!isRomantic && !isPassionate && isIndependent) {
        return {
          title: '차가운 독립주의자 🧊',
          description: '이성적이고 독립적인 당신! 감정보다는 현실을 중시하는 쿨한 연인입니다.',
          detailedDescription: '당신은 연애를 감정적으로 접근하기보다는 이성적이고 현실적으로 바라보는 성숙한 사람입니다. 개인의 독립성과 자유를 매우 중요하게 여기며, 각자의 영역을 존중하는 건전한 관계를 추구합니다. 감정에 휘둘리지 않는 안정적이고 합리적인 연애관을 가지고 있습니다.',
          traits: ['독립적', '이성적', '현실적', '냉정함', '합리적'],
          strengths: ['감정 조절', '현실적 판단', '독립성', '안정성', '합리적 사고'],
          weaknesses: ['감정 표현 부족', '냉정함', '거리감', '로맨틱함 부족', '소통 어려움'],
          goodMatches: ['따뜻한 케어러', '헌신적 연인'],
          badMatches: ['자유로운 로맨티스트', '실용적 파트너'],
          goodMatchReasons: ['따뜻한 케어러: 당신의 냉정함을 따뜻하게 녹여주며 감정적 균형을 맞춰줍니다', '헌신적 연인: 깊은 사랑으로 당신의 마음을 열게 하고 관계에 온기를 더해줍니다'],
          badMatchReasons: ['자유로운 로맨티스트: 감정 표현과 로맨틱함의 차이로 서로를 이해하기 어려울 수 있습니다', '실용적 파트너: 둘 다 감정 표현이 부족해서 관계가 너무 건조해질 수 있습니다'],
          recommendations: ['감정 표현 연습', '로맨틱한 제스처 시도', '소통 늘리기', '따뜻함 표현하기', '특별한 순간 만들기']
        };
      } else {
        return {
          title: '안정적 동반자 ☕',
          description: '편안하고 안정적인 당신! 평온하고 지속가능한 관계를 만드는 든든한 연인입니다.',
          detailedDescription: '당신은 화려하거나 자극적인 연애보다는 편안하고 안정적인 관계를 선호하는 차분한 사람입니다. 현실적이면서도 따뜻한 마음을 가지고 있으며, 서로에게 의지하며 함께 성장하는 동반자적 관계를 추구합니다. 꾸준하고 믿을 수 있는 사랑을 보여줍니다.',
          traits: ['안정적', '편안함', '현실적', '따뜻함', '신뢰성'],
          strengths: ['관계 안정성', '편안함 제공', '신뢰성', '갈등 적음', '지속성'],
          weaknesses: ['자극 부족', '평범함', '열정 부족', '뚜렷함 부족', '재미 부족'],
          goodMatches: ['자유로운 로맨티스트', '자유로운 모험가'],
          badMatches: ['우아한 연인', '차가운 독립주의자'],
          goodMatchReasons: ['자유로운 로맨티스트: 당신의 안정감이 활발한 상대방에게 편안한 쉼터가 되어줍니다', '자유로운 모험가: 모험적인 상대방에게 든든한 기반과 휴식처를 제공해줍니다'],
          badMatchReasons: ['우아한 연인: 둘 다 차분해서 관계에 활력과 자극이 부족할 수 있습니다', '차가운 독립주의자: 둘 다 감정 표현이 절제되어 관계가 너무 밋밋해질 수 있습니다'],
          recommendations: ['특별함 연출하기', '자극적인 활동 시도', '감정 표현 늘리기', '새로운 경험 추구', '열정 불러일으키기']
        };
      }
    }
  },
  {
    id: 'workplace-character',
    title: '직장 캐릭터 분석',
    description: '직장에서 당신은 어떤 캐릭터인가요?',
    category: '직장',
    duration: '1분 30초',
    questionCount: 18,
    questions: [
      // 리더십/팔로워십 측정 (6문)
      {
        question: '팀 프로젝트에서 당신의 역할은?',
        options: [
          { text: '자연스럽게 팀을 이끌고 방향을 제시한다', value: 'leader' },
          { text: '팀장의 지시를 따르며 맡은 역할에 충실한다', value: 'follower' }
        ]
      },
      {
        question: '회의에서 의견이 분분할 때?',
        options: [
          { text: '적극적으로 나서서 의견을 조율한다', value: 'leader' },
          { text: '다양한 의견을 듣고 다수 의견을 따른다', value: 'follower' }
        ]
      },
      {
        question: '새로운 직원이 들어왔을 때?',
        options: [
          { text: '먼저 다가가서 업무를 가르쳐준다', value: 'leader' },
          { text: '필요할 때만 도움을 주며 적응을 기다린다', value: 'follower' }
        ]
      },
      {
        question: '업무 분배가 불공평할 때?',
        options: [
          { text: '문제점을 지적하고 재분배를 제안한다', value: 'leader' },
          { text: '주어진 업무를 묵묵히 수행한다', value: 'follower' }
        ]
      },
      {
        question: '중요한 결정을 내려야 할 때?',
        options: [
          { text: '책임지고 빠르게 결정을 내린다', value: 'leader' },
          { text: '상급자나 팀의 결정을 기다린다', value: 'follower' }
        ]
      },
      {
        question: '팀 분위기가 침체되었을 때?',
        options: [
          { text: '분위기를 바꾸려고 적극 노력한다', value: 'leader' },
          { text: '자연스럽게 분위기가 나아지기를 기다린다', value: 'follower' }
        ]
      },

      // 혁신적/안정적 측정 (6문)
      {
        question: '새로운 업무 방식이 제안되면?',
        options: [
          { text: '흥미롭게 여기고 적극 시도해본다', value: 'innovative' },
          { text: '검증된 기존 방식이 더 안전하다고 생각한다', value: 'stable' }
        ]
      },
      {
        question: '회사의 급격한 변화에 대해?',
        options: [
          { text: '새로운 기회로 받아들이고 적응한다', value: 'innovative' },
          { text: '불안하고 기존의 안정성을 선호한다', value: 'stable' }
        ]
      },
      {
        question: '업무 개선 아이디어가 떠올랐을 때?',
        options: [
          { text: '바로 제안하고 실험해본다', value: 'innovative' },
          { text: '충분히 검토하고 위험을 따진 후 결정한다', value: 'stable' }
        ]
      },
      {
        question: '새로운 기술이나 도구 도입에 대해?',
        options: [
          { text: '빨리 배워서 업무에 활용해본다', value: 'innovative' },
          { text: '기존 방식에 익숙해서 변화를 선호하지 않는다', value: 'stable' }
        ]
      },
      {
        question: '실패할 수도 있는 도전적 프로젝트에 대해?',
        options: [
          { text: '재미있겠다! 도전해보고 싶다', value: 'innovative' },
          { text: '리스크가 큰 것 같아서 신중하게 접근한다', value: 'stable' }
        ]
      },
      {
        question: '업무 루틴에 대해서는?',
        options: [
          { text: '매번 새로운 방식으로 시도해본다', value: 'innovative' },
          { text: '검증된 방법을 반복하는 것이 효율적이다', value: 'stable' }
        ]
      },

      // 개인적/협업적 측정 (6문)
      {
        question: '중요한 업무를 맡았을 때?',
        options: [
          { text: '혼자 집중해서 완벽하게 해내고 싶다', value: 'individual' },
          { text: '팀원들과 협력해서 함께 해결한다', value: 'collaborative' }
        ]
      },
      {
        question: '아이디어를 발전시킬 때?',
        options: [
          { text: '혼자 충분히 구상한 후 완성된 것을 공유한다', value: 'individual' },
          { text: '초기 단계부터 동료들과 브레인스토밍한다', value: 'collaborative' }
        ]
      },
      {
        question: '업무 공간 선호도는?',
        options: [
          { text: '조용한 개인 공간에서 집중하는 것이 좋다', value: 'individual' },
          { text: '열린 공간에서 동료들과 소통하며 일하는 것이 좋다', value: 'collaborative' }
        ]
      },
      {
        question: '문제가 생겼을 때?',
        options: [
          { text: '혼자 해결책을 찾아보고 스스로 처리한다', value: 'individual' },
          { text: '동료들에게 조언을 구하고 함께 해결한다', value: 'collaborative' }
        ]
      },
      {
        question: '성과 인정에 대해서는?',
        options: [
          { text: '개인의 기여도를 명확히 인정받고 싶다', value: 'individual' },
          { text: '팀 전체의 성과로 평가받는 것이 좋다', value: 'collaborative' }
        ]
      },
      {
        question: '점심시간이나 휴식시간에는?',
        options: [
          { text: '혼자 조용히 쉬며 재충전한다', value: 'individual' },
          { text: '동료들과 함께 시간을 보내며 친목을 다진다', value: 'collaborative' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const leaderCount = answers.filter(a => a === 'leader').length;
      const followerCount = answers.filter(a => a === 'follower').length;
      const innovativeCount = answers.filter(a => a === 'innovative').length;
      const stableCount = answers.filter(a => a === 'stable').length;
      const individualCount = answers.filter(a => a === 'individual').length;
      const collaborativeCount = answers.filter(a => a === 'collaborative').length;

      // 3차원 분석으로 8가지 타입 결정
      const isLeader = leaderCount > followerCount;
      const isInnovative = innovativeCount > stableCount;
      const isIndividual = individualCount > collaborativeCount;

      if (isLeader && isInnovative && isIndividual) {
        return {
          title: '혁신적 리더 🚀',
          description: '미래를 이끄는 비저너리! 독창적 아이디어로 변화를 주도하는 혁신가입니다.',
          detailedDescription: '당신은 새로운 가능성을 탐구하고 조직에 혁신을 가져오는 미래 지향적 리더입니다. 독립적으로 업무를 처리하면서도 팀을 이끄는 능력이 뛰어나며, 기존의 틀을 깨는 창의적 해결책을 제시합니다. 리스크를 두려워하지 않고 새로운 도전을 즐기며, 변화하는 환경에서 기회를 찾아냅니다.',
          traits: ['혁신적 사고', '리더십', '독립성', '창의성', '미래 지향적'],
          strengths: ['변화 주도', '창의적 문제 해결', '전략적 비전', '빠른 적응', '혁신 추진'],
          weaknesses: ['과도한 독단', '현실성 부족', '팀워크 소홀', '성급한 변화', '리스크 과다'],
          goodMatches: ['신뢰할 수 있는 전문가', '혁신적 팀플레이어'],
          badMatches: ['팀의 윤활유', '안정적 팀장'],
          goodMatchReasons: ['신뢰할 수 있는 전문가: 당신의 혁신적 아이디어를 안정적으로 실행해줄 수 있습니다', '혁신적 팀플레이어: 함께 새로운 아이디어를 발전시키며 시너지를 만들어냅니다'],
          badMatchReasons: ['팀의 윤활유: 급격한 변화를 불편해하여 당신의 혁신 추진에 저항할 수 있습니다', '안정적 팀장: 안정성을 중시하는 성향이 혁신적인 당신과 충돌할 수 있습니다'],
          recommendations: ['팀원 의견 적극 수렴하기', '단계적 변화 전략 수립', '리스크 관리 능력 기르기', '협업 스킬 개발', '현실성 검토하기']
        };
      } else if (isLeader && isInnovative && !isIndividual) {
        return {
          title: '카리스마 리더 🌟',
          description: '팀을 이끄는 카리스마! 혁신과 협업으로 조직을 변화시키는 영감의 리더입니다.',
          detailedDescription: '당신은 팀과 함께 혁신을 만들어가는 카리스마 넘치는 리더입니다. 사람들을 동기부여하고 새로운 아이디어에 대한 열정을 전파하는 능력이 뛰어납니다. 협업을 통해 더 큰 시너지를 만들어내며, 팀원들의 창의성을 끌어내어 조직 전체의 혁신을 이끕니다.',
          traits: ['카리스마', '혁신성', '협업 정신', '영감 제공', '동기부여'],
          strengths: ['팀 영감 제공', '혁신 문화 조성', '협업 시너지', '변화 관리', '비전 제시'],
          weaknesses: ['과도한 이상주의', '현실 간과', '번아웃 위험', '성과 압박', '완벽주의'],
          goodMatches: ['창의적 개발자', '신뢰할 수 있는 전문가'],
          badMatches: ['완벽주의 리더', '팀의 윤활유'],
          goodMatchReasons: ['창의적 개발자: 당신의 비전을 창의적으로 구현하며 혁신적 결과를 만들어냅니다', '신뢰할 수 있는 전문가: 당신의 아이디어를 안정적으로 실행하며 품질을 보장해줍니다'],
          badMatchReasons: ['완벽주의 리더: 리더십 스타일의 차이로 의견 충돌이 생길 수 있습니다', '팀의 윤활유: 변화에 대한 저항으로 혁신 추진이 어려울 수 있습니다'],
          recommendations: ['현실적 목표 설정', '단계적 실행 계획', '팀원 개별 관리', '스트레스 관리', '성과 측정 시스템 구축']
        };
      } else if (isLeader && !isInnovative && isIndividual) {
        return {
          title: '완벽주의 리더 🎯',
          description: '정밀한 실행력! 체계적이고 완벽한 결과로 신뢰를 얻는 전문가 리더입니다.',
          detailedDescription: '당신은 높은 품질과 정확성을 바탕으로 팀을 이끄는 완벽주의 리더입니다. 체계적인 접근 방식을 선호하며, 검증된 방법을 통해 안정적인 성과를 만들어냅니다. 개인의 전문성을 바탕으로 리더십을 발휘하며, 실수 없는 완벽한 결과물을 추구합니다.',
          traits: ['완벽주의', '체계성', '전문성', '신뢰성', '품질 지향'],
          strengths: ['높은 품질 보장', '체계적 관리', '전문성 인정', '안정적 성과', '신뢰성'],
          weaknesses: ['융통성 부족', '혁신 저항', '과도한 통제', '스트레스 과다', '변화 적응 어려움'],
          goodMatches: ['혁신적 팀플레이어', '창의적 개발자'],
          badMatches: ['혁신적 리더', '카리스마 리더'],
          goodMatchReasons: ['혁신적 팀플레이어: 당신의 체계성과 팀원의 창의성이 균형을 이루며 완성도 높은 결과를 만들어냅니다', '창의적 개발자: 당신의 체계적 관리 하에서 창의적 아이디어가 안정적으로 구현될 수 있습니다'],
          badMatchReasons: ['혁신적 리더: 혁신과 안정성에 대한 우선순위 차이로 갈등이 생길 수 있습니다', '카리스마 리더: 리더십 접근 방식의 차이로 충돌할 수 있습니다'],
          recommendations: ['유연성 기르기', '혁신에 대한 개방성', '팀 자율성 존중', '스트레스 관리', '변화 적응 훈련']
        };
      } else if (isLeader && !isInnovative && !isIndividual) {
        return {
          title: '안정적 팀장 🛡️',
          description: '믿음직한 팀의 기둥! 안정성과 협업으로 팀을 든든하게 지키는 수호자입니다.',
          detailedDescription: '당신은 팀의 안정성과 화합을 최우선으로 하는 신뢰할 수 있는 리더입니다. 검증된 방식을 통해 꾸준한 성과를 만들어내며, 팀원들과의 협업을 중시합니다. 급격한 변화보다는 점진적 개선을 선호하며, 모든 팀원이 편안하게 일할 수 있는 환경을 만드는 데 탁월합니다.',
          traits: ['안정성', '협업 정신', '신뢰성', '배려심', '일관성'],
          strengths: ['팀 안정성', '꾸준한 성과', '갈등 조정', '팀워크 강화', '장기적 관점'],
          weaknesses: ['혁신 부족', '변화 저항', '성장 한계', '도전 기피', '경쟁력 약화'],
          goodMatches: ['혁신적 리더', '창의적 개발자'],
          badMatches: ['완벽주의 리더', '신뢰할 수 있는 전문가'],
          goodMatchReasons: ['혁신적 리더: 당신의 안정성과 상대방의 혁신성이 균형을 이루며 지속 가능한 성장을 만들어냅니다', '창의적 개발자: 당신의 안정적 지원 하에서 창의적 아이디어가 안전하게 실험될 수 있습니다'],
          badMatchReasons: ['완벽주의 리더: 두 리더 간의 스타일 차이로 갈등이 생길 수 있습니다', '신뢰할 수 있는 전문가: 둘 다 안정성을 중시해서 혁신이 부족할 수 있습니다'],
          recommendations: ['혁신 문화 수용하기', '변화 관리 능력 기르기', '도전적 목표 설정', '창의성 개발', '경쟁 의식 기르기']
        };
      } else if (!isLeader && isInnovative && isIndividual) {
        return {
          title: '창의적 개발자 💡',
          description: '아이디어 뱅크! 독창적 사고로 혁신적 솔루션을 만들어내는 창의의 천재입니다.',
          detailedDescription: '당신은 혼자만의 집중 시간을 통해 창의적이고 혁신적인 아이디어를 개발하는 전문가입니다. 기존의 틀에 얽매이지 않고 독창적인 접근 방식을 선호하며, 새로운 기술과 방법론을 적극적으로 탐구합니다. 개인 작업에서 최고의 성과를 내지만, 팀에게는 신선한 아이디어를 제공합니다.',
          traits: ['창의성', '독창성', '혁신적 사고', '집중력', '기술적 전문성'],
          strengths: ['혁신적 아이디어', '독창적 솔루션', '기술 전문성', '깊이 있는 작업', '문제 해결'],
          weaknesses: ['소통 부족', '팀워크 어려움', '현실성 부족', '일정 관리 어려움', '협업 기피'],
          goodMatches: ['카리스마 리더', '완벽주의 리더'],
          badMatches: ['창의적 개발자', '혁신적 팀플레이어'],
          goodMatchReasons: ['카리스마 리더: 당신의 창의적 아이디어를 팀에 효과적으로 전파하고 실현시켜줍니다', '완벽주의 리더: 당신의 혁신적 아이디어를 체계적으로 구현하고 품질을 보장해줍니다'],
          badMatchReasons: ['창의적 개발자: 비슷한 성향으로 인해 협업이 어렵고 실행력이 부족할 수 있습니다', '혁신적 팀플레이어: 둘 다 아이디어 중심이라 실제 실행에서 어려움이 있을 수 있습니다'],
          recommendations: ['소통 능력 기르기', '팀워크 스킬 개발', '현실성 검토하기', '일정 관리 개선', '협업의 가치 인식하기']
        };
      } else if (!isLeader && isInnovative && !isIndividual) {
        return {
          title: '혁신적 팀플레이어 🔥',
          description: '변화의 촉매! 팀과 함께 새로운 가능성을 탐구하는 혁신의 동반자입니다.',
          detailedDescription: '당신은 팀 내에서 새로운 아이디어와 변화를 추진하는 역동적인 팀플레이어입니다. 협업을 통해 혁신적인 결과를 만들어내는 것을 즐기며, 동료들과 함께 브레인스토밍하고 새로운 방법을 시도하는 것을 좋아합니다. 팀의 창의성을 자극하고 변화를 받아들이는 분위기를 조성합니다.',
          traits: ['혁신성', '협업 정신', '적응력', '에너지', '변화 추진'],
          strengths: ['팀 창의성 자극', '새로운 시도', '변화 적응', '협업 시너지', '동기부여'],
          weaknesses: ['리더십 부족', '일관성 부족', '안정성 부족', '깊이 부족', '산만함'],
          goodMatches: ['완벽주의 리더', '안정적 팀장'],
          badMatches: ['혁신적 리더', '창의적 개발자'],
          goodMatchReasons: ['완벽주의 리더: 당신의 혁신적 에너지와 리더의 체계성이 균형을 이루며 완성도 높은 결과를 만들어냅니다', '안정적 팀장: 당신의 변화 추진력이 안정적인 팀에 활력을 불어넣어줍니다'],
          badMatchReasons: ['혁신적 리더: 둘 다 변화를 추구하여 방향성이 흔들리고 안정성이 부족할 수 있습니다', '창의적 개발자: 아이디어는 많지만 실행력과 체계성이 부족할 수 있습니다'],
          recommendations: ['리더십 스킬 개발', '일관성 기르기', '전문성 깊이 늘리기', '집중력 향상', '체계적 접근법 배우기']
        };
      } else if (!isLeader && !isInnovative && isIndividual) {
        return {
          title: '신뢰할 수 있는 전문가 🔧',
          description: '묵묵한 장인! 개인의 전문성으로 완벽한 결과를 만들어내는 믿음직한 전문가입니다.',
          detailedDescription: '당신은 자신의 전문 분야에서 뛰어난 실력을 발휘하는 신뢰할 수 있는 전문가입니다. 혼자 집중해서 완벽한 품질의 결과물을 만들어내며, 검증된 방법과 안정적인 접근을 선호합니다. 말보다는 행동으로 실력을 보여주며, 동료들로부터 전문성을 인정받습니다.',
          traits: ['전문성', '신뢰성', '집중력', '완벽주의', '안정성'],
          strengths: ['전문 기술', '높은 품질', '신뢰성', '일관성', '독립적 업무'],
          weaknesses: ['소통 부족', '변화 적응 어려움', '협업 기피', '리더십 부족', '혁신 저항'],
          goodMatches: ['혁신적 리더', '카리스마 리더'],
          badMatches: ['신뢰할 수 있는 전문가', '팀의 윤활유'],
          goodMatchReasons: ['혁신적 리더: 당신의 전문성이 리더의 혁신적 아이디어를 안정적으로 구현해줍니다', '카리스마 리더: 당신의 신뢰성이 리더의 비전을 견고하게 뒷받침해줍니다'],
          badMatchReasons: ['신뢰할 수 있는 전문가: 비슷한 성향으로 혁신과 변화가 부족할 수 있습니다', '팀의 윤활유: 둘 다 소극적이어서 추진력이 부족할 수 있습니다'],
          recommendations: ['소통 능력 개발', '변화 적응 훈련', '협업 스킬 기르기', '리더십 역량 개발', '혁신 마인드셋 기르기']
        };
      } else {
        return {
          title: '팀의 윤활유 🤝',
          description: '화합의 마에스트로! 안정적인 협업으로 팀을 하나로 만드는 조화의 전문가입니다.',
          detailedDescription: '당신은 팀 내 화합과 안정성을 책임지는 소중한 존재입니다. 동료들 간의 갈등을 조정하고, 모든 사람이 편안하게 일할 수 있는 분위기를 만드는 데 탁월합니다. 검증된 방법을 통해 꾸준한 성과를 만들어내며, 팀워크를 통해 더 큰 결과를 달성하는 것을 중시합니다.',
          traits: ['협력성', '안정성', '조화', '배려심', '신뢰성'],
          strengths: ['팀 화합', '갈등 조정', '안정적 성과', '협업 능력', '장기적 관계'],
          weaknesses: ['주도성 부족', '혁신 저항', '변화 적응 어려움', '개인 성과 부족', '우유부단함'],
          goodMatches: ['혁신적 리더', '창의적 개발자'],
          badMatches: ['팀의 윤활유', '안정적 팀장'],
          goodMatchReasons: ['혁신적 리더: 당신의 안정적 지원이 리더의 혁신적 시도를 든든하게 뒷받침해줍니다', '창의적 개발자: 당신의 협업 능력이 개발자의 아이디어를 팀에 효과적으로 전파해줍니다'],
          badMatchReasons: ['팀의 윤활유: 비슷한 성향으로 추진력과 혁신이 부족할 수 있습니다', '안정적 팀장: 둘 다 안정 지향적이어서 성장 동력이 부족할 수 있습니다'],
          recommendations: ['주도적 자세 기르기', '혁신 마인드셋 개발', '변화 관리 능력', '개인 전문성 강화', '리더십 역량 개발']
        };
      }
    }
  },
  {
    id: 'stress-relief',
    title: '스트레스 해소 유형',
    description: '당신만의 스트레스 해소법을 찾아보세요',
    category: '심리',
    duration: '1분 30초',
    questionCount: 16,
    questions: [
      // 활동적/수동적 측정 (6문)
      {
        question: '힘든 하루를 보낸 후 집에 도착하면?',
        options: [
          { text: '운동이나 산책으로 몸을 움직인다', value: 'active' },
          { text: '침대에 누워서 푹 쉰다', value: 'passive' }
        ]
      },
      {
        question: '화가 날 때 당신의 해소법은?',
        options: [
          { text: '격렬한 운동이나 신체 활동으로 발산한다', value: 'active' },
          { text: '조용히 앉아서 마음을 가라앉힌다', value: 'passive' }
        ]
      },
      {
        question: '주말 스트레스 해소를 위해서는?',
        options: [
          { text: '등산, 자전거 등 활동적인 취미', value: 'active' },
          { text: '독서, 영화감상 등 정적인 취미', value: 'passive' }
        ]
      },
      {
        question: '스트레스가 쌓였을 때 선호하는 활동은?',
        options: [
          { text: '댄스, 요가 등 몸을 움직이는 활동', value: 'active' },
          { text: '명상, 목욕 등 편안한 휴식', value: 'passive' }
        ]
      },
      {
        question: '기분전환이 필요할 때?',
        options: [
          { text: '새로운 장소에 가서 활동한다', value: 'active' },
          { text: '편안한 곳에서 여유를 즐긴다', value: 'passive' }
        ]
      },
      {
        question: '완벽한 휴가 스타일은?',
        options: [
          { text: '액티비티와 체험이 가득한 여행', value: 'active' },
          { text: '아무것도 하지 않고 느긋한 휴식', value: 'passive' }
        ]
      },

      // 사회적/개인적 측정 (5문)
      {
        question: '스트레스받을 때 가장 도움이 되는 것은?',
        options: [
          { text: '친구들과 수다떨며 털어놓기', value: 'social' },
          { text: '혼자만의 시간으로 마음 정리하기', value: 'individual' }
        ]
      },
      {
        question: '힘들 때 위로받는 방법은?',
        options: [
          { text: '가족이나 연인과 함께 시간 보내기', value: 'social' },
          { text: '혼자서 조용히 생각 정리하기', value: 'individual' }
        ]
      },
      {
        question: '기분이 우울할 때는?',
        options: [
          { text: '사람들과 만나서 에너지 충전', value: 'social' },
          { text: '혼자만의 공간에서 재충전', value: 'individual' }
        ]
      },
      {
        question: '스트레스 해소 방법을 선택할 때?',
        options: [
          { text: '다른 사람들과 함께 할 수 있는 것', value: 'social' },
          { text: '나만의 방식으로 혼자 할 수 있는 것', value: 'individual' }
        ]
      },
      {
        question: '마음이 복잡할 때 대화 상대는?',
        options: [
          { text: '믿을 만한 사람과 깊은 대화', value: 'social' },
          { text: '일기나 글로 혼자 정리', value: 'individual' }
        ]
      },

      // 실내/실외 측정 (5문)
      {
        question: '스트레스 해소를 위한 이상적인 장소는?',
        options: [
          { text: '자연이 있는 야외 공간', value: 'outdoor' },
          { text: '편안하고 아늑한 실내', value: 'indoor' }
        ]
      },
      {
        question: '힐링이 필요할 때 찾는 곳은?',
        options: [
          { text: '공원, 해변, 산 등 자연 속', value: 'outdoor' },
          { text: '집, 카페, 도서관 등 실내', value: 'indoor' }
        ]
      },
      {
        question: '기분전환을 위한 공간 선택은?',
        options: [
          { text: '탁 트인 야외에서 바람 쐬기', value: 'outdoor' },
          { text: '아늑한 실내에서 편안하게', value: 'indoor' }
        ]
      },
      {
        question: '스트레스를 받으면 가고 싶은 곳은?',
        options: [
          { text: '캠핑장이나 바닷가 같은 자연', value: 'outdoor' },
          { text: '스파나 찜질방 같은 실내 시설', value: 'indoor' }
        ]
      },
      {
        question: '완벽한 쉼터는?',
        options: [
          { text: '넓은 정원이나 테라스가 있는 곳', value: 'outdoor' },
          { text: '아늑한 침실이나 거실이 있는 곳', value: 'indoor' }
        ]
      }
    ],
    resultMapping: (answers) => {
      const activeCount = answers.filter(a => a === 'active').length;
      const passiveCount = answers.filter(a => a === 'passive').length;
      const socialCount = answers.filter(a => a === 'social').length;
      const individualCount = answers.filter(a => a === 'individual').length;
      const outdoorCount = answers.filter(a => a === 'outdoor').length;
      const indoorCount = answers.filter(a => a === 'indoor').length;

      // 3차원 분석으로 8가지 타입 결정
      const isActive = activeCount > passiveCount;
      const isSocial = socialCount > individualCount;
      const isOutdoor = outdoorCount > indoorCount;

      if (isActive && isSocial && isOutdoor) {
        return {
          title: '아웃도어 액티비스트 🏕️',
          description: '자연 속에서 사람들과 함께! 야외에서 활동적으로 에너지를 발산하며 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 자연 속에서 사람들과 함께 활동적인 시간을 보내며 스트레스를 해소하는 에너지 넘치는 사람입니다. 캠핑, 등산, 해변 스포츠 등을 친구들과 함께 즐기며 몸과 마음을 재충전합니다. 자연의 신선한 공기와 함께하는 사람들의 에너지가 최고의 치유법입니다.',
          traits: ['활동적', '사교적', '자연 친화적', '에너지 넘침', '모험적'],
          strengths: ['강한 체력', '리더십', '팀워크', '자연 적응력', '스트레스 저항력'],
          weaknesses: ['날씨 의존성', '비용 부담', '일정 조율 어려움', '부상 위험', '피로 누적'],
          goodMatches: ['자연 명상가', '홈 트레이너'],
          badMatches: ['인도어 힐러', '인도어 소셜라이저'],
          goodMatchReasons: ['자연 명상가: 야외를 좋아하는 공통점으로 자연 속에서 함께 힐링할 수 있습니다', '홈 트레이너: 활동적인 성향이 비슷해 운동을 함께 즐길 수 있습니다'],
          badMatchReasons: ['인도어 힐러: 실내외 선호도 차이로 함께 할 수 있는 활동이 제한적일 수 있습니다', '인도어 소셜라이저: 활동 장소에 대한 선호가 달라 갈등이 생길 수 있습니다'],
          recommendations: ['실내 활동도 균형있게 하기', '날씨에 관계없는 대안 찾기', '안전 장비 준비하기', '개인 시간도 확보하기', '부상 예방에 주의하기']
        };
      } else if (isActive && isSocial && !isOutdoor) {
        return {
          title: '소셜 액티비스트 💃',
          description: '실내에서 함께 움직여요! 사람들과 함께 실내에서 활동적으로 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 헬스장, 댄스스튜디오, 실내 스포츠시설 등에서 사람들과 함께 몸을 움직이며 스트레스를 해소하는 사교적이고 활동적인 사람입니다. 팀 스포츠나 그룹 운동을 통해 사람들과 교감하며 동시에 신체 활동으로 에너지를 발산합니다.',
          traits: ['활동적', '사교적', '실내 지향적', '그룹 중심', '규칙적'],
          strengths: ['꾸준한 운동', '사회적 동기부여', '날씨 무관', '체계적 관리', '네트워킹'],
          weaknesses: ['시설 의존성', '비용 부담', '시간 제약', '타인 의존', '획일성'],
          goodMatches: ['아웃도어 액티비스트', '인도어 소셜라이저'],
          badMatches: ['자연 명상가', '인도어 힐러'],
          goodMatchReasons: ['아웃도어 액티비스트: 활동적이고 사교적인 성향이 비슷해 다양한 운동을 함께 즐길 수 있습니다', '인도어 소셜라이저: 실내와 사교적 성향이 맞아 함께 시간을 보내기 좋습니다'],
          badMatchReasons: ['자연 명상가: 활동성과 공간 선호도가 달라 함께 하기 어려울 수 있습니다', '인도어 힐러: 활동적 성향과 조용한 성향이 맞지 않을 수 있습니다'],
          recommendations: ['야외 활동도 시도해보기', '개인 운동도 병행하기', '다양한 운동 종목 경험하기', '혼자만의 시간도 갖기', '자연과의 접촉 늘리기']
        };
      } else if (isActive && !isSocial && isOutdoor) {
        return {
          title: '자연 탐험가 🥾',
          description: '혼자서 자연 정복! 야외에서 혼자만의 활동적인 시간을 통해 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 혼자서 자연 속에서 활동하며 스트레스를 해소하는 독립적이고 모험적인 사람입니다. 혼자 등산을 하거나 조깅을 하고, 자전거 라이딩을 즐기며 자연과 하나 되는 시간을 소중히 여깁니다. 고요한 자연 속에서 자신만의 페이스로 움직이는 것이 최고의 힐링입니다.',
          traits: ['독립적', '모험적', '자연 친화적', '활동적', '성찰적'],
          strengths: ['강한 정신력', '자립심', '자연 적응력', '개인 성취', '깊은 사색'],
          weaknesses: ['고립감', '안전 위험', '날씨 의존성', '사회성 부족', '외로움'],
          goodMatches: ['인도어 힐러', '자연 명상가'],
          badMatches: ['소셜 액티비스트', '인도어 소셜라이저'],
          goodMatchReasons: ['인도어 힐러: 개인적 성향이 비슷해 서로의 혼자 시간을 존중할 수 있습니다', '자연 명상가: 자연을 사랑하는 공통점으로 조용한 야외 활동을 함께 즐길 수 있습니다'],
          badMatchReasons: ['소셜 액티비스트: 사회적 성향과 개인적 성향이 충돌할 수 있습니다', '인도어 소셜라이저: 공간과 사회성 선호도가 모두 달라 갈등이 생길 수 있습니다'],
          recommendations: ['사회적 활동도 참여하기', '안전 장비 준비하기', '동행자 있는 활동도 시도하기', '실내 운동도 병행하기', '응급 상황 대비하기']
        };
      } else if (isActive && !isSocial && !isOutdoor) {
        return {
          title: '홈 트레이너 🏋️‍♀️',
          description: '집에서 나만의 운동! 실내에서 혼자 활동적으로 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 집에서 혼자 운동하거나 홈트레이닝을 통해 스트레스를 해소하는 독립적이고 체계적인 사람입니다. 유튜브 운동 영상을 따라하거나 홈짐을 활용해 자신만의 페이스로 꾸준히 몸을 관리합니다. 편안한 공간에서 자신에게 집중하는 시간이 최고의 치유법입니다.',
          traits: ['자기주도적', '체계적', '집중력', '꾸준함', '효율적'],
          strengths: ['시간 효율성', '비용 절약', '개인 맞춤', '꾸준한 습관', '자기 관리'],
          weaknesses: ['동기부여 어려움', '단조로움', '사회성 부족', '장비 한계', '자기 통제 필요'],
          goodMatches: ['인도어 힐러', '아웃도어 액티비스트'],
          badMatches: ['소셜 액티비스트', '자연 탐험가'],
          goodMatchReasons: ['인도어 힐러: 실내와 개인적 성향이 비슷해 서로의 공간을 존중할 수 있습니다', '아웃도어 액티비스트: 활동적인 성향이 비슷해 운동에 대한 열정을 공유할 수 있습니다'],
          badMatchReasons: ['소셜 액티비스트: 개인적 운동과 그룹 운동 선호도가 달라 갈등이 생길 수 있습니다', '자연 탐험가: 실내외 활동 선호도가 달라 함께 할 활동이 제한적입니다'],
          recommendations: ['가끔 야외 운동도 시도하기', '온라인 커뮤니티 참여하기', '다양한 운동 종목 시도하기', '친구들과 운동하는 시간 갖기', '운동 목표 공유하기']
        };
      } else if (!isActive && isSocial && isOutdoor) {
        return {
          title: '자연 소셜라이저 🌸',
          description: '자연 속에서 함께 힐링! 야외에서 사람들과 조용히 시간을 보내며 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 자연 속에서 사람들과 함께 편안하고 조용한 시간을 보내며 스트레스를 해소하는 평화로운 사람입니다. 공원에서 피크닉을 하거나 해변에서 일광욕을 하고, 정원에서 차를 마시며 대화하는 것을 좋아합니다. 자연의 평온함과 사람들의 따뜻함이 만나는 순간이 최고의 힐링입니다.',
          traits: ['평화로움', '사교적', '자연 친화적', '온화함', '여유로움'],
          strengths: ['스트레스 완화', '인간관계', '자연 감상', '평온함', '조화로움'],
          weaknesses: ['날씨 의존성', '수동적', '계획성 부족', '우유부단함', '에너지 부족'],
          goodMatches: ['자연 탐험가', '자연 명상가'],
          badMatches: ['소셜 액티비스트', '홈 트레이너'],
          goodMatchReasons: ['자연 탐험가: 자연을 사랑하는 공통점으로 야외에서 함께 평화로운 시간을 보낼 수 있습니다', '자연 명상가: 자연과 조용한 성향이 비슷해 깊은 교감을 나눌 수 있습니다'],
          badMatchReasons: ['소셜 액티비스트: 활동성과 조용함의 차이로 에너지 레벨이 맞지 않을 수 있습니다', '홈 트레이너: 실내외와 사회성 선호도가 달라 갈등이 생길 수 있습니다'],
          recommendations: ['가끔 활동적인 야외 활동도 시도하기', '실내 모임도 참여하기', '개인 시간도 확보하기', '목표 설정하고 실행하기', '에너지 관리법 찾기']
        };
      } else if (!isActive && isSocial && !isOutdoor) {
        return {
          title: '인도어 소셜라이저 ☕',
          description: '실내에서 함께 쉬어요! 실내에서 사람들과 편안한 시간을 보내며 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 카페, 집, 실내 공간에서 사람들과 함께 편안하고 조용한 시간을 보내며 스트레스를 해소하는 사교적이면서도 차분한 사람입니다. 친구들과 수다를 떨거나 가족과 영화를 보고, 따뜻한 차를 마시며 깊은 대화를 나누는 것을 좋아합니다.',
          traits: ['사교적', '차분함', '실내 지향적', '안정적', '대화 중심'],
          strengths: ['깊은 인간관계', '정서적 안정', '소통 능력', '공감 능력', '평온함'],
          weaknesses: ['활동성 부족', '외부 자극 부족', '운동 부족', '변화 저항', '건강 관리 소홀'],
          goodMatches: ['소셜 액티비스트', '인도어 힐러'],
          badMatches: ['자연 탐험가', '아웃도어 액티비스트'],
          goodMatchReasons: ['소셜 액티비스트: 사교적이고 실내 성향이 비슷해 다양한 실내 활동을 함께 즐길 수 있습니다', '인도어 힐러: 실내와 조용한 성향이 맞아 편안한 시간을 보낼 수 있습니다'],
          badMatchReasons: ['자연 탐험가: 실내외와 사회성 선호도가 모두 달라 공통 활동을 찾기 어려울 수 있습니다', '아웃도어 액티비스트: 활동성과 공간 선호도가 달라 갈등이 생길 수 있습니다'],
          recommendations: ['가끔 야외 활동도 시도하기', '실내에서 할 수 있는 운동 찾기', '새로운 장소 탐험하기', '개인 취미도 개발하기', '건강 관리에 신경쓰기']
        };
      } else if (!isActive && !isSocial && isOutdoor) {
        return {
          title: '자연 명상가 🧘‍♀️',
          description: '자연 속에서 나만의 평화! 야외에서 혼자 조용히 명상하며 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 자연 속에서 혼자만의 조용한 시간을 보내며 스트레스를 해소하는 성찰적이고 평화로운 사람입니다. 공원에서 명상을 하거나 해변에서 일몰을 바라보고, 숲속에서 책을 읽으며 자연과 하나가 되는 시간을 소중히 여깁니다. 자연의 고요함 속에서 내면의 평화를 찾습니다.',
          traits: ['성찰적', '평화로움', '자연 친화적', '독립적', '영적'],
          strengths: ['깊은 사색', '정신적 평화', '자연 감상', '스트레스 완화', '자기 성찰'],
          weaknesses: ['사회성 부족', '고립감', '현실 도피', '날씨 의존성', '소극적'],
          goodMatches: ['인도어 힐러', '자연 소셜라이저'],
          badMatches: ['소셜 액티비스트', '아웃도어 액티비스트'],
          goodMatchReasons: ['인도어 힐러: 조용하고 개인적인 성향이 비슷해 서로의 힐링 방식을 존중할 수 있습니다', '자연 소셜라이저: 자연을 사랑하는 공통점으로 조용한 야외 시간을 함께 보낼 수 있습니다'],
          badMatchReasons: ['소셜 액티비스트: 사교성과 활동성의 차이로 에너지 레벨이 맞지 않을 수 있습니다', '아웃도어 액티비스트: 야외를 좋아하지만 활동성과 사회성이 달라 갈등이 생길 수 있습니다'],
          recommendations: ['사회적 활동도 참여하기', '실내 명상도 연습하기', '사람들과 자연 관련 이야기 나누기', '그룹 명상이나 요가 클래스 참여하기', '균형잡힌 사회생활 유지하기']
        };
      } else {
        return {
          title: '인도어 힐러 🛁',
          description: '집에서 나만의 힐링! 실내에서 혼자 조용히 휴식하며 스트레스를 해소하는 타입입니다.',
          detailedDescription: '당신은 집이나 실내 공간에서 혼자만의 조용하고 편안한 시간을 보내며 스트레스를 해소하는 내향적이고 평화로운 사람입니다. 따뜻한 목욕을 하거나 좋아하는 음악을 들으며 책을 읽고, 아로마 캔들을 켜놓고 명상하는 것을 좋아합니다. 자신만의 아늑한 공간에서 찾는 평온함이 최고의 치유법입니다.',
          traits: ['내향적', '평화로움', '자기 돌봄', '실내 지향적', '차분함'],
          strengths: ['정서적 안정', '자기 관리', '깊은 휴식', '스트레스 완화', '자기 성찰'],
          weaknesses: ['사회성 부족', '활동성 부족', '고립감', '변화 저항', '외부 자극 부족'],
          goodMatches: ['자연 명상가', '홈 트레이너'],
          badMatches: ['아웃도어 액티비스트', '소셜 액티비스트'],
          goodMatchReasons: ['자연 명상가: 조용하고 성찰적인 성향이 비슷해 깊은 이해와 공감대를 형성할 수 있습니다', '홈 트레이너: 실내와 개인적 성향이 맞아 서로의 공간과 시간을 존중할 수 있습니다'],
          badMatchReasons: ['아웃도어 액티비스트: 모든 성향이 반대라서 함께 할 수 있는 활동을 찾기 어려울 수 있습니다', '소셜 액티비스트: 사회성과 활동성의 차이로 라이프스타일이 맞지 않을 수 있습니다'],
          recommendations: ['가끔 야외 활동도 시도하기', '사회적 모임에 참여하기', '가벼운 운동 시작하기', '새로운 취미 도전하기', '점진적으로 활동 범위 넓히기']
        };
      }
    }
  },
  {
    id: 'shopping-style',
    title: '쇼핑 성향 분석',
    description: '당신의 쇼핑 스타일을 알아보세요',
    category: '라이프스타일',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '쇼핑을 나가기 전에?',
        options: [
          { text: '살 것 리스트를 꼼꼼히 작성한다', value: 'planner' },
          { text: '그때그때 필요한 것을 산다', value: 'spontaneous' }
        ]
      },
      {
        question: '온라인 쇼핑에서 가장 중요한 것은?',
        options: [
          { text: '후기와 평점을 꼼꼼히 확인', value: 'careful' },
          { text: '사진이 예쁘면 바로 구매', value: 'impulsive' }
        ]
      },
      {
        question: '세일 기간에는?',
        options: [
          { text: '미리 찜해둔 것만 구매한다', value: 'strategic' },
          { text: '이것저것 다 사고 싶어진다', value: 'enthusiastic' }
        ]
      },
      {
        question: '비싼 물건을 살 때?',
        options: [
          { text: '몇 달간 고민하고 신중하게', value: 'cautious' },
          { text: '마음에 들면 과감하게 구매', value: 'decisive' }
        ]
      },
      {
        question: '쇼핑 동반자는?',
        options: [
          { text: '혼자가 편하다', value: 'independent' },
          { text: '친구와 함께 가야 재미있다', value: 'social' }
        ]
      },
      {
        question: '새로운 브랜드 제품은?',
        options: [
          { text: '신중하게 검토 후 구매', value: 'conservative' },
          { text: '호기심으로 바로 시도', value: 'adventurous' }
        ]
      },
      {
        question: '쇼핑몰에서 계획에 없던 예쁜 옷을 발견했을 때?',
        options: [
          { text: '필요 없으면 보고만 온다', value: 'rational' },
          { text: '일단 사고 본다', value: 'emotional' }
        ]
      },
      {
        question: '가격을 비교할 때?',
        options: [
          { text: '여러 쇼핑몰을 다 둘러본다', value: 'thorough' },
          { text: '적당한 선에서 결정한다', value: 'efficient' }
        ]
      },
      {
        question: '쇼핑 후 만족도는?',
        options: [
          { text: '계획대로 샀을 때 뿌듯하다', value: 'organized' },
          { text: '많이 샀을 때 기분 좋다', value: 'quantity' }
        ]
      },
      {
        question: '반품/교환에 대해서는?',
        options: [
          { text: '번거로워서 거의 안 한다', value: 'accepting' },
          { text: '마음에 안 들면 바로 반품', value: 'perfectionist' }
        ]
      }
    ],
    resultMapping: (answers) => {
      // 각 문항별로 정확한 값 매핑 - 실제 선택지에 맞게 수정
      const plannerAnswers = answers.filter(a => ['planner', 'careful', 'strategic', 'cautious', 'conservative', 'rational', 'thorough', 'organized', 'accepting'].includes(a as string)).length;
      const spontaneousAnswers = answers.filter(a => ['spontaneous', 'impulsive', 'enthusiastic', 'decisive', 'emotional', 'quantity', 'perfectionist'].includes(a as string)).length;
      const socialAnswers = answers.filter(a => ['social'].includes(a as string)).length;
      const independentAnswers = answers.filter(a => ['independent'].includes(a as string)).length;
      // const adventurousAnswers = answers.filter(a => ['adventurous'].includes(a as string)).length;

      // 계획형 vs 즉흥형 판단 (3개 이상이면 해당 성향)
      if (plannerAnswers >= 4) {
        return {
          title: '계획형 쇼퍼 📋',
          description: '쇼핑도 전략이 필요한 당신! 꼼꼼한 계획과 비교쇼핑으로 최고의 만족을 얻는 타입입니다.',
          detailedDescription: '당신은 체계적이고 신중한 소비를 하는 현명한 쇼퍼입니다. 구매 전 충분한 리서치를 통해 가성비 최고의 제품을 찾아내며, 불필요한 지출을 최소화하는 데 탁월합니다. 할인 정보를 놓치지 않고, 쇼핑 리스트를 미리 작성하여 계획적인 소비 생활을 실천합니다.',
          traits: ['계획적', '신중함', '합리적', '꼼꼼함', '효율적'],
          strengths: ['가성비 추구', '예산 관리', '충분한 검토', '현명한 선택', '후회 없는 구매'],
          weaknesses: ['결정 시간 오래 걸림', '기회 놓침', '과도한 분석', '즉흥성 부족', '트렌드 민감도 낮음'],
          goodMatches: ['밸런스 쇼퍼', '독립적 쇼퍼'],
          badMatches: ['감성 쇼퍼', '소셜 쇼퍼'],
          goodMatchReasons: ['밸런스 쇼퍼: 서로 좋은 정보를 나누며 더 똑똑한 소비를 할 수 있습니다', '독립적 쇼퍼: 비슷한 가치관으로 건전한 소비 문화를 함께 만들어갈 수 있습니다'],
          badMatchReasons: ['감성 쇼퍼: 계획 없는 소비로 인해 스트레스를 받을 수 있습니다', '소셜 쇼퍼: 소비 패턴이 맞지 않아 이해하기 어려울 수 있습니다'],
          recommendations: ['즉흥적 구매도 가끔 시도하기', '트렌드 정보 접하기', '결정 시간 줄이기', '경험 소비도 고려하기', '완벽주의 줄이기']
        };
      } else if (spontaneousAnswers >= 4) {
        return {
          title: '감성 쇼퍼 💝',
          description: '쇼핑이 곧 힐링인 당신! 감정과 직감으로 쇼핑하며 그 순간의 기쁨을 만끽하는 타입입니다.',
          detailedDescription: '당신은 쇼핑을 통해 즐거움과 만족감을 얻는 감성적인 소비자입니다. 예쁘거나 마음에 드는 것을 보면 참기 어려워하며, 그 순간의 감정을 중시합니다. 새로운 트렌드에 민감하고, 쇼핑 자체를 하나의 취미이자 스트레스 해소법으로 여깁니다.',
          traits: ['감성적', '즉흥적', '트렌드 민감', '직관적', '열정적'],
          strengths: ['트렌드 선도', '즉석 만족감', '다양한 경험', '새로움 추구', '긍정적 에너지'],
          weaknesses: ['과소비', '후회 구매', '예산 초과', '충동성', '계획성 부족'],
          goodMatches: ['소셜 쇼퍼', '트렌드 쇼퍼'],
          badMatches: ['계획형 쇼퍼', '독립적 쇼퍼'],
          goodMatchReasons: ['소셜 쇼퍼: 함께 쇼핑하며 즐거움을 나누고 서로의 선택을 응원할 수 있습니다', '트렌드 쇼퍼: 최신 정보를 공유하며 새로운 트렌드를 함께 탐험할 수 있습니다'],
          badMatchReasons: ['계획형 쇼퍼: 소비 가치관 차이로 갈등이 생길 수 있습니다', '독립적 쇼퍼: 즉흥적인 쇼핑을 이해하지 못해 답답함을 느낄 수 있습니다'],
          recommendations: ['예산 한도 설정하기', '구매 전 하루 더 생각하기', '필요성 체크리스트 만들기', '감정적 쇼핑 이유 파악하기', '저축 목표 세우기']
        };
      } else if (socialAnswers >= 1) {
        return {
          title: '소셜 쇼퍼 🛍️',
          description: '쇼핑도 함께가 즐거운 당신! 친구들과 함께 새로운 것을 발견하는 즐거움을 아는 타입입니다.',
          detailedDescription: '당신은 쇼핑을 사회적 활동으로 즐기는 사교적인 소비자입니다. 혼자보다는 친구들과 함께 쇼핑할 때 더 큰 만족감을 느끼며, 다른 사람의 의견을 듣고 새로운 브랜드나 제품을 발견하는 것을 좋아합니다. 쇼핑을 통해 인간관계를 돈독히 하고 즐거운 시간을 만들어갑니다.',
          traits: ['사교적', '모험적', '열린 마음', '협력적', '영향 받기 쉬운'],
          strengths: ['다양한 정보 습득', '새로운 발견', '즐거운 경험', '사회적 유대감', '폭넓은 취향'],
          weaknesses: ['타인 의존적', '주체성 부족', '과도한 영향', '불필요한 구매', '결정 어려움'],
          goodMatches: ['감성 쇼퍼', '밸런스 쇼퍼'],
          badMatches: ['독립적 쇼퍼', '계획형 쇼퍼'],
          goodMatchReasons: ['감성 쇼퍼: 함께 쇼핑하며 서로의 취향을 공유하고 즐거운 시간을 보낼 수 있습니다', '밸런스 쇼퍼: 함께 새로운 브랜드를 탐험하며 색다른 경험을 할 수 있습니다'],
          badMatchReasons: ['독립적 쇼퍼: 쇼핑 스타일이 달라 함께하기 어려울 수 있습니다', '계획형 쇼퍼: 즉흥적인 사회적 쇼핑을 이해하지 못할 수 있습니다'],
          recommendations: ['개인적인 취향 명확히 하기', '주체적 결정 연습하기', '혼자 쇼핑도 시도하기', '예산 관리하기', '진정한 필요 vs 사회적 영향 구분하기']
        };
      } else if (independentAnswers >= 1) {
        return {
          title: '독립적 쇼퍼 🎯',
          description: '혼자가 편한 당신! 자신만의 기준으로 신중하게 선택하는 독립적인 소비자입니다.',
          detailedDescription: '당신은 다른 사람의 영향을 받지 않고 자신만의 기준으로 쇼핑하는 독립적인 소비자입니다. 혼자 충분히 고민하고 결정하는 것을 선호하며, 남들의 시선보다는 자신의 만족도를 우선시합니다. 신중하고 계획적인 구매로 후회 없는 소비를 실천합니다.',
          traits: ['독립성', '신중함', '주체성', '개성적', '분석적'],
          strengths: ['주체적 결정', '개성 있는 선택', '후회 없는 구매', '예산 관리', '신중한 판단'],
          weaknesses: ['정보 부족', '새로운 발견 기회 놓침', '고집스러움', '사회적 교류 부족', '트렌드 놓침'],
          goodMatches: ['계획형 쇼퍼', '밸런스 쇼퍼'],
          badMatches: ['소셜 쇼퍼', '감성 쇼퍼'],
          goodMatchReasons: ['계획형 쇼퍼: 신중한 소비 성향이 비슷해 서로 이해할 수 있습니다', '밸런스 쇼퍼: 합리적인 선택을 함께 추구할 수 있습니다'],
          badMatchReasons: ['소셜 쇼퍼: 혼자 쇼핑을 선호하는 성향이 이해되지 않을 수 있습니다', '감성 쇼퍼: 즉흥적인 구매를 이해하기 어려울 수 있습니다'],
          recommendations: ['가끔 친구와 함께 쇼핑하기', '새로운 트렌드 접하기', '다른 사람 의견도 참고하기', '온라인 커뮤니티 활용하기', '유연성 기르기']
        };
      } else {
        return {
          title: '밸런스 쇼퍼 ⚖️',
          description: '계획과 즉흥을 오가는 당신! 상황에 맞게 유연하게 쇼핑하는 슬기로운 타입입니다.',
          detailedDescription: '당신은 상황과 필요에 따라 쇼핑 방식을 유연하게 조절하는 지혜로운 소비자입니다. 때로는 신중하게 계획을 세우기도 하고, 때로는 감정에 따라 즉흥적으로 구매하기도 합니다. 극단적이지 않은 균형잡힌 소비 패턴으로 안정적인 쇼핑 라이프를 유지합니다.',
          traits: ['균형감', '유연성', '적응력', '상황 판단력', '다재다능'],
          strengths: ['상황별 적절한 대응', '다양한 쇼핑 스타일 활용', '안정적 소비', '스트레스 적음', '후회 적음'],
          weaknesses: ['뚜렷한 개성 부족', '일관성 부족', '전문성 부족', '우유부단함', '깊이 부족'],
          goodMatches: ['독립적 쇼퍼', '계획형 쇼퍼', '소셜 쇼퍼'],
          badMatches: ['극단적인 쇼핑 성향의 사람'],
          goodMatchReasons: ['독립적 쇼퍼: 서로의 합리적 선택을 이해하며 조화로운 쇼핑을 즐길 수 있습니다', '계획형 쇼퍼: 신중한 소비 습관을 함께 만들어갈 수 있습니다', '소셜 쇼퍼: 다양한 쇼핑 방식으로 함께 즐길 수 있습니다'],
          badMatchReasons: ['극단적인 쇼핑 성향의 사람: 한 가지 방식만 고집하는 사람과는 맞지 않을 수 있습니다'],
          recommendations: ['자신만의 쇼핑 철학 정립하기', '일관된 기준 만들기', '전문 분야 개발하기', '명확한 우선순위 정하기', '개성 있는 취향 찾기']
        };
      }
    }
  },
  {
    id: 'travel-style',
    title: '여행 스타일 분석',
    description: '당신의 여행 스타일을 알아보세요',
    category: '여행',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '여행 계획을 세울 때?',
        options: [
          { text: '모든 일정을 미리 계획한다', value: 'planner' },
          { text: '대략만 정하고 즉흥적으로', value: 'spontaneous' }
        ]
      },
      {
        question: '선호하는 여행지는?',
        options: [
          { text: '유명한 관광지와 명소', value: 'tourist' },
          { text: '숨겨진 로컬 장소', value: 'explorer' }
        ]
      },
      {
        question: '여행 중 숙소는?',
        options: [
          { text: '편안한 호텔이 최고', value: 'comfort' },
          { text: '게스트하우스나 에어비앤비', value: 'local' }
        ]
      },
      {
        question: '여행에서 가장 중요한 것은?',
        options: [
          { text: '맛있는 음식 맛보기', value: 'foodie' },
          { text: '멋진 사진 찍기', value: 'photographer' }
        ]
      },
      {
        question: '여행 동반자는?',
        options: [
          { text: '혼자만의 자유로운 여행', value: 'solo' },
          { text: '친구나 가족과 함께', value: 'group' }
        ]
      },
      {
        question: '여행 중 쇼핑은?',
        options: [
          { text: '기념품을 꼭 사야 한다', value: 'shopper' },
          { text: '경험이 더 중요하다', value: 'experiencer' }
        ]
      },
      {
        question: '여행 예산 관리는?',
        options: [
          { text: '미리 정한 예산 내에서', value: 'budget' },
          { text: '여행에서만큼은 과감하게', value: 'spender' }
        ]
      },
      {
        question: '새로운 문화를 접할 때?',
        options: [
          { text: '적극적으로 체험한다', value: 'cultural' },
          { text: '관찰하며 천천히 이해한다', value: 'observer' }
        ]
      },
      {
        question: '여행 중 휴식은?',
        options: [
          { text: '바쁘게 이곳저곳 다닌다', value: 'active' },
          { text: '카페에서 여유롭게', value: 'relaxed' }
        ]
      },
      {
        question: '여행의 목적은?',
        options: [
          { text: '일상에서 벗어나 힐링', value: 'healing' },
          { text: '새로운 도전과 모험', value: 'adventure' }
        ]
      }
    ],
    resultMapping: (answers) => {
      // 실제 답변 옵션에 맞게 정확한 매핑
      const plannerAnswers = answers.filter(a => ['planner', 'tourist', 'theater', 'budget', 'critic', 'star'].includes(a as string)).length;
      const adventureAnswers = answers.filter(a => ['explorer', 'cultural', 'adventure', 'active', 'twist', 'patient', 'series'].includes(a as string)).length;
      const relaxedAnswers = answers.filter(a => ['comfort', 'relaxed', 'healing', 'home', 'contemplator', 'story'].includes(a as string)).length;
      const soloAnswers = answers.filter(a => ['solo'].includes(a as string)).length;
      // const localAnswers = answers.filter(a => ['local'].includes(a as string)).length;
      // const experiencerAnswers = answers.filter(a => ['experiencer'].includes(a as string)).length;

      // 모험가형 (3개 이상)
      if (adventureAnswers >= 3) {
        return {
          title: '모험가 탐험대장 🗺️',
          description: '미지의 세계가 부르는 당신! 새로운 경험과 도전을 찾아 떠나는 진정한 여행자입니다.',
          detailedDescription: '당신은 여행을 통해 새로운 도전과 미지의 경험을 추구하는 모험가입니다. 관광지보다는 현지인들만 아는 숨겨진 장소를 찾아다니며, 예상치 못한 상황도 즐거운 모험으로 받아들입니다. 문화적 체험을 적극적으로 하고, 여행에서 얻은 특별한 경험들이 인생의 소중한 자산이라고 생각합니다.',
          traits: ['모험심', '호기심', '적응력', '용기', '개방성'],
          strengths: ['새로운 경험 추구', '문제 해결 능력', '문화적 이해력', '스릴 즐기기', '독특한 추억 만들기'],
          weaknesses: ['안전 불감증', '과도한 도전', '예산 초과', '동반자 부담', '계획성 부족'],
          goodMatches: ['자유로운 솔로 트래블러', '올라운드 여행러'],
          badMatches: ['완벽 플래너', '힐링 여행자'],
          goodMatchReasons: ['자유로운 솔로 트래블러: 함께 새로운 도전을 즐기며 특별한 경험을 공유할 수 있습니다', '올라운드 여행러: 활동적인 여행을 함께 소화하며 서로 격려할 수 있습니다'],
          badMatchReasons: ['완벽 플래너: 즉흥적인 모험을 부담스러워하여 갈등이 생길 수 있습니다', '힐링 여행자: 도전적인 활동으로 인해 스트레스를 받을 수 있습니다'],
          recommendations: ['안전 수칙 숙지하기', '기본적인 계획은 세우기', '예산 관리하기', '동반자 의견 고려하기', '보험 가입하기']
        };
      } else if (plannerAnswers >= 3) {
        return {
          title: '완벽 플래너 📅',
          description: '여행도 계획이 반인 당신! 완벽한 일정으로 알찬 여행을 만들어내는 여행 마스터입니다.',
          detailedDescription: '당신은 체계적이고 효율적인 여행을 추구하는 계획의 달인입니다. 여행 전 꼼꼼한 리서치를 통해 최적의 일정을 구성하고, 예산 관리와 시간 배분을 완벽하게 해냅니다. 유명한 관광지를 빠짐없이 둘러보며, 여행에서 놓치는 것이 없도록 세심하게 준비합니다.',
          traits: ['계획성', '체계성', '효율성', '신중함', '준비성'],
          strengths: ['완벽한 일정 관리', '예산 절약', '시간 효율성', '정보 수집', '안전한 여행'],
          weaknesses: ['유연성 부족', '즉흥성 부족', '과도한 계획', '스트레스', '경직성'],
          goodMatches: ['힐링 여행자', '올라운드 여행러'],
          badMatches: ['모험가 탐험대장', '자유로운 솔로 트래블러'],
          goodMatchReasons: ['힐링 여행자: 서로의 계획성을 이해하며 완벽한 여행을 만들어갈 수 있습니다', '올라운드 여행러: 당신의 완벽한 계획을 신뢰하고 따라와 줄 수 있습니다'],
          badMatchReasons: ['모험가 탐험대장: 계획을 바꾸려는 시도로 인해 스트레스를 받을 수 있습니다', '자유로운 솔로 트래블러: 세세한 일정에 부담을 느낄 수 있습니다'],
          recommendations: ['여유 시간도 계획에 포함하기', '즉흥적 상황도 받아들이기', '동반자 의견 수렴하기', '완벽주의 줄이기', '현지에서의 변화 수용하기']
        };
      } else if (relaxedAnswers >= 3) {
        return {
          title: '힐링 여행자 🌸',
          description: '여행은 쉼표인 당신! 여유롭고 편안한 여행으로 일상의 피로를 달래는 힐링 전문가입니다.',
          detailedDescription: '당신은 여행을 통해 마음의 평화와 휴식을 찾는 힐링 전문가입니다. 바쁜 일정보다는 여유로운 시간을 즐기며, 카페에서의 여유로운 시간이나 아름다운 자연 속에서의 산책을 좋아합니다. 편안한 숙소에서의 휴식을 중시하고, 여행을 통해 에너지를 충전하고 돌아옵니다.',
          traits: ['여유로움', '평온함', '감성적', '휴식 지향', '안정성'],
          strengths: ['스트레스 해소', '깊은 휴식', '감성적 경험', '안전한 여행', '에너지 충전'],
          weaknesses: ['소극적', '새로운 경험 부족', '단조로움', '활동성 부족', '도전 회피'],
          goodMatches: ['완벽 플래너', '올라운드 여행러'],
          badMatches: ['모험가 탐험대장', '자유로운 솔로 트래블러'],
          goodMatchReasons: ['완벽 플래너: 함께 평온한 시간을 보내며 깊은 힐링을 경험할 수 있습니다', '올라운드 여행러: 조용한 여행을 이해하고 함께 편안한 시간을 보낼 수 있습니다'],
          badMatchReasons: ['모험가 탐험대장: 활동적인 여행을 원하는 사람과는 속도가 맞지 않을 수 있습니다', '자유로운 솔로 트래블러: 예측 불가능한 변화를 부담스러워할 수 있습니다'],
          recommendations: ['가끔은 새로운 활동 시도하기', '현지 문화 체험해보기', '적당한 활동량 유지하기', '다양한 힐링 방법 찾기', '균형잡힌 일정 만들기']
        };
      } else if (soloAnswers >= 1) {
        return {
          title: '자유로운 솔로 트래블러 ✈️',
          description: '혼자가 편한 당신! 자신만의 페이스로 자유롭게 세상을 탐험하는 독립적인 여행자입니다.',
          detailedDescription: '당신은 자신만의 속도와 방식으로 여행하는 것을 선호하는 독립적인 여행자입니다. 다른 사람의 의견에 구애받지 않고 자유롭게 일정을 조절하며, 혼자만의 시간을 통해 자기 성찰과 새로운 발견을 즐깁니다. 예상치 못한 만남과 경험들을 소중히 여기며, 여행을 통해 자신을 더 깊이 알아갑니다.',
          traits: ['독립성', '자유로움', '자기 주도적', '성찰적', '개방적'],
          strengths: ['자유로운 일정 조절', '자기 성찰', '새로운 만남', '독립적 결정', '개인적 성장'],
          weaknesses: ['안전 위험', '외로움', '비용 부담', '응급상황 대처', '언어 장벽'],
          goodMatches: ['모험가 탐험대장', '올라운드 여행러'],
          badMatches: ['완벽 플래너', '힐링 여행자'],
          goodMatchReasons: ['모험가 탐험대장: 서로의 독립성을 이해하며 필요할 때만 함께할 수 있습니다', '올라운드 여행러: 자유로운 스타일을 이해하고 함께 유연한 여행을 즐길 수 있습니다'],
          badMatchReasons: ['완벽 플래너: 혼자 시간을 중시하는 성향이 이해되지 않을 수 있습니다', '힐링 여행자: 예측 불가능한 계획 변경을 부담스러워할 수 있습니다'],
          recommendations: ['안전 수칙 철저히 지키기', '비상 연락망 구축하기', '현지 언어 기초 익히기', '여행 보험 가입하기', '가끔은 그룹 투어 참여하기']
        };
      } else {
        return {
          title: '올라운드 여행러 🌍',
          description: '상황에 맞는 여행을 즐기는 당신! 어떤 스타일의 여행이든 소화하는 만능 여행자입니다.',
          detailedDescription: '당신은 여행 상황과 동반자에 따라 유연하게 스타일을 조절하는 적응력 뛰어난 여행자입니다. 때로는 모험적으로, 때로는 계획적으로, 때로는 여유롭게 여행할 수 있는 균형감을 가지고 있습니다. 다양한 여행 경험을 통해 폭넓은 시각을 가지게 되며, 어떤 여행 동반자와도 잘 어울릴 수 있습니다.',
          traits: ['적응력', '균형감', '유연성', '포용력', '다재다능'],
          strengths: ['상황 적응력', '다양한 경험', '조화로운 여행', '갈등 조정', '폭넓은 관점'],
          weaknesses: ['개성 부족', '우유부단함', '깊이 부족', '일관성 부족', '뚜렷한 선호도 부족'],
          goodMatches: ['모든 여행 스타일과 조화 가능'],
          badMatches: ['극단적인 여행 성향의 사람'],
          goodMatchReasons: ['모든 여행 스타일과 조화 가능: 어떤 스타일의 여행이든 함께 즐길 수 있어 좋은 동반자가 됩니다'],
          badMatchReasons: ['극단적인 여행 성향의 사람: 강한 주장이나 극단적 선호도로 인해 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 여행 철학 정립하기', '선호하는 스타일 명확히 하기', '깊이 있는 여행 경험 쌓기', '일관된 여행 기준 만들기', '개성 있는 여행 방식 개발하기']
        };
      }
    }
  },
  {
    id: 'food-personality',
    title: '음식 취향으로 보는 성격',
    description: '당신의 음식 취향으로 성격을 분석해보세요',
    category: '음식',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '새로운 음식에 대한 당신의 태도는?',
        options: [
          { text: '호기심 충만! 뭐든 시도해본다', value: 'adventurous' },
          { text: '익숙한 음식이 가장 좋다', value: 'conservative' }
        ]
      },
      {
        question: '맛집을 고를 때 가장 중요한 것은?',
        options: [
          { text: '인스타그램에서 핫한 곳', value: 'trendy' },
          { text: '오래된 전통과 맛', value: 'traditional' }
        ]
      },
      {
        question: '매운 음식에 대해서는?',
        options: [
          { text: '매운맛 못 참지! 더 맵게!', value: 'spicy' },
          { text: '순한 맛이 최고야', value: 'mild' }
        ]
      },
      {
        question: '음식 사진 찍기는?',
        options: [
          { text: '먹기 전에 반드시 찍는다', value: 'photographer' },
          { text: '바로 먹는 게 우선이다', value: 'eater' }
        ]
      },
      {
        question: '집에서 요리할 때?',
        options: [
          { text: '레시피를 정확히 따른다', value: 'precise' },
          { text: '대충 감으로 만든다', value: 'intuitive' }
        ]
      },
      {
        question: '디저트에 대한 당신의 마음은?',
        options: [
          { text: '식사 후 디저트는 필수!', value: 'sweet' },
          { text: '배부르면 디저트는 패스', value: 'practical' }
        ]
      },
      {
        question: '음식점에서 메뉴를 고를 때?',
        options: [
          { text: '한참 고민하며 신중하게', value: 'careful' },
          { text: '첫 번째 눈에 들어온 걸로', value: 'decisive' }
        ]
      },
      {
        question: '친구와 음식을 나눠 먹을 때?',
        options: [
          { text: '적극적으로 여러 개 시켜서 나눠먹기', value: 'sharing' },
          { text: '각자 자기 것만 시키는 게 좋다', value: 'individual' }
        ]
      },
      {
        question: '건강한 음식에 대해서는?',
        options: [
          { text: '맛있으면 칼로리는 신경 안 써', value: 'hedonistic' },
          { text: '건강을 생각해서 선택한다', value: 'health' }
        ]
      },
      {
        question: '음식의 가격에 대해서는?',
        options: [
          { text: '맛있으면 비싸도 괜찮다', value: 'quality' },
          { text: '가성비가 가장 중요하다', value: 'value' }
        ]
      }
    ],
    resultMapping: (answers) => {
      // 실제 문항 답변에 맞게 정확한 매핑
      const adventurousAnswers = answers.filter(a => ['adventurous', 'trendy', 'spicy', 'photographer', 'intuitive', 'decisive', 'multi'].includes(a as string)).length;
      const conservativeAnswers = answers.filter(a => ['conservative', 'traditional', 'mild', 'eater', 'precise', 'careful', 'individual', 'health', 'value'].includes(a as string)).length;
      const socialAnswers = answers.filter(a => ['photographer', 'sharing'].includes(a as string)).length;
      const hedonisticAnswers = answers.filter(a => ['sweet', 'hedonistic', 'quality'].includes(a as string)).length;

      // 모험적 성향 (3개 이상)
      if (adventurousAnswers >= 3) {
        return {
          title: '미식 모험가 🌶️',
          description: '새로운 맛의 개척자인 당신! 호기심 많고 도전적인 성격으로 인생을 다채롭게 살아갑니다.',
          detailedDescription: '당신은 새로운 맛과 음식에 대한 끝없는 호기심을 가진 모험가입니다. 처음 보는 음식이나 이색적인 요리를 시도하는 것을 두려워하지 않으며, 맵고 자극적인 맛을 좋아합니다. 트렌디한 레스토랑이나 퓨전 요리에 관심이 많고, 음식을 통해 다양한 문화를 경험하려고 합니다.',
          traits: ['모험적', '호기심', '개방적', '도전적', '트렌드 민감'],
          strengths: ['새로운 경험 추구', '문화적 개방성', '변화 적응력', '창의적 사고', '다양성 수용'],
          weaknesses: ['일관성 부족', '안정성 부족', '과도한 자극 추구', '전통 경시', '충동적 선택'],
          goodMatches: ['소셜 푸디', '행복 추구 미식가'],
          badMatches: ['클래식 미식가', '밸런스 미식가'],
          goodMatchReasons: ['소셜 푸디: 함께 새로운 음식을 탐험하며 특별한 경험을 공유할 수 있습니다', '행복 추구 미식가: 최신 음식 트렌드를 함께 즐기며 서로 자극을 줄 수 있습니다'],
          badMatchReasons: ['클래식 미식가: 새로운 시도를 부담스러워하여 음식 선택에서 갈등이 생길 수 있습니다', '밸런스 미식가: 항상 새로운 것을 추구하는 성향이 이해되지 않을 수 있습니다'],
          recommendations: ['가끔은 익숙한 음식도 즐기기', '건강한 식단 균형 맞추기', '전통 음식의 가치도 인정하기', '과도한 자극 피하기', '안정적인 선택도 고려하기']
        };
      } else if (conservativeAnswers >= 4) {
        return {
          title: '클래식 미식가 🍜',
          description: '전통의 가치를 아는 당신! 신중하고 안정적인 성격으로 깊이 있는 관계를 만들어갑니다.',
          detailedDescription: '당신은 검증된 맛과 전통적인 요리를 선호하는 안정 지향적인 미식가입니다. 급작스러운 변화보다는 익숙하고 편안한 맛을 추구하며, 정확한 레시피와 요리법을 중시합니다. 할머니의 손맛이나 어릴 적 추억이 담긴 음식을 소중히 여기고, 음식의 깊이와 진정성을 중요하게 생각합니다.',
          traits: ['전통적', '신중함', '안정적', '보수적', '깊이 있음'],
          strengths: ['일관된 취향', '깊이 있는 이해', '안정적 선택', '전통 문화 이해', '신뢰할 수 있는 판단'],
          weaknesses: ['새로운 경험 부족', '변화 거부', '고집스러움', '융통성 부족', '트렌드 무관심'],
          goodMatches: ['밸런스 미식가', '건강 지향 미식가'],
          badMatches: ['미식 모험가', '소셜 푸디'],
          goodMatchReasons: ['밸런스 미식가: 비슷한 음식 철학으로 깊이 있는 미식 경험을 공유할 수 있습니다', '건강 지향 미식가: 예측 가능한 음식 선택으로 편안한 식사를 즐길 수 있습니다'],
          badMatchReasons: ['미식 모험가: 계속해서 새로운 것을 시도하려는 성향이 부담스러울 수 있습니다', '소셜 푸디: 일관성 없는 음식 선택으로 스트레스를 받을 수 있습니다'],
          recommendations: ['가끔은 새로운 음식도 시도하기', '젊은 세대의 트렌드 이해하기', '융통성 기르기', '다양한 문화 음식 경험하기', '열린 마음 가지기']
        };
      } else if (socialAnswers >= 1) {
        return {
          title: '소셜 푸디 📸',
          description: '음식도 소통의 도구인 당신! 사교적이고 트렌드에 민감한 성격으로 사람들과 즐겁게 어울립니다.',
          detailedDescription: '당신은 음식을 통해 사람들과 소통하고 즐거움을 나누는 것을 좋아하는 사교적인 미식가입니다. 음식 사진을 찍어 SNS에 공유하고, 친구들과 함께 맛집을 탐방하는 것을 즐깁니다. 음식의 시각적 아름다움을 중시하며, 트렌디한 카페나 레스토랑에서 보내는 시간을 소중히 여깁니다.',
          traits: ['사교적', 'SNS 활발', '시각 중시', '트렌드 민감', '공유 지향'],
          strengths: ['사회적 네트워킹', '트렌드 파악', '시각적 감각', '즐거운 분위기 조성', '정보 공유'],
          weaknesses: ['외형 치중', '실속 부족', '타인 의존적', '과시 성향', '깊이 부족'],
          goodMatches: ['미식 모험가', '행복 추구 미식가'],
          badMatches: ['클래식 미식가', '건강 지향 미식가'],
          goodMatchReasons: ['미식 모험가: 함께 예쁜 음식 사진을 찍고 공유하며 즐거움을 배가시킬 수 있습니다', '행복 추구 미식가: 함께 다양한 맛집을 탐방하며 사회적 유대감을 강화할 수 있습니다'],
          badMatchReasons: ['클래식 미식가: 음식 사진 찍기나 공유하는 것을 이해하지 못할 수 있습니다', '건강 지향 미식가: 조용한 식사를 원하는 성향과 맞지 않을 수 있습니다'],
          recommendations: ['음식의 맛도 중시하기', '혼자 식사도 즐겨보기', '진정한 미식 경험 쌓기', 'SNS보다 현실 중시하기', '깊이 있는 음식 지식 쌓기']
        };
      } else if (hedonisticAnswers >= 2) {
        return {
          title: '행복 추구 미식가 😋',
          description: '인생은 즐기라고 있는 거라는 당신! 긍정적이고 낙관적인 성격으로 현재를 만끽하며 살아갑니다.',
          detailedDescription: '당신은 음식을 통해 행복과 즐거움을 추구하는 낙천적인 미식가입니다. 칼로리나 건강보다는 맛과 만족감을 우선시하며, 디저트와 달콤한 음식을 사랑합니다. 비싸더라도 정말 맛있는 음식이라면 기꺼이 투자하며, 음식을 통해 스트레스를 해소하고 삶의 활력을 얻습니다.',
          traits: ['쾌락적', '낙관적', '현재 지향', '감각적', '관대함'],
          strengths: ['삶의 즐거움 추구', '스트레스 해소', '긍정적 에너지', '관대한 성격', '현재 만족'],
          weaknesses: ['건강 무시', '절제력 부족', '미래 계획 부족', '과소비', '자제력 부족'],
          goodMatches: ['소셜 푸디', '미식 모험가'],
          badMatches: ['건강 지향 미식가', '클래식 미식가'],
          goodMatchReasons: ['소셜 푸디: 함께 음식의 즐거움을 만끽하며 긍정적 에너지를 나눌 수 있습니다', '미식 모험가: 비슷한 가치관으로 맛있는 음식을 통해 행복한 시간을 보낼 수 있습니다'],
          badMatchReasons: ['건강 지향 미식가: 즐거움을 추구하는 태도를 이해하지 못해 갈등이 생길 수 있습니다', '클래식 미식가: 즉흥적인 음식 선택이나 과소비를 부담스러워할 수 있습니다'],
          recommendations: ['건강도 고려하기', '적당한 절제 배우기', '장기적 관점 가지기', '예산 관리하기', '균형 잡힌 식단 추구하기']
        };
      } else {
        return {
          title: '밸런스 미식가 ⚖️',
          description: '음식에서도 균형을 찾는 당신! 합리적이고 현실적인 성격으로 안정된 삶을 추구합니다.',
          detailedDescription: '당신은 음식에서도 균형과 조화를 추구하는 현실적인 미식가입니다. 맛과 건강, 가격과 품질, 전통과 트렌드 사이에서 적절한 균형점을 찾으려고 노력합니다. 극단적이지 않은 식습관으로 안정적인 식생활을 유지하며, 상황에 따라 유연하게 음식을 선택할 줄 압니다.',
          traits: ['균형감', '합리적', '현실적', '유연성', '안정적'],
          strengths: ['합리적 선택', '건강한 식습관', '경제적 효율성', '적응력', '안정성'],
          weaknesses: ['개성 부족', '깊이 부족', '우유부단함', '모험심 부족', '뚜렷한 선호도 부족'],
          goodMatches: ['클래식 미식가', '건강 지향 미식가'],
          badMatches: ['극단적인 성향의 미식가'],
          goodMatchReasons: ['클래식 미식가: 서로의 현실적인 선택을 이해하며 조화로운 식사를 즐길 수 있습니다', '건강 지향 미식가: 균형 잡힌 식습관을 함께 추구할 수 있습니다'],
          badMatchReasons: ['극단적인 성향의 미식가: 강한 음식 취향이나 편식으로 인해 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 음식 철학 정립하기', '특별한 취향 개발하기', '가끔은 모험도 시도하기', '깊이 있는 미식 경험 쌓기', '뚜렷한 선호도 찾기']
        };
      }
    }
  },
  {
    id: 'sns-pattern',
    title: 'SNS 사용 패턴 분석',
    description: 'SNS 사용 습관으로 당신의 성격을 알아보세요',
    category: 'SNS',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: 'SNS에 게시물을 올릴 때?',
        options: [
          { text: '심사숙고해서 완벽한 글만 올린다', value: 'perfectionist' },
          { text: '생각나는 대로 자유롭게 올린다', value: 'casual' }
        ]
      },
      {
        question: '사진을 올릴 때 보정은?',
        options: [
          { text: '필터와 보정으로 예쁘게', value: 'aesthetic' },
          { text: '자연스러운 모습 그대로', value: 'natural' }
        ]
      },
      {
        question: '좋아요나 댓글에 대해서는?',
        options: [
          { text: '많이 받으면 기분 좋고 적으면 아쉽다', value: 'social' },
          { text: '내 기록용이라 크게 신경 안 쓴다', value: 'personal' }
        ]
      },
      {
        question: '다른 사람 게시물에는?',
        options: [
          { text: '적극적으로 좋아요와 댓글을 단다', value: 'active' },
          { text: '보기만 하고 잘 반응하지 않는다', value: 'lurker' }
        ]
      },
      {
        question: 'SNS 스토리 기능은?',
        options: [
          { text: '일상을 자주 공유한다', value: 'sharer' },
          { text: '특별한 일이 있을 때만 올린다', value: 'selective' }
        ]
      },
      {
        question: '팔로우하는 계정은?',
        options: [
          { text: '친한 사람들만 선별적으로', value: 'intimate' },
          { text: '관심사가 비슷한 사람들까지 넓게', value: 'open' }
        ]
      },
      {
        question: 'SNS에서 논란이 된 이슈에 대해?',
        options: [
          { text: '내 의견을 적극적으로 표현한다', value: 'opinionated' },
          { text: '조용히 지켜보기만 한다', value: 'observer' }
        ]
      },
      {
        question: 'SNS를 확인하는 빈도는?',
        options: [
          { text: '수시로 확인한다', value: 'frequent' },
          { text: '하루에 한두 번 정도', value: 'moderate' }
        ]
      },
      {
        question: '개인정보 공개에 대해서는?',
        options: [
          { text: '일상과 감정을 솔직하게 공유', value: 'open_book' },
          { text: '개인적인 것은 최대한 비공개', value: 'private' }
        ]
      },
      {
        question: 'SNS의 역할은?',
        options: [
          { text: '소통과 관계 형성의 도구', value: 'social_tool' },
          { text: '정보 습득과 트렌드 파악', value: 'information' }
        ]
      }
    ],
    resultMapping: (answers) => {
      // 각 성향별로 정확한 답변 매핑
      const perfectionistAnswers = answers.filter(a => ['perfectionist', 'aesthetic', 'selective'].includes(a as string)).length;
      const socialAnswers = answers.filter(a => ['social', 'active', 'sharer', 'opinionated', 'frequent', 'open_book', 'social_tool'].includes(a as string)).length;
      const privateAnswers = answers.filter(a => ['personal', 'lurker', 'intimate', 'observer', 'private'].includes(a as string)).length;
      const casualAnswers = answers.filter(a => ['casual', 'natural'].includes(a as string)).length;
      // const openAnswers = answers.filter(a => ['open'].includes(a as string)).length;

      // SNS 인플루언서 (사교적 답변 4개 이상)
      if (socialAnswers >= 4) {
        return {
          title: 'SNS 인플루언서 📱',
          description: 'SNS가 삶의 일부인 당신! 사교적이고 표현력이 풍부한 성격으로 많은 사람들과 소통을 즐깁니다.',
          detailedDescription: '당신은 SNS를 통해 적극적으로 자신을 표현하고 많은 사람들과 소통하는 것을 즐기는 사교적인 성격입니다. 일상의 순간들을 공유하며 타인과의 연결을 중시하고, 온라인에서도 활발한 네트워킹을 합니다. 새로운 트렌드에 민감하며, 자신의 의견을 당당하게 표현하는 것을 두려워하지 않습니다.',
          traits: ['사교적', '표현력 풍부', '트렌드 민감', '외향적', '소통 중심'],
          strengths: ['네트워킹 능력', '영향력 행사', '정보 전파력', '관계 형성', '트렌드 선도'],
          weaknesses: ['프라이버시 부족', '온라인 의존성', '비판 노출', '시간 소모', '피로감'],
          goodMatches: ['SNS 아티스트', 'SNS 내추럴리스트'],
          badMatches: ['SNS 미니멀리스트', 'SNS 멀티플레이어'],
          goodMatchReasons: ['SNS 아티스트: 함께 온라인 활동을 즐기며 서로의 콘텐츠를 응원할 수 있습니다', 'SNS 내추럴리스트: 활발한 소통으로 관계를 더욱 깊게 발전시킬 수 있습니다'],
          badMatchReasons: ['SNS 미니멀리스트: 온라인 활동을 이해하지 못해 소통에 어려움이 있을 수 있습니다', 'SNS 멀티플레이어: 활발한 SNS 활동이 부담스러울 수 있습니다'],
          recommendations: ['개인정보 보호 신경쓰기', '오프라인 시간도 확보하기', '건전한 비판 수용하기', 'SNS 사용 시간 관리하기', '진정성 있는 콘텐츠 만들기']
        };
      } else if (privateAnswers >= 3) {
        return {
          title: 'SNS 미니멀리스트 🤫',
          description: '신중하고 사적인 영역을 소중히 여기는 당신! 깊이 있는 관계를 선호하는 내적 성찰형입니다.',
          detailedDescription: '당신은 개인의 프라이버시를 중시하며 SNS를 신중하게 사용하는 성숙한 성격입니다. 많은 사람과의 얕은 관계보다는 소수의 진정한 친구들과의 깊은 관계를 선호합니다. 온라인보다는 오프라인에서의 진정한 만남을 더 가치있게 여기며, 자신의 내면세계를 소중히 보호합니다.',
          traits: ['신중함', '사생활 중시', '내성적', '선별적', '깊이 있음'],
          strengths: ['깊은 관계 형성', '신중한 판단', '프라이버시 보호', '진정성', '집중력'],
          weaknesses: ['소통 기회 제한', '네트워킹 부족', '정보 습득 지연', '고립감', '기회 놓침'],
          goodMatches: ['SNS 멀티플레이어', 'SNS 내추럴리스트'],
          badMatches: ['SNS 인플루언서', 'SNS 아티스트'],
          goodMatchReasons: ['SNS 멀티플레이어: 서로의 프라이버시를 존중하며 깊이 있는 관계를 만들 수 있습니다', 'SNS 내추럴리스트: 피상적이지 않은 진정한 소통을 나눌 수 있습니다'],
          badMatchReasons: ['SNS 인플루언서: 지나친 개방성으로 인해 불편함을 느낄 수 있습니다', 'SNS 아티스트: 과도한 온라인 활동을 이해하기 어려울 수 있습니다'],
          recommendations: ['적당한 소통도 시도하기', '유용한 정보 놓치지 않기', '온라인 네트워킹 활용하기', '새로운 관계도 열어두기', 'SNS의 긍정적 측면 인식하기']
        };
      } else if (perfectionistAnswers >= 2) {
        return {
          title: 'SNS 아티스트 🎨',
          description: '완벽한 피드를 추구하는 당신! 미적 감각이 뛰어나고 세심한 성격으로 아름다운 것을 만들어냅니다.',
          detailedDescription: '당신은 SNS를 하나의 예술 작품처럼 다루는 완벽주의자입니다. 모든 게시물에 신경을 쓰며 통일감 있는 피드를 만들어가고, 사진의 구도와 색감, 텍스트까지 세심하게 고려합니다. 질보다는 양을 추구하며, 자신만의 독특한 스타일과 세계관을 온라인에서 표현합니다.',
          traits: ['완벽주의', '미적 감각', '세심함', '창의적', '일관성'],
          strengths: ['뛰어난 미적 감각', '브랜딩 능력', '퀄리티 관리', '독창성', '전문성'],
          weaknesses: ['과도한 스트레스', '시간 소모', '강박적 성향', '즉흥성 부족', '완벽주의 압박'],
          goodMatches: ['SNS 인플루언서', 'SNS 내추럴리스트'],
          badMatches: ['SNS 미니멀리스트', 'SNS 멀티플레이어'],
          goodMatchReasons: ['SNS 인플루언서: 서로의 미적 감각을 인정하고 영감을 주고받을 수 있습니다', 'SNS 내추럴리스트: 창작 활동을 함께 하며 시너지를 낼 수 있습니다'],
          badMatchReasons: ['SNS 미니멀리스트: 세심함을 이해하지 못해 답답함을 느낄 수 있습니다', 'SNS 멀티플레이어: 예술적 추구를 공감하기 어려울 수 있습니다'],
          recommendations: ['완벽주의 줄이기', '즉흥적 게시도 시도하기', '과정보다 결과 중시하기', '스트레스 관리하기', '자연스러움도 받아들이기']
        };
      } else if (casualAnswers >= 1) {
        return {
          title: 'SNS 내추럴리스트 🌿',
          description: '자연스러움을 추구하는 당신! 진정성 있고 솔직한 성격으로 있는 그대로의 모습으로 살아갑니다.',
          detailedDescription: '당신은 꾸밈없는 진정성을 중시하는 자연스러운 성격입니다. 과도한 편집이나 연출보다는 있는 그대로의 모습을 공유하며, 솔직한 감정과 생각을 표현하는 것을 두려워하지 않습니다. SNS를 통해 진정한 자신을 보여주며, 타인과 진실한 관계를 맺으려고 노력합니다.',
          traits: ['진정성', '솔직함', '자연스러움', '담백함', '진실함'],
          strengths: ['진정한 관계 형성', '신뢰성', '편안한 분위기', '솔직한 소통', '진실된 매력'],
          weaknesses: ['미적 완성도 부족', '전문성 부족', '임팩트 부족', '브랜딩 어려움', '주목도 낮음'],
          goodMatches: ['SNS 인플루언서', 'SNS 미니멀리스트'],
          badMatches: ['SNS 아티스트', 'SNS 멀티플레이어'],
          goodMatchReasons: ['SNS 인플루언서: 서로의 진정성을 인정하며 진실한 관계를 만들 수 있습니다', 'SNS 미니멀리스트: 편안하고 부담 없는 소통을 즐길 수 있습니다'],
          badMatchReasons: ['SNS 아티스트: 과도한 연출과 꾸밈을 이해하기 어려울 수 있습니다', 'SNS 멀티플레이어: 진정성을 중시하는 성향과 충돌할 수 있습니다'],
          recommendations: ['가끔은 예쁘게 편집해보기', '시각적 요소도 고려하기', '브랜딩 의식 갖기', '전문성 개발하기', '다양한 표현 방식 시도하기']
        };
      } else {
        return {
          title: 'SNS 멀티플레이어 📲',
          description: '상황에 맞게 SNS를 활용하는 당신! 균형 잡힌 성격으로 온라인과 오프라인을 잘 조화시킵니다.',
          detailedDescription: '당신은 SNS를 도구로 현명하게 활용하는 균형 잡힌 성격입니다. 때로는 사교적으로, 때로는 신중하게, 상황에 맞춰 유연하게 SNS를 사용합니다. 온라인과 오프라인 생활의 균형을 잘 맞추며, 극단적이지 않은 건전한 SNS 사용 패턴을 보입니다.',
          traits: ['균형감', '유연성', '실용적', '적응력', '현실적'],
          strengths: ['균형 잡힌 사용', '상황 판단력', '적응력', '건전한 관계', '스트레스 적음'],
          weaknesses: ['개성 부족', '깊이 부족', '일관성 부족', '임팩트 부족', '뚜렷한 특색 없음'],
          goodMatches: ['SNS 미니멀리스트', 'SNS 아티스트'],
          badMatches: ['SNS 인플루언서', 'SNS 내추럴리스트'],
          goodMatchReasons: ['SNS 미니멀리스트: 건전한 SNS 사용으로 서로를 이해하고 존중할 수 있습니다', 'SNS 아티스트: 균형잡힌 관점으로 조화로운 관계를 만들 수 있습니다'],
          badMatchReasons: ['SNS 인플루언서: 과도하거나 부족한 SNS 사용으로 이해하기 어려울 수 있습니다', 'SNS 내추럴리스트: 뚜렷하지 않은 스타일로 인해 어울리기 어려울 수 있습니다'],
          recommendations: ['자신만의 SNS 스타일 찾기', '일관된 컨셉 개발하기', '개성 있는 콘텐츠 만들기', '전문 분야 만들기', '뚜렷한 목적 설정하기']
        };
      }
    }
  },
  {
    id: 'movie-taste',
    title: '영화 취향으로 보는 성격',
    description: '당신의 영화 취향으로 성격을 분석해보세요',
    category: '영화',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '영화를 고를 때 가장 중요한 것은?',
        options: [
          { text: '평점과 리뷰가 좋은 작품', value: 'critic' },
          { text: '흥미로운 스토리와 재미', value: 'entertainment' }
        ]
      },
      {
        question: '선호하는 영화 장르는?',
        options: [
          { text: '액션, 스릴러 같은 긴장감 넘치는', value: 'action' },
          { text: '로맨스, 드라마 같은 감성적인', value: 'emotional' }
        ]
      },
      {
        question: '영화 관람 스타일은?',
        options: [
          { text: '영화관에서 큰 화면으로', value: 'theater' },
          { text: '집에서 편안하게', value: 'home' }
        ]
      },
      {
        question: '영화 중 먹을거리는?',
        options: [
          { text: '팝콘과 콜라는 필수!', value: 'snacker' },
          { text: '영화에만 집중하고 싶다', value: 'focused' }
        ]
      },
      {
        question: '외국 영화에 대해서는?',
        options: [
          { text: '자막 보면서도 즐겁게 본다', value: 'global' },
          { text: '한국 영화가 편하고 좋다', value: 'local' }
        ]
      },
      {
        question: '예측 가능한 스토리에 대해서는?',
        options: [
          { text: '뻔해도 재미있으면 괜찮다', value: 'classic' },
          { text: '반전과 새로운 것을 원한다', value: 'twist' }
        ]
      },
      {
        question: '영화 길이에 대해서는?',
        options: [
          { text: '3시간짜리라도 재미있으면 OK', value: 'patient' },
          { text: '2시간 정도가 적당하다', value: 'moderate' }
        ]
      },
      {
        question: '영화 보고 난 후에는?',
        options: [
          { text: '친구들과 내용을 토론한다', value: 'discusser' },
          { text: '혼자 여운을 즐긴다', value: 'contemplator' }
        ]
      },
      {
        question: '영화 선택의 기준은?',
        options: [
          { text: '유명한 배우가 나오는 작품', value: 'star' },
          { text: '감독이나 스토리가 좋은 작품', value: 'story' }
        ]
      },
      {
        question: '마블, DC 같은 시리즈물은?',
        options: [
          { text: '시리즈를 다 챙겨본다', value: 'series' },
          { text: '각각 독립적으로 본다', value: 'independent' }
        ]
      }
    ],
    resultMapping: (answers) => {
      // 실제 답변 옵션에 맞게 정확한 매핑
      const actionAnswers = answers.filter(a => ['action', 'theater', 'twist', 'patient', 'series', 'snacker'].includes(a as string)).length;
      const emotionalAnswers = answers.filter(a => ['emotional', 'home', 'contemplator', 'focused'].includes(a as string)).length;
      const socialAnswers = answers.filter(a => ['snacker', 'discusser', 'star'].includes(a as string)).length;
      const intellectualAnswers = answers.filter(a => ['critic', 'global', 'story'].includes(a as string)).length;
      // const classicAnswers = answers.filter(a => ['classic', 'moderate'].includes(a as string)).length;

      // 액션 성향 (3개 이상)
      if (actionAnswers >= 3) {
        return {
          title: '액션 어드벤처러 🎬',
          description: '자극적이고 역동적인 것을 좋아하는 당신! 모험심이 강하고 적극적인 성격으로 새로운 도전을 즐깁니다.',
          detailedDescription: '당신은 스릴 넘치고 역동적인 영화를 선호하는 모험가적 성격입니다. 액션, SF, 어드벤처 장르를 좋아하며, 예측 불가능한 반전과 박진감 넘치는 스토리에 빠져듭니다. 영화관의 큰 스크린과 사운드로 영화를 즐기는 것을 선호하며, 긴 러닝타임도 재미있다면 전혀 문제없습니다.',
          traits: ['모험심', '적극성', '자극 추구', '인내심', '역동적'],
          strengths: ['새로운 경험 추구', '집중력', '스릴 감수', '도전 정신', '몰입력'],
          weaknesses: ['자극 의존성', '조용한 것 부족', '감정적 깊이 부족', '예술성 놓침', '단순 선호'],
          goodMatches: ['소셜 무비 고어', '올라운드 무비 러버'],
          badMatches: ['감성 시네마 러버', '영화 평론가'],
          goodMatchReasons: ['소셜 무비 고어: 함께 스릴 넘치는 영화를 즐기며 흥미진진한 시간을 보낼 수 있습니다', '올라운드 무비 러버: 역동적인 콘텐츠에 대한 공통된 관심으로 즐거운 영화 관람이 가능합니다'],
          badMatchReasons: ['감성 시네마 러버: 자극적인 영화로 인해 부담을 느낄 수 있습니다', '영화 평론가: 액션이나 스릴러 장르를 이해하기 어려울 수 있습니다'],
          recommendations: ['다양한 장르도 시도하기', '감정적 영화도 관람하기', '예술 영화 경험하기', '조용한 영화도 감상하기', '깊이 있는 작품 탐구하기']
        };
      } else if (intellectualAnswers >= 2) {
        return {
          title: '영화 평론가 🎭',
          description: '깊이 있는 작품을 추구하는 당신! 분석적이고 지적인 성격으로 예술과 문화에 조예가 깊습니다.',
          detailedDescription: '당신은 영화를 단순한 오락이 아닌 예술로 바라보는 지적인 영화 애호가입니다. 감독의 연출력, 스토리의 깊이, 영화의 메시지를 중시하며, 세계 각국의 다양한 영화를 탐구합니다. 영화 감상 후 그 작품에 대해 깊이 분석하고 토론하는 것을 즐깁니다.',
          traits: ['분석적', '지적', '비판적 사고', '예술 감각', '탐구 정신'],
          strengths: ['깊이 있는 이해', '비판적 분석', '문화적 지식', '예술 감상', '통찰력'],
          weaknesses: ['과도한 분석', '대중성 부족', '어려운 기준', '즐거움 감소', '편견 위험'],
          goodMatches: ['감성 시네마 러버', '올라운드 무비 러버'],
          badMatches: ['액션 어드벤처러', '소셜 무비 고어'],
          goodMatchReasons: ['감성 시네마 러버: 영화에 대한 깊이 있는 토론과 분석을 함께 즐길 수 있습니다', '올라운드 무비 러버: 예술적 가치를 중시하는 공통점으로 의미 있는 영화 감상이 가능합니다'],
          badMatchReasons: ['액션 어드벤처러: 깊이 있는 분석이나 예술성을 부담스러워할 수 있습니다', '소셜 무비 고어: 단순한 오락만 추구하는 성향과 충돌할 수 있습니다'],
          recommendations: ['가끔은 가벼운 영화도 즐기기', '대중적 영화도 인정하기', '과도한 분석 줄이기', '순수한 재미도 추구하기', '열린 마음으로 감상하기']
        };
      } else if (emotionalAnswers >= 2) {
        return {
          title: '감성 시네마 러버 💕',
          description: '감정이입을 잘하는 당신! 공감 능력이 뛰어나고 감수성이 풍부한 성격으로 깊은 인간관계를 만듭니다.',
          detailedDescription: '당신은 영화 속 인물들의 감정에 깊이 몰입하는 감성적인 영화 애호가입니다. 로맨스, 드라마, 휴먼 다큐멘터리 등 감정을 자극하는 영화를 선호하며, 집에서 편안하게 영화를 보는 것을 좋아합니다. 영화 감상 후에는 혼자만의 시간을 가지며 여운을 즐깁니다.',
          traits: ['감성적', '공감 능력', '감수성', '내성적', '성찰적'],
          strengths: ['깊은 감정 이해', '인간 관계 통찰', '감정 표현', '공감 능력', '치유적 감상'],
          weaknesses: ['감정 기복', '지나친 몰입', '현실 도피', '우울감', '과민성'],
          goodMatches: ['영화 평론가', '올라운드 무비 러버'],
          badMatches: ['액션 어드벤처러', '소셜 무비 고어'],
          goodMatchReasons: ['영화 평론가: 함께 감정적 영화를 보며 깊은 감정을 공유할 수 있습니다', '올라운드 무비 러버: 영화 속 인물들의 감정에 함께 이입하며 감동을 나눌 수 있습니다'],
          badMatchReasons: ['액션 어드벤처러: 감정적 반응을 이해하지 못해 소통이 어려울 수 있습니다', '소셜 무비 고어: 감정적 몰입을 부담스러워할 수 있습니다'],
          recommendations: ['다양한 장르도 시도하기', '감정 조절하기', '현실과 영화 구분하기', '밝은 영화도 감상하기', '사회적 영화 관람도 시도하기']
        };
      } else if (socialAnswers >= 2) {
        return {
          title: '소셜 무비 고어 🍿',
          description: '영화도 함께가 즐거운 당신! 사교적이고 즐거운 것을 좋아하는 성격으로 사람들과의 시간을 소중히 여깁니다.',
          detailedDescription: '당신은 영화를 사회적 활동으로 즐기는 사교적인 성격입니다. 팝콘을 먹으며 친구들과 함께 영화를 보는 것을 좋아하고, 유명 배우가 출연하는 화제작들에 관심이 많습니다. 영화 감상 후에는 친구들과 함께 영화에 대해 이야기하며 즐거운 시간을 보냅니다.',
          traits: ['사교적', '외향적', '활발함', '트렌드 민감', '즐거움 추구'],
          strengths: ['사회적 관계', '즐거운 분위기', '트렌드 파악', '소통 능력', '에너지 전달'],
          weaknesses: ['깊이 부족', '유행 의존', '개인 취향 부족', '집중력 부족', '소음 문제'],
          goodMatches: ['액션 어드벤처러', '올라운드 무비 러버'],
          badMatches: ['감성 시네마 러버', '영화 평론가'],
          goodMatchReasons: ['액션 어드벤처러: 함께 영화를 보며 즐거운 시간을 보내고 영화에 대해 이야기할 수 있습니다', '올라운드 무비 러버: 영화를 매개로 한 사회적 활동을 함께 즐길 수 있습니다'],
          badMatchReasons: ['감성 시네마 러버: 조용한 영화 감상을 원하는 성향과 맞지 않을 수 있습니다', '영화 평론가: 깊이 있는 감상보다 즐거움을 추구하는 성향이 이해되지 않을 수 있습니다'],
          recommendations: ['혼자 영화도 감상해보기', '깊이 있는 작품 시도하기', '개인 취향 개발하기', '집중해서 감상하기', '다양한 장르 탐구하기']
        };
      } else {
        return {
          title: '올라운드 무비 러버 🎪',
          description: '다양한 영화를 즐기는 당신! 폭넓은 취향과 유연한 성격으로 어떤 상황에서도 즐거움을 찾아냅니다.',
          detailedDescription: '당신은 장르에 구애받지 않고 다양한 영화를 즐기는 균형 잡힌 영화 애호가입니다. 액션부터 드라마, 코미디부터 호러까지 모든 장르를 폭넓게 수용하며, 상황과 기분에 따라 적절한 영화를 선택할 줄 압니다. 영화를 통해 다양한 경험과 감정을 체험하는 것을 즐깁니다.',
          traits: ['포용적', '유연성', '적응력', '개방적', '균형감'],
          strengths: ['폭넓은 취향', '상황 적응', '다양한 경험', '편견 없음', '조화로운 관계'],
          weaknesses: ['뚜렷한 개성 부족', '깊이 부족', '일관성 부족', '우유부단함', '전문성 부족'],
          goodMatches: ['모든 영화 스타일과 조화 가능'],
          badMatches: ['극단적인 영화 취향의 사람'],
          goodMatchReasons: ['모든 영화 스타일과 조화 가능: 어떤 장르든 함께 즐길 수 있어 좋은 영화 동반자가 됩니다'],
          badMatchReasons: ['극단적인 영화 취향의 사람: 한 장르만 고집하는 성향과는 조율이 어려울 수 있습니다'],
          recommendations: ['자신만의 선호 장르 찾기', '깊이 있는 감상 시도하기', '일관된 취향 개발하기', '전문 분야 만들기', '개성 있는 관점 기르기']
        };
      }
    }
  },
  {
    id: 'time-management',
    title: '시간 관리 스타일',
    description: '당신의 시간 관리 방식을 알아보세요',
    category: '라이프스타일',
    duration: '1분',
    questionCount: 10,
    questions: [
      {
        question: '아침에 일어나서 가장 먼저 하는 일은?',
        options: [
          { text: '오늘 할 일을 정리한다', value: 'planner' },
          { text: '그냥 자연스럽게 시작한다', value: 'spontaneous' }
        ]
      },
      {
        question: '약속 시간에 대해서는?',
        options: [
          { text: '5분 전에는 무조건 도착', value: 'early' },
          { text: '딱 시간에 맞춰서 도착', value: 'punctual' }
        ]
      },
      {
        question: '할 일이 많을 때?',
        options: [
          { text: '우선순위를 정해서 차례대로', value: 'systematic' },
          { text: '급한 것부터 닥치는 대로', value: 'reactive' }
        ]
      },
      {
        question: '휴식 시간에는?',
        options: [
          { text: '미리 계획한 활동을 한다', value: 'structured' },
          { text: '그때 기분에 따라 결정한다', value: 'flexible' }
        ]
      },
      {
        question: '데드라인이 다가올 때?',
        options: [
          { text: '미리미리 준비해서 여유롭게', value: 'proactive' },
          { text: '막판 스퍼트로 집중해서', value: 'last_minute' }
        ]
      },
      {
        question: '일정 관리는?',
        options: [
          { text: '달력이나 플래너에 꼼꼼히', value: 'organized' },
          { text: '머릿속으로 대충 기억', value: 'mental' }
        ]
      },
      {
        question: '멀티태스킹에 대해서는?',
        options: [
          { text: '여러 일을 동시에 하는 게 효율적', value: 'multi' },
          { text: '한 번에 하나씩 집중하는 게 좋다', value: 'focused' }
        ]
      },
      {
        question: '하루 일과를 마치고?',
        options: [
          { text: '내일 할 일을 미리 준비한다', value: 'prepared' },
          { text: '내일은 내일의 태양이 뜬다', value: 'present' }
        ]
      },
      {
        question: '시간이 남을 때?',
        options: [
          { text: '생산적인 일을 찾아서 한다', value: 'productive' },
          { text: '여유롭게 쉬거나 놀기', value: 'leisure' }
        ]
      },
      {
        question: '완벽주의에 대해서는?',
        options: [
          { text: '시간이 걸려도 완벽하게', value: 'perfectionist' },
          { text: '적당한 선에서 마무리', value: 'pragmatic' }
        ]
      }
    ],
    resultMapping: (answers) => {
      // 실제 답변 옵션에 맞게 정확한 매핑
      const plannerAnswers = answers.filter(a => ['planner', 'early', 'systematic', 'structured', 'proactive', 'organized', 'prepared', 'productive'].includes(a as string)).length;
      const flexibleAnswers = answers.filter(a => ['spontaneous', 'reactive', 'flexible', 'last_minute', 'mental', 'present', 'leisure'].includes(a as string)).length;
      const perfectionistAnswers = answers.filter(a => ['perfectionist', 'focused'].includes(a as string)).length;
      const pragmaticAnswers = answers.filter(a => ['pragmatic', 'multi', 'punctual'].includes(a as string)).length;

      // 계획형 (5개 이상)
      if (plannerAnswers >= 5) {
        return {
          title: '시간 관리 마스터 ⏰',
          description: '계획성 갑! 체계적이고 효율적인 당신은 시간을 정복한 진정한 마스터입니다.',
          detailedDescription: '당신은 시간을 체계적으로 관리하는 뛰어난 능력을 가진 계획의 달인입니다. 매일 아침 계획을 세우고, 우선순위를 정해 체계적으로 업무를 처리합니다. 미리 준비하는 습관이 몸에 배어 있어 급작스러운 상황에도 당황하지 않고 대처할 수 있습니다. 생산적인 시간 활용을 통해 높은 성과를 달성합니다.',
          traits: ['계획성', '체계성', '효율성', '선제적', '생산적'],
          strengths: ['높은 성과 달성', '스트레스 적음', '신뢰성', '목표 달성', '시간 절약'],
          weaknesses: ['유연성 부족', '과도한 계획', '완벽주의 압박', '즉흥성 부족', '스케줄 의존'],
          goodMatches: ['실용주의 타이머', '밸런스 타이머'],
          badMatches: ['자유로운 영혼', '완벽주의 타이머'],
          goodMatchReasons: ['실용주의 타이머: 서로의 체계적인 스타일을 이해하며 효율적인 협업이 가능합니다', '밸런스 타이머: 신뢰할 수 있는 관계에서 안정적인 일정 관리를 함께 할 수 있습니다'],
          badMatchReasons: ['자유로운 영혼: 계획에 없던 변화로 인해 스트레스를 받을 수 있습니다', '완벽주의 타이머: 체계적인 접근을 부담스러워할 수 있습니다'],
          recommendations: ['여유 시간도 계획에 포함하기', '즉흥적 상황 수용하기', '완벽주의 줄이기', '유연성 기르기', '휴식 시간도 소중히 여기기']
        };
      } else if (flexibleAnswers >= 4) {
        return {
          title: '자유로운 영혼 🌊',
          description: '흘러가는 대로 사는 당신! 유연하고 적응력이 뛰어난 성격으로 삶의 여유를 즐깁니다.',
          detailedDescription: '당신은 고정된 스케줄보다는 그 순간의 기분과 상황에 따라 유연하게 행동하는 자유로운 영혼입니다. 예상치 못한 변화나 새로운 기회가 생겼을 때 빠르게 적응하며, 현재 순간을 소중히 여깁니다. 스트레스를 받지 않고 자연스럽게 흘러가는 삶을 추구합니다.',
          traits: ['유연성', '적응력', '자유로움', '현재 지향', '여유로움'],
          strengths: ['변화 적응력', '스트레스 적음', '창의성', '즉흥성', '삶의 여유'],
          weaknesses: ['계획성 부족', '마감 지연', '비효율성', '목표 달성 어려움', '신뢰성 문제'],
          goodMatches: ['완벽주의 타이머', '밸런스 타이머'],
          badMatches: ['시간 관리 마스터', '실용주의 타이머'],
          goodMatchReasons: ['완벽주의 타이머: 함께 자연스러운 리듬으로 편안한 시간을 보낼 수 있습니다', '밸런스 타이머: 변화와 즉흥성을 이해하며 자유로운 관계를 만들 수 있습니다'],
          badMatchReasons: ['시간 관리 마스터: 예측 불가능한 행동으로 인해 답답함을 느낄 수 있습니다', '실용주의 타이머: 자유로운 스타일을 이해하지 못해 갈등이 생길 수 있습니다'],
          recommendations: ['기본적인 계획은 세우기', '중요한 마감일은 지키기', '시간 의식 기르기', '목표 설정하기', '최소한의 체계 만들기']
        };
      } else if (perfectionistAnswers >= 1) {
        return {
          title: '완벽주의 타이머 🎯',
          description: '하나하나 완벽하게! 집중력이 뛰어나고 높은 퀄리티를 추구하는 신중한 성격입니다.',
          detailedDescription: '당신은 시간이 걸리더라도 완벽한 결과를 추구하는 신중한 성격입니다. 한 번에 하나의 일에 깊이 집중하며, 높은 품질의 성과물을 만들어냅니다. 세부사항까지 꼼꼼히 챙기고, 실수를 최소화하기 위해 충분한 시간을 투자합니다. 전문성과 완성도를 중시합니다.',
          traits: ['완벽주의', '집중력', '신중함', '전문성', '품질 지향'],
          strengths: ['높은 품질', '전문성', '신뢰성', '실수 방지', '깊이 있는 작업'],
          weaknesses: ['시간 소모', '스트레스 과다', '효율성 저하', '유연성 부족', '완벽주의 압박'],
          goodMatches: ['자유로운 영혼', '밸런스 타이머'],
          badMatches: ['시간 관리 마스터', '실용주의 타이머'],
          goodMatchReasons: ['자유로운 영혼: 서로의 높은 기준을 이해하며 퀄리티 있는 결과를 함께 만들 수 있습니다', '밸런스 타이머: 깊이 있는 작업에 함께 몰입하며 전문성을 발휘할 수 있습니다'],
          badMatchReasons: ['시간 관리 마스터: 성의 없는 태도로 인해 스트레스를 받을 수 있습니다', '실용주의 타이머: 신중한 작업 속도를 이해하지 못해 충돌할 수 있습니다'],
          recommendations: ['80% 완성도로 제출하기', '시간 제한 두기', '우선순위 정하기', '완벽함보다 완성 추구하기', '스트레스 관리하기']
        };
      } else if (pragmaticAnswers >= 2) {
        return {
          title: '실용주의 타이머 ⚡',
          description: '효율성을 추구하는 당신! 실용적이고 현실적인 성격으로 최적의 결과를 만들어냅니다.',
          detailedDescription: '당신은 효율성과 실용성을 최우선으로 하는 현실적인 시간 관리자입니다. 멀티태스킹을 잘하며, 적당한 선에서 만족할 줄 알고, 가성비를 중시합니다. 시간 대비 최대의 효과를 내는 것을 목표로 하며, 복잡한 계획보다는 간단하고 실행 가능한 방법을 선호합니다.',
          traits: ['실용성', '효율성', '현실적', '멀티태스킹', '적당함'],
          strengths: ['높은 효율성', '빠른 처리', '현실적 판단', '유연한 대처', '비용 효과적'],
          weaknesses: ['깊이 부족', '완성도 부족', '집중력 분산', '전문성 부족', '급한 처리'],
          goodMatches: ['시간 관리 마스터', '밸런스 타이머'],
          badMatches: ['자유로운 영혼', '완벽주의 타이머'],
          goodMatchReasons: ['시간 관리 마스터: 비슷한 가치관으로 빠르고 효율적인 협업이 가능합니다', '밸런스 타이머: 실용적인 접근을 함께 추구하며 현실적인 목표를 달성할 수 있습니다'],
          badMatchReasons: ['자유로운 영혼: 완벽을 추구하는 성향과 충돌할 수 있습니다', '완벽주의 타이머: 느린 처리 속도로 인해 답답함을 느낄 수 있습니다'],
          recommendations: ['가끔은 깊이 있게 작업하기', '완성도도 고려하기', '전문성 개발하기', '집중력 기르기', '질적 향상도 추구하기']
        };
      } else {
        return {
          title: '밸런스 타이머 ⚖️',
          description: '상황에 맞는 시간 관리를 하는 당신! 유연하면서도 효율적인 균형잡힌 성격입니다.',
          detailedDescription: '당신은 상황과 필요에 따라 시간 관리 방식을 유연하게 조절하는 균형 잡힌 성격입니다. 때로는 체계적으로 계획을 세우기도 하고, 때로는 즉흥적으로 행동하기도 합니다. 완벽함과 효율성, 계획과 자유로움 사이에서 적절한 균형점을 찾아 안정적인 시간 관리를 실천합니다.',
          traits: ['균형감', '유연성', '적응력', '상황 판단', '안정성'],
          strengths: ['상황별 적절한 대응', '스트레스 관리', '안정적 성과', '조화로운 관계', '지속 가능성'],
          weaknesses: ['개성 부족', '일관성 부족', '뚜렷한 방향성 부족', '우유부단함', '전문성 부족'],
          goodMatches: ['모든 시간 관리 스타일과 조화 가능'],
          badMatches: ['극단적인 시간 관리 성향의 사람'],
          goodMatchReasons: ['모든 시간 관리 스타일과 조화 가능: 서로의 유연한 접근을 이해하며 조화로운 시간 관리를 함께 할 수 있습니다'],
          badMatchReasons: ['극단적인 시간 관리 성향의 사람: 너무 강한 성향으로 인해 균형이 깨질 수 있습니다'],
          recommendations: ['자신만의 시간 관리 철학 정립하기', '일관된 방법 찾기', '전문 분야 개발하기', '명확한 목표 설정하기', '개성 있는 스타일 만들기']
        };
      }
    }
  }
];

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
}; 