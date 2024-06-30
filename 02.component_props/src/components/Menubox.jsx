import React from 'react'

// rafce : 함수 틀을 자동완성해주는 명령어
// 컴포넌트는 함수형태로 되어있기 때문에
// 부모 컴포넌트로부터 전달받은 데이터를 매개변수를 통해서
// 가져올 수 있다.
// - 값의 형태 : 객체
// ex) App.js: <Menubox name ="아메리카노" price="3000"/>
//      -> {name:"아메리카노", price:"3000"}형태로
//         Menubox 컴포넌트에 전달
//          props : {name:"아메리카노", price:"3000"}

// export default Menubox

/* 
    비구조화 할당(destructuring assigment)
    - 객체 안에 있는 속성만 꺼내서 각각의 변수에 저장하는 js문법
    ex) let menu = {name:"아메리카노", price:"3000"}
    let{name, price} = menu
*/

const Menubox = ({ name, price }) => {
  console.log('App.js로부터 넘겨받은 데이터:')
  console.log(name, price)
  return (
    
      <div className="menu-item">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    
  )
}

export default Menubox
