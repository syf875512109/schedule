
import React from 'react' 

import { connect } from 'react-redux'

import Actions from '../Actions/Actions.js' 

function ItemHeader(props) {

  function handleChange(e) {
    let content = e.target.value.trim()

    if (content && e.key === 'Enter') {
      props.addOne(content)
      e.target.value = ''
    }
  }

  function handleChange1(e) {
    let content = e.target.value.trim()

    if (content) {
      props.addOne(content)
      e.target.value = ''
    }
  }

  return (
    <div>
      <input type="checkbox"
        checked={ props.selectAll }
        onChange={ () => props.toggleAll(props.selectAll) }
      />
      <input type="text"
        onKeyUp={ handleChange }
        onBlur={ handleChange1 }
      />
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    selectAll: state.ListReducer.todos.every(item => !item.active) && state.ListReducer.todos.length,
  }
}

function mapDispatchToProps(dispatch, ownProps) {

  return {

    addOne: (content) => {
      dispatch(Actions.addOne(content))
    },

    toggleAll: (flag) => {
      dispatch(Actions.toggleAll(flag))
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemHeader)