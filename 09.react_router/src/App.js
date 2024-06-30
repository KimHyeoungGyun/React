import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductDetail2 from './components/ProductDetail2';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import User from './components/User';
import Posts from './components/Posts';

function App() {

  const [loginState, setLoginState] = useState(false)

  // loginState 값이 업데이트되었을 때 로그인상태값 출력
  useEffect(()=>{
    console.log("로그인상태", loginState);
  },[loginState])

  const PrivateRoute = () =>{
    return loginState?<User/>:<Navigate to={'/login'}/> 
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home setLoginState={setLoginState} loginState={loginState}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login setLoginState={setLoginState}/>}/>
        <Route path='/user' element={<PrivateRoute/>}/>

        {/* URL 파라미터 형식으로 Route 구성하기 */}
        <Route path='/product/:pro_no' element={<ProductDetail/>}/>
        <Route path='/productDetail2' element={<ProductDetail2/>}/>


        {/* axios를 이용하여 json-server 데이터 요청하는 실습 */}
        <Route path='post' element={<Posts/>}/>
      </Routes>
    </div>    
  );
}

export default App;