# Edmission Activity Builder

Edmission Unni의 Activity Builder를 재현한 웹사이트입니다.

## 구현된 기능

- 회원 기능 (Access Token 기반)
- Activity 등록 기능
- 입력 정보에 대응하는 실시간 UI 업데이트(Char counter, Impact Score)
- 입력값 검증

## 구현되지 않은 기능

- Drag & Drop을 통한 Activity 순서 변경
- Activity Description AI 요약

## 개발 환경 세팅

개발 환경을 준비하기 위해서는 Node가 필요합니다. 메일에 첨부한 .env 데이터를 각각의 디렉터리에 복사해주세요.

```bash
# 저장소 클론
$ git clone https://github.com/juyeongnoh/edmission-activity-builder
$ cd edmission-activity-builder

# 프론트엔드 환경 설정
$ cd frontend
$ npm i
$ touch .env # 이메일로 전송한 프론트엔드 env 붙여넣기
$ npm run dev
$ cd ..

# 백엔드 환경 설정
$ cd backend
$ npm i
$ touch .env # 이메일로 전송한 백엔드 env 붙여넣기
$ npm run start
```

### 프론트엔드 주요 라이브러리

| 이름         | 버전   | 비고              |
| ------------ | ------ | ----------------- |
| express      | 5.1.0  | 백엔드 프레임워크 |
| sqlite       | 5.1.7  | DB                |
| sequelize    | 6.37.7 | ORM               |
| bcrypt       | 6.0.0  | 패스워드 암호화   |
| jsonwebtoken | 9.0.2  | 회원 토큰 생성    |

### 백엔드 주요 라이브러리

| 이름                  | 버전     | 비고           |
| --------------------- | -------- | -------------- |
| react                 | 19.2.0   | UI 라이브러리  |
| tailwindcss           | 4.1.17   | CSS 프레임워크 |
| motion                | 12.23.24 | 애니메이션     |
| @tanstack/react-query | 5.90.11  | 서버 상태 관리 |

## 백엔드 설계

- [API 문서](https://github.com/juyeongnoh/edmission-activity-builder/blob/main/docs/API.md)

- [ERD 문서](https://github.com/juyeongnoh/edmission-activity-builder/blob/main/docs/ERD.md)

## 앱 스크린샷

### 로그인/회원가입

![Image](https://github.com/user-attachments/assets/3e79aafb-0949-400a-acea-e35281e06cc4)

### Activity 목록

![Image](https://github.com/user-attachments/assets/e636a287-f898-4320-b3b8-f6430b01c9ec)

### Activity Builder

![Image](https://github.com/user-attachments/assets/bf03170a-71ba-44df-9bf9-00eda420f53a)

- Edmission에서 찾은 버그
- 추가 제안 기능
- Answers to Follow-Up Questions
