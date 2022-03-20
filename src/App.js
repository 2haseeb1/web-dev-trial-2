import React,{useState} from 'react';
import TodoList from "./TodoList"
import './App.css';

function App() {
const [todos]=useState(['Todo 1','Todo 2'])
return (
  <>
<TodoList todos={todos} />
<input type="text"></input>
<button>Add ToDo</button>
<button>Clear Completed</button>
<div>0 left to do</div>

</>

  );
}

export default App;
