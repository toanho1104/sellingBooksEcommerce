import { cartTypes } from '../types'

export const getCarts = (data, callback) => {
  return {
    type: cartTypes.GET_CARTS,
    payload: { data, callback },
  }
}
export const deleteCarts = (data, callback) => {
  return {
    type: cartTypes.GET_DELETE_CARTS,
    payload: { data, callback },
  }
}
export const addCarts = (data, callback) => {
  return {
    type: cartTypes.GET_ITEM_CARTS,
    payload: { data, callback },
  }
}
export const paymentCarts = (data, callback) => {
  return {
    type: cartTypes.GET_PAYMENT_CARTS,
    payload: { data, callback },
  }
}
