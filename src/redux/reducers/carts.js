/* eslint-disable no-case-declarations */
import { cartTypes } from '../types'

const initState = []

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.GET_CARTS_SUCCESS:
      return action?.payload?.data?.data
    case cartTypes.GET_DELETE_CARTS_SUCCESS:
      return { ...state }
    case cartTypes.GET_ITEM_CARTS_SUCCESS:
      return { ...state }
    case cartTypes.GET_PAYMENT_CARTS_SUCCESS:
      return { ...state }
    default:
      return state
  }
}

export default productReducer
