// import React from 'react';
import './App.css';
import React, { useState, useReducer } from 'react';
import Todo from './Todo.js'
import {reducer} from './reducers/reducer'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo' 
}




export function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

export default function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  console.log(todos);

  return (
    <>
    <h1>What Up!!!</h1>
    <form onSubmit= {handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />  
    </form>
    {todos.map(todo => {
     return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
    })}
    </>
  )
}

// export default App;
