import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../../redux/actions'

import { Li, DetailsWrap, DetailsRow } from './employee.styled'

const Employee = ({
  id,
  jobArea,
  lastName,
  jobTitle,
  projectId,
  firstName,
  companyId,
  employeesId,
  dateOfBirth,
  projectsList,
  employeesList,
  companiesList,
  onRemove
}) => {
  const [showDetails, setShowDetails] = useState(false)
  const [showJobAreaDetails, setShowJobAreaDetails] = useState(false)

  const [jobAreaEmployees, setJobAreaEmployees] = useState([])
  const [projectsBeingPartOf, setProjectsBeingPartOf] = useState([])
  const [jobAreaProjectsCount, setJobAreaProjectsCount] = useState(0)

  const dispatch = useDispatch()

  const months = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec'
  ]
  const bDay = new Date(dateOfBirth)
  const d = bDay.getDate()
  const m = months[bDay.getMonth() + 1]
  const y = bDay.getFullYear()
  const convertedBdate = `${d} ${m} ${y}`
  const employeesCompany = companiesList?.filter(c => c.id === companyId)[0]
  const companyName = employeesCompany?.name

  useEffect(() => {
    const listOfProjects = []

    projectsList?.map(project => {
      if (project?.employeesId?.length > 0) {
        return project.employeesId.filter(eId => {
          if (eId === id) {
            listOfProjects.push(project.name)

            return true
          }

          return false
        })
      }

      return null
    })

    setProjectsBeingPartOf(listOfProjects)
  }, [id, projectsList])

  useEffect(() => {
    const employeesIdInThisJobArea = []
    const employeesInThisJobArea = employeesList?.filter(e => {
      if (e.jobArea === jobArea) {
        employeesIdInThisJobArea.push(e.id)
        return true
      }

      return false
    })
    setJobAreaEmployees(employeesInThisJobArea)
  }, [jobArea, employeesList])

  useEffect(() => {
    const projectsCountJobAreaParticipateIn = []

    jobAreaEmployees.map(jobAreaEmployee => {
      projectsList?.map(project => {
        project.employeesId.filter(employeeId => {
          if (employeeId === jobAreaEmployee.id) {
            projectsCountJobAreaParticipateIn.push(employeeId)
            return true
          }

          return false
        })

        return null
      })

      return null
    })

    setJobAreaProjectsCount(projectsCountJobAreaParticipateIn.length)
  }, [projectsList, jobAreaEmployees])

  return (
    <Li>
      <div className="employee-wrap">
        <span onClick={e => e && setShowDetails(!showDetails)}>
          <span>📁</span> {`${firstName} ${lastName}`}{' '}
        </span>

        <button
          className="remove"
          onClick={e => {
            if (e) {
              const newList = employeesId?.filter(employeeId => employeeId !== id)
              dispatch(actions.employee.removeEmployee(projectId, newList))
              // onRemove && onRemove()
            }
          }}
        >
          remove
        </button>
      </div>

      {showDetails && (
        <DetailsWrap>
          <DetailsRow>
            <div>
              <b>ID</b>
            </div>

            <div>
              <span>{id}</span>
            </div>
          </DetailsRow>

          <DetailsRow>
            <div>
              <b>Full name</b>
            </div>

            <div>
              <span>{`${firstName} ${lastName}`}</span>
            </div>
          </DetailsRow>

          <DetailsRow>
            <div>
              <b>Date of Birth</b>
            </div>

            <div>
              <span>{convertedBdate}</span>
            </div>
          </DetailsRow>

          <DetailsRow>
            <div>
              <b>Job Title</b>
            </div>

            <div>
              <span>{jobTitle}</span>
            </div>
          </DetailsRow>

          <DetailsRow>
            <div>
              <b>Job Area</b>
            </div>

            <div className="job-area-wrap">
              <span
                className="clickable"
                onClick={e => e && setShowJobAreaDetails(!showJobAreaDetails)}
              >
                {jobArea}
              </span>

              {showJobAreaDetails && (
                <div className="job-area-details">
                  <div>
                    <span>Employees count in this Job Area is </span>
                    <span>
                      <b>{jobAreaEmployees.length}</b>
                    </span>
                  </div>

                  <div>
                    <span>Projects count this area is part of is </span>
                    <span>
                      <b>{jobAreaProjectsCount}</b>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </DetailsRow>

          <DetailsRow>
            <div>
              <b>Company</b>
            </div>

            <div>
              <span>{companyName}</span>
            </div>
          </DetailsRow>

          <DetailsRow>
            <div>
              <b>Projects being part of</b>
            </div>

            <ol>
              {projectsBeingPartOf?.map((projectName, idx) => (
                <li key={idx}>
                  {idx + 1}. {projectName}
                </li>
              ))}
            </ol>
          </DetailsRow>
        </DetailsWrap>
      )}
    </Li>
  )
}

export default Employee
