import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import { produce } from "immer";

import * as ActionTypes from "./Actions/ActionTypes";

import thunkMiddleware from 'redux-thunk' 

import FooterReducer from './Reducer/FooterReducer.js' 

import ListReducer from './Reducer/ListReducer.js' 


const reducer = combineReducers({
  FooterReducer,
  ListReducer,
})
// const initValues = {
//   todos: [],
//   choice: "showAll",
//   editingNumber: -1,
//   load: 'loading',
// };

// const reducer = (state = initValues, action) => {

//   switch (action.type) {
//     case ActionTypes.changeCheckBox: {
//       // state.todos[action.index] = {
//       //   active: !action.todo.active,
//       //   content: action.todo.content
//       // }
//       // break
//       return {
//         ...state,
//         todos: state.todos.map(it => {
//           if (it === action.todo) {
//             return {
//               active: !action.todo.active,
//               content: action.todo.content
//             };
//           } else {
//             return it;
//           }
//         })
//       };
//     }

//     case ActionTypes.addOne: {
//       // console.log(state == store)
//       // state.todos.push({
//       //   active: true,
//       //   content: action.content,
//       // })
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             active: true,
//             content: action.content
//           }
//         ]
//       };
//       // break;
//     }

//     case ActionTypes.selectAll: {
//       // state.todos.forEach(todo => {
//       //   todo.active = false;
//       // })
//       // break
//       return {
//         ...state,
//         todos: state.todos.map(todo => ({
//           ...todo,
//           active: false
//         }))
//       };
//     }

//     case ActionTypes.cancelSelectAll: {
//       // state.todos.forEach(todo => {
//       //   todo.active = true;
//       // })
//       // break
//       return {
//         ...state,
//         todos: state.todos.map(todo => ({
//           ...todo,
//           active: true
//         }))
//       };
//     }

//     case ActionTypes.deleteOne: {
//       // state.editingNumber = -1
//       // state.todos.splice(action.index, 1)
//       // break
//       return {
//         ...state,
//         todos: state.todos.filter(item => item !== action.todo),
//         editingNumber: -1
//       };
//     }

//     case ActionTypes.changeRadio: {
//       // state.choice = action.value
//       // break
//       return {
//         ...state,
//         choice: action.value
//       };
//     }

//     case ActionTypes.clearComplete: {
//       return {
//         ...state,
//         todos: state.todos.filter(item => item.active)
//       };
//     }

//     case ActionTypes.handleDBclick: {
//       return {
//         ...state,
//         editingNumber: action.index
//       };
//     }

//     case ActionTypes.handleEditing: {
//       return {
//         ...state,
//         todos: state.todos.map(item => {
//           if (item == action.todo) {
//             return {
//               ...action.todo,
//               content: action.content
//             };
//           } else {
//             return item;
//           }
//         })
//       };
//     }

//     case ActionTypes.handleEditing1: {
//       return {
//         ...state,
//         editingNumber: -1
//       };
//     }

//     case ActionTypes.fetchTodosRequest: {
//       return {
//         ...state,
//       }
//     }

//     case ActionTypes.fetchTodosSuccess: {
//       return {
//         ...action.data,
//         load: 'success',
//       }
//     }

//     case ActionTypes.fetchTodosFailure: {
//       return {
//         ...state,
//         load: 'failure',
//       }
//     }

//     default:
//       return state;
//   }
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;
