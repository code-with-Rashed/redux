const getId = (products) => {
  const id = products.reduce(
    (maxId, product) => Math.max(maxId, product.id),
    0,
  );
  return id + 1;
};
export default getId;
