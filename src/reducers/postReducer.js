import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
  items: [], // represent posts comming from action
  item: {} // represent single post
}

// 为什么 state = initialState ?
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // we want to return:
      const result = {
        ...state, // current state, 这个时候 state 是什么 ? 为什么要返回 ...state ?
        items: action.payload // and the payload, 这里为什么是 items ? 而不是 item ?
      }

      console.log('state => ', state)
      console.log('...state => ', { ...state })
      console.log('Object.assign({}, state) => ', Object.assign({}, state))
      console.log('action.payload => ', action.payload)
      console.log('after FETCH_POSTS => ', result)
      return result

    case NEW_POST:
      return {
        ...state, // current state, 这个时候 state 是什么 ? 为什么要返回 ...state ?
        item: action.payload // 为什么现在是 item, 而不是上面的  items ?
      }

    default:
      return state
  }
}
