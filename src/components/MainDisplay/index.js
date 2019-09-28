import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './style.css'
import GoogleMap from '../GoogleMap'
import TeamMemberView from '../TeamMemberView'

export default function MainDisplay() {
  return (
    <div className='display-container'>
      <h2>Main Display Container</h2>
      <Switch>
        <Route path='/map'>
          <GoogleMap />
        </Route>
        <Route path='/team-member-view'>
          <TeamMemberView />
        </Route>
      </Switch>
    </div>
  )
}
