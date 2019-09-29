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

export default function TeamMemberView() {
  const [modal, setModal] = useState(false);
  return (
    <div className='team-member-container'>
      <CrewContext.Consumer>
        {context => (
          <>
            <h2 className='title'>Team Member Details</h2>
            <div className='details-container'>
              <div className='profile-details'>
                <h3>Team Member Info</h3>
                <img src={image} />
                <h6>Team: </h6>
                <p>Echo 6</p>
                <h6>Specialty:</h6>
                <p>Tree Cutter</p>
              </div>
              <div className='metric-display'>
                <div className='vitals'>
                  <h4>Vitals</h4>
                  <div className='vital heart-rate'>
                    <Toast>
                      <ToastHeader icon='success'>❤️ Heart Rate</ToastHeader>
                      <ToastBody>
                        99 <strong>BPM</strong>
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
            {console.log(modal)}
            <EvacModal isOpen={modal} toggle={() => setModal(false)} />
          </>
        )}
      </CrewContext.Consumer>
    </div>
  );
}
