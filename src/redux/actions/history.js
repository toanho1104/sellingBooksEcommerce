import { historyTypes } from '../types'

export const getHistory = (data, callback) => {
  return {
    type: historyTypes.GET_HISTORY,
    payload: { data, callback },
  }
}
