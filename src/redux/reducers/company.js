import actionTypes from '../constants'

const initialState = {
  isFetching: false,
  companiesList: [],
  companiesAddresses: [],
  error: ''
}

const companies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.companies.FETCH_COMPANIES_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case actionTypes.companies.FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        companiesList: action.payload
      }

    case actionTypes.companies.FETCH_COMPANIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case actionTypes.companyAddresses.FETCH_COMPANY_ADDRESSES_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case actionTypes.companyAddresses.FETCH_COMPANY_ADDRESSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        companiesAddresses: action.payload
      }

    case actionTypes.companyAddresses.FETCH_COMPANY_ADDRESSES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    default:
      return state
  }
}

export default companies
