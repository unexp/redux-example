import { FETCH_POSTS, NEW_POST } from './types'

/*
export function fetchPosts() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        // this.setState({ posts: data })

        dispatch({
          type: 'FETCH_POSTS',
          payload: data
        })
      })
  }
}
*/

// refactor by ES6
export const fetchPosts = () => dispatch => {
  console.log('fetching...')

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      // this.setState({ posts: data })

      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    })
}

export const createPost = postData => dispatch => {
  console.log('action called')

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: NEW_POST,
        payload: data
      })
    })
}
