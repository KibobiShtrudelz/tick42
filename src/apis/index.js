const APIS = {
  companies: {
    getCompanies: 'http://localhost:3004/companies'
  },

  addresses: {
    getCompanyAddresses: 'http://localhost:3004/companyAddresses'
  },

  employees: {
    getEmployees: 'http://localhost:3004/employees',
    addRemoveEmployee: projectId => `http://localhost:3004/projects/${projectId}`
  },

  projects: {
    getProjects: 'http://localhost:3004/projects',
    getProjectById(id) {
      return `${this.getProjects}/${id}`
    },
    updateProject(id) {
      return `${this.getProjects}/${id}`
    }
  }
}

export default APIS
