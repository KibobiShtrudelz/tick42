import actionTypes from '../constants'

const initialState = {
  newProjectFormCallerId: ''
}

const common = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.common.TOGGLE_NEW_PROJECT_FORM:
      return {
        ...state,
        newProjectFormCallerId: action.companyId
      }

    default:
      return state
  }
}

export default common
