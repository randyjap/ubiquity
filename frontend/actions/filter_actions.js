export const RECEIVE_FILTERS = "RECEIVE_FILTERS";
export const RECEIVE_BOUNDS = "RECEIVE_BOUNDS";
export const RECEIVE_CENTER = "RECEIVE_CENTER";
export const RESET_FILTERS = "RESET_FILTERS";

export const receiveFilters = filters => ({
  type: RECEIVE_FILTERS,
  filters
});

export const resetFilters = filters => ({
  type: RESET_FILTERS
});

export const receiveBounds = filters => ({
  type: RECEIVE_BOUNDS,
  filters
});

export const receiveCenter = center => ({
  type: RECEIVE_CENTER,
  center
});
