import React,{useState} from 'react';
import ListItem from './ListItem'

import './App.css';
import AddListItems from './AddListItems';

function App() {
  const [todos,setTodos] = useState([]) 

  const handleTodos=(value)=>{
     setTodos([...todos,{id:Math.random()*1000,text:value}])
  }
  const deleteItem=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id
    ))

  }
  return (
    <div className='mainContainer'>
         <div className="container">
            <div className='title'>
              <p >Todo App</p>
            </div>

            <div className='listItems'>
              <ListItem handleTodos={handleTodos}/>
            </div>

            <div>
              {
                todos.map((todo)=>(
                  <AddListItems task={todo.text} id={todo.id} deleteItem={deleteItem}/>
                ))
              }
            </div>
      </div>
    </div>
    
  )
}

export default App;
