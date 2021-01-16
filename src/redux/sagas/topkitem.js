import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { topkitemTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(topkitemTypes.GET_ITEM_TOPK, getItemTopk)
}

function* getItemTopk(action) {
  const { data, callback } = action?.payload
  const { k } = data
  console.log('data input', data)
  try {
    const response = yield call(() => axios.post(`${API_URL}/topk/chitiet`))

    yield put({
      type: topkitemTypes.GET_ITEM_TOPK_SUCCESS,
      payload: { data: response?.data },
    })
    console.log(response)
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
