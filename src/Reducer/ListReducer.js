
import * as ActionTypes from '../Actions/ActionTypes'

import { produce } from "immer"

const _ = require('lodash')

const ListReducer = produce((state = {todos: [], editingNumber: -1, load: 'loading'}, action) => {

  switch (action.type) {
    case ActionTypes.changeCheckBox: {

      let index = _.findIndex(state.todos, { ...action.todo })

      state.todos[index] = {
        active: !action.todo.active,
        content: action.todo.content
      }
      break
    }

    case ActionTypes.addOne: {

      state.todos.push({
        active: true,
        content: action.content,
      })
      break
      // return {
      //   ...state,
      //   todos: [
      //     ...state.todos,
      //     {
      //       active: true,
      //       content: action.content
      //     }
      //   ]
      // };
      // break;
    }

    case ActionTypes.selectAll: {
      // state.todos.forEach(todo => {
      //   todo.active = false;
      // })
      // break
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          active: false
        }))
      };
    }

    case ActionTypes.cancelSelectAll: {
      // state.todos.forEach(todo => {
      //   todo.active = true;
      // })
      // break
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          active: true
        }))
      };
    }

    case ActionTypes.deleteOne: {
      // state.editingNumber = -1
      // state.todos.splice(action.index, 1)
      // break
      state.todos = _.filter(state.todos, (item) => (!_.isEqual(item, action.todo)))

      state.editingNumber = -1
      break
      // return {
      //   ...state,
      //   todos: _.filter(state.todos, (item) => (!_.isEqual(item, action.todo))),
      //   editingNumber: -1
      // };
    }

    case ActionTypes.clearComplete: {
      if (_.some(state.todos, {active: false})){
        state.todos = _.filter(state.todos, {active: true})
      }
      
      break
      // return {
      //   ...state,
      //   todos: state.todos.filter(item => item.active)
      // };
    }

    case ActionTypes.handleEditing: {

      const index = _.findIndex(state.todos, action.todo) 

      state.todos[index].content = action.content
      break
      // return {
      //   ...state,
      //   todos: state.todos.map(item => {
      //     if (item == action.todo) {
      //       return {
      //         ...action.todo,
      //         content: action.content
      //       };
      //     } else {
      //       return item;
      //     }
      //   })
      // };
    }
    
    case ActionTypes.handleDBclick: {

      state.editingNumber = action.index 
      break
      // return {
      //   ...state,
      //   editingNumber: action.index
      // };
    }

    case ActionTypes.handleEditing1: {

      state.editingNumber = -1
      break
      // return {
      //   ...state,
      //   editingNumber: -1
      // };
    }
    
    case ActionTypes.fetchTodosRequest: {
      break
      // return {
      //   ...state,
      // }
    }
    
    case ActionTypes.fetchTodosSuccess: {
      state.load = 'success'
      state.todos = action.data.todos
      break
      // return {
      //   ...state,
      //   ...action.data,
      //   load: 'success',
      // }
    }
    
    case ActionTypes.fetchTodosFailure: {
      state.load = 'failure'
      state.error = action.error 
      break
      // return {
      //   ...state,
      //   load: 'failure',
      //   error: action.error,
      // }
    }

    default:
      return state;
  }
})

export default ListReducer