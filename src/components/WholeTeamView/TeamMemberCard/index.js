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

import { CrewContext } from '../../App'

const TeamMemberCard = props => {
  return (
    <div className='team-member-container'>
      <CrewContext.Consumer>
        {context => {
          let uid = null
          let fname = null
          let lname = null
          let hr = null
          let bp_d = null
          let bp_s = null
          let lat = null
          let lng = null
          let air_supply = null
          let env_temp = null
          let internal_temp = null

          let latest_hr = 100
          let latest_bp_d = 120
          let latest_bp_s = 90
          let latest_lat = ''
          let latest_lng = ''
          let latest_air_supply = 15
          let latest_env_temp = ''
          let latest_internal_temp = 120

          if (context) {
            if (context[id]) {
              uid = context[id].uid
              fname = context[id].fname
              lname = context[id].lname
              hr = context[id].hr
              bp_d = context[id].bp_d
              bp_s = context[id].bp_s
              lat = context[id].lat
              lng = context[id].lng
              air_supply = context[id].air_supply
              env_temp = context[id].env_temp
              internal_temp = context[id].internal_temp

              latest_hr = hr[hr.length - 1].y
              latest_bp_d = bp_d[bp_d.length - 1].y
              latest_bp_s = bp_s[bp_s.length - 1].y
              latest_lat = lat[lat.length - 1].y
              latest_lng = lng[lng.length - 1].y
              latest_air_supply = air_supply[air_supply.length - 1].y
              latest_env_temp = env_temp[env_temp.length - 1].y
              latest_internal_temp = internal_temp[internal_temp.length - 1].y
            }
          }

          return (
            <>
              <div>
                <Card className='card'>
                  <CardImg
                    top
                    width='100%'
                    src={profileImage}
                    alt='Card image cap'
                  />
                  <CardBody className='card-body'>
                    <CardTitle>{`${props.fname} ${props.lname}`}</CardTitle>
                    <CardSubtitle>Firefighter</CardSubtitle>
                    <CardText>
                      <Badge className='status-pill' color='success' pill>
                        <h6>Good</h6>
                      </Badge>
                    </CardText>
                    <Button color='info'>Details</Button>
                  </CardBody>
                </Card>
              </div>
            </>
          )
        }}
      </CrewContext.Consumer>
    </div>
  )
}
export default TeamMemberCard
