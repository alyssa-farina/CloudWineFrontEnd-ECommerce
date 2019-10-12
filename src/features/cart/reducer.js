const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem.id !== item.id);

// returns array of one item --> get that item by it's index
const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  // if not in cart, return cart without that item, add that item and change it's quantity to 1
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [
        ...cartWithoutItem(cart, item),
        // takes all property of the cart item and puts into new objectHash, increases quantity by 1
        { ...cartItem, quantity: cartItem.quantity + 1 }
      ];
};

const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [
        ...cartWithoutItem(cart, item),
        { ...item, quantity: item.quantity - 1 }
      ];
};

const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)];
};
// reducer is what changes state
const cartReducer = (state = [], action) => {
  //  all items in state plus the new item coming from payload
  switch (action.type) {
    case 'ADD':
      // state is the cart and action payload is item to be added
      return addToCart(state, action.payload);

    case 'REMOVE':
      return removeFromCart(state, action.payload);

    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload);

    default:
      return state;
  }
};

export default cartReducer;