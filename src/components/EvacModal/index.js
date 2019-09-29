import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class EvacModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    const externalCloseBtn = (
      <button
        className='close'
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.toggle}
      >
        &times;
      </button>
    )
    return (
      <div>
        <Button color='danger' onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b>
            <br />
            Team Member is being evacuated!
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>
              Do Something
            </Button>{' '}
            <Button color='secondary' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default EvacModal
