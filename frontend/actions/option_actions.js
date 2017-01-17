import * as OptionAPIUtil from '../util/option_api_util';

export const RECEIVE_OPTIONS = "RECEIVE_OPTIONS";

export const receiveOptions = options => ({
  type: RECEIVE_OPTIONS,
  options
});

export const fetchOptions = () => dispatch => {
  return OptionAPIUtil.fetchAllFilterOptions().
    then(options => dispatch(receiveOptions(options)));
};
