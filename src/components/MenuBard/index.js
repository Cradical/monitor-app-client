import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import './style.css'

export default class MenuBar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className='responder-list'>
        <h2>Menu Options</h2>
        <ListGroup>
          <ListGroupItem active tag='button' action>
            Screen Options
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            <Link to='/map'>View Map</Link>
          </ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem active tag='button' action>
            Responder List
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            <Link to='team-member-view'>Team Member View test</Link>
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            Mark
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            Carey
          </ListGroupItem>
          <ListGroupItem disabled tag='button' action>
            Lisa
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
