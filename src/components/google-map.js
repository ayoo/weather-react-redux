import React, { Component } from 'react';

export default class GoogleMap extends Component {

  // life cycle methods
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    }); 
  }

  render() {
    // direct reference to the div by this.refs.map
    return <div ref="map" />;
  }
}