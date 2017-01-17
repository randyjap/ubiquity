import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import searchReducer from './search_reducer';
import listingReducer from './listing_reducer';
import optionReducer from './option_reducer';
import filterReducer from './filter_reducer';
import currentUserListingReducer from './current_user_listing_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  search: searchReducer,
  listing: listingReducer,
  options: optionReducer,
  filters: filterReducer,
  currentUserListings: currentUserListingReducer
});

export default rootReducer;
