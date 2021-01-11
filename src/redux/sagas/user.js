import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { userTypes } from '../types'
import { API_URL } from '../../configs'

export default function* userSaga() {
  yield takeLatest(userTypes.LOGIN_USER, loginUser)
  yield takeLatest(userTypes.REGISTER_USER, registerUser)
  yield takeLatest(userTypes.LOADING_PROFILE_USER, loadingProfileUser)
  yield takeLatest(userTypes.UPDATE_PROFILE_USER, updateProfileUser)
}

function* loginUser(action) {
  const { data, callback } = action?.payload
  const {
    tendangnhap, matkhau, hovaten, email, sodienthoai,
  } = data

  try {
    const response = yield call(() => axios.post(`${API_URL}/taikhoan/dangnhap`, {
      tendangnhap,
      matkhau,
    }))
    if (response?.data?.success) {
      yield put({
        type: userTypes.LOGIN_USER_SUCCESS,
        payload: { data: response?.data },
      })
    }
    callback(response.data)
    console.log('saga collback', response.data)
  } catch (error) {
    console.log(error)
    callback(error?.response?.data)
  }
}

function* registerUser(action) {
  const { data, callback } = action?.payload
  const {
    tendangnhap, matkhau, hovaten, email, sodienthoai, diachi,
  } = data
  // console.log(data)
  try {
    const response = yield call(() => axios.post(`${API_URL}/taikhoan/dangky`, {
      hovaten, email, sodienthoai, tendangnhap, matkhau, diachi,
    }))

    yield put({
      type: userTypes.REGISTER_USER_SUCCESS,
      payload: { data: response.data },
    })

    callback(response?.data)
  } catch (error) {
    console.tron.log({ error: error.message })
  }
}
function* loadingProfileUser(action) {
  const { data, callback } = action?.payload
  const {
    tendangnhap,
  } = data
  console.log('iddddddddddddddddddd', data)
  try {
    const response = yield call(() => axios.post(`${API_URL}/taikhoan/thongtintaikhoan`, {
      tendangnhap,
    }))
    console.tron.log({ bbbb: response })
    yield put({
      type: userTypes.LOADING_PROFILE_USER_SUCCESS,
      payload: { data: response.data },
    })
    callback(response.data)
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar', response.data)
  } catch (error) {
    callback(error?.response?.data)
    // console.tron.log({ error: error.message })
  }
}
function* updateProfileUser(action) {
  const { data, callback } = action?.payload
  const {
    matkhau, hovaten, email, sodienthoai, diachi, tendangnhap,
  } = data

  try {
    const response = yield call(() => axios.post(`${API_URL}/taikhoan/capnhatthongtin`,
      data))
    console.tron.log({ aaa: response })
    console.log('cap nhat thong tin nguoi dung', response)
    if (response?.data?.success) {
      yield put({
        type: userTypes.LOADING_PROFILE_USER_SUCCESS,
        payload: { data: response.data },
      })
    }
    console.log('up date 111111111111111111111111111111111r', response.data)
    callback(response.data)
  } catch (error) {
    callback(error?.response?.data)
    // console.tron.log({ error: error.message })
  }
}
