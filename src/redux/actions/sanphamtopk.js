import { sanphamtopkTypes } from '../types'

export const getsanphamtopk = (data, callback) => {
  console.log('get topk action')
  return {
    type: sanphamtopkTypes.GET_SANPHAM_TOPK,
    payload: { data, callback },
  }
}
