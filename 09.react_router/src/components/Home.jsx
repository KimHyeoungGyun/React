import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

/*
  실습)
  1. 로그인 상태를 파악하여 "로그인" or "로그아웃"으로 출력
    - loginState를 이용해 조건부 렌더링으로 출력
  2. "로그아웃" 버튼을 클릭했을 때, "로그인"텍스트로 변환하기
    - useNavigate를 이용해 loginState값 판단 후 상태값 전환
*/


const Home = ({loginState, setLoginState}) => {

    const navigate = useNavigate()

    const goToProdouct = () => {
        navigate('/product')
  }

  const handleLogin=()=>{
    if(loginState){
      setLoginState(false)
    }else{
      navigate('/login')
    }
  }

  const goToMyPage = () =>{
    if(loginState){
      navigate("/user")
    }else{
      navigate('login')
    }
  }
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/about'}>About 페이지로 이동하기!</Link> <br />
      <button onClick={goToProdouct}>상품페이지로 이동하기!</button> <br />
      {/* <Link to={'/login'}>로그인</Link> */}
      <hr />
      {/* {loginState?<button onClick={goToMyPage}>마이페이지</button>:""} */}
      <button onClick={handleLogin}>{loginState?"로그아웃":"로그인"}</button><br />

     <Link to = {'/user'} >마이페이지로 이동하기!</Link> 

      
    </div>
  )
}

export default Home
