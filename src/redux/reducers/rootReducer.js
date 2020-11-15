import { combineReducers } from 'redux'

import common from '../reducers/common'
import companies from '../reducers/company'
import employees from '../reducers/employee'
import projects from '../reducers/project'

const rootReducer = combineReducers({ common, companies, employees, projects })

export default rootReducer
