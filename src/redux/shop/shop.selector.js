import { createSelector } from 'reselect';

const selectShops = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShops],
  (shop) => shop.collections
);
