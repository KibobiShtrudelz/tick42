import axios from 'axios'

import * as company from './company'
import * as employee from './employee'
import * as project from './project'

const actions = { company, employee, project }

export default actions

export const checkStatus = async (
  url,
  method,
  successType,
  errorType,
  dispatch,
  data = {},
  onSuccessCb
) => {
  try {
    const res = await axios({
      url,
      method,
      data
    })

    if (res.status >= 200 && res.status < 400) {
      dispatch({ type: successType, payload: res.data })

      onSuccessCb && typeof onSuccessCb === 'function' && onSuccessCb()
    } else {
      dispatch({ type: errorType, error: res.data })
    }
  } catch (error) {
    dispatch({ type: errorType, error })
  }
}
