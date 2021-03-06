import { createStore } from 'redux'

import {v4 as uuidv4} from 'uuid';

const initialState = {
    todos: []
}

function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'addTodo': {

        const newId = uuidv4();

        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: newId,
              title: action.todo.title,
              description: action.todo.description
            }
          ]
        }
      }
      case 'removeTodo': {
        let newTodos = [...state.todos];
        newTodos = newTodos.filter(todo => {
            if (todo.id !== action.todo.id) {
                return true;
            }
            return false;
        });
        return {
          ...state,
          todos: newTodos
        }
      }
      case 'getTodos': {
        return Object.assing({}, ...state);
      }
      case 'reloadTodos': {
        const newState = {todos: []};
        if ( action.todos ) {
          newState.todos = action.todos.map(todo => {
            todo.title = todo.name;
            return todo;
          });
        }
        return newState;
      }
      default:
        return state
    }
  }

const store = createStore(appReducer)

export default store;