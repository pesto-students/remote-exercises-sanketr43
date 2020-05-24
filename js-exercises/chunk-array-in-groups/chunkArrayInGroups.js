function chunkArrayInGroups(array, chunkSize) {
  const groups = [];

  while (array.length) {
    groups.push(array.splice(0, chunkSize));
  }

  return groups;
}

export { chunkArrayInGroups };
