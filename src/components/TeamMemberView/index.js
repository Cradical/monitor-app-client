import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['Jim Jones'],
  datasets: [
    {
      label: 'Heart Rate',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [76, 89, 95, 99, 102],
    },
  ],
}

const Chart = props => {
  return <Line data={data} />
}

const image = require('../../assets/placeholder-profile_3.png')

export default function TeamMemberView() {
  return (
    <div className='team-member-container'>
      <h2>Team Member Details</h2>
      <div className='profile-details'>
        <img src={image} />
      </div>
      <p>heart rate details</p>
      <p>Blood pressure details</p>
      <p>Air Supply: 80%</p>

      <Chart />
    </div>
  )
}
