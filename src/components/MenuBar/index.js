import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import './style.css'

export default class MenuBar extends React.Component {
  componentDidMount() {}

  render() {
    const { crew } = this.props

    const crewMemberLinks = crew => (
      <>
        {_.map(crew, member => (
          <NavLink key={member.uid} to={`/member/${member.uid}`}>
            <ListGroupItem tag='button' action>
              {`${member.fname} ${member.lname}`}
            </ListGroupItem>
          </NavLink>
        ))}
      </>
    )
    return (
      <div className='responder-list'>
        <h2>Menu Options</h2>
        <ListGroup>
          <ListGroupItem active tag='button' action>
            View Options
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            <Link to='/map'>View Map</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to='/'>Overall Team View</Link>
          </ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem active tag='button' action>
            Responder List
          </ListGroupItem>
          <ListGroupItem tag='button' action>
            <Link to='team-member-view'>Team Member View test</Link>
          </ListGroupItem>
          {crewMemberLinks(crew)}
        </ListGroup>
      </div>
    )
  }
}
