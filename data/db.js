const companies = require('./companies.json')
const companyAddresses = require('./company-addresses.json')
const employees = require('./employees.json')
const projects = require('./projects.json')

module.exports = () => ({
  companies,
  companyAddresses,
  employees,
  projects
})
