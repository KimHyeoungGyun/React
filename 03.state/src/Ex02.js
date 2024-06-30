import React from 'react'
import {useState} from 'react'


/*
    실습문제2) 랜덤 숫자 맞추는 페이지 구현
    STEP1) 랜덤숫자를 생성한다. ( 범위 : 1~3)
    STEP2) 사용자가 누른 버튼의 숫자를 가져온다
    STEP3) 사용자가 선택한 숫자와 랜덤숫자를 비교한다
            - 두 숫자가 일치 할 경우 : "정답입니다."
            - 두 숫자가 불일치 할 경우 : "오답입니다."
*/
const Ex02 = () => {

    const[ranNum, setRanNum] = useState(0)
    const[userNum, setUserNum] = useState(0)
    const[result, setResult] = useState('')

    const handleNum = (e) => { //버튼 클릭했을때 버튼의 숫자 담기
        console.log(e.target.innerText)

        // 랜덤숫자 생성
        let newNum = parseInt(Math.random()*3)+1
        let inputNum = parseInt(e.target.innerText);
        console.log(newNum,inputNum)

        // state 변경
        setUserNum(inputNum)
        setRanNum(newNum)

        // 사용자와 컴퓨터 숫자를 비교하는 함수
        jugement(inputNum, newNum)
    }

    const jugement = (userNum, ranNum) => {
        let resultMsg = userNum === ranNum ?
        <p>정답입니다</p> : <p>오답입니다</p>
        setResult(resultMsg)
    }



  return (
    <div>
        <button onClick={handleNum}>1</button>
        <button onClick={handleNum}>2</button>
        <button onClick={handleNum}>3</button>
        <p>내가 입력한 숫자 :{userNum}</p>
        <p>랜덤한 숫자 :{ranNum}</p>
        {/* {userNum !== 0 &&
         ranNum !==0 &&
        (userNum === ranNum ?
        <p>정답입니다</p>:
        <p>오답입니다</p>)} */}
        {result}
    </div>
  )
}

export default Ex02