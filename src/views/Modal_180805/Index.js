import React from 'react'
import Modal from 'components/Modal'


export default class Modal_180805 extends React.Component {
  handleShowModal = () => {
    Modal.alert({
      content: <p>Some contents...</p>
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleShowModal}>Open</button>
      </div>
    )
  }
}