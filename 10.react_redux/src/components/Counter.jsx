import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, incrementByAmount } from '../redux/reducers/counterSlice'
import {CountReducerActions} from '../redux/reducers/counterSlice'
/*
    1. useSelector() : store에 등록된 state를 접근하기 위한 함수
        사용법 : useSelector((state)=>state.동록된 reducer 속성명.state명)
        등록된 reducer 속성명 : store의 reducer에 정의된 객체속성

    2. useDispatch() : state변경에 대한 요청을 보내는 함수
        사용법)
            const dispatch = useDispatch()
            dispatch(action) -> action에 대해 실행 해줘!

    3. Action: state를 변경하기 위한 명령어
        ex) counterSlice의 reducer속성에 정의된 increment, decrement
*/ 

const Counter = () => {

    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

    console.log('counterReducer state', count)
  return (
    <div>
        <h1>Redux Toolkit활용 실습</h1>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(CountReducerActions.increment())}>증가</button>
        <button onClick={()=> dispatch(CountReducerActions.decrement())}>감소</button>
        <button onClick={()=> dispatch(CountReducerActions.incrementByAmount({num:2}))}>2씩증가</button>
    </div>
  )
}

export default Counter