# chapter11-tools

11장 lint, prettier 적용

lint, prettier를 적용하여 프로젝트 파일의 포맷을 일관성있게 통일하는 방법을 알아보는 단계입니다.

> 편의를 위해 모든 예제에서 개발 IDE는 VS Code를 사용한다고 가정합니다.

## 실행 방법

아래 명령어는 `/chapter11-tools/lint` 경로에서 실행해야 합니다.

### 의존성 설치

```sh
npm ci
// or
npm install
```

### 개발 서버 실행

```sh
npm run serve
```

### 빌드

1. 개발 모드 빌드

```sh
npm run build:dev
```

2. 프로덕션 모드 빌드

```sh
npm run build:prod
```

### 예제 트랜스파일

```sh
npm run transpile
```

### 예제 sass 트랜스파일

```sh
npm run transpile:sass
```

### prettier 실행

```sh
npm run prettify
```