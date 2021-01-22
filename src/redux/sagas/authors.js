import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { authorTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(authorTypes.GET_AUTHOR, getAuthor)
}

function* getAuthor(action) {
  const { data, callback } = action?.payload
  try {
    const response = yield call(() => axios.post(`${API_URL}/theloai`,))
    yield put({
      type: authorTypes.GET_AUTHOR_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
