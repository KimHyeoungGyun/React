import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Accordion,
} from "react-bootstrap";
import { useSelector } from "react-redux";
const Movies = () => {
  const { popularMovies } = useSelector((state) => state.movie);

  const [filter, setFilter] = useState([]);

  const movieSorted = (keyword, sortMethod) => {
    // React에서 state는 불변성을 유지해야 하기 때문에
    // 전개 연산자를 통해서 새로운 배열을 생성학 sort()함수를 실행해야 한다.
    // 정렬된 배열을 state에 다시 초기화해주면 영화정보가 정렬되어 출력된다.

    let list = [...filter];
    let result = [];
    if (keyword === "평점") {
      result =
        sortMethod === "asc"
          ? list.sort((a, b) => a.vote_average - b.vote_average)
          : list.sort((a, b) => b.vote_average - a.vote_average);
    } else if (keyword === "인기도") {
      result =
        sortMethod === "asc"
          ? list.sort((a, b) => a.popularity - b.popularity)
          : list.sort((a, b) => b.popularity - a.popularity);
    } else if (keyword === "제목") {
      result =
        sortMethod === "asc"
          ? list.sort((a, b) => a.title.localeCompare(b.title))
          : list.sort((a, b) => b.title.localeCompare(a.title));
    }

    // let result = list.sort((a,b)=> a.vote_average - b.vote_average)
    // console.log('정렬결과:', result)

    setFilter(result);
  };
  console.log("인기", popularMovies);

  useEffect(() => {
    if (popularMovies.length !== 0) {
      setFilter(popularMovies);
    }
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>인기 영화 필터링</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            {" "}
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>정렬</Accordion.Header>
                <Accordion.Body>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      정렬방식을 선택하세요.
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" onClick={() => movieSorted("제목", "asc")}>
                        제목 오름차순
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2" onClick={() => movieSorted("제목", "des")}>
                        제목 내림차순
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={() => movieSorted("평점", "asc")}
                      >
                        평점 오름차순
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4" onClick={() => movieSorted("평점", "des")}>
                        평점 내림차순
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5" onClick={() => movieSorted("인기도", "asc")}>
                        인기도 오름차순
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6" onClick={() => movieSorted("평점", "des")}>
                        인기도 내림차순
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={9} className="movie-card-list">
            {filter.map((item) => (
              <Card style={{ width: "13rem" }} key={item.id}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.release_date}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
