# 발견한 버그

## 1. 뷰포트 크기가 변경되면 사이드바 애니메이션이 다시 실행되는 증상

![Image](https://github.com/user-attachments/assets/74eeeb90-ec78-4f42-9cc1-a4951b79e367)

### 버그 재현하기

1. 사이드바가 열려있을 때 브라우저 크기 조정 -> 애니메이션 재실행
2. 사이드바가 닫혀있을 때 브라우저 크기 조정 -> 닫혀있던 사이드바가 다시 열림

## 2. 언어를 한국어로 설정 시 UI가 깜빡이는 증상

![Image](https://github.com/user-attachments/assets/f4599bbc-418e-4f7d-8b2f-c82691fc7ea4)

### 버그 재현하기

- 언어를 한국어로 설정 후 브라우저 새로고침

## 3. 대시보드 페이지에서 라우팅과 페이지의 미일치

![Image](https://github.com/user-attachments/assets/45bf032a-e66c-4b2f-9fec-31f4a4d547c1)

### 버그 재현하기

1. 대시보드 페이지 접속
2. Sections의 각 아이템을 클릭 -> 라우팅 URL이 정상적으로 변경됨
3. Sections의 화살표를 클릭 -> 라우팅 URL이 업데이트 되지 않음
4. 주소를 직접 입력하여 이동 -> 해당 페이지로 이동하지 않음

   `/profile/us_colleges_first_year#menu3`로 이동했을 때 Common App 메뉴로 이동해야 하지만 화면 변동 없음

5. Sections 아이템은 총 4개 있으나, 네비게이터에는 6개의 아이템이 있는 것으로 표시
