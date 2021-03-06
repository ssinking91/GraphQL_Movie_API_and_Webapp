### ๐ซ GraphQL_Movie_API_and_Webapp

<br/>

---

<br/>

### โ๏ธ ๋ฆฌ์กํธ ์ดํ๋ฆฌ์ผ์ด์์ ์ํ ๊ด๋ฆฌํ๊ธฐ

## 1. **state๋ ๋ฌด์์ธ๊ฐ?**

<br/>

- ์ํ ๊ด๋ฆฌ๋ฅผ ํ๋ ๋ฐฉ๋ฒ์ ๋ํด์ ์ด์ผ๊ธฐํ๊ธฐ ์ ์, ์ฐ์  ์ํ๊ฐ ๋ฌด์์ธ์ง ์์๋ณด๊ฒ ์ต๋๋ค. Reactย [doc](https://reactjs.org/docs/faq-state.html)์ state๋ฅผ ๋ค์๊ณผ ๊ฐ์ด ์ ์ํฉ๋๋ค.

> state๋ ๋ ๋๋ง์ ์ํฅ์ ๋ฏธ์น๋ ์๋ฐ์คํฌ๋ฆฝํธ ์ค๋ธ์ ํธ์ด๋ค.

- ์ด ์ ์์ ๋ฐ๋ผ์ global state๋ฅผ ์ ์ํ๋ค๋ฉด ์ด๋ ๊ฒ ํด๋ณผ ์ ์๊ฒ ์ต๋๋ค.

> global state๋ ์ดํ๋ฆฌ์ผ์ด์ ์ด๋์๋  ์ ๊ทผํ  ์ ์๊ณ , ๊ทธ ๋ณํ์ ๋ฐ๋ผ ์ดํ๋ฆฌ์ผ์ด์ ์ ๋ฐ์ ๋ ๋๋ง์ ์ํฅ์ ๋ฏธ์น๋ ์๋ฐ์คํฌ๋ฆฝํธ ์ค๋ธ์ ํธ์ด๋ค.

<br/>

## 2. **state์ ์ ํ**

- ๋ฐ์ดํฐ์ ๋ํ ์ ์ด, ์์  ์ฌ๋ถ์ ๋ฐ๋ผ์ **server state**์ **client state**๋ก ๊ตฌ๋ถํ  ์ ์์ต๋๋ค.

- ์ปดํฌ๋ํธ๋ local state๋ฅผ ๊ฐ๊ณ , ์ฑ์ global state๋ฅผ ๊ฐ๊ธฐ ๋๋ฌธ์ด๋ค. ๋ฌธ์ ๋ ๋ง์ ์ปดํฌ๋ํธ๋ก ๋ง๋ค์ด์ง ์ฑ์ local state๋ฅผ ๊ด๋ฆฌํ๊ธฐ ์ด๋ ต๋ค.

(1) **server state**

- **์๋ฒ๋ก ๋ถํฐ ๋ถ๋ฌ์ค๋ ๋ฐ์ดํฐ**๋ฅผ ๋งํฉ๋๋ค. ํด๋ผ์ด์ธํธ๊ฐ ์ ์ด, ์์ ํ  ์ ์๊ธฐ ๋๋ฌธ์ ์๋ฒ๋ก ๋ถํฐ ํน์  ์์ ์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ ์ ์ฅํ์ฌ ์ฌ์ฉํฉ๋๋ค. ๋๋ฌธ์ย **๋น๋๊ธฐ์ ์ธ**ย ์ํ๋ฅผ ๊ฐ์ต๋๋ค.

(2) **client state**

- ์ธ์ด, ui ํ๋ง, ํผ ์๋ ฅ, ์ฌ์ด๋๋ฐ ์ํ ๋ฑ๊ณผ ๊ฐ์ด **ํด๋ผ์ด์ธํธ๊ฐ ์ ์ด, ์์ ํ๋ ๋ฐ์ดํฐ**๋ฅผ ๋งํฉ๋๋ค. ๋๋ฌธ์ย **๋๊ธฐ์ ์ธ**ย ์ํ๋ฅผ ๊ฐ์ต๋๋ค. client state๋ ๋ค์ ๋ ๊ฐ์ง๋ก ๊ตฌ๋ถํ  ์ ์์ต๋๋ค.

(2-1) **local client state**

- ํผ ์๋ ฅ, ์ฌ์ด๋๋ฐ ์ํ ๋ฑ๊ณผ ๊ฐ์ด **ํ๋ ๋๋ ์ธ์ ํ ์ปดํฌ๋ํธ๋ค์์ ์ด์ฉ๋๋ state**์๋๋ค.
  - React์์์ local state๋ props์ state๋ก ๋๋๋ค.
  - props๋ ์์๋ฐ์ ์ํ์ ๋ํ ๊ด๋ฆฌ์ด๊ณ , state๋ component๊ฐ ์์ฑํ ์ํ์ ๋ํ ๊ด๋ฆฌ์ด๋ค.

(2-2) **global client state**

- ์ธ์ด, ui ํ๋ง ๋ฑ๊ณผ ๊ฐ์ด **์ดํ๋ฆฌ์ผ์ด์์ ์ฌ๋ฌ ๊ณณ์์ ์ฌ์ฉ๋๋ state**์๋๋ค.
  - component์์ ๋ค๋ฅธ component๋ก state๋ฅผ ์ ๋ฌํด์ฃผ๊ธฐ ์ํด์๋ ๋ฐ๋ณต์ ์ธ props ์ฌ์ฉ์ ํตํด ๋ด๋ ค์ค์ผํ๋ props drilling ํ์์ด ๋ฐ์ํ๋ค.
  - ๋ฐ๋ผ์ ์ ์ฒด์ ์ธ component์์ ์ฌ์ฉํด์ผํ  state๊ฐ ์๋ค๋ฉด ๋ณ๋์ global state๋ก ๊ด๋ฆฌํ์ฌ ์ฌ์ฉํ๋๋ก ํ๋ ๊ฒ์ด ํธ๋ฆฌํ  ๊ฒ์ด๋ค.

<br/>

## 3. **state ๊ด๋ฆฌ ๋ฐฉ๋ฒ**

- **server state**๋ฅผ **์ ์ญ ์คํ ์ด์์ ๊ด๋ฆฌํ๋ ๊ฒ์ ํฉ๋ฆฌ์ **์ผ๋ก ๋ณด์๋๋ค. ๋ค์๊ณผ ๊ฐ์ ์ด์ ๋ฅผ ์๊ฐํด ๋ณผ ์ ์์ต๋๋ค.

  (1) state๋ฅผ ํ์๋กํ๋ ๋ชจ๋  ์ปดํฌ๋ํธ์์ api ํธ์ถ์ ํ๋ ๊ฒ์ ๋น์ฉ ๋ญ๋น์ด๋ฉฐ, ux ์ธก๋ฉด์์๋ ์ข์ง ๋ชปํ๋ค.

  (2) ์ฌ๋ฌ ์ปดํฌ๋ํธ์์ state๋ฅผ ๊ณต์ ํด์ผ ํ๋ค๋ฉด prop drilling ๋ฑ ์ ์ด์ฉํด ํด๊ฒฐํ๊ธฐ๋ ๋ฌด๋ฆฌ๊ฐ ์๋ค.

<br/>

- **์ ์ญ ์คํ ์ด์์ ๊ด๋ฆฌํ๋ฉด ๋ถํ์ํ api ํธ์ถ์ ํ์ง ์์ ์ ์๊ณ  ์ ๊ทผ๋ ํจ์ฌ ํธ๋ฆฌ**ํด ์ง๋๋ค. ์ฌ๋ฌ๋ชจ๋ก ํจ์จ์ฑ์ด ํฅ์๋ฉ๋๋ค. ์ ์ญ ์คํ ์ด์ ์ ์ฅ๋ server state๋ฅผ ๋ง์น backend ์ํ์ cache ์ฒ๋ผ ๋ค๋ฃจ๋ ๊ฒ์๋๋ค.

<br/>

- ํ์ง๋ง ์ฌ๊ธฐ์๋ ๋ช ๊ฐ์ง ๋ฌธ์ ์ ์ด ์์ต๋๋ค. ๊ฐ์ฅ ํฐ ๋ฌธ์ ๋ server state๊ฐ ํน์  ์์ ์ backend(์๋ฒ)์ ์ํ์ผ ๋ฟ์ด๋ผ๋ ์ ์๋๋ค. server state์ ์๊ด์์ด backend ์ํ๋ ์ผ๋ง๋ ์ง ๋ณํ  ์ ์์ต๋๋ค.

<br/>

- ๋๋ฌธ์ server state๋ฅผ ์ ์ ํ ๋ค๋ฃจ๊ธฐ ์ํด์๋ ๋ค์๊ณผ ๊ฐ์ ์ผ๋ค์ด ํ์ํฉ๋๋ค.

  > (1) [์บ์ฑ](https://opentutorials.org/course/697/3839)<br/>
  > (2) ๋์ผ ๋ฐ์ดํฐ์ ๋ํ ์ค๋ณต ์์ฒญ ์ ๊ฑฐ<br/>
  > (3) ์ค๋๋ ๋ฐ์ดํฐ ์๋ฐ์ดํธ<br/>
  > (4) ๋ฐ์ดํฐ ๋ณ๊ฒฝ ์์ฒญ ์ดํ ์๋ฐ์ดํธ<br/>
  > (5) ๋ฑ๋ฑ<br/>

- ๋ฐ๋ผ์, server state์ ๋ํ ํจ์นญ, ์บ์ฑ, ์๋ฐ์ดํธ๋ฅผ ๋์์ฃผ๋ react-query, swr๊ณผ ๊ฐ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

<br/>

- **local client state**
  - local state๋ฅผ ์ ์ญ ์คํ ์ด์์ ๊ด๋ฆฌํ๋ ค๋ฉด boilerplate code๊ฐ ํ์ํฉ๋๋ค. ์ดํ๋ฆฌ์ผ์ด์ ์ด๊ณณ ์ ๊ณณ์์ ์ฌ์ฉ๋๋ ๋ฐ์ดํฐ๋ ์๋๋ฐ, ์ด๋ฅผ ์ ์ญ์ผ๋ก ๊ด๋ฆฌํ๊ธฐ ์ํ ๋ฒ๊ฑฐ๋ก์ด ์์๋ง ์ถ๊ฐ๋๋ ์์๋๋ค. ์ด ๊ฒฝ์ฐ์๋ React ๋ด์ฅ Hook์ธ **useState**์ **useReducer**๋ฅผ ์ฐ๋ ๊ฒ์ผ๋ก ์ถฉ๋ถํฉ๋๋ค.
  - ๋ํ ์ธ์ ํ ๋ค๋ฅธ ์ปดํฌ๋ํธ์์ local state ์ ๊ทผ์ด ํ์ํ๋ค๋ฉด prop drilling, lifting state up, composition์ ์ด์ฉํด ๊ฐ๋จํ ํด๊ฒฐํ  ์ ์์ต๋๋ค.

<br/>

- **global client state**
  - global client state๋ **Context**๋ **Redux** ์ด์ฉํด์ ์ฒ๋ฆฌํ๋ฉด ๋ฉ๋๋ค

<br/>

## 4. [**state ๊ธฐ๊ฐ**](https://kimch3617.tistory.com/entry/React-Local-State-vs-Redux-StateStore-%EC%96%B8%EC%A0%9C-%EC%99%9C-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98)

- Short-term: ๋น ๋ฅด๊ฒ ๋ณํํ๋ ๋ฐ์ดํฐ

  - UI์ ํ์คํธ ํ๋์ ๋ฌธ์, ๋๋ ๋ฆฌ์คํธ์ ์์ดํ์ ํํฐ๋ง ํ๋ ๊ฒ๊ณผ ๊ฐ์ด ๋น ๋ฅด๊ฒ ๋ณํ ์ผ์ด๋๊ณ  ํ๋ก์ ํธ์ ์ ๋ฐ์ ์ผ๋ก ๋ณํ๋ฅผ ์ฃผ์ง์๋ ๋ฐ์ดํฐ๋ ์ง์ญ ์ํ(Local State)๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ด ์ ๋ฆฌํ๋ค.

  <br/>

- Medium-term: ์ฑ ์คํ๋์ ์ ์ง๋๋ ๋ฐ์ดํฐ

  - API๋ฅผ ํตํด์ ๋ก๋๋ ๋ฐ์ดํฐ ๋ ์๋ก๊ณ ์นจ ์ด์ ๊น์ง ์ ์ง๋์ด์ผ ํ๋ ๋ฐ์ดํฐ๋ก ํ๋ก์ ํธ์ ์ ๋ฐ์ ์ผ๋ก ์ํฅ์ ์ฃผ๋ ๋ฐ์ดํฐ๋ Redux Store(State)๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ด ์ ๋ฆฌํ๋ค.์๋ฅผ ๋ค๋ฉด, ์ ์ญ์ผ๋ก ์ฌ์ฉ๋๋ย ์ ์  ์ ๋ณด๋ย submit ์์ ์ ์ถํ์ฌ ์ฌ์ฉ์ย ํ๋กํ ์ ๋ณด ์๋ฐ์ดํธ๋ฅผ ํด์ผํ๋ ๊ฒฝ์ฐ

  <br/>

- Long-term: ์ฌ๋ฌ ํ์ด์ง๊ฐ์ ๋ฐฉ๋ฌธ, ์๋ก๊ณ ์นจ ๋์ ์ ์ง๋์ด์ผ ํ๋ ๋ฐ์ดํฐ

  - ์ด ๊ฒฝ์ฐ์๋ ์๋ฒ์ ๋ฐ์ดํฐ ๋ฒ ์ด์ค ๋๋ ๋ธ๋ผ์ฐ์ ์ ๋ก์ปฌ ์คํ ๋ฆฌ์ง(local storage)์ ์ ์ฅํ์ฌ ์ฌ์ฉํ๋ค.

---

<br/>

### โ๏ธ [Apollo Client๋ฅผ ํตํ ์ ์ญ ์ํ ๊ด๋ฆฌ](https://chanyeong.com/blog/post/45)

<br/>

- ๋ฆฌ์กํธ์๋ ContextAPI, Redux, MobX ๋ฑ ์ ์ญ์ผ๋ก ์ํ๊ด๋ฆฌ๋ฅผ ํ๊ธฐ ์ํ ๋ง์ ์ ํ์ง๊ฐ ์๋ค. Apollo Client๋ ๊ทธ ์ค ํ๋์ ์ ํ์ง๋ก ๋ก์ปฌ์์ ์ ์ญ ์ํ๊ด๋ฆฌ๋ฅผ ํ๊ธฐ์ํด ์ฌ์ฉํ  ์ ์๋ค.

- Apollo Client cache๋ฅผ ์ ๊ทน์ ์ผ๋ก ์ฐ๋ ์ด์ ?

  - Apollo Client๋ GraphQL์ ์ฌ์ฉํด ์๋ฒ์ ํต์ ์ ํ๋ฉฐ ๋ฐํ ๊ฐ์ ์บ์๋ก ๋ณด๊ดํ๋ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

  - ํ์ง๋ง ์ผ๋ถ ์๋น์ค๋ ์๋ฒ ์์ด ์์ ํ ๋๋ฆฝ์ ์ผ๋ก ์๋ํ  ์ ์๊ณ , Apollo Client๋ ๊ทธ๋ฐ ๊ฒฝ์ฐ์๋ ๋ก์ปฌ ์ํ๋ฅผ ๊ด๋ฆฌํ  ์ ์์

  - ๋ค์์ Apollo Client๊ฐ ์ฟผ๋ฆฌ๋ฅผ ํตํด ์๋ฒ๋ก ํ๋๋ฅผ ์์ฒญํ๋ ๊ณผ์ 

    > 1. ์ฟผ๋ฆฌ๋ฅผ ํตํด ๋ก์ปฌ ๋ฐ ์๊ฒฉ ํ๋ ์์ฒญ
    > 2. ์บ์ฌ๋ ์์ฒญ๋ฐ์ ์ฟผ๋ฆฌ๋ฅผ ํตํด ๋์ผํ ์ฟผ๋ฆฌ๊ฐ ์บ์ฑ๋์ด์๋์ง ํ์ธ
    > 3. ์บ์ฑ๋์ด์์ง ์๋ค๋ฉด ์๋ฒ๋ก ์๊ฒฉ ํ๋ ์์ฒญ
    > 4. ์๋ฒ๋ ์์ฒญ๋ฐ์ ํ๋๋ฅผ ํ์ธ ํ ๋ฐํ
    > 5. ์บ์ฌ๋ ๋ฐํ๋ฐ์ ํ๋๋ฅผ ์บ์ฑ ํ ํด๋ผ์ด์ธํธ์๊ฒ ๋ฐํ

    <br/>

  - ๋ค์์ Apollo Client๊ฐ ์บ์ฑ๋์ด์๋ ์ฟผ๋ฆฌ์ ํ๋๋ฅผ ๋ฐํ๋ฐ๋ ๊ณผ์ 

    > 1. ๋์ผํ ์ฟผ๋ฆฌ๋ก ํ๋ ์์ฒญ
    > 2. ์บ์ฌ๋ ์์ฒญ๋ฐ์ ์ฟผ๋ฆฌ๋ฅผ ํตํด ๋์ผํ ์ฟผ๋ฆฌ๊ฐ ์บ์ฑ๋์ด์๋์ง ํ์ธ
    > 3. ์บ์ฑ๋์ด ์๋ค๋ฉด ์บ์ฑ๋ ํ๋๋ฅผ ์๋ฒ์ ์์ฒญํ์ง ์๊ณ  ๋ฐ๋ก ๋ฐํ
