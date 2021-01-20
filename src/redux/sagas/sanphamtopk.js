import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { sanphamtopkTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(sanphamtopkTypes.GET_SANPHAM_TOPK, getsanphamtopk)
}

function* getsanphamtopk(action) {
  const { data, callback } = action?.payload
  const { k } = data
  console.log('data input', data)
  try {
    const response = yield call(() => axios.post(`${API_URL}/topk/sanphamtopk`))
    console.log('aaaaaaaaaaaaaaaa', response)

    yield put({
      type: sanphamtopkTypes.GET_SANPHAM_TOPK_SUCCESS,
      payload: { data: response?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
