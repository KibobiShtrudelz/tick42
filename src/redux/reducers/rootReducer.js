import { combineReducers } from 'redux'

import companies from '../reducers/company'
import employees from '../reducers/employee'
import projects from '../reducers/project'

const rootReducer = combineReducers({ companies, employees, projects })

export default rootReducer
