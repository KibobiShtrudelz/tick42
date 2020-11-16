import { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../../redux/actions'

import Employees from '../../employees'

import { Wrap, ProjectDetails } from './project.styled'

const Project = ({ id, name, department, employeesId }) => {
  const [projectName, setProjectName] = useState(name)
  const [isProjectSelected, setIsProjectSelected] = useState(false)

  const dispatch = useDispatch()

  return (
    <Wrap className="PROJECT_WRAPPER">
      <span onClick={e => e && setIsProjectSelected(!isProjectSelected)}>📁 {name}</span>

      {isProjectSelected && (
        <ProjectDetails>
          <div>
            <button
              className="delete"
              onClick={() => dispatch(actions.project.deleteProjectById(id))}
            >
              Delete Project
            </button>
          </div>

          <div>
            <span>Department:</span>
            <b>
              <span>{department}</span>
            </b>
          </div>

          <div>
            <form
              onSubmit={e => {
                if (e) {
                  e.preventDefault()

                  projectName !== name &&
                    projectName?.length > 0 &&
                    dispatch(actions.project.changeProjectNameById(id, projectName))
                }
              }}
            >
              <input
                type="text"
                name="name"
                value={projectName}
                onChange={e => e && setProjectName(e.target.value)}
              />

              <button type="submit">Change name</button>
            </form>
          </div>

          <Employees projectId={id} employeesId={employeesId} />
        </ProjectDetails>
      )}
    </Wrap>
  )
}

export default Project
