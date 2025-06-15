import React from 'react'

export default function ListItems(props) {
  return (
    <div>
      <ul>
       {props.todos.map((todo)=>{
        return(
        <li>
            <span>{todo.text}</span>
            {!todo.completed && (
  <button onClick={() => props.handler(todo.id)}>Complete</button>
)}
        </li>
       )})
       }
      </ul>
    </div>
  )
}
