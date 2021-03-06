import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropsTypes from 'prop-types'

import { createPost } from '../actions/postActions'

class Postform extends Component {
  constructor(props) {
    super(props)

    // 使用 redux 后，为什么不把这里是 state 移到 redux ?!
    // 什么样的 state 可以不放在 store, 而应该把它们放在 component ?
    this.state = {
      title: '',
      body: ''
    }

    // why doing this?
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    // now you get the input[type=name]
    // BUT...how do i get data-name="" and other attributes/properties?
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const post = {
      title: this.state.title, // getting state value
      body: this.state.body
    }

    // call action
    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange} // binding event
              value={this.state.title} // binding value
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <input
              type="text"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

// property check
Postform.propTypes = {
  createPost: PropsTypes.func.isRequired
}

export default connect(
  null, // 为什么可以是 null ?
  { createPost }
)(Postform)
