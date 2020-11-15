import { useState } from 'react'

import { Wrap } from './company.styled'
import EmployeeJobArea from '../employeeJobArea'

const Company = ({ id, name, className }) => {
  const [showEmployeeJobArea, setShowEmployeeJobArea] = useState(false)

  return (
    <Wrap className={className}>
      <h1 onClick={e => e && setShowEmployeeJobArea(!showEmployeeJobArea)}>📁 {name}</h1>

      {showEmployeeJobArea && <EmployeeJobArea companyId={id} />}
    </Wrap>
  )
}

export default Company
