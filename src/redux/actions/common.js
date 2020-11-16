import actionTypes from '../constants'

export const toggleNewProjectForm = companyId => ({
  type: actionTypes.common.TOGGLE_NEW_PROJECT_FORM,
  companyId
})
