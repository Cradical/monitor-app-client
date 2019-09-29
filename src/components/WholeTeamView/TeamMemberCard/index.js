import React from 'react'
import {
  Badge,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

import profileImage from '../../../assets/placeholder-profile_3.png'
import './style.css'

const STATUS = {
  Good: 'success',
  Warning: 'warning',
  Danger: 'danger',
}

const TeamMemberCard = props => {
  console.log(props.member.fname)
  return (
    <Card className='card'>
      <CardImg top width='100%' src={profileImage} alt='Card image cap' />
      <CardBody className='card-body'>
        <CardTitle>{`${props.member.fname} ${props.member.lname}`}</CardTitle>
        <CardSubtitle>{props.member.title}</CardSubtitle>
        <CardText>
          <Badge
            className='status-pill'
            color={STATUS[props.member.status]}
            pill
          >
            <h6>{props.member.status}</h6>
          </Badge>
        </CardText>
        <Button color='info'>Details</Button>
      </CardBody>
    </Card>
  )
}
export default TeamMemberCard
