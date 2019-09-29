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

  handleEvacRequest() {
    this.toggle()
    window.alert('Evacuation Request Sent!')
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
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalHeader>Evacuation Order</ModalHeader>
          <ModalBody>
            <b>Evacuate Current Team Member!</b>
            <br />
            Keep track of their location and prepare for medical treatment.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.props.toggle}>
              Send Evac Order
            </Button>{' '}
            <Button color='secondary' onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default EvacModal
