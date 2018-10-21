import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import React, { Component } from "react";
import PropTypes from 'prop-types';

const TOKEN =
  "pk.eyJ1IjoicmFraGkyMTA0IiwiYSI6ImNqbG04aHNrcDEyNG4za2wxc3NsYnhzaGQifQ.bdS6WhHrWfDE11LrybUoNw";
MapboxGl.accessToken = TOKEN;

export default class MapComp extends Component {
  constructor(props) {
    super(props);
    this.map = undefined;
    this.container = undefined;
    this.tooltip = undefined;
  }
  
  componentDidMount() {
    const { location: { lat, lng } } = this.props;

    this.map = new MapboxGl.Map({
      container: this.container,
      center: [lat, lng],
      style: "mapbox://styles/mapbox/light-v9",
      zoom: 14
    });

    this.tooltip = new MapboxGl.Marker(this.tooltipContainer, {
      offset: [0, 0]
    }).setLngLat([lat, lng]).addTo(this.map);
  }

  render() {
    return (
      <div className="deep-back">
        <div
          ref={el => (this.container = el)}
          className="Map top right left bottom"
        />
      </div>
    );
  }
}

MapComp.proptypes = {
  location: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
  }).isRequired,
  themeStyle: PropTypes.string.isRequired,
};
