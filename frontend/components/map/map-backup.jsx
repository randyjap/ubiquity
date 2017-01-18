import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 39, lng: -101}, // San Francisco coords
  zoom: 4
};

var autocomplete;

function initAutocomplete() {

  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
    {types: ['geocode']});

  autocomplete.addListener('place_changed', fillInAddress);
}

var fillInAddress = (e) => {
  console.log(e);
};

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

class Map extends Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.searchListings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.searchListings);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.receiveBounds(bounds);
      this.props.fetchSearchListings(this.props.searchFilters);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(listing) {
    this.props.router.push(`listings/${listing.id}`);
  }

  _handleClick(coords) {
    // this.props.router.push({
    //   pathname: "listings/new",
    //   query: coords
    // });
  }

  render() {
    return (
      <div>
        <div className="map" ref="map">Map</div>;
        <input className="searchbar" id="autocomplete" placeholder="Search near..." type="text"></input>
      </div>
    );
  }
}

export default withRouter(Map);
