import React, { useReducer, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import io from 'socket.io-client'
import _ from 'lodash'

import './App.css'
import NavBar from './components/NavBar'
import MenuBar from './components/MenuBar'
import MainDisplay from './components/MainDisplay'
import { __makeTemplateObject } from 'tslib'

import WholeTeamView from './components/WholeTeamView'
import TeamMemberView from './components/TeamMemberView'

const UPDATE_CREW = 'UPDATE_CREW'
const socket = io('http://localhost:5000')

export const CrewContext = React.createContext('crew')

const data = [
  '{"UID": 1, "TS": "2019-09-28 14:18:28.614", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "JIM", "LNAME": "ONE"}',
  '{"UID": 2, "TS": "2019-09-28 14:18:27.209", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "JIM", "LNAME": "TWO"}',
  '{"UID": 3, "TS": "2019-09-28 14:18:25.329", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "JIM", "LNAME": "THREE"}',
  '{"UID": 4, "TS": "2019-09-28 14:18:23.806", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "Jon", "LNAME": "Smith"}',
  '{"UID": 5, "TS": "2019-09-28 14:18:22.022", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "Jon", "LNAME": "Smith"}',
]

const initialState = {
  crew: data,
}

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CREW: {
      const { payload } = action
      //Parse the JSON object
      const payloadJSON = payload
        ? payload.map(member => {
            return JSON.parse(member)
          })
        : []

      //Make a new crew array with all of the crew data
      const crew = payloadJSON.map(member => {
        const {
          UID,
          TS,
          HR,
          BP_D,
          BP_S,
          LAT,
          LON,
          A_SUP,
          ENV_TEMP,
          IN_TEMP,
          FNAME,
          LNAME
        } = member;
        const ts_date = new Date(TS);
        if (state.crew[UID]) {
          //If Crew member already exists concat the new data to the array
          return {
            ...state.crew[UID],
            hr: state.crew[UID].hr.concat({ x: ts_date, y: HR }),
            bp_d: state.crew[UID].bp_d.concat({ x: ts_date, y: BP_D }),
            bp_s: state.crew[UID].bp_s.concat({ x: ts_date, y: BP_S }),
            lat: state.crew[UID].lat.concat({ x: ts_date, y: LAT }),
            lng: state.crew[UID].lat.concat({ x: ts_date, y: LON }),
            air_supply: state.crew[UID].lat.concat({ x: ts_date, y: A_SUP }),
            env_temp: state.crew[UID].lat.concat({ x: ts_date, y: ENV_TEMP }),
            internal_temp: state.crew[UID].lat.concat({ x: ts_date, y: IN_TEMP })
          };
        } else {
          //If the crew member does not exist, start a new record.
          return {
            uid: UID,
            fname: FNAME,
            lname: LNAME,
            hr: [{ x: ts_date, y: HR }],
            bp_d: [{ x: ts_date, y: BP_D }],
            bp_s: [{ x: ts_date, y: BP_S }],
            lat: [{ x: ts_date, y: LAT }],
            lng: [{ x: ts_date, y: LON }],
            air_supply: [{ x: ts_date, y: A_SUP }],
            env_temp: [{ x: ts_date, y: ENV_TEMP }],
            internal_temp: [{ x: ts_date, y: IN_TEMP }]
          };
        }
      })

      //Return the new state by maping the the UID of the crew member to be used as params
      const newState = { crew: _.mapKeys(crew, 'uid') }
      console.log(newState.crew)
      return newState
    }

    default:
      return state
  }
}

function App() {
  const [seconds, setSeconds] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
      socket.emit('request-crew-update')
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    socket.on('crew-update', payload => {
      const updateAction = { type: UPDATE_CREW, payload }
      console.log(data)
      dispatch(updateAction)
    })
  }, [])

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='main-container'>
          <CrewContext.Provider value={state.crew}>
            <MenuBar crew={state.crew} />
            <Switch>
              <Route exact path='/' component={WholeTeamView} />
              <Route path='/member/:id' component={TeamMemberView} />
              <Route path='/membertest' component={TeamMemberView} />
            </Switch>
          </CrewContext.Provider>
        </div>
      </div>
    </Router>
  )
}

export default App
