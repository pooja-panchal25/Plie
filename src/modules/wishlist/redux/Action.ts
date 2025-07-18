export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (product: any) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (productId: any) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});