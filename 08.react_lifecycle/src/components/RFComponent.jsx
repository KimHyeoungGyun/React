import React, { useEffect, useState } from 'react'

const RFComponent = () => {
  console.log('1. contructor 대체 => 함수 초기화')
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  const handlerIncement = () => {
    setNum(num + 1)
  }

  const handlerIncement2 = () => {
    setNum2(num2 + 1)
  }
  //  3. componentDidMount 대체
  //  useEffect(()=>{ 실행로직 },[]) : 화면이 처음 렌더링될 때 실행
  useEffect(() => {
    console.log('3.componentDidMount대체 => 화면 렌더링 완료')
  }, [])

  // componentDidUpdate 대체
  // useEffect(()=>{ 실행로직 }, [변화를 감지할 state])
  // - 특정 state가 변화할 때 실행
  /*
  
  useEffect(() => {
    console.log('componentDidUpdate대체 => []안에 state 설정')
  }, [num])

  useEffect(() => {
    console.log('num2 State 변화감지')
  }, [num2])

*/


  useEffect(() => {
    console.log('num 또는 num2 State 변화감지')
  }, [num, num2])
  return (
    <div>
      {console.log('2.render 대체 => return문 안')}
      <p>
        RFComponent{num} <br />
        <button onClick={handlerIncement}>증가</button>
      </p>
      <p>
        RFComponent{num2} <br />
        <button onClick={handlerIncement2}>증가</button>
      </p>
    </div>
  )
}

export default RFComponent
