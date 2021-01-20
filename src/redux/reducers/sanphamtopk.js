import { sanphamtopkTypes } from '../types'

const initState = []

const sanphamtopkReducer = (state = initState, action) => {
  switch (action.type) {
    case sanphamtopkTypes.GET_SANPHAM_TOPK_SUCCESS:
      return action?.payload?.data?.data
    default:
      return state
  }
}

export default sanphamtopkReducer
