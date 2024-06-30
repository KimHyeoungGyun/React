import React, { useRef, useState, useEffect } from "react";
import './App.css';

function App() {
  const money = useRef();
  const [change, setChange] = useState(0);
  
  const plus = () => {
    console.log("입금 함수");
    const value = parseInt(money.current.value);
    setChange((prevChange) => prevChange + value); 
  };
  
  const minus = () => {
    console.log("출금 함수");
    const value = parseInt(money.current.value);
    setChange((prevChange) => prevChange - value); 
  };
  
  useEffect(() => {
    setChange(0);
  }, []);
  return (
    <div>
      <h1>금액관리</h1>
        <input ref={money}></input>
        <br></br>
        <button onClick={plus}>입금</button>
        <button onClick={minus}>출금</button>
        <p >잔액 : {change} </p>
    </div>
  );
}

export default App;
