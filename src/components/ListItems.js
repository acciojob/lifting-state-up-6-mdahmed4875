import React from 'react'

export default function ListItems(props) {
  return (
    <div>
        <h3>child component</h3>
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
