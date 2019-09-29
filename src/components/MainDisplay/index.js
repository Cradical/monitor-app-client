import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './style.css'
import GoogleMap from '../GoogleMap'
import TeamMemberView from '../TeamMemberView'

export default function MainDisplay() {
  return (
    <div className='display-container'>
      <Switch>
        <Route path='/map'>
          <GoogleMap
            center={{ lat: 48.1, lng: -122.0 }}
            markers={[{ lat: 48.0, lng: -122.0 }, { lat: 48.1, lng: -122.0 }]}
          />
        </Route>
        <Route path='/team-member-view'>
          <TeamMemberView />
        </Route>
      </Switch>
    </div>
  )
}
