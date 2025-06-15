
import React,{useState} from "react";
import './../styles/App.css';
import ListItems from "./ListItems";

const App = () => {
  const [todos, setTodos] = useState([
    { id:1,text: 'Learn React', completed: false },
    { id:2,text: 'Complete assignment', completed: false },
    { id:3,text: 'Review pull request', completed: false },
  ]);
  function handler(id){
    const newtodos=todos.map((todo)=>{
      if(todo.id==id){
        
return { ...todo, completed: true };
      }
      return todo;
    })
    setTodos(newtodos);
  }
  return (
    <div>
       <ListItems handler={handler} todos={todos}/>
    </div>
  )
}

export default App
