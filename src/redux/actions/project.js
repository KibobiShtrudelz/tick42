import axios from 'axios'

import APIS from '../../apis'
import { checkStatus } from './'
import actionTypes from '../constants'

export const getProjects = () => async dispatch => {
  dispatch({ type: actionTypes.projects.FETCH_PROJECTS_FETCHING })

  checkStatus(
    APIS.projects.root,
    'GET',
    actionTypes.projects.FETCH_PROJECTS_SUCCESS,
    actionTypes.projects.FETCH_PROJECTS_ERROR,
    dispatch
  )
}

export const changeProjectNameById = (id, newName) => dispatch => {
  dispatch({ type: actionTypes.projects.CHANGE_PROJECT_NAME_FETCHING })

  checkStatus(
    APIS.projects.projectById(id),
    'PATCH',
    actionTypes.projects.CHANGE_PROJECT_NAME_SUCCESS,
    actionTypes.projects.CHANGE_PROJECT_NAME_ERROR,
    dispatch,
    { name: newName }
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

export const createProject = newProject => dispatch => {
  dispatch({ type: actionTypes.projects.CREATE_PROJECT_FETCHING })

  checkStatus(
    APIS.projects.root,
    'POST',
    actionTypes.projects.CREATE_PROJECT_SUCCESS,
    actionTypes.projects.CREATE_PROJECT_ERROR,
    dispatch,
    newProject
  )
}

export const deleteProjectById = projectId => dispatch => {
  dispatch({ type: actionTypes.projects.DELETE_PROJECT_FETCHING })

  axios({
    url: APIS.employees.addRemoveEmployee(projectId),
    method: 'DELETE'
  })
    .then(res => {
      if (res.status >= 200 && res.status < 400) {
        dispatch({ type: actionTypes.projects.DELETE_PROJECT_SUCCESS, projectId })
      } else {
        dispatch({ type: actionTypes.projects.DELETE_PROJECT_ERROR, error: res.data })
      }
    })
    .catch(error => dispatch({ type: actionTypes.projects.DELETE_PROJECT_ERROR, error }))
}
