/* eslint-disable no-case-declarations */
import { categoryTypes } from '../types'

const initState = []

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.GET_CATEGORIES_SUCCESS:
      return action?.payload?.data?.data
    default:
      return state
  }
}

export default productReducer
