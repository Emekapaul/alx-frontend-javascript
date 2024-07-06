export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  return [...set].filter((element) => typeof element === 'string' && element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');
}
