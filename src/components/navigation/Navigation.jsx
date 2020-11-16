import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import Company from '../company'

import actions from '../../redux/actions'

import { Wrap } from './navigation.styled.js'

const Navigation = () => {
  const dispatch = useDispatch()

  const [companiesList] = useSelector(
    ({ companies: { companiesList } }) => [companiesList],
    shallowEqual
  )

  useEffect(() => {
    dispatch(actions.company.fetchCompanies())
  }, [dispatch])

  return (
    <Wrap>
      {companiesList?.map(company => (
        <div key={company.id}>
          <Company {...company} />
          <hr />
        </div>
      ))}
    </Wrap>
  )
}

export default Navigation
