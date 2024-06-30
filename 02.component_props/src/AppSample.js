import React from 'react'
import LoginSuccess from './components/LoginSuccess'
import LoginFail from './components/LoginFail'

/*
    1. 사용자로부터 id, pw를 입력 받는다. (prompt() 활용)
    2. 임의의 값으로 성공여부에 따라 다른 화면을 출력한다.
        성공시) LoginSuccess.jsx 컴포넌트 출력 -> "환영합니다~!"
        실패시) LoginFail 컴포넌트 실행 -> "아이디 또는 패스워드가 잘못되었스빈다.."

*/

const AppSample = () => {
  let id = '1234'
  let pw = '1234'
  let user_id = prompt('아이디를 입력해주세요')
  let user_pw = prompt('비밀번호를 입력해주세요')

    if(user_id == id && user_pw == pw){
        return(
            <LoginSuccess/>
        )
    }
    else if(user_id != id && user_pw == pw){
        return(
            <LoginFail msg = '아이디가 틀렸어요'/>
        )
    }
    else if(user_id == id && user_pw != pw){
        return(
            <LoginFail msg = '비밀번혹=가 틀렸어요'/>
        )
    }
    else{
        return(
            <LoginFail msg = '아이디 또는 패스워드가 잘못되었스빈다..'/>
        )
    }
  return (
    <div>
        {/* {id =='1234'&&pw=='1234'? 
        <LoginSuccess/>:
        <LoginFail id = {id} pw={pw}/>} */}
    </div>
  )
}

export default AppSample
