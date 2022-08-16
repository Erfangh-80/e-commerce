const shorten = (title) => {
  const newTitle = title.split(" ");
  return `${newTitle[0]} ${newTitle[1]}`;
};

const isInCart = (state, id) => {
  const isCart = !!state.selectedItems.find((item) => item.id === id);
  return isCart;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export { shorten, isInCart, quantityCount };
