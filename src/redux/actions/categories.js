import { categoryTypes } from '../types'

export const getCategorys = (data, callback) => {
  console.log('get categorys action')
  return {
    type: categoryTypes.GET_CATEGORIES,
    payload: { data, callback },
  }
}
