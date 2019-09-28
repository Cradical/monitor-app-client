import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class ResponderList extends React.Component {
  render() {
    return (
      <div>
        <h3>Responder List</h3>
        <ListGroup>
          <ListGroupItem active tag='button' action>
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem disabled tag='button' action>
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
