import APIS from '../../apis'
import { checkStatus } from './'
import actionTypes from '../constants'

export const fetchCompanies = () => dispatch => {
  dispatch({ type: actionTypes.companies.FETCH_COMPANIES_FETCHING })

  checkStatus(
    APIS.companies.root,
    'GET',
    actionTypes.companies.FETCH_COMPANIES_SUCCESS,
    actionTypes.companies.FETCH_COMPANIES_ERROR,
    dispatch
  )
}

export const fetchCompaniesAddresses = () => dispatch => {
  dispatch({ type: actionTypes.companyAddresses.FETCH_COMPANY_ADDRESSES_FETCHING })

  checkStatus(
    APIS.addresses.root,
    'GET',
    actionTypes.companyAddresses.FETCH_COMPANY_ADDRESSES_SUCCESS,
    actionTypes.companyAddresses.FETCH_COMPANY_ADDRESSES_ERROR,
    dispatch
  )
}
