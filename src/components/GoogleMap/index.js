import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

const MapContainer = props => {
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={props.center}
    >
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDsR9wm6kabu8143SBRLWfR5e8f8q8MZbo"
})(MapContainer);
