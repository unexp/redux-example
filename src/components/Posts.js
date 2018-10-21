import React, { Component } from 'react'
import PropTypes from 'prop-types'

// connect you react component with redux-store (provided by the Provider component)
// store -- redux
// "redux-store" -- Provider component provided
import { connect } from 'react-redux'

// action
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    // JSX
    // inside return(), you can think just like "(JSX)inline template"!
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    )
  }
}

// property check
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

/*
  // 这里为什么要用 posts ?
  // 因为在 rootReducer 里使用了 posts: postReducer
  export default combineReducers({
    posts: postReducer
  })
*/
const mapStateToProps = state => ({
  posts: state.posts.items, // 这里为什么是 state.posts.items 而不是 state.items ?
  newPost: state.posts.item
})

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts)
