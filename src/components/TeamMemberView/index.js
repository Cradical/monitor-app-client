import React, { useState } from "react";
import { Button, Progress, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Line } from "react-chartjs-2";

import "./style.css";
import EvacModal from "../EvacModal/index";

import { CrewContext } from "../../App";

const data = {
  labels: ["9:00:00am", "9:00:15am", "9:00:30am", "9:00:45am", "9:01:00am"],
  datasets: [
    {
      label: "Heart Rate",
      borderColor: "rgb(255, 99, 132)",
      data: [76, 89, 95, 99, 102],
      fill: false
    }
  ]
};

const Chart = props => {
  return (
    <div className='chart-container'>
      <Line data={data} />
    </div>
  );
};

const image = require("../../assets/placeholder-profile_3.png");

export default function TeamMemberView(props) {
  const { id } = props.match.params;
  const [modal, setModal] = useState(false);
  return (
    <div className='team-member-container'>
      <CrewContext.Consumer>
        {context => {
          let uid = null;
          let fname = null;
          let lname = null;
          let hr = null;
          let bp_d = null;
          let bp_s = null;
          let lat = null;
          let lng = null;
          let air_supply = null;
          let env_temp = null;
          let internal_temp = null;

          let latest_hr = '';
          let latest_bp_d = '';
          let latest_bp_s = '';
          let latest_lat = '';
          let latest_lng = '';
          let latest_air_supply = '';
          let latest_env_temp = '';
          let latest_internal_temp = '';

          if (context) {
            if (context[id]) {
              uid = context[id].uid;
              fname = context[id].fname;
              lname = context[id].lname;
              hr = context[id].hr;
              bp_d = context[id].bp_d;
              bp_s = context[id].bp_s;
              lat = context[id].lat;
              lng = context[id].lng;
              air_supply = context[id].air_supply;
              env_temp = context[id].env_temp;
              internal_temp = context[id].internal_temp;

              latest_hr = hr[hr.length - 1];
              latest_bp_d = bp_d[bp_d.length - 1];
              latest_bp_s = bp_s[bp_s.length - 1];
              latest_lat = lat[lat.length - 1];
              latest_lng = lng[lng.length - 1];
              latest_air_supply = air_supply[air_supply.length - 1];
              latest_env_temp = env_temp[env_temp.length - 1];
              latest_internal_temp =
                internal_temp[internal_temp.length - 1];
            }
          }

          return (
            <>
              <h2 className='title'>Team Member Details</h2>
              <div className='details-container'>
                <div className='profile-details'>
                  <h3>Team Member Info</h3>
                  <h4>{`${fname} ${lname}`}</h4>
                  <img src={image} alt='profile' />
                  <h6>Team: </h6>
                  <p>Echo 6</p>
                </div>
                <div className='metric-display'>
                  <div className='vitals'>
                    <h4>Vitals</h4>
                    <div className='vital heart-rate'>
                      <Toast>
                        <ToastHeader icon='success'>❤️ Heart Rate</ToastHeader>
                        <ToastBody>
                          {latest_hr.y} <strong>BPM</strong>
                          <Progress striped color='success' value={75} />
                        </ToastBody>
                      </Toast>
                    </div>
                    <div className='vital blood-pressure'>
                      <Toast>
                        <ToastHeader icon='warning'>
                          ⭕️ Blood Pressure
                        </ToastHeader>
                        <ToastBody>
                          90/130 <strong>sol/dia</strong>
                          <Progress striped color='warning' value={75} />
                        </ToastBody>
                      </Toast>
                    </div>
                    <div className='vital body-temp'>
                      <Toast>
                        <ToastHeader icon='danger'>🌡 Body Temp</ToastHeader>
                        <ToastBody>
                          102 <strong>degrees (F)</strong>
                          <Progress striped color='danger' value={85} />
                        </ToastBody>
                      </Toast>
                    </div>
                  </div>
                  <div className='equipment-metrics air-supply'>
                    <h4>Equipment Metrics</h4>
                    <Toast>
                      <ToastHeader icon='success'>Air Supply</ToastHeader>
                      <ToastBody>
                        <span>
                          <strong>80%</strong>
                        </span>
                        <Progress striped color='success' value={80} />
                      </ToastBody>
                    </Toast>
                  </div>
                </div>
              </div>
              <Button
                color='danger'
                size='lg'
                block
                onClick={() => setModal(true)}
              >
                <strong>Evacuate Team Member</strong>
              </Button>
              <EvacModal isOpen={modal} toggle={() => setModal(false)} />
            </>
          );
        }}
      </CrewContext.Consumer>
    </div>
  );
}