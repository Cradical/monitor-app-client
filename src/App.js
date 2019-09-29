import React, { useReducer, useEffect, useState } from "react";
import io from "socket.io-client";
import _ from "lodash";

import "./App.css";
import NavBar from "./components/NavBar";
import ResponderList from "./components/ResponderList";
import GoogleMap from "./components/GoogleMap";
import { __makeTemplateObject } from "tslib";

const UPDATE_CREW = "UPDATE_CREW";
const socket = io("http://localhost:5000");

const initialState = {
  crew: {}
};

const data = [
  '{"UID": 1, "TS": "2019-09-28 14:18:28.614", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "JIM", "LNAME": "ONE"}',
  '{"UID": 2, "TS": "2019-09-28 14:18:27.209", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "JIM", "LNAME": "TWO"}',
  '{"UID": 3, "TS": "2019-09-28 14:18:25.329", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "JIM", "LNAME": "THREE"}',
  '{"UID": 4, "TS": "2019-09-28 14:18:23.806", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "Jon", "LNAME": "Smith"}',
  '{"UID": 5, "TS": "2019-09-28 14:18:22.022", "HR": 80, "BP_D": 0, "BP_S": 0, "LAT": 0.0, "LON": 0.0, "A_SUP": 0, "ENV_TEMP": 0, "IN_TEMP": 0, "FNAME": "Jon", "LNAME": "Smith"}'
];

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CREW: {
      const { payload } = action;
      //Parse the JSON object
      const payloadJSON = payload.map(member => {
        return JSON.parse(member);
      });

      //Make a new crew array with all of the crew data
      const crew = payloadJSON.map(member => {
        const { UID, TS, HR, BP_D, FNAME, LNAME } = member;
        if (state.crew[UID]) {
          //If Crew member already exists concat the new data to the array
          return {
            ...state.crew[UID],
            hr: state.crew[UID].hr.concat({ x: TS, y: HR }),
            bp_d: state.crew[UID].bp_d.concat({ x: TS, y: BP_D })
          };
        } else {
          //If the crew member does not exist, start a new record.
          return {
            uid: UID,
            fname: FNAME,
            lname: LNAME,
            hr: [{ x: TS, y: HR }],
            bp_d: [{ x: TS, y: BP_D }]
          };
        }
      });

      //Return the new state by maping the the UID of the crew member to be used as params
      const newState = { crew: _.mapKeys(crew, "uid") };
      return newState;
    }

    default:
      return state;
  }
};

function App() {
  const [seconds, setSeconds] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
      socket.emit("request-crew-update");
      console.log("requesting crew update");
      const updateAction = { type: UPDATE_CREW, payload: data };
      dispatch(updateAction);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <ResponderList />
      <div>This mission has been going on for {seconds} seconds.</div>
      {_.map(state.crew, member => (
        <div>
          <div key={member.uid}>{member.uid}</div>
          <div key={`${member.uid} ${member.fname}`}>{member.fname}</div>
          <div key={`${member.uid} ${member.lname}`}>{member.lname}</div>
        </div>
      ))}
      <div>
        <GoogleMap
          center={{ lat: 48.1, lng: -122.0 }}
          markers={[{ lat: 48.0, lng: -122.0 }, { lat: 48.1, lng: -122.0 }]}
        />
      </div>
    </div>
  );
}

export default App;
