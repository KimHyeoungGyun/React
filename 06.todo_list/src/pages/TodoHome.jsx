import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'

const TodoHome = () => {
  const [todos, SetTodos] = useState([])

  console.log(todos)
  return (
    <div className="todo-container">
      <h1 className="todo-tit">ToDo List</h1>
      {/* todo 추가하는 영역 */}
      <TodoInput todos={todos} setTodos={SetTodos} />

      {/* 해야할 일 출력 */}
      <TodoList
        title="해아할 일 :"
        todos={todos}
        setTodos={SetTodos}
        checked={false}
      />

      {/* 완료된 일 출력 */}
      <TodoList
        title="완료된 일"
        todos={todos}
        setTodos={SetTodos}
        checked={true}
      />
    </div>
  )
}

export default TodoHome
