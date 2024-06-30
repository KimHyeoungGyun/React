import React from 'react'
import { useState } from 'react'
// import HTS from './components/MenuBoard'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuBoard from './components/MenuBoard'
import './style/Ex02.css'

/*
    실습문제) 커피메누를 출력하는 웹 페이지 구현
    STEP1) 'coffee_menus.json' 파일을 import한다.
    STEP2) 커피정보를 HTML문법과 결합하여 화면에 출력한다.

    결과물: Card형태로 메뉴이름과 금액만 출력할 것
*/

const Ex02 = () => {
  return (
    <div>
        <MenuBoard/>
    </div>
  )
}

export default Ex02
