import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, title, setTodos, checked }) => {
  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} 0개]</p>
      <ul className="todo-list-ul">
        {todos &&
          todos.map((todo) => {
            if (todo.complete === checked) {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              )
            } else {
              return null
            }
          })}
      </ul>
    </div>
  )
}

export default TodoList
