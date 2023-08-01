/**
 * nameArrayToString
 * @description
 * Accepts an array of names and returns a
 * string of names separated by commas and an ampersand
 *
 * @example nameArrayToString(['Bart']);
 * // returns 'Bart'
 * @example nameArrayToString(['Bart', 'Lisa']);
 * // returns 'Bart & Lisa'
 * @example nameArrayToString(['Bart', 'Lisa', 'Maggie']);
 * // returns 'Bart, Lisa & Maggie'
 * @param {string[]} nameArray
 * @return {string}
 */
export const nameArrayToString = (nameArray: string[]) => {
  const length = nameArray.length;

  if (length === 0) {
    return '';
  } else if (length === 1) {
    return nameArray[0];
  } else if (length === 2) {
    return nameArray.join(' & ');
  } else {
    const namesCopy = [...nameArray];
    const lastElement = namesCopy.pop();
    return namesCopy.join(', ') + ` & ${lastElement}`;
  }
};
