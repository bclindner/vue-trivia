/**
 * @file Miscellaneous functions.
 * @author Brian Lindner <brian@bclindner.com>
 */

/**
 * Shuffle an array.
 * Essentially a bootleg implementation of the Fisher-Yates shuffle.
 * @param {Array} array - Array to shuffle.
 * @returns {Array} The shuffled array.
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @author Brian Lindner <brian@bclindner.com>
 */
export const shuffle = array => {
  let newArray = []
  while (array.length > 0) {
    let idx = Math.round(Math.random() * (array.length - 1))
    newArray.push(array[idx])
    array.splice(idx, 1)
  }
  return newArray
}
