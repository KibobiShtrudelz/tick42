import { useState, useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import isEqual from 'lodash.isequal'

import Project from './project'
import NewProjectForm from './newProjectForm'

import actions from '../../redux/actions'

import { Wrap } from './projects.styled'

const Projects = ({ companyId }) => {
  const [selectedCompanyProjects, setSelectedCompanyProjects] = useState([])

  const dispatch = useDispatch()

  const [projectsList, newProjectFormCallerId] = useSelector(
    ({ common: { newProjectFormCallerId }, projects: { projectsList } }) => [
      projectsList,
      newProjectFormCallerId
    ],
    shallowEqual
  )

  useEffect(() => {
    dispatch(actions.project.getProjects())
    dispatch(actions.employee.getEmployees())
  }, [dispatch])

  useEffect(() => {
    companyId &&
      projectsList?.length > 0 &&
      setSelectedCompanyProjects(projectsList?.filter(p => p.companyId === companyId))
  }, [companyId, projectsList])

  return (
    <Wrap>
      <h3>Projects ({selectedCompanyProjects?.length}):</h3>

      <button
        className="create-project-btn"
        onClick={() => dispatch(actions.common.toggleNewProjectForm(companyId))}
      >
        Create project
      </button>

      {newProjectFormCallerId === companyId && <NewProjectForm companyId={companyId} />}

      <div>
        <ol>
          {selectedCompanyProjects?.map(project => (
            <li key={project.id}>
              <Project {...project} />{' '}
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  )
}

export default memo(Projects, (prevProps, nextProps) => isEqual(prevProps, nextProps))
