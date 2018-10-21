import React, { Component } from 'react'

class Postform extends Component {
  // why using constructor?
  constructor(props) {
    super(props)

    // why state should goes here?
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

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
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

export default Postform
