import React from 'react'

export const TodoItem = ({todo, onDelete, count, setCount}) => {
  const clickButton = () => {
    onDelete(todo);
    setCount(parseInt(count) - 1);
  }
  
  return (
    <>
    <div>
      <h4>{todo.driver}</h4>
      <p>{todo.numberplate}</p>
      <p>{todo.entry}</p>
      <p>{todo.exit}</p>
      <button className='btn btn-sm btn-danger' onClick={clickButton}>Delete</button>
    </div>
    <hr/>
    </>
  )
}

