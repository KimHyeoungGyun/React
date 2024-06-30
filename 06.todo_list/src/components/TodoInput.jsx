import React, { useRef } from 'react'
import {v4 as uuidv4} from 'uuid'

const TodoInput = ({ todos, setTodos }) => {
  let inputref = useRef(null)

  const handleClick = () => {
    console.log(inputref.current.value)
    let todo = inputref.current.value

    setTodos([...todos, { id: uuidv4(), text: todo, complete: false }])

    //입력된 내용을 비우고 커서 생성하기
    inputref.current.value = ''
    inputref.current.focus()
  }
  return (
    <div className="todo-inputbox">
      <input
        ref={inputref}
        type="text"
        className="todo-inputbox-input"
        placeholder="할 일을 입력해주세요~!"
      />
      <input
        type="button"
        className="todo-inputbox-add-btn"
        value="등록"
        onClick={handleClick}
      />
    </div>
  )
}

export default TodoInput
