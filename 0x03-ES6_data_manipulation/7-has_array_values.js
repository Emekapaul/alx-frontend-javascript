export default function hasValuesFromArray(setA, array) {
  const res = true;
  for (const elem of array) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return res;
}
