import { productTypes } from '../types'

export const getProducts = (data, callback) => {
  return {
    type: productTypes.GET_PRODUCTS,
    payload: { data, callback },
  }
}
export const addProducts = (data, callback) => {
  return {
    type: productTypes.ADD_PRODUCTS,
    payload: { data, callback },
  }
}
export const deleteProducts = (data, callback) => {
  return {
    type: productTypes.DELETE_PRODUCTS,
    payload: { data, callback },
  }
}
export const updateProducts = (data, callback) => {
  return {
    type: productTypes.UPDATE_PRODUCTS,
    payload: { data, callback },
  }
}
