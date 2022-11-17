import React from 'react'
import {TodoItem} from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
        <h2 className='my-3'>Parking List</h2>
        <h3 className='my-3'>No. of Vehicles: {props.count}</h3>
        {props.todos.length===0? "No Parking to display":
        props.todos.map((todo)=>{
            return( <TodoItem count={props.count} setCount={props.setCount} todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })  
        }    
    </div>
  )
}

export default Todos
