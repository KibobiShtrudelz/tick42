import { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import isEqual from 'lodash.isequal'

import Spinner from '../spinner'
import Projects from '../projects'

import actions from '../../redux/actions'

import { Wrap } from './employeeJobArea.styled.js'

const EmployeeJobArea = ({ companyId }) => {
  console.log('companyId', companyId)
  const [selectedCompany, setSelectedCompany] = useState({})

  const dispatch = useDispatch()

  const [companiesAddresses] = useSelector(
    ({ companies: { companiesAddresses } }) => [companiesAddresses],
    shallowEqual
  )

  useEffect(() => {
    dispatch(actions.company.fetchCompaniesAddresses())
  }, [dispatch])

  useEffect(() => {
    companiesAddresses.length > 0 &&
      setSelectedCompany(companiesAddresses.find(address => address.companyId === companyId))
  }, [companyId, companiesAddresses])

  return (
    <Wrap className="EmployeeJobArea_WRAPPER">
      <div className="address-wrapper">
        <h3>Address:</h3>

        <div>
          <b>
            <span>Country </span>
          </b>
          <span>{selectedCompany?.country || <Spinner size="1rem" />}</span>
        </div>

        <div>
          <b>
            <span>City </span>
          </b>
          <span>{selectedCompany?.city || <Spinner size="1rem" />}</span>
        </div>

        <div>
          <b>
            <span>Street </span>
          </b>
          <span>{selectedCompany?.street || <Spinner size="1rem" />}</span>
        </div>

        <div>
          <b>
            <span>State </span>
          </b>
          <span>{selectedCompany?.state || <Spinner size="1rem" />}</span>
        </div>
      </div>

      <Projects companyId={companyId} />
    </Wrap>
  )
}

export default memo(EmployeeJobArea, (prevProps, nextProps) => isEqual(prevProps, nextProps))
