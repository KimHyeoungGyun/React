import React, { useRef } from 'react'

const Ex02 = () => {
  let inputid = useRef()
  let inputpw = useRef()

  let id = 'smart'
  let pw = '1234'
  const handleClick = () => {
    if (inputid.current.value === id && inputpw.current.value === pw) {
      alert('성공')
    } else {
      alert('로그인 실패')
    }
    console.log(inputid.current.value)
    console.log(inputpw.current.value)
  }

  return (
    <div>
      ID: <input type="text" ref={inputid} />
      PW: <input type="password" ref={inputpw} />
      <input type="button" onClick={handleClick} value="로그인" />
    </div>
  )
}

export default Ex02
