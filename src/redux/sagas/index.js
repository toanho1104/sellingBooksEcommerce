import { all } from 'redux-saga/effects'
import userSaga from './user'
import productSaga from './products'
import categorySaga from './categories'
import cartsSaga from './carts'
import topkSaga from './topk'
import topkitmeSaga from './topkitem'
import historySaga from './history'
import sanphamtopkSaga from './sanphamtopk'

export default function* rootSaga() {
  yield all([
    userSaga(),
    productSaga(),
    categorySaga(),
    cartsSaga(),
    topkSaga(),
    topkitmeSaga(),
    historySaga(),
    sanphamtopkSaga(),
  ])
}
