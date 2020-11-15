import { useState, useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import isEqual from 'lodash.isequal'

import Project from './project'

import actions from '../../redux/actions'

import { Wrap } from './projects.styled'

const Projects = ({ companyId }) => {
  const [selectedCompanyProjects, setSelectedCompanyProjects] = useState([])

  const dispatch = useDispatch()

  const [projectsList] = useSelector(
    ({ projects: { projectsList } }) => [projectsList],
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
    <Wrap className="PROJECTS_WRAPPER">
      <h3>Projects ({selectedCompanyProjects?.length}):</h3>

      <div>
        <ol>
          {selectedCompanyProjects?.map(project => (
            <li key={project.id}>
              <Project {...project} />
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  )
}

export default memo(Projects, (prevProps, nextProps) => isEqual(prevProps, nextProps))
