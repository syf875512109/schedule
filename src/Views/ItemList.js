import React from 'react' 

import { connect } from 'react-redux' 

import Actions from '../Actions/Actions.js' 

import { createSelector } from 'reselect' 

function ItemList(props) {

  function handleEdit(e, todo) {
    const content = e.target.value.trim()

    props.handleEditing(content, todo)
  
  }

  function handleKeyUp(e, todo) {
    const content = e.target.value.trim()
    
    if (e.key === 'Enter') {
      if (content) {
        props.handleEditing1(content, todo)
      } else {
        props.deleteOne(todo)
      }
    }
  }

  function handleEdit1(e, todo) {
    const content = e.target.value.trim()

    console.log(e.target.value)

    if (content) {
      props.handleEditing1(content, todo)
    } else {
      props.deleteOne(todo)
    }
    
  }

  return (
    <div>
      <ul>
        {
          props.todos.map((todo, index) => {
            return (
              <li key={ index }>
                <input type="checkbox"
                  checked={ !todo.active }
                  onChange={ () => { props.clickCheckBox(todo) } }
                />
                
                {
                  props.editingNumber === index ?
                  <input
                    type="text"
                    value={ todo.content }
                    onChange={ (e) => handleEdit(e, todo) }
                    onKeyUp={ (e) => handleKeyUp(e, todo) }
                    onBlur={ (e) => handleEdit1(e, todo) }
                    ref={ (el) => {if (el) el.focus() } }
                  />
                  :
                  <span
                    onDoubleClick={ () => {
                      return props.handleDBclick(todo, index)
                    } }
                  >{ todo.content }</span>
                }
                <button onClick={ () => props.deleteOne(todo) }>&times;</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const getTodos = (state) => state.ListReducer.todos

const getFilter = (state) => state.FooterReducer.choice 

const getVisibileTodos = createSelector([getTodos, getFilter], (todos, filter) => {
  let todo
  
  if (filter === 'showAll') {
    todo = todos
  } else if (filter === 'showActive') {
    todo = todos.filter(item => item.active)
  } else {
    todo = todos.filter(item => !item.active)
  }

  return todo
})

function mapStateToProps(state) {

  return {
    todos: getVisibileTodos(state),
    editingNumber: state.ListReducer.editingNumber,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

    clickCheckBox: (todo) => {
      dispatch(Actions.clickCheckBox(todo))
    },

    deleteOne: (todo) => {
      dispatch(Actions.deleteOne(todo))
    },

    handleDBclick: (todo, index) => {
      dispatch(Actions.handleDBclick(todo, index))
    },

    handleEditing: (content, todo) => {
      dispatch(Actions.handleEditing(content, todo))
    },

    handleEditing1: (content, todo) => {
      dispatch(Actions.handleEditing1(content, todo))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
