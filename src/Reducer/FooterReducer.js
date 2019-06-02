
import * as ActionTypes from '../Actions/ActionTypes.js' 

import { produce } from "immer"

const FooterReducer = produce((state = {choice: 'showAll'}, action) => {
  switch (action.type) {

    case ActionTypes.changeRadio: {
      state.choice = action.value
      break
    }

    default:
      return state;
  }
})


export default FooterReducer