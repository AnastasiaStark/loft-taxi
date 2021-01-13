import React, {Component} from 'react';

import  mapboxgl from 'mapbox-gl';
import {withAuth} from "../helpers/AutoContext";

export class Map extends Component {
    map = null;
 mapContainer = React.createRef();

 componentDidMount() {
     mapboxgl.assesToken = "pk.eyJ1IjoiYW5hc3Rhc2lhc3RhciIsImEiOiJja2p1YzByNHoxang2MnpqeHkxejJjN3h2In0.M6-r0wNqxwj0f95cZrvMWA"

     this.map = new mapboxgl.Map({
         container: this.mapContainer.current,
         style: 'mapbox://styles/mapbox/streets-v9',
         center:[55.8523,37.4398],
         zoom:10,

     });

 }

    componentWillUnmount() {
        // this.map.remove();
    }

    render() {
     return <div className="map-wrapper">
         <div data-testid="map" className="map" ref={this.mapContainer}/>
     </div>
 }
}

export default withAuth(Map);
