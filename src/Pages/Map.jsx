import React, {Component} from 'react';

import  mapboxgl from 'mapbox-gl';
import {withAuth} from "../helpers/AutoContext";

export class Map extends Component {
    map = null;
 mapContainer = React.createRef();

 componentDidMount() {
     mapboxgl.accessToken = 'pk.eyJ1Ijoia3VkcmsiLCJhIjoiY2tqNGw2a2NuMGxtMjMybm9pMnk2MmE3ciJ9.DJzxJ1oxvNJoxcFqIid4Gw'

     this.map = new mapboxgl.Map({
         container: this.mapContainer.current,
         style: 'mapbox://styles/mapbox/streets-v9',
         center:[55.8523,37.4398],
         zoom:10,

     });

 }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
     return <div className="map-wrapper">
         <div data-testid="map" className="map" ref={this.mapContainer}/>
     </div>
 }
}

    export default Map;
