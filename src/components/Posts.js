import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ posts: data })
      })
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    console.log(postItems)
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts