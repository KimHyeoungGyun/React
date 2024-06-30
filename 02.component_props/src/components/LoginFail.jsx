import React from 'react'

const LoginFail = ({ msg }) => {
  return <div>{msg}</div>

  /*

  const LoginFail = ({id, pw}) => {
    let result = ''

    if(id != '1234'){
      result = '아이디가 일치하지 않아요!'
    }else{
      if(pw!='1234){
        result = '패스워드가 일치하지 않아요!'
      }
    }
  }
  */
}

export default LoginFail
