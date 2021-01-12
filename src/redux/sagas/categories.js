import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { categoryTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(categoryTypes.GET_CATEGORIES, getCategories)
}

function* getCategories(action) {
  const { data, callback } = action?.payload
  try {
    const response = yield call(() => axios.post(`${API_URL}/theloai`,))
    yield put({
      type: categoryTypes.GET_CATEGORIES_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
