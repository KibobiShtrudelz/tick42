import { useState, useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import isEqual from 'lodash.isequal'

import Employee from './employee'

import actions from '../../redux/actions'

import { Wrap, SelectWrap } from './employees.styled'

const Employees = ({ projectId, employeesId }) => {
  const dispatch = useDispatch()

  const [selectedEmployee, setSelectedEmployee] = useState('')
  const [willAddEmployee, setWillAddEmployee] = useState(false)
  const [updatedEmployeesId, setUpdatedEmployeesId] = useState([])

  const [companiesList, employeesList, projectsList] = useSelector(
    ({
      companies: { companiesList },
      employees: { employeesList },
      projects: { projectsList }
    }) => [companiesList, employeesList, projectsList],
    shallowEqual
  )

  useEffect(() => {
    updatedEmployeesId.length > 0 &&
      dispatch(actions.employee.addEmployee(projectId, updatedEmployeesId))
  }, [dispatch, projectId, updatedEmployeesId])

  return (
    <>
      <Wrap className="EMPLOYEES_WRAPPER">
        <strong>
          <span>Employees ({employeesId?.length}):</span>
          <span className="add" onClick={() => setWillAddEmployee(!willAddEmployee)}>
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
                  const newList = employeesId
                  newList.push(selectedEmployee)
                  setUpdatedEmployeesId(newList)
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
