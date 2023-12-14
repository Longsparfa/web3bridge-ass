export const addItem = (product) => ({
  type: "ADD_ITEM",
  payload: product,
});

export const removeItem = (productId) => ({
  type: "REMOVE_ITEM",
  payload: productId,
});

export const increaseQuantity = (productId) => ({
  type: "INCREASE_QUANTITY",
  payload: productId,
});

export const decreaseQuantity = (productId) => ({
  type: "DECREASE_QUANTITY",
  payload: productId,
});

export const applyDiscount = (couponCode) => ({
  type: "APPLY_DISCOUNT",
  payload: couponCode,
});
