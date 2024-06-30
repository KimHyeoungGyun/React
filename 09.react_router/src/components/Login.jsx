import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setLoginState }) => {

    const navigate = useNavigate()

    const goToLogin = () =>{
        setLoginState(true)
        navigate('/')
    }
  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={goToLogin}>로그인</button>
    </div>
  )
}

export default Login
