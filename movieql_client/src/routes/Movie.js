import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// local only field는 apollo의 cache에서만 활동하는 field <=> remote field
// isLiked @client => isLiked field는 client cache에만 있음을 Apollo 서버에 알려줌
const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      rating
      isLiked @client
    }
  }
`;

export default function Movie() {
  const { id } = useParams();

  // client를 가지고 오는 방법 : 1. useApolloClient(), 2. useQuery()
  // client cache는 Apollo Client Devtools 확인

  // client = useApolloClient()

  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      // gql의 변수($movieId)와 이름이 같아야 함
      movieId: id,
    },
  });

  // cache 수정
  // Fragment : 타입의 일부로서 재사용이 가능한 쿼리
  // 1. cache에서 수정하고 싶은 객체 알아내기(id)
  // 2. fragment 정의 : fragment _자유로운 변수명_ on _GraphQL API에서 온 타입_
  // 3. data 작성
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : `${data?.movie?.title}`}</Title>
        <Subtitle>⭐️ {data?.movie?.rating}</Subtitle>
        <button onClick={onClick}>
          {data?.movie?.isLiked ? "Unlike" : "Like"}
        </button>
      </Column>
      <Image bg={data?.movie?.medium_cover_image} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
  > button {
    background-color: peachpuff;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Image = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;
