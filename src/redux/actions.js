export const actionTypes = {
    ADD_TO_CART: 'cart/ADD_TO_CART',
    REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
};

export const addToCart = id => ({
    type: actionTypes.ADD_TO_CART,
    payload: {
        id,
    },
});

export const removeFromCart = id => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
        id,
    },
});
