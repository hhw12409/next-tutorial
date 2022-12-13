# next-tutorial

## .env 환경변수 셋팅

- node js환경에서는 process.env.변수명
  (참고)서버사이드props내부는 브라우저 환경이 아님 서버에서 동작하는것임 // (번외) window.등등과 관련된것을 사용하면 error발생한다.

- browser환경에서는 process.env.NEXT_PUBLIC\_변수명

## Pre-rendering (사전 렌더링)

- Nextjs는 기본적으로 모든 페이지 pre-render (meta data또한 포함)
- 사전에 HTML파일들을 만든다는 의미
- 퍼포먼스 향상, SEO
- spa환경에서서 serverSideRendering를 통해서 mpa못지 않게 검색엔진 최적화에 대응하며 퍼포먼스를 향상 시킨다.

## Pre-rendering의 두가지 방식

- 차이점은 _언제_ HTML을 만드냐!! 이다

1. Static Generation: 정적 생성
2. Server-side Rendering: 서버 사이드 렌더링

### Static Generation: 정적 생성

- 빌드시에 HTML을 생성 미리 렌더링된 HTML을 유저들이 요청을 할 때마다 보여준다.

### Server-side Rendering: 서버 사이드 렌더링

- 요청을 하면 그때 HTML을 만든다음 유저에게 보여준다.

---

## nextjs는 페이지별로 정적 생성을 할지 서버 사이드 렌더링을 할 지 정할 수 있다.

### Static Generation: 정적 생성 사용 예시

페이지를 빌드 시점에 만들어두고 cdn을 통해서 재사용하기 때문에 대부분 케이스는 정적 생성이 빠르다.

1. 마케팅 페이지
2. 블로그 게시물
3. 제품 목록
4. 도움말, 문서
   (미리 만들어 두는 경우)

### Server-side Rendering: 서버 사이드 렌더링

1. 항상 최신 상태 유지
2. 관리자 페이지
3. 분석 차트

---

## 그렇다면 dynamic router Static Generation이 불가능할것일까?

어떤 id가 들어올지 모르기 때문에 모든제품의 HTML을 만들어 놓을수는 없다.
그런데 만약!!!! 갯수가 한정적이고 id리스트를 알 수 있다면? 가능하다!! (getStaticPaths)

### getStaticPaths를 이용한다.
