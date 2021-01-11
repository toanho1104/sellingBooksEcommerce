/* eslint-disable no-case-declarations */
import { userTypes } from '../types'

const initState = {
  id: '',
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userTypes.REGISTER_USER_SUCCESS:
      return { ...state }
    case userTypes.LOGIN_USER_SUCCESS:
      const { id } = action?.payload?.data
      return { ...state, id }
    case userTypes.UPDATE_USER_SUCCESS:
      return { ...state }
    case userTypes.LOADING_PROFILE_USER_SUCCESS:
      return action?.payload?.data?.data
    default:
      return state
  }
}

export default userReducer
