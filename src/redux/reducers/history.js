/* eslint-disable no-case-declarations */
import { historyTypes } from '../types'

const initState = []

const historyReducer = (state = initState, action) => {
  switch (action.type) {
    case historyTypes.GET_HISTORY_SUCCESS:
      return action?.payload?.data?.data
    case historyTypes.GET_HOADON_SUCCESS:
      return action?.payload?.data?.data
    default:
      return state
  }
}

export default historyReducer
