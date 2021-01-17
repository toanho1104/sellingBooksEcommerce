import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { historyTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(historyTypes.GET_HISTORY, getHistory)
}

function* getHistory(action) {
  const { data, callback } = action?.payload

  try {
    const response = yield call(() => axios.post(`${API_URL}/lichsumuahang`))

    yield put({
      type: historyTypes.GET_HISTORY_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
