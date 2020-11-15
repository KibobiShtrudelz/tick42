import actionTypes from '../constants'

const initialState = {
  isFetching: false,
  projectsList: [],
  error: ''
}

const projects = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.projects.FETCH_PROJECTS_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case actionTypes.projects.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        projectsList: action.payload
      }

    case actionTypes.projects.FETCH_PROJECTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case actionTypes.projects.CHANGE_PROJECT_NAME_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    // case actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_SUCCESS:
    case actionTypes.projects.CHANGE_PROJECT_NAME_SUCCESS:
    case actionTypes.employees.REMOVE_EMPLOYEE_FROM_PROJECT_SUCCESS:
      const updatedList = state.projectsList.map(p => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            ...action.payload
          }
        }

        return p
      })

      return {
        ...state,
        isFetching: false,
        projectsList: updatedList
      }

    case actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_SUCCESS:
      console.log('add employee:', action.payload)
      return {
        ...state,
        isFetching: false
      }

    case actionTypes.projects.CHANGE_PROJECT_NAME_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    default:
      return state
  }
}

export default projects
