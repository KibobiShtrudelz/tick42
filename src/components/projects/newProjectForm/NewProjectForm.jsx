import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import actions from '../../../redux/actions'

import { Wrap, Form } from './newProjectForm.styled'

const NewProjectForm = ({ companyId }) => {
  const [formState, setFormState] = useState({
    id: uuidv4(),
    name: '',
    department: '',
    employeesId: [],
    companyId
  })

  const dispatch = useDispatch()

  const handleInputChange = e => {
    if (e) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <Wrap>
      <Form
        onSubmit={e => {
          if (e) {
            e.preventDefault()
            dispatch(actions.project.createProject(formState))
            dispatch(actions.common.toggleNewProjectForm(''))
          }
        }}
      >
        <span
          className="close"
          onClick={() => {
            dispatch(actions.common.toggleNewProjectForm(''))
            setFormState({ ...formState, id: uuidv4(), name: '', department: '' })
          }}
        >
          X
        </span>

        <input
          name="companyId"
          value={`Company ID: ${formState.companyId}`}
          placeholder="Company ID"
          disabled
          onChange={null}
        />

        <input
          name="id"
          value={`Project ID: ${formState.id}`}
          placeholder="Project ID"
          disabled
          onChange={null}
        />

        <input
          name="name"
          value={formState.name}
          placeholder="Project name"
          onChange={handleInputChange}
        />

        <input
          name="department"
          value={formState.department}
          placeholder="Department"
          onChange={handleInputChange}
        />

        <button type="submit" disabled={!formState.name || !formState.department}>
          Create
        </button>
      </Form>
    </Wrap>
  )
}

export default NewProjectForm
