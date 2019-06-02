
import * as ActionTypes from './ActionTypes'


const fetchTodosRequest =  () => {
  return ({
    type: ActionTypes.fetchTodosRequest,
  })
}

const fetchTodosSuccess = (data) => {
  return ({
    type: ActionTypes.fetchTodosSuccess,
    data,
  })
}

const fetchTodosFailure = (err) => {
  return ({
    type: ActionTypes.fetchTodosFailure,
    err,
  })
}

const Actions = {

  clickCheckBox: (todo) => {
    return ({
      type: ActionTypes.changeCheckBox,
      todo,
    })
  },

  deleteOne: (todo) => {
    return ({
      type: ActionTypes.deleteOne,
      todo,
    })
  },

  handleDBclick: (todo, index) => {
    return ({
      type: ActionTypes.handleDBclick,
      todo,
      index,
    })
  },

  handleEditing: (content, todo) => {
    return ({
      type: ActionTypes.handleEditing,
      content,
      todo,
    })
  },

  handleEditing1: (content, todo) => {
    return ({
      type: ActionTypes.handleEditing1,
      content,
      todo,
    })
  }, 

  addOne: (content) => {
    return ({
      type: ActionTypes.addOne,
      content,
    })
  },

  toggleAll: (flag) => {
    if (flag) {
      return ({
        type: ActionTypes.cancelSelectAll,
      })
    } else {
      return ({
        type: ActionTypes.selectAll,
      })
    }
  },

  changeRadio: (value) => {
    return ({
      type: ActionTypes.changeRadio,
      value,
    })
  },

  clearAll: () => {
    return ({
      type: ActionTypes.clearComplete,
    })
  },

  fetchTodos: () => {
    return (dispatch) => {
      dispatch(fetchTodosRequest())

      fetch("./mock/data.json").then((response) => {
        if (response.status !== 200) {
          throw new Error('Fail to get response with status ' + response.status)
        }

        console.log(response)

        response.json().then((responseJSON) => {
          console.log(responseJSON)
          dispatch(fetchTodosSuccess(responseJSON))
        })
      }).catch((error) => {
        dispatch(fetchTodosFailure(error))
      })
    }
  }
  
}

export default Actions
