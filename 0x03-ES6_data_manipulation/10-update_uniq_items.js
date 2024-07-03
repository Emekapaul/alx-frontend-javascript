export default function updateUniqueItems(mymap) {
  if (!(mymap instanceof Map)) {
    throw Error('Cannot process');
  }
  mymap.forEach((value, key) => {
    if (value === undefined || (value instanceof Number)) {
      throw Error('Cannot process');
    }
    if (value === 1) {
      mymap.set(key, 100);
    }
  });
}
