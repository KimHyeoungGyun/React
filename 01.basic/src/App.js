import logo from './logo.svg'
import './App.css'

/*
 shift + alt + f

  JSX 문법
  - HTML과 JS를 하나의 파일에 작성할 수 있는 문법

  JSX문법의 특징
  1. 반드시 하나의 부모요소가 있어야한다!
    + 꼭 <div> 가 아니어도 된다!
  2. 표현식 사용
    단, if문은 사용할 수 없다..

    2-1. 조건식이 하나일 때 - &&연산자 활용
    2-2. 조건식이 두개일 때 - 삼항연산자 활용
    2-3. 조건식이 세개일 때 - return문 위에 조건식 작성 후
                              결과 값만 {}에 넣어준다
  
  3. 기존 HTML 문법과 다른 점
    3-1. class 속성 -> className속성     
    3-2. HTML문법을 사용할 때 반드시 소문자로 작성!
        - 대문자로 정의하는 것은 '컴포넌트' 로 인식
    3-3. HTML문법 내 내용이 없어도 끝태그는 반드시 작성!
    3-4. onclick 속성 -> onClick속성 (대문자)     
    
  4. 스타일 적용
    4-1. css파일 내 스타일 정의
        - import로 css 파일 경로 설정
    4-2. 객체형태로 정의
        - HTML문법 내 style속성 정의
        - style속성 내 객체형태의 스타일 정의({key:value})
    */

function App() {
  let msg = `Hello React!`
  let isLogin = false
  let name = '임승환'
  
  let text = ''

  if(name == '선영표'){
    text = 'Front-end'
  }else if (name == '임승환'){
    text = 'Back-end'
  }else{ 
    text = 'DB'
  } 

  const styled_1 = {
    color :'green',
    backgroundColor :'black',

  }

  return (
    <div className = "container">
      <div className ="item" >Hello React!</div>
      <div style = {{color:'blue', fontSize: '30px'}}>Hello React!</div>
      <div styled_1={{styled_1}}>{msg}</div>
      {/* 조건부 렌더링 */}
      {/* 조건식이 하나일 때 */}
      {isLogin && "환영합니다~!"}

      {/* 조건식이 두개일 때 */} 
      {name ==='임승환'?
      <p>환영합니다~!</p>:
      <p>이용할 수 없습니다..</p>}
      {/* 조건식이 세개일 때 - 조건식을 만든 후 결과만 출력 */}
      {text}

      <p><button onClick={()=>alert("마우스 클릭실행!")}>클릭</button></p>
    </div>
  )
}

export default App
