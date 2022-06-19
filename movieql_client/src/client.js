import { ApolloClient, InMemoryCache } from "@apollo/client";

// ApolloClient 딱 한번 새로 생성
// uri
// cache : cache strategy
//         1. Apollo 쿼리 저장
//         2. 쿼리 결과가 브라우저의 메모리에 있는 cache에 저장
//         3. 즉, 일단 데이터를 한 번 가져오면
//                다른 화면으로 이동했다가 다시 돌아왔을 때 데이터를 다시 가져오지 않아도 됨
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default client;
