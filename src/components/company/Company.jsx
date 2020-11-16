import { useState } from 'react'

import { Wrap } from './company.styled'
import EmployeeJobArea from '../employeeJobArea'

const Company = ({ id, name }) => {
  const [showEmployeeJobArea, setShowEmployeeJobArea] = useState(false)

  return (
    <Wrap className="COMPANY_ITEM">
      <h1 onClick={e => e && setShowEmployeeJobArea(!showEmployeeJobArea)}>📁 {name}</h1>

      {showEmployeeJobArea && <EmployeeJobArea companyId={id} />}
    </Wrap>
  )
}

export default Company
