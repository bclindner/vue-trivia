<template>
  <div class="container">
    <h1>Trivia</h1>
    <p v-if="status == 'LOADING'">Loading trivia...</p>
    <p v-if="status == 'FAILED'">Failed to load trivia!</p>
    <div v-if="status == 'READY'">
      <span class="trivia" v-html="triviaList[currentTrivia].question"/>
      <ol class="answer-list" type="A">
        <li v-for="answer in triviaList[currentTrivia].answers" :key="answer.text">
          <div class="answer unknown" v-html="answer.text"/>
        </li>
      </ol>
    </div>
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
    currentTrivia: 0
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
.container {
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  background-color: #eee;
}

.answer-list {
  padding: 0 12px;
}
.answer {
  /* layout */
  padding: 4px;
  margin: 8px 0;
  width: 100%;
  /* behavior */
  cursor: pointer;
  user-select: none;
  /* style */
  border-radius: 2px;
  color: white;
  text-align: center;
}
.unknown {
  transition: 0.2s ease;
  background-color: #875fd7;
}
.unknown:hover {
  background-color: #9f70ff;
}
.correct {
  background-color: #3ee86b;
}
.incorrect {
  background-color: #e84c3e;
}
</style>
