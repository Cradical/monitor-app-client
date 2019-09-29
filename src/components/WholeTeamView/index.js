import React from 'react'

import TeamMemberCard from './TeamMemberCard'

export default function WholeTeamView(props) {
  console.log('props: ', props)

  const teamMembers = props.map(teamMember => {
    return <TeamMemberCard props={teamMember.user} />
  })

  return (
    <div>
      <h2>Team Overview</h2>
      {teamMembers}
    </div>
  )
}
