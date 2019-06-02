
import React from 'react' 

import { connect } from 'react-redux'

import Actions from '../Actions/Actions.js' 

function ItemFooter(props) {
  
  function handleChange(e) {

    console.log(e.target.value)
    props.changeRadio(e.target.value)
  }

  return(
    <footer className="footer">
      <div>
        { props.countUnComplete } { props.countUnComplete === 1 ? 'item' : 'items'} left
      </div>
      <label>
        <input
          type="radio"
          value="showAll"
          checked={ props.choice === 'showAll'}
          onChange={ (e) => handleChange(e) }
        />ShowAll
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="showActive"
          checked={ props.choice === 'showActive' }
          onChange={ (e) => handleChange(e) }
        />ShowActive
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="showComplete"
          checked={ props.choice === 'showComplete'}
          onChange={ (e) => handleChange(e) }
        />ShowComplete
      </label>
      <br />
      <button onClick={ props.clearAll }>Clear complete</button>
      {
        props.showClearButton && <button onClick={ props.clearAll }>Clear complete</button>
      }
    </footer>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    choice: state.FooterReducer.choice,
    showClearButton: state.ListReducer.todos.some(item => !item.active),
    countUnComplete: state.ListReducer.todos.filter(item => item.active).length
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    
    changeRadio: (value) => {
      dispatch(Actions.changeRadio(value))
    },

    clearAll: () => {
      dispatch(Actions.clearAll())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFooter)