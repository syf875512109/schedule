
import React from 'react' 

import ItemHeader from './ItemHeader.js' 

import ItemList from './ItemList.js' 

import ItemFooter from './ItemFooter.js' 

import Actions from '../Actions/Actions.js' 

import { connect } from 'react-redux' 

class Todos extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { status } = this.props

    if (status == 'loading') {
      return (
        <div>Todos is loading...</div>
      )
    } else if (status === 'success') {
      return (
        <div>
          <ItemHeader />
          <ItemList />
          <ItemFooter />
        </div>
      )
    } else {
      return (
        <div>Something went wrong!</div>
      )
    }
  }
}
const mapStateToprops = (state) => {
  return ({
    status: state.ListReducer.load,
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getData: () => {
      dispatch(Actions.fetchTodos())
    }
  })
}

export default connect(mapStateToprops, mapDispatchToProps)(Todos)