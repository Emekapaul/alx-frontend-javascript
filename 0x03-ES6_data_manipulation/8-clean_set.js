export default function cleanSet(inputSet, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const array = Array.from(inputSet);
  const filteredValues = array.filter((value) => (value !== undefined ? value.startsWith(startString) : ''));
  const result = filteredValues.map((element) => (element !== undefined ? element.substring(startString.length) : ''));
  return result.join('-');
}
