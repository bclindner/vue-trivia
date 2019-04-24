<template>
  <div>
    <p>OpenTriviaDB</p>
    <p v-if="status == 'LOADING'">Loading trivia...</p>
    <p v-if="status == 'FAILED'">Failed to load trivia!</p>
    <ol v-if="status == 'READY'">
      <li class="trivia" v-for="trivia in triviaList" :key="trivia.question">
        <p v-html="trivia.question"/>
        <ol type="A">
          <li  v-for="answer in trivia.answers" :key="answer.text" >
            <div class="answer" :class="[answer.correct ? 'correct' : 'incorrect']" v-html="answer.text"/>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
import { getTrivia } from '../utils/opentriviadb'

export default {
  name: 'trivia-app',
  data: () => ({
    // statuses: LOADING, FAILED, READY
    status: 'LOADING',
    triviaList: [],
    currentTrivia: -1
  }),
  async mounted () {
    try {
      this.triviaList = await getTrivia(10)
      this.status = 'READY'
    } catch (err) {
      console.error(err)
      this.status = 'FAILED'
    }
  }
}
</script>

<style scoped>
.trivia {
  margin: 32px 0;
}
.answer {
  padding: 4px;
  margin: 4px;
  border-radius: 2px;
  color: white;
  max-width: 400px;
  text-align: center;
}
.correct {
  background-color: #3ee86b;
}
.incorrect {
  background-color: #e84c3e;
}
</style>
