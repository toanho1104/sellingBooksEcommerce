import { combineReducers } from 'redux'
import userReducer from './user'
import productReducer from './products'
import categoryReducer from './categories'
import cartReducer from './carts'
import topkReducer from './topk'
import topkitemReducer from './topkitem'
import historyReducer from './history'
import sanphamtopkReducer from './sanphamtopk'
import authorReducer from './authors'

const appReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
  topk: topkReducer,
  topkitem: topkitemReducer,
  history: historyReducer,
  sanphamtopk: sanphamtopkReducer,
  author: authorReducer,

})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
