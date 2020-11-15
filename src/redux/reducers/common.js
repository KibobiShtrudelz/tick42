import actionTypes from '../constants'

const initialState = {
  willAddEmployee: false
}

const common = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.common.TOGGLE_ADD_EMPLOYEE:
      return {
        ...state,
        willAddEmployee: !state.willAddEmployee
      }

    default:
      return state
  }
}

export default common
