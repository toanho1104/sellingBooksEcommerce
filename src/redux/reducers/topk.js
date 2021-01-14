/* eslint-disable no-case-declarations */
import { topkTypes } from '../types'

const initState = []

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case topkTypes.GET_TOPK_SUCCESS:
      return action?.payload?.data
    default:
      return state
  }
}

export default productReducer
