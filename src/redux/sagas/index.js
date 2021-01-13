import { all } from 'redux-saga/effects'
import userSaga from './user'
import productSaga from './products'
import categorySaga from './categories'
import cartsSaga from './carts'

export default function* rootSaga() {
  yield all([
    userSaga(),
    productSaga(),
    categorySaga(),
    cartsSaga(),
  ])
}
