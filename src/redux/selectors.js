import { createSelector } from 'reselect';

// Products
const getProductIds = state => state.products;

const getProductsEntities = state => state.entities.products;

export const getProducts = createSelector(
    [getProductIds, getProductsEntities],
    (ids, entities) => ids.map(id => entities[id]),
);

// Cart

const getCartProductIds = state => state.cart.ids;
const getCartProductAmounts = state => state.cart.amount;

export const getCartProductsAmount = createSelector(
    getCartProductIds,
    ids => ids.length,
);

export const getCartProducts = createSelector(
    [getCartProductIds, getCartProductAmounts, getProductsEntities],
    (ids, amounts, entities) =>
        ids.map(id => ({
            ...entities[id],
            amount: amounts[id],
        })),
);
