import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { cartTypes } from '../types'
import { API_URL } from '../../configs'

export default function* productSaga() {
  yield takeLatest(cartTypes.GET_CARTS, getCarts)
  yield takeLatest(cartTypes.GET_DELETE_CARTS, getDeleteCart)
  yield takeLatest(cartTypes.GET_ITEM_CARTS, getItemCard)
  yield takeLatest(cartTypes.GET_PAYMENT_CARTS, getPayMentCard)
  yield takeLatest(cartTypes.GET_PAYMENT_PLUS, getPayMentPlus)
  yield takeLatest(cartTypes.GET_PAYMENT_MINUS, getPayMentMinus)
}

function* getCarts(action) {
  const { data, callback } = action?.payload

  try {
    const response = yield call(() => axios.post(`${API_URL}/giohang`))

    yield put({
      type: cartTypes.GET_CARTS_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getDeleteCart(action) {
  const { data, callback } = action?.payload
  const { id } = data
  console.log(id)
  try {
    const response = yield call(() => axios.post(`${API_URL}/giohang/xoa`, {
      id,
    }))

    yield put({
      type: cartTypes.GET_DELETE_CARTS_SUCCESS,
      payload: { data: response?.data },
    })

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getItemCard(action) {
  const { data, callback } = action?.payload
  const {
    id, tensanpham, giaban, imageurl, soluong,
  } = data
  try {
    const response = yield call(() => axios.post(`${API_URL}/giohang/them`, {
      id, tensanpham, giaban, imageurl, soluong,
    }))
    yield put({
      type: cartTypes.GET_DELETE_CARTS_SUCCESS,
      payload: { data: response?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getPayMentCard(action) {
  const { data, callback } = action?.payload
  const {
    id, tensanpham, giaban, imageurl, soluong, diachi, tongtien,
  } = data

  try {
    const response = yield call(() => axios.post(`${API_URL}/giohang/thanhtoan`, {
      id, diachi, tongtien,
    }))
    yield put({
      type: cartTypes.GET_PAYMENT_CARTS_SUCCESS,
      payload: { data: response?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getPayMentPlus(action) {
  const { data, callback } = action?.payload
  const {
    id,
  } = data
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', id)
  try {
    const response = yield call(() => axios.post(`${API_URL}/giohang/tangsoluong`, {
      id,
    }))
    yield put({
      type: cartTypes.GET_PAYMENT_PLUS_SUCCESS,
      payload: { data: response?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getPayMentMinus(action) {
  const { data, callback } = action?.payload
  const {
    id,
  } = data
  console.log('thanh taonhsssssssss', data)
  try {
    const response = yield call(() => axios.post(`${API_URL}/giohang/giamsoluong`, {
      id,
    }))
    yield put({
      type: cartTypes.GET_PAYMENT_MINUS_SUCCESS,
      payload: { data: response?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
