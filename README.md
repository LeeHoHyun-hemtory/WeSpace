# DevX : We are Explorers to Best Developer

---

## 프로젝트 소개

엘론머스크가 설립한 민간 우주기업 Space X 웹사이트 클론 프로젝트

<br>

## 개발 인원 및 기간

- 기간: 2020.08.18 - 2020.08.28 (약 2주)
- 개발 인원: 프론트엔드 [황연욱](https://github.com/younuk23), [이호현](https://github.com/LeeHoHyun-hemtory), [송다슬](https://github.com/aleatorik)(PM) 백엔드 [김기욱](https://github.com/keywookkim), [이지연](https://github.com/leejirun)
- 프론트 [Repository](https://github.com/wecode-bootcamp-korea/11-DevX-frontend) 백엔드 [Repository](https://github.com/wecode-bootcamp-korea/11-DevX-backend)

<br>

### 데모 영상

[https://www.youtube.com/watch?v=mBAsMK8By9w&t=8s](https://www.youtube.com/watch?v=mBAsMK8By9w&t=8s)

<br>

## 사용 기술

<br>

### 공통

1. HTTP

2. Git

3. VScode

4. Trello

- 프로젝트 스크럼 툴 ([링크](https://trello.com/b/7GVBeJ4W/wespace))

5. AWS

- AWS EC2 서버 배포
- AWS RDS 구축
- AWS S3 구축 및 이미지 업로더 연결

6. PostMan

- API 테스트 및 결과 내용 공유

<br>

### 프론트엔드

1. React.js

- react-router-dom : 브라우저에서 사용되는 리액트 라우터
- node-sass : Sass(.scss) 파일을 css 파일로 컴파일

2. SCSS

- SASS의 모든 기능을 지원하면서 CSS 구문과 완전히 호환됨

<br>

### 백엔드

1. Python

- BeautifulSoup : 웹 크롤링 및 파싱
- Selenium : 내장 기능을 활용해 다수의 웹 데이터를 효율적으로 크롤링
- List comprehension : 코드실행 효율 향상
- Pandas : 간편한 csv파일 저장 및 열람
- ast : list_eval 기능 사용

2. Django

- Bcrypt, PyJWT : 회원가입 시 기입한 비밀번호 암호화 및 토큰 발행
- UnitTest : 클래스 단위 코드 디버깅
- LoginDecorator : 발행한 토큰을 통한 등록회원 인증/인가
- Endpoint : User, Product, Order

3. MySQL

- DB 구축 및 데이터 업로더 제작

<br>

## 담당 작업 내용

<br>

### Front-End
#### Main Page

- 메인 페이지 레이아웃
- 메인 페이지 사진별로 component로 묶어서 map method 사용해서 렌더링
- scroll event

#### Register Page (회원가입)

- 회원가입 페이지 레이아웃
- Back-end POST api

#### Account Page (로그인)

- 로그인 페이지 레이아웃
- Back-end POST api
- 로그인 성공시 token을 sessionStorage에 저장

#### Cart Page (장바구니)

- 장바구니 페이지 레이아웃
- 장바구니 품목 각각 component로 만들어서 총 가격 계산
- 장바구니 물품 수량 변경시 DB 반영 (미구현)

#### Nav

- 레이아웃, Link component 사용

#### Footer

- 레이아웃


## 시연 화면
YouTube : https://www.youtube.com/watch?v=T-P641rIS1E
