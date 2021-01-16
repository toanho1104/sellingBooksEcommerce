import { topkitemTypes } from '../types'

export const getitemtopk = (data, callback) => {
  return {
    type: topkitemTypes.GET_ITEM_TOPK,
    payload: { data, callback },
  }
}
