import Button from "react-bootstrap/Button";
import logo from "../img/logo.png";
import axios from "axios";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NaverData } from "../App";

function Search() {

  const data = useContext(NaverData)
  // data = {searchData : searchData, setSearchData : setSearchData}

  let inputref = useRef(null);
  const nav= useNavigate();

  const getData = (e) => {
    // 네이버 검색 api 를 이용해서 데이터를 받아오겠습니다.
    // 1. 검색 키워드(짜장면) 2. 검색 카테고리(뉴스)
    // localhost:3000 => https://openapi.naver.com/v1/search/news.json
    // https://openapi.naver.com/v1/search/book.json 책
    // https://openapi.naver.com/v1/search/shop.json 쇼핑
    console.log(inputref.current.value);
    let keyword = inputref.current.value;
    let search = e.target.value;
    console.log(search);
    axios
      .get(`/v1/search/${search}.json`, {
        params: { query: keyword },
        headers: {
          "X-Naver-Client-Id": "bI15dbbQjEjAuNrMFfBb",
          "X-Naver-Client-Secret": "G7FSG7Nx1a",
        },
      })
      .then((res) => {
        console.log(res);
        data.setSearchData(res.data.items)
        nav(`/${search}`)
      });
  };
  return (
    <>
      <img className="logo" src={logo} alt="NAVER SEARCH API" />
      <div className="Search fixed">
        <div className="Category">
          {/* 카테고리 선택 버튼 */}
          <Button variant="outline-success" onClick={getData} value={"news"}>
            뉴스
          </Button>
          <Button variant="outline-success" onClick={getData} value={"shop"}>
            쇼핑
          </Button>
          <Button variant="outline-success" onClick={getData} value={"book"}>
            책
          </Button>
        </div>

        <br></br>

        <div className="search-wrap">
          {/* 검색어 입력 */}
          <input ref={inputref} type="text" className="keyword" />
        </div>
      </div>
    </>
  );
}
export default Search;
