export const selectListing = ({ search }, id) => {
   const searchListings = search.searchListings;
   const listing = searchListings[id] || {};
   return listing;
};

export const searchListingsAsArray = ( {searchListings} ) => Object.keys(searchListings).map(key => searchListings[key]);
