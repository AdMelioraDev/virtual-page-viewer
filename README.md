# VirtualPageViewer

VirtualPage 풀을 시각화하고 디버깅하기 위한 도구입니다.

## 프로젝트 개요

VirtualPageViewer는 4가지 종류의 VirtualPage(Program, Data, Journal, Metadata)를 시각화하는 도구입니다. 각 VirtualPage는 별도의 Pool에서 관리되며, 이를 시각적으로 표현하고 디버깅할 수 있습니다.

## 기술 스택

- Electron
- React
- TypeScript
- PixiJS

## 개발 환경 설정

### 필수 요구사항

- Node.js
- npm

### 설치 방법

```bash
# 의존성 설치
npm install
```

## 빌드 및 실행 방법

### 개발 모드

개발 모드에서는 소스 코드 변경 시 자동으로 다시 빌드되고, 개발자 도구가 활성화됩니다.

```bash
# 개발 모드 실행
npm run dev
```

### 프로덕션 빌드

프로덕션 빌드는 최적화된 코드를 생성하고, 개발자 도구가 비활성화됩니다.

```bash
# 프로덕션 모드로 빌드
npm run build:prod

# 또는 한 번에 빌드 및 패키징
npm run package:prod
```

### 패키징

애플리케이션을 실행 파일로 패키징합니다.

```bash
# 개발 빌드 패키징
npm run package

# 프로덕션 빌드 패키징
npm run package:prod
```

## 오프라인 배포 방법

인터넷이 없는 환경에서 배포하기 위해 다음 단계를 따릅니다:

1. 인터넷이 있는 환경에서 프로젝트 빌드 및 패키징:
   ```bash
   npm run package:prod
   ```

2. release 폴더 생성:
   ```bash
   New-Item -Path "release" -ItemType Directory -Force
   ```

3. 빌드된 실행 파일을 release 폴더로 복사:
   ```bash
   Copy-Item -Path "build\VirtualPageViewer 0.1.0.exe" -Destination "release\" -Force
   ```

4. release 폴더를 대상 환경으로 복사하여 배포

## 프로젝트 구조

```
VirtualPageViewer/
├── src/                    # 소스 코드
│   ├── main/               # Electron 메인 프로세스
│   └── renderer/           # React 렌더러 프로세스
├── dist/                   # 빌드 출력 (웹팩)
├── build/                  # 패키징 출력 (electron-builder)
├── release/                # 배포용 실행 파일
├── package.json            # 프로젝트 설정 및 의존성
├── tsconfig.json           # TypeScript 설정
└── webpack.config.js       # 웹팩 설정
```

## 커밋 메시지 규칙

커밋 메시지는 다음 형식을 따릅니다:
- 타입 접두사로 시작: feat:, fix:, refactor: 등
- 영어로 작성된 주요 메시지
- "-" 접두사가 있는 글머리 기호로 상세 설명
- 모든 커밋 메시지는 영어로 작성

예시:
```
feat: Add VirtualPage visualization

- Implement basic grid layout for buckets
- Add color coding for different page types
- Optimize rendering for large pools
```
