import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { productTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(productTypes.GET_PRODUCTS, getProducts)
}

function* getProducts(action) {
  const { data, callback } = action?.payload

  try {
    const response = yield call(() => axios.post(`${API_URL}/sanpham`))
    // console.log('call data product', response)
    // if (response?.data?.success) {
    yield put({
      type: productTypes.GET_PRODUCTS_SUCCESS,
      payload: { data: response?.data },
    })
    // }
    // console.log(response?.data)
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
