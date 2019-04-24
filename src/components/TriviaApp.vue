<template>
  <div>
    <p>OpenTriviaDB</p>
    <ol v-if="status == 'READY'">
      <li class="trivia" v-for="trivia in trivias" :key="trivia.question">
        <p v-html="trivia.question"/>
        <ol type="A">
          <li class="correct answer" v-html="trivia.correct_answer"/>
          <li class="incorrect answer" v-for="answer in trivia.incorrect_answers" :key="answer" v-html="answer"/>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'trivia-app',
  data: () => ({
    // statuses: LOADING, FAILED, READY
    status: 'LOADING',
    trivias: []
  }),
  async mounted () {
    try {
      // Get trivia from the API and set it in our data
      const resp = await axios.get('https://opentdb.com/api.php?amount=10')
      this.trivias = resp.data.results
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
}
.correct {
  background-color: #3ee86b;
}
.incorrect {
  background-color: #e84c3e;
}
</style>
