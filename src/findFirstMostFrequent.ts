interface MostFrequentType {
  value: string | number;
  occurrences: number;
}

/**
 * findFirstMostFrequent
 * @example findFirstMostFrequent([3, 'a', 3, 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3]);
 * // returns { value: 'a', occurrences: 5 }
 *
 * @param {(Array<string | number>)} inputArray
 * @return {MostFrequentType}  {({ value: string | number; occurrences: number })}
 */

export const findFirstMostFrequent = (
  inputArray: Array<string | number>,
): MostFrequentType => {
  if (inputArray.length === 0) {
    return { value: '', occurrences: 0 };
  }

  const frequencyMap = new Map<string | number, number>();

  let maxOccurrences = 0;
  let mostFrequentValue: string | number = '';
  let firstOccurrence: boolean = true;

  for (const value of inputArray) {
    const currentOccurrences = (frequencyMap.get(value) || 0) + 1;
    frequencyMap.set(value, currentOccurrences);

    if (currentOccurrences > maxOccurrences) {
      maxOccurrences = currentOccurrences;
      mostFrequentValue = value;
      firstOccurrence = true;
    } else if (currentOccurrences === maxOccurrences && firstOccurrence) {
      mostFrequentValue = value;
      firstOccurrence = false;
    }
  }
  return { value: mostFrequentValue, occurrences: maxOccurrences };
};
