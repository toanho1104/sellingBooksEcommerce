import { topkitemTypes } from '../types'

const initState = []

const topkitemReducer = (state = initState, action) => {
  switch (action.type) {
    case topkitemTypes.GET_ITEM_TOPK_SUCCESS:
      return action?.payload?.data?.data
    default:
      return state
  }
}

export default topkitemReducer
