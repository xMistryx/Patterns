/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number" ) {
    return NaN;
  } 
  else if (n < 0) {
    return undefined;
  } 
  else if (n === 0) {
    return 1;
  } 
   else {
    let prod = 1;
    for (let i = 1; i <= n; i++) {
	    prod *= i; 
    }
    return prod;
  }
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number" ) {
    return null;
  } 
  else if (n <= 0) {
    return [];
  } 
  else {
    let myArray = [];
    for (let i = 1; i <= n; i++) {
      myArray.push(i);
    }
    return myArray;
  }
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  if (!Array.isArray(strings) || strings.length === 0) {
    return "";
  } else {
    let long = strings[0]
    for (let i = 0; i < strings.length; i++) {
      if (long.length < strings[i].length) {
        long = strings[i];
      }
    }
    return long
  }
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let present = 0;
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) { 
      present++;
    }
  }
  return present;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  }
  if (dna === "") {
    return "";
  }
  let complementaryStrand = "";
  for (let i = 0; i < dna.length; i++) {
    const nucleobase = dna[i];
    if (nucleobase === "A") {
      complementaryStrand += "T";
    } else if (nucleobase === "T") {
      complementaryStrand += "A";
    } else if (nucleobase === "C") {
      complementaryStrand += "G";
    } else if (nucleobase === "G") {
      complementaryStrand += "C";
    }
  }
  return complementaryStrand;
}
