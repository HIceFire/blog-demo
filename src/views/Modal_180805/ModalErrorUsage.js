import React from 'react'
import Modal from 'components/Modal'


export default class ErrorUsage extends React.Component {
  state = {
    value: 'Some content',
  }

  handleSetValue = () => {
    this.setState({value: 'Hello World'}, () => {
      console.log('this value has change')
    })
  }

  handleShowModal = () => {
    const content = (
      <div>
        <div>
          <p>{this.state.value}</p>
          <a href="javascript:void(0)" onClick={this.handleSetValue}>click me</a>
        </div>
        <br/>
      </div>
    )

    Modal.alert({ content })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowModal}>Open</button>
      </div>
    )
  }
}