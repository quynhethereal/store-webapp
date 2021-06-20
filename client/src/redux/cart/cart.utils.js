export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItemInCart = cartItems.find(
    (cartItem) => itemToAdd.id === cartItem.id
  );

  if (existingItemInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];

  // if item is in cart, update quantity
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItemInCart = cartItems.find(
    (cartItem) => itemToRemove.id === cartItem.id
  );

  if (existingItemInCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
