import axios from 'axios'

import APIS from '../../apis'
import { checkStatus } from './'
import actionTypes from '../constants'

export const getProjects = () => dispatch => {
  dispatch({ type: actionTypes.projects.FETCH_PROJECTS_FETCHING })

  checkStatus(
    APIS.projects.getProjects,
    'GET',
    actionTypes.projects.FETCH_PROJECTS_SUCCESS,
    actionTypes.projects.FETCH_PROJECTS_ERROR,
    dispatch
  )
}

export const getProjectById = async id => {
  const res = await axios(APIS.projects.getProjectById(id))
  return res.data
}

export const changeProjectNameById = (id, newName) => dispatch => {
  console.log('newName', newName)
  dispatch({ type: actionTypes.projects.CHANGE_PROJECT_NAME_FETCHING })

  checkStatus(
    APIS.projects.updateProject(id),
    'PATCH',
    actionTypes.projects.CHANGE_PROJECT_NAME_SUCCESS,
    actionTypes.projects.CHANGE_PROJECT_NAME_ERROR,
    dispatch,
    { name: newName }
    // dispatch(getProjects())
  )
}

export const addEmployee = (projectId, employeeData) => dispatch => {
  dispatch({ type: actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_FETCHING })

  checkStatus(
    APIS.employees.addRemoveEmployee(projectId),
    'PATCH',
    actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_SUCCESS,
    actionTypes.projects.ADD_EMPLOYEE_TO_PROJECT_ERROR,
    dispatch,
    { employeesId: [employeeData.id] }
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
