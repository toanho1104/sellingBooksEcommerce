import { authorTypes } from '../types'

export const getAuthor = (data, callback) => {
  console.log('get categorys action')
  return {
    type: authorTypes.GET_AUTHOR,
    payload: { data, callback },
  }
}
