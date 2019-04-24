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
 */
export const getTrivia = async (amount = 10) => {
  // Get trivia from the API and set it in our data
  const resp = await axios.get('https://opentdb.com/api.php', {
    params: { amount }
  })
  return resp.data.results.map(mapTrivia)
}
