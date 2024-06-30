import React from 'react'
import imgSrc from'./img/44deb98d-1c50-4073-9bd7-2c2c28d65f9e.jpg'
import Like from './components/Like'

/*
        실습문제1) 좋아요 기능을 가진 페이지 구현
        STEP1) 빈 하트를 클릭 시, 꽉찬 하트로 변경해주기! ♥
        STEP2) 빈 하트를 클릭시, 조하요 1개로 변겨해주기!
        STEP3) '좋아요'가 눌린 상태에서 클릭 시, 되돌리기!
*/

const Ex01 = () => {
  return (
    <div>
        <img src={imgSrc} style={{width : '100px'}}/>
        <Like/>
    </div>
  )
}

export default Ex01