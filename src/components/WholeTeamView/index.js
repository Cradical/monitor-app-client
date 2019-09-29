import React from 'react'

import TeamMemberCard from './TeamMemberCard'
import './style.css'

export default function WholeTeamView(props) {
  const data = [
    {
      fname: 'Jim',
      lname: 'Tarence',
      title: 'Firefighter',
      team: 'Echo 6',
      status: 'Good',
    },
    {
      fname: 'Carey',
      lname: 'User',
      title: 'Tree Cutter',
      team: 'Echo 6',
      status: 'Good',
    },
    {
      fname: 'Frank',
      lname: 'Gilbert',
      title: 'Ditch Digger',
      team: 'Echo 6',
      status: 'Good',
    },
    {
      fname: 'Sarah',
      lname: 'Fire',
      title: 'Firefighter',
      team: 'Echo 6',
      status: 'Warning',
    },
    {
      fname: 'John',
      lname: 'Henry',
      title: 'Track Layer',
      team: 'Echo 6',
      status: 'Danger',
    },
  ]

  const teamMembers = data.map(member => {
    return <TeamMemberCard key={member.fname} member={member} />
  })

  return (
    <div>
      <h2>Team Overview</h2>
      <div className='whole-team-view'>{teamMembers}</div>
    </div>
  )
}
