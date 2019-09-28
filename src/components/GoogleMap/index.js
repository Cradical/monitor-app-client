import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

import './style.css'

const mapStyles = {
  width: '350px',
  height: '350px',
}

const displayMarkers = markers => {
  return markers.map(marker => {
    const { lat, lng } = marker;
    return <Marker position={{ lat, lng }} />;
  });
};

const MapContainer = props => {
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={props.center}
    >
      {displayMarkers(props.markers)}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsR9wm6kabu8143SBRLWfR5e8f8q8MZbo',
})(MapContainer)
