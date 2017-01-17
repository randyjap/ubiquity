export const RECEIVE_FILTERS = "RECEIVE_FILTERS";
export const RECEIVE_BOUNDS = "RECEIVE_BOUNDS";

export const receiveFilters = filters => ({
  type: RECEIVE_FILTERS,
  filters
});

export const receiveBounds = filters => ({
  type: RECEIVE_BOUNDS,
  filters
});
