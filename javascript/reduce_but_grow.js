function grow(x){
  let product = x[0];
  for (i = 1; i < x.length; i++) {
    product *= x[i]
  }
  return product;
}
