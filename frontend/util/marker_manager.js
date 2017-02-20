export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.markers = [];
    this.handleClick = handleClick;
    this._createMarkerFromListing = this._createMarkerFromListing.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this._selectListing = this._selectListing.bind(this);
    this._unselectListing = this._unselectListing.bind(this);
    window.markers = this.markers;
  }

  updateMarkers(listings){
    this.listings = listings;
    this._listingsToAdd().forEach(this._createMarkerFromListing);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _listingsToAdd() {
    const currentListings = this.markers.map( marker => marker.listingId );
    return this.listings.filter( listing => !currentListings.includes(listing.id) );
  }

  _markersToRemove(){
    const ListingIds = this.listings.map( listing => listing.id );
    return this.markers.filter( marker => !ListingIds.includes(marker.listingId) );
  }

  _createMarkerFromListing(listing) {
    const pos = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      listingId: listing.id,
      icon: 'http://res.cloudinary.com/dkympkwdz/image/upload/v1487476444/listing_marker_ayxyyk.png'
    });
    this._addWindow(listing, marker);
    marker.addListener('click', () => this.handleClick(listing));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  _selectListing(id) {
    document.getElementById(`searchListing-${id}`).className = "listing-selected";
  }

  _unselectListing(id) {
    document.getElementById(`searchListing-${id}`).className = "listing";
  }

  _addWindow(listing, marker) {
    let content =
    '<div class="mapwindow-content">' +
      '<div class="window-title">' +
        `${listing.lessor}` +
      '</div>' +
      '<div class="mapwindow-text">' +
        `Brand: <b class="window-bold">${listing.brand}</b></br>` +
        `Category: <b class="window-bold">${listing.category}</b></br>` +
        `Day Rate: <b class="window-bold">$${listing.day_rate}</b></br>` +
        `Rating Average: <b class="window-bold">${listing.rating_average}</b></br>` +
        `Review Count: <b class="window-bold">${listing.review_count}</b></br>` +
      '</div>' +
    '</div>';

    const infoWindow = new google.maps.InfoWindow({
      content: content,
      disableAutoPan: true,
      maxWidth: 150
    });

    marker.addListener('mouseover', () => {
      infoWindow.open(this.map, marker);
      this._selectListing(listing.id);
    });

    marker.addListener('mouseout', () => {
      infoWindow.close(this.map, marker);
      this._unselectListing(listing.id);
    });

    google.maps.event.addListener(infoWindow, 'domready', function() {
      var iwOuter = $('.gm-style-iw');
      var iwBackground = iwOuter.prev();
      iwBackground.children(':nth-child(2)').css({'display' : 'none'});
      iwBackground.children(':nth-child(4)').css({'display' : 'none'});
    });
  }
}
