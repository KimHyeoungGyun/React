import './App.css';
import MemberCard from './components/MemberCard';
import Menubox from './components/Menubox';

/* 
  1. Component(컴포넌트)
    - 반복되는 코드를 하나로 묶어서 만드는 화면의 최소단위
    - 대문자로 파일을 만들고 확장자는 .jsx를 사용
    - 사용방법 -> <컴포넌트 이름/>
      ex) Menubox.jsx ->> <Menubox/>
    * rafce 명령어를 이용해서 기본 틀을 생성

    --> 컴포넌트화했을 때 문제점은 데이터가 모두 동일하다는 점...
      해결책 : props 활용!

  2. props(프로퍼티)
    - 부모(상위) 컴포넌트에서 자식(하위)컴포넌트로 값을 
      전달하는 방식
  
*/

function App() {
  return (
    <div>
      {/* <div className='menu-item'>
        <h3>아메리카노</h3>
        <p>3500</p>
      </div>
      <div className='menu-item'>
        <h3>아메리카노</h3>
        <p>3500</p>
      </div> */}
      <Menubox name="아메리카노" price="3000" />
      <Menubox name="카페라떼" price= "4000"/>
      <Menubox name="초코라떼" price= "4500"/>
      <Menubox name="딸기스무디" price= "5000"/> 

      <MemberCard team ="KIA" name = "강병우" />
      <MemberCard team ="SSG" name = "김광현" />
      <MemberCard team ="두산" name = "김동주" />
      <MemberCard team ="한화" name = "문동주" />
    </div>
  );
}

export default App;
 