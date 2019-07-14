import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
        <input
          type="text"
          style={{flex: '10'}}
          name="title"
          placeholder="Add a todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          className="btn"
          style={{flex: '1'}}
          type="submit"
          value="Submit"/>
      </form>
    )
  }
}
