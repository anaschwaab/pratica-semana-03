/**
 * https://pt.wikipedia.org/wiki/Ano_bissexto
 * @param startYear start year
 * @param endYear end year
 * @returns array of leap years between startYear and endYear
 */
export const leapYear = (startYear: number, endYear: number): number[] => {
  const leapYears: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leapYears.push(year);
    }
  }
  return leapYears;
};
