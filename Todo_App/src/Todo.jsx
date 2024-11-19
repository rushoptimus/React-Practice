import React, { useState } from 'react'

function Todo() {
    const [task,setTask] =useState("")
    const [saveItem, setSaveItem] = useState([])
    function handle(event){
      event.preventDefault()
        setTask(event.target.value)
       
    }
    function ADD(){
      if(task.trim() !== ""){
        setSaveItem(t=> [...t,task])
        setTask("")
      }
    }
    function delete_item(index){
      const update= saveItem.filter((_,i) => i !== index)
      setSaveItem(update)
    }
    
  return (

    <>
    <h1> Todo List App</h1>
    <form onSubmit={handle}>
      <input value={task} type='text' placeholder='enter a task'
      onChange={handle}
      ></input>
      <button onClick={ADD}> Add </button>
    </form>

    <h2> Todo Task List....</h2>

    <ol>
        {saveItem.map((Items,index) => {
           return( <li key={index}>
                {Items}
                <button onClick={ ()=>delete_item(index)}>delete</button>
            
            </li>)
        })}
        
    </ol>
    </>
  )
  
}
export default Todo
