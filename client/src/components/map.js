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
}