import axios from 'axios'
import { shuffle } from './misc'

/**
 * Map the trivia objects from the OpenTriviaDB API answers, placing all
 * answers into an array and shuffling it.
 * @author Brian Lindner <brian@bclindner.com>
 */
const mapTrivia = trivia => ({
  ...trivia,
  answers: shuffle([
    answer(trivia.correct_answer, true),
    ...trivia.incorrect_answers.map(ica => answer(ica, false))
  ])
})

/**
 * Generate an answer object to be added to the answers array in the mapTrivia
 * function.
 * @author Brian Lindner <brian@bclindner.com>
 */
const answer = (text, correct) => ({
  text,
  correct
})

/**
 * Get trivia from the OpenTriviaDB API, mapping a bit to help with trivia display.
 * @param {Number} amount - Amount of trivia entries to get.
 * @param {String} token - Session token to use, if any.
 * @author Brian Lindner <brian@bclindner.com>
 */
export const getTrivia = async (amount = 10, token = '', category = '') => {
  // Get trivia from the API and set it in our data
  const resp = await axios.get('https://opentdb.com/api.php', {
    params: { amount, token, category }
  })
  return resp.data.results.map(mapTrivia)
}

/**
 * Get all categories in the OpenTDB API.
 * @returns {Array} An array of categories with id and name fields.
 * @author Brian Lindner <brian@bclindner.com>
 */
export const getCategories = async () => (await axios.get('https://opentdb.com/api_category.php')).data.trivia_categories

/**
 * Get a session token for use in the OpenTDB API.
 * @returns {String} A session token to use in getTrivia.
 * @author Brian Lindner <brian@bclindner.com>
 */
export const getSessionToken = async () => (await axios.get('https://opentdb.com/api_token.php?command=request')).data.token
