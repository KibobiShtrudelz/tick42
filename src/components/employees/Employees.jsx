import { useState, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import isEqual from 'lodash.isequal'

import Employee from './employee'

import actions from '../../redux/actions'

import { Wrap, SelectWrap } from './employees.styled'

const Employees = ({ projectId, employeesId }) => {
  const dispatch = useDispatch()

  const [selectedEmployee, setSelectedEmployee] = useState('')

  const [willAddEmployee, companiesList, employeesList, projectsList] = useSelector(
    ({
      common: { willAddEmployee },
      companies: { companiesList },
      employees: { employeesList },
      projects: { projectsList }
    }) => [willAddEmployee, companiesList, employeesList, projectsList],
    shallowEqual
  )

  return (
    <>
      <Wrap className="EMPLOYEES_WRAPPER">
        <strong>
          <span>Employees ({employeesId?.length}):</span>
          <span className="add" onClick={() => dispatch(actions.common.toggleAddEmployee())}>
            {willAddEmployee ? '-' : '+'} add employee 👨‍🔬
          </span>
        </strong>

        {willAddEmployee && (
          <SelectWrap>
            <select name="employees" onChange={e => setSelectedEmployee(e.target.value)}>
              <option>Select an Employee</option>
              {employeesList?.map(employee => (
                <option
                  key={employee.id}
                  value={employee.id}
                >{`${employee.firstName} ${employee.lastName}`}</option>
              ))}
            </select>

            <button
              disabled={selectedEmployee.length === 0}
              onClick={e => {
                if (e) {
                  const updatedEmployeesId = employeesId
                  updatedEmployeesId.push(selectedEmployee)
                  dispatch(actions.employee.addEmployee(projectId, updatedEmployeesId))
                }
              }}
            >
              Add
            </button>
          </SelectWrap>
        )}

        <ol className="employees-list">
          {employeesId?.map(eId => {
            const employee = employeesList?.filter(employee => employee.id === eId)[0]

            return (
              <Employee
                key={eId}
                projectId={projectId}
                employeesId={employeesId}
                projectsList={projectsList}
                companiesList={companiesList}
                employeesList={employeesList}
                {...employee}
              />
            )
          })}
        </ol>
      </Wrap>
    </>
  )
}

export default memo(Employees, (prevProps, nextProps) => isEqual(prevProps, nextProps))
