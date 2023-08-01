/**
 * getRecursiveFibonacciSeries
 * @description
 * Returns the fibonacci series of a given number
 *
 * @example getRecursiveFibonacciSeries(1) // [0, 1]
 * @example getRecursiveFibonacciSeries(5) // [0, 1, 1, 2, 3, 5]
 *
 * @param {number} n
 * @return {*}  {number[]}
 */
export const getRecursiveFibonacciSeries = (n: number): number[] => {
  const series: number[] = [0, 1];

  if (n === 0) {
    return [0];
  }

  for (let i = 2; i <= n; i++) {
    const nextFibonacci = series[i - 1] + series[i - 2];
    series.push(nextFibonacci);
  }

  return series;
};
