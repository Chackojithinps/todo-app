import React from 'react'

const AddListItems = (props) => {

  function handleDelte(){
     props.deleteItem(props.id)
  }
  return (
    <div className='addListItems'>
       <div className="titleList">
          
           <p className='titleItems' >{props.task}</p>
           <button onClick={handleDelte} className='delteBtn'>delete</button>
       </div>
     
        
    </div>
  )
}

export default AddListItems
