import actionTypes from '../constants'

const initialState = {
  isFetching: false,
  employeesList: [],
  error: ''
}

const employees = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.employees.FETCH_EMPLOYEES_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case actionTypes.employees.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        employeesList: action.payload
      }

    case actionTypes.employees.FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_SUCCESS:
      return {
        ...state,
        isFetching: false
      }

    case actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_ERROR:
      return {
        ...state,
        isFetching: false
      }

    case actionTypes.employees.REMOVE_EMPLOYEE_FROM_PROJECT_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case actionTypes.employees.REMOVE_EMPLOYEE_FROM_PROJECT_SUCCESS:
      return {
        ...state,
        isFetching: false
      }

    case actionTypes.employees.REMOVE_EMPLOYEE_FROM_PROJECT_ERROR:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state
  }
}

export default employees
