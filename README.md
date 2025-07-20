# TypelyFun - 성향 분석 플랫폼

심리학을 기반으로 한 재미있는 성향 분석 게임 사이트입니다.

## 🌟 주요 기능

- **다양한 심리 테스트**: 10가지 이상의 다양한 성향 분석 테스트
- **정확한 결과 분석**: 심리학 이론을 기반으로 한 과학적 분석
- **호환성 정보**: 잘 맞는 사람과 맞지 않는 사람 정보 제공
- **결과 공유**: 친구들과 결과를 쉽게 공유할 수 있는 기능
- **반응형 디자인**: PC와 모바일 모두에서 최적화된 경험
- **직관적인 UI**: 깔끔하고 사용하기 쉬운 인터페이스

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   └── Layout.tsx      # 공통 레이아웃
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 홈 페이지
│   ├── QuizDetail.tsx  # 퀴즈 상세 페이지
│   ├── QuizPlay.tsx    # 퀴즈 진행 페이지
│   └── QuizResult.tsx  # 결과 페이지
├── store/              # 상태 관리
│   └── quizStore.ts    # Zustand 스토어
├── data/               # 데이터
│   └── quizzes.ts      # 퀴즈 데이터
├── types/              # TypeScript 타입 정의
│   └── index.ts        # 공통 타입
└── App.tsx             # 메인 앱 컴포넌트
```

## 🎯 라우팅 구조

- `/` - 홈 페이지 (테스트 목록)
- `/quiz/:id` - 테스트 설명 및 시작
- `/quiz/:id/play` - 문제 진행 화면
- `/quiz/:id/result` - 결과 화면 (공유 기능 포함)

## 🎨 디자인 특징

- **모던한 UI**: 깔끔하고 직관적인 디자인
- **부드러운 애니메이션**: 페이지 전환과 인터랙션
- **반응형 레이아웃**: 모든 디바이스에서 최적화
- **접근성**: 키보드 네비게이션과 스크린 리더 지원

## 🚀 시작하기

### 개발 환경 설정

```bash
# 저장소 클론
git clone [repository-url]
cd typelyfun

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📊 테스트 종류

1. **성격 유형 테스트** - 16가지 성격 유형 분석
2. **소통 스타일 테스트** - 의사소통 방식 분석
3. **리더십 스타일 테스트** - 리더십 유형 분석
4. **학습 스타일 테스트** - 학습 방법 선호도
5. **스트레스 대응 테스트** - 스트레스 처리 방식
6. **창의성 테스트** - 창의적 사고 유형
7. **의사결정 스타일 테스트** - 의사결정 방식
8. **팀워크 스타일 테스트** - 팀에서의 역할
9. **감정 표현 테스트** - 감정 표현 방식
10. **목표 설정 테스트** - 목표 달성 스타일

## 🔗 배포

사이트는 Firebase Hosting을 통해 배포됩니다:
- **URL**: https://typelyfun.web.app
- **자동 배포**: GitHub main 브랜치에 푸시하면 자동으로 배포됩니다
- **수동 배포**: `npm run build && firebase deploy`

### 자동 배포 설정

이 프로젝트는 GitHub Actions를 통해 자동 배포가 설정되어 있습니다:

1. **main 브랜치 푸시**: 자동으로 프로덕션에 배포
2. **Pull Request**: 미리보기 배포 생성
3. **배포 상태**: GitHub Actions 탭에서 확인 가능

### 배포 워크플로우

- `.github/workflows/firebase-hosting-merge.yml`: main 브랜치 병합 시 배포
- `.github/workflows/firebase-hosting-pull-request.yml`: PR 시 미리보기 배포

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

- **웹사이트**: https://TypelyFun.web.app
- **이메일**: contact@typelyfun.com

---

**TypelyFun** - 당신의 성향을 발견하세요! 🧠✨ 