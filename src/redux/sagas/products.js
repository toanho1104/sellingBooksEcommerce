import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { productTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(productTypes.GET_PRODUCTS, getProducts)
  yield takeLatest(productTypes.ADD_PRODUCTS, addProducts)
  yield takeLatest(productTypes.DELETE_PRODUCTS, deleteProducts)
  yield takeLatest(productTypes.UPDATE_PRODUCTS, updateProducts)
}

function* getProducts(action) {
  const { data, callback } = action?.payload

  try {
    const response = yield call(() => axios.post(`${API_URL}/sanpham`))

    yield put({
      type: productTypes.GET_PRODUCTS_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* addProducts(action) {
  const { data, callback } = action?.payload
  const {
    tensanpham, giaban, idtacgia, idtheloai, mota, image,
  } = data
  try {
    const response = yield call(() => axios.post(`${API_URL}/sanpham/themsanpham`, {
      tensanpham, giaban, idtacgia, idtheloai, mota, image,
    }))

    yield put({
      type: productTypes.ADD_PRODUCTS_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* deleteProducts(action) {
  const { data, callback } = action?.payload
  const {
    id,
  } = data
  try {
    const response = yield call(() => axios.post(`${API_URL}/sanpham/xoasanpham`, {
      id,
    }))

    yield put({
      type: productTypes.DELETE_PRODUCTS_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* updateProducts(action) {
  const { data, callback } = action?.payload
  const {
    id, tensanpham, giaban, idtacgia, idtheloai, mota, image,
  } = data
  try {
    const response = yield call(() => axios.post(`${API_URL}/sanpham/capnhatsanpham`, {
      id, tensanpham, giaban, idtacgia, idtheloai, mota, image,
    }))

    yield put({
      type: productTypes.UPDATE_PRODUCTS_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
