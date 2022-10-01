import React, { useState } from 'react'

const ListItem = ({handleTodos}) => {
    const [value,setValue]=useState("")
    const handleItem=()=>{
        handleTodos(value)
        setValue(" ")
    }
  return (
    <div>
        <div className='listItems'>
              <input 
              value={value}
              onChange={(e)=>{setValue(e.target.value)}}
               className='input' type="text" placeholder="add items" ></input>
              <button onClick={handleItem} className='btn1'>Add</button>
        </div>
     
    </div>
  )
}

export default ListItem
