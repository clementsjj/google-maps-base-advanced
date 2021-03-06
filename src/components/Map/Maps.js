//Holds all the maps in a pane to make App.js cleaner

import React, { Component } from "react";
import { render } from "react-dom";

import JMap from "./JMap";
import AdvancedMap from "./AdvancedMap";
import { Pane } from "evergreen-ui";
import InfoWindow from "./InfoWindow";

export default class Maps extends Component {
  state = {
    istanbul: {
      id: "istanbul",
      options: { center: { lat: 41.0082, lng: 28.9784 }, zoom: 8 },
      onMapLoad: map => {
        const marker = new window.google.maps.Marker({
          position: { lat: 41.0082, lng: 28.9784 },
          map: map,
          title: "Hello Class!"
        });
        marker.addListener("click", e => {
          this.createInfoWindow(e, map);
        });
      }
    },
    codeImmersives: {
      id: "codeImmersives",
      options: { center: { lat: 40.7605, lng: -73.9911 }, zoom: 14 },
      onMapLoad: map => {
        const marker = new window.google.maps.Marker({
          position: { lat: 40.7605, lng: -73.9911 },
          map: map,
          title: "Hello Class!"
        });
        marker.addListener("click", e => {
          this.createInfoWindow(e, map, "Hello Class!");
        });
      }
    }
  };

  createInfoWindow(e, map, message) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: `<div id="infoWindow" />`,
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });
    infoWindow.addListener("domready", e => {
      render(
        <InfoWindow message={message} />,
        document.getElementById("infoWindow")
      );
    });
    infoWindow.open(map);
  }

  render() {
    console.log("id: ", this.state.codeImmersives.id);
    return (
      <Pane display="flex" justifyContent="space-around">
        <JMap />
        {/* <Vid vidName="7q1bbRzNQmI" /> */}
        <AdvancedMap
          id={this.state.codeImmersives.id}
          options={this.state.codeImmersives.options}
          onMapLoad={this.state.codeImmersives.onMapLoad}
        />
      </Pane>
    );
  }
}
