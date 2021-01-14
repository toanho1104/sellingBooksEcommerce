import { topkTypes } from '../types'

export const gettopk = (data, callback) => {
  console.log('get topk action')
  return {
    type: topkTypes.GET_TOPK,
    payload: { data, callback },
  }
}
