import React, { Component } from "react";

export default class JMap extends Component {
  state = {
    zoom: 14,
    lat: 40.7308,
    lng: -73.9973
  };

  componentDidMount() {
    // const map = new window.google.maps.Map(document.getElementById("map"), {
    //   center: { lat: this.state.lat, lng: this.state.lng },
    //   zoom: this.state.zoom
    // });

    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: this.state.lat, lng: this.state.lng },
      zoom: this.state.zoom
    });
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 500,
      border: "1px solid black"
    };
    return <div style={mapStyle} ref="map" />;
  }
}
