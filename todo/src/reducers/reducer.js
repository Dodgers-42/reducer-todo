import { ACTIONS, newTodo } from '../App.js'


export function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)]
      case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete }
          }
            return todos
        })
      case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id) 
      default: 
        return todos
          
    }
  }
