//Reusable Component imported using lazy loading
//Recieves an id, options, onMapLoad props

import React, { Component } from "react";

export default class AdvancedMap extends Component {
  state = {
    zoom: 14,
    lat: 40.7308,
    lng: -73.9973
  };

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAYzDOXRGzFOOl8e1mCMGBxu6pl_tiruCc`;

      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);

      //Cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return <div style={{ width: 500, height: 500 }} id={this.props.id} />;
  }
}
