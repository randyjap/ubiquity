export const selectListing = ({ listings }, id) => {
   const listing = listings[id] || {};
   return listing;
};

export const searchListingsAsArray = ( {searchListings} ) => Object.keys(searchListings).map(key => searchListings[key]);
