const actionTypes = {
  common: {
    TOGGLE_NEW_PROJECT_FORM: 'TOGGLE_NEW_PROJECT_FORM'
  },

  companies: {
    FETCH_COMPANIES_FETCHING: 'FETCH_COMPANIES_FETCHING',
    FETCH_COMPANIES_SUCCESS: 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR: 'FETCH_COMPANIES_ERROR'
  },

  companyAddresses: {
    FETCH_COMPANY_ADDRESSES_FETCHING: 'FETCH_COMPANY_ADDRESSES_FETCHING',
    FETCH_COMPANY_ADDRESSES_SUCCESS: 'FETCH_COMPANY_ADDRESSES_SUCCESS',
    FETCH_COMPANY_ADDRESSES_ERROR: 'FETCH_COMPANY_ADDRESSES_ERROR'
  },

  employees: {
    FETCH_EMPLOYEES_FETCHING: 'FETCH_EMPLOYEES_FETCHING',
    FETCH_EMPLOYEES_SUCCESS: 'FETCH_EMPLOYEES_SUCCESS',
    FETCH_EMPLOYEES_ERROR: 'FETCH_EMPLOYEES_ERROR',

    REMOVE_EMPLOYEE_FROM_PROJECT_FETCHING: 'REMOVE_EMPLOYEE_FROM_PROJECT_FETCHING',
    REMOVE_EMPLOYEE_FROM_PROJECT_SUCCESS: 'REMOVE_EMPLOYEE_FROM_PROJECT_SUCCESS',
    REMOVE_EMPLOYEE_FROM_PROJECT_ERROR: 'REMOVE_EMPLOYEE_FROM_PROJECT_ERROR'
  },

  projects: {
    FETCH_PROJECTS_FETCHING: 'FETCH_PROJECTS_FETCHING',
    FETCH_PROJECTS_SUCCESS: 'FETCH_PROJECTS_SUCCESS',
    FETCH_PROJECTS_ERROR: 'FETCH_PROJECTS_ERROR',

    CHANGE_PROJECT_NAME_FETCHING: 'CHANGE_PROJECT_NAME_FETCHING',
    CHANGE_PROJECT_NAME_SUCCESS: 'CHANGE_PROJECT_NAME_SUCCESS',
    CHANGE_PROJECT_NAME_ERROR: 'CHANGE_PROJECT_NAME_ERROR',

    ADD_EMPLOYEE_TO_PROJECT_FETCHING: 'ADD_EMPLOYEE_TO_PROJECT_FETCHING',
    ADD_EMPLOYEE_TO_PROJECT_SUCCESS: 'ADD_EMPLOYEE_TO_PROJECT_SUCCESS',
    ADD_EMPLOYEE_TO_PROJECT_ERROR: 'ADD_EMPLOYEE_TO_PROJECT_ERROR',

    CREATE_PROJECT_FETCHING: 'CREATE_PROJECT_FETCHING',
    CREATE_PROJECT_SUCCESS: 'CREATE_PROJECT_SUCCESS',
    CREATE_PROJECT_ERROR: 'CREATE_PROJECT_ERROR',

    DELETE_PROJECT_FETCHING: 'DELETE_PROJECT_FETCHING',
    DELETE_PROJECT_SUCCESS: 'DELETE_PROJECT_SUCCESS',
    DELETE_PROJECT_ERROR: 'DELETE_PROJECT_ERROR'
  }
}

export default actionTypes
