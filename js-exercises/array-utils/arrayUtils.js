const forEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
};

const map = (array, callback) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = callback(array[index], index, array);
    newArray.push(element);
  }
  return newArray;
};

const filter = (array, callback) => {
  const filteredArray = [];
  for (let index = 0; index < array.length; index++) {
    const filteredElement = callback(array[index], index, array);
    if (filteredElement) {
      filteredArray.push(filteredElement);
    }
  }
  return filteredArray;
};

const reduce = (array, callback, initialValue) => {
  for (let index = 0; index < array.length; index++) {
    initialValue = callback(initialValue, array[index], index, array);
  }
  return initialValue;
};

export { forEach, map, filter, reduce };
