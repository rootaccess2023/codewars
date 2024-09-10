const binaryArrayToNumber = arr => {
  let binaryRep = 0;
  let length = arr.length
  
  for (let i = 0; i < length; i ++) {
    binaryRep += arr[i] * Math.pow(2, length - 1 - i);
  }
  return binaryRep;
};
