import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import logger from 'redux-logger'

/*
    Store : state, reducer, 내장함수 등으 관리하는 역할
            하나의 어플리케이션에 하나의 store만 생성

    configureStore() : store를 생성하는 함수
    
    react middleware: action과 reducer 사이에 특정 함수를 실행하는 중간 처리기 역할
 */

export default configureStore({
  reducer: {
    counter:counterReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
