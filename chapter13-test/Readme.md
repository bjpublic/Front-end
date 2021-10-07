# 13장. 프론트엔드 테스트

## 설치

```
npm ci
// or
npm install
```

## 의존성 설치

```sh
npm ci
// or
npm install
```

## jest 단위, 통합 테스트 실행

```sh
npm test
```

## cypress e2e 테스트 실행

```sh
npm run e2e-test
```

## percy visual 테스트 실행

1. https://percy.io/에서 회원 가입 후 로그인을 합니다.
2. 로그인 시 앱 화면에 진입 하게 되는데 이 때 create new project를 클릭해 프로젝트를 생성합니다.
   ![image](https://user-images.githubusercontent.com/37766175/127075168-ed5f6f70-85bc-47a5-84db-af51a346e288.png)

3. 프로젝트가 생성되면 발급되는 토큰을 각 운영체제에 맞게 프로젝트 디렉토리의 환경 변수로 등록합니다. (ex.`.env` 파일)
   ![image](https://user-images.githubusercontent.com/37766175/127075185-f12387b5-ed51-48e0-b0d9-341a386ca8a7.png)

```sh
npm run percy
```

- env 파일 설정은 아래 링크를 참고해주세요.
  - dot-env: https://www.npmjs.com/package/dot-env
  - cross-env: https://www.npmjs.com/package/cross-env

## 커밋별 진행

1. 프로젝트 세팅, 메모 어플리케이션 추가

   - 링크: https://github.com/bjpublic/Front-end/commit/eb8089cb1b131dba6334f55cd8ad95eff8e0a29e

2. jest 단위, 통합, 스냅샷 테스트 추가

   - 링크: https://github.com/bjpublic/Front-end/commit/8992a384cb452fcb17b72cc90f3baf58bca8fbdf

3. cypress e2e 테스트 추가

   - 링크: https://github.com/bjpublic/Front-end/commit/389368f54ed8daf1fd4f0b43cf7deec16d6babc6

4. Storybook 추가

   - 링크: https://github.com/bjpublic/Front-end/commit/3513aec5c77742b435a5163d95c95c037db06ac3
