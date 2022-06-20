### 💫 GraphQL_Movie_API_and_Webapp

<br/>

---

<br/>

### ✔️ 리액트 어플리케이션의 상태 관리하기

## 1. **state란 무엇인가?**

<br/>

- 상태 관리를 하는 방법에 대해서 이야기하기 전에, 우선 상태가 무엇인지 알아보겠습니다. React [doc](https://reactjs.org/docs/faq-state.html)은 state를 다음과 같이 정의합니다.

> state란 렌더링에 영향을 미치는 자바스크립트 오브젝트이다.

- 이 정의에 따라서 global state를 정의한다면 이렇게 해볼 수 있겠습니다.

> global state란 어플리케이션 어디서든 접근할 수 있고, 그 변화에 따라 어플리케이션 전반의 렌더링에 영향을 미치는 자바스크립트 오브젝트이다.

<br/>

## 2. **state의 유형**

- 데이터에 대한 제어, 소유 여부에 따라서 **server state**와 **client state**로 구분할 수 있습니다.

- 컴포넌트는 local state를 갖고, 앱은 global state를 갖기 떄문이다. 문제는 많은 컴포넌트로 만들어진 앱은 local state를 관리하기 어렵다.

(1) **server state**

- **서버로 부터 불러오는 데이터**를 말합니다. 클라이언트가 제어, 소유할 수 없기 때문에 서버로 부터 특정 시점의 데이터를 가져와 저장하여 사용합니다. 때문에 **비동기적인** 상태를 갖습니다.

(2) **client state**

- 언어, ui 테마, 폼 입력, 사이드바 상태 등과 같이 **클라이언트가 제어, 소유하는 데이터**를 말합니다. 때문에 **동기적인** 상태를 갖습니다. client state는 다시 두 가지로 구분할 수 있습니다.

(2-1) **local client state**

- 폼 입력, 사이드바 상태 등과 같이 **하나 또는 인접한 컴포넌트들에서 이용되는 state**입니다.
  - React에서의 local state는 props와 state로 나뉜다.
  - props는 상속받은 상태에 대한 관리이고, state는 component가 생성한 상태에 대한 관리이다.

(2-2) **global client state**

- 언어, ui 테마 등과 같이 **어플리케이션의 여러 곳에서 사용되는 state**입니다.
  - component에서 다른 component로 state를 전달해주기 위해서는 반복적인 props 사용을 통해 내려줘야하는 props drilling 현상이 발생한다.
  - 따라서 전체적인 component에서 사용해야할 state가 있다면 별도의 global state로 관리하여 사용하도록 하는 것이 편리할 것이다.

<br/>

## 3. **state 관리 방법**

- **server state**를 **전역 스토어에서 관리하는 것은 합리적**으로 보입니다. 다음과 같은 이유를 생각해 볼 수 있습니다.

  (1) state를 필요로하는 모든 컴포넌트에서 api 호출을 하는 것은 비용 낭비이며, ux 측면에서도 좋지 못하다.

  (2) 여러 컴포넌트에서 state를 공유해야 한다면 prop drilling 등 을 이용해 해결하기는 무리가 있다.

<br/>

- **전역 스토어에서 관리하면 불필요한 api 호출을 하지 않을 수 있고 접근도 훨씬 편리**해 집니다. 여러모로 효율성이 향상됩니다. 전역 스토어에 저장된 server state를 마치 backend 상태의 cache 처럼 다루는 것입니다.

<br/>

- 하지만 여기에도 몇 가지 문제점이 있습니다. 가장 큰 문제는 server state가 특정 시점의 backend(서버)의 상태일 뿐이라는 점입니다. server state와 상관없이 backend 상태는 얼마든지 변할 수 있습니다.

<br/>

- 때문에 server state를 적절히 다루기 위해서는 다음과 같은 일들이 필요합니다.

  > (1) [캐싱](https://opentutorials.org/course/697/3839)<br/>
  > (2) 동일 데이터에 대한 중복 요청 제거<br/>
  > (3) 오래된 데이터 업데이트<br/>
  > (4) 데이터 변경 요청 이후 업데이트<br/>
  > (5) 등등<br/>

- 따라서, server state에 대한 패칭, 캐싱, 업데이트를 도와주는 react-query, swr과 같은 라이브러리를 사용할 수 있습니다.

<br/>

- **local client state**
  - local state를 전역 스토어에서 관리하려면 boilerplate code가 필요합니다. 어플리케이션 이곳 저곳에서 사용되는 데이터도 아닌데, 이를 전역으로 관리하기 위한 번거로운 작업만 추가되는 셈입니다. 이 경우에는 React 내장 Hook인 **useState**와 **useReducer**를 쓰는 것으로 충분합니다.
  - 또한 인접한 다른 컴포넌트에서 local state 접근이 필요하다면 prop drilling, lifting state up, composition을 이용해 간단히 해결할 수 있습니다.

<br/>

- **global client state**
  - global client state는 **Context**나 **Redux** 이용해서 처리하면 됩니다

<br/>

## 4. [**state 기간**](https://kimch3617.tistory.com/entry/React-Local-State-vs-Redux-StateStore-%EC%96%B8%EC%A0%9C-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98)

- Short-term: 빠르게 변화하는 데이터

  - UI의 텍스트 필드의 문자, 또는 리스트의 아이템을 필터링 하는 것과 같이 빠르게 변화 일어나고 프로젝트의 전반적으로 변화를 주지않는 데이터는 지역 상태(Local State)를 사용하는 것이 유리하다.

  <br/>

- Medium-term: 앱 실행동안 유지되는 데이터

  - API를 통해서 로드된 데이터 나 새로고침 이전까지 유지되어야 하는 데이터로 프로젝트의 전반적으로 영향을 주는 데이터는 Redux Store(State)를 사용하는 것이 유리하다.예를 들면, 전역으로 사용되는 유저 정보나 submit 양식 제출하여 사용자 프로필 정보 업데이트를 해야하는 경우

  <br/>

- Long-term: 여러 페이지간의 방문, 새로고침 동안 유지되어야 하는 데이터

  - 이 경우에는 서버의 데이터 베이스 또는 브라우저의 로컬 스토리지(local storage)에 저장하여 사용한다.

---

<br/>

### ✔️ [Apollo Client를 통한 전역 상태 관리](https://chanyeong.com/blog/post/45)

<br/>

- 리액트에는 ContextAPI, Redux, MobX 등 전역으로 상태관리를 하기 위한 많은 선택지가 있다. Apollo Client도 그 중 하나의 선택지로 로컬에서 전역 상태관리를 하기위해 사용할 수 있다.

- Apollo Client cache를 적극적으로 쓰는 이유?

  - Apollo Client는 GraphQL을 사용해 서버와 통신을 하며 반환 값을 캐시로 보관하는 상태 관리 라이브러리

  - 하지만 일부 서비스는 서버 없이 완전히 독립적으로 작동할 수 있고, Apollo Client는 그런 경우에도 로컬 상태를 관리할 수 있음

  - 다음은 Apollo Client가 쿼리를 통해 서버로 필드를 요청하는 과정

    > 1. 쿼리를 통해 로컬 및 원격 필드 요청
    > 2. 캐쉬는 요청받은 쿼리를 통해 동일한 쿼리가 캐싱되어있는지 확인
    > 3. 캐싱되어있지 않다면 서버로 원격 필드 요청
    > 4. 서버는 요청받은 필드를 확인 후 반환
    > 5. 캐쉬는 반환받은 필드를 캐싱 후 클라이언트에게 반환

    <br/>

  - 다음은 Apollo Client가 캐싱되어있는 쿼리의 필드를 반환받는 과정

    > 1. 동일한 쿼리로 필드 요청
    > 2. 캐쉬는 요청받은 쿼리를 통해 동일한 쿼리가 캐싱되어있는지 확인
    > 3. 캐싱되어 있다면 캐싱된 필드를 서버에 요청하지 않고 바로 반환
