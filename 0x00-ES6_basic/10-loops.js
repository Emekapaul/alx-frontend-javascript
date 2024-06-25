export default function appendToEachArrayValue(array, appendString) {
  const arrArg = [];
  for (const value of array) {
    arrArg.push(appendString + value);
  }

  return arrArg;
}
