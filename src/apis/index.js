const APIS = {
  companies: {
    root: 'http://localhost:3004/companies',
    companyById(id) {
      return `${this.root}/${id}`
    }
  },

  addresses: {
    root: 'http://localhost:3004/companyAddresses'
  },

  employees: {
    root: 'http://localhost:3004/employees',
    addRemoveEmployee: projectId => `http://localhost:3004/projects/${projectId}`
  },

  projects: {
    root: 'http://localhost:3004/projects',
    projectById(id) {
      return `${this.root}/${id}`
    }
  }
}

export default APIS
