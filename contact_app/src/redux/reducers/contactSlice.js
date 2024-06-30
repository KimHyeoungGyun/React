import { createSlice } from '@reduxjs/toolkit'

// createSlice() : state, reducer를 관리하는 함수
// - state 초기화
// - state를 변경하는 함수 정의 -> reducer

// initialState: state를 초기화하는 속성
// reducers: 컴포넌트에서 state변경요청 시 수행하는 Action 기능을 정의하는 속성
export const contactSlice = createSlice({
  name: 'contact',
  initialState:{
    contacts:[],
    keyword:""
  },
  reducers:{
    addContact:(state, action)=>{
      state.contacts = action.payload
      console.log(state.contacts)
      console.log(action.payload)
    },
    searchContact:()=>{

    }
  }
})

// 컴포넌트에서 reducer함수를 실해할 수 있게 내보내기
//export const {increment,decrement, incrementByAmount} = counterSlice.actions
export const ContactReducerActions = contactSlice.actions

// store에서 접근할 수 있도록 내보내기
export default contactSlice.reducer
