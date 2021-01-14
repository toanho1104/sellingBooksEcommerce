import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { topkTypes } from '../types'
import { API_URL_TOPK } from '../../configs'

export default function* productSaga() {
  yield takeLatest(topkTypes.GET_TOPK, getTopk)
}

function* getTopk(action) {
  const { data, callback } = action?.payload
  const { k } = data
  console.log('data input', data)
  try {
    const response = yield call(() => axios.post('https://localhost:5001/api/TopK', { k: 3 }))
    console.log('call api')
    yield put({
      type: topkTypes.GET_TOPK_SUCCESS,
      payload: { data: response?.data },
    })
    console.log(response)
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
