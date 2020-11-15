import APIS from '../../apis'
import { checkStatus } from './'
import actionTypes from '../constants'

export const getEmployees = () => dispatch => {
  dispatch({ type: actionTypes.employees.FETCH_EMPLOYEES_FETCHING })

  checkStatus(
    APIS.employees.getEmployees,
    'GET',
    actionTypes.employees.FETCH_EMPLOYEES_SUCCESS,
    actionTypes.employees.FETCH_EMPLOYEES_ERROR,
    dispatch
  )
}

export const addEmployee = (projectId, newList) => dispatch => {
  dispatch({ type: actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_FETCHING })

  checkStatus(
    APIS.employees.addRemoveEmployee(projectId),
    'PATCH',
    actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_SUCCESS,
    actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_ERROR,
    dispatch,
    { employeesId: newList }
  )
}

export const removeEmployee = (projectId, newList) => dispatch => {
  dispatch({ type: actionTypes.employees.REMOVE_EMPLOYEE_FROM_PROJECT_FETCHING })

  checkStatus(
    APIS.employees.addRemoveEmployee(projectId),
    'PATCH',
    actionTypes.employees.REMOVE_EMPLOYEE_FROM_PROJECT_SUCCESS,
    actionTypes.employees.REMOVE_EMPLOYEE_FROM_PROJECT_ERROR,
    dispatch,
    { employeesId: newList }
  )
}
