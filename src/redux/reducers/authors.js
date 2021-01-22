/* eslint-disable no-case-declarations */
import { authorTypes } from '../types'

const initState = []

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case authorTypes.GET_AUTHOR_SUCCESS:
      return action?.payload?.data?.data
    default:
      return state
  }
}

export default categoryReducer
