import React, { useState, Component } from 'react';
import Geocoder from 'react-geocoder-autocomplete';
import mapboxgl from 'mapbox-gl';
import List from './List.jsx'

const TOKEN = 'pk.eyJ1IjoiamNob3d4IiwiYSI6ImNqeHF6MmhwODAzZ2kzYm1iaXZtemxiNHkifQ.6h30dYGHE2zWWAbPCe-Waw';

mapboxgl.accessToken = 'pk.eyJ1IjoiamNob3d4IiwiYSI6ImNqeHF6MmhwODAzZ2kzYm1iaXZtemxiNHkifQ.6h30dYGHE2zWWAbPCe-Waw';


class Map extends Component {
  
  constructor(props) {
    super(props);
    // this.instagram = {}
    this.state = {
      instagram: {},
      lng: -73.847164,
      lat: 40.7551078,
      zoom: 13
    };
    this.fetchData = (text) => {
      console.log('text in fetch data', text);
        fetch(`https://www.instagram.com/explore/tags/${text}/?__a=1`)
        .then(response => response.json())
        .then(response => {
          this.setState({instagram: response.graphql.hashtag["edge_hashtag_to_top_posts"].edges} )
          console.log('state after fetchData', this.state)
        })
      }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    console.log(this.mapContainer)
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom,
    });
    this.map = map;

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });
    
    const geoLocate = new mapboxgl.GeolocateControl();
    map.addControl(geoLocate);

    geoLocate.on('geolocate', function (e) {
      map.flyTo({
        center: [e.coords.longitude, e.coords.latitude],
        zoom: 13
      });
    });
  }


  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <Geocoder
          accessToken={TOKEN}
          onSelect={(results) => {
            // console.log('this is result', results)
            const [lng, lat] = results.center;
            const text = results.text.split(' ').join('')
            this.setState({ ...this.state, lat, lng });
            // console.log(this.state)
            this.map.flyTo({
              center: [lng, lat]
            })
            this.fetchData(text)
          }}
        />
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          {/* <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div> */}
        </div>
        <div ref={el => this.mapContainer = el} className="map-dimensions" />

        <List instagram={this.state.instagram}> </List>
      </div>
    );
  }
}


export default Map;