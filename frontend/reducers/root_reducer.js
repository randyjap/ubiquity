import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  search: searchReducer
});

export default rootReducer;
